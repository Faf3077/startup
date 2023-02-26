<template>
  <div class="main-page">
    <div class="header">
      <div class="first-block__header container">
        <div class="logo"><img src="./assets/images/logo.png" /></div>
        <div class="nav">
          <router-link to="/" active-class="active">Main page</router-link>
          <router-link to="/pay" active-class="active">Pay page</router-link>
          <router-link to="/authorization" active-class="active">Log in</router-link>
        </div>
      </div>
    </div>
  </div>

  <router-view />
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
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.main-page {
  margin: 0;
  background: #1D1D1F;
}

.container {
  padding: 10px 50px;
}

.first-block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-size: 16px;
}

.nav {
  width: 550px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;
}

.active {
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 30px;
  background-color: #B3DD62;
  color: #111111;
  transition: 0.3s;
  border: none;
  outline: none;
}

</style>
