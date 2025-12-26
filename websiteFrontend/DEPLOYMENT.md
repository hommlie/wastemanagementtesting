# Ecosphere Website Deployment Guide (Static Site)

Since we are not using a custom backend or VPS, the deployment process is very simple.

## 1. Get a Web3Forms Access Key
- Go to [web3forms.com](https://web3forms.com/).
- Enter your email (`solutions@hommlie.com`) and click **Create Access Key**.
- You will receive a key via email.

## 2. Update Environment Variables (DONE)
- I have already added your key to `.env.production`:
  ```
  VITE_WEB3FORMS_ACCESS_KEY=89a06c53-2e98-4045-a49c-9a0578894cc7
  ```

## 3. Build the Website
- Run the build command in your terminal:
  ```bash
  npm run build
  ```
- This will create a `dist` folder.

## 4. Upload to Hostinger
- Log in to your Hostinger hPanel.
- Go to **File Manager** -> **public_html**.
- Upload the **contents** of the `dist` folder into `public_html`.
- **Note**: You do NOT need to upload the `server` folder or the `src` folder.

## 5. Verify
- Visit `https://www.ecospherewm.com`.
- Fill out the "Request a Callback" form and submit.
- The email will be sent directly to your inbox via Web3Forms.

---

### Why Web3Forms?
- **No Backend Needed**: You don't need to manage Node.js, PM2, or Nginx.
- **Reliable**: Uses professional email delivery services.
- **Direct**: Submissions go straight to your email.
