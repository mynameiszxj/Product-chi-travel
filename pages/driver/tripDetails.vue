<template>
	<view class="trip_detail">
		<view class="go_city">
			郑州市
			<image src="@/static/home/行程.png" mode="widthFix" />
			濮阳市
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
						<text>(预定后即可查看完整电话)</text>
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
					<image src="@/static/home/czcz_xx.png" mode="widthFix" class="star" />
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
		<view class="order_seat">
			<navigator url="/pages/passenger/book" class="btn active" hover-class="active" @tap="btnClick" data-id="1">预定座位</navigator>
			<navigator url="/pages/driver/share" class="btn" hover-class="active" @tap="btnClick" data-id="2">转发分享</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
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
				mobile: '182****9721',
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
		}
	}
};
</script>

<style scoped lang="less">
.trip_detail {
	.go_city {
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 29rpx;
		background: #f5f5f5;
		font-size: 32rpx;
		font-weight: bold;
		color: #000;
		& > image {
			width: 37rpx;
			height: 10rpx;
			margin-right: 18rpx;
			margin-left: 12rpx;
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
					.star {
						width: 21rpx;
						height: 21rpx;
					}
				}
			}
		}
	}
	.order_seat {
		display: flex;
		padding: 114rpx 30rpx;
		font-size: 32rpx;
		font-weight: 500;
		.btn {
			flex: 1;
			width: 50%x;
			height: 80rpx;
			line-height: 80rpx;
			background: #fff;
			border: 1px solid #d1d1d1;
			border-radius: 10rpx;
			text-align: center;
			color: #010101;
			&:first-child {
				margin-right: 30rpx;
			}
		}
		.active {
			background: #f60;
			color: #fff;
			border: 0;
		}
	}
}
</style>
