
exports.seed = async function(knex) {
  await knex("jokes").insert([
   {question: "What did the left eye say to the right eye?", answer: "Between us, something smells!"},
   {question: " Why did the teddy bear say no to dessert?", answer: "Because she was stuffed."},
   {question: "Why did the student eat his homework?", answer: "Because the teacher told him it was a piece of cake!"},
   {question: " What is a witch’s favorite subject in school?", answer: "Spelling!"},
   {question: " What kind of water cannot freeze?", answer: "Hot water."},
   {question: "What kind of tree fits in your hand?", answer: "A palm tree!"},
   {question: "How do you talk to a giant?", answer: "Use big words!"},
   {question: "What falls in winter but never gets hurt?", answer: "Snow!"},
   {question: "How do we know that the ocean is friendly?", answer: "It waves!"},
 ])
};
