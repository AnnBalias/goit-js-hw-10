import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const inpDelay = document.querySelector('input[name="delay"]');
const inpFulfilled = document.querySelector('input[value="fulfilled"]');
const inpRejected = document.querySelector('input[value="rejected"]');
const btn = document.querySelector('button');

form.addEventListener('submit', handSubmit);
function handSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const selectedBtn = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedBtn === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.success({
        position: 'topRight',
        title: 'OK',
        message: `${result}`,
        imageWidth: 24,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        iconColor: '#ffffff',
      });
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `${error}`,
        imageWidth: 24,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        iconColor: '#ffffff',
      });
    })
    .finally(() => form.reset());
}
