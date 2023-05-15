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
    return Math.floor(Math.random()*3)
}

function sto_poc(){
    proby=3
    const gra = document.getElementById("div3")
    gra.classList.add("gra")
    
    document.getElementById("0").innerHTML=""
    document.getElementById("1").innerHTML=""
    document.getElementById("2").innerHTML=""
    document.getElementById("3").innerHTML=""
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
    console.log("liczba wylosowana "+los_sto())
    
    document.getElementById("0").innerHTML=kraj_1.capital
    document.getElementById("1").innerHTML=kraj_2.capital
    document.getElementById("2").innerHTML=kraj_3.capital
    document.getElementById("3").innerHTML=kraj_4.capital
    document.getElementById(los_sto()).innerHTML=kraj.capital
    
    console.log("stolica to -- "+kraj.capital)
    
}
function sto_kon(){
    const gra = document.getElementById("div3")
    gra.classList.add("gra")
    
    
    document.getElementById("0").innerHTML=""
    document.getElementById("1").innerHTML=""
    document.getElementById("2").innerHTML=""
    document.getElementById("3").innerHTML=""
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
    console.log("liczba wylosowana "+los_sto())
    
    document.getElementById("0").innerHTML=kraj_1.capital
    document.getElementById("1").innerHTML=kraj_2.capital
    document.getElementById("2").innerHTML=kraj_3.capital
    document.getElementById("3").innerHTML=kraj_4.capital
    document.getElementById(los_sto()).innerHTML=kraj.capital
    
    console.log("stolica to -- "+kraj.capital)

}

var proby = "3"
var punkty ="0"

function spr1(){
    if(los_sto()==0){
        punkty++
        sto_kon()
    }
    else if(los_sto()!=0){
        proby--
        sto_kon()
        while(proby<=0){
            document.getElementById("0").hidden="button"
            document.getElementById("3").hidden="button"
            document.getElementById("1").hidden="button"
            document.getElementById("2").hidden="button"
        }
    }
}
function spr2(){
    if(los_sto()==1){
        punkty++
        sto_kon()
    }
    else if(los_sto()!=1){
        proby--
        sto_kon()
        while(proby<=0){
            document.getElementById("0").hidden="button"
            document.getElementById("3").hidden="button"
            document.getElementById("1").hidden="button"
            document.getElementById("2").hidden="button"
        }
    }
}
function spr3(){
    if(los_sto()==2){
        punkty++
        sto_kon()
    }
    else if(los_sto()!=2){
        proby--
        sto_kon()
        while(proby<=0){
            document.getElementById("0").hidden="button"
            document.getElementById("3").hidden="button"
            document.getElementById("1").hidden="button"
            document.getElementById("2").hidden="button"
        }
    }
}
function spr4(){
    if(los_sto()==3){
        punkty++
        sto_kon()
    }
    else if(los_sto()!=3){
        proby--
        sto_kon()
        while(proby<=0){
            document.getElementById("0").hidden="button"
            document.getElementById("3").hidden="button"
            document.getElementById("1").hidden="button"
            document.getElementById("2").hidden="button"
        }
    }
}