const knex = require("knex");
const { config } = require("../config/configDB");

class FacturacionModel {
  constructor() {
    this.knexDB = knex(config.db);
    this.tableName = "facturaciones";
  }

  /**  LISTAR TODOS LOS REGISTROS  **/

  async listAll() {
    try {
      return await this.knexDB
        .from(this.tableName)
        .select("*")
        .orderBy("id", "asc");
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
        .where({ id_facturacion: id });
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

  async update(id, obj) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .where({ id_facturacion: id })
        .update(obj);
    } catch (error) {
      throw error;
    }
  }

  /**  ELIMINAR UN REGISTRO  **/

  async delete(id) {
    try {
      return await this.knexDB
        .from(this.tableName)
        .where({ id_facturacion: id })
        .del();
    } catch (error) {
      throw error;
    }
  }
}

const facturacionModel = new FacturacionModel();

module.exports = { facturacionModel };
