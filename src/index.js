import _ from 'lodash';
import printMe from './print.js';
function component(){
    var element = document.createElement('div');
    element.innerHTML=_.join(['hello','webpack'])
    var btn = document.createElement('button');
    btn.innerHTML="点击我展示console!"
    btn.onclick=printMe
    element.appendChild(btn)
    return element;
}
let element =component();
document.body.appendChild(element)
if(module.hot){
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        let element =component();
        document.body.appendChild(element)
    })
}