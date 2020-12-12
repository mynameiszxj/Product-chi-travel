<template>
	<view class="trip_detail">
		<view class="city_title">
			<view class="go_city">
				郑州市
				<image src="@/static/home/行程.png" mode="widthFix" />
				濮阳市
			</view>
			<!-- <navigator url="/pages/user/order/shareTrip" class="share_trip">分享车程</navigator> -->
		</view>
		<view class="detail_order">
			<view>
				<view><image src="@/static/driver/车主发布/时间.png" mode="widthFix" /></view>
				<view class="go_time">
					<text>【出发时间】</text>
					<input type="text" :value="tripDetail.go_time" placeholder="请选择出发时间" />
				</view>
			</view>
			<view>
				<view><image src="@/static/driver/车主发布/路线.png" mode="widthFix" /></view>
				<view class="travel">
					<text>【行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程】</text>
					<text>{{ tripDetail.line }}</text>
				</view>
			</view>
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/车型.png" mode="widthFix" /></view>
				<view>
					<text>【车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;型】</text>
					<text>{{ tripDetail.car_model_name }}</text>
				</view>
			</view>
			<view class="plate">
				<view><image src="@/static/driver/车主发布/车牌.png" mode="widthFix" /></view>
				<view>
					<text>【车&ensp;牌&ensp;号】</text>
					<text>豫A·5***5</text>
				</view>
			</view>
			<view class="seat">
				<view><image src="@/static/driver/车主发布/座位.png" mode="widthFix" /></view>
				<view>
					<text>【余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;座】</text>
					<text class="color-orange">{{ tripDetail.remaining_seats }}</text>
					<text>座</text>
				</view>
			</view>
			<view class="car_owner">
				<view><image src="@/static/home/车主管理.png" mode="widthFix" /></view>
				<view>
					<text>【车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;主】</text>
					<text>{{ tripDetail.real_name }}</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/home/mobile.png" mode="widthFix" class="mobile" /></view>
				<view>
					<text>【电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;话】</text>
					<view class="order_mobile">
						<text>{{ tripDetail.mobile }}</text>
					</view>
				</view>
			</view>
			<view class="money">
				<view><image src="@/static/driver/车主发布/费用.png" mode="widthFix" /></view>
				<view>
					<text>【乘车费用】</text>
					<text class="color-orange">{{ tripDetail.per_fee }}</text>
					<text>元/座</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/home/星级.png" mode="widthFix" /></view>
				<view>
					<text>【评价星级】</text>
					<image src="@/static/home/czcz_xx.png" mode="widthFix" style="width: 21rpx;height: 21rpx;margin-top: 10rpx;" />
				</view>
			</view>
			<view>
				<view><image src="@/static/driver/车主发布/备注.png" mode="widthFix" /></view>
				<view>
					<text>【备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注】</text>
					<text>顺路上下，预定后请电话确认一下。有 大件行李请提前告知！</text>
				</view>
			</view>
		</view>
		<!-- <view class="order_seat">
			<navigator url="/pages/passenger/book" class="btn" hover-class="active" @tap="btnClick" data-id="1">查看车主位置</navigator>
			<navigator url="/pages/driver/share" class="btn active" hover-class="active" @tap="btnClick" data-id="2">退订座位</navigator>
		</view> -->
		<button type="default" class="btn" @tap="payMoney">立即付款</button>
		<view class="hint">
			<view>温馨提示：</view>
			<view>1、如您行程改变，请尽可能提前退订， 01月19日 09:20前可无责退订。</view>
			<view>2、请在上车后，将分摊A费直接支付车主，平台不代收费用。</view>
			<view>3、如车主有违规行为，点我投诉车主</view>
		</view>
		<view class="mask" v-if="visible" @tap="visible = false">
			<view class="popup">
				<view class="pay_title">付款详情</view>
				<view class="pay_some">
					<view>需支付金额</view>
					<view class="">
						￥
						<text>{{ tripDetail.per_fee }}元</text>
					</view>
				</view>
				<view class="pay_methods">
					<view class="">
						<image src="@/static/home/Alipay.png" mode="widthFix" style="width: 46rpx;height: 46rpx;margin-right: 24rpx;" />
						<text>支付宝支付</text>
					</view>
					<image src="@/static/home/check.png" mode="widthFix" style="width: 26rpx;height: 26rpx;"></image>
				</view>
				<view class="pay_methods">
					<view class="">
						<image src="@/static/home/wechat.png" mode="widthFix" style="width: 46rpx;height: 46rpx;margin-right: 24rpx;" />
						<text>微信支付</text>
					</view>
					<image src="@/static/home/circle-black.png" style="width: 26rpx;height: 26rpx;" mode="widthFix" />
				</view>
				<navigator url="/pages/user/order/payOver" type="default" class="pay_btn">去支付</navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			tripDetail: {
				id: 1,
				driver_id: 1,
				start_location: '西史赵村·南区',
				end_location: '西峡县丁河镇',
				go_time: '2020-06-22 19:21:43',
				remark: '有大件行李提前告知！',
				status: 9,
				real_name: '赵先生',
				sex: 1,
				mobile: '行程已结束，电话隐藏',
				line: '西史赵村，北三环索林路附近出发，X 站上高速，X 站下高速，目的地：绿地中心千玺广场，会展中心（地铁口）附近',
				car_model_name: '宝马X2',
				remaining_seats: 15,
				booked_seats: 0,
				per_fee: '50.00',
				status_text: '未知'
			}
		};
	},
	methods: {
		btnClick(e) {
			// console.log(e.currentTarget.dataset.id);
		},
		payMoney() {
			this.visible = true;
		}
	}
};
</script>

