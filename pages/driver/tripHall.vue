<template>
	<view class="trip-hall">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="header_title">
			<image src="@/static/home/icon_fanhui.png" mode="widthFix" style="width: 18rpx;height: 30rpx;" @tap="goBack" />
			<view class="title">
				<text>郑州市</text>
				<image src="@/static/home/到达.png" mode="widthFix" style="width: 38rpx;height: 11rpx;margin-left: 12rpx;margin-right: 17rpx;" />
				<text>濮阳市</text>
			</view>
			<view class="title_right" @tap="open">
				<image src="@/static/home/czcz_sx.png" mode="widthFix" style="width:30rpx;height:30rpx;margin-right: 20rpx;" />
				郑州
			</view>
		</view>
		<scroll-view scroll-y="true" :style="[{height:'calc(100vh - 50px)'}]">
			<swiperItem />
			<view class="today" v-for="(item, index) in data" :key="item.data">
				<view class="title">{{ item.date }}</view>
				<view class="list-car" v-for="(it, index) in item.list" :key="it.id">
					<view class="car-time">
						<text>{{ it.time }}</text>
						<text>今天</text>
					</view>
					<view class="list-right">
						<view class="list-th">
							<view>
								<text>【车主】</text>
								<text>{{ it.real_name }}</text>
							</view>
							<view>
								<navigator url="/pages/driver/tripDetails" class="seat">
									<text>【余座】</text>
									<text class="color-orange">1</text>
									<text>座</text>
									<image src="@/static/home/czcz_fh.png" mode="widthFix"></image>
								</navigator>
							</view>
						</view>
						<view class="list-tb">
							<view class="car_model">
								<text>【车型】</text>
								<text>{{ it.car_model_name }}</text>
							</view>
							<view class="line">
								<text>【行程】</text>
								<text>{{ it.line }}</text>
							</view>
							<view class="remark">
								<text>【备注】</text>
								<text>{{ it.remark }}</text>
							</view>
							<view class="remaining_seats">
								<text>【星级】</text>
								{{ it.remaining_seats }}
								<image src="@/static/home/czcz_xx.png" mode="widthFix" />
							</view>
						</view>
						<view class="per_fee">
							<text>乘车费用：￥{{ it.per_fee }}/座</text>
							<navigator url="/pages/passenger/book" class="order">预定</navigator>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 100px;"></view>
		</scroll-view>

		<view class="foot">
			<view class="foot-left">
				<text>没有合适车辆？马上预约！</text>
				<text>预约后系统将持续为您匹配车主</text>
			</view>
			<navigator url="/pages/passenger/tripSubmit" class="reserve">马上预定</navigator>
		</view>
		<!-- 筛选弹出 -->
		<view class="tanchu">
			<u-popup v-model="show" mode="top" :custom-style="styles" :mask="false">
				<view class="screen">
					<view class="time">
						<view class="title">出发时间</view>
						<view class="xuan">
							<block v-for="(item,index) in time" :key="index">
								<view class="btns" @tap="x_time(index)" :class="is_time == index ? 'pitch' : ''">{{item.name}}</view>
							</block>
						</view>
					</view>
					<view class="time seat">
						<view class="title">空余座位</view>
						<view class="xuan">
							<block v-for="(item,index) in times" :key="index">
								<view class="btns" @tap="x_seat(index)" :class="is_seat == index ? 'pitch' : ''">{{item.name}}</view>
							</block>
						</view>
					</view>
					<view class="s_btn">
						<u-button class="reset">重置</u-button>
						<u-button class="reset yes" :loading="true">确定</u-button>
					</view>
				</view>
			</u-popup>
		</view>
		<!-- 遮罩 -->
		<view class="zhezhao" v-if="show">
			
		</view>
	</view>
</template>

<script>
	import swiperItem from '@/components/swiper/swiper';
	export default {
		components: {
			swiperItem
		},
		props: {
			// start_city:{
			// 	type:String,
			// 	default:''
			// },
			// start_city:{
			// 	type:String,
			// 	default:''
			// },
		},
		data() {
			return {
				styles: {
					"top": "46px"
				},
				data: [{
					date: '今天',
					list: [{
							id: 25,
							start_location: '京泽花园茶城(花园北路店)',
							end_location: '南阳东站',
							go_time: '今天',
							remark: '顺路的话送我到家',
							line: '西史赵村，北三环索林路附近出发，X 站上高速，X 站下高速，目的地：绿地中心千玺广场，会展中心（地铁口）附近',
							car_model_name: '白色·别克君威',
							remaining_seats: 3,
							per_fee: '50.00',
							real_name: '赵先生',
							sex: 1,
							time: '14:29',
							good_comment_rate: '96%'
						},
						{
							id: 26,
							start_location: '京泽花园茶城(花园北路店)',
							end_location: '南阳东站',
							go_time: '今天',
							remark: '顺路的话送我到家',
							line: '西史赵村，北三环索林路附近出发，X 站上高速，X 站下高速，目的地：绿地中心千玺广场，会展中心（地铁口）附近',
							car_model_name: '白色·别克君威',
							remaining_seats: 3,
							per_fee: '50.00',
							real_name: '赵先生',
							sex: 1,
							time: '16:14',
							good_comment_rate: '96%'
						}
					]
				}],
				show: false,
				time: [{
						name: '全部'
					},
					{
						name: '今(18日)'
					},
					{
						name: '明(19日)'
					},
					{
						name: '后(19日)'
					}
				],
				times: [{
						name: '全部'
					},
					{
						name: '2座以上'
					},
					{
						name: '3座以上'
					},
					{
						name: '4座以上'
					}
				],
				is_time: 0,
				is_seat:0
			};
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			open() {
				this.show = true
			},
			x_time(index){
				this.is_time = index
			},
			x_seat(index){
				this.is_seat = index
			}
		}
	};
