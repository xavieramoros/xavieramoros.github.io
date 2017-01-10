require('./styles.scss') // The page is now styled

import Accordion2 from './accordion2.js';
 
//allow HMR
if (module.hot) {
  module.hot.accept()
}

// Make sure the browser supports what we are about to do.
if (document.querySelectorAll && document.body.classList){
  var accordions, i;
      
  // Find all the accordions to enable
  accordions = document.querySelectorAll('.Accordion');

  // Array functions don't apply well to NodeLists
  for(i = 0; i < accordions.length; i++) {
    var accordion = new Accordion2(accordions[i]);
  }

  //accordion.addSection('Section 4 (NEW)','This is the new section body');  
  setTimeout(fetchNewSection, 5000);  
}

/*
Add new section using AJAX
*/
function fetchNewSection(){
  console.log("FETCH new section!")

  //insert new section using Ajax
  fetch('https://xavieramoros.github.io/newsection.json', {
    method: 'get'
  }).then(function(response) {
    var newSection = JSON.parse(response)
    accordion.addSection( newSection.title , newSection.body );  
  }).catch(function(err) {
    console.log('Something went wrong fetching new section. err:',err)
  });  
}


