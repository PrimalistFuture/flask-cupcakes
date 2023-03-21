"use strict";

const $cupcakesList = $("#cupcakes-list");

async function startPage() {
  const cupcakes = await showCupcakes();
  populateList(cupcakes);
}

async function showCupcakes() {
  const response = await axios.get('http://localhost:5000/api/cupcakes');
  console.log(response.data);
  return response.data.cupcakes;
}



function populateList(cupcakes) {
  console.log("coming from populateList", cupcakes)
  $cupcakesList.empty();
  for (let cupcake of cupcakes) {
    console.log(cupcake)
    const $cupcakeItem = $(
      `<li>
       Flavor: ${cupcake.flavor}
       Size: ${cupcake.size}
       Rating: ${cupcake.rating})
       <img src="${cupcake.image}"></img>
     </li>
    `);
    $cupcakesList.append($cupcakeItem);
  }
}

startPage();
