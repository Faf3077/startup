<template>
   <div class="pay-page">
     <div class="block__content container">
       <div class="content__pay">
         <h2 class="title">УПРОСТИТЕ СВОИ ПЛАТЕЖИ С ПОМОЩЬЮ ЮMoney</h2>
         <h6 class="subtitle">Новый способ сделать платежи простыми, надежными и безопасными</h6>
         <div class="payment">
           <iframe ref="paymentIframe"
             src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=dqpdvAR8TPk.230224&"
             width="330"
             height="50"
             frameborder="0"
             allowtransparency="true"
             scrolling="no"
             @load="onIframeLoad"
           ></iframe>
         </div>
         <img src="../assets/images/img.png" alt="" class="info__users">
       </div>
       <img src="../assets/images/phone.png" alt="" class="phone">
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {};
   },
 
   methods: {
     onIframeLoad() {
       this.$refs.paymentIframe.contentWindow.postMessage("Оплата прошла", "*");
     },
   },
 
   mounted() {
     window.addEventListener("message", (event) => {
       console.log(event.data);
     });
   },
 };
 </script>
 
<style>
h2,
h6 {
   margin: 0;
   padding: 0;
}

.pay-page {
   background-image: url(../assets/images/bcg.png);
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center center;
   height: 80vh;
   padding-top: 100px;
}

.block__content {
   display: flex;
   justify-content: space-around;
   align-items: center;
}

.content__pay {
   max-width: 660px;
}

img {
   pointer-events: none;
}


.title {
   font-weight: bold;
   font-size: 49px;
   line-height: 150%;
   letter-spacing: 0.12em;
   color: #FFFFFF;
   margin-bottom: 20px;
}

.subtitle {
   font-weight: 275;
   font-size: 20px;
   line-height: 30px;
   color: #FFFFFF;
   margin-bottom: 50px;
}

.payment {
   display: flex;
   align-items: center;
   margin-bottom: 50px;
}
</style>