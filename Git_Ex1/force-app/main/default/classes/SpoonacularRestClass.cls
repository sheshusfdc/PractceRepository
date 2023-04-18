public class SpoonacularRestClass {
    private static final string SPOONACULAR_API = 'https://api.spoonacular.com';
    private static final string String_API_KEY = '40315776e15b45c0a17de742d04f0256';
    public static void getRandomReceipts(){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API+'/recipes/random?apiKey='+String_API_KEY);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response. Test
        if(response.getStatusCode() == 200) {
            system.debug('Response '+response.getBody());
        }
        system.debug('Response OutSide'+response.getBody());
    }
    public static void getReceipts(string recipyId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API+'/recipes/'+recipyId+'/information?apiKey='+String_API_KEY);
        
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            system.debug('Response '+response.getBody());
        }
        system.debug('Response OutSide'+response.getBody());
    }
    public static void getReceiptsByIngrediant(string ingredients){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(SPOONACULAR_API+'/recipes/findByIngredients?apiKey='+String_API_KEY+'&ingredients='+ingredients);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        // If the request is successful, parse the JSON response.
        if(response.getStatusCode() == 200) {
            system.debug('Response '+response.getBody());
        }
        system.debug('Response OutSide'+response.getBody());
    }
    
}