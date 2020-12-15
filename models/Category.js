const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    status: {
        stye: String,
        default:"created",
    },
    description: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
  h },
    updatedDate:{
        type: Date
    },
    deletedDate:{
        type: Date
    }
});

module.exports = Category = mongoose.model("Category", schema)