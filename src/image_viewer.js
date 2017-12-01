import big from '../assets/big.jpeg'
import small from '../assets/small.jpeg'
import '../style/image_viewer.css'

const image_small = document.createElement('img');
image_small.src = small;
document.body.appendChild(image_small);

const image_big = document.createElement('img');
image_big.src = big;
document.body.appendChild(image_big);
