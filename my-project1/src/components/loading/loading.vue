<template>
	<div class="loading">
		<img src="./loading.gif"/>
		<p class="desc">{{title}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "正在加载......"
			}
		}
	}
</script>

<style>
	.loading {
		width: 100%;
		text-align: center;
	}
	.loading img{
		width:64px;
		height:64px;
		}
	.desc {
		height: 20px;
		line-height: 20px;
		font-size: 36rpx;
		/*color:#ccc;*/
	}
</style>