<template>
	<view class="car">
		<view class="car-list">
			<view>
				<view>
					<text>大众·速腾</text>
					<text class="bg-green">已认证成功</text>
					<!-- <text class="bg-orange">顺风车安全事项</text> -->
				</view>
				<view>白色 豫GC0A19</view>
			</view>
			<view>
				<view>
					<text>大众·速腾</text>
					<text class="bg-green">已认证成功</text>
					<!-- <text class="bg-orange">顺风车安全事项</text> -->
				</view>
				<view>白色 豫GC0A19</view>
			</view>
		</view>
		<navigator url="/pages/attestation/attestation" class="add-car">添加车辆</navigator>
		<view class="notice">
			<view>1.每个车主最多可以添加两辆车做为常用车辆</view>
			<view>2.认证中的车辆无法作为出行车辆</view>
			<view>3.行驶证信息变更后，需从新认证车辆</view>
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
.car {
	height: 100%;
	background: #f5f5f5;
	> .car-list {
		padding: 25rpx 30rpx;

		margin-bottom: 35rpx;
		> view {
			padding: 35rpx;
			margin-bottom: 20rpx;
			color: #000;
			font-weight: 500;
			background-color: #fff;
			border-radius: 10rpx;
			> view {
				&:first-child {
					font-size: 28rpx;
					> text {
						&:nth-child(2) {
							// width: 120rpx;
							// height: 27rpx;
							padding: 5rpx 16rpx 4rpx 14rpx;
							margin-left: 34rpx;
							background: #25d3a5;
							border-radius: 11rpx 11rpx 11rpx 0rpx;
							color: #fff;
							font-size: 18rpx;
							font-weight: bold;
						}
					}
				}
				&:last-child {
					padding-top: 25rpx;
					font-size: 26rpx;
				}
				.bg-green {
					background: #25d3a5;
				}

				.bg-orange {
					background: #fe6600;
				}
			}
		}
	}
	> .add-car {
		height: 90rpx;
		margin: 0 30rpx;
		line-height: 90rpx;
		background: #f60;
		border-radius: 10rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #fff;
	}
	> .notice {
		padding: 37rpx 0 0 31rpx;
		font-size: 24rpx;
		font-weight: 500;
		color: #999;
	}
}
</style>
