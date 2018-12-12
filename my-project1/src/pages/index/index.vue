<template>
	<div class="container">
		<!--<div class="top">
			<a href="javascript:;" class="logo">蔓蔓动漫</a>
			<div class="search">
				<input type="text" name="" placeholder="请输入作者或书名" value="" />
			</div>
		</div>-->
		<h2 class="tit">热门推荐</h2>
		<scroll-view scroll-y="true" 
			enable-back-to-top="true"
			scroll-with-animation="true">
			<div class="item" v-for="item in list">
				<img :src="item.imgUrl"/>
				<span class="title">{{item.title}}</span>
				<span class="update">{{item.update}}</span>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						title:"名侦探柯南",
						update:"更新至:1021  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/26_16_15_acaf60e04f7c5ebc11ba373181a5f215_1501056906925.jpg/420"
					},
					{
						title:"我是独角兽",
						update:"更新至:28  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/17_17_15_69d4356e296c4d800402bcc7ceb4f936.jpg/420"
					},
					{
						title:"魔法婚约",
						update:"更新至:28  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/17_17_15_89ff4914be17df02886d010819681583.jpg/420"
					},
					{
						title:"素问玄机",
						update:"更新至:65  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/10_12_30_a75c3ba3675569904eab6cbd5b7f0c67_1510288205916.jpg/"
					},
					{
						title:"火车先生",
						update:"更新至:18 话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/17_17_21_607e9967cc8f460bae553ccbc887ad65.jpg/420"
					},
					{
						title:"如梦令",
						update:"更新至:147  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/19_17_28_f673086dacf7570eba9222b894c1cac9_1508405313678.JPG/420"
					},
					{
						title:"秦侠",
						update:"更新至:186  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/19_16_52_1b7d70f574ed40398cf72a41a76b9ba6_1500454370632.jpg/420"
					},
					{
						title:"异兽猎人",
						update:"更新至:10  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/17_17_07_4a5d53fb9104b35429eba88a50ac6483_1531818425364.jpg/420"
					},
					{
						title:"白狼汐",
						update:"更新至:161  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/17_17_12_0203c6755e5776f29ffdbbd16bef0144.jpg/420"
					},
					{
						title:"芙蓉坠",
						update:"更新至:97  话",
						imgUrl:"https://manhua.qpic.cn/vertical/0/17_17_17_f3d0e5f14941278c682fe305e011eb88.jpg/420"
					}
				]
			}
		},
		components: {
		}
			
	}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
		top: 0;
		position: fixed;
	}
	
	scroll-view {
		height: 95%;
	}
	
	.content {
		height: 100px;
		width: 100px;
	}
	
	.top {
		height: 60rpx;
		position: relative;
		top: 10rpx;
		padding: 0 10rpx;
		display: flex;
	}
	
	.top .logo {
		flex: 5;
		color: #efb336;
		text-align: center;
		font-weight: bold;
	}
	
	.top .search {
		flex: 8;
	}
	
	.search input {
		width: 80%;
		height: 58rpx;
		box-sizing: border-box;
		border: 1rpx solid #efb336;
		resize: none;
		outline: none;
		line-height: 58rpx;
		border-radius: 50rpx;
		padding-left: 30rpx;
		color: #efb336;
		/*font-size: 36rpx;*/
	}
	
	.search input::input-placeholder {
		color: #efb336;
	}
	.tit{
		box-sizing: border-box;
		margin: 9px;
		padding-left: 26px;
		font-size: 38rpx;
		color: #EFB336;
		/*border-left: 1px solid #EFB336;*/
	}
	.item:last-child{
		margin-bottom: 20px;
	}
	.item img{
		width: 80%;
		margin: 10px auto;
		display: block;
	}
	.item span{
		display: block;
		text-align: center;
	}
</style>