🎓 Final UTN Diplomatura FullStack
En este proyecto se presenta una API Rest que administra un CRUD de los siguientes modelos:

👤 User
📦 Product
🗂️ Category
🚀 Tecnologías
El proyecto está desarrollado utilizando las siguientes tecnologías:

Node.js
Express.js
MongoDB con Mongoose
jsonwebtoken
bcrypt
dotenv
🛠️ Cómo usar el proyecto
1️⃣ Clonar el repositorio
Clona el repositorio en tu máquina local:

git clone https://github.com/AgusVera00/TpFinalApiRestCRUD.git
2️⃣ Acceder a la carpeta raíz e instalar las dependencias
Navega a la carpeta del proyecto e instala las dependencias:

cd TpFinalApiRestCRUD
npm install
3️⃣ Configurar variables de entorno
Asegúrate de que el archivo .env del proyecto esté configurado con las credenciales correctas para conectar a MongoDB. Un ejemplo del archivo .env podría ser:

MONGO_URI=mongodb://localhost:27017/DB-NAME
JWT_SECRET=SECRET
PORT=3000
4️⃣ Levantar la base de datos
Abre MongoDB Compass u otra herramienta para gestionar MongoDB. Conéctate a tu instancia de MongoDB y verifica que la base de datos mencionada en el .env esté accesible.

➡️ Correr el proyecto
Ejecuta el siguiente comando para iniciar el servidor:

npm run dev
📡 Endpoints
👤 User
GET: /api/user/get
POST: /api/user/create
DELETE: /api/user/delete/:id
PUT: /api/user/update/:id
📦 Product
GET: /api/product/get
POST: /api/product/create
DELETE: /api/product/delete/:id
PUT: /api/product/update/:id
🗂️ Category
GET: /api/category/get
POST: /api/category/create
DELETE: /api/category/delete/:id
PUT: /api/category/update/:id
📦 Ejemplos de uso (MOCK)
👤 User
Para probar la creación de un usuario con POST /api/user/create, puedes usar los siguientes ejemplos:

{
    "name": "Guido",
    "lastname": "Solano",
    "email": "guisolano@gmail.com",
    "password": "Abcde12345",
    "roles": "user"
}
{
    "name": "Maria",
    "lastname": "Gutierrez",
    "email": "mari_gutierrez",
    "password": "Qwerty1234",
    "roles": "admin"
}
📦 Product
Para probar la creación de un producto con POST /api/product/create, puedes usar los siguientes ejemplos:

{
    "name": "Ojotas Hawaianas",
    "description": "Ojotas de colores variados en talle 38, 39, 40, 41 y 42",
    "price": "6000",
    "stock": "100",
    "status": "AVAILABLE"
}
{
    "name": "Zapatillas Addidas",
    "description": "Zapatillas Addidas de colores variados en talle 38, 39, 40, 41 y 42",
    "price": "20000",
    "stock": "100",
    "status": "AVAILABLE"
}
{
    "name": "Remera Mujer",
    "description": "Remera lisa en colores variados, escote en V y en los talles S, M, L y XL",
    "price": "5000",
    "stock": "100",
    "status": "AVAILABLE"
}
{
    "name": "Remera Hombre",
    "description": "Remera lisa en colores variados, escote en V y en los talles S, M, L y XL",
    "price": "5000",
    "stock": "100",
    "status": "AVAILABLE"
}
🗂️ Category
Para probar la creación de una categoría con POST /api/category/create, puedes usar los siguientes ejemplos:

{
    "name": "Calzados",
    "description": "Los mejores calzados unisex con muchas variedades en talles y colores"
}
{
    "name": "Remeras",
    "description": "Remeras para hombre y mujer con muchas variedades en talles y colores"
}
🧪 Comandos para probar la aplicación
Iniciar el servidor
Para iniciar el servidor, ejecuta el siguiente comando:

npm run dev
Probar los endpoints
Usa herramientas como Postman o cualquier otro cliente para enviar solicitudes a los endpoints listados anteriormente. Por ejemplo, para obtener todos los usuarios, utiliza la siguiente URL:

http://localhost:3000/api/user/get
Probar datos mock
Envía los ejemplos de datos JSON mencionados anteriormente en el cuerpo de las solicitudes POST.

🤝 Contribuciones
Si deseas contribuir a este proyecto, no dudes en abrir un issue o enviar un pull request. ¡Tu ayuda es bienvenida! 🚀

¡Gracias por tu interés en este proyecto! 🎉