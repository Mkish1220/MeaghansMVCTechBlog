const router = require('express').Router();
const { Blog } = require('../../models/blog');
const withAuth = require('../../utils/auth');
// route to create/add a dish using async/await
router.post('/', withAuth, async (req, res) => {
  try { 
    const blogData = await Blog.create({
    name: req.body.blog_name,
    description: req.body.description,
    comments: req.body.comments,
    user_id: req.body.user_id,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(blogData)
} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', withAuth, async (req, res) => {
    try {
      const blog = await Blog.update(
        {
          name: req.body.dish_name,
          description: req.body.description,
          comments: req.body.comments,
          user_id: req.body.user_id,
        },
        {
          where: {
            id: req.params.id,
          }
        }
      );
      res.status(200).json(dish);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      if (!blogData) {
        res.status(404).json({ message: 'No blogs found with this id!' });
        return;
      }

      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;