<style scoped lang="less">
.trip_detail {
	.city_title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24rpx 29rpx;
		background-color: #f5f5f5;
		font-weight: bold;

		.go_city {
			background: #f5f5f5;
			font-size: 32rpx;
			color: #000;

			& > image {
				width: 37rpx;
				height: 10rpx;
				margin-right: 18rpx;
				margin-left: 12rpx;
			}
		}

		.share_trip {
			font-size: 28rpx;
			color: #333;
			text-decoration: underline;
		}
	}

	.detail_order {
		padding-top: 37rpx;
		padding-right: 33rpx;

		& > view {
			display: flex;
			font-size: 26rpx;
			color: #010101;

			& > view {
				.order_mobile {
					display: flex;
					flex-direction: column;
					font-weight: 500;
				}

				&:first-child {
					display: flex;
					width: 100rpx;
					justify-content: center;

					& > image {
						width: 32rpx;
					}

					.mobile {
						width: 23rpx;
					}
				}

				&:last-child {
					display: flex;
					width: 100%;
					padding-bottom: 30rpx;

					& > text {
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

	.btn {
		height: 80rpx;
		margin: 24rpx 30rpx;
		line-height: 80rpx;
		background: #fff;
		border-radius: 10rpx;
		text-align: center;
		background: #f60;
		color: #fff;
		border: 0;
	}

	.hint {
		padding: 24rpx 38rpx 366rpx 31rpx;
		line-height: 32rpx;
		font-size: 22rpx;
		font-weight: 500;
		color: #666;
	}

	.mask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);

		.popup {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 644rpx;
			background-color: #fff;

			.pay_title {
				height: 92rpx;
				line-height: 92rpx;
				text-align: center;
				border-bottom: 1px solid #eee;
				font-weight: 400;
				font-size: 30rpx;
			}

			.pay_some {
				margin-bottom: 70rpx;

				> view {
					&:first-child {
						padding: 62rpx 314rpx 20rpx 304rpx;
						font-size: 26rpx;
						font-weight: 400;
						color: #222;
					}

					&:last-child {
						margin-left: 253rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #fb4719;

						> text {
							font-size: 44rpx;
						}
					}
				}
			}

			.pay_methods {
				display: flex;
				justify-content: space-between;
				padding: 0 21rpx 36rpx 26rpx;
			}

			.pay_btn {
				height: 88rpx;
				line-height: 88rpx;
				background: #ff6600;
				border-radius: 44rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #fff;
				margin-top: 18rpx;
				text-align: center;
			}
		}
	}
}
</style>
