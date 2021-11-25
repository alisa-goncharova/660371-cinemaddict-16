import { createSiteMenuTemplate } from './view/munu/site-menu-view.js';
import { RenderPosition, renderTemplate } from './render.js';
import { createFilmsTemplate } from './view/films/site-films-view.js';
import { createFilmCardTemplate } from './view/films/site-film-card-view.js';
import { createProfileTemplate } from './view/profile/site-profile-view.js';
import { createShowButtonTemplate } from './view/films/site-show-button-view';
import { createFilmDetailsPopup } from './view/popup/site-film-details-popup-view';

const CARD_COUNT = 5;
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

renderTemplate(siteHeaderElement, createProfileTemplate(), RenderPosition.BEFOREEND); //встраиваем .profile
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND); //встраиваем .main-navigation & .sort
renderTemplate(siteMainElement, createFilmsTemplate(), RenderPosition.BEFOREEND); //встраиваем секцию films

const siteFilmsList = siteMainElement.querySelector('.films-list__container');

for(let i = 0; i < CARD_COUNT; i++){ //отрисовываем каждый пункт фильма
  renderTemplate(siteFilmsList, createFilmCardTemplate(), RenderPosition.BEFOREEND);
}

renderTemplate(siteFilmsList, createShowButtonTemplate(), RenderPosition.AFTEREND); //отрисовка кнопки show more
renderTemplate(siteFooterElement, createFilmDetailsPopup(), RenderPosition.AFTEREND); //отрисовка popup с описанием фильма

//временно для удобства потом удалится (чтобы закрывалось по крестику)
document.querySelector('.film-details__close-btn').addEventListener('click', ()=>{
  document.querySelector('.film-details').style.display = 'none';
});
