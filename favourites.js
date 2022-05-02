// write js code here corresponding to favourites.html

var favouriteData=JSON.parse(localStorage.getItem("favourites"))
displayData(favouriteData)


function displayData(data){
    // document.querySelector("tbody").innerHTML=""
data.forEach(function(ele,index){
// console.log(" i m in")

var tr=document.createElement("tr")
var td1=document.createElement("td")
td1.innerText=ele.number
var td2=document.createElement("td")
td2.innerText=ele.teamA
var td3=document.createElement("td")
td3.innerText=ele.teamB
var td4=document.createElement("td")
td4.innerText=ele.date
var td5=document.createElement("td")
td5.innerText=ele.venue
var td6=document.createElement("td")
td6.innerText="Delete"
td6.style.color="red"
td6.style.cursor="pointer"
td6.addEventListener("click",function(){
deleteFun(ele,index)

})

tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)


})


}

function deleteFun(ele,index){
    console.log("clicked")
    favouriteData.splice(index,1)
   localStorage.setItem("favourites",JSON.stringify(favouriteData))
   window.location.reload()
}
console.log(favouriteData)