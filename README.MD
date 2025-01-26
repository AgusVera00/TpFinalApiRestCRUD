<h1 class="code-line" data-line-start=1 data-line-end=2 ><a id="_Final_UTN_Diplomatura_FullStack_1"></a>🎓 Final UTN Diplomatura FullStack</h1>
<p class="has-line-data" data-line-start="3" data-line-end="4">En este proyecto se presenta una <strong>API Rest</strong> que administra un <strong>CRUD</strong> de los siguientes modelos:</p>
<ul>
<li class="has-line-data" data-line-start="5" data-line-end="6">👤 <strong>User</strong></li>
<li class="has-line-data" data-line-start="6" data-line-end="7">📦 <strong>Product</strong></li>
<li class="has-line-data" data-line-start="7" data-line-end="9">🗂️ <strong>Category</strong></li>
</ul>
<h2 class="code-line" data-line-start=9 data-line-end=10 ><a id="_Tecnologas_9"></a>🚀 Tecnologías</h2>
<p class="has-line-data" data-line-start="11" data-line-end="12">El proyecto está desarrollado utilizando las siguientes tecnologías:</p>
<ul>
<li class="has-line-data" data-line-start="13" data-line-end="14"><strong>Node.js</strong></li>
<li class="has-line-data" data-line-start="14" data-line-end="15"><strong>Express.js</strong></li>
<li class="has-line-data" data-line-start="15" data-line-end="16"><strong>MongoDB</strong> con Mongoose</li>
<li class="has-line-data" data-line-start="16" data-line-end="17"><strong>jsonwebtoken</strong></li>
<li class="has-line-data" data-line-start="17" data-line-end="18"><strong>bcrypt</strong></li>
<li class="has-line-data" data-line-start="18" data-line-end="20"><strong>dotenv</strong></li>
</ul>
<h2 class="code-line" data-line-start=20 data-line-end=21 ><a id="_Cmo_usar_el_proyecto_20"></a>🛠️ Cómo usar el proyecto</h2>
<h3 class="code-line" data-line-start=22 data-line-end=23 ><a id="1_Clonar_el_repositorio_22"></a>1️⃣ Clonar el repositorio</h3>
<p class="has-line-data" data-line-start="24" data-line-end="25">Clona el repositorio en tu máquina local:</p>
<pre><code class="has-line-data" data-line-start="27" data-line-end="29" class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/AgusVera00/TpFinalApiRestCRUD.git
</code></pre>
<h3 class="code-line" data-line-start=30 data-line-end=31 ><a id="2_Acceder_a_la_carpeta_raz_e_instalar_las_dependencias_30"></a>2️⃣ Acceder a la carpeta raíz e instalar las dependencias</h3>
<p class="has-line-data" data-line-start="32" data-line-end="33">Navega a la carpeta del proyecto e instala las dependencias:</p>
<pre><code class="has-line-data" data-line-start="35" data-line-end="38" class="language-bash"><span class="hljs-built_in">cd</span> TpFinalApiRestCRUD
npm install
</code></pre>
<h3 class="code-line" data-line-start=39 data-line-end=40 ><a id="3_Configurar_variables_de_entorno_39"></a>3️⃣ Configurar variables de entorno</h3>
<p class="has-line-data" data-line-start="41" data-line-end="42">Asegúrate de que el archivo <code>.env</code> del proyecto esté configurado con las credenciales correctas para conectar a MongoDB. Un ejemplo del archivo <code>.env</code> podría ser:</p>
<pre><code class="has-line-data" data-line-start="44" data-line-end="48">MONGO_URI=mongodb://localhost:27017/DB-NAME
JWT_SECRET=SECRET
PORT=3000
</code></pre>
<h3 class="code-line" data-line-start=49 data-line-end=50 ><a id="4_Levantar_la_base_de_datos_49"></a>4️⃣ Levantar la base de datos</h3>
<p class="has-line-data" data-line-start="51" data-line-end="52">Abre <strong>MongoDB Compass</strong> u otra herramienta para gestionar MongoDB. Conéctate a tu instancia de MongoDB y verifica que la base de datos mencionada en el <code>.env</code> esté accesible.</p>
<h3 class="code-line" data-line-start=53 data-line-end=54 ><a id="_Correr_el_proyecto_53"></a>➡️ Correr el proyecto</h3>
<p class="has-line-data" data-line-start="55" data-line-end="56">Ejecuta el siguiente comando para iniciar el servidor:</p>
<pre><code class="has-line-data" data-line-start="58" data-line-end="60" class="language-bash">npm run dev
</code></pre>
<h2 class="code-line" data-line-start=61 data-line-end=62 ><a id="_Endpoints_61"></a>📡 Endpoints</h2>
<h3 class="code-line" data-line-start=63 data-line-end=64 ><a id="_User_63"></a>👤 User</h3>
<ul>
<li class="has-line-data" data-line-start="65" data-line-end="66"><strong>GET</strong>: <code>/api/user/get</code></li>
<li class="has-line-data" data-line-start="66" data-line-end="67"><strong>POST</strong>: <code>/api/user/create</code></li>
<li class="has-line-data" data-line-start="67" data-line-end="68"><strong>DELETE</strong>: <code>/api/user/delete/:id</code></li>
<li class="has-line-data" data-line-start="68" data-line-end="70"><strong>PUT</strong>: <code>/api/user/update/:id</code></li>
</ul>
<h3 class="code-line" data-line-start=70 data-line-end=71 ><a id="_Product_70"></a>📦 Product</h3>
<ul>
<li class="has-line-data" data-line-start="72" data-line-end="73"><strong>GET</strong>: <code>/api/product/get</code></li>
<li class="has-line-data" data-line-start="73" data-line-end="74"><strong>POST</strong>: <code>/api/product/create</code></li>
<li class="has-line-data" data-line-start="74" data-line-end="75"><strong>DELETE</strong>: <code>/api/product/delete/:id</code></li>
<li class="has-line-data" data-line-start="75" data-line-end="77"><strong>PUT</strong>: <code>/api/product/update/:id</code></li>
</ul>
<h3 class="code-line" data-line-start=77 data-line-end=78 ><a id="_Category_77"></a>🗂️ Category</h3>
<ul>
<li class="has-line-data" data-line-start="79" data-line-end="80"><strong>GET</strong>: <code>/api/category/get</code></li>
<li class="has-line-data" data-line-start="80" data-line-end="81"><strong>POST</strong>: <code>/api/category/create</code></li>
<li class="has-line-data" data-line-start="81" data-line-end="82"><strong>DELETE</strong>: <code>/api/category/delete/:id</code></li>
<li class="has-line-data" data-line-start="82" data-line-end="84"><strong>PUT</strong>: <code>/api/category/update/:id</code></li>
</ul>
<h2 class="code-line" data-line-start=84 data-line-end=85 ><a id="_Ejemplos_de_uso_MOCK_84"></a>📦 Ejemplos de uso (MOCK)</h2>
<h3 class="code-line" data-line-start=86 data-line-end=87 ><a id="_User_86"></a>👤 User</h3>
<p class="has-line-data" data-line-start="88" data-line-end="89">Para probar la creación de un usuario con <strong>POST /api/user/create</strong>, puedes usar los siguientes ejemplos:</p>
<pre><code class="has-line-data" data-line-start="91" data-line-end="99" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Guido"</span></span>,
    "<span class="hljs-attribute">lastname</span>": <span class="hljs-value"><span class="hljs-string">"Solano"</span></span>,
    "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"guisolano@gmail.com"</span></span>,
    "<span class="hljs-attribute">password</span>": <span class="hljs-value"><span class="hljs-string">"Abcde12345"</span></span>,
    "<span class="hljs-attribute">roles</span>": <span class="hljs-value"><span class="hljs-string">"user"</span>
