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

})

function appendToDom() {
  places.forEach(function (place) {
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.append(place);
    document.getElementById('output').append(li);
  })

  document.getElementById('city-name').innerText = name;
  document.getElementById('city-landmark').innerText = landmark;
  document.getElementById('city-season').innerText = season;
  document.getElementById('city-activities').innerText = activities;
}








//Richard's Code Please don't delete :)
// function appendToDom(NewPlace){
// document.getElementById('output').innerHTML = '';
// let ul = document.createElement('ul')
// let li = document.createElement('li')

// li.innerHTML = 'Name: ${NewPlace.name} <br> Landmark: ${NewPlace.landmark} <br> Season: ${NewPlace.season} <br> Activities: ${NewPlace.activities} <br>'
// ul.append(li);
// document.getElementById('output').append(ul);