import { LightningElement } from 'lwc';

export default class ChildLifeHook extends LightningElement {
    constructor(){
        console.log('Inside Constructor child');
    }
    connectedCallback(){
        console.log('Inside Connected Call Back Child');
    }
}