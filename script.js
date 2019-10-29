//====== Event Listeners ======//
// document.addEventListener('mousemove', event => {
//   console.log('💥 Mouse Moved! 💥', `position: [${event.clientX}, ${event.clientY}]`);
// });

// document.addEventListener('click', event => {
//   console.log('💥 Detected A Click! 💥', event.target);
// });

const workBtn = document.querySelector('.lambda-button');

workBtn.addEventListener('click', function (event) {
  // Make sure your click event is firing
  console.log(`Work button fired a click event!`);
});

const firstNameInput = document.querySelector('.first-name');
firstNameInput.addEventListener('keydown', function (event) {
  console.log(`Input detected keypress: `, event.key);
});

//====== Current Target vs Target ======//
const siteContainer = document.querySelector('.container');

siteContainer.addEventListener('click', function (event) {
  // target is the element directly interacted with (can change)
  console.log(`Target:`, event.target);
  // currentTarget is the element that is listening for the event (doesn’t change)
  console.log(`Current target:`, event.currentTarget);
  
  // event.target.style.visibility = 'hidden';
});
 
//====== Event Propagation ======//
const workList = document.querySelector('.work-list');

workList.addEventListener('click', function (event) {
  // Make sure your click event is firing
  console.log(`Work list triggered a click event!`);
  console.log(`This event will not bubble up!`);
  event.stopPropagation();
});


//====== Prevent Default ======//
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  console.log(`💥 Form: Detected Submit! 💥`);

  // Stops the original behaviour of HTML elements
  // In this scenario, it stops form from refreshing page on submit
  event.preventDefault();

  // Grabbing value from the form input element
  console.log('First Name: ', event.target[0].value);
  console.log('Last Name: ', event.target[1].value);
});





//====== More Event Practice! ======//