<template>
	<div class="comment-item">
		<div class="comment-item__row">
			<div class="comment-item__name">
				{{ comment.name }}
			</div>
			<div class="comment-item__date">
				{{ comment.date }}
			</div>
		</div>
		<div class="comment-item__description">
			<p>
				{{	comment.description }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		comment: Object
	}
}
</script>

<style scoped lang="scss">
.comment-item {
	color: #333333;
	margin-top: 16px;
	&:first-child{
		margin-top: 0px;
	}
	&__row{
		display: flex;
	}
	&__name{
		font-weight: 700;
		font-size: 14px;
		line-height: 19px;
	}
	&__date{
		font-weight: 400;
		font-size: 11px;
		line-height: 19px;
		margin-left: 8px;
		color: #808080;
	}
	&__description{
		margin-top: 10px;
		border: 1px solid #C4CBCF;
		padding: 20px;
		position: relative;
		background: #F2FBFF;
		box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
		position: relative;
		&::before{
			content: "";
			position: absolute;
			top: -4.2px;
			left: 20px;
			height: 6px;
			width: 6px;
			background: inherit;
			transform: rotate(45deg);
			border-left: 1px solid #C4CBCF;
			border-top: 1px solid #C4CBCF;
		}
	}
}
</style>