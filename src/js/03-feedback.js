import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(onInputChange, 500));
formRef.addEventListener('submit', onBtnSubmitClick);

const LOCAL_STORAGE_KEY = 'feedback - form - state';

initPage();

function onInputChange(event) {
    const { name, value } = event.target;
    let saveData = load(LOCAL_STORAGE_KEY);
    saveData = saveData ? saveData : {};
    
    saveData[name] = value;

    save(LOCAL_STORAGE_KEY, saveData);
}

function initPage() {
    const saveData = load(LOCAL_STORAGE_KEY);
    if (!saveData) {
        return;
    }
    Object.entries(saveData).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
}

function onBtnSubmitClick(event) {
    event.preventDefault();
    
    const { elements: { email, message } } = event.currentTarget;
    console.log({ email: email.value, message: message.value });
    event.currentTarget.reset();
    remove(LOCAL_STORAGE_KEY);
}
