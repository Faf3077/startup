<template>
	<div class="main-page">
		<div class="content-reg">
			<form @submit.prevent="register">
				<h2>Регистрация</h2>
				<div id="wrapper">
					<div class="float-group">
						<input name="email" v-model="Email" required type="mail" />
						<lable class="float-label">Электронная почта</lable>
					</div>
					<div class="float-group">
						<input name="password" v-model="Password" required type="password" />
						<lable class="float-label">Пароль</lable>
					</div>
					<div class="float-group">
						<input name="confirmPassword" v-model="confirmPassword" required type="password" />
						<lable class="float-label">Подтвердите пароль</lable>
					</div>
				</div>
				<button type="submit">
					<span>
						Зарегестрироваться
					</span>
				</button>
				<span class="link-to-reg">
					У вас уже есть профиль? <router-link to="/authorization">Войдите</router-link>
				</span>
			</form>
			<div class="decoration">
				<h3 class="text">Добро пожаловать в технопарк РГСУ</h3>
				<span class="text">Начните обучаться новому. Просто начните!</span>
				<img src="../assets/images/decoration-auth.png" alt="">
			</div>
		</div>
	</div>
</template>
 
<script>
import axios from 'axios';
export default {
	data() {
		return {
			Email: '',
			Password: '',
			confirmPassword: '',
		}
	},
	methods: {

		register() {
			if (this.Password !== this.confirmPassword) {
				console.error('Пароли не совпадают');
			}
			else {
				
			}
		}
	}
}
</script>
 
<style scoped>
body {
	background: #6ED0F6;
	color: #fff;
	font-family: 'Raleway', sans-serif;
}

.main-page {
	background-image: url(../assets/images/bcg.png);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}

.content-reg {
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
 