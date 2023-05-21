import { LightningElement, wire, track } from 'lwc';
import fetchAccounts from "@salesforce/apex/AccountDataController.fetchAccounts";
import fetchOpportunity from "@salesforce/apex/AccountDataController.fetchOpportunity";
//columns
const columns = [
    {
        label: 'Name',
        fieldName: 'Name',
        type: 'text',
    }, {
        label: 'Stage Name',
        fieldName: 'StageName',
        type: 'text'
    }, {
        label: 'Amount',
        fieldName: 'Amount',
        type: 'currency'
    }
];

export default class MultipleWireMethods extends LightningElement {
    @track accountId;
    @track opportunityList;
    columns = columns;
 
    
 
    @wire(fetchOpportunity, {accountId : '$accountId'})  
    wiredOpportunity( { error, data } ) {
        if(data) {
            this.opportunityList = data;
            console.log('Its Called - 2');
        } else if (error) {
            console.log(error);
        }
    }

    @wire(fetchAccounts, {})  
    wiredAccount( { error, data } ) {
        if(data) {
            this.accountId = data[0].Id;
            console.log('Its Called - 1');
        } else if (error) {
            console.log(error);
        }
    }
}