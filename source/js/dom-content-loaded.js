const domContentLoaded = () => {
  document.addEventListener(`DOMContentLoaded`, function () {
    document.body.classList.add(`loaded`);
  });
};

export default domContentLoaded;
