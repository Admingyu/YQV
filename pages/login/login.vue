<style lang="scss" scoped>
</style>
<template>
    <view>
        <view class="input-box">
            <view class="input-item">
                <view class="input-label">手机号</view>
				<view class="input-body">
					<input v-model="phone" maxlength="11" type="number" placeholder="请输入手机号" class="input" >
				</view>
            </view>
            <view class="input-item">
				<view class="input-label">密码</view>
				<view class="input-body">
					<input v-model="password" type="text" :password="isHidePassword?true:false" style="margin-right: 50upx;" placeholder="请输入密码" maxlength="20"  class="input" />
					<image @click="isHidePasswordClick" class="eye" :src="isHidePassword?'/static/img/attention.png':'/static/img/attention_forbid.png'"></image>
				</view>
            </view>
            <view class="select">
                <navigator url="/pages/register/register" hover-class="none">注册</navigator>
                <navigator url="/pages/forget-pwd/forget-pwd" hover-class="none">忘记密码？</navigator>
            </view>
        </view>
        <button class="button" @click="submit">登录</button>
    </view>
</template>
<script>
	import {checkPhone,checkPwd} from "@/common/common.js"
	export default {
		data() {
			return {
				isHidePassword:true,
				phone:"",
				password:""
			};
		},
		onLoad() {
		},
		methods: {
			isHidePasswordClick(){
				this.isHidePassword=!this.isHidePassword
			},
			submit() {
				if(!checkPhone(this.phone)){
					return;
				};
				if(!checkPwd(this.password)){
					return;
				};
				/*
				* 登录逻辑
				*/
				this.$store.commit('update',['isLogin',true]);
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>
