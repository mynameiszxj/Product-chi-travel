<template>
	<view class="travel_detail">	
		<city />
		<view class="trip_info">
			<view class="publish_time">
				<view>
					<image src="@/static/driver/车主发布/时间.png" mode="widthFix" style="width: 32rpx;h
				32rpx;" />
				</view>
				<view>
					<text>【出发时间】</text>
					<text @tap="isMask">年月日</text>
				</view>
			</view>
			<view>
				<view>
					<image src="@/static/driver/车主发布/座位.png" mode="widthFix" style="width: 32rpx;height: 30rpx;" />
				</view>
				<view class="residue_seat">
					<text>【余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;座】</text>
					<text class="color-orange">1座</text>
				</view>
			</view>
		</view>
		<view class="trip">
			<navigator url="/pages/passenger/book" class="btn" hover-class="active" @tap="btnClick" data-id="1">分享行程</navigator>
			<navigator url="/pages/owner/modifyTrip/modifyTrip" class="btn active" hover-class="active" @tap="btnClick" data-id="2">修改行程</navigator>
		</view>
		<view class="passenger_info">
			<view class="info_title">
				<text>乘客信息</text>
				<navigator url="/components/location/location" class="site">查看乘客位置</navigator>
			</view>
			<view class="uninfo_default">
				<image src="@/static/driver/顺风车-车主/暂无记录.png" mode="widthFix" style="width: 100rpx;height: 105rpx;" />
				<view>暂无乘客信息！</view>
			</view>
		</view>
		<view class="notice">
			<view>温馨提示:</view>
			<view>1、请在到达目的地后，向乘客<text class="color-orange">收取乘车费用</text>本订单平台不代收费用。</view>
			<view>2、如订单存在异常情况，请联系<text class="color-orange">在线客服</text></view>
		</view>
	</view>
</template>

<script>
	import city from '@/components/city.vue';
	export default {
		components: {
			city
		},
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style lang="less" scoped>
	.travel_detail {
		height: 100%;
		background-color: #f5f5f5;

		.trip_info {
			background-color: #fff;

			>view {
				display: flex;

				>view {
					&:first-child {
						display: flex;
						width: 100rpx;
						justify-content: center;

						>image {
							padding-top: 30rpx;
						}
					}

					&:last-child {
						display: flex;
						width: 100%;
						padding: 31rpx 31rpx 32rpx 0;
						border-bottom: 1px solid #eee;

						>text {
							color: #010101;
							font-size: 26rpx;

							&:first-child {
								// white-space: pre-wrap;
								font-weight: bold;
								margin-right: 30rpx;
							}

							&:last-child {
								font-weight: 500;
							}
						}
					}
				}
			}
		}

		.trip {
			display: flex;
			padding: 41rpx 30rpx;
			font-size: 32rpx;
			font-weight: 500;

			.btn {
				flex: 1;
				width: 50%x;
				height: 80rpx;
				line-height: 80rpx;
				border: 1px solid #ff6600;
				border-radius: 10rpx;
				text-align: center;
				color: #ff6600;

				&:first-child {
					margin-right: 30rpx;
				}
			}

			.active {
				background: #f60;
				color: #fff;
			}
		}

		.passenger_info {
			padding-left: 31rpx;
			padding-right: 28rpx;
			font-size: 32rpx;

			.info_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 27rpx;
				font-weight: 500;
				color: #000;

				.site {
					font-size: 22rpx;
					text-decoration: underline;
				}
			}

			.uninfo_default {
				background: #fff;
				text-align: center;
				padding-top: 75rpx;
				font-weight: 500;
				color: #999;

				>view {
					padding: 38rpx 0 78rpx 0;
				}
			}
		}

		.notice {
			padding: 30rpx 0 418rpx 31rpx;
			background-color: #f5f5f5;
			font-size: 22rpx;
			font-weight: 500;
			color: #666;
			line-height: 32rpx;
		}
	}
</style>
