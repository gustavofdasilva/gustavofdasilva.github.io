let sections = document.getElementsByTagName("section")
let projects = document.getElementsByClassName("projects")
let elementHeight = 220

async function generateInfos() {
    let info = await getInfo()

    for(let i = 0; i < info.length; i ++) {   
        let link = document.createElement("a")
                link.setAttribute("class","project")
                link.setAttribute("href",info[i].link)
                link.setAttribute("target","_blank")
            let div = document.createElement("div")
                    div.setAttribute("class","project")
                    div.setAttribute("id",`p${i+1}`)
                let imgDiv = document.createElement("div")
                    imgDiv.style.backgroundImage = `url(${info[i].img})`
                let contentDiv = document.createElement("div")
                    let title = document.createElement("h3")
                        title.innerText = info[i].title.ptbr 
                        
                    let desc = document.createElement("p")
                        desc.innerText = info[i].desc.ptbr
                        
                    let status = document.createElement("p")
                        status.setAttribute("class",info[i].status)
                        status.innerText = info[i].status == "completed"?"Completo":"Em progresso"
                
        link.appendChild(div)
            div.appendChild(imgDiv)
            div.appendChild(contentDiv) 
                contentDiv.appendChild(title)
                contentDiv.appendChild(desc)
                contentDiv.appendChild(status)
        
        
        projects[0].appendChild(link)
        
    }
}

function getInfo() {
    return fetch('../../projectsInfo.json')
    .then((response) => response.json())
}

generateInfos()

window.addEventListener('scroll',() => {
    for (let i = 0; i < sections.length ; i++) {
         let elementTop = sections[i].getBoundingClientRect().top
         let windowTop = window.innerHeight
         if(elementTop < windowTop - elementHeight) {
             sections[i].classList.add("visible")
         } else {sections[i].classList.remove("visible")}
     }
 
 })