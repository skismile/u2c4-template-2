// write js code here corresponding to matches.html

matchesData=JSON.parse(localStorage.getItem("schedule"))
favouriteData=JSON.parse(localStorage.getItem("favourites"))||[]
// console.log(matchesData)

displayData(matchesData)


var filter=document.querySelector("#filterVenue")

filter.addEventListener("change",filterFun)

function filterFun(){
 if(filter.value=="none")
{
    displayData(matchesData)

}
else{
    var selected= matchesData.filter(function(ele){
        return ele.venue==filter.value
    })

    displayData(selected)

}
    //
    // console.log(selected)
}

 


   







function displayData(data){
    document.querySelector("tbody").innerHTML=""
data.forEach(function(ele){
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
td6.innerText="Add to Favourite"
td6.style.color="green"
td6.style.cursor="pointer"
td6.addEventListener("click",function(){
    favouriteFun(ele)
})

tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)


})


}

function favouriteFun(ele){
    favouriteData.push(ele)
// console.log(ele)s
localStorage.setItem("favourites",JSON.stringify(favouriteData))

}