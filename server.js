import express from 'express'
import { Liquid } from 'liquidjs';

const personID = 149
const personResponse = await fetch('https://fdnd.directus.app/items/person/' + personID)

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const personResponseJSON = await personResponse.json()
const customProp = JSON.parse(personResponseJSON.data.custom)

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

app.use(express.static('public'))

const engine = new Liquid();

app.engine('liquid', engine.express()); 
app.set('views', './views')
app.get('/', async function (request, response) {
   response.render('index.liquid', {person:personResponseJSON.data,custom: customProp})
})

app.get('/oefenen', async function (request, response) {
  // Render index.liquid uit de Views map en geef de opgehaalde data mee, in een variabele genaamd person
  response.render('oefenen.liquid', {person:personResponseJSON.data,custom: customProp})
})


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

