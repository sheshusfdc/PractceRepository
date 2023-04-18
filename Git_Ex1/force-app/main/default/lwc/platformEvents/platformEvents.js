import { LightningElement, track } from 'lwc';
import {subscribe, unsubscribe, onError} from 'lightning/empApi';
export default class PlatformEvents extends LightningElement {
    channelName = '/event/Vehicle_Req__e';
    subscription = {};
    @track accountNameList = {};

    connectedCallback() {
        // Register error listener       
        this.handleSubscribe();        
    }

    handleSubscribe(){
        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, messageCallback).then(response => {
            // Response contains the subscription information on subscribe call
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;
            this.toggleSubscribeButton(true);
        });
    }   

    // Handles unsubscribe button click
    handleUnsubscribe() {
        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, response => {
            console.log('unsubscribe() response: ' + JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }
    disconnectedCallback(){
        this.handleUnsubscribe();
    }

    messageCallback = (response) =>{
        let accName = response.data.payload.Model_Number__c;
        let accId = response.data.payload.Price__c;
        this.accountNameList.push({"Name":accName,"Id":accId});
        console.log('Account Info :'+JSON.stringify(this.accountNameList));
    }

    
}