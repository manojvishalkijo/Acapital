const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const BASE_URL = 'http://localhost:5000';

app.use(cors());
app.use(bodyParser.json());

const EXCEL_FILE = path.join(__dirname, 'leads.xlsx');

// Ensure Excel exists or create it
const initExcel = () => {
    if (!fs.existsSync(EXCEL_FILE)) {
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet([]);
        xlsx.utils.book_append_sheet(wb, ws, 'Leads');
        xlsx.writeFile(wb, EXCEL_FILE);
    }
};

initExcel();

// DOWNLOAD ENDPOINT
app.get('/api/download-leads', (req, res) => {
    if (fs.existsSync(EXCEL_FILE)) {
        res.download(EXCEL_FILE, 'ACapital_Leads.xlsx');
    } else {
        res.status(404).json({ success: false, message: 'Leads file not found' });
    }
});

app.post('/api/apply', (req, res) => {
    try {
        const { fullName, phone, email, loanAmount, monthlyIncome, employmentType, city, loanTitle, purpose } = req.body;

        // Priority & Classification Logic
        const amount = Number(loanAmount);
        let priority = 'Cool';
        if (amount >= 2000000) priority = 'Hot (High Value)';
        else if (amount >= 500000) priority = 'Warm (Quality)';

        let classification = 'Retail';
        if (amount >= 5000000) classification = 'Premier';
        else if (loanTitle && (loanTitle.toLowerCase().includes('business') || loanTitle.toLowerCase().includes('mortgage')))
            classification = 'Enterprise';

        // Load workbook
        const wb = xlsx.readFile(EXCEL_FILE);
        const ws = wb.Sheets['Leads'];
        const data = xlsx.utils.sheet_to_json(ws);

        // Add new lead
        const newLead = {
            'Timestamp': new Date().toISOString().replace('T', ' ').substring(0, 19),
            'Loan Type': loanTitle || 'Not specified',
            'Full Name': fullName,
            'Phone': phone,
            'Email': email,
            'Loan Amount': `Rs. ${amount.toLocaleString('en-IN')}`,
            'Priority': priority,
            'Class': classification,
            'Monthly Income': monthlyIncome,
            'Employment': employmentType,
            'City': city,
            'Purpose/Notes': purpose || 'None'
        };

        data.push(newLead);

        // Update workbook
        const newWs = xlsx.utils.json_to_sheet(data);
        wb.Sheets['Leads'] = newWs;
        xlsx.writeFile(wb, EXCEL_FILE);

        // Logic for WhatsApp (Returning a shareable link)
        const recipientNumber = '919942888304'; // User should change this
        const downloadLink = `${BASE_URL}/api/download-leads`;

        const messageText = `LOAN APPLICATION [NEW]
--------------------------
PRIORITY: ${priority}
CLASS: ${classification}

CUSTOMER DETAILS:
Name: ${fullName}
Phone: ${phone}
City: ${city}
Loan: ${loanTitle}
Amount: ${amount}

Report: ${downloadLink}
Time: ${newLead.Timestamp}`;

        const whatsappLink = `https://wa.me/${recipientNumber}?text=${encodeURIComponent(messageText)}`;

        console.log(`[INFO] Lead saved for: ${fullName}. [${priority}] [${classification}]`);

        res.status(200).json({
            success: true,
            message: 'Application saved to Excel successfully!',
            whatsappLink: whatsappLink
        });
    } catch (error) {
        console.error('❌ Error saving to Excel:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`[SERVER] Backend running on http://localhost:${PORT}`);
});
