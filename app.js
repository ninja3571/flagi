var json = []

async function GetData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)
}
GetData()

function losuj(){
    max=json.length-1
    return Math.floor(Math.random()*max);
}

function los(){
    return Math.floor(Math.random()*4)
}

function sto_eu(){
    const gra = document.getElementById("div3")

    var kraj__eu = json[losuj()]

    const kraj_eu = document.createElement("div")
    kraj_eu.classList.add("slide-in-fwd-center")

    const nazwa_eu = document.createElement("h1")
    const flag_eu = document.createElement("img")

    nazwa_eu.innerHTML = kraj_eu.name
    flag_eu.setAttribute("src",kraj_eu.flag)

    kraj_eu.appendChild(nazwa_eu)
    kraj_eu.appendChild(flag_eu)

}
//function serca(){
//    const serce1 =document.createElement("img")
//    const serce2 =document.createElement("img")
//    const serce3 =document.createElement("img")
//
//
//}