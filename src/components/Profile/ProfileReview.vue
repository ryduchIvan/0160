<template>
  <div class="review">
	<div class="review__row">
		<div class="review__text">
			<h3 class="review__title">
				Latest reviews
			</h3>
			<a class="review__link">
				All reviews
			</a>
		</div>
		<div class="review__statistics">
			<div class="review__statistics-item">
				<img :src="likeImage" alt="like">
				<span>{{likeCount}}</span>
			</div>
			<div class="review__statistics-item">
				<img :src="commentImage" alt="like">
				<span>{{msgCount}}</span>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import commentImage from "@/assets/comment.svg"
import likeImage from "@/assets/like.svg"
export default {
	data(){
		return{
			likeImage,
			commentImage
		}
	},
	props: {
		likeCount: Number,
		msgCount: Number
	}
}
</script>

<style scoped lang="scss">
.review {
	color: #333333;
	&__row{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	&__text{
		display: flex;
	}
	&__title{
		font-weight: 700;
		line-height: 16px;
	}
	&__link{
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #005DA1;
		text-decoration-line: underline;
		margin-left: 8px;
		cursor: pointer;
	}
	&__statistics{
		display: flex;
		@media(max-width: 328px){
			margin-top: 8px;
		}
	}
	&__statistics-item{
		display: flex;
		align-items: center;
		margin-right: 18px;
		img{
			margin-right: 4px;
		}
		span{
			font-weight: 400;
			font-size: 12px;
			line-height: 14px;
		}
		&:last-child{
			margin-right: 0px;
		}
	}
}
</style>