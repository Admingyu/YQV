<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="userInfo.avatar ? userInfo.avatar : avatar"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{login ? userInfo.name : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">收藏</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="goMoments()">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">关注</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">上传作品</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout()">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="goAccount()">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">帐号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login:false,
				avatar:"../../static/logo.png",
				userInfo:{},
			}
		},
		
		//页面加载完成时发送的请求
		onLoad: function() {
			this.getUserInfo();
		},
		
		methods: {
			
			//获取用户信息
			getUserInfo(){
				uni.request({
					url:this.$apiUrl + '/api/v0/user/info',
					success:(ret) => {
						if (ret.statusCode !== 200){
							console.log("Fail UserInfo");
						}else{
							this.userInfo = ret.data.data;
							this.login = this.userInfo.id;//是否登陆的标志
						}
					},
					fail:(ret) => {
						uni.onNetworkStatusChange(function(res){
							console.log(res.isConnected);
							console.log(res.networkType)
						})
					},
					complete: (ret) => {
						this.loading=false;
					}
				});
			},
			
			goLogin() {
				if(!this.login){
					uni.navigateTo({
						url:"../login/login"
					})
				}
			},
						
			goAccount() {
				if(this.login){
					uni.navigateTo({
						url:"../account/account"
					})
				}
			},
			
			goMoments() {
				uni.navigateTo({
					url:"../moments/moments"
				})
				
			},
			goAbout() {
				// #ifdef APP-PLUS
				uni.navigateTo({
					url:'../about/about'
				});
				// #endif
				// #ifdef H5
				uni.navigateTo({
					url:'../about/about'
				});
				// #endif
			}
		}
	}
</script>

<style>
	page,
	view {
	    display: flex;
	}
	
	page {
	    display: flex;
	    min-height: 100%;
	    background-color: #EFEFEF;
	}
	
	template {
	    display: flex;
	    flex: 1;
	}
</style>