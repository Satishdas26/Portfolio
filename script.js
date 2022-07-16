function validate(){
    const name = document.getElementById("name").value;
    const mobile=document.getElementById("mobile").value;
    const email=document.getElementById("email").value;
    const term=document.getElementById("term").value;
    const sugst=document.getElementById("sugesstion").value;
    let error=false;
    //Name
    if(name ===""){
        document.getElementById("name_error").innerHTML="Name is required.";
        error=true;
    }
    else{
        document.getElementById("name_error").innerHTML="";
    }
    
    //Mobile number
    if(mobile ===""){
        document.getElementById("mobile_error").innerHTML="Enter mobile number.";
        error=true;
    }
    else if(mobile.length != 10 || isNaN(mobile)){
        document.getElementById("mobile_error").innerHTML="Please Enter a valid 10 digit mobile number.";
        error=true;
    }
    else{
        document.getElementById("mobile_error").innerHTML="";
    }
    //Email
    let atpos=email.indexOf("@");
    let atposs=email.lastIndexOf("@");
    let dotpos=email.lastIndexOf(".");
    if(email === ""){
        document.getElementById("email_error").innerHTML="Email is required.";
        error=true;
    }
    else if(atpos<=0||dotpos<=0||[dotpos-atpos]<=4||dotpos==email.length -1|| atpos!=atposs){
        document.getElementById("email_error").innerHTML="Please Enter a valid Email.";
        error=true;
    }
    else{
        document.getElementById("email_error").innerHTML="";
    }
    
    //Sugesstion
    if(sugst ===""){
        document.getElementById("sugesstion_error").innerHTML="Please type in your sugesstions before submitting";
        error=true;
    }
    else{
        document.getElementById("sugesstion_error").innerHTML="";
    }

    //Term
    if(!term.checked){
        document.getElementById("term_error").innerHTML="Please agree to the term and condition.";
        error=true;
    }
    else{
        document.getElementById("term_error").innerHTML="";
    }

    if(error){
        return false;
    }
    else{
        return true;
    }

    
}