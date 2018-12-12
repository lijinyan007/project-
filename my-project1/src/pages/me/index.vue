<template>
	<div class="container">
		<div class="userInfo">
			<img src="../../../static/images/setting.png" class="icon" />
			<div class="info">
				<img :src="avatarUrl" />
				<span v-if="username">{{username}}</span>
				<span @click="userInfoHandler" ref="login_btn"
					class="login-btn"
					v-if="!username"
					>授权登录</span>
			</div>
		</div>
		<div class="operation">
			<div class="item">
				<img src="../../../static/images/icon_kefu.png" class="icon" />
				<span class="text">客服</span>
			</div>
			<div class="item">
				<img src="../../../static/images/icon_yuyue.png" class="icon" />
				<span class="text">我的预约</span>
			</div>
			<div class="item">
				<img src="../../../static/images/icon_zhiliao.png" class="icon" />
				<span class="text">完善资料</span>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: "../../../static/images/icon_me.png",
				username: ""
			}
		},
		methods: {
			userInfoHandler() {
				//				alert("你确定要登录吗");
				wx.getUserInfo({
					success: (res) => {
						this.avatarUrl = res.userInfo.avatarUrl;
						this.username = res.userInfo.nickName;
						console.log(this.username)
					}
				})
				this.$refs.login_btn.html="none"
			}
		}
	}
</script>

<style scoped>
	.container {
		height: 100%;
	}
	
	.userInfo {
		box-sizing: border-box;
		/*background-image: linear-gradient(to bottom, #efb336, #FFFACD);*/
		width: 100%;
		height: 18vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 25rpx 25rpx  0 25rpx;
		
	}
	
	.userInfo .icon {
		width: 50rpx;
		height: 50rpx;
		display: block;
		position: absolute;
		right: 6px;
		
	}
	
	.userInfo .info {
		align-self: flex-start;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.userInfo .info img {
		width: 12vh;
		height: 12vh;
		border-radius: 50%;
		margin-right: 40rpx;
		border: 4rpx solid #CCCCCC;
	}
	
	.userInfo .info .login-btn{
		background: transparent;
		border: 2rpx solid white;
		font-family: 'SimHei';
		display: block;
	}
	
	.userInfo .info .nameCity {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 200rpx;
	}
	
	.userInfo .info .nameCity span:first-child {
		font-family: 'SimHei';
		font-size: 50rpx;
		color: #ccc;
		display: block;
	}
	
	.userInfo .info .nameCity span:nth-child(2) {
		font-family: 'SimHei';
		font-size: 30rpx;
		color: #ccc;
		display: block;
	}
	
	.operation {
		box-sizing: border-box;
		border-top: 2rpx solid lightgray;
		border-bottom: 2rpx solid lightgray;
		padding: 20rpx 0;
		height: 12vh;
		display: flex;
		background: white;
	}
	
	.item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border-right: 2rpx solid lightgray;
		position: relative;
	}
	
	.icon {
		width: 50rpx;
		height: 50rpx;
	}
	
	.text {
		font-family: 'SimHei';
		font-size: 28rpx;
	}
	
	.mynum {
		position: absolute;
		width: 40rpx;
		height: 30rpx;
		border-radius: 30rpx;
		background-color: red;
		right: 60rpx;
		top: 0;
		color: white;
		font-size: 30rpx;
		line-height: 30rpx;
		text-align: center;
	}
	
	.item:last-child {
		border: none;
	}
</style>