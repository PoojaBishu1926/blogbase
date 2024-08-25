const db = require('../config/database');

// Fetch all posts
exports.getAllPosts = (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) {
      console.error('Error fetching posts:', err);
      return res.status(500).send('Server error');
    }
    res.render('posts/index', { posts: results }); // Make sure 'posts/index.pug' exists and is correctly set up
  });
};

// Fetch a single post by ID
exports.getPostById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM posts WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error fetching post:', err);
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.render('posts/show', { post: results[0] }); // Make sure 'posts/show.pug' exists and is correctly set up
  });
};
