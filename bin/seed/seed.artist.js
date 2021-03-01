require("./../../config/mongo");
const mongoose = require("mongoose")

const artists = [
    { name: 'Bill Evans', isBand : false, descritpion: "Jazz piano god", picture: "default"},
    { name: 'Faith Evans', isBand : false, descritpion: "voice of an angel", picture: "default"},
    { name: "Slum Village", isBand : true, descritpion: "Dilla, baatin & T3 ", picture: "default"},
  ];

  const ArtistModel = require("./../../model/Artist");

  ArtistModel.insertMany(artists)
  .then((artistdoc) => {
    console.log(artistdoc);
  })
  .catch((error) => {
    console.log(error);
  });
