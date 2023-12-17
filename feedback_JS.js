$(document).ready(function(){

    $("#contactus-submit").click(function(){
    var r= $('');
    
    $("#contactus-submit").html(r);
    
    $("#contactus-submit").append(" Sending...");
    
    $("#contactus-submit").attr("disabled", true);
    setTimeout(function(){
    $("#contactus-submit").attr("disabled", false);
    $("#contactus-submit").html('Send');
    
    }, 3000);
    
    });
    
    });