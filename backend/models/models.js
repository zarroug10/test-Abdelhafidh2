const mongoose = require('mongoose')

const PostlSchema = mongoose.Schema(
  {
    titre : {type: String, required: true},
    contenu : {type: String, required: true}
  }
)
mongoose.models = {};
module.exports = mongoose.model.theposts || mongoose.model('theposts', PostlSchema)