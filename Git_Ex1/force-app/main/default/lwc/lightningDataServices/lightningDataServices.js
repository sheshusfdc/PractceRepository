import { LightningElement,track,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class LightningDataServices extends LightningElement {
    @api recordId
    @api objectApiName
    fields = [NAME_FIELD];

    
}