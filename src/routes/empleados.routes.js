import { Router } from "express";
import { getEmpleados,createEmpleado,updateEmpleado, deleteEmpleado,getEmpleado } from "../controllers/empleados.controllers.js";
const router = Router()

router.get('/empleados',getEmpleados);

router.get('/empleados/:id',getEmpleado);

router.post('/empleados',createEmpleado);


router.patch('/empleados/:id', updateEmpleado);


router.delete('/empleados/:id', deleteEmpleado);

export default router;