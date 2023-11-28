const express = require('express'); 
const app = express();
const petData = require('./data');
//intialize new project creat express server

app.get('/', (req, res) => {
  res.send(`hello world`)
});

app.get('/api/v1/pets/owner', (req, res) => {
  const {owner} = req.query;
  //{owner: 'john}
  const filtered = data.filter(
    (pet) => pet.owner.toLowerCase() === owner.toLowerCase()
  );
  res.send(filtered)
});
//?owner=john

app.get('/api/v1/pets', (req, res) => {
  const petName = petData.map((pet) => pet.name);
  res.send(petName);
})


app.get('/api/v1/pets/:name', (req, res) => {
//create a variable that will find a pet by their pet name
const petName = req.params.name;
const foundPet = petData.find((pet) => pet.name === petName);
res.send(foundPet)
})

//create get endpoints that link to data.js

const PORT = 8081
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
}); // create port for app to listen to