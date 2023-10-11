import { LightningElement } from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import channel from '@salesforce/messageChanel/searchResult.messgeChannel__c';

export default class SearchSkillForm extends LightningElement {
    handleClick(event){
        event.console.log();
    }

}

