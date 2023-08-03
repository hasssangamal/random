var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCatageroy=document.getElementById("productCatageroy");
var productDescription=document.getElementById("productDescription");
var productsearch=document.getElementById("productsearch");
var tbody=document.getElementById("tbody");
var addproduct=document.getElementById("add");
var updateproduct=document.getElementById("update");
var temp;


var allproduct =[]
if(localStorage.getItem("products") !=null){
allproduct= JSON.parse(localStorage.getItem("products"))
  display()
}
function add(){
  var product ={
    product:productName.value,
    price:productPrice.value,
    catageroy:productCatageroy.value,
   description:productDescription.value,

}
  allproduct.push(product);
  clear()
localStorage.setItem("products",JSON.stringify(allproduct))
display();



}

  function display(){
    var box =``
    for(var i=0;i<allproduct.length ;i++){
                box+=`
                <tr>
                <td class="pe-5">${i+1}</td>
                <td class="pe-5">${allproduct[i].product}</td>
                
                <td class="pe-5">${allproduct[i].price}</td>
        
                <td class="pe-5">${allproduct[i].catageroy}</td>
        
                <td class="pe-5">${allproduct[i].description}</td>
                <td class="pe-5"><button class="btn btn-outline-danger" onclick="delet(${i})"> Delete</button></td>
                <td class="pe-5"><button class="btn btn-outline-primary" onclick="update(${i})"> update</button></td>
                </tr>
                `
              
            }
            tbody.innerHTML=box;

}





function delet(index){
allproduct.splice(index,1)
localStorage.setItem("products",JSON.stringify(allproduct));
display()
}


function update(index){
temp=index;
updateproduct.classList.replace("d-none","d-block");
addproduct.classList.replace("d-block","d-none");

productName.value =allproduct[index].product;
productPrice.value =allproduct[index].price;
productCatageroy.value =allproduct[index].catageroy;
productDescription.value =allproduct[index].description;


}
function sendupdate(){
  allproduct[temp].product=productName.value;
  allproduct[temp].price=productPrice.value;
  allproduct[temp].catageroy=productCatageroy.value;
  allproduct[temp].description=productDescription.value;
  localStorage.setItem("products",JSON.stringify(allproduct))
  display();
  clear()

  updateproduct.classList.replace("d-block","d-none");
addproduct.classList.replace("d-none","d-block");
}
function clear(){
  productName.value="";
productPrice.value="";
productCatageroy.value="";
productDescription.value="";
}


function search(elemwnt){

 var box=``;
 for(var i =0;i<allproduct.length;i++){
if(allproduct[i].product.includes(elemwnt)){

  box+=`
  <tr>
  <td class="pe-5">${i+1}</td>
  <td class="pe-5">${allproduct[i].product}</td>
  
  <td class="pe-5">${allproduct[i].price}</td>

  <td class="pe-5">${allproduct[i].catageroy}</td>

  <td class="pe-5">${allproduct[i].description}</td>
  <td class="pe-5"><button class="btn btn-outline-danger" onclick="delet(${i})"> Delete</button></td>
  <td class="pe-5"><button class="btn btn-outline-primary" onclick="update(${i})"> update</button></td>
  </tr>
  `

          
    

}
}
tbody.innerHTML=box;
}