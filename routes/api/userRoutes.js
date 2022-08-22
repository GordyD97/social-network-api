const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users
// http://localhost:8080/api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// http://localhost:8080/api/users/:id
router.route('/:userId').get(getSingleUser);



router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
// http://localhost:8080/api/users/:id/friends/:friendId

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;