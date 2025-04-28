// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// Creamos manualmente el contenido del .eml
const emlContent = `
From: test@example.com
To: you@example.com
Subject: Test Email with JSON Attachment
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="simple-boundary"

--simple-boundary
Content-Type: text/plain; charset=utf-8

Hello! This email has a JSON file attached.

--simple-boundary
Content-Type: application/json; name="test-data.json"
Content-Disposition: attachment; filename="test-data.json"
Content-Transfer-Encoding: base64

${Buffer.from(JSON.stringify({ message: "Hello World", id: 123 })).toString('base64')}

--simple-boundary--
`;

async function generateEml() {
  const emlPath = path.resolve(__dirname, 'attachment-test.eml');
  fs.writeFileSync(emlPath, emlContent.trim());
  console.log(`✅ Email with attachment generated at: ${emlPath}`);
}

generateEml().catch(console.error);
