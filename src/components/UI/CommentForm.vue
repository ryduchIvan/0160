<template>
	<form class="comment-form" @submit.prevent="addNew">

		<textarea 
			v-model="comment" 
			type="text" 
			class="comment-form__textarea"
			@keyup.enter="addNew"
			>
		</textarea>
		<div class="comment-form__button">
			<ButtonMain
				text="Send a message"
				:isSubmit="true"
				variant="yellow"
			/>
		</div>

	</form>
</template>

<script>
//Components
import ButtonMain from '@/components/UI/ButtonMain.vue'
//Libraries
import uniqid from 'uniqid';
export default {
	components: {
		ButtonMain
	},
	data(){
		return{
			comment: ""
		}
	},
	computed: {
		formattedDate(){
			let timeElapsed = Date.now();
			const today = new Date(timeElapsed);

			const day = today.getDate();
			const year = today.getFullYear();
			const month = today.toLocaleString('en-US', { month: 'short' });

			const formattedDate = `${day} ${month} ${year}`;
			return formattedDate
		}
	},
	methods: {
		addNew(){
			let commentData = {
				date: this.formattedDate,
				name: "Eva Jonson",
				description: this.comment,
				id: uniqid()
			}
			if (this.comment.trim() !== "") {
				this.$emit("onSubmit", commentData)	
				this.$toast.success("Comment was added successfully")
			} else this.$toast.error("Empty comment")
			this.comment = ""
		}
	}
}
</script>

<style scoped lang="scss">
.comment-form {
	width: 100%;
	&__textarea{
		width: 100%;
		display: block;
		height: 63px;
		border-radius: 1px;
		border: 1px solid #000000;
		padding: 5px;
		box-sizing: border-box;
	}
	&__button{
		margin: 23px auto;
		max-width: 281px;
		width: 100%;
		height: 43px;
		cursor: pointer;
	}
}
</style>