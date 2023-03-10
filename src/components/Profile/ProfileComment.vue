<template>
  <div class="comment">
	<div class="comment__list">
		<CommentItem
			v-for="item of commentData"
			:key="item.id"
			:comment="item"
		/>
	</div>
  </div>
</template>

<script>
import CommentItem from '@/components/UI/CommentItem.vue';
export default {
	components: {
		CommentItem
	},
	props: {
		commentData: Array
	}
}
</script>

<style scoped lang="scss">
</style>