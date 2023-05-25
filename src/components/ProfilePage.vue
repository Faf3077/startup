<template>
  <div class="main-page">
    <div class="course__block">
      <div class="wrapper__course-block">
        <h2 class="title__profile">Добро пожаловать на страницу с видео-курсами, {{ username }}!</h2>
        <p>Хотите научиться HTML, CSS и JavaScript? Вы попали по адресу! Наши видео-курсы охватывают все, начиная с основ
          и заканчивая продвинутыми техниками. Готовьтесь улучшить свои навыки веб-разработки и создавать потрясающие
          веб-сайты.</p>
      </div>
      
      <h2 class="subtitle">Из чего состоит курс?</h2>
      <div class="content__subtitle">
        <ol class="style_1">
          <li>Введение в HTML
            <ol>
              <li>Основы HTML</li>
              <li>Структура HTML-документа</li>
              <li>Теги, атрибуты и элементы HTML</li>
              <li>Создание заголовков, параграфов, списков и ссылок</li>
              <li>Добавление изображений и мультимедиа на веб-страницу</li>
            </ol>
          </li>
          <li>Основы CSS
            <ol>
              <li>Что такое CSS и как им пользоваться</li>
              <li>Селекторы и свойства CSS</li>
              <li>Работа с цветами и фонами</li>
              <li>Размещение элементов на странице с помощью позиционирования и модели блока</li>
              <li>Создание анимаций и переходов с помощью CSS</li>
            </ol>
          </li>
          <li>Продвинутый CSS
            <ol>
              <li>Flexbox и Grid: создание адаптивных макетов</li>
              <li>Стилизация шрифтов и текста</li>
              <li>Практические примеры стилизации форм</li>
              <li>Медиа-запросы и создание адаптивного дизайна</li>
            </ol>
          </li>
          <li>Введение в JavaScript
            <ol>
              <li>Основы JavaScript</li>
              <li>Переменные, типы данных и операторы</li>
              <li>Управляющие конструкции: условные операторы и циклы</li>
              <li>Функции и область видимости переменных</li>
              <li>Работа с массивами и объектами</li>
            </ol>
          </li>
          <li>JavaScript на практике
            <ol>
              <li>Объектно-ориентированное программирование на JavaScript</li>
              <li>Работа с событиями и обработчиками событий</li>
              <li>Работа с DOM: поиск, изменение и создание элементов</li>
              <li>AJAX и обмен данными с сервером</li>
            </ol>
          </li>
          <li>Продвинутый JavaScript
            <ol>
              <li>Регулярные выражения</li>
              <li>Модули и зависимости</li>
              <li>Ошибки и исключения</li>
              <li>LocalStorage и работа с данными на клиентской стороне</li>
            </ol>
          </li>
        </ol>
        <img class="decor" src="../assets/images/decor.png" alt="">
      </div>
      <h2 class="title__course">Курс по HTML и CSS</h2>
      <div class="video-slider">
        <div class="video-slider__container">
          <video v-for="(video, index) in videos.htmlCss" :key="index" :src="`/course/lesson${index + 1}.mp4`"
            :controls="video.controls" :width="video.width"
            :class="{ active: currentVideoIndex.htmlCss === index }"></video>
        </div>
        <div class="video-slider__controls">
          <button class="video-slider__control" @click="previousVideo('htmlCss')">Предыдущие</button>
          <button class="video-slider__control" @click="nextVideo('htmlCss')">Следующие</button>
        </div>
      </div>
      <h2 class="title__course">Курс по JavaScript</h2>
      <div class="video-slider">
        <div class="video-slider__container">
          <video v-for="(video, index) in videos.javaScript" :key="index" :src="`/courseJS/lesson${index + 1}.mp4`"
            :controls="video.controls" :width="video.width"
            :class="{ active: currentVideoIndex.javaScript === index }"></video>
        </div>
        <div class="video-slider__controls">
          <button class="video-slider__control" @click="previousVideo('javaScript')">Предыдущие</button>
          <button class="video-slider__control" @click="nextVideo('javaScript')">Следующие</button>
        </div>
      </div>
      <div class="footer__elem">
        <div class="wrapper__block">
           <a href=""><img class="logo" src="../assets/images/logo.png" alt=""></a>
        </div>
        <div class="wrapper__block contacts">
           <a href="https://t.me/DTRSSU"><img src="../assets/images/telegram.png" alt=""></a>
           <a href="https://www.youtube.com/channel/UCfe4q1D3yk75-XfGi5KrUJA"><img src="../assets/images/youtube.png"
                 alt=""></a>
           <a href="https://vk.com/tehnopark_rgsu"><img src="../assets/images/vk.png" alt=""></a>
        </div>
        <div class="wrapper__block">
           <h3>Технопарк</h3>
           <div class="link">
              <a href="https://technopark-rgsu.ru/novosti/">Новости</a>
              <a href="https://technopark-rgsu.ru/kontakty/">Контакты</a>
           </div>
        </div>
        <div class="wrapper__block">
           <h3>Документы</h3>
           <div class="link">
              <a href="https://technopark-rgsu.ru/documents/1.pdf">Публичная оферта</a>
              <a href="https://technopark-rgsu.ru/documents/26.pdf">Политика конфиденциальности</a>
           </div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.username,
      currentVideoIndex: {
        htmlCss: 0,
        javaScript: 0
      },
      videos: {
        htmlCss: [],
        javaScript: []
      }
    };
  },
  created() {
    for (let i = 1; i <= 18; i++) {
      this.videos.htmlCss.push({
        controls: true,
        width: '800'
      });
    }

    for (let i = 1; i <= 15; i++) {
      this.videos.javaScript.push({
        controls: true,
        width: '800'
      });
    }
  },
  methods: {
    changeVideo(index, course) {
      this.currentVideoIndex[course] = index;
      const videos = document.querySelectorAll(`.video-slider__container.${course} video`);
      videos.forEach((video, i) => {
        if (i === this.currentVideoIndex[course]) {
          video.classList.add('active');
        } else {
          video.classList.remove('active');
          video.pause();
          video.currentTime = 0;
        }
      });
    },
    previousVideo(course) {
      let newIndex = this.currentVideoIndex[course] - 1;
      if (newIndex < 0) {
        newIndex = this.videos[course].length - 1;
      }
      this.changeVideo(newIndex, course);
    },
    nextVideo(course) {
      let newIndex = this.currentVideoIndex[course] + 1;
      if (newIndex >= this.videos[course].length) {
        newIndex = 0;
      }
      this.changeVideo(newIndex, course);
    },
  },
  mounted() {
    const htmlCssVideos = this.$el.querySelectorAll('.video-slider__container.htmlCss video');
    htmlCssVideos.forEach((video) => {
      video.addEventListener('ended', () => {
        this.nextVideo('htmlCss');
      });
    });

    const javaScriptVideos = this.$el.querySelectorAll('.video-slider__container.javaScript video');
    javaScriptVideos.forEach((video) => {
      video.addEventListener('ended', () => {
        this.nextVideo('javaScript');
      });
    });

    this.changeVideo(this.currentVideoIndex.htmlCss, 'htmlCss');
    this.changeVideo(this.currentVideoIndex.javaScript, 'javaScript');
  },
};
</script>

