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
    clearInterval
    const gra = document.getElementById("div3")
    gra.classList.add("gra")

    gra.innerHTML =""


    if(kraj_eu.region=="Europe"){
        var kraj_eu = json[losuj()]

        const div_eu = document.createElement("div")
        // kraj_eu.classList.add("slide-in-fwd-center")
     
         const nazwa_eu = document.createElement("h1")
         const reg_eu = document.createElement("h2")
         const flag_eu = document.createElement("img")
     
         nazwa_eu.innerHTML = kraj_eu.name
         reg_eu.innerHTML = kraj_eu.region
         flag_eu.setAttribute("src",kraj_eu.flag)
         flag_eu.classList.add("flaga")
     
         gra.appendChild(div_eu)
     
         div_eu.appendChild(nazwa_eu)
         div_eu.appendChild(flag_eu)
         div_eu.appendChild(reg_eu)
     
         console.log(kraj_eu)
    }

    if(kraj_eu.region=="Asia"){
        var kraj_as = json[losuj()]

        const div_as = document.createElement("div")
        // kraj_as.classList.add("slide-in-fwd-center")
     
         const nazwa_as = document.createElement("h1")
         const reg_as = document.createElement("h2")
         const flag_as = document.createElement("img")
     
         nazwa_as.innerHTML = kraj_as.name
         reg_as.innerHTML = kraj_as.region
         flag_as.setAttribute("src",kraj_as.flag)
         flag_as.classList.add("flaga")
     
         gra.appendChild(div_as)
     
         div_as.appendChild(nazwa_as)
         div_as.appendChild(flag_as)
         div_as.appendChild(reg_as)
     
         console.log(kraj_as)
    }
    if(kraj_eu.region=="North America"){
        var kraj_amn = json[losuj()]

        const div_amn = document.createElement("div")
        // kraj_amn.classList.add("slide-in-fwd-center")
     
         const nazwa_amn = document.createElement("h1")
         const reg_amn = document.createElement("h2")
         const flag_amn = document.createElement("img")
     
         nazwa_amn.innerHTML = kraj_amn.name
         reg_amn.innerHTML = kraj_amn.region
         flag_amn.setAttribute("src",kraj_amn.flag)
         flag_amn.classList.add("flaga")
     
         gra.appendChild(div_amn)
     
         div_amn.appendChild(nazwa_amn)
         div_amn.appendChild(flag_amn)
         div_amn.appendChild(reg_amn)
     
         console.log(kraj_amn)
    }
    if(kraj_eu.region=="South America"){
        var kraj_ams = json[losuj()]

        const div_ams = document.createElement("div")
        // kraj_amn.classList.add("slide-in-fwd-center")
     
         const nazwa_ams = document.createElement("h1")
         const reg_ams = document.createElement("h2")
         const flag_ams = document.createElement("img")
     
         nazwa_ams.innerHTML = kraj_ams.name
         reg_ams.innerHTML = kraj_ams.region
         flag_ams.setAttribute("src",kraj_ams.flag)
         flag_ams.classList.add("flaga")
     
         gra.appendChild(div_ams)
     
         div_amn.appendChild(nazwa_ams)
         div_amn.appendChild(flag_ams)
         div_amn.appendChild(reg_ams)
     
         console.log(kraj_ams)
    }

}
function serca(){
    const serce1 =document.createElement("img")
    const serce2 =document.createElement("img")
    const serce3 =document.createElement("img")

    serce1.setAttribute("src",'serce.png')
    serce2.setAttribute("src",'serce.png')
    serce3.setAttribute("src",'serce.png')
}