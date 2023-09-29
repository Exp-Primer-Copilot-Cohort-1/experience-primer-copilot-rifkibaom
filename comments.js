// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const commentsController = require('../controllers/comments');

// Import middleware
const auth = require('../middleware/auth');

// Create routes
router.post('/', auth, commentsController.createComment);
router.get('/', auth, commentsController.getAllComments);
router.get('/:id', auth, commentsController.getOneComment);
router.put('/:id', auth, commentsController.modifyComment);
router.delete('/:id', auth, commentsController.deleteComment);

// Export module
module.exports = router;