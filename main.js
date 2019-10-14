const body = document.querySelector('body');
const tText1 = document.querySelector('#t-text1');
const tText2 = document.querySelector('#t-text2');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div2P = div2.querySelector('p');
const div3Ul = div3.querySelector('#ul1');
const div3Li = div3.querySelector('.li-d3');
const form = document.querySelector('form');
const textArea = document.querySelector('textarea');
const mainDiv = document.querySelector('#mainDiv');

body.style.backgroundImage = 'url(https://media0.giphy.com/media/6Nv7BdrUl6Psc/giphy.gif)';
body.style.backgroundRepeat = 'repeat-y';

tText1.style.fontSize = '500px';
tText1.style.color = 'rgba(250,150,50,0.5)';

tText2.style.fontSize = '50px';
tText2.style.color = 'rgba(50,150,250,.75';

div1.style.background = 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(121,119,9,0.8617647742690826) 37%, rgba(0,212,255,1) 100%)';
div1.style.position = 'absolute'

div2.style.margin = '50px 100px 150px 200px';
div2.style.background = 'lightBlue';
div2.style.padding = '20px';
div2.style.position = 'absolute'
div2.style.zIndex = '0'

div2P.style.color = 'yellow';

div3.style.margin = '0px';
div3.style.padding = '200px';
div3.style.background = 'grey';

div3Ul.style.color = 'white';
div3Li.style.fontSize ='75px';

div3Li.style.color = 'red';

div4.style.width = '100px';
div4.style.display = 'inlineBlock';
div4.style.float = 'right';
div4.style.border = '20px dashed orange'

form.style.backgroundColor = 'purple';

textArea.style.border = '10px dotted'

