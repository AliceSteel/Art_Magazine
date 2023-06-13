<template>
	<div class="container">
		<router-link to="/" class="logo_wrap" title="Homepage">
			<img src="@/assets/images/logo.png" alt="logo" />
		</router-link>
		<ul class="links">
			<li>
				<router-link to="/magazine" title="Magazine Page">
					Magazine
				</router-link>
			</li>
			<li>
				<router-link to="/authors" title="Authors Page"> Authors </router-link>
			</li>
			<li>
				<router-link to="/podcasts" title="Podcasts Page">
					Podcast
				</router-link>
			</li>
			<li>
				<a
					href="https://www.instagram.com/"
					title="Instagram"
					target="_blank"
					rel="nofollow, noreferrer"
				>
					<svg
						width="24"
						height="24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7957 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7957 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7957 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7957 9 12 9ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75ZM12 4C9.526 4 9.122 4.007 7.971 4.058C7.187 4.095 6.661 4.2 6.173 4.39C5.76462 4.53994 5.39541 4.78026 5.093 5.093C4.78001 5.3954 4.53935 5.76458 4.389 6.173C4.199 6.663 4.094 7.188 4.058 7.971C4.006 9.075 4 9.461 4 12C4 14.474 4.007 14.878 4.058 16.029C4.095 16.812 4.2 17.339 4.389 17.826C4.559 18.261 4.759 18.574 5.091 18.906C5.428 19.242 5.741 19.443 6.171 19.609C6.665 19.8 7.191 19.906 7.971 19.942C9.075 19.994 9.461 20 12 20C14.474 20 14.878 19.993 16.029 19.942C16.811 19.905 17.338 19.8 17.826 19.611C18.2338 19.4603 18.6027 19.2205 18.906 18.909C19.243 18.572 19.444 18.259 19.61 17.829C19.8 17.336 19.906 16.809 19.942 16.029C19.994 14.925 20 14.539 20 12C20 9.526 19.993 9.122 19.942 7.971C19.905 7.189 19.8 6.661 19.61 6.173C19.4593 5.765 19.2191 5.39596 18.907 5.093C18.6047 4.77985 18.2355 4.53917 17.827 4.389C17.337 4.199 16.811 4.094 16.029 4.058C14.925 4.006 14.539 4 12 4ZM12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2Z"
							fill="black"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/home"
					target="_blank"
					title="Twitter"
					rel="nofollow, noreferrer"
				>
					<svg
						width="24"
						height="24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.162 5.656C21.3985 5.99369 20.589 6.21547 19.76 6.314C20.6337 5.79143 21.2877 4.96901 21.6 4C20.78 4.488 19.881 4.83 18.944 5.015C18.3146 4.34158 17.4803 3.89496 16.5709 3.74458C15.6615 3.59421 14.7279 3.74849 13.9153 4.18345C13.1026 4.61841 12.4564 5.30968 12.0771 6.14979C11.6978 6.9899 11.6067 7.93178 11.818 8.829C10.1551 8.74565 8.52832 8.31352 7.04328 7.56066C5.55823 6.8078 4.24812 5.75105 3.19799 4.459C2.82628 5.09745 2.63095 5.82323 2.63199 6.562C2.63199 8.012 3.36999 9.293 4.49199 10.043C3.828 10.0221 3.17862 9.84278 2.59799 9.52V9.572C2.59819 10.5377 2.93236 11.4736 3.54384 12.2211C4.15532 12.9685 5.00647 13.4815 5.95299 13.673C5.33661 13.84 4.6903 13.8647 4.06299 13.745C4.32986 14.5762 4.85 15.3032 5.55058 15.8241C6.25117 16.345 7.09712 16.6338 7.96999 16.65C7.10247 17.3313 6.10917 17.835 5.04687 18.1322C3.98458 18.4294 2.87412 18.5143 1.77899 18.382C3.69069 19.6114 5.91609 20.2641 8.18899 20.262C15.882 20.262 20.089 13.889 20.089 8.362C20.089 8.182 20.084 8 20.076 7.822C20.8949 7.23017 21.6016 6.49702 22.163 5.657L22.162 5.656Z"
							fill="black"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://www.youtube.com/"
					target="_blank"
					title="YouTube"
					rel="nofollow, noreferrer"
				>
					<svg
						width="24"
						height="24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z"
							fill="black"
						/>
					</svg>
				</a>
			</li>
		</ul>
		<nav class="burger_menu" @click="toggleMenu()">
			<button
				class="hamburger hamburger--spin"
				:class="{ 'is-active': isActive }"
				type="button"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</button>
		</nav>
	</div>
	<ul class="dropdown_menu" v-if="isActive">
		<li>
			<router-link to="/magazine" @click="toggleMenu()" title="Magazine Page">
				Magazine
			</router-link>
		</li>
		<li>
			<router-link to="/authors" @click="toggleMenu()" title="Authors Page">
				Authors
			</router-link>
		</li>
		<li>
			<router-link to="/podcasts" @click="toggleMenu()" title="Podcasts Page">
				Podcast
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: "HeaderView",
	data() {
		return {
			isActive: false,
		};
	},
	methods: {
		toggleMenu() {
			this.isActive = !this.isActive;
		},
	},
};
</script>

<style lang="scss" scoped>
.container {
	height: 100%;
	height: 44px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;
	margin-top: 30px;

	border-bottom: 1px solid #000;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
	.logo_wrap {
		min-width: 200px;
	}
}
.burger_menu {
	display: none;
}
.dropdown_menu {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 1rem;
	position: fixed;
	top: 70px;
	right: 20px;
	z-index: 100;
	backdrop-filter: blur(7px);
	transition: all 0.2s ease;
	padding: 1rem;
	border-radius: 20px;
}
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
	display: inline-block;
	cursor: pointer;
	transition-property: opacity, filter;
	transition-duration: 0.15s;
	transition-timing-function: linear;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
}
.hamburger:hover {
	opacity: 0.7;
}
.hamburger.is-active:hover {
	opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
	background-color: #000;
}

.hamburger-box {
	width: 40px;
	height: 24px;
	display: inline-block;
	position: relative;
}

.hamburger-inner {
	display: block;
	top: 50%;
	margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
	width: 40px;
	height: 4px;
	background-color: #000;
	border-radius: 4px;
	position: absolute;
	transition-property: transform;
	transition-duration: 0.15s;
	transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
	content: "";
	display: block;
}
.hamburger-inner::before {
	top: -10px;
}
.hamburger-inner::after {
	bottom: -10px;
}

.hamburger--spin .hamburger-inner {
	transition-duration: 0.22s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
	transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
	transition: bottom 0.1s 0.25s ease-in,
		transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
	transform: rotate(225deg);
	transition-delay: 0.12s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.is-active .hamburger-inner::before {
	top: 0;
	opacity: 0;
	transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.is-active .hamburger-inner::after {
	bottom: 0;
	transform: rotate(-90deg);
	transition: bottom 0.1s ease-out,
		transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
/* ===============================================================================0 */
@media screen and (max-width: 600px) {
	.links {
		display: none;
	}
	.burger_menu {
		display: inline-block;
	}
}
</style>
