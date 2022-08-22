const { Schema, model } = require("mongoose");
// const { format_date } = require("../utils/dateFormat");
const reactionSchema = require("./Reaction");
const moment = require("moment");

// Create Thoughts Model

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
            minLength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) =>
                moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


const Thought = model("Thoughts", thoughtSchema);
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});



module.exports = Thought;