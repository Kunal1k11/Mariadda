const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      text: true
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      text: true,
      unique: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
    },
    cover: {
      type: String,
      trim: true
    },
    gender: {
      type: String,
      required: [true, "gender is required"]
    },
    bYear: {
      type: Number,
      trim: true
    },
    bMonth: {
      type: Number,
      trim: true
    },
    bDay: {
      type: Number,
      trim: true
    },
    friends: {
      type: Array,
      default: []
    },
    following: {
      type: Array,
      default: []
    },
    followers: {
      type: Array,
      default: []
    },
    requests: {
      type: Array,
      default: []
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User"
        }
      }
    ],
    details: {
      bio: {
        type: String
      },
      othername: {
        type: String
      },
      job: {
        type: String
      },
      workplace: {
        type: String
      },
      highSchool: {
        type: String
      },
      college: {
        type: String
      },
      currentCity: {
        type: String
      },
      homeTown: {
        type: String
      },
      relationship: {
        type: String,
        enum: ["Single", "In a relationship", "Married", "Divorced"]
      }
    },
    savedPosts: [
      {
        post: {
          type: ObjectId,
          ref: "Post"
        },
        saveAt: {
          type: Date,
          default: new Date()
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
