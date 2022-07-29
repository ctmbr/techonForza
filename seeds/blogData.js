const { Blog } = require("../models");

const blogData = [
  {
    title: "I, Bob",
    body: "I am Bob. King and Lord of All Bobs. Bob before me, bobs",
  },
  {
    title: "I, Tom",
    body: "Tom is the name, Tom is the game, and the name of the game is Tom",
  },
  {
    title: "I, Joe",
    body: "It's me Joe. Sloppy and average, with a sixpack and cotton eye.",
  },
];

const seedBlog = () => Gallery.bulkCreate(blogData);

module.exports = blogData;
