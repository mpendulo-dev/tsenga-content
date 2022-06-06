module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://tsenga-content.herokuapp.com/"),
  app: {
    keys: [
      "nAMUlTADx9FJkYZVpdtqbg==",
      "5sWmv/mJ1i2P1uuKUqKRxg==",
      "OxkEkP4zkP4k4Eg4KGeD9g==",
      "CYtndTpPJHgdjBFxO0niNQ==",
    ],
  },
  apiToken: {
    salt: "WanoToOmG4HA4uiVUoBd4Q",
  },
  auth: {
    secret: "GMi2G6oCB0Y0yt1ebCXICA",
  },
});
