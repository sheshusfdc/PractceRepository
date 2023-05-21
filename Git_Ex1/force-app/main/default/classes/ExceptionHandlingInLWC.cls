public with sharing class ExceptionHandlingInLWC {
    public ExceptionHandlingInLWC() {

    }    
    
    @AuraEnabled(cacheable=true)
    public static string getUpperCaseString_unhandled(string str){
        return str.toUpperCase();

    }
    @AuraEnabled(cacheable=true)
    public static string getUpperCaseString_aurahandled(string str){        
        try {
            return str.toUpperCase();
        } catch (Exception e) {
            throw new AuraHandledException('Something went wrong '+ e.getMessage());
        }

    }
    @AuraEnabled(cacheable=true)
    public static string getUpperCaseString_cushandled(string str){        
        try {
            return str.toUpperCase();
        } catch (Exception e) {
            throw new AuraHandledException('Something went wrong '+ e);
        }

    }
    
}