const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  getUsers,
} = require('../../controllers/user-controller');

router.route('/').post(createUser);
router.route('/:id').get(getSingleUser);
router.route('/:username').get(getSingleUser);
router.route('/me').get(getSingleUser);

module.exports = router;
