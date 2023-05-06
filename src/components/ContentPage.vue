<template>
   <div class="main-page">
      <div class="video-bg">
         <video src="../assets/video/course-video.mp4" type="video/mp4" autoplay muted loop></video>
         <div class="effects"></div>
         <div class="video-bg__content">
            <h1>Учебный центр РГСУ предоставит вам курсы по программированию</h1>
            <button class="more">Узнать больше</button>
         </div>
      </div>
      <div class="second-block bg">
         <h3>Технопарк РГСУ</h3>
         <p>Технопарки РГСУ - это площадки для ранней профориентации школьников в области перспективных
            инженерных и информационных технологий. Лаборатории технопарка доступны для реализации IT-проектов
            талантливой молодежи, направленных на развитие социальной сферы, в том числе с использованием
            высокотехнологичного ЧПУ
            оборудования и оборудования для аддитивного производства. Центр создан на базе факультета
            информационных технологий ФГБОУ ВПО "РГСУ" при поддержке правительства Москвы</p>
      </div>
      <div class="third-block">
         <h3>Курс для повышения квалификации по разработке веб-сайтов</h3>
         <div class="block-content">
            <img src="../assets/images/img1.png" alt="">
            <div class="course">
               <p>Данный курс даст вам возможность развиваться в направлении веб-разработки, предоставит возможность
                  углубиться в основы программирования, тем самым повышая ваши профессиональные качества как разработчика.
                  Курс состоит из нескольких этапов: <br><br>

                  - Первый этап (развитие навыков верстки, использование HTML и CSS, применение новых технологий, а также
                  обучение адаптивной верстке)<br><br>

                  - Второй этап (введение в JavaScript и ECMAScript2023)<br><br>

                  - Третий этап, заключительный (введение в фремворк VUE 2 и 3 версии)</p>
               <div class="style-btn"><button class="buy">Приобрести курс</button></div>
            </div>
         </div>
      </div>
      <div class="footer bg">
         <div class="footer-elem">
            <div class="wrapper">
               <a href=""><img class="logo" src="../assets/images/logo.png" alt=""></a>
            </div>
            <div class="wrapper contacts">
               <a href="https://t.me/DTRSSU"><img src="../assets/images/telegram.png" alt=""></a>
               <a href="https://www.youtube.com/channel/UCfe4q1D3yk75-XfGi5KrUJA"><img src="../assets/images/youtube.png"
                     alt=""></a>
               <a href="https://vk.com/tehnopark_rgsu"><img src="../assets/images/vk.png" alt=""></a>
            </div>
            <div class="wrapper">
               <h3>Технопарк</h3>
               <div class="link">
                  <a href="https://technopark-rgsu.ru/novosti/">Новости</a>
                  <a href="https://technopark-rgsu.ru/kontakty/">Контакты</a>
               </div>
            </div>
            <div class="wrapper">
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

      }
   }
}
</script>

<style>
.main-page {
   font-family: 'Montserrat', sans-serif;
}

p {
   line-height: 1.5em;
}

.bg {
   background: #1D1D1F;
}

.video-bg {
   height: 80vh;
   width: 100%;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
}

.video-bg video {
   position: absolute;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
   height: 80vh;
   object-fit: cover;
}

.more:hover {
   background-color: #76a023;
}

.buy:hover {
   background-color: #545552;
}

.effects {
   position: absolute;
   object-fit: cover;
   top: 0;
   left: 0;
   z-index: 2;
   width: 100%;
   height: 80vh;
   background-color: rgba(0, 0, 0, 0.6);
}

.video-bg__content {
   z-index: 2;
   color: #ffffff;
   font-size: 30px;
   text-align: center;
}

.video-bg__content h1 {
   max-width: 1100px;
   margin-bottom: 200px;
}

.video-bg__content button {
   font-size: 20px;
   padding: 10px 50px;
   cursor: pointer;
   border-radius: 30px;
   background-color: #B3DD62;
   border: none;
}

.main {
   max-width: 1600px;
   margin: 0 auto;
   margin-top: 50px;
   padding: 0 20px;
}

.second-block {
   text-align: center;
   color: #ffffff;
   padding: 100px 0;
}

.second-block h3 {
   font-size: 30px;
}

.second-block p {
   font-size: 24px;
   max-width: 900px;
   margin: 0 auto;
}

.third-block {
   background: rgb(197, 215, 161);
   color: #313136;
   padding: 100px 0;
}

.third-block h3 {
   margin: 0 auto;
   text-align: center;
   font-size: 30px;
   max-width: 600px;
}

.block-content {
   display: flex;
   align-items: center;
   justify-content: space-around;
}

.block-content img {
   max-width: 600px;
}

.block-content p {
   max-width: 800px;
   font-size: 24px;
}

.block-content button {
   font-size: 20px;
   padding: 15px 50px;
   cursor: pointer;
   border-radius: 30px;
   background-color: #3a3a3f;
   border: none;
   color: #ffffff;

}

.style-btn {
   text-align: center;
}


.footer-elem {
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 1100px;
   padding: 30px 0;
}

.contacts {
   display: flex;
   gap: 20px;
}

.wrapper h3 {
   color: #666363;
}

.link {
   display: flex;
   flex-direction: column;
   gap: 10px;
}

.link:hover {
   text-decoration: underline;
}</style>
