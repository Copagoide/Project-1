const changeTextButton = document.querySelector('.changeText') ;
const readTextButton = document.querySelector('.readText') ;
const code = document.querySelector('#code') ;
const input = document.querySelector('.userInput input') ;
const submitButton = document.querySelector('.captchaButton') ;


changeTextButton.addEventListener('click' , () => {
    code.textContent = createCaptcha() ;
}) ;

window.addEventListener('load' , () => {
    code.textContent = createCaptcha() ;
}) ;

function createCaptcha() {
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '0','1','2','3','4','5','6','7','8','9'] ;
    let a = letters[Math.floor(Math.random() * letters.length)] ;
    let b = letters[Math.floor(Math.random() * letters.length)] ;
    let c = letters[Math.floor(Math.random() * letters.length)] ;
    let d = letters[Math.floor(Math.random() * letters.length)] ;
    let e = letters[Math.floor(Math.random() * letters.length)] ;
    let f = letters[Math.floor(Math.random() * letters.length)] ;
    let g = letters[Math.floor(Math.random() * letters.length)] ;
    let code = a + b + c + d + e + f + g ;
    return code ;
}

const hideCaptcha = document.querySelector('.captcha-container') ;
const showInfo = document.querySelector('.contactpage-container') ;


submitButton.addEventListener('click' , () => {
    let val = input.value ;
    if(val == '') {
        alert('Please enter the text.') ;
    }
    else if(val === code.textContent) {
        hideCaptcha.classList.toggle('hidden');
        showInfo.classList.toggle('hidden');
        hideCaptcha.classList.toggle('bye-bye');
        showInfo.classList.toggle('hello-there');
        alert('Valid code.') ;
    }
    else {
        alert('Invalid code.') ;
    }
})

readTextButton.addEventListener('click', () => {
    let text = code.textContent ;
    responsiveVoice.speak(text) ;
})
