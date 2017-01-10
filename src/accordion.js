
// class Accordion{
//   constuctor(){
//     var targets, currentTarget, i;
//     targets = accordion.querySelectorAll('.Accordion > dt');

//   },

//   toggle(){

//   }
// }

// Using a function helps isolate each accordion from the others
export default function makeAccordion(accordion) {
  var targets, currentTarget, i;
  
  // targets = accordion.querySelectorAll('.accordion > * > h1');
  targets = accordion.querySelectorAll('.Accordion > dt');

  console.log("targets.length:",targets.length)
    console.log("targets:",targets)

  for(i = 0; i < targets.length; i++) {
    targets[i].addEventListener('click', function () {

      if (currentTarget){
        currentTarget.classList.remove('Accordion--expanded');
      }
      
      currentTarget = this//.parentNode;
      console.log("currentTarget:",currentTarget);
      currentTarget.classList.add('Accordion--expanded');
    }, false);
  }

  accordion.classList.add('js');
}