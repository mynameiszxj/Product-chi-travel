<template>
	<view class="opinion">
		<view class="description">
			<view class="opinion_type">
				司乘问题
			</view>
			<view class="opinion_description">
				<text class="bold">问题描述</text>
				<view class="issue">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="less">
.opinion {
	.description {
		padding: 10rpx 30rpx 0;
		.opinion_type {
			display: flex;
			justify-content: space-between;
			padding: 30rpx 0;
			border-bottom: 1px solid #eee;
		}
		.opinion_description {
			.issue {
				/deep/uni-textarea {
					height: 145rpx;
					padding-top: 30rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #999;
				}
				> image {
					width: 180rpx;
					height: 180rpx;
				}
			}
		}
		.submit {
			height: 90rpx;
			margin-top: 154rpx;
			line-height: 90rpx;
			background: #ff6600;
			text-align: center;
			font-size: 32rpx;
			font-weight: 500;
			font-weight: 500;
			color: #fff;
			border-radius: 10rpx;
		}
	}
}
</style>
