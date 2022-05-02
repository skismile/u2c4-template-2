// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",subFun)


function subFun(){
    event.preventDefault()
    var num= document.querySelector("#matchNum").value
    var teamA=document.querySelector("#teamA").value
    var teamB=document.querySelector("#teamB").value
    var date=document.querySelector("#date").value
    var venue=document.querySelector("#venue").value

    var formArr=JSON.parse(localStorage.getItem("schedule"))||[]
    var formObj={
number:num,
teamA:teamA,
teamB:teamB,
date: date,
venue:venue,
    }
// console.log(formObj)
// console.log(num,teamA,teamB,date,venue)
formArr.push(formObj)
console.log(formArr)
    // console.log("clicked")

localStorage.setItem("schedule",JSON.stringify(formArr))

}