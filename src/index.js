import _ from 'lodash';
function getComponent(){
    return import(/* webpackChunkName:"lodash" */ 'lodash').then(_ =>{
        var element=document.createElement('div');
        element.innerHTML=_.join(['hello','webpack'],' ');
        return element;
    }).catch(error=>'An error occurred')
}
document.body.appendChild(component())
getComponent().then(component=>{
    document.body.appendChild(component)
})