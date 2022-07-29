const { User } = require("../models");

const blogData = [
  {
    name: "Bob",
    email: "Bob@bob.com",
    password: "bob123bob",
  },
  {
    name: "Tom",
    email: "tom@tom.com",
    password: "tom456tom",
  },
  {
    name: "Joe",
    email: "Joe@joe.com",
    password: "joe789joe",
  },
];

const seedUser = () => Gallery.bulkCreate(blogData);

module.exports = blogData;
