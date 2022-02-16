var pool = require('./db');

async function getNovedades(){
    var query="select * from novedades";
    var rows = await pool.query(query);
    return rows;
}

async function getAgregar(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// borra la linea de novedad por ID
async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}
// para traer los datos ha modificar
async function traerNovedadById(id) {
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}
// para modificar los datos

async function modificarNovedadById(obj, id) {
    try{
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, getAgregar, deleteNovedadesById, traerNovedadById, modificarNovedadById }