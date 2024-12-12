console.log(document.querySelector('.js-button').classList.contains('js-button'));
function clickButton(parameter){
    let gamingButton = document.querySelector(parameter);
    if(!gamingButton.classList.contains('is-toggled')){
        clickOneButton();
        gamingButton.classList.add('is-toggled');
    }
    else{
        gamingButton.classList.remove('is-toggled');
    }
}
function clickOneButton(){
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton){
       previousButton.classList.remove('is-toggled');  
    }
   }
