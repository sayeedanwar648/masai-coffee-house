// Add the coffee to local storage with key "coffee"
const url=" https://masai-mock-api.herokuapp.com/coffee/menu"
fetch(url)
.then(function(res){
    return res.json();
}).then(function(res){
    // data=res.data
    let data=res.menu.data
    appendata(data)
    console.log(data)
}).catch(function(err){
    console.log(err)
})
function appendata(data){
    data.forEach(function(el){
        let container=document.getElementById("menu")
        let image=document.createElement("img");
        image.src=el.image;
        let price=document.createElement("p");
        price.innerText=el.price;
        let type=document.createElement("p");
        type.innerText=el.title
        let button=document.createElement("button")
        button.innerText="Add to bucket"
         button.setAttribute("id","add_to_bucket")
        button.addEventListener("click",function(){
            adproduct(el)
        })
        let div=document.createElement("div")
        div.append(image,type,price,button)
        container.append(div)
        
    })
}
let bucketArr=JSON.parse(localStorage.getItem("coffee"))||[]


function adproduct(el){
    
    let count=document.getElementById("coffee_count")
    count.innerText=bucketArr.length+1
    bucketArr.push(el)
    localStorage.setItem("coffee",JSON.stringify(bucketArr))

}




// description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir."
// id: 1
// image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
// ingredients: ['Coffee']
// price: 540
// title: "Black"