const mongoose=require("mongoose")
const slug=require("slug")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const course = new Schema({
  name: String,
  description: String,
  image: String,
  slug: {type: String, slug: 'name', unique: true}
});

module.exports=mongoose.model("courses", course)