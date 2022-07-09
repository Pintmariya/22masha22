let leftMargin = 0

const firstImage = document.querySelector( '.first_image');
const leftButton = document.querySelector( '#left_button');
const rightButton = document.querySelector( '#right_button');

leftButton.onclick = () => {
    leftMargin = leftMargin - 300;

    firstImage.style.marginLeft = leftMargin + 'px';
    console.log('Left');

};

rightButton.onclick = () => {
    rightMargin = leftMargin + 300;

    firstImage.style.marginRight = rightMargin + 'px';
    console.log('Right');
    
};
