import { LightningElement, wire } from 'lwc'
import { publish, MessageContext } from 'lightning/messageService';
import channel from '@salesforce/messageChannel/SearchResult__c';
import getUserSkill from '@salesforce/apex/SkillController.getUserSkill';

export default class SearchSkillForm extends LightningElement {
    @wire(getUserSkill)
    skill

    @wire(MessageContext)
    messageContext;

    handleClick(event){
        event.console.log();
        const payload = {};

        publish(this.MessageContext,channel, payload);
    }

}

