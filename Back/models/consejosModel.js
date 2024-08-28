var pool = require('./basededatos');

async function getConsejos() {
    var query = 'select * from consejos';
    var rows = await pool.query(query);
    return rows;    
}

///agregar
async function insertarConsejo(obj){
    try {
        var query = 'insert into consejos set ?';
        var rows = await pool.query(query, [obj])
        return rows    
    } catch {
        console.log(error);
        throw error;
    }
}

//eliminar
async function deleteConsejoById(id){
        var query = 'delete from consejos where id=?';
        var rows = await pool.query(query, [id])
        return rows      
}

//modificar
async function getConsejoById(id) {
    var query = 'select * from consejos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows [0];    
}

//para modificar
async function modificarConsejoById(obj, id) {
    try{
    var query = 'update consejos set ? where id = ?';
    var rows = await pool.query(query, [obj , id]);
    return rows;
    } catch (error){
        throw error;
    }    
}

module.exports = {getConsejos, insertarConsejo, deleteConsejoById, getConsejoById, modificarConsejoById};