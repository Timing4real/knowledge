var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var timer = setInterval(changeSlide, interval);
var currentImg = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {  //reset
        imgs[i].styles.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }

    currentImg = n;

    imgs[currentImg].styles.opacity = 1;
    dots[currentImg].className += ' active';

}

currentImg = (0 + 1) % 4;

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}


//create a fnx called changeSlide() .Then use a  for loop set all images' opacity
//0 and remove active from the dots' class list to reset the active slide. Next,
//update currentImage to the index of the selected image, n. Lastly, make the active
//image visible by setting its opacity to 1 and add active to the corresponding 
//dots' class list.
