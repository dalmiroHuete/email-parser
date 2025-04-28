
# Mail Parser

This project is a NestJs API that parses `.eml` email files to extract a JSON file, based on different possible locations inside the email.

It implements the **Chain of Responsibility pattern** to try multiple extraction strategies in a clean, scalable way . Please read more about this pattern here : https://refactoring.guru/design-patterns/chain-of-responsibility

---

## 🚀 Features

- 📂 Parse `.eml` files using `mailparser`.
- 📨 Extract JSON from:
  - Attachments inside the email.
  - Direct JSON links inside the email body.
  - Scrape web pages linked inside the email to find JSON links.
- 🧹 Clean project structure following single responsibility principle.
- 🛠 Extensible: easy to add new extraction strategies.
- 🔥 Built with NestJS and TypeScript.

---

## 🛠 Project Structure

```
src/
├── commons/
│   ├── constants/
│   │   └── constants.ts
│   └── utils/
│       ├── email-parser.util.ts
│       └── scraper.util.ts
├── core/
│   └── json-extraction/
│       ├── abstract/
│       │   └── abstract-extractor.ts
│       ├── extractors/
│       │   ├── attachment.extractor.ts
│       │   ├── body-link.extractor.ts
│       │   └── scraping.extractor.ts
│       └── interfaces/
│           ├── chainable.interface.ts
│           └── json-extractor.interface.ts
├── modules/
│   └── email/
│       ├── email.controller.ts
│       ├── email.module.ts
│       ├── email.service.ts
├── app.module.ts
├── main.ts
└── test/
```

---

## 🧩 How it Works

1. The controller receives a file path (`path`) pointing to an `.eml` file.
2. `EmailService` orchestrates the extraction logic.
3. The Chain of Responsibility is set:
    - First try to extract a JSON attachment.
    - Then try to find a direct JSON link inside the email body.
    - Finally, try to scrape any linked webpage to find a JSON link.
4. The first strategy that successfully retrieves a JSON is used.

---

## 🧪 Endpoints

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET`  | `/email/parse?path=<absolute_path_to_eml>` | Parses the email file and extracts the JSON content. |

Example:

```bash
GET http://localhost:3000/email/parse?path=/Users/yourname/Desktop/email-attachments/sample-email.eml
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourname/mail-parser.git
cd mail-parser
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run start:dev
```

---

## 📋 Notes

- **Current POC Limitations:**
  - The `BodyLinkExtractor` currently validates that the link comes specifically from `jsonplaceholder.typicode.com`.
  - In a real-world scenario, we should validate that the link explicitly ends with `.json` or verify its `Content-Type`.
- **Space Handling:**  
  Paths in the query string must encode spaces as `%20`.

---

## 📦 Example Files for Testing

You should prepare `.eml` files with these cases:

1. An email with a JSON file attached.
2. An email with a direct link to a JSON file in the body.
3. An email linking to a website that contains a link to a JSON file.

---

## 🧠 Tech Stack

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mailparser](https://nodemailer.com/extras/mailparser/)
- [Cheerio](https://cheerio.js.org/)
- [Axios](https://axios-http.com/)

---

## 📜 License

This project is a proof of concept.  
You are free to modify and use it according to your needs.

---
