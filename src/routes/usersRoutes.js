const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');

router.post('/', controller.addUser);
 router.get('/', controller.getAllUsers);
// router.get('/:user_id', controller.getUserById);
router.put('/:user_id', controller.updateUser);


module.exports = router;