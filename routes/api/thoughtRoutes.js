const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
// http://localhost:8080/api/thoughts

router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// http://localhost:8080/api/thoughts/id

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// http://localhost:8080/api/thoughts/:id/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtsId/tags/:tagId
// http://localhost:8080/api/thoughts/:id/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)


module.exports = router;