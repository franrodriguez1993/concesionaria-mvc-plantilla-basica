const knex = require("knex");
const { config } = require("../config/configDB");

class MensajeModel {
  constructor() {
    this.knexDB = knex(config.db);
    this.tableName = "mensajes";
  }

  /**  LISTAR TODOS LOS REGISTROS  **/

  async listAll() {
    try {
      return await this.knexDB
        .from(this.tableName)
        .select("*")
        .where({ visto: false })
        .orderBy("id_mensaje", "asc");
    } catch (error) {
      throw error;
    }
  }

  /**  OBTENER UNO POR ID  **/

  async getById(id) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .select("*")
        .where({ id_mensaje: id });
    } catch (error) {
      throw error;
    }
  }

  /**  GUARDAR UN REGISTRO  **/

  async save(obj) {
    try {
      return await this.knexDB(this.tableName).insert(obj);
    } catch (error) {
      throw error;
    }
  }

  /**  ACTUALIZAR UN REGISTRO  **/

  async seenMessage(id) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .where({ id_mensaje: id })
        .update({ visto: true });
    } catch (error) {
      throw error;
    }
  }

  /**  ELIMINAR UN REGISTRO  **/

  async delete(id) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .where({ id_mensaje: id })
        .del();
    } catch (error) {
      throw error;
    }
  }
}

const mensajeModel = new MensajeModel();

module.exports = { mensajeModel };
