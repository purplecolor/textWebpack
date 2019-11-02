import {cube} from './math.js'
console.log(process)
function component(){
    var element = document.createElement('pre');
   element.innerHTML=[
       'hello webpack!',
       '5 cubed is equal to' + cube(5)
   ].join('\n\n');
    return element;
}
document.body.appendChild(component())