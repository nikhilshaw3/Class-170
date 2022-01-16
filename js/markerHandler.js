AFRAME.registerComponent("markerhandler",{
init: async function(){

this.el.addEventListener("markerFound",()=>{
console.log("Marker is found");
this.handleMarkerFound()
})

this.el.addEventListener("markerLost",()=>{
console.log("Marker is lost");
this.handleMarkerLost()
})

},

handleMarkerFound:function(){
var buttonDiv = document.getElementById("button-div")
buttonDiv.style.display = "flex"

var ratingButton = document.getElementById("rating-button")
var orderButton = document.getElementById("order-button")

ratingButton.addEventListener("click",function(){
    swal({
        icon:"Warning",
        title:"RATE THE DISH",
        text:"WORK IN PROGRESS",
    })
})

orderButton.addEventListener("click",function(){
    swal({
        icon:"https://i.imgur.com/4NZ6uLY.jpg",
        title:"THANKS!! FOR THE ORDER",
        text:"YOUR ORDER WILL BE SERVED SOON ON THE TABLE"
    })
})

},

handleMarkerLost:function(){
var buttonDiv = document.getElementById("button-div")
buttonDiv.style.display = "none"
}

})