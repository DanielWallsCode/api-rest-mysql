import { pool } from '../db.js';


export const getEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM empleados');
        res.json({
            rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo salio mal :('
        })
    }
}

export const getEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);

        if (rows.length <= 0) {
            return res.status(404).json({
                msg: `El empleado con el id ${id} no existe`
            });
        }

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo salio mal :('
        })
    }
}

export const createEmpleado = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query('INSERT INTO empleados (name,salary) VALUES (?,?) ', [name, salary]);
        res.json({
            id: rows.insertId,
            name,
            salary
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo salio mal :('
        })
    }
}

export const deleteEmpleado = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [id]);

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            })
        }

        res.json({
            msg: `el empleado con el id ${id} ha sido borrado`,
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo salio mal :('
        })
    }
}

export const updateEmpleado = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try {

        const [result] = await pool.query('UPDATE empleados SET name = IFNULL(?,name) , salary = IFNULL(?,salary) WHERE id = ? ', [name, salary, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                msg: `El empleado con id ${id} no existe`
            })
        }

        const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);

        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({
            msg: 'Algo salio mal :('
        })
    }
}