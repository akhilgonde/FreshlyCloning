
        var arr = JSON.parse(localStorage.getItem("foodData")) || [];


arr.map(function(ele,index)
    {

        var main = document.createElement("div");

        var div = document.createElement("div");

       var img =  document.createElement("img");
       img.src = ele.src;

       var h3 = document.createElement("h3");
       h3.innerText = ele.name;

       var plus = document.createElement("div");
       plus.innerText = "+";
       plus.style.width = "25px";
       plus.style.height = "25px";
       plus.style.border = "2px solid black";
       plus.style.borderRadius = "50%";
       plus.style.textAlign = "center";
       plus.style.marginTop = "auto";
       plus.style.boxSizing = "borderbox";
       plus.style.marginLeft = "100px";
       plus.style.backgroundColor = "#2A6DFF";
       plus.style.color = "#fff";
       plus.style.fontSize = "24px";
       plus.style.fontWeight = "500";
       plus.style.cursor =  "pointer"; 
       plus.addEventListener("click",function()
      {
        addTocard(ele);
        display();   

      });

       div.append(img,h3,ele.cal);

       main.append(div,plus);

       document.getElementById("list").append(main);

       function addTocard(ele)
      {
        ele.quant = 1;
        Cart1.push(ele);
        localStorage.setItem('Cart1',JSON.stringify(Cart1)); 
      } 

    });


    var Cart1 = JSON.parse(localStorage.getItem("Cart1")) || [];
 
    display();   

function display()
{
    document.getElementById("cart1").innerHTML = "";

Cart1.map(function(ele,index)
{
    var maindiv = document.createElement("div");

    var img1 =  document.createElement("img");
       img1.src = ele.src;
    
       var h31 = document.createElement("h6");
       h31.innerText = ele.name;

       var addremove = document.createElement("div");

       var plus1 = document.createElement("button");
       plus1.innerText = "+";
       plus1.addEventListener("click",function()
       {
           increase();
       });

       var minus = document.createElement("button");
       minus.innerText = "-";
       minus.addEventListener("click",function()
       {
           decrease();
       });

       var qty = document.createElement("div");
       qty.innerText = 0 + ele.quant; 
       
       addremove.append(plus1,minus,qty)
       

    document.getElementById("cart1").append(img1,h31,addremove);

    function increase()
    {
        // console.log("No");
        qty.innerText = ele.quant++;
        localStorage.setItem('Cart1',JSON.stringify(Cart1)); 
        display(); 
    }

    function decrease()
    {
        if(qty.innerText>1&&ele.quant>1)
        {
        qty.innerText = ele.quant--;
        localStorage.setItem('Cart1',JSON.stringify(Cart1)); 
        display(); 
        }
        else if(qty.innerText==1&&ele.quant==1)
        {
            alert("quanity is already minimum");
            alert("Do you want to remove item");
        }
    }

document.getElementById("total").innerText = Math.round(Cart1.reduce(function(acc,ele)
{
    return acc + (ele.quant*11.79);
 
 }, 0));

 document.getElementById("totalitems").innerText = Cart1.reduce(function(acc,ele)
{
    return acc + ele.quant;
 
 }, 0);
    
});
};

var arr = JSON.parse(localStorage.getItem("foodData")) || [];

function search() {

document.getElementById("list").innerHTML = "";

    var searchText = document.getElementById("select").value;

if(searchText=="All Meals")
{
    // allMeals();
    // console.log(searchText);

    arr.map(function(ele,index)
    {
        
        var main = document.createElement("div");

        var div = document.createElement("div");

       var img =  document.createElement("img");
       img.src = ele.src;

       var h3 = document.createElement("h3");
       h3.innerText = ele.name;

       var plus = document.createElement("div");
       plus.innerText = "+";
       plus.style.width = "25px";
       plus.style.height = "25px";
       plus.style.border = "2px solid black";
       plus.style.borderRadius = "50%";
       plus.style.textAlign = "center";
       plus.style.marginTop = "auto";
       plus.style.boxSizing = "borderbox";
       plus.style.marginLeft = "100px";
       plus.style.backgroundColor = "#2A6DFF";
       plus.style.color = "#fff";
       plus.style.fontSize = "24px";
       plus.style.fontWeight = "500";
       plus.style.cursor =  "pointer"; 
       plus.addEventListener("click",function()
      {
        addTocard(ele);
        display();   

      });

       div.append(img,h3,ele.cal);

       main.append(div,plus);

       document.getElementById("list").append(main);

       function addTocard(ele)
       {
         ele.quant = 1;
         Cart1.push(ele);
         localStorage.setItem('Cart1',JSON.stringify(Cart1)); 
       } 
 
    });
    
}

else
{
     
    var searchText = document.getElementById("select").value;
    
    console.log(searchText);
    
    var filterData = arr.filter(function(ele)
    {
        return ele.category== searchText;
    //    console.log()
    });
    
    // console.log(arr);
    console.log(filterData);

    filterData.map(function(ele,index)
    {
        
        var main = document.createElement("div");

        var div = document.createElement("div");

       var img =  document.createElement("img");
       img.src = ele.src;

       var h3 = document.createElement("h3");
       h3.innerText = ele.name;

       var plus = document.createElement("div");
       plus.innerText = "+";
       plus.style.width = "25px";
       plus.style.height = "25px";
       plus.style.border = "2px solid black";
       plus.style.borderRadius = "50%";
       plus.style.textAlign = "center";
       plus.style.marginTop = "auto";
       plus.style.boxSizing = "borderbox";
       plus.style.marginLeft = "100px";
       plus.style.backgroundColor = "#2A6DFF";
       plus.style.color = "#fff";
       plus.style.fontSize = "24px";
       plus.style.fontWeight = "500";
       plus.style.cursor =  "pointer"; 
       plus.addEventListener("click",function()
      {
        addTocard(ele);
        display();   

      });

       div.append(img,h3,ele.cal);

       main.append(div,plus);

       document.getElementById("list").append(main);

       function addTocard(ele)
       {
         ele.quant = 1;
         Cart1.push(ele);
         localStorage.setItem('Cart1',JSON.stringify(Cart1)); 
       } 
 
    });
}
    
}

function reset()
{
    document.getElementById("cart1").innerHTML = ""; 
}
