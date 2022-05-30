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
let total_sum=bucketArr.reduce(function(sum,el){
    return sum+Number(el.price)
},0)
let total_price=document.getElementById("total_amount")
total_price.innerHTML=total_sum
