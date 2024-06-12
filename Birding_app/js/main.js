// ! On page load
//document.querySelector('button').addEventListener('click', getFetch)

// ! API request
// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.nasa.gov/planetary/apod?api_key=iJy0Nd4wZZzfW2HFgBkNV4DDUsZ6PxL3RqQRgFfI&date=${choice}`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
      
//         //document.querySelector('h3').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "{{4dfs9lo85v2i}}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.ebird.org/v2/data/nearest/geo/recent/{{speciesCode}}
, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));