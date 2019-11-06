import _ from 'lodash';
import printMe from './print.js';
if("serviceWorker" in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/service-worker.js').then(registration=>{
            console.log('SW registered:',registration);
        }).catch(registrationError=>{
            console.log("SW registration failed:",registrationError)
        })
    })
}
function component(){
    var element = document.createElement('div');
    element.innerHTML=_.join(['hello','webpack'])
    var btn = document.createElement('button');
    btn.innerHTML="点击我展示console!"
    btn.onclick=printMe
    element.appendChild(btn)
    return element;
}
document.body.appendChild(component())