<template>
  <section class="graph-item"
  :style="{
	marginTop: graphMarginTop
  }"
  >
	<div class="graph-item__content">
		<div class="graph-item__item" :style="{
			backgroundColor: graphBG,
			width: `${graphWidth}%`
		}">
			<div class="graph-item__title">
				{{ title }}
			</div>
		</div>
		<div class="graph-item__count">
				{{ count }}
		</div>
	</div>
  </section>
</template>

<script>
export default {
props: {
	count: Number,
	title: String,
	index: Number
},
computed:{
	graphBG(){
		let bgColor;

		if (this.count <=4) bgColor =  "#ACE2F8"
		else if (this.count > 4 && this.count <=8) bgColor =  "#3d075"
		else bgColor = "#B1E19B"

		return bgColor
	},
	graphWidth(){
		let percent = this.count / 12 * 100;
		return percent
	},
	graphMarginTop(){
		let marginTop;
		if (this.index == 0) marginTop = "0px"
		else marginTop = "2px"
		return marginTop
	}
 }
}
</script>

<style scoped lang="scss">
.graph-item {
	width: 100%;
	color: #333333;
		&__content{
			display: flex;
			justify-content: space-between;
			position: relative;
			padding-right: 40px;
		}
		&__item{
			border-radius: 0px 3px 3px 0px;
			padding: 4px 6px;
			font-size: 13px;
			line-height: 26px;
			height: 24px;
			min-width: 25px;
			font-weight: 400;
		}
		&__title{
			position: absolute;
		}
		&__count{
			flex: 0 1 30%;
			text-align: right;
			font-weight: 700;
			font-size: 13px;
			line-height: 15px;
		}
}
</style>