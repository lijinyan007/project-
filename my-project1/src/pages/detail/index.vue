<template>
	<scroll-view scroll-y="true" scroll-with-animation="true"
			enable-back-to-top="true">
			
		<div class="detail_con" v-show="time&&title">
			<h2 class="title">{{title}}</h2>
			<p class="time" >更新时间：{{time}}</p>
			<img v-for="item in detailList" :src="item"/>
		</div>
		<div class="loading-container"  v-show="!detailList.length">
			<loading></loading>
		</div>
	</scroll-view>
</template>

<script>
	import Loading from "../../components/loading/loading"
	export default {
		data(){
			return{
				detailId:"",
				detailList:[],
				title:"",
				time:""
			}
		},
		components:{
			Loading
		},
		methods:{
			_getDetail(){
				this.detailId = this.$root.$mp.query.id;
				const showapi_sign="2942b55d76254a3f84fff140962cae4d";
				this.detailList=[];
				this.title="";
				this.time="";
				wx.request({
			   		url:`https://route.showapi.com/958-2?id=${this.detailId}&showapi_appid=81959&showapi_sign=${showapi_sign}`,
			   		success:(res)=>{
			   			console.log(res.data.showapi_res_body.item)
			   			this.title=res.data.showapi_res_body.item.title;
			   			this.time=res.data.showapi_res_body.item.time;
			   			this.detailList=res.data.showapi_res_body.item.imgList;
			   		}
			   	})
			}
		},
		mounted(){
			this._getDetail();
			
		}
		
	}
</script>

<style>
	.detail_con{
		/*padding: 10rpx;*/
		box-sizing: content-box;
		height: 100%;
	}
	.detail_con .title{
		text-align: center;
		margin: 10rpx 0;
	}
	.detail_con .time{
		margin: 5px 10px;
		text-align: center;
		font-size: 12px;
		color: #bfbfbf;
	}
	.detail_con img{
		display: block;
		/*margin-bottom: 10rpx;*/
		width: 100%;
		/*height: auto;*/
	}
</style>