</span>}
</code></pre>
<pre><code class="has-line-data" data-line-start="101" data-line-end="109" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Maria"</span></span>,
    "<span class="hljs-attribute">lastname</span>": <span class="hljs-value"><span class="hljs-string">"Gutierrez"</span></span>,
    "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"mari_gutierrez"</span></span>,
    "<span class="hljs-attribute">password</span>": <span class="hljs-value"><span class="hljs-string">"Qwerty1234"</span></span>,
    "<span class="hljs-attribute">roles</span>": <span class="hljs-value"><span class="hljs-string">"admin"</span>
</span>}
</code></pre>
<h3 class="code-line" data-line-start=110 data-line-end=111 ><a id="_Product_110"></a>📦 Product</h3>
<p class="has-line-data" data-line-start="112" data-line-end="113">Para probar la creación de un producto con <strong>POST /api/product/create</strong>, puedes usar los siguientes ejemplos:</p>
<pre><code class="has-line-data" data-line-start="115" data-line-end="123" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Ojotas Hawaianas"</span></span>,
    "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Ojotas de colores variados en talle 38, 39, 40, 41 y 42"</span></span>,
    "<span class="hljs-attribute">price</span>": <span class="hljs-value"><span class="hljs-string">"6000"</span></span>,
    "<span class="hljs-attribute">stock</span>": <span class="hljs-value"><span class="hljs-string">"100"</span></span>,
    "<span class="hljs-attribute">status</span>": <span class="hljs-value"><span class="hljs-string">"AVAILABLE"</span>
