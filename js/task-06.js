
   const inputEl = document.querySelector('#validation-input');
   const attributeValue = inputEl.getAttribute('data-length');

 inputEl.addEventListener('blur', onInputBlur);
    function onInputBlur(event){
        if(event.currentTarget.value.length == attributeValue){
            event.currentTarget.classList.add("valid");
            event.currentTarget.classList.remove("invalid");
        }  else{  
            event.currentTarget.classList.add("invalid");
            event.currentTarget.classList.remove("valid");
        }
    }