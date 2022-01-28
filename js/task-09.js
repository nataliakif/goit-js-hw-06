const refs ={
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  span: document.querySelector('span.color'),
}

refs.changeColorBtn.addEventListener('click', onclickButton);

 function onclickButton(event){
   
   const getRandomHexColor=()=> `#${Math.floor(Math.random() * 16777215).toString(16)}`;

   refs.body.style.backgroundColor = getRandomHexColor();
   refs.span.textContent = getRandomHexColor();
}


