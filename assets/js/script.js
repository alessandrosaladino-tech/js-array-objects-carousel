/*




Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo :gatto_che_urla:, questa volta usando gli oggetti.
:boolean-hug: Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.








*/






// Creo un array di oggetti contenete le immagini (oggetti) **CAMBIATO DA ME**
const slides = [
    {
        image: './assets/img/01.webp'
    },

    {
        image: './assets/img/02.webp'
    },

    {
        image: './assets/img/03.webp'
    },

    {
        image: './assets/img/04.webp'
    },

    {
        image: './assets/img/05.webp'
    },
]

let activeSlide = 0;

// select the dom elements
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')




//Stampo le immagini nel DOM  **CAMBIATO DA ME**
const imageMarkup = slides.map((element, i) => {
    console.log(element);
    // creo markup per ogni immagine 
    const slideMarkup = `<img class="${activeSlide === i ? 'active' : ''}" src="${element.image}" alt="">`

    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
})


const thumbsElement = document.querySelector('.thumbnails')



// Creo markup per ogni immagine per la thumbnails  **CAMBIATO DA ME**
const thimbPath = slides.map((element, i) => {
    console.log(element);
    const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${element.image}" alt="">`
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
})


const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);


// intercept click on the next icon 
nextEl.addEventListener('click', next)

function next(){
    console.log('cliccato su next');

    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')


    // activeSlide = 4

    if (activeSlide === slidesImages.length - 1) {                
        activeSlide = 0
        // activeSlide = 5
    } else {
        // increment the activeSlide of 1
        activeSlide++
    }


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')




    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')


}


// intercept click on the prev icon


// activeSlide = 0
prevEl.addEventListener('click', prev)

function prev(){
    console.log('cliccato su prev');


    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')

    if (activeSlide === 0) {
        activeSlide = slidesImages.length - 1
        // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }


    console.log(activeSlide);


    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
}