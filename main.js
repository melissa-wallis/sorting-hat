const students = []
const voldemortsArmy = []
const house = ["Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"];

//utility functions//
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId); //creates  variable that we set equal to the elemenmt that we want to select on the DOM
  selectedElement.innerHTML = textToRender; //textToRender is a string of HTML, textToRender is what we're passing in that will change the HTML
};


//HTML component functions//
const introContainer = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
    <img src="images/sorting-hat.png" class="card-img-top" alt="picture of the sorting hat from Harry Potter">
    <div class="card-body">
      <h5 class="card-title">The Sorting Hat</h5>
      <p class="card-text">
      There's nothing hidden in your head
      <br>
      The Sorting Hat can't see,
      <br>
      So try me on and I will tell you
      <br>
      Where you ought to be...</p>
      <a href="#" class="btn btn-primary">Begin Sort</a>
    </div>
  </div>`;
  renderToDom('#introContainer', domString)
}

const sortContainer = () => {
  const domString = `
  <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Enter Student Name</label>
  </div>
  <button type="button" class="btn btn-primary">Sort</button>
  `
  renderToDom('#sortContainer', domString)
}

//Event listeners
//for Begin Sort button
//for Sort button
//modal that appears with sorting results?

const startApp = () => {
  introContainer();
  sortContainer();
}

startApp()
