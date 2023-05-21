public with sharing class LeadControllerLwcMap {
    
    @AuraEnabled(cacheable=true)
    public static Map<String, Integer> getLeadInfo(){
        
        Map<String, Integer> mapLeadInfo = new Map<String, Integer>();
        for(AggregateResult ld : [SELECT COUNT(Id) LeadCount,Status LeadStatus FROM Lead GROUP BY Status]){
            mapLeadInfo.put((String)ld.get('LeadStatus'), (Integer)ld.get('LeadCount'));
        }
        return mapLeadInfo;
        
    }
}