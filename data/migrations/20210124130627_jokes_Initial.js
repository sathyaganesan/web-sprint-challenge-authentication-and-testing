
exports.up = async function(knex) {
    await knex.schema.createTable("jokes", (table) => {
        table.increments("id")
        table.text("question").notNull().unique()
        table.text("answer").notNull()
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("jokes");
};
