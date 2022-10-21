
let data=JSON.parse(localStorage.getItem("data"))||[];
console.log(data)
console.log(data)

let count=0;
let sum=0;

let overview=document.getElementById("overview")
 let   cotainerLeft=  document.getElementById('cotainerLeft')


function leftappend(data){

data.forEach(function(el){

let imgtag1 =document.createElement("img")
imgtag1.src=el.img1

let imgtag2 =document.createElement("img")
imgtag2.src=el.img2
let h3=document.createElement("h3")
h3.innerText=el.name;
let p1=document.createElement("p")
p1.innerText=el.titile;

let h2=document.createElement("h2")
h2.innerText=` Rs. ${el.price}`

console.log(el.price)
sum=sum+Number(el.price);
let div= document.createElement("div")

div.setAttribute("id","card")

let sel=document.createElement("select")
let opn1=document.createElement("option")
let  opn2=document.createElement("option")
opn1.value="1";
opn2.value="2";
opn1.text="1";
opn2.text="2"
sel.add(opn1,1)
sel.add(opn2,2)



 let div1=document.createElement("div")
div1.append(imgtag1)
 let div2=document.createElement("div")
div2.append(h3,p1)

 let div3=document.createElement("div")
 div3.append(h2)
 let div4=document.createElement("div")
div4.append("Qty : ",sel)
div.append(div1,div2,div4,div3)

cotainerLeft.append(div)

count++

})

 let editbtn=document.createElement("button")
 editbtn.innerText="EDIT BAG"

 editbtn.setAttribute("id","editbtn")
 cotainerLeft.append(editbtn)


}

leftappend(data)




let pink ="#ff3399";
let bagcout=document.querySelector("#myBag>h1")
bagcout.innerText=`CHECKOUT`
console.log(sum);


localStorage.setItem("sum",JSON.stringify(sum))





 function rightAppend(sum){

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

 let continuebtn=document.querySelector("#continue")
 continuebtn.addEventListener("click",function(){

    window.location.href="./payment.html"
 })

 let editbtn=document.querySelector("#editbtn");
 editbtn.addEventListener("click",function(){
    window.location.href="./cart.html"
 })


 
let credentials=JSON.parse(localStorage.getItem("credentials"))
console.log(credentials)

 let displayUsername =document.getElementById("displayUsername");
 displayUsername.innerText=credentials.email||"login";
 

