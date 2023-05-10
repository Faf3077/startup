<template>
	<div class="main-page">
		<div class="content-singin">
			<form @submit.prevent="login">
				<h2>Авторизация</h2>
				<div id="wrapper">
					<div class="float-group">
						<input id="email" v-model="Email" required type="text" />
						<label class="float-label">Электронная почта</label>
					</div>
					<div class="float-group">
						<input id="pass" v-model="Password" required type="password" autocomplete="on" />
						<label class="float-label">Пароль</label>
					</div>
				</div>
				<button type="submit">
					<span>
						Войти
					</span>
				</button>
				<span class="link-to-reg">Ещё нет профиля? <router-link
						to="/registration">Зарегистрируйтесь</router-link></span>
			</form>
			<div class="decoration">
				<h3 class="text">Узнавайте новое с технопарком РГСУ</h3>
				<span class="text">Авторизуйтесь, чтобы начать обучение</span>
				<img src="../assets/images/decoration-auth.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import router from '../router/index.js';
export default {
	data() {
		return {
			Email: '',
			Password: '',
			users: "",
		};
	},
	methods: {
		login() {
			const user = this.users.find(
				(usr) => usr.Email === this.Email && usr.Password === this.Password
			);
			if (user) {
				this.$store.state.auth = true;
				router.replace('/profile')
				this.$store.state.username = this.Email.split('@')[0];
				console.log(this.$store.state.username)
				console.log(this.$store.state.auth)
			} else {
				alert("Данные не верны");
			}
		},
		async auth() {
			try {
				const users = await fetch("http://localhost:5000/users");
				const data = await users.json();
				this.users = data;
				console.log(this.users);
			} catch (err) {
				console.log(err);
			}
		}
	},
	mounted() {
		this.auth()
	}
}
</script>
 
<style scoped>
body {
	background: #6ED0F6;
	color: #fff;
	font-family: 'Raleway', sans-serif;
}
.main-page{
	background-image: url(../assets/images/bcg.png) ;
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center center;
}
.content-singin {
	display: flex;
	justify-content: center;
	height: 90vh;
	align-items: center;
	gap: 10rem;
}

form {
	width: 450px;
	height: 370px;
}

form h2 {
	color: #fff;
	font-size: 25px;
	text-align: center;
	margin-bottom: 50px;
}

input {
	background: #fff;
	border: none;
	border-radius: 10px;
	font-size: 27px;
	font-family: 'Raleway', sans-serif;
	height: 72px;
	width: 100%;
	margin-bottom: 10px;
	text-indent: 20px;
}

input:focus {
	outline: none;
}

input:focus~.float-label,
input:not(:focus):valid~.float-label {
	top: 5px;
	color: black;
	padding: 0.1em 0.6em;
	border-radius: 0.25em;
	font-size: 12px;
	opacity: 70%;
}

.float-group {
	position: relative;
}

.float-label {
	position: absolute;
	left: 3%;
	top: 25%;
	pointer-events: none;
	padding: 0.5em;
	color: var(--placeholder-color);
	transition: all 200ms ease-in-out;
}

button {
	background: #b57bbd;
	border: none;
	border-radius: 8px;
	color: #fff;
	cursor: pointer;
	font-family: 'Raleway', sans-serif;
	font-size: 27px;
	height: 72px;
	width: 100%;
	margin-bottom: 50px;
	overflow: hidden;
}

button:hover {
	background: #835c92;
}

.link-to-reg {
	color: #fff;
}

.link-to-reg a {
	text-decoration: underline;
}

.link-to-reg a:hover {
	color: aqua;
}

.decoration {
	display: flex;
	flex-direction: column;
}

.decoration h3 {
	font-size: 30px;
}

.decoration span {
	font-size: 16px;
}

.text {
	color: #fff;
}
</style>
 