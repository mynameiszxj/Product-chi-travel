<template>
	<view class="finish_trip">
		<city />
		<view class="trip_info">
			<view class="publish_time">
				<view>
					<image
						src="@/static/driver/车主发布/时间.png"
						mode="widthFix"
						style="width: 32rpx;h
				32rpx;"
					/>
				</view>
				<view>
					<text>【出发时间】</text>
					<text @tap="isMask">{{ year }}年{{ month }}月{{ day }}日</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/driver/车主发布/座位.png" mode="widthFix" style="width: 32rpx;height: 30rpx;" /></view>
				<view class="residue_seat">
					<text>【余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;座】</text>
					<text class="color-orange">1座</text>
				</view>
			</view>
		</view>
		<button :disabled="true" type="default" class="finish">行程已结束</button>
		<view class="passenger_info">
			<view class="info_title">
				<text>乘客信息</text>
				<navigator url="/components/location/location" class="site">查看乘客位置</navigator>
			</view>
			<!-- <view class="uninfo_default">
				<image src="@/static/driver/顺风车-车主/暂无记录.png" mode="widthFix" style="width: 100rpx;height: 105rpx;" />
				<view>暂无乘客信息！</view>
			</view> -->
		</view>
		<view class="info">
			<view class="">
				<view class="circle">1</view>
				<view class="info_right">
					<text>宁珂（行程结束，电话隐藏）</text>
					<text>上车点(留言)：1人，大广高速口</text>
				</view>
			</view>
			<view class="">
				<view class="circle">1</view>
				<view class="info_right">
					<text>宁珂（行程结束，电话隐藏）</text>
					<text>上车点(留言)：1人，大广高速口</text>
				</view>
			</view>
		</view>
		<view class="notice">
			<view>温馨提示:</view>
			<view>
				1、请在到达目的地后，向乘客
				<text class="color-orange">收取乘车费用</text>
				本订单平台不代收费用。
			</view>
			<view>
				2、如订单存在异常情况，请联系
				<text class="color-orange">在线客服</text>
			</view>
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
.finish_trip {
	background: #f5f5f5;
	& > .trip_info {
		background-color: #fff;
		& > view {
			display: flex;

			& > view {
				&:first-child {
					display: flex;
					width: 100rpx;
					justify-content: center;

					& > image {
						padding-top: 30rpx;
					}
				}

				&:last-child {
					display: flex;
					width: 100%;
					padding: 31rpx 31rpx 32rpx 0;
					border-bottom: 1px solid #eee;

					& > text {
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
	& > .finish {
		height: 90rpx;
		margin: 30rpx;
		line-height: 90rpx;
		border: 1px solid #999999;
		border-radius: 10rpx;
		font-size: 32rpx;
		text-align: center;
		font-weight: 500;
		color: #999;
	}
	& > .passenger_info {
		padding-left: 31rpx;
		padding-right: 28rpx;
		font-size: 32rpx;
		& > .info_title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: 27rpx;
			font-weight: 500;
			color: #000;
			& > .site {
				font-size: 22rpx;
				text-decoration: underline;
			}
		}
	}
	& > .info {
		background-color: #fff;
		& > view {
			display: flex;
			align-items: center;
			margin: 0 30rpx;
			border-bottom: 1px solid #eee;
			&:last-child {
				border: 0;
			}
			.circle {
				width: 39rpx;
				height: 39rpx;
				margin-right: 26rpx;
				line-height: 39rpx;
				background: #f5f5f5;
				border-radius: 50%;
				text-align: center;
			}
			& > .info_right {
				flex: 1;
				display: flex;
				justify-content: center;
				flex-direction: column;
				height: 135rpx;
				font-weight: 500;
				font-size: 26rpx;
			}
		}
	}
	& > .notice {
		padding: 30rpx 0 418rpx 31rpx;
		background-color: #f5f5f5;
		font-size: 22rpx;
		font-weight: 500;
		color: #666;
		line-height: 32rpx;
	}
}
</style>
