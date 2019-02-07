// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://dog.ceo/api/breeds/image/random', true);

request.onload = function () {
  // Begin accessing JSON data here
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  console.log(data.message)
  document.getElementById("dog").src=data.message;
}

// Send request
request.send();
