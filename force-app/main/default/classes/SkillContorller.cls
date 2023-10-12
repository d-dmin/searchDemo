public with sharing class SkillContorller {
    public List<Skill__c> getUserSkill(String userName){
        List<Skill__c> skill;
        try{
           String nameForQuery = '%' + userName + '%';
           skill = 
           [SELECT Id, Name, SkillMaster__r.Id, SkillMaster__r.Name FROM Skill__c WHERE Employee__c In (SELECT Id FROM USER WHERE Name LIKE :nameForQuery)];
           
           return skill;
           
           }catch( Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}