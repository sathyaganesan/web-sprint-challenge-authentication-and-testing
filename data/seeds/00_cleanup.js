
exports.seed = async function(knex) {
  await knex("jokes").truncate();
};
