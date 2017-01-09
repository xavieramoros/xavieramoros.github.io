require('./styles.scss') // The page is now styled
import makeAccordion from './accordion.js';

//allow HMR
if (module.hot) {
  module.hot.accept()
}

$(function() {
  // Make sure the browser supports what we are about to do.
  if (!document.querySelectorAll || !document.body.classList) return;

  var accordions, i;
      
  // Find all the accordions to enable
  accordions = document.querySelectorAll('.Accordion');

  // Array functions don't apply well to NodeLists
  for(i = 0; i < accordions.length; i++) {
    makeAccordion(accordions[i]);
  }
}