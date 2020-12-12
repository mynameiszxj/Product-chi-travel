<template>
	<view class="booking_seat">
		<view class="phone">
			<view>
				<view><image src="@/static/home/mobile.png" mode="widthFix" class="mobile" /></view>
				<view>
					<text>【手机号码】</text>
					<view class="modify-phone">
						<text>182****9721</text>
						<navigator url="/components/modify-phone/modify-phone" class="color-orange navigator">修改手机号</navigator>
					</view>
				</view>
			</view>
			<view>
				<view><image src="../../static/home/人数.png" mode="widthFix" class="mobile" /></view>
				<view>
					<text>【预订人数】</text>
					<view class="people" @tap="isClick">
						<text>
							<text class="color-orange">{{ num }}</text>
							人
						</text>
						<image src="@/static/home/czcz_fh.png" mode="widthFix" class="arrow" />
					</view>
				</view>
			</view>
			<view>
				<view><image src="@/static/home/位置.png" mode="widthFix" class="mobile" /></view>
				<view>
					<text>【上&ensp;车&ensp;点】</text>
					<input type="text" value="" placeholder="例：人民路与建设路交叉口" />
				</view>
			</view>
			<view>
				<view><image src="@/static/home/remark.png" mode="widthFix" class="mobile" /></view>
				<view style="border: 0;">
					<text>【备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注】</text>
					<input type="text" value="" placeholder="请输入您想要说的话" />
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="agree">
				<image class="radio" :src="radio" mode="widthFix" @tap="agree" />
				<text>我已阅读并同意哒哒出行</text>
				<text>《合乘协议》</text>
			</view>
			<navigator url="/pages/user/order/details" class="publish-msg">立即约定</navigator>
		</view>
		<view class="mask" v-if="visible">
			<view class="popup">
				<view class="popup_th">
					<view class="left" @tap="visible = false">取消</view>
					<view class="popup_title">选择人数</view>
					<view class="right color-orange" @tap="visible = false">确定</view>
				</view>
				<view class="popup_tb">
					<picker-view class="select" :indicator-style="indicatorStyle" @change="bindChange">
						<picker-view-column>
							<view class="item" v-for="(item, index) in people" :key="index">{{ item }}人</view>
						</picker-view-column>
					</picker-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isAgree: true,
			num: 1,
			visible: false,
			radio: require('../../static/home/check.png'),
			people: ['1', '2', '3'],
			indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth / (750 / 61))}px;`
		};
	},
	methods: {
		agree() {
			this.isAgree = !this.isAgree;
			if (!this.isAgree) {
				this.radio = require('../../static/home/check.png');
			} else {
				this.radio = require('../../static/home/circle.png');
			}
		},
		bindChange(e) {
			console.log(e.detail.value);
			this.num = e.detail.value[0] + 1;
		},
		isClick() {
			this.visible = !this.visible;
		}
	}
};
</script>

<style scoped lang="less">
.booking_seat {
	height: 100%;
	background: #f5f5f5;

	.phone {
		background-color: #fff;

		& > view {
			display: flex;
			height: 90rpx;
			box-sizing: border-box;
			font-size: 26rpx;
			padding-right: 30rpx;
			padding-top: 30rpx;

			& > view {
				&:first-child {
					display: flex;
					width: 100rpx;
					justify-content: center;

					& > image {
						width: 28rpx;
					}
				}

				&:last-child {
					flex: 1;
					display: flex;
					width: 100%;
					padding-bottom: 30rpx;
					border-bottom: 1px solid #eee;

					.modify-phone,
					.people {
						flex: 1;
						display: flex;
						justify-content: space-between;

						.arrow {
							width: 14rpx;
							height: 24rpx;
						}
					}

					& > text {
						&:first-child {
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

	& > .footer {
		padding: 0 35rpx 86rpx 30rpx;

		& > .agree {
			height: 100rpx;
			line-height: 100rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #333;

			& > .radio {
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
			text-align: center;
		}
	}

	& > .mask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);

		& > .popup {
			width: 100%;
			height: 469rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fff;
			font-size: 32rpx;
			font-weight: 500;
			color: #999;

			& > .popup_th {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 80rpx;
				padding: 0 20rpx;
				border-bottom: 1px solid #eee;
				font-size: 28rpx;

				& > .popup_title {
					font-size: 32rpx;
					color: #000;
				}
			}

			& > .popup_tb {
				padding: 100rpx 0 80rpx;

				& > .select {
					height: 180rpx;
					font-weight: 500;
					color: #000;

					.item {
						padding: 0 50rpx;
						line-height: 60rpx;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
