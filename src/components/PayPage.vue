<template>
   <div class="pay-page">
      <div class="block block-style"></div>
      <div class="block__content container">
         <div class="content__pay">
            <h2 class="title">MAKE PAYMENTS EASY AND SIMPLIFY YOUR FINANCES</h2>
            <h6 class="subtitle">A new way to make payments easy, reliable and secure. You can manage all your transactions
               from your mobile phone.</h6>
            <div class="payment">
               <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=dqpdvAR8TPk.230224&" width="330"
                  height="50" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
               <img src="../assets/images/actors.png" alt="">
            </div>
            <img src="../assets/images/img.png" alt="" class="info__users">
         </div>
         <div class="block__ellipse-phone">
            <img src="../assets/images/ellipse.png" alt="" class="ellipse">
            <img src="../assets/images/phone.png" alt="" class="phone">
         </div>
      </div>
      <div class="block-second block-style"> </div>​
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
h2, h6 {
   margin: 0;
   padding: 0;
}

.pay-page {
   background: #1D1D1F;
   height: 90vh;
   width: 100%;
}

.block {
   position: absolute;
   left: -200px;
   top: -100px;
   filter: blur(150px);
   transform: matrix(1, 0, 0, 1, 0, 0);
}

.block-second {
   position: absolute;
   right: 0;
   bottom: 0;
   filter: blur(100px);
   transform: matrix(1, 0, 0, 1, 0, 0);
}

.block-style {
   width: 500px;
   height: 500px;
   background: radial-gradient(50% 50% at 50% 50%, rgba(175, 109, 234, 0.58) 0%, rgba(175, 109, 234, 0) 100%);
}

.block__content {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 100px 0 0 150px;
}

.content__pay {
   max-width: 660px;
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

img.phone {
   position: absolute;
   right: 300px;
   top: 190px;
}

.ellipse {
   position: absolute;
   right: 250px;
   top: 200px;
}
</style>