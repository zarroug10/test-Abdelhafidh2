const express = require('express')
const route = express.Router()
// prepare appareil REST API (GET, POST, PUT, DELETE)
posts = [
  { '_id': "g456", 'titre': "louay", 'contenu': "midfilder" },
  { '_id': "r478", 'titre': "sami", 'status': "attacker" },
  { '_id': "b785", 'titre': "raed", 'status': "goalkeeper" },
  { '_id': "t459", 'titre': "oussama", 'status': "deffender" },
]
// GET
route.get("/", (req, res) => {
  res.status(200).json(posts)
})

// GET/:id
route.get("/:id", (req, res) => {

  Post = posts.find((e) => {
    return e._id == req.params.id
  })

  if (Post == undefined) {
    res.status(404).json({'message': 'appareil not found!'})
  }
  else {
    res.status(200).json(Post)
  }
})
// POST
route.post('/', (req, res) => {
  posts.push(req.body)
  res.status(201).json(posts)
})
//PUT
route.put('/:id', (req, res) => {
  const _id = req.params.id;
  const updatedItem = req.body;
  res.json(updatedItem);
});
//Delete
route.delete('/:id', (req, res) => {
  const id = String(req.params.id);
  const itemIndex = posts.findIndex(post => post._id === id);
  if (itemIndex === -1) {
    return res.status(404).send({ message: 'Item not found' });
  }
  posts.splice(itemIndex, 1);
  return res.status(204).send();
});
module.exports = route
