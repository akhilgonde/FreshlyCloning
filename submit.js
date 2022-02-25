function storedata() {
    var input1 = document.getElementById("row2_inp1").value;
    var input2 = document.getElementById("row2_inp2").value;
    var input3 = document.getElementById("row2_inp3").value;
    var input4 = document.getElementById("row2_inp4").value;
    input1 = JSON.stringify(input1);
    input2 = JSON.stringify(input2);
    input3 = JSON.stringify(input3);
    input4 = JSON.stringify(input4);
    localStorage.setItem("Email Address", input1);
    localStorage.setItem("Subject", input2);
    localStorage.setItem("Help", input3);
    localStorage.setItem("Attached File", input4);
  }
  