<style scoped>
.main-page {
  background-image: url(../assets/images/bcg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  padding: 100px 0 0 100px;
  color: #fff;
}

.title__profile {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 50px;
}

p {
  max-width: 800px;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
}

.subtitle {
  padding: 100px 0 50px;
  margin: 0 auto;
  font-size: 30px;
}
.content__subtitle{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 50px 0;
}
.decor{
  width: 800px;
}
.title__course{
  font-size: 30px;
  margin: 50px auto;
}
ol.style_1 {
  counter-reset: li;
  padding-left: 2.5rem;
  padding: .25rem 0 .25rem 2.75rem;
}

ol.style_1 small {
  opacity: .3;
}

ol.style_1 ol,
ol.style_1 ul {
  padding: .75rem 0 0 1.5rem;
}

ol.style_1 li {
  margin-bottom: .375rem;
}

ol.style_1>li {
  position: relative;
  counter-increment: li;
  min-height: 2rem;
  padding-top: .5rem;
  list-style: none;
}

ol.style_1>li::before,
ol.style_1>li::after {
  position: absolute;
  display: flex;
  opacity: 0.55;
}

ol.style_1>li::before {
  content: counter(li);
  left: -2.75rem;
  top: 0;
  height: calc(2rem - 1px);
  width: calc(2rem - 1px);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid currentcolor;
}

ol.style_1>li::after {
  content: '';
  left: -1.75rem;
  top: calc(2rem + 1px);
  height: calc(100% - 2.5rem);
  border-left: 1px solid currentcolor;
}

.course__block {
  display: flex;
  flex-direction: column;
}

.video-slider {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video-slider__container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.video-slider__container video {
  display: none;
  top: 0;
  left: 0;
}

.video-slider__container video.active {
  display: block;
}

.video-slider__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.video-slider__control {
  margin: 0 50px;
  padding: 7px 25px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  background-color: white;
}

.video-slider__control.active {
  background-color: #ccc;
}
.footer__elem {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 1100px;
  padding: 50px 0;
}

.contacts {
  display: flex;
  gap: 20px;
}

.wrapper__block h3 {
  color: #666363;
}

.link {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link:hover {
  text-decoration: underline;
}
</style>