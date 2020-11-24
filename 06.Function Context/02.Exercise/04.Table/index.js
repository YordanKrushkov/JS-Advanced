function solve() {

   let tr = document.getElementsByTagName('tr');
   let colour = "#413f5e";
   let lastCliced;
   [...tr].slice(1).forEach(e => {
      e.addEventListener('click', (event) => {

         let element = event.target.parentElement.style;
         if (element.backgroundColor == '' || element.backgroundColor == undefined) {
            element.backgroundColor = colour;
            if (lastCliced) {
               lastCliced.backgroundColor = '';
            }

         } else {
            element.backgroundColor = '';
         }
         lastCliced = element;
      })
   })

}
