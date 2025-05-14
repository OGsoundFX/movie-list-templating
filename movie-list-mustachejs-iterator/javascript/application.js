import Mustache from "mustachejs"

// 4. Test list rendering / iteration
// const fruits = {
//   "fruits": [
//     { "name": "apple", "price": 3 },
//     { "name": "pear", "price": 2 },
//     { "name": "banana", "price": 5 }
//   ]
// }

// const list = `
//   <ul>
//     {{#fruits}}
//       <li>{{name}}: {{price}} euros</li>
//     {{/fruits}}
//   </ul>`

// const listElement = Mustache.render(list, fruits)
// results.insertAdjacentHTML("beforeend", listElement)


// 5. Refactor movie list with Mustache iterator
const template = document.querySelector("template").innerHTML

fetch("https://www.omdbapi.com/?s=indiana jones&apikey=adf1f2d7")
  .then(response => response.json())
  .then(data => {
    // const movies = { movies: data.Search }
    const output = Mustache.render(template, data)
    results.innerHTML = output
  })
