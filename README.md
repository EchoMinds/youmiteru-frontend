# youmiteru-frontend
Frontend for the youmiteru website.

## 🔧 Instalation:
1. Clone repository:
   
    ```bash
    git clone -b develop https://github.com/DJ-Java-Team/youmiteru-frontend.git
    ```
2. Create `.env` file:
   ```bash
   cd frontend
   ```
   Insert **http://localhost:3000** as value for **VITE_BASE_API_URL**
3. Sign up on Ngrok if you haven't registered account yet: `https://dashboard.ngrok.com/signup`

   Rename `ngrok-example.dist` to `ngrok.yml` and configure it, **pay attention that you do not have to make quotes!**
5. Run docker-compose:
   ```bash
   docker-compose up --build   
   ```
