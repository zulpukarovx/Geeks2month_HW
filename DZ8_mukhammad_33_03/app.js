// function init() {
//     let name = prompt('name - ')
//     let displayName = () => {
//         return alert(name)
//     }
//     return displayName()
// }
// init()

//slider
const fileInput = document.querySelector('#file')
const slider = document.querySelector('.slider')
const slidesContainer = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const deleteButton = document.querySelector('.delete-image-button')

let imgFiles = []
let currentSlide = 0

fileInput.onchange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return alert('Файлы не выбраны!')

    imgFiles = imgFiles.concat(files)
    currentSlide = 0

    slidesContainer.innerHTML = ''

    imgFiles.forEach((file, index) => {
        const imgUrl = URL.createObjectURL(file);
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${imgUrl}" alt="Slide ${index + 1}">`
        slidesContainer.appendChild(slide)
    })
    showIndex(currentSlide)
}


function showIndex(index) {
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    })
}
deleteButton.addEventListener("click", () => {
    if (imgFiles.length === 0) {
        return
    }

    imgFiles.splice(currentSlide, 1)

    if (currentSlide >= imgFiles.length) {
        currentSlide = imgFiles.length - 1
    }

    updateSlides();

    fileInput.value = imgFiles.length
})

function updateSlides() {
    slidesContainer.innerHTML = ''
    imgFiles.forEach((file, index) => {
        const imgUrl = URL.createObjectURL(file)
        const slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgUrl}" alt="Slide ${index + 1}">`
        slidesContainer.appendChild(slide)
    })

    showIndex(currentSlide)
}

prevButton.addEventListener('click', ()=> {
    if(currentSlide > 0){
        currentSlide --
        showIndex(currentSlide)
    }
})

nextButton.addEventListener('click', () => {
    if(currentSlide < imgFiles.length - 1){
        currentSlide++
        showIndex(currentSlide)
    }
})