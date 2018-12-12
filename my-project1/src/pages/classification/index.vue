<template>
	<div class="container">
		<tab :list="tabList" @select="tabSelectItem"></tab>
		<scroll-view class="content" scroll-y="true" scroll-with-animation="true" 
			enable-back-to-top="true" v-if="contentlist.length" @scrolltolower="newDateLoading">
			<view class="item" v-for="(item,index) in contentlist" scroll-y="true" scroll-with-animation="true" @click="_detail(item)">
				<img src="../../../static/images/cover.png" />
				<p class="title">{{item.title}}</p>
			</view>
		</scroll-view>
		<div class="loading-container"  v-show="!contentlist.length">
			<loading></loading>
		</div>
	</div>
</template>
<script>
	import Tab from "../../components/classify/tab"
	import Loading from "../../components/loading/loading"
	export default {
		data() {
			return {
				imgId: "",
				imgUrlList: [],
				contentlist: [],
				currentPage: "1",
				tabList: [{
						title: "恐怖漫画",
						type: "weimanhua/kbmh"
					},
					{
						title: "故事漫画",
						type: "weimanhua/gushimanhua"
					},
					{
						title: "段子手",
						type: "duanzishou"
					},
					{
						title: "冷知识",
						type: "lengzhishi"
					},
					{
						title: "奇趣",
						type: "qiqu"
					},
					{
						title: "电影",
						type: "dianying"
					},
					{
						title: "搞笑",
						type: "gaoxiao"
					},
					{
						title: "萌宠",
						type: "mengchong"
					},
					{
						title: "环球",
						type: "huanqiu"
					},
					{
						title: "摄影",
						type: "sheying"
					},
					{
						title: "玩艺",
						type: "wanyi"
					},
					{
						title: "插画",
						type: "chahua"
					}
				],
				type: "weimanhua/kbmh",
				detailId: "",
				detailList: [],
				coverList: []
			}

		},
		components: {
			Tab,
			Loading
		},

		methods: {
			//请求数据
			_getClassify() {
				const showapi_sign = "2942b55d76254a3f84fff140962cae4d";
				wx.request({
					url: `https://route.showapi.com/958-1?page=${this.currentPage}&showapi_appid=81959&type=type=/category/${this.type}&showapi_sign=${showapi_sign}`,
					success: (res => {
						console.log(this.type)
						if(!res.data.showapi_res_body.ret_code == 0) {
							return;
						}
						this.contentlist = this.contentlist.concat(res.data.showapi_res_body.pagebean.contentlist);
						//   			console.log(this.contentlist)
						const showapi_sign = "2942b55d76254a3f84fff140962cae4d";
						this.contentlist.map(v => {
							this.imgId = v.id;
							this.imgUrlList.push(this.imgId)
							//					console.log(this.imgUrlList)
						})
					})

				})
			},
			//封面
			getCover() {
				const showapi_sign = "2942b55d76254a3f84fff140962cae4d";
				wx.request({
					url: `https://route.showapi.com/958-2?id=${this.imgId}&showapi_appid=81959&showapi_sign=${showapi_sign}`,
					success: (res) => {
						console.log(res.data)
					}
				})
			},
			//分页
			newDateLoading() {
				if(this.currentPage + 1) {
					this.currentPage++;
					this._getClassify();
				} else {
					console.log("没有更多数据了")
				}
			},
			//分类
			tabSelectItem(type, index) {
				this.type = type;
				this.currentPage = 1;
				this.contentlist = [];
				this._getClassify();
				this.newDateLoading();
			},
			//跳转
			_detail(item) {
				this.detailId = item.id;
				wx.navigateTo({
					url: `../detail/main?id=${this.detailId}`
				})
			}
		},
		created() {
			this._getClassify();
			this.getCover();
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.container {
		height: 100%;
		position: relative;
		display: flex;
	}
	
	tab {
		height: 100%;
	}
	
	.content {
		height: 100%;
		flex: 1;
		font-size: 32rpx;
	}
	
	.content .item {
		width: 50%;
		height: 340rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		margin-bottom: 10rpx;
		float: left;
	}
	
	.content .item img {
		width: 100%;
		height: 200rpx;
		display: block;
		margin: 20rpx 0;
	}
	
	.content .item .title {
		padding: 0 10rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.loading-container {
		position: absolute;
		width: 80%;
		top: 50%;
		left: 18%;
		transform: translateY(-50%);
		
	}
</style>