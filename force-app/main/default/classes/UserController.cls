public with sharing class UserController {
    @AuraEnabled
    public static List<User> getUser(String userName){
        List<User> user;
        List<Certification__c> certifications;
        Map<String, String> certificationMap;
        try {
            user = [SELECT Id FROM USER WHERE Name LIKE :userName];
            
            certifications = [
                SELECT Id, Name, CertificationMaster__r.Id, CertificationMaster__r.Name 
                FROM Certification__c 
                WHERE user__c In :user.get('Id')];
            
            for(List<Certification__c> certificationList:certifications){
                certificationMap.put(certificationList.CertificationMaster__r.Id,certificationList.certificationMaster__r.Name);
            }

        return user;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}