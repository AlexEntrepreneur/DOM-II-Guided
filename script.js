//====== Event Listeners ======//
document.addEventListener('click', event => {
  console.log('💥 Detected a click! 💥', event);
});

// document.addEventListener('mousemove', event => {
//   console.log('💥 Mouse Moved! 💥', `position: [${event.clientX}, ${event.clientY}]`);
// });

const workBtn = document.querySelector('.lambda-button');
console.log(workBtn.querySelector('span'));


workBtn.addEventListener('click', e => {
  console.log('Work button fired a click event!');
});

// Alison
const imgClick = document.querySelectorAll("img");

console.log(imgClick);

imgClick[1].addEventListener("click",e=>{
  console.log("Image was clicked");

});

//====== Current Target vs Target ======//
// target is the element directly interacted with (can change)
// currentTarget is the element that is listening for the event (doesn’t change)




//====== Event Propagation ======//
const workList = document.querySelector('.work-list');

// workList.addEventListener('click', e => {
//   console.log('Work list triggered a click event');
//   console.log('This event will not bubble up.');
//   e.stopImmediatePropagation();
// });
workList.addEventListener('click', e => {
  console.log('Work list triggered a click event AGAIN');
  console.log('This event will not bubble up.');
  e.stopPropagation();
});





//====== Prevent Default ======//
const form = document.querySelector('form');

form.addEventListener('submit', event => {
  console.log('💥 Form Detected Submit! 💥');

  // Stops the original behaviour of HTML elements
  // In this scenario, it stops the form from refreshing the page on submit
  event.preventDefault();

  console.dir(`First Name: ${event.target[0].value}`);
  console.dir(`Last Name: ${event.target[1].value}`);
});

// Amin
const home = document.querySelector('nav a');

home.addEventListener('click', e => {
  console.log('Do not go anywhere!');
  event.preventDefault();
  event.stopPropagation();

  // Redirecting the link to a different URL
  // window.location = "https://google.com"
});





//====== More Event Practice! ======//