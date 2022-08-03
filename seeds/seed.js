const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const blogs = await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });
   for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  seedDatabase();
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${blogs.length} blogs`);

  
}

  process.exit(0);


