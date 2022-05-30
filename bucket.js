let bucketArr=JSON.parse(localStorage.getItem("coffee"))||[]



bucketArr.forEach(function(el,index){
   
    let container=document.getElementById("bucket")
    let image=document.createElement("img");
    image.src=el.image;
    let price=document.createElement("p");
    price.innerText=el.price;
    let type=document.createElement("p");
    type.innerText=el.title
    let button=document.createElement("button")
    button.innerText="Remove"
     button.setAttribute("id","remove_coffee")
    button.addEventListener("click",function(){
        removefn(el,index)
    })
    let div=document.createElement("div")
    div.append(image,type,price,button)
    container.append(div)
    
})
function removefn(el,index){
    bucketArr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(bucketArr));
    window.location.reload()
}

// let total_price=document.getElementById("total_amount")
// let sum=0;
// for(let i=0;bucketArr.length;i++){
//     sum=sum+bucketArr.price
// }
// console.log(sum)