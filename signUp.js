document.querySelector("#form").addEventListener("submit",formSubmit);
 var details= JSON.parse(localStorage.getItem("formLocal")) || [];

function formSubmit(event){
 event.preventDefault();

 var formObj={
      email: document.querySelector("#email").value,
     pass:document.querySelector("#pass").value
 };
 details.push(formObj);

 localStorage.setItem("formLocal",JSON.stringify(details));

}