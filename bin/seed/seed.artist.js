require("./../../config/mongo");
const mongoose = require("mongoose")

const artists = [
    { name: 'Bill Evans', isBand : false, description: "Jazz piano god", picture: "default"},
    { name: 'Faith Evans', isBand : false, description: "voice of an angel", picture: "default"},
    { name: "Slum Village", isBand : true, description: "Dilla, baatin & T3 ", picture: "default"},
  ];

  const ArtistModel = require("./../../model/Artist");

  ArtistModel.insertMany(artists)
  .then((artistdoc) => {
    console.log(artistdoc);
  })
  .catch((error) => {
    console.log(error);
  });
