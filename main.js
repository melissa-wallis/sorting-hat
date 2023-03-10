const sortedStudents = [
  {
    id: 1,
    name: "Melissa",
    house: "Gryffindor"
  }
]
const voldemortsArmy = []
const house = ["Gryffindor", "Hufflepuff", "Ravenclaw","Slytherin"];

//utility functions//
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId); //creates  variable that we set equal to the elemenmt that we want to select on the DOM
  selectedElement.innerHTML = textToRender; //textToRender is a string of HTML, textToRender is what we're passing in that will change the HTML
};


//HTML component functions//
//gets the intro container on the DOM
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

//gets the sort container on the DOM
const sortContainer = () => {
  const domString = `
  <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Luna Lovegood">
  <label for="floatingInput">Enter Student Name</label>
  </div>
  <button type="button" class="btn btn-primary">Sort</button>
  `
  renderToDom('#sortContainer', domString)
}

//gets the Navbar on the DOM
const filterContainer = () => {
  const domString = `
  <div class="d-flex flex-wrap justify-content-between my-3">
    <button class="btn btn-secondary btn-lg buttonRow" id="All">All</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Gryffindor">Gryffindor</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Hufflepuff">Hufflepuff</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Ravenclaw">Ravenclaw</button>
    <button class="btn btn-secondary btn-lg buttonRow" id="Slytherin">Slytherin</button>
  </div>
  `;
  renderToDom('#filterContainer', domString);
};


//gets the sorted student cards on the DOM
const sortedStudentCards = (sortedStudents) => {
  let domString = '';
  for (const student of sortedStudents) {
    domString += ` 
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <button id="expelButton--${student.id}" class="btn btn-primary">Expel</button>
    </div>
  </div>`
}
renderToDom('#sortedContainer', domString)
};


//get the expelled students on the DOM


//create new student card

//Event listeners
//for Begin Sort button
//for Sort button
//modal that appears with sorting results?

const startApp = () => {
  introContainer();
  sortContainer();
  filterContainer();
  sortedStudentCards(sortedStudents);
}

startApp()
