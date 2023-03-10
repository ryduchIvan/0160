<template>
  <section class="profile">
	<div class="profile__row">
		<img :src="avatarImage" alt="" class="profile__img">
		<div class="profile__text">
			<h3 class="profile__name">
				{{ name }}
			</h3>
			<span class="profile__position">
				{{ position }}
			</span>
			<div class="profile__description">
				<p>
					{{ description }}
				</p>
			</div>
		</div>
	</div>
  </section>
</template>

<script>

export default {

	props:{
		name: String,
		position: String,
		description: String,
		avatarImage: String
	}
}
</script>

<style scoped lang="scss">
.profile {
	color: #333333;
	&__row{
		display: flex;
		align-items: center;
		width: 100%;
	}
	&__img{
		border-radius: 50%;
		z-index: 1;
		margin-right: 10px;
		object-fit: cover;
	}
	&__text{
		width: 100%;
	}
	&__name{
		font-weight: 700;
	}
	&__position{
		font-weight: 400;
		font-size: 12px;
		color: #808080;
	}
	&__description{
		background: #FFFBC8;
		position: relative;
		left: -45px;
		padding-left: 45px;
		padding-right: 5px;
		width: 100%;
		padding-top: 8px;
		padding-bottom: 6px;
		margin-top: 5px;
		border: 1px solid #DADADA;
		border-radius: 5px;
		p{
			font-weight: 400;
			font-size: 14px;
			max-width: 201px;
			@media(max-width:370px){
				font-size: 12px;
				line-height: 16px;
			}
		}
	}
}
</style>