import  express from "express";
import empleadosRoutes from "./routes/empleados.routes.js";
import indexRoutes from "./routes/index.routes.js";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// MIDLEWARES
app.use(express.json());
app.use(express.static(path.join(__dirname,'./public')))

// RUTAS
app.use('/api/',empleadosRoutes);
app.use('/api/',indexRoutes);

app.get('*',(req,res) => {
    res.sendFile(__dirname + '/public/404.html');
})

export default app;