<template>
  <div class="main-page">
    <div class="header">
      <div class="first-block__header container">
        <div class="logo"><img src="./assets/images/selection.png" /></div>
        <div class="nav">
          <router-link to="/" active-class="active">Main page</router-link>
          <router-link to="/pay" active-class="active"><a class="pay" href="">Pay</a></router-link>
          <router-link to="/authorization" active-class="active">Login or Signup</router-link>
        </div>
      </div>
      <div class="second-block__header">

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
}

.container {
  padding: 10px 50px;
}

.first-block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: -webkit-linear-gradient(90deg, #81a9e3, #06153d);
  background: linear-gradient(90deg, #81a9e3, #06153d);
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
  border-radius: 15px;
  background-color: rgb(63, 63, 63);
  transition: 0.3s;
  border: none;
  outline: none;
}
</style>
