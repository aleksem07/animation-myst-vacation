// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import domContentLoaded from './dom-content-loaded.js';
import fillBlock from './fill-block.js';
import endAnimationRulesPage from './end-animation-rules-page.js';
import textWrapperAnima from './text-wrapper-anima.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
domContentLoaded();
fillBlock();
endAnimationRulesPage();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