</script>
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
<style scoped lang="less">
	.trip-hall {
		background: #f5f5f5;

		.header_title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			// padding: 67rpx 30rpx 27rpx 32rpx;
			padding: 0 30rpx 0 32rpx;
			background: #fff;
			color: #000;
			height: 46px;
			border-bottom: 1px solid #EEEEEE;

			.title {
				font-size: 32rpx;
				font-weight: bold;
			}

			.title_right {
				font-size: 30rpx;
				font-weight: 500;
				color: #333;
			}
		}

		.today {
			font-weight: bold;
			color: #010101;
			font-size: 26rpx;

			.title {
				height: 77rpx;
				line-height: 77rpx;
				padding-left: 31rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #fe6600;
			}

			.list-car {
				display: flex;
				background-color: #fff;
				padding: 38rpx 30rpx 0 34rpx;
				margin-bottom: 10rpx;

				.car-time {
					font-size: 32rpx;
					text-align: center;

					>text {
						&:last-child {
							font-size: 26rpx;
						}
					}
				}

				.list-right {
					.list-th {
						display: flex;
						justify-content: space-between;
						padding-bottom: 32rpx;

						>view {
							.seat {
								>text {
									&:nth-child(2) {
										font-weight: 500;
									}

									&:nth-child(3) {
										font-weight: 500;
									}

									&.color-orange {
										color: #f60;
									}
								}

								>image {
									width: 14rpx;
									height: 22rpx;
									margin-left: 15rpx;
								}
							}
						}
					}

					.list-tb {
						border-bottom: 1px dashed #999;

						>view {
							margin-bottom: 32rpx;
							line-height: 40rpx;

							>text {
								&:nth-child(2) {
									font-weight: 500;
								}
							}
						}

						.remaining_seats {
							image {
								width: 21rpx;
								height: 21rpx;
							}
						}
					}

					.per_fee {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						height: 102rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #333;
						text-align: right;

						.order {
							width: 113rpx;
							height: 46rpx;
							line-height: 46rpx;
							margin: 0;
							margin-left: 14rpx;
							background: #f60;
							border-radius: 10rpx;
							color: #fefefe;
							font-size: 24rpx;
							text-align: center;
						}
					}
				}
			}
		}

		.foot {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: fixed;
			bottom: 0;
			left: 0;
			height: 96rpx;
			background: #ffffff;
			box-shadow: 0px 5rpx 15rpx 0rpx rgba(0, 0, 0, 0.2);

			.foot-left {
				display: flex;
				flex-direction: column;
				margin-left: 31rpx;

				>text {
					&:first-child {
						font-size: 28rpx;
						font-weight: bold;
						color: #333;
					}

					&:last-child {
						font-size: 24rpx;
						font-weight: 500;
						color: #999;
					}
				}
			}

			.reserve {
				width: 158rpx;
				height: 46rpx;
				line-height: 46rpx;
				margin-right: 31rpx;
				border: 1px solid #f60;
				border-radius: 10rpx;
				text-align: center;
				font-size: 24rpx;
				font-weight: 500;
				color: #f60;
			}
		}
	}

	.tanchu {
		.screen {
			height: 500rpx;
			padding: 28rpx 34rpx 32rpx 31rpx;

			.title {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}

			.time {
				.xuan {
					margin-top: 42rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.btns {
						width: 156rpx;
						height: 52rpx;
						border: 1px solid #EAEAEA;
						border-radius: 6rpx;
						font-size: 26rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #999999;
						text-align: center;
						line-height: 52rpx;
					}

					.pitch {
						color: #FF6600;
						background: #FFF5F5;
						border: 1px solid #FF6600;
					}
				}
			}

			.seat {
				margin-top: 42rpx;
			}
			.s_btn{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				margin-top: 90rpx;
				
				.reset{
					width: 150rpx;
					height: 56rpx;
					margin: 0;
				}
				.yes{
					background: #FF6600;
					color: #FFFFFF;
					border: none;
					margin-left: 30rpx;
				}
			}
		}
	}
	.zhezhao{
		width: 100%;
		height:calc(100vh - 50px);
		position: absolute;
		top: 46px;
		background-color: rgba(0, 0, 0, 0.6);
	}
</style>
