<template>
	<section class="profile">
		<div class="profile__container">
			<div class="profile__content">
				<section class="profile__header">
					<ProfileInfo
						name="Eva Jhonson"
						position="Sales Maneger"
						description="I will find the best offers for you. My services are absolutely free."
						:avatar-image="profileImage"
					/>
				</section>
				<section class="profile__main">
					<div class="profile__graph">
					<ProfileGraph
						title="Services"
						:graphic-data="graphicData"
					/>
					</div>
					<div class="profile__rivew">
						<ProfileReview
							like-count="131"
							msg-count="14"
						/>
					</div>
					<div class="profile__comment">
						<ProfileComment
							@addNewComment="addNewComment"
							:commentData="commentData"
						/>
					</div>
					<div class="profile__form">
					</div>
				</section>
			</div>
			<section class="profile__footer">
				<CommentForm
				@onSubmit="addNewComment"
				/>
			</section>
		</div>
	</section>
</template>

<script>
//Components
import ProfileInfo from '@/components/Profile/ProfileInfo.vue'
import ProfileGraph from '@/components/Profile/ProfileGraph.vue'
import ProfileReview from '@/components/Profile/ProfileReview.vue'
import ProfileComment from '@/components/Profile/ProfileComment.vue'
import CommentForm from '@/components/UI/CommentForm.vue'
//Libraries
import uniqid from 'uniqid';
//Assets
import profileImage from "@/assets/profile.jpg"
export default {
  components: { ProfileInfo, ProfileGraph, ProfileReview, ProfileComment, CommentForm },
  data(){
	return{
		profileImage,
		graphicData: [
			{
				title: "Manual tour booking",
				count: 11,
				id: uniqid()
			},
			{
				title: "Package tours",
				count: 3,
				id: uniqid()
			},
			{
				title: "Hotels",
				count: 1,
				id: uniqid()
			}
		],
		commentData: [
			{
				date: "13 Apr 2022",
				name: "Samuel Jackson",
				description: "Hey Eva! You're cool. Nice pic!",
				id: uniqid()
			},
			{
				date: "10 Apr 2022",
				name: "Angela Deimon",
				description: "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
				id: uniqid()
			},
			{
				date: "8 Apr 2022",
				name: "Ronald Harris",
				description: "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
				id: uniqid()
			}
		]
	}
  },
  methods: {
	addNewComment(data){
		this.commentData.push(data)
	}
  }
}
</script>

<style scoped lang="scss">
.profile {
	&__container{
		max-width: 760px;
		margin: 20px auto;
		background-color: white;
	}
	&__content{
		padding: 20px 20px 22px 20px;
	}
	&__header{

	}
	&__main{

	}
	&__graph{

	}
	&__rivew{
		margin-top: 18px;
	}
	&__comment{
		margin-top: 13px;
	}
	&__footer{
		padding: 28px 20px 20px 20px;
		background-color:#F2F2F2;
	}
}

</style>
