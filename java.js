'use strict';

{
  const catText = document.querySelector('.cat-text');
  const resultText = document.querySelector('.result-text');
  const foodBtn = document.querySelector('#foods-btn');
  const treatBtn = document.querySelector('#treats-btn');
  const playBtn = document.querySelector('#play-btn');
  const bathBtn = document.querySelector('#bath-btn');
  const btns = [foodBtn, treatBtn, playBtn, bathBtn];
  const catFeelings = ['お腹が空いてそう', 'おやつが欲しそう', '遊んでほしそう', 'お風呂に入りたそう'];
  let randomFeeling = Math.floor(Math.random() * catFeelings.length);
  let intervalId;

  const changefeeling = () => {
  randomFeeling = Math.floor(Math.random() * catFeelings.length);
  catText.textContent = catFeelings[randomFeeling];
    intervalId = setInterval(() => {
      randomFeeling = Math.floor(Math.random() * catFeelings.length);
      catText.textContent = catFeelings[randomFeeling];
    }, 15000);
  }

  const checkFeeling = (event) => {
    const select = Number(event.currentTarget.dataset.id);
    catText.textContent = '';
    clearInterval(intervalId);
    if (randomFeeling === select) {
      resultText.textContent = '嬉しそうにしている';
    } else {
      resultText.textContent = '違ったのかも...';
    }
    // btns.forEach((btn) => {
    //   btn.classList.add('btn-disabled');
    // })
    setTimeout(() => {
      changefeeling();
      resultText.textContent = '';
    }, 3000);
  }

  foodBtn.addEventListener('click', checkFeeling);
  treatBtn.addEventListener('click', checkFeeling);
  playBtn.addEventListener('click', checkFeeling);
  bathBtn.addEventListener('click', checkFeeling);

  changefeeling();
}