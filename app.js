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

function los_sto(){
    return Math.floor(Math.random()*4)+1
}

function sto_poc(){
    clearInterval
    const gra = document.getElementById("div3")
    gra.classList.add("gra")
    
    document.getElementById("1").innerHTML=""
    document.getElementById("2").innerHTML=""
    document.getElementById("3").innerHTML=""
    document.getElementById("4").innerHTML=""
    gra.innerHTML =""
    
    document.getElementById("zycia").innerHTML="Pozostały " + proby +" życia"
    document.getElementById("punkty").innerHTML=punkty
    
    
    var kraj = json[losuj()]
    var kraj_1 = json[losuj()]
    var kraj_2 = json[losuj()]
    var kraj_3 = json[losuj()]
    var kraj_4 = json[losuj()]
    
    const div = document.createElement("div")
    div.classList.add("slide-in-fwd-center")
    div.classList.add("kwadrat")
    
    const nazwa = document.createElement("h1")
    const reg = document.createElement("h2")
    const flag = document.createElement("img")
    
    nazwa.innerHTML = kraj.name
    reg.innerHTML = kraj.region
    flag.setAttribute("src",kraj.flag)
    flag.classList.add("flaga")
    
    gra.appendChild(div)
    
    div.appendChild(nazwa)
    div.appendChild(flag)
    div.appendChild(reg)
    
    console.log(kraj)
    console.log(los_sto())
    
    document.getElementById("1").innerHTML=kraj_1.capital
    document.getElementById("2").innerHTML=kraj_2.capital
    document.getElementById("3").innerHTML=kraj_3.capital
    document.getElementById("4").innerHTML=kraj_4.capital
    document.getElementById(los_sto()).innerHTML=kraj.capital
    
    console.log(kraj.capital)
    
}
function sto_kon(){
    clearInterval
    const gra = document.getElementById("div3")
    gra.classList.add("gra")
    
    
    document.getElementById("1").innerHTML=""
    document.getElementById("2").innerHTML=""
    document.getElementById("3").innerHTML=""
    document.getElementById("4").innerHTML=""
    gra.innerHTML =""
    
    document.getElementById("zycia").innerHTML="Pozostały " + proby +" życia"
    document.getElementById("punkty").innerHTML=punkty
    
    
    var kraj = json[losuj()]
    var kraj_1 = json[losuj()]
    var kraj_2 = json[losuj()]
    var kraj_3 = json[losuj()]
    var kraj_4 = json[losuj()]
    
    const div = document.createElement("div")
    div.classList.add("slide-in-fwd-center")
    div.classList.add("kwadrat")
    
    const nazwa = document.createElement("h1")
    const reg = document.createElement("h2")
    const flag = document.createElement("img")
    
    nazwa.innerHTML = kraj.name
    reg.innerHTML = kraj.region
    flag.setAttribute("src",kraj.flag)
    flag.classList.add("flaga")
    
    gra.appendChild(div)
    
    div.appendChild(nazwa)
    div.appendChild(flag)
    div.appendChild(reg)
    
    console.log(kraj)
    console.log(los_sto())
    
    document.getElementById("1").innerHTML=kraj_1.capital
    document.getElementById("2").innerHTML=kraj_2.capital
    document.getElementById("3").innerHTML=kraj_3.capital
    document.getElementById("4").innerHTML=kraj_4.capital
    document.getElementById(los_sto()).innerHTML=kraj.capital
    
    console.log(kraj.capital)
}

var proby = "3"
var punkty ="0"

function spr1(){
    if(los_sto()==1){
        punkty=punkty+1
        sto_kon()
    }
    else{
        proby=proby-1
        sto_kon()
    }
}
function spr2(){
    if(los_sto()==2){
        punkty++
        sto_kon()
    }
    else{
        proby--
        sto_kon()
    }
}
function spr3(){
    if(los_sto()==3){
        punkty++
        sto_kon()
    }
    else{
        proby--
        sto_kon()
    }
}
function spr4(){
    if(los_sto()==4){
        punkty++
        sto_kon()
    }
    else{
        proby--
        sto_kon()
    }
}