<template>
	<view class="hander">
		<slot name="left">
			<image src="@/static/home/icon_fanhui.png" mode="widthFix" style="width: 18rpx;height: 30rpx;" @tap="back" />	
		</slot>
		<view class="title">{{title}}</view>
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '品驰出行'
			}
		},
		data() {
			return {
				
			}
		},
		onReady() {
			
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.hander {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 90rpx;
		padding: 0 30rpx;
		border-bottom: 1px solid #eee;
		background-color: #fff;
		padding-top: 44rpx;
		text-align: center;
		.left,
		.right{
			width: 60rpx;
		}
		>.title {
			font-size: 36rpx;
			font-weight: bold;
			color: #333;
		}
	}
</style>