</span>}
</code></pre>
<pre><code class="has-line-data" data-line-start="125" data-line-end="133" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Zapatillas Addidas"</span></span>,
    "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Zapatillas Addidas de colores variados en talle 38, 39, 40, 41 y 42"</span></span>,
    "<span class="hljs-attribute">price</span>": <span class="hljs-value"><span class="hljs-string">"20000"</span></span>,
    "<span class="hljs-attribute">stock</span>": <span class="hljs-value"><span class="hljs-string">"100"</span></span>,
    "<span class="hljs-attribute">status</span>": <span class="hljs-value"><span class="hljs-string">"AVAILABLE"</span>
</span>}
</code></pre>
<pre><code class="has-line-data" data-line-start="135" data-line-end="143" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Remera Mujer"</span></span>,
    "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Remera lisa en colores variados, escote en V y en los talles S, M, L y XL"</span></span>,
    "<span class="hljs-attribute">price</span>": <span class="hljs-value"><span class="hljs-string">"5000"</span></span>,
    "<span class="hljs-attribute">stock</span>": <span class="hljs-value"><span class="hljs-string">"100"</span></span>,
    "<span class="hljs-attribute">status</span>": <span class="hljs-value"><span class="hljs-string">"AVAILABLE"</span>
</span>}
</code></pre>
<pre><code class="has-line-data" data-line-start="145" data-line-end="153" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Remera Hombre"</span></span>,
    "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Remera lisa en colores variados, escote en V y en los talles S, M, L y XL"</span></span>,
    "<span class="hljs-attribute">price</span>": <span class="hljs-value"><span class="hljs-string">"5000"</span></span>,
    "<span class="hljs-attribute">stock</span>": <span class="hljs-value"><span class="hljs-string">"100"</span></span>,
    "<span class="hljs-attribute">status</span>": <span class="hljs-value"><span class="hljs-string">"AVAILABLE"</span>
</span>}
</code></pre>
<h3 class="code-line" data-line-start=154 data-line-end=155 ><a id="_Category_154"></a>🗂️ Category</h3>
<p class="has-line-data" data-line-start="156" data-line-end="157">Para probar la creación de una categoría con <strong>POST /api/category/create</strong>, puedes usar los siguientes ejemplos:</p>
<pre><code class="has-line-data" data-line-start="159" data-line-end="164" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Calzados"</span></span>,
    "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Los mejores calzados unisex con muchas variedades en talles y colores"</span>
</span>}
</code></pre>
<pre><code class="has-line-data" data-line-start="166" data-line-end="171" class="language-json">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Remeras"</span></span>,
    "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"Remeras para hombre y mujer con muchas variedades en talles y colores"</span>
</span>}
</code></pre>
<h2 class="code-line" data-line-start=172 data-line-end=173 ><a id="_Comandos_para_probar_la_aplicacin_172"></a>🧪 Comandos para probar la aplicación</h2>
<h3 class="code-line" data-line-start=174 data-line-end=175 ><a id="Iniciar_el_servidor_174"></a>Iniciar el servidor</h3>
<p class="has-line-data" data-line-start="176" data-line-end="177">Para iniciar el servidor, ejecuta el siguiente comando:</p>
<pre><code class="has-line-data" data-line-start="179" data-line-end="181" class="language-bash">npm run dev
</code></pre>
<h3 class="code-line" data-line-start=182 data-line-end=183 ><a id="Probar_los_endpoints_182"></a>Probar los endpoints</h3>
<p class="has-line-data" data-line-start="184" data-line-end="185">Usa herramientas como <strong>Postman</strong> o cualquier otro cliente para enviar solicitudes a los endpoints listados anteriormente. Por ejemplo, para obtener todos los usuarios, utiliza la siguiente URL:</p>
<pre><code class="has-line-data" data-line-start="187" data-line-end="189">http://localhost:3000/api/user/get
</code></pre>
<h3 class="code-line" data-line-start=190 data-line-end=191 ><a id="Probar_datos_mock_190"></a>Probar datos mock</h3>
<p class="has-line-data" data-line-start="192" data-line-end="193">Envía los ejemplos de datos JSON mencionados anteriormente en el cuerpo de las solicitudes <strong>POST</strong>.</p>
<h2 class="code-line" data-line-start=194 data-line-end=195 ><a id="_Contribuciones_194"></a>🤝 Contribuciones</h2>
<p class="has-line-data" data-line-start="196" data-line-end="197">Si deseas contribuir a este proyecto, no dudes en abrir un <em>issue</em> o enviar un <em>pull request</em>. ¡Tu ayuda es bienvenida! 🚀</p>
<hr>
<p class="has-line-data" data-line-start="200" data-line-end="201">¡Gracias por tu interés en este proyecto! 🎉</p>