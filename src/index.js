import _ from 'lodash';
import print from './print.js';
function component(){
    var element = document.createElement('div');
    element.innerHTML=_.join(['hello','webpack'],'')
    element.onclick=print.bind(null,'hello webpack!')
    return element;
}
document.body.appendChild(component())