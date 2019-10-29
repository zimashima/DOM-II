// Your code goes here

//body

const theBody = document.querySelector('body')

theBody.addEventListener('dblclick', (e)=> {
    alert(`Seriously? What's the point of doubleclicking this?`);
})
//nav

//intro

//content

//destinations

const destinations = document.querySelectorAll('.destination');

destinations.forEach( place => {
    place.addEventListener('mouseover', (e) => {
        place.style.backgroundColor = 'whitesmoke';
    })
})

destinations.forEach( place => {
    place.addEventListener('mouseleave', (e) => {
        place.style.backgroundColor = 'transparent';
    })
})