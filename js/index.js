// Your code goes here

//body

const theBody = document.querySelector('body')
const navBar = document.querySelector('header')

theBody.addEventListener('dblclick', (e)=> {
    alert(`Seriously? What's the point of doubleclicking this?`);
})

document.addEventListener('scroll', (e)=> {
    theBody.style.backgroundColor = "black";
    theBody.style.color = "white";
    navBar.style.backgroundColor = "lightseagreen";
    navBar.style.color = "white";
}, false)


//nav

const funBus = document.querySelector('.logo-heading')

document.addEventListener('keydown', (e) =>{
    funBus.style.fontSize = "60px";
})


//drag nav bar to lower level

const navLinks = document.querySelectorAll('.nav-link')

let newLocation = document.createElement('div')
document.querySelector('.intro').prepend(newLocation);

navLinks.forEach( link => {
    link.setAttribute('draggable', "true")
})

document.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('Text', e.target.className)
    newLocation.style.height = "50px";
    newLocation.style.width = "100%";
    newLocation.setAttribute('class',"newlocation")
})

document.addEventListener('drag', (e)=>{
})

document.addEventListener("dragover", (e) => {
    e.preventDefault();
});

document.addEventListener("dragenter", (e) => {
    if ( e.target.className == "newlocation" ) {
        e.target.style.border = "3px dotted red";
      }
});

document.addEventListener("drop", (e) =>{
    e.preventDefault();

    if (e.target.className == 'newlocation'){
        var data = e.dataTransfer.getData("Text")
        e.target.append(document.querySelector(data))
        e.target.style.fontSize = "2rem"
        e.target.style.color = "mediumaquamarine"
        e.target.style.border = ""
        e.target.style.margin = "10px"
    }
})

//flip the navigation links
const links = document.querySelectorAll('.nav-link')

links.forEach(link => {
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        link.style.transform = "rotate(360deg)";
        link.style.transition = "all 0.5s"
    })
})

//center all the h2
const headerTwo = document.querySelectorAll('h2');

window.addEventListener("resize", () =>{
    headerTwo.forEach(hTwo =>{
        hTwo.style.textAlign = "center";
    })
})

//content

const allPs = document.querySelectorAll('p')

allPs.forEach(theP => {
    theP.addEventListener('wheel', (e)=>{
        theP.style.color = "black";
        theP.style.backgroundColor = "mediumaquamarine";
        e.stopPropagation()
    })
})

//destinations

const destinations = document.querySelectorAll('.destination');

destinations.forEach( place => {
    place.addEventListener('mouseover', (e) => {
        place.style.backgroundColor = 'mediumaquamarine';
        place.style.transform = "scale(1.2)";
        place.style.transition = "all 0.3s";
    })
    place.addEventListener('mouseleave', (e) => {
        place.style.backgroundColor = 'transparent';
        place.style.transform = "scale(1)";
        place.style.transition = "all 0.3s";
    })
})
