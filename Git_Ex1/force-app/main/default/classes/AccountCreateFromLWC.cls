public with sharing class AccountCreateFromLWC {
   
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccount(string accName){
        string strName = '%'+accName+'%';
        return [SELECT Id,Name FROM Account where Name like:strName];
    }
}