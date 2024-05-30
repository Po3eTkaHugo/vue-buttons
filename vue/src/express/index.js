const index = require('express');
const app = index();
const port = 3000;
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
app.use(index.json());

const bigCardData = [
  {
    title: "Explore the sights of the Azores",
    description: "A place where nature and adventure unite",
    image: "https://klike.net/uploads/posts/2019-11/1574605311_20.jpeg"
  },
  {
    title: "Explore open spaces",
    description: "Feel the peace of being alone",
    image: "https://gas-kvas.com/grafic/uploads/posts/2023-10/1696576815_gas-kvas-com-p-kartinki-ravnina-33.jpg"
  },
  {
    title: "Explore desert worlds",
    description: "Feel the warmth of the sand on yourself",
    image: "https://laplaya-rus.ru/wp-content/uploads/7/d/e/7deadb56f4c2973de147aded05c03e88.jpeg"
  }
];
const smallCardData = [
  {
    title: "Near the shore of the strait",
    price: 100,
    rating: '5.0',
    image: "https://travel-dom.ru/wp-content/uploads/2019/07/iStock-645374604.jpg"
  },
  {
    title: "Alone with nature",
    price: 150,
    rating: '5.0',
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Lonely_Planet.jpg"
  },
  {
    title: "Walk through the mountain savannah",
    price: 135,
    rating: '4.9',
    image: "https://mebellka.ru/wp-content/uploads/b/7/5/b7568bf35260cb115edbad2cf0f0bd25.jpeg"
  },
  {
    title: "Kayaking on a mountain river",
    price: 80,
    rating: '4.4',
    image: "https://i.pinimg.com/originals/59/e0/9b/59e09b2791980e268d38ef3694be3a6e.jpg"
  },
  {
    title: "The mountains are calling",
    price: 85,
    rating: '4.9',
    image: "https://i.pinimg.com/originals/14/49/f5/1449f501d15e8f7ac7adf4fa54763786.jpg"
  },
  {
    title: "Mountain health trail",
    price: 50,
    rating: '4.8',
    image: "https://www.rollingstone.com/wp-content/uploads/2020/01/AdobeStock_117789390.jpeg"
  },
  {
    title: "Mountain Lake",
    price: 90,
    rating: '4.9',
    image: "https://i.pinimg.com/originals/9d/6f/35/9d6f3573d5cda94f04a759e2b3ff7d6e.jpg"
  },
  {
    title: "Desert Caravan",
    price: 150,
    rating: '4.3',
    image: "https://moroccotouring.com/wp-content/uploads/2019/03/desert-tour-3-day-main.jpg"
  },
  {
    title: "Mystical stone pillars",
    price: 125,
    rating: '5.0',
    image: "https://supersnimki.ru/images/pub/2021/08/07/e957d6c8-f728-11eb-a3f5-c9c4d3922d68_original.jpg?971152"
  }
];

app.get('/bigCardData', (req, res) => {
  return res.json(bigCardData);
});

app.get('/smallCardData', (req, res) => {
  if (req.query && req.query.title) {
    return res.json(smallCardData.filter(card => card.title.toLowerCase().includes(req.query.title.toLowerCase())))
  }
  return res.json(smallCardData);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})