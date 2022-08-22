const { Schema, model } = require('mongoose');

//creating User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
// using a custom regex string for email validation
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
// * Array of `_id` values referencing the `Thought` model
        thoughts: [{
            type: Schema.Types.ObjectId,

            ref: "Thought",
        }],
        friends: [{
            type: Schema.Types.ObjectId,

            ref: "User",
        }],

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;