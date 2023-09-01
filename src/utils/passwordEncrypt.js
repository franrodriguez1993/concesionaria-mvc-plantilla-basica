const { hash } = require("bcryptjs");

async function passwordEncrypt(password) {
  return await hash(password, 8);
}

module.exports = { passwordEncrypt };
