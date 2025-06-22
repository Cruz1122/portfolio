import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

const mainStyle = {
    backgroundColor: '#0a0a0a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
    padding: '20px 0',
};

const containerStyle = {
    backgroundColor: '#171717',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #27272a',
    maxWidth: '600px',
};

const headingStyle = {
    color: '#fafafa',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1.4',
};

const textStyle = {
    color: '#a1a1aa',
    fontSize: '16px',
    lineHeight: '1.6',
};

const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'underline',
};

const hrStyle = {
    borderColor: '#27272a',
    margin: '20px 0',
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
    <div style={mainStyle}>
        <div style={containerStyle}>
            <h1 style={headingStyle}>New Message from Portfolio</h1>

            <p style={textStyle}>
                You have received a new message from <strong>{name}</strong>.
            </p>

            <hr style={hrStyle} />

            <h2 style={{ ...headingStyle, fontSize: '20px' }}>Message Details:</h2>

            <ul style={{ ...textStyle, paddingLeft: '20px' }}>
                <li><strong>Sender's Name:</strong> {name}</li>
                <li>
                    <strong>Sender's Email:</strong> <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
                </li>
            </ul>

            <hr style={hrStyle} />

            <h2 style={{ ...headingStyle, fontSize: '20px' }}>Message:</h2>
            <p style={textStyle}>{message}</p>

            <hr style={hrStyle} />

            <p style={{ ...textStyle, fontSize: '12px', textAlign: 'center' }}>
                This email was sent from the contact form on your portfolio website.
            </p>
        </div>
    </div>
);