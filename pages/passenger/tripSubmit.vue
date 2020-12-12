<template>
	<view class="passenger-order">
		<!-- 选择出发位置 -->
		<view class="location">
			<view class="place">
				<view class="start-place">
					<text class="dot-green"></text>
					<view>
						<text>出发位置</text>
						<input type="text" value="郑州市" />
					</view>
				</view>
				<view class="arrive-place">
					<text class="dot-red"></text>
					<view>
						<text>到达位置</text>
						<input type="text" value="长垣市" />
					</view>
				</view>
			</view>
			<view class="toggle"><image src="@/static/driver/车主发布/切换.png" mode="widthFix" /></view>
		</view>
		<!-- 出发信息 -->
		<view class="trip-info">
			<view>
				<view><image src="@/static/driver/车主发布/时间.png" mode="widthFix" /></view>
				<view>
					<text>【出发时间】</text>
					<input type="text" value="" placeholder="请选择出发时间" />
				</view>
			</view>
			<view>
				<view><image src="@/static/home/人数1.png" mode="widthFix" /></view>
				<view class="travel">
					<text>【乘车人数】</text>
					<text>1人</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/home/等待.png" mode="widthFix" /></view>
				<view>
					<text>【等待时间】</text>
					<text>前后2.0小时</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/home/起点.png" mode="widthFix" /></view>
				<view>
					<text>【距离起点】</text>
					<text>任意距离</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/home/终点.png" mode="widthFix" /></view>
				<view style="border: 0;">
					<text>【距离终点】</text>
					<text>任意距离</text>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="agree">
				<image class="radio" :src="radio" mode="widthFix" @tap="agree" />
				<text>我已阅读并同意哒哒出行</text>
				<text>《合乘协议》</text>
			</view>
			<!-- 提交到store状态管理库中，在首页渲染 -->
			<navigator class="publish-msg" url="/pages/index/index">提交预约</navigator>
			<view class="hint">
				<view>温馨提示：</view>
				<view>1、拼友提交预约请求后，系统会持续匹配与您出行时间相符的车主，并实时通知给您。</view>
				<view>2、匹配成功，不是订座成功。此功能仅仅是通知提醒功能，拼友还要要自己判断车主路线是否适合自己，并进行预订。</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isAgree: true,
			radio: require('@/static/home/check.png')
		};
	},
	methods: {
		agree() {
			this.isAgree = !this.isAgree;
			if (this.isAgree) {
				this.radio = require('@/static/home/check.png');
			} else {
				this.radio = require('@/static/home/circle.png');
			}
		}
	}
};
</script>

<style scoped lang="less">
.passenger-order {
	height: 100%;
	background: #f5f5f5;

	.location {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		margin-top: 21rpx;

		.place {
			> view {
				display: flex;
				align-items: center;

				> text {
					display: block;
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					margin: 44rpx 46rpx 41rpx 31rpx;
				}

				> view {
					display: flex;
					align-items: center;
					height: 96rpx;
					font-size: 28rpx;
					color: #333;

					&:first-of-type {
						border-bottom: 1rpx solid #eee;
					}

					> text {
						font-weight: bold;
						color: #333;
						padding-right: 58rpx;
					}

					> input {
						font-size: 28rpx;
						font-weight: 500;
					}
				}

				.dot-green {
					background: #21cac8;
				}

				.dot-red {
					background: #ff5446;
				}
			}
		}

		.toggle {
			> image {
				width: 49rpx;
				height: 50rpx;
				margin-right: 31rpx;
			}
		}
	}

	.trip-info {
		background-color: #fff;
		padding-right: 31rpx;

		& > view {
			display: flex;
			align-items: center;

			& > view {
				display: flex;

				&:first-child {
					display: flex;
					justify-content: center;
					width: 100rpx;

					& > image {
						margin-left: 10rpx;
						width: 30rpx;
					}
				}

				&:last-child {
					width: 100%;
					padding: 31rpx 31rpx 32rpx 0;
					border-bottom: 1px solid #eee;

					& > text {
						color: #010101;
						font-size: 26rpx;

						&:first-child {
							font-weight: bold;
						}

						&:last-child {
							font-weight: 500;
						}
					}
				}
			}
		}
	}

	& > .footer {
		background-color: #f5f5f5;
		padding-left: 28rpx;
		padding-right: 32rpx;

		& > .agree {
			height: 100rpx;
			line-height: 100rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #333;

			& > image {
				width: 27rpx;
				height: 26rpx;
				margin-right: 13rpx;
				vertical-align: middle;
			}

			& > text {
				&:last-child {
					color: #f60;
				}
			}
		}

		& > .publish-msg {
			height: 90rpx;
			line-height: 90rpx;
			background: #f60;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #fff;
			margin-bottom: 20rpx;
			text-align: center;
		}

		& > .hint {
			line-height: 32rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #666;
		}
	}
}
</style>
