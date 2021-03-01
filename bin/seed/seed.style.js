require("./../../config/mongo");
const mongoose = require("mongoose")

const styles = [
    { name: 'Hip-hop', color : "default" , wikiURL: ""},
    { name: 'Jazz', color : "default" , wikiURL: ""},
  ];

  const StyleModel = require("./../../model/Style");

  StyleModel.insertMany(styles)
  .then((styledoc) => {
    console.log(styledoc);
  })
  .catch((error) => {
    console.log(error);
  });