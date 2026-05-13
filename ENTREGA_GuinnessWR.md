## 1. Objetivo del sitio web
El proyecto **GuinnessWorldRecords (GuinnessWR)** es una aplicación web Full Stack orientada a registrar, consultar y gestionar récords extraordinarios de manera organizada.  
Su propósito principal es ofrecer una plataforma donde los usuarios puedan visualizar una galería de récords y registrar nuevos logros con información estructurada (título, poseedor, descripción, año e imagen).

---

## 2. Identificación de usuarios
Los usuarios principales del sistema son:

- **Visitantes generales:** consultan la galería de récords.
- **Usuarios registrados / administradores del sistema:** crean, editan y eliminan récords mediante operaciones CRUD.
- **Docente/evaluador:** valida funcionamiento técnico, estructura Full Stack y evidencias de desarrollo.

---

## 3. Estructura del sitio
La aplicación está organizada con una interfaz principal que incluye:

- **Navbar** con navegación a secciones.
- **Hero section** de presentación del proyecto.
- **Sección Galería de Récords** (visualización de registros).
- **Sección Nuevo Récord** con formulario.
- **Footer** informativo.
- **Sección de autenticación y contacto** (según componentes implementados en frontend React y rutas backend).

---

## 4. Diseño (mockup y responsividad)
Se emplea un diseño moderno y responsivo, con apoyo de **Bootstrap 5** y estilos personalizados en CSS.  
Se contemplan principios de UI/UX:

- Jerarquía visual clara.
- Componentes reutilizables.
- Adaptación a diferentes tamaños de pantalla.
- Navegación simple e intuitiva.

> **Evidencia a insertar en PDF:**  
> - Captura del mockup  
> - Capturas del diseño en vista escritorio y móvil

---

## 5. Contenido del sitio
El contenido principal consiste en:

- Catálogo de récords Guinness personalizados.
- Información detallada por récord:
  - título
  - poseedor
  - descripción
  - año
  - URL/imagen asociada
- Formularios para captura de datos.
- Secciones informativas y de interacción (contacto/autenticación).

---

## 6. Funcionalidad implementada
Funcionalidades clave del sistema:

- Visualizar récords registrados.
- Crear nuevos récords.
- Editar récords existentes.
- Eliminar récords.
- Formularios para envío/captura de información.
- Consumo de API REST para comunicación Frontend-Backend.
- Manejo de autenticación y rutas protegidas (según backend implementado).

---

## 7. Base de datos
Se utiliza una base de datos NoSQL con **MongoDB (Mongoose)** para persistencia de datos.

### Colecciones principales detectadas en el proyecto:
- `records`
- `users`
- `contacts`

### Esquema general (descripción):
- **Record:** datos del récord (título, poseedor, descripción, año, imagen, etc.).
- **User:** datos de autenticación/autorización.
- **Contact:** información enviada desde formularios de contacto.

> **Evidencia a insertar en PDF:**  
> - Captura del cluster o base en MongoDB Atlas  
> - Diagrama o esquema de colecciones

---

## 8. CRUD de colecciones
Se desarrolla CRUD sobre entidades principales (especialmente `records`):

- **Create:** registrar nuevo récord
- **Read:** consultar récords
- **Update:** editar récord existente
- **Delete:** eliminar récord

Además, existen endpoints para autenticación (`auth`) y contacto (`contact`) según la arquitectura backend.

---

## 9. Backend
Backend implementado con **Node.js + Express + Mongoose**.

### Estructura identificada:
- **Rutas:**  
  - `backend/src/routes/recordRoutes.js`  
  - `backend/src/routes/authRoutes.js`  
  - `backend/src/routes/contactRoutes.js`
- **Controladores:**  
  - `backend/src/controllers/recordController.js`  
  - `backend/src/controllers/authController.js`  
  - `backend/src/controllers/contactController.js`
- **Modelos:**  
  - `backend/src/models/Record.js`  
  - `backend/src/models/User.js`  
  - `backend/src/models/Contact.js`
- **Middlewares:**  
  - `backend/src/middlewares/authMiddleware.js`  
  - `backend/src/middlewares/errorHandler.js`
- **Configuración:**  
  - `backend/src/config/db.js`  
  - scripts de mantenimiento/seed en `backend/src/config/*`
- **Variables de entorno:** configuradas para conexión y secretos (según `.env` local del proyecto).

---

## 10. Frontend
En el proyecto actual se identifica frontend con:

- **HTML5 + CSS + JavaScript** (carpeta `frontend/`)
  - `frontend/index.html`
  - `frontend/css/styles.css`
  - `frontend/js/app.js`
- y además componentes en **React** en otra carpeta de frontend (`GuinnesWR-frontend`) visibles en el entorno.

### Tecnologías de interfaz observadas:
- Bootstrap 5
- CSS personalizado
- JavaScript para interacción y consumo de API
- React (componentes abiertos en editor: `ContactForm.jsx`, `AuthForm.jsx`, etc.)

---

## 11. Pruebas
Se realizaron/consideran pruebas en entorno local para validar:

- Carga del frontend.
- Conexión con backend.
- Operaciones CRUD en récords.
- Formularios y navegación.
- Endpoints con Postman/cURL (según evidencia local).

> **Evidencia a insertar en PDF:**  
> - Capturas de pruebas exitosas (frontend y API)  
> - Capturas de respuestas JSON y operaciones CRUD

---

## 12. Lanzamiento y mantenimiento
El sistema corre en entorno local para fines académicos.  
Se considera mantenimiento continuo para:

- corrección de errores
- mejora de UI
- optimización de validaciones
- limpieza de datos y scripts de seed

---

## 13. Dominio y hosting
Aunque la ejecución del proyecto es local, se incluye evidencia solicitada de cotización/compra de dominio y hosting.

> **Evidencia a insertar en PDF:**  
> - Captura de pantalla de compra/cotización de dominio  
> - Captura de pantalla de compra/cotización de hosting

---

## 14. Repositorios GitHub
La consigna pide dos repositorios públicos separados:

- Repositorio de **Frontend**: `[PEGAR_ENLACE_FRONTEND]`
- Repositorio de **Backend**: `[PEGAR_ENLACE_BACKEND]`

> Nota: no se localizaron enlaces confiables de tus repos en los archivos del proyecto actual sin ruido de `node_modules`; por eso dejo placeholders para que pegues los URLs correctos.

---

## 15. Evidencias de funcionamiento (para la presentación)
Incluir en el PDF:

1. Captura de pantalla de la app corriendo en local.
2. Capturas de alta, consulta, edición y eliminación de récords.
3. Capturas de endpoints en Postman/cURL.
4. Capturas de los repos públicos (frontend/backend).
5. Capturas de hosting/dominio.
6. Capturas del mockup y diseño final.

---

## Tecnologías usadas en este proyecto (resumen final)
- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, (React en frontend alterno observado)
- **Backend:** Node.js, Express
- **Base de datos:** MongoDB con Mongoose
- **Pruebas:** Postman / cURL (local)
- **Control de versiones:** Git + GitHub
