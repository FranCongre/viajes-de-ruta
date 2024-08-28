var pool = require('./basededatos');

async function getExperiencias() {
    var query = 'select * from experiencias';
    var rows = await pool.query(query);
    return rows;    
}

///agregar
async function insertarExperiencias(obj){
    try {
        var query = 'insert into experiencias set ?';
        var rows = await pool.query(query, [obj])
        return rows    
    } catch {
        console.log(error);
        throw error;
    }
}

//eliminar
async function deleteExperienciasById(id){
        var query = 'delete from experiencias where id=?';
        var rows = await pool.query(query, [id])
        return rows      
}

//modificar
async function getExperienciasById(id) {
    var query = 'select * from experiencias where id = ?';
    var rows = await pool.query(query, [id]);
    return rows [0];    
}

//para modificar
async function modificarExperienciasById(obj, id) {
    try{
    var query = 'update experiencias set ? where id = ?';
    var rows = await pool.query(query, [obj , id]);
    return rows;
    } catch (error){
        throw error;
    }    
}

module.exports = {getExperiencias, insertarExperiencias, deleteExperienciasById, getExperienciasById, modificarExperienciasById};