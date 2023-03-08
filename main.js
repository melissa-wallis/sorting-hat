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
  <img src="images/sorting-hat.png" class="img-fluid" alt="picture of the sorting hat from Harry Potter.">
  <h2>
  There's nothing hidden in your head
  <br>
  The Sorting Hat can't see,
  <br>
  So try me on and I will tell you
  <br>
  Where you ought to be...
  </h2>
  <button class="btn btn-primary" type="submit">Begin Sort</button>
  `;
  renderToDom('#introContainer', domString)
}


const startApp = () => {
  introContainer();
}

startApp()
