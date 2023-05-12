<template>
  <div class="pay-page">
    <div class="block__content container">
      <div class="content__pay">
        <h2 class="title">УПРОСТИТЕ СВОИ ПЛАТЕЖИ С ПОМОЩЬЮ ЮMoney</h2>
        <h6 class="subtitle">Новый способ сделать платежи простыми, надежными и безопасными</h6>
        <button @click="makePayment">Выполнить API-запрос</button>
        <!-- <div class="wrapper"> -->

        <!-- <button class="button-overlay"></button> -->
        <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=dqpdvAR8TPk.230224&" width="330" height="50"
          frameborder="0" allowtransparency="true" scrolling="no"></iframe>
        <!-- </div> -->
        <img src="../assets/images/img.png" alt="" class="info__users">
      </div>
      <img src="../assets/images/phone.png" alt="" class="phone">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isPayment: false
    };
  },
  mounted() {
    // const paymentIframe = this.$refs.paymentIframe;
    // paymentIframe.addEventListener('load', () => {
    //   paymentIframe.contentWindow.document.addEventListener('click', () => {
    //     paymentIframe.contentWindow.postMessage('привет', '*');
    //   });
    // });
    // window.addEventListener('message', (event) => {
    //   console.log(event.data);
    // });
    console.log(this.isPayment, "!!!")



  },
  updated() {
    console.log(this.isPayment, "курсы доступны?")
  },
  methods: {
    // getPayment() {
    //   console.log("--------------")
    //   this.isPayment = true
    //   console.log(this.isPayment, "курсы доступны?")
    // }
    // makeApiRequest() {
    //   const apiKey = 'C45A0B898BE7FC48E88A38658A82F12AFD86CF5309A38D45DDE8FBD75B6F24E2';

    //   axios.get('https://api.yoomoney.ru/path/to/endpoint', {
    //     headers: {
    //       Authorization: `Bearer ${apiKey}`,
    //     },
    //   })
    //     .then(response => {
    //       console.log('Ответ (status):', response.data.status);
    //     })
    //     .catch(error => {
    //       console.error('Ошибка при выполнении запроса:', error);
    //     });
    // },

    async makePayment() {
      const apiKey = 'B85BF25B3FB83AADE0D6ACBB0A13B72EDC819E6A47E9D6441BE6DA4E54AAE529';

      try {
        const requestData = {
          pattern_id: 'p2p',
          to: 'санечка',
          amount: '2345',
          message: 'комментарий',
          comment: 'комментарий',
        };

        // Отправка запроса request-payment
        const response = await axios.post(
          'https://yoomoney.ru/api/request-payment',
          requestData,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        // Получение статуса выполнения операции
        const status = response.data.status;
        console.log('Статус операции:', status);
      } catch (error) {
        console.error('Ошибка при выполнении операции:', error);
      }
    },


  }
};
</script>
 
<style>
h2,
h6 {
  margin: 0;
  padding: 0;
}

label.button {
  width: 330px;
  height: 50px;
}

.wrapper {
  position: relative;
  width: 330px;
  height: 50px;
}

.button-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
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