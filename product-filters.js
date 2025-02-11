const card = document.querySelectorAll(".pproducts-guide .card");
const cheesefilter = document.querySelector("#cheese_type");
const processingfilter = document.querySelector("#processing");

// object to track which filter selected
const currentfilter = {
  cheese_type: "all",
  processing: "all",
};

// cheesefilter.addEventListener("change", (event) => {
//   console.log(event.target.value);
//   currentfilter.cheese_type = event.target.value;

// });

// processingfilter.addEventListener("change", (event) => {
//   console.log(event.target.value);
//   currentfilter.processing = event.target.value;
// });

//

cheesefilter.addEventListener("change", updateFilter);
processingfilter.addEventListener("change", updateFilter);
//function for select any filter instead in make event in poth
function updateFilter(event) {
  //name of filter
  const filterType = event.target.id;
  //value of filter and ubdate oject
  currentfilter[filterType] = event.target.value;
  console.log(event.target.id);
  console.log(event.target.value);
}
