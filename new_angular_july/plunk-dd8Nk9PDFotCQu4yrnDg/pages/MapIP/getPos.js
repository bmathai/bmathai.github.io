
        lat = new Array();
		lon = new Array();
		
		function foo(data) {
            lat.push(parseFloat(data.location.latitude));
            lon.push(parseFloat(data.location.longitude));
        }

function myFunction() {
    document.getElementById("frm1").submit();
    
}

function GetUrlValue(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        KeyValuePair[1] =  KeyValuePair[1].split('%0D%0A');
        if(KeyValuePair[0] == VarSearch){
            return KeyValuePair[1];
        }
    }
}