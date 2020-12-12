<template>
	<view class="relation">
		<view class="official">
			<view class="attention">二维码</view>
			<view class="meet">识别二维码，关注官方微信</view>
			<view>
				顺风车客服电话：
				<text class="color-orange">18888888888</text>
			</view>
			<view>
				专线客服电话：
				<text class="color-orange">18888888888</text>
			</view>
		</view>
		<view class="work_time">
			<view>客服工作时间</view>
			<view>工作日：9:30-17:30</view>
			<view>双休日：10:30-15:30</view>
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
.relation {
	text-align: center;
	& > .official {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 120rpx 0 68rpx;
		margin: 0 30rpx;
		border-bottom: 1px solid #eee;
		& > .attention {
			width: 191rpx;
			height: 194rpx;
			padding: 7rpx 9rpx 7rpx 8rpx;
			background: #ffffff;
			border: 1px solid #eeeeee;
			border-radius: 8rpx;
			margin-bottom: 32rpx;
		}
		& > .meet {
			font-size: 26rpx;
			font-weight: 500;
			color: #7f7e7e;
			padding-bottom: 49rpx;
		}
		& > view {
			font-size: 28rpx;
			font-weight: 500;
			color: #000;
			padding-bottom: 32rpx;
		}
	}
	& > .work_time {
		padding-top: 90rpx;
		font-size: 28rpx;
		font-weight: 500;
		color: #333;
		& > view {
			&:first-child {
				padding-bottom: 50rpx;
				font-weight: bold;
				color: #000;
			}
			&:last-child {
				padding-top: 26rpx;
			}
		}
	}
}
</style>
