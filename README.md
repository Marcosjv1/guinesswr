# Guinness World Records - Proyecto Fullstack

Proyecto web fullstack dividido en **/backend** y **/frontend** para gestionar récords Guinness.

## 1) Tecnologías

### Backend
- Node.js
- Express
- MongoDB Atlas + Mongoose
- dotenv
- cors
- nodemon

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (fetch API)

---

## 2) Estructura del proyecto

```bash
GuinnesWR/
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/recordController.js
│   │   ├── middlewares/errorHandler.js
│   │   ├── models/Record.js
│   │   ├── routes/recordRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── css/styles.css
│   ├── js/app.js
│   └── index.html
└── postman-examples.json
```

---

## 3) Configuración Backend

1. Ir al backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` basado en `.env.example`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/guinnesswr?retryWrites=true&w=majority
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

---

## 4) Endpoints CRUD

Base URL: `http://localhost:5000/api/records`

- `GET /api/records` -> Obtener todos los récords
- `GET /api/records/:id` -> Obtener récord por ID
- `POST /api/records` -> Crear récord
- `PUT /api/records/:id` -> Actualizar récord
- `DELETE /api/records/:id` -> Eliminar récord

Health:
- `GET /api/health`

---

## 5) Frontend

Abrir `frontend/index.html` con Live Server o servirlo con cualquier servidor estático.

La app:
- Muestra galería de récords consumiendo backend real.
- Incluye formulario para crear récords.
- Muestra indicador visual:
  **"Conectado exitosamente al Backend en Render"** si `/api/health` responde OK.

> Si despliegas backend en Render, cambia `API_BASE_URL` en `frontend/js/app.js` por la URL de Render.

---

## 6) Pruebas en Postman

Usa el archivo:
- `postman-examples.json`

Incluye ejemplos JSON para todos los endpoints (GET, POST, PUT, DELETE + health).

---

## 7) Despliegue en Render

### Backend
- Crear Web Service en Render conectando este repo.
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Variables de entorno:
  - `PORT`
  - `MONGODB_URI`

### Frontend
Opciones:
- Static Site en Render con root `frontend`
- O desplegar en Netlify/Vercel/GitHub Pages

Si frontend y backend están en dominios distintos, CORS ya está habilitado en backend.

---

## 8) Listo para GitHub

Sube el proyecto con:
```bash
git add .
git commit -m "feat: fullstack guinness world records app"
git push origin main
