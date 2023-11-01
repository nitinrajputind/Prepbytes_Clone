const { default: mongoose } = require("mongoose");

const ProjectSchema = mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  topics1: {
    type: String,
  },
  topics2: {
    type: String,
  },
  topics3: {
    type: String,
  },
  topics4: {
    type: String,
  },
  topics5: {
    type: String,
  },
  topics6: {
    type: String,
  },
  topics7: {
    type: String,
  },
  topics8: {
    type: String,
  },
  topics9: {
    type: String,
  },
  topics10: {
    type: String,
  },
  definition: {
    type: String,
  },
  detail1: {
    type: String,
  },
  detail2: {
    type: String,
  },
  detail3: {
    type: String,
  },
  detail4: {
    type: String,
  },
  detail5: {
    type: String,
  },
  detail6: {
    type: String,
  },
  detail7: {
    type: String,
  },
  detail8: {
    type: String,
  },
  detail9: {
    type: String,
  },
  detail10: {
    type: String,
  },
});


module.exports = mongoose.model("PROJECT", ProjectSchema)
