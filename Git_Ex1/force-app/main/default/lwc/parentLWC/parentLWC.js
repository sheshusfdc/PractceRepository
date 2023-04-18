import { LightningElement,track } from 'lwc';

export default class ParentLWC extends LightningElement {
    value = "This value from parent component";
    @track messageVal;
    @track messageFromChild;
    sendData(event){
        this.messageVal = 'Message from parent';
    }
    getMessageFromChild(event){
        this.messageFromChild = event.detail;
    }
}