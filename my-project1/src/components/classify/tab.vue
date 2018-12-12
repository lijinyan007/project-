<template>
	<scroll-view scroll-y="true" 
		scroll-with-animation="true" 
		class="classify-tab">
		<div v-for="(item,index) in list" 
			:class="[index==currentIndex?'tab-item tab-hover':'tab-item']" 
			@click="tabSelectItem(item,index)"
			>{{item.title}}</div>
	</scroll-view>
</template>
<script>
	export default {
		data(){
			return{
				flag:false,
				currentIndex:0
			}
		},
		props:{
			list:{
				type:Array,
				default:function(){
					return [];
				}
			}
		},
		methods:{
			tabSelectItem(item,index){
				this.currentIndex=index;
				this.$emit("select",item.type,index);
				this.flag=true;
			}
			
			
		},
		created(){
//				console.log(this.props.list);
		}
	}
</script>
<style>
	.classify-tab {
		width: 176rpx;
		height: 100%;
		box-sizing: border-box;
		justify-content: space-around;
		border-right: 1px solid lightgray;
		background-color: white!important;
	}
	
	.classify-tab .tab-item {
		background-color: white!important;
		flex-grow: 1;
		text-align: center;
		font-size: 17px;
		font-family: 'SimHei';
		padding: 10px;
		line-height: 40px;
		color: black;
		height: 40px;
	}
	
	.classify-tab .tab-hover {
		color: #EFB336;
		border-left: 2px solid #EFB336;
	}
</style>