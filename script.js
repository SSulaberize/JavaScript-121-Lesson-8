let collection = [
    {
        id: 1,
        imageSource: 'images/image.1.jpg',
        title: 'picture title 1',
    },
    {
        id: 2,
        imageSource: 'images/image.2.jpg',
        title: 'picture title 2',
    },
    {
        id: 3,
        imageSource: 'images/image.3.jpg',
        title: 'picture title 3',
    },
    {
        id: 4,
        imageSource: 'images/image.4.jpg',
        title: 'picture title 4',
    },
    {
        id: 5,
        imageSource: 'images/image.5.jpg',
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

    return imgTag;
    
}

function createH3Tag(item){
    let titleH3 = document.createElement('h3');
   titleH3.innerText = item.title;

   return titleH3;
    
}

function setSlide(){
    let slideItem = createDivTag(collection[indexSlider]);
    let tagImg = createImgTag(collection[indexSlider]); 
    let headerTag = createH3Tag(collection[indexSlider]);

    slideItem.appendChild(tagImg);
    slideItem.appendChild(headerTag);
    sliderContent.appendChild(slideItem);
}

leftArrow.addEventListener('click', function (){
indexSlider -=1
setSlide();
});

rightArrow.addEventListener('click', function (){
    indexSlider +=1
    setSlide();
    });

setSlide();