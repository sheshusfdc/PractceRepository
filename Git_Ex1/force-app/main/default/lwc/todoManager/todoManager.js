import { LightningElement,track,api } from 'lwc';

export default class TodoManager extends LightningElement {
    time = '8.15 PM';
    greeting = 'Welcome Team';


    connectedCallback(){
        this.getTime();
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const mini = date.getMinuts();
        this.time = '${this.getHour(hour)}:${this.get}:${this.getDoubleDigit(mini)}{this.getMinit(hour)}';
        this.setGreeting(hour);
    }
    getHour(hour){
        return hour === 0 ? 12 : hour > 12 ? (hour - 12) : hour;
    }
    getMinit(hour){
       return hour >= 12 ? "PM" : "AM";
    }

    getDoubleDigit(digit){
        return digit < 10 ?"0"+digit:digit; 
    }

    setGreeting(hour){
        if(hour < 12){
            greeting = 'Good Morning';
        }
        else if(hour >= 12 && hour < 17){
            greeting = 'Good Afternoon';
        }
        else{
            greeting = 'Good Evening';
        }
    }
}