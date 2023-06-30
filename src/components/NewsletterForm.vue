<template>
	<form @submit.prevent="checkAndSend" novalidate="true" class="sign_up_form">
		<input
			v-model.trim="email"
			@focus="resetError()"
			type="email"
			placeholder="Email"
		/>
		<div v-show="this.errors" class="errors_panel">
			{{ this.errors }}
		</div>
		<button type="submit" class="black_btn">
			<i>sign up</i>
		</button>
		<div v-if="this.answer.success" class="success">
			{{ answer.text }}
		</div>
	</form>
</template>

<script>
export default {
	name: "NewsletterForm",
	data() {
		return {
			/*API_BOT_ID: "5430381288:AAE_eQ93YVTYwbmZ8s_uAyzqmgqXbPnE_Fk",*/
			API_BOT_ID: "5142c8e60ea7de80-95d4025c3024e7e2-9b203e163d25aac2",
			URL: "https://chatapi.viber.com/pa/set_webhook",
			/*CHAT_ID: "-1001772014948",*/
			email: "",
			errors: null,
			answer: {
				success: null,
				text: "",
			},
		};
	},
	methods: {
		checkAndSend() {
			let valid = true;
			if (!this.email) {
				this.errors = "Email is required.";
				valid = false;
			} else {
				if (!this.isValidEmail(this.email)) {
					this.errors = "Valid email is required.";
					valid = false;
				}
			}
			if (valid) {
				/*const message_text =
					"<i>Feedback data from ArtMagazine</i>" +
					"%0a<b>Email: </b>" +
					this.email;*/
				fetch(
					`https://chatapi.viber.com/pa/set_webhook,
					{
						headers: {
							"X-Viber-Auth-Token":
								"5142c8e60ea7de80-95d4025c3024e7e2-9b203e163d25aac2",
							"Content-Type": "application/json",
						},
						body: { url: "https://art-and-life.netlify.app" },
					}
`
					/*`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`*/
				)
					.then((resp) => {
						console.log(resp);
						return resp.json();
					})
					.then((resp) => {
						console.log(resp);
						if (resp.ok) {
							this.answer.success = true;
							this.answer.text = "Thank you for signing up!";
							this.email = "";
						} else {
							this.answer.success = false;
							this.answer.text = resp.description;
						}
						setTimeout(() => {
							this.answer.success = null;
							this.answer.text = "";
						}, 5000);
					})
					.catch(() => {
						this.answer.success = false;
						this.answer.text = "AJAX error. Please try again later";
					});
			}
		},

		resetError() {
			this.errors = "";
		},
		isValidEmail(email) {
			let re =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
	},
};
</script>

<style lang="scss" scoped>
.sign_up_form {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: flex-end;
	padding-top: 1rem;

	input {
		width: 100%;
		max-width: 350px;
		height: 50px;
		font-size: 1rem;
		padding: 1rem;
	}
}
.errors_panel {
	position: relative;
	left: 0;
	top: 100%;
	border-bottom: 2.5px solid #ff1e1e;
	color: #ff1e1e;
	font-size: 1rem;
	line-height: 1.5rem;
	text-align: left;
}
.success {
	position: relative;
	left: 0;
	top: 100%;
	width: 100%;
	color: green;
	border-bottom: 2.5px solid green;
	font-size: 2rem;
	text-align: left;
}
.footer_style {
	align-self: center;
	flex-basis: 30%;
	flex-grow: 1;
	display: flex;
	gap: 12px;
	min-width: 200px;

	button {
		background-color: #fff;
		color: #000;
		width: 100%;
		max-width: 100px;
	}
}
</style>
