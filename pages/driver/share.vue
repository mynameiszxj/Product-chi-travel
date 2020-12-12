<template>
	<view class="share">
		<view class="detail_order">
			<view class="star_place">
				<text>【起&ensp;止&ensp;地】</text>
				<view>
					<text>郑州市</text>
					<image src="@/static/home/行程.png" mode="widthFix" />
					<text>濮阳市</text>
				</view>
			</view>
			<view>
				<text>【出发时间】</text>
				<input type="text" :value="tripDetail.go_time" placeholder="请选择出发时间" />
			</view>
			<view>
				<text>【行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;程】</text>
				<text>{{ tripDetail.line }}</text>
			</view>
			<view>
				<text>【车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;型】</text>
				<text>{{ tripDetail.car_model_name }}</text>
			</view>
			<view class="license">
				<text>【车&ensp;牌&ensp;号】</text>
				<text>豫A·5***5</text>
			</view>
			<view>
				<text>【余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;座】</text>
				<text class="color-orange">{{ tripDetail.remaining_seats }}</text>
				<text>座</text>
			</view>
			<view>
				<text>【车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;主】</text>
				<text>{{ tripDetail.real_name }}</text>
			</view>
			<view>
				<text>【电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;话】</text>
				<view class="order_click">
					<text>w.51bc.cc/chit</text>
					<text>(点击即可预定)</text>
				</view>
			</view>
			<view>
				<text>【乘车费用】</text>
				<text class="color-orange">{{ tripDetail.per_fee }}</text>
				<text>元/座</text>
			</view>
			<view class="star">
				<text>【评价星级】</text>
				<image src="@/static/home/czcz_xx.png" mode="widthFix" class="star" />
			</view>
			<view>
				<text>【备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;注】</text>
				<text>顺路上下，预定后请电话确认一下。有 大件行李请提前告知！</text>
			</view>
		</view>
		<view class="forward">
			<text class="red">可复制粘贴至任意QQ群、微信等拼车群</text>
			<view>
				<navigator class="btn active">一键复制</navigator>
				<navigator class="btn" hover-class="active">转发分享</navigator>
			</view>
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
				console.log(e);
			}
		}
	};
</script>

<style scoped lang="less">
	.share {
		height: 100%;
		background: #f5f5f5;

		.detail_order {
			padding: 30rpx 35rpx 0 15rpx;
			padding-top: 30rpx;
			background-color: #fff;
			font-size: 26rpx;

			.star_place {
				display: flex;
				align-items: center;
				font-weight: bold;
				color: #010101;

				>view {
					&:last-child {
						margin-left: 20rpx;

						>image {
							width: 37rpx;
							height: 10rpx;
						}
					}
				}
			}

			>view {
				display: flex;
				padding-bottom: 30rpx;

				.order_click {
					display: flex;
					flex-direction: column;
				}

				>text {
					&:first-child {
						margin-right: 20rpx;
						font-weight: bold;
						color: #010101;
					}

					&:last-child {
						display: flex;
						justify-content: flex-start;
						flex: 1;
						font-weight: 500;
					}
				}
			}

			.license {
				>view {
					font-weight: bold;
				}
			}

			.star {
				>image {
					width: 21rpx;
					height: 21rpx;
				}
			}
		}

		.forward {
			padding-top: 44rpx;
			text-align: center;

			.red {
				font-size: 26rpx;
				color: #f00;
			}

			>view {
				display: flex;
				padding: 39rpx 30rpx;
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
					color: #010101;

					&:first-child {
						margin-right: 20rpx;
					}
				}

				.active {
					background: #f60;
					color: #fff;
					border: 0;
				}
			}
		}
	}
</style>
