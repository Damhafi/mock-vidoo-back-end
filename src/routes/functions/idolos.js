// IMPORTS
const app = require("../../lib/express");
const idols = require('../constants/idolos');
const avaliations = require('../constants/avaliations');
const users = require('../constants/users');

app.get("/idolos/listAll", (req, res) => {
  res.json(idols);
});

app.get("/idolos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const idol = idols.find(idol => idol.id === id);
  const rated = avaliations.filter(avaliation => avaliation.idolId === id);
  const average = rated.reduce((acc, curr) => acc + curr.rated, 0) / rated.length;
    

  const response = {
    ...idol,
    average,
    avaliations: avaliations.filter(avaliation => avaliation.idolId === id).map(
      avaliation =>{
        return {
          ...avaliation,
          user: users.find(user => user.id === avaliation.userId)
        }
      }
    )
  }

  if (!idol) {
    res.status(404).json({ error: "Idol not found" });
  } else {
    res.json(response);
  }
});
