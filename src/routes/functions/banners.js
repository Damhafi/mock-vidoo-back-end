const app = require("../../lib/express");

app.get("/banner", (req, res) => {
  res.json([
    {
      id: 1,
      image:
        "https://media.fashionnetwork.com/m/0d2f/313d/73c9/143a/6875/d46e/d976/bb81/2b1d/b017/b017.jpg",
      name: "BradPitt",
    },
    {
      id: 2,
      image:
        "https://www.estrelando.com.br/uploads/2019/06/08/neymar--1560008887.jpg",
      name: "Neymar",
    },
    {
      id: 3,
      image:
        "https://s2.glbimg.com/z59Bh0nFgaMkrQnUptiwymqkGEY=/620x413/e.glbimg.com/og/ed/f/original/2021/10/07/244740018_596083281577851_9172714247223739268_n.jpg",
      name: "Byonce",
    },
  ]);
});
