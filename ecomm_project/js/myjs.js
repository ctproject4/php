$(document).ready(function() {
    $('#example').dataTable();
		 x = $(".message").text().trim(); 
    if ( !!x) { 
        $("#button_login").hide(); 
        $("#button_logout").show(); 
    } 
    else { 
        $("#button_logout").hide(); 
        $("#button_login").show(); 
    } 
	
	
	    $('#button_home').click(function(){
		window.location="../index.php";
      });
   
	
	 $('#button_login').click(function(){
		
		window.location="../LoginPageIncluded.php";
		
      });
	  
	   $('#button_signup').click(function(){
		
		window.location="../SignupPageIncluded.php";
		
      });
	
	
	 $('#button_logout').click(function(){
		
		window.location="../SignOutPageIncluded.php";
		
      });
	
	 $('#back_to_shopping').click(function(){
		window.location="index.php";
		
      });
	
		$('#cancel_addtoCart').click(function(){
		window.location="index.php";
      });
} );
