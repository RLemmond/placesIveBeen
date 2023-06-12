let name;
let landmark;
let season;
let activities;

let form = document.querySelector('form');

console.log('loaded');

//Buisness Logic:
function Place(name, landmark, season, activities) {
  this.name = name;
  this.landmark = landmark;
  this.season = season;
  this.activities = activities;

}

let places = [];

//User Logic:
form.addEventListener('submit', function (event) {
  event.preventDefault();
  //get the user input and store it in the variables
  name = document.getElementById('input-name').value;
  landmark = document.getElementById('input-landmark').value;
  season = document.getElementById('input-season').value;
  activities = document.getElementById('input-activities').value;


  let newPlace = new Place(name, landmark, season, activities);
  places.push(newPlace)

  appendToDom(newPlace);

  name.innerText = null;
  landmark.innerText = null;
  season.innerText = null;
  activities.innerText = null;


});

function appendToDom(place) {
  let ul = document.createElement('ul')
  let li1 = document.createElement('li')
  li1.innerText = 'Name of City: ' + place.name;
  ul.append(li1);
  let li2 = document.createElement('li')
  li2.innerText = 'Landmark: ' + place.landmark;
  ul.append(li2);
  let li3 = document.createElement('li')
  li3.innerText = 'Season: ' + place.season;
  ul.append(li3);
  let li4 = document.createElement('li')
  li4.innerText = 'Activities: ' + place.activities;
  ul.append(li4);


  document.getElementById('output').append(ul);
  // document.getElementById('output').append(li2);
  // document.getElementById('output').append(li3);
  // document.getElementById('output').append(li4);
  // document.getElementById('output').append(li5);



  // document.getElementById('city-name').innerText = name;
  // document.getElementById('city-landmark').innerText = landmark;
  // document.getElementById('city-season').innerText = season;
  // document.getElementById('city-activities').innerText = activities;
}









//Richard's Testing Code(Notes) Please don't delete :)

/* function appendToDom(NewPlace){
  let ul = document.createElement('ul');

//Array of properties
  let properties = ['name', 'landmark', 'season', 'activities'];

//Loop through properties
  properties.forEach (prop => {
    let li = document.createElement('li');
    li.innerHTML = '${prop.charAt(0).toUpperCase() + prop.slice(1)}: ${NewPlace[prop]}';
    ul.append(li);
  })
    document.getElementById('output').append(ul);
} */


// function appendToDom(NewPlace){
// document.getElementById('output').innerHTML = '';
// let ul = document.createElement('ul')
// let li = document.createElement('li')

// li.innerHTML = 'Name: ${NewPlace.name} <br> Landmark: ${NewPlace.landmark} <br> Season: ${NewPlace.season} <br> Activities: ${NewPlace.activities} <br>'
// ul.append(li);
// document.getElementById('output').append(ul);