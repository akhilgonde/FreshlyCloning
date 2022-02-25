var info= JSON.parse(localStorage.getItem("formLocal"));

document.querySelector("#form").addEventListener("submit",formSubmit);

function formSubmit(event){
    event.preventDefault();

    var user= document.querySelector("#email").value;
    var pass= document.querySelector("#pass").value;
  

    var flag= false;

    for(var i=0; i<info.length; i++){
        if(info[i].email==user && info[i].pass==pass){
            flag= true;
        }
    }
    if(flag==false){
        alert("Login Failed");
    }
    else{
        // alert("Login Successful");
       document.querySelector("input[type='submit']").addEventListener("click",function(){
        window.location.href="index.html";
       });
    }
}
