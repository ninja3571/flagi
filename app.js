var json = []

async function GetData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    console.log(json)
}
GetData()

var proby = "3"
var punkty ="0"

function losuj(){
    max=json.length-1
    return Math.floor(Math.random()*max);
}

function los_sto(){
    return Math.floor(Math.random()*3)
}

function sto_poc(){
    proby=3
    punkty=0

    const gra = document.getElementById("div3")
    gra.classList.add("gra")


    
    document.getElementById("but0").innerHTML=""
    document.getElementById("but1").innerHTML=""
    document.getElementById("but2").innerHTML=""
    document.getElementById("but3").innerHTML=""
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
    
    console.log("liczba wylosowana "+los_sto())
    
    document.getElementById("but0").innerHTML=kraj_1.capital
    document.getElementById("but1").innerHTML=kraj_2.capital
    document.getElementById("but2").innerHTML=kraj_3.capital
    document.getElementById("but3").innerHTML=kraj_4.capital
    document.getElementById("but"+los_sto()).innerHTML=kraj.capital
    
    console.log("stolica to -- "+kraj.capital)
    
}
function sto_kon(){
    const gra = document.getElementById("div3")
    gra.classList.add("gra")
    
    
    document.getElementById("but0").innerHTML=""
    document.getElementById("but1").innerHTML=""
    document.getElementById("but2").innerHTML=""
    document.getElementById("but3").innerHTML=""
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
    
    console.log("liczba wylosowana "+los_sto())
    console.log("stolica to -- "+kraj.capital)

    document.getElementById("but0").innerHTML=kraj_1.capital
    document.getElementById("but1").innerHTML=kraj_2.capital
    document.getElementById("but2").innerHTML=kraj_3.capital
    document.getElementById("but3").innerHTML=kraj_4.capital
    document.getElementById("but"+los_sto()).innerHTML=kraj.capital
    
    console.log("stolica to -- "+kraj.capital)

}


function spr1(){
    if(los_sto()==0){
        punkty++
        sto_kon()
    }
    else if(los_sto()!=0){
        proby--
        if(proby>0){
            sto_kon()
        }
        if(proby<=0){
            document.write("Odświerz stronę aby zagrać ponownie")
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
        if(proby>0){
            sto_kon()
        }
        if(proby<=0){
            document.write("Odświerz stronę aby zagrać ponownie")
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
        if(proby>0){
                sto_kon()
        }
        if(proby<=0){
            document.write("Odświerz stronę aby zagrać ponownie")
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
        if(proby>0){
            sto_kon()
        }
        if(proby<=0){
            document.write("Odświerz stronę aby zagrać ponownie")
        }
    }
}