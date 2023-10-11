public with sharing class CertificationController {
    @AuraEnabled(cacheable=true)
     public static List<Certification__c> getCertification(String userName){
        List<certification__c> certifications;
         try{
            String nameForQuery = '%' + userName + '%';
            certifications = 
            [SELECT Name, SkillMaster__r.Name, User__r.Name, User__r.UserRole.Name FROM Certification__c WHERE User__c In (SELECT Id FROM User WHERE Name LIKE :nameForQuery)];
            
            return certifications;
            
            }catch( Exception e){
             throw new AuraHandledException(e.getMessage());
         } 
    } 

    @AuraEnabled
    public static string methodName(){
        
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}