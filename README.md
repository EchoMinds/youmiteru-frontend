# youmiteru-frontend
Frontend for the youmiteru website.

<<<<<<< HEAD
## To run this application you should do next steps:
- Open a terminal
- run following commands:
  
  cd frontend

  npm install
  
  npm run dev
=======
## 🔧 Instalation:
### Before running website you should run backend here's the instruction:
1. Clone repository:
   ```bash
      git clone https://github.com/DJ-Java-Team/youmiteru-backend.git
   ```
2. Go to the project root and build docker-compose:
   ```bash
      docker-compose up --build
   ```
### Frontend
1. Clone repository:
   
    ```bash
    git clone -b develop https://github.com/DJ-Java-Team/youmiteru-frontend.git
    ```
2. Create `.env` file inside frontend directory and insert there base url to **api**:

   Insert **http://localhost:8020/api** as value for **VITE_BASE_API_URL**
3. Sign up on Ngrok if you haven't registered account yet: `https://dashboard.ngrok.com/signup`

   Rename `ngrok-example.dist` to `ngrok.yml` and configure it, **pay attention that you do not have to make quotes!**
5. Run docker-compose:
   ```bash
   docker-compose up --build   
   ```
>>>>>>> a65bfd8f26205b6d914f35cfebb1c24704da0f06
