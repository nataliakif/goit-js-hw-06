const refs = {
     inputEl: document.querySelector('#name-input'),
     outputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChange);
function onInputChange(event){
    if(!event.currentTarget.value){
        return refs.outputEl.textContent = 'Anonymous';
    } 
    console.log(event.currentTarget.value);
    refs.outputEl.textContent = event.currentTarget.value;
}