const textWrapperAnima = (node, animationSettings) => {
  if (!node || !node.textContent) {
    return;
  }

  const {duration, delay, animationName} = animationSettings;

  const text = node.textContent;
  const lines = text.split(`\n`);
  const container = document.createElement(`span`);

  lines.forEach((line) => {
    Array.from(line).forEach((char) => {
      const charSpan = document.createElement(`span`);
      charSpan.textContent = char;

      charSpan.style.display = `inline-block`;
      charSpan.style.animationName = animationName;
      charSpan.style.animationDuration = `${duration}s`;
      charSpan.style.animationDelay = `${Math.random() * delay}s`;
      charSpan.style.animationFillMode = `backwards`;

      container.appendChild(charSpan);
    });

    node.textContent = ``;
    node.appendChild(container);
  });
};

const textTitle = document.querySelector(`.intro__title`);

const animationTextTitleSettings = {
  duration: 0.5,
  delay: 1,
  animationName: `text-wrapper-anima`
};

textWrapperAnima(textTitle, animationTextTitleSettings);

const textDate = document.querySelector(`.intro__date`);

const animationTextDateSettings = {
  duration: 0.3,
  delay: 1.5,
  animationName: `text-wrapper-anima`
};

textWrapperAnima(textDate, animationTextDateSettings);
