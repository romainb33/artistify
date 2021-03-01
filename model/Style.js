const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the hacker document should like like, before database insertion
const styleModel = new Schema({
  name: {
    type: String,
    unique: true,
  },
  color: {
    type: String,
    default: "#000",
  },

  wikiURL: String,
});

// // use the schema (the plan) to generate a model
// // the model will grant you access to a bunch a methods
// // to ... C.R.U.D !!!
const StyleModel = mongoose.model("style", styleModel);
// // just above : the first argument is the collection name id db
// // the seconde arg is the scheam / plan / shape of upcoming documents

module.exports = StyleModel;
