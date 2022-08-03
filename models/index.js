const User = require('./User');
const Blog = require('./Blog');
const Homepage = require('./Homepage');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Homepage.hasMany(Blog, {
    foreignKey: 'homepage_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Homepage, {
    foreignKey: 'homepage_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = {
    User,
    Blog,
    Homepage,
    Comment
}