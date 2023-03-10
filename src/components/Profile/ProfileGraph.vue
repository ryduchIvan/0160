<template>
	<div class="graph">
		<div class="graph__title">
			{{ title }}
		</div>
		<div class="graph__content">
			<div class="graph__list">
				<div class="graph__item" v-for="(graph, index) of graphicData" :key="graph.id">
					<GraphItem
					:title="graph.title"
					:count="graph.count"
					:index="index"
					/>
				</div>
			</div>
		</div>
		<div class="graph__total">
			<div class="graph__total-text">
				Total
			</div>
			<div class="graph__total-number">
				{{ total }}
			</div>
		</div>
	</div>
</template>

<script>
import GraphItem from '@/components/UI/GraphItem.vue';
export default {
 components: {
	GraphItem
 },
 props: {
	title: String,
	graphicData: Array
 },
 computed: {
	total(){
		return this.graphicData.reduce((acc, item) => acc + item.count, 0)
	}
 }
}
</script>

<style scoped lang="scss">
.graph {
	width: 82%;
	margin-right: 0px;
	margin-left: auto;
	margin-top: 10px;
	color: #333333;
	&__title{
		font-weight: 400;
		font-size: 13px;
		line-height: 15px;
		text-align: right;
		padding-right: 40px;
		font-weight: 400;
	}
	&__content{
		border-top: 1px solid #DADADA;
		border-bottom: 1px solid #DADADA;
		margin-top: 8px;
	}
	&__list{
		margin-top: 8px;
		margin: 15px 0px;
		border-left:1px solid rgba(51, 51, 51, 0.2);
	}
	&__total{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 40px;
		margin-top: 8px;
		&-text{
			font-weight: 700;
			font-size: 16px;
			line-height: 26px;
		}
		&-number{
			font-weight: 700;
			font-size: 16px;
			line-height: 15px;
		}
	}
}

</style>