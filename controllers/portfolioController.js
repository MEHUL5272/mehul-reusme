const path = require('path');
const fs = require('fs');
const portfolioData = require('../config/portfolioData');

// Render Home Page
exports.getHomePage = (req, res) => {
    res.render('index', {
        data: portfolioData,
        currentYear: new Date().getFullYear()
    });
};

// Handle Resume PDF Download
exports.downloadResume = (req, res) => {
    const resumePath = path.join(__dirname, '..', 'public', 'resume', 'MEHUL_RESUME.pdf');
    
    if (fs.existsSync(resumePath)) {
        res.download(resumePath, 'Mehul_Thakor_Resume.pdf', (err) => {
            if (err) {
                console.error('Download error:', err);
                res.status(500).send('Error downloading resume.');
            }
        });
    } else {
        res.status(404).send('Resume PDF not found in public/resume/MEHUL_RESUME.pdf');
    }
};

// Handle Contact Form Submission (AJAX / JSON response)
exports.submitContact = (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    console.log('New Portfolio Inquiry:', { name, email, message });
    return res.json({
        success: true,
        message: `Thank you ${name}! Your message has been received by Mehul.`
    });
};
