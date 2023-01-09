'use strict';

const form = document.querySelector('form');
const pass = form.querySelector('.formPass');
const passConf = form.querySelector('.formPassConf');

let isValidate = false;

const regExpName = /^(([a-zA-Z-]{1,30})|([а-яА-ЯЁёІіЇїҐґЄє-]{1,30}))$/u;
const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const phoneNumber =
  /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
const regExpPassword =
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

function submit() {
  alert('The data has been sent');
}

function validateElem(elem) {
  if (elem.name === 'firstName' || elem.name === 'secondName') {
    if (!regExpName.test(elem.value) && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Enter a valid User Name!';
      isValidate = false;
    } else {
      elem.nextElementSibling.textContent = '';
      isValidate = true;
    }
  }

  if (elem.name === 'email') {
    if (!regExpEmail.test(elem.value) && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Enter a valid Email address!';
      isValidate = false;
    } else {
      elem.nextElementSibling.textContent = '';
      isValidate = true;
    }
  }

  if (elem.name === 'password') {
    if (!regExpPassword.test(elem.value) && elem.value !== '') {
      elem.nextElementSibling.textContent = 'Weak Password! (ex: abcABC123$)';
      isValidate = false;
    } else {
      elem.nextElementSibling.textContent = '';
      isValidate = true;
    }
  }
  if (elem.name === 'password') {
    if (pass.value !== passConf.value && passConf.value !== '') {
      pass.nextElementSibling.textContent = 'Passwords don`t match!';
      passConf.nextElementSibling.textContent = 'Passwords don`t match!';
      isValidate = false;
    } else {
      pass.nextElementSibling.textContent = '';
      passConf.nextElementSibling.textContent = '';
      isValidate = true;
    }
  }

  if (elem.name === 'passwordConfirmation') {
    if (pass.value !== passConf.value && passConf.value !== '') {
      pass.nextElementSibling.textContent = 'Passwords don`t match!';
      passConf.nextElementSibling.textContent = 'Passwords don`t match!';
      isValidate = false;
    } else {
      pass.nextElementSibling.textContent = '';
      passConf.nextElementSibling.textContent = '';
      isValidate = true;
    }
  }
}

for (let elem of form.elements) {
  if (
    !elem.classList.contains('form-check-input') &&
    elem.tagName !== 'BUTTON'
  ) {
    elem.addEventListener('blur', () => {
      validateElem(elem);
    });
  }
}

form.addEventListener('submit', (even) => {
  even.preventDefault();
  isValidate = true;

  for (let elem of form.elements) {
    if (
      !elem.classList.contains('form-check-input') &&
      elem.tagName !== 'BUTTON'
    ) {
      if (elem.value === '') {
        elem.nextElementSibling.textContent = 'This field is empty!';
        isValidate = false;
      } else {
        elem.nextElementSibling.textContent = '';
      }
    }
  }

  if (isValidate) {
    if (form.querySelector('.form-check-input').checked) {
      submit();
      form.reset();
    } else {
      alert('Agree to the terms and conditions');
    }
  }
});
