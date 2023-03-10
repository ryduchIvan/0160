<template>
  <button
	class="button-main"
	:type="isSubmit ? 'submit' : 'button'"
	@click="buttonFN"
	:style="{
		backgroundColor: buttonBG
	}"
  >
	{{ text }}
  </button>
</template>

<script>
export default {
	props: {
		text: String,
		isSubmit: Boolean,
		variant: String
	},
	computed: {
		buttonBG(){
			let bg;

			if(this.variant === "yellow") bg = "#FDD639"
			else if (this.variant === "blue") bg = "#005DA1"
			return bg
		}
	},
	methods: {
		buttonFN(){
			this.$emit("buttonFN")
		}
	}
}
</script>

<style scoped>
	.button-main{
		width: 100%;
		height: 100%;
		border-radius: 1.5em;
		border: none;
		font-weight: 700;
		font-size: 16px;
		line-height: 21px;
		color: #333333;
		cursor: pointer;

	}
</style>