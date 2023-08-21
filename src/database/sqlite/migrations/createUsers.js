const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    cpf INTEGER PRIMARY KEY,
    name VARCHAR,
    data_nascimento TEXT
  )

`;

module.exports = createUsers