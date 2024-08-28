// Function to change the text content of a div
function changeContent() {
  const contentDiv = document.getElementById('content');
  contentDiv.textContent = 'The button was clicked! Content has been changed.';
}

// Add an event listener to the button to trigger the changeContent function
document.getElementById('change-text').addEventListener('click', changeContent);

// Log a message to the console to confirm that the script is running
console.log(
  'JavaScript is working! The page has loaded and scripts are running.'
);
