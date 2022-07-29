const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const userData = require("./userData.json");
const BlogData = require("./blogData");
const CommentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Blog of blogData) {
    await Blog.create({
      ...Blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

//
// const sequelize = require("../config/connection");
// const { User, Blog, Comment } = require("../models");

// const userData = require("./userData");
// const BlogData = require("./blogData");
// // const CommentData = require("./commentData");

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await userData();

//   await BlogData();

//   process.exit(0);
// };

// seedAll();
