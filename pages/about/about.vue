<template>
	<view class="about">
		<view class="content">
			<view class="qrcode">
				<image src="https://picsum.photos/300"></image>
				<text class="tip">原型版本</text>
			</view>
			<view class="desc">
				基于uni-app开发的App。
			</view>
			<view class="source">
				<view class="title">参与测试人员：</view>
				<view class="source-list">
					<view class="source-cell">
						<text space="nbsp">1. </text>
						<text>GMY</text>
					</view>
					<view class="source-cell">
						<text space="nbsp">2. </text><text @click="openLink" class="link">{{sourceLink}}</text> 
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sourceLink: 'https://github.com/admingyu'
			};
		},
		methods:{
			openLink() {
				window.open(this.sourceLink);
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
		min-height: 100%;
		background-color: #FFFFFF;
	}

	image {
		width: 360upx;
		height: 360upx;
	}

	.about {
		flex-direction: column;
		flex: 1;
	}

	.content {
		flex: 1;
		padding: 30upx;
		flex-direction: column;
		justify-content: center;
	}

	.qrcode {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.qrcode .tip {
		margin-top: 20upx;
	}

	.desc {
		text-align:center;
		margin-top: 30upx;
		display: block;
	}

	.code {
		color: #e96900;
		background-color: #f8f8f8;
	}
	
	.source {
		margin-top: 30upx;
		flex-direction: column;
	}
	
	.source-list {
		margin-left: 10px;
		flex-direction: column;
	}
	.link {
		color: #007AFF;
	}
</style>
