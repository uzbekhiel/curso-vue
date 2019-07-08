<template>
	<v-app>
		<app-menu />
		<app-toolbar />
		<v-content>
			<app-carousel />
		</v-content>
		<app-footer />
	</v-app>
</template>

<script>
import Menu from './Menu.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'
import Toolbar from './Toolbar.vue'

export default {
	components:{
		'app-menu' : Menu,
		'app-carousel' : Carousel,
		'app-footer' : Footer,
		'app-toolbar' : Toolbar
	},
	
}
</script>
