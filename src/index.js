console.log('%c HI', 'color: firebrick')
// CHALLENGE 1- upon page load
// parse the response as JSON
// add image elements to the DOM for each image in the array
// This code says to wait until the page content loads
document.addEventListener('DOMContentLoaded', () => {
    // call fetch here - invoke fetch
    fetchImage()
    // this is the 2nd challenge
    //separate fetch request for grabbing the breeds
    fetchBreeds()
})
// Now declare fetchImage 
function fetchImage(){
    // Check to seee if it works w/debugger
    // Now fetch actual info
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    // Fetch always returns a promise b/c it runs asynchronously
    fetch(imgUrl)
    // .then waits for our fetch request to completely load
    // turn the response into json so it's readable
    // actual return value here is another promise
    .then(resp => resp.json())
    // take these dogs 
    // use console.log to make sure all is working here
    // access the array with "message"
    .then(dogs => showImage(dogs["message"]))
}

// now declare this new function 
function showImage(dogs){
    // pick where I'm grabbing these images from
    // look in elements - HTML to see where I can put these images
    const divImage = document.getElementById("dog-image-container")
    // go through array of dog image and for each dog image create
    // an image tag 
    // use either append or inner.html
    // first iterate through dogs
    dogs.forEach((image) => {
        //divImage.innerHTML += `<img src=${image} />`
        // how to do it w/append instead of innerHTML
        const img = document.createElement('img')
        img.src = image
        divImage.appendChild(img)
    })
}

// CHALLENGE 2

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    // .then waits for our fetch request to completely load
    // turn the response into json so it's readable
    // actual return value here is another promise
    .then(resp => resp.json())
    // take these dogs 
    // use console.log to make sure all is working here
    // access the array with "message"
    .then(dogs => addBreed(dogs["message"]))
}

function addBreed(dogs){
    // console.log(dogs)
    // loop on an object use in - use of for array
    for (dog in dogs){
        // console.log(dob)
        displayABreed(dog)
    }

    const select = document.getElementById("breed-dropdown");
    select.addEventListener("change", (event) => {
        const ul = document.getElementById("dog-breeds");
        ul.innerText = "";
        const letter = event.target.value;
        for (dog in dogs){
            if(dog.charAt(0) === letter){
                displayABreed(dog)
            }
        }
    })
    
function displayABreed(dog){
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerText = dog;
    const subUl = document.createElement("ul")
    ul.appendChild(li)
    li.addEventListener('click', (e) => e.target.style.color = "pink")
    for (type of dogs[dog]){
    // just like before, i want to create a list item
    const subLi = document.createElement('li');
    subLi.innerText = type;
    
    li.appendChild(subUl);
    subUl.appendChild(subLi);
    }
}

}


// look in elements and see where we want these dogs to go







    

    
    