
   const inputEl = document.querySelector('#validation-input');
   const attributeValue = inputEl.getAttribute('data-length');

 inputEl.addEventListener('blur', onInputBlur, true);
    function onInputBlur(event){
        if(event.currentTarget.value.length == attributeValue){
            return inputEl.classList.add("valid")
        }    
        inputEl.classList.add("invalid")
    }