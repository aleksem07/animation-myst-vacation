const endAnimationRulesPage = () => {
  const rulesPage = document.querySelector(`#rules`);
  const rulesLink = document.querySelector(`.rules__link`);

  if (!rulesPage.classList.contains(`screen--hidden`)) {
    const rulesItems = rulesPage.querySelectorAll(`.rules__item`);
    const lastItem = rulesItems[rulesItems.length - 1];
    const lastItemtext = lastItem.querySelector(`p`);

    lastItemtext.addEventListener(`animationend`, () => {
      rulesLink.classList.add(`rules__link--active`);
    });
  }

};

export default endAnimationRulesPage;
