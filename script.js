let collection = [
    {
        id: 1,
        imageSource: 'images/image1.jpg',
        title: 'picture title 1',
    },
    {
        id: 2,
        imageSource: 'images/image2.jpg',
        title: 'picture title 2',
    },
    {
        id: 3,
        imageSource: 'images/image3.jpg',
        title: 'picture title 3',
    },
    {
        id: 4,
        imageSource: 'images/image4.jpg',
        title: 'picture title 4',
    },
    {
        id: 5,
        imageSource: 'images/image5.jpg',
        title: 'picture title 5',
    },
];

let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let sliderContent = document.getElementById('sliderContent');
let indexSlider = 0;

function createDivTag(item){
let divTag = document.createElement('div');
divTag.classList.add('slide');

return divTag;
}

function createImgTag(item){
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', item.imageSource);
    imgTag.setAttribute('alt', item.title);
    imgTag.classList.add('imgslide');

    return imgTag;
}

function createH3Tag(item){
    let titleH3 = document.createElement('h3');
   titleH3.innerText = item.title;

   return titleH3;
}

function createDots(){
    let dots = document.createElement('div');
    dots.classList.add('dot-wrapper');

    collection.forEach(element => {
        let childDot = document.createElement('div');
        childDot.classList.add('dot');
        dots.appendChild(childDot);
    })
    return dots;
}

function setSlide(){
    sliderContent.innerHTML = ' ';
    let slideItem = createDivTag(collection[indexSlider]);
    let tagImg = createImgTag(collection[indexSlider]); 
    let headerTag = createH3Tag(collection[indexSlider]);
    let dots = createDots();

    slideItem.appendChild(tagImg);
    slideItem.appendChild(headerTag);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
}

function leftArrowClick() {
    if (indexSlider == 0) {
        indexSlider = collection.length-1;
        setSlide();
        return;
    }
    indexSlider =-1;
    setSlide();
}

leftArrow.addEventListener('click', leftArrowClick);

function rightArrowClick() {
    if (indexSlider == collection.length - 1){
        indexSlider = 0;
        setSlide();
        return;
    }
    indexSlider =+1;
    setSlide();
}

rightArrow.addEventListener('click', rightArrowClick);

setInterval(() => {
    rightArrowClick();
}, 2000);

setSlide();