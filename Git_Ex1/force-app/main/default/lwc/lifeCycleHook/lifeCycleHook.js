import { LightningElement,api,track } from 'lwc';
import firstTemplate from './lifeCycleHook.html';
import secondTemplate from './lifeCycleHook2.html';

export default class LifeCycleHook extends LightningElement {
    @track templateNo = 'temp1';
    constructor(){
        super();
        console.log('Inside COnstructor');
    }
    connectedCallback(){
        console.log('Inside Connected Call Back');
    }
    render(){
        console.log('Inside Render');
        if(this.templateNo === 'temp1')
            return firstTemplate;
        else
            return secondTemplate;
    }
    renderedCallback(){
        console.log('Inside Render Call Back ');
    }
    disconnectedCallback(){

    }
    changeTemplate(){
        console.log('Inside Change Temp Call Back '+ this.templateNo);
        if(this.templateNo == 'temp1'){
            this.templateNo = 'temp2';
        }
        else{
            this.templateNo = 'temp1';
        }
    }
    errorCallback(error,stack){
        console.log('Inside Error Call Back '+error);
    }
}