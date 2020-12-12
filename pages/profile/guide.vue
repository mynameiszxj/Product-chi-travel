<template>
	<view class="guide">
		<view class="matters">
			<view>
				<text>乘客相关问题</text>
				<image src="../../static/home/czcz_fh.png" mode="widthFix" />
			</view>
			<view>
				<text>车主相关问题</text>
				<image src="../../static/home/czcz_fh.png" mode="widthFix" />
			</view>
			<view>
				<text>认证相关问题</text>
				<image src="../../static/home/czcz_fh.png" mode="widthFix" />
			</view>
			<view>
				<text>拼车规则问题</text>
				<image src="../../static/home/czcz_fh.png" mode="widthFix" />
			</view>
			<view>
				<text>黑名单问题</text>
				<image src="../../static/home/czcz_fh.png" mode="widthFix" />
			</view>
			<view>
				<text>其他问题</text>
				<image src="../../static/home/czcz_fh.png" mode="widthFix" />
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
	.guide {
		height: 100%;
		background: #f5f5f5;

		.matters {
			padding: 32rpx 30rpx;

			>view {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 30rpx 29rpx 30rpx 39rpx;
				margin-bottom: 20rpx;
				border-radius: 6rpx;
				background-color: #fff;				
				font-size: 30rpx;
				font-weight: 500;
				color: #000;
				>image {
					width: 14rpx;
					height: 22rpx;
				}
			}
		}
	}
</style>
