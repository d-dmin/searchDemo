import { LightningElement} from 'lwc';
import getCertification from '@salesforce/apex/CertificationController.getCertification';

const columns = [
    {label: '従業員', fieldName: 'User__r.Name'},
    {label: '資格', fieldName: 'SkillMaster__r.Name'},
    {label: 'チーム', fieldName: 'User__r.UserRole.Name'}
];

export default class CertificationSearchForm extends LightningElement {
    searchValue;
    displayResult;
    data = [];
    columns = columns;
    value = [];

    get optionsBA() {
        return [
            { label: 'BA', value: 'BA' },
            { label: 'PM', value: 'PM' },
            { label: 'Developer', value: 'developer' }
        ];
    }

    get optionsDeveloper() {
        return [
            { label: 'LWC', value: 'LWC' },
            { label: 'Apex', value: 'Apex' },
            { label: 'Java', value: 'Java' },
            { label: 'C#', value: 'C#' },
            { label: 'Ruby', value: 'Ruby' },
            { label: 'Python', value: 'Python' },
            { label: 'JavaScript', value: 'JavaScript' }
        ];
    }

    get optionsSalesforce() {
        return [
            { label: 'Sales Cloud', value: 'SalesCloud' },
            { label: 'Service Cloud', value: 'ServiceCloud' },
            { label: 'Field Service ', value: 'FieldService ' },
            { label: 'Account Engagement', value: 'AccountEngagement' },
            { label: 'Tableau CRM', value: 'TableauCRM' },
        ];
    }

    handleChange(event){
        console.log(event.value);
    }

    handleSearch(event){
        this.searchValue = event.target.value;
        this.ImperativeCall();
    }

    ImperativeCall(){
        getCertification({userName:this.searchValue})
        .then((result)=>{
            this.data = result.map(record=> this.convertRecord(record));
            
            console.log(result);
            this.displayResult = this.data;
            
        })
        .catch((error)=>{
            console.log('error', error);
        })
    }

    convertRecord(obj, newObj = {}, aboveKey = ""){
        Object.keys(obj).forEach(key => {
            const value = obj[key];
            const currentKey = aboveKey + key;
            if(typeof value === 'object' && !Array.isArray(value)){
                this.convertRecord(value, newObj, currentKey + '.');
            }else{
                newObj[currentKey] = value;
            }
        });
        return newObj;
    }
}