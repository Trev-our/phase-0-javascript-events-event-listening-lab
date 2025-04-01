function addingEventListener() {
    const input = document.getElementById('button');  // Grab the button element
    input.addEventListener('click', function() {      // Listen for the 'click' event
      alert('I was clicked!');
    });
  }
  addingEventListener();  // Call the function to activate the event listener
  function clickAlert() {
    alert('I was clicked!');
  }
  
  function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
  }
  addingEventListener();
