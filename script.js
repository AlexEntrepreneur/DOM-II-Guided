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


//====== Current Target vs Target ======//
// target is the element directly interacted with (can change)
// currentTarget is the element that is listening for the event (doesn’t change)




//====== Event Propagation ======//






//====== Prevent Default ======//






//====== More Event Practice! ======//