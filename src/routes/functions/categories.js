const app = require("../../lib/express");

app.get("/categories/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Apresentadores",
      photo: "",
    },

    {
      id: 2,
      name: "Atores",
      photo: "../../images/eventos/nba.png",
    },
    {
      id: 3,
      name: "Músicos",
      photo: "",
    },
    {
      id: 4,
      name: "Esportistas",
      photo: "../../images/eventos/nba.png",
    },
    {
      id: 5,
      name: "Lutadores",
      photo: "",
    },
    {
      id: 6,
      name: "Influencers",
      photo: "../../images/eventos/nba.png",
    },
    {
      id: 7,
      name: "Fitness",
      photo: "",
    },
    {
      id: 8,
      name: "Instagramers",
      photo: "../../images/eventos/nba.png",
    },
    {
      id: 9,
      name: "Youtubers",
      photo: "",
    },
  ]);
});
