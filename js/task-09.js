const refs ={
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('span.color'),
}

refs.changeColorBtn.addEventListener('click', onclickButton);

 function onclickButton(event){
   const changeColor = getRandomHexColor() ;
   refs.body.style.backgroundColor = changeColor;
   refs.span.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
