<template>
  <div class="header">
    <div class="first-block__header container">
      <a href=""><img class="logo" src="./assets/images/logo.png" /></a>
      <div class="nav">
        <router-link to="/" active-class="active">Главная</router-link>
        <router-link to="/pay" active-class="active">Купить курс</router-link>
        <div v-if="isAuthenticated">
          <router-link to="/profile" active-class="active">Профиль</router-link>
        </div>
        <router-link to="/authorization" v-else active-class="active">Войти</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>



<script>
export default {
  data() {
    return {
      isAuthenticated: this.$store.state.auth,
    }
  },
  mounted() {
    this.$watch(
      () => this.$store.state.auth,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          this.isAuthenticated = newVal;
          this.username = this.$store.state.username;
        }
      }
    );
  }
};
</script>


<style>
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

.header {
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

img {
  pointer-events: none;
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

.logo {
  max-width: 200px;
}
</style>
