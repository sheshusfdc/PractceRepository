import { LightningElement,wire,track } from 'lwc';
import getLeadInfo from '@salesforce/apex/LeadControllerLwcMap.getLeadInfo';

export default class Ex_MapCollection extends LightningElement {
    @track leadList = [];

    @wire(getLeadInfo) wireResult(result){
        if(result.data){
            var leadRec = result.data;
            for(var key in leadRec){
                this.leadList.push({value:leadRec[key], key:key});
            }
        }
    }
}