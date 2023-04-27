global class BatchApexExample implements Database.Batchable<sObject> {
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // collect the batches of records or objects to be passed to execute
         
        String query = 'SELECT Id, Name FROM Account where lastmodifieddate > LAST_N_DAYS:180';
        return Database.getQueryLocator(query);
    }
     
    global void execute(Database.BatchableContext BC, List<Account> accList) {
        
      
        try {
            // Update the Account Record
            Delete  accList;
         
        } catch(Exception e) {
            System.debug(e);
        }
         
    }   
     
    global void finish(Database.BatchableContext BC) {
        // execute any post-processing operations like sending email
    }
}