const fillBlock = () => {
  const screenPrizes = document.querySelector(`#prizes`);
  const fill = document.querySelector(`.fill`);

  if (!screenPrizes.classList.contains(`screen--hidden`)) {
    fill.classList.add(`fill-show`);
  } else {
    fill.classList.remove(`fill-show`);
  }
};

export default fillBlock;
