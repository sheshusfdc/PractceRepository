import { LightningElement,track,wire } from 'lwc';
import searchAccount from '@salesforce/apex/AccountCreateFromLWC.searchAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
const delay = 30;
export default class Ex_AddRowDynamic extends LightningElement {
    @track keyIndex = 0;
    accountName = 'Rx';
    @track accountList = [];
    @wire(searchAccount,{accName :'$accountName'})
    retriveAccounts({error,data}){
        if(data){
            this.accountList = data;
        }else if(error){

        }
    }

    searchAccountByParam(event){
        const searchParam = event.target.value;
        window.clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(()=>{
            this.accountName = searchParam;
        },this.delay);
    }

}