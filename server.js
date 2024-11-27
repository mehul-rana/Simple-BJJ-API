const express = require('express')
const app = express()
const PORT = 8000

const grapplers = {
  'craig jones':{
    'lineage': 'Alliance',
    'country': 'Australia',
    'signatureMove': 'Heel Hook',
    'team': 'B-Team'
  },
  'gordon ryan':{
    'lineage': 'Renzo Gracie',
    'country': 'America',
    'signatureMove': 'Sumi Gaeshi',
    'team': 'New Wave'
  },
  'bernardo faria':{
    'lineage': 'Alliance',
    'country': 'Brazil',
    'signatureMove': 'Over Under Pass',
    'team': 'Bernardo Faria'
  },
  'unkown grappler':{
    'lineage': 'Unkown',
    'country': 'Unkown',
    'signatureMove': 'Unkown',
    'team': 'Unkown'
  }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:grapplerName', (request, response) => {
  const grapplersName = request.params.grapplerName.toLowerCase();
  if(grapplers[grapplersName]){
    response.json(grapplers[grapplersName])
  }else{
    response.json(grapplers['Unkown Grappler'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on Port:${PORT}`)
})