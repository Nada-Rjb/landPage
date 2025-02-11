const card = document.querySelectorAll(".products-guide .card");
const cheesefilter = document.querySelector("#cheese_type");
const processingfilter = document.querySelector("#processing");
const noresult = document.querySelector(".no-results-message");
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
  //   console.log(event.target.id);
  //   console.log(event.target.value);
  filterCard();
}
//card base in selected
function filterCard() {
  console.log("csdcsdvcdf");
  let visablecards = false;

  //for each card do some thing on it
  card.forEach((card) => {
    //console.log(card);
    const cheeseElement =
      card.querySelector("[data-cheese-type]").dataset.cheeseType;
    console.log(cheeseElement);
    const processingElement =
      card.querySelector("[data-processing]").dataset.processing;
    console.log(processingElement);
    const matchcheese = currentfilter.cheese_type === cheeseElement;
    const matctprocessing = currentfilter.processing === processingElement;
    /*/////*/
    if (
      (matchcheese || currentfilter.cheese_type === "all") &&
      (matctprocessing || currentfilter.processing === "all")
    ) {
      card.hidden = false;
      visablecards = true;
    } else {
      card.hidden = true;
    }
    console.log(visablecards);

    if (visablecards) {
      noresult.hidden = true;
    } else {
      noresult.hidden = false;
    }
  });
}

//function enable filter when the user have peoblem in css
function enableFeltering() {
  processingfilter.hidden = false;
  cheesefilter.hidden = false;
}
enableFeltering();
