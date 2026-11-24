# Mehul Thakor — Modular Node.js Portfolio

## Included Files
- `.env` — Environment variables (`PORT`, `OWNER_NAME`, `OWNER_EMAIL`, `OWNER_PHONE`)
- `server.js` — Main Express entry point using `dotenv`
- `config/portfolioData.js` — Portfolio & resume content
- `routes/portfolioRoutes.js` — Express routes
- `controllers/portfolioController.js` — Rendering, PDF download & contact form handlers
- `views/` — Modular EJS templates (`index.ejs`, `partials/header.ejs`, `partials/footer.ejs`)
- `public/` — CSS, JS, and `resume/MEHUL_RESUME.pdf`

## Run Locally
```bash
npm install
npm start
```
Open `http://localhost:3000`
