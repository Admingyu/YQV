<template>
	<view class="center">

		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">头像设置</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="goMoments()">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">昵称设置</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">邮箱</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">手机号</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout()">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">微信绑定</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item" @click="goAccount()">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">退出登陆</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
