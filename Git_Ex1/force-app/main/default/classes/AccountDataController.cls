public without sharing class AccountDataController {
    @AuraEnabled (cacheable=true)
    public static List<Account> fetchAccounts(){
        return [SELECT Id, Name, BillingPostalCode, BillingCountry 
                FROM Account LIMIT 10];       
    }
 
    @AuraEnabled (cacheable=true)
    public static List<Opportunity> fetchOpportunity(String accountId){
        return [SELECT Id, Name, Account.Name, AccountId, StageName, Amount, CloseDate 
                FROM Opportunity WHERE AccountId =:accountId LIMIT 10];       
    }
}