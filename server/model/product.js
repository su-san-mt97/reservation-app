const mongoose = require('mongoose')

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
  // author: ObjectId,
  coverImage: String,
  name: { type: String, required: true, max:[60, '最大60文字までです'] },
  price: Number,
  description: { type: String, max:[256, '最大256文字までです'] },
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: { type: String, max:[256, '最大256文字までです'] },
  headingtext2: { type: String, max:[256, '最大256文字までです'] },
  headingtext3: { type: String, max:[256, '最大256文字までです'] },
})

module.exports = mongoose.model('Product', ProductSchema)
