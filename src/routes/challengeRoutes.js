const express = require('express');
const router = express.Router();

const controller = require('../controllers/challengeController');

router.post('/:challenge_id', controller.computePoints, controller.completeChallenge);


module.exports = router;