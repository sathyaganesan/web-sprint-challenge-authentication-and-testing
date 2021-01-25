// do not make changes to this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/auth.db3' },
    seeds: { directory: './data/seeds' },
  },

  // testing:{
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './tests/test.db3',
  //   },
  //   useNullAsDefault: true,
  //   migrations: { directory: "./tests/migrations"},
  //   seeds: { directory: "./tests/seeds"},
  // },

  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
