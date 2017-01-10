export default class Accordion2 {

  constructor(accordion){
    this.accordion = accordion
    this.currentTarget = false;
    var targets, i;
    
    targets = accordion.querySelectorAll('.Accordion > dt');

    for(i = 0; i < targets.length; i++) {
      let target = targets[i];
      targets[i].addEventListener('click', () => this._onClick(target), false);
    }
    this.accordion.classList.add('js');

  };
  
/*
  Creates new section at the end
  @param {String} title - Title of the section
  @param {String} body - Body of the section
  */
  addSection(title, body = ''){
    
    //Create title
    var newTitle = document.createElement("dt"); 
    var newTitleText = document.createTextNode(title); 
    newTitle.appendChild(newTitleText); //add the text node to the newly created div. 
    
    //Add _onClick event
    newTitle.addEventListener('click', () => this._onClick(newTitle), false);

    //Create body    
    var newBodyParagraph = document.createElement("p"); 
    var newBodyText = document.createTextNode(body); 
    newBodyParagraph.appendChild(newBodyText); //add the text node to the newly created div. 

    var newBody = document.createElement("dd");
    newBody.appendChild(newBodyParagraph);

    //Append title and body to accordion
    this.accordion.appendChild(newTitle);
    this.accordion.appendChild(newBody);

  };

  /*
  Hides section based on it's title
  @param {String} title - Title of the section to be toggled
  */
  toogleSection(title){

  }

  /*
  Function called when the title section title is clicked
  */
  _onClick(targetClicked){
    console.log("Title clicked!");

    if (this.currentTarget){
      this.currentTarget.classList.remove('Accordion--expanded');
    }
    
    this.currentTarget = targetClicked;
    console.log("currentTarget:",this.currentTarget);
    this.currentTarget.classList.add('Accordion--expanded');
  }


}
