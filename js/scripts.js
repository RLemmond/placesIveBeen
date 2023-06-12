let name;
let landmark;
let season;
let activities;
let form = document.querySelector('form');

console.log('loaded');

//User Logic:
function Place(name, landmark, season, activities) {
  this.name = name;
  this.landmark = landmark;
  this.season = season;
  this.activities = activities;
}

let places = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();
  //get the user input and store it in the variables
  name = document.getElementById('input-name').value;
  landmark = document.getElementById('input-landmark').value;
  season = document.getElementById('input-season').value;
  activities = document.getElementById('input-activities').value;

  // replace the <span> value
  document.getElementById('city-name').innerText = name;
  document.getElementById('city-landmark').innerText = landmark;
  document.getElementById('city-season').innerText = season;
  document.getElementById('city-activities').innerText = activities;

  let newPlace = new Place(name, landmark, season, activities);
  places.push(newPlace)
})

