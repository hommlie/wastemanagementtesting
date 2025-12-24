const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Create transporter using Gmail SMTP (uses app password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_APP_PASSWORD || process.env.EMAIL_PASSWORD,
  },
});

app.post('/send-email', async (req, res) => {
  try {
    const data = req.body || {};

    // Build a human-readable HTML body from all fields in the request
    const rows = Object.entries(data)
      .map(([k, v]) => {
        const key = escapeHtml(k.replace(/([A-Z])/g, ' $1').replace(/_/g, ' '));
        const val = Array.isArray(v) ? escapeHtml(v.join(', ')) : escapeHtml(v);
        return `<tr><td style="padding:6px 12px;border:1px solid #ddd;font-weight:600">${key}</td><td style="padding:6px 12px;border:1px solid #ddd">${val}</td></tr>`;
      })
      .join('');

    const subject = data.subject || data.name
      ? `New submission from ${escapeHtml(data.name || data.email || 'website')}`
      : 'New website submission';

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject,
      html: `
        <h2>${escapeHtml(subject)}</h2>
        <table style="border-collapse:collapse;border:1px solid #ddd;">${rows}</table>
        <hr />
        <p>Sent from website contact form.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

app.listen(PORT, () => {
  console.log(`Email server listening on http://localhost:${PORT}`);
});
