require("./../../config/mongo");
const mongoose = require("mongoose")

const labels = [
    { name: 'Third man records', city : "Nashville" , country: "USA", street: "", streetNumber:12 , zipcode:"", logo: "default"},
    { name: 'Warp', city : "London" , country: "UK", street: "", streetNumber:666 , zipcode:"", logo: "default"},
  ];

  const LabelModel = require("./../../model/Label");

  LabelModel.insertMany(labels)
  .then((labeldoc) => {
    console.log(labeldoc);
  })
  .catch((error) => {
    console.log(error);
  });