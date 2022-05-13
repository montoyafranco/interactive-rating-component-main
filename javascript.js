const submit_btn = document.querySelector('.boton');
const card_content_1 = document.querySelector('.card-content-1');
const card_content_2 = document.querySelector('.card-content-2');
const ratingBtns = document.querySelectorAll(".ratin-btn")
const score = document.querySelector('.score')

let starts_score = 3


submit_btn.addEventListener('click',onSubmit);

ratingBtns.forEach(btn =>{
    btn.addEventListener('click',ratingClick)
})



function ratingClick(event){
    ratingBtns.forEach(btn =>{
        btn.classList.remove('active')
    });
    if(event.target.classList.contains('ratin-btn')){
        event.target.classList.add('active');
    }else{
        event.target.parentElement.classList.add('active')
    }
    starts_score = event.target.textContent;
    

}
function onSubmit(){
    console.log('submit click')
    card_content_1.classList.add('esconder');

    score.textContent = starts_score
    card_content_2.classList.remove('esconder');
    

}
console.log(submit_btn)