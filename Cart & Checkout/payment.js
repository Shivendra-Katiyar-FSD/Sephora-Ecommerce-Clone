let sum;
//let data =JSON.parse( localStorage.getItem("sum"))



//sum=Number(data)
sum=JSON.parse(localStorage.getItem("sum"))||0;
sum=Number(sum)





let pink ="#ff3399";

let overview=document.getElementById("overview")
 let   cotainerLeft=  document.getElementById('cotainerLeft')


 function rightAppend(sum){
   overview.innerHTML=null;

    let h1=document.createElement("h1")
    h1.innerText="OVERVIEW";
    
    let p1=document.createElement('P');        
    
    p1.innerText="Subtotal"
    
    
    let newp1=document.createElement("p")
    newp1.innerText=sum;
    let div1=document.createElement("div");
    div1.append(p1,newp1)
    div1.setAttribute("id","div1")
    
    
    
    let p2=document.createElement("P");
    p2.innerText=`Discount `
    
    
    let newp2=document.createElement("p")
    newp2.innerText="Rs. 0"
    let div2=document.createElement("div");
    div2.append(p2,newp2)
    div2.setAttribute("id","div2")
    
    p2.style.color= pink;
    newp2.style.color=pink
    
    
    
    let p3=document.createElement("P");
    
    p3.innerText=`GST`
    
    
    let newp3=document.createElement("p")
    newp3.innerText="Rs. 0"
    let div3=document.createElement("div");
    div3.append(p3,newp3)
    div3.setAttribute("id","div3")
    
    
    let p4=document.createElement("P");
    p4.innerHTML =`Delivery Charges`;
    
    
    let newp4=document.createElement("p")
    newp4.innerText="Rs. 0"
    
    let div4=document.createElement("div");
    div4.append(p4,newp4)
    div4.setAttribute("id","div4")
    
    let line=document.createElement("line")
    
     let h2 =document.createElement("h2")
     h2.innerText=`Total`
     let newh2=document.createElement("h2");
     newh2.innerHTML=`Rs. ${sum}`
    let div5=document.createElement("div")
    div5.setAttribute("id","div5")
    div5.append(h2,newh2)
     let div=document.createElement("div");
    
     div.setAttribute("id","divOverview")
     div.append(h1,div1,div2,div3,div4,div5)
    
        overview.append(div)
     }
    
     rightAppend(sum)


    
      let buttonDiv=document.getElementById("buttonDiv")
    
     buttonDiv.addEventListener("click",function(){
    
        window.location.href="../signUp-SignIn/signIn.html"
     })
    
     let placeOrder=document.querySelector("#placeOrder")
     placeOrder.addEventListener("click",function(){
    alert ("order sucessfull")

        window.location.href="../hone.html/home.html"
     })
    let promocode=document.getElementById("promocode")
    promocode.addEventListener("click",function(){

    sum=sum-(Math.floor(sum/100*20));

alert("20% Didcout Apply")
    rightAppend(sum)
    

    })

    
let credentials=JSON.parse(localStorage.getItem("credentials"))
console.log(credentials)

 let displayUsername =document.getElementById("displayUsername");
 displayUsername.innerText=credentials.email||"login";
 
let amout=document.getElementById("amout")
amout.innerText=`Rs. ${sum}`