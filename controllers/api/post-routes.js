const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// GET ALL POSTS
router.get('/', async (req, res) => {
  Post.findAll({
      attributes: ['id', 'title', 'content', 'created_at'],
      include: [
          {
              model: User,
              attributes: ['username']
          },
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          }
      ]
  })
  // Reverse the order of the posts so that the newest ones appear first
  .then(postData => res.json(postData.toReversed())) 
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// GET POST BY ID
router.get('/:id', (req, res) => {
  Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: ['id', 'content', 'title', 'created_at'],
      include: [
          {
              model: User,
              attributes: ['username']
          },
          {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          }
      ]
  })
  // Then send  the Json responds with the post data
  .then(postData => {
      if (!postData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      res.json(postData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});
// CREATE POST
router.post('/', withAuth, (req, res) => {
  Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
  })
  .then(postData => res.json(postData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});
// UPDATE POST
router.put('/:id', withAuth,async (req, res) => {
  Post.update({
      title: req.body.title,
      content: req.body.content
  }, {
      where: {
          id: req.params.id
      }
  }).then(postData => {
      if (!postData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      res.json(postData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// DELETE POST by ID
router.delete('/:id', withAuth,(req, res) => {
  Post.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(postData => {
      if (!postData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      res.json(postData);
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

module.exports = router; // export the router object so we can use it in other files



