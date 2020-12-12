<template>
	<view class="journey">
		<view class="detail_trip">
			<view class="go-off-time">
				<view><image src="@/static/driver/车主发布/时间.png" mode="widthFix" style="width: 32rpx; height: 32rpx;" /></view>
				<view>
					<text>【出发时间】</text>
					<text @tap="isMask">{{ year }}年{{ month }}月{{ day }}日</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/driver/车主发布/路线.png" mode="widthFix" /></view>
				<view class="travel">
					<text>【行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程】</text>
					<!-- <text>柳林(地铁站)出发，花园路站上高速， 濮阳站下高速，途径网通公司，水秀， 目的地：友谊宾馆(中原路店)</text> -->
					<!-- <u-input v-model="journey" placeholder="柳林(地铁站)出发，花园路站上高速"/> -->
					<textarea v-model="journey" placeholder="柳林(地铁站)出发，花园路站上高速..." class="text_yu"/>
				</view>
			</view>
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/车型.png" mode="widthFix" /></view>
				<view>
					<text>【车 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型】</text>
					<!-- <text>上汽·大通</text> -->
					<u-input v-model="vehicle" placeholder="上汽·大通"/>
				</view>
			</view>
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/车牌.png" mode="widthFix" /></view>
				<view>
					<text>【车 牌 号】</text>
					<!-- <text>豫A·5***5</text> -->
					<u-input v-model="license" placeholder="豫A·5***5"/>
				</view>
			</view>
			<!-- seat -->
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/座位.png" mode="widthFix" /></view>
				<view>
					<text>【余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;座】</text>
					<!-- <text>3座</text> -->
					<u-input v-model="saddle" placeholder="4座"/>
				</view>
			</view>
			<!-- money -->
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/费用.png" mode="widthFix" /></view>
				<view>
					<text>【乘车费用】</text>
					<!-- <text>50元/座</text> -->
					<u-input v-model="c_price" placeholder="50元/座"/>
				</view>
			</view>
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/备注.png" mode="widthFix" /></view>
				<view style="border: 0;">
					<text>【备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注】</text>
					<!-- <text>顺路上下，预定后请电话确认一下。有 大件行李请提前告知！</text> -->
					<u-input v-model="remark" placeholder="顺路上下，预定后请电话确认一下。有 大件行李请提前告知！"/>
				</view>
			</view>
		</view>
		<view class="affirm">
			<input type="text" value="" placeholder="确认您的联系手机号18888888888" />
			<navigator class="modify_phone" url="/pages/component/modifyPhone/modifyPhone">修改</navigator>
		</view>
		<u-picker v-model="visible" mode="time" title="选择时间" confirm-color="#F60" cancel-color="#999" :start-year="year" @confirm="confirm"></u-picker>
	<!-- 	<view class="mask" v-if="visible">
			<view class="popup">
				<view class="popup_th">
					<view class="left" @tap="visible=false">取消</view>
					<view class="popup_title">选择时间</view>
					<view class="right color-orange" @tap="visible=false">确定</view>
				</view>
				<view class="popup_tb">
					<picker-view class="select" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
						<picker-view-column>
							<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
						</picker-view-column>
						<picker-view-column>
							<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
						</picker-view-column>
					</picker-view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		const date = new Date()
		const years = []
		const year = date.getFullYear()
		const months = []
		const month = date.getMonth() + 1
		const days = []
		const day = date.getDate()
		for (let i = 1990; i <= date.getFullYear(); i++) {
			years.push(i)
		}
		for (let i = 1; i <= 12; i++) {
			months.push(i)
		}
		for (let i = 1; i <= 31; i++) {
			days.push(i)
		}
		return {
			years,
			year,
			months,
			month,
			days,
			day,
			value: [9999, month - 1, day - 1],
			visible: false,
			indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/61))}px;`,
			journey:'', //行程
			vehicle:'', //车型
			license:"", //车牌号
			saddle:"", //车座
			c_price:"" ,//乘车费用
			remark:"" //乘车备注
		};
	},
	computed: {
		// startDate() {
		// 	return this.getDate('start');
		// },
		// endDate() {
		// 	return this.getDate('end');
		// }
	},
	methods: {
		isMask() {
			this.visible = !this.visible;
		},
		bindChange: function(e) {
			const val = e.detail.value
			this.year = this.years[val[0]]
			this.month = this.months[val[1]]
			this.day = this.days[val[2]]
		},
		bindTimeChange: function(e) {
			this.time = e.target.value
		},
		
		// 确定出发时间
		confirm(e){
			this.year = e.year
			this.month = e.month
			this.day = e.day
		}
	}
};
</script>

<style scoped lang="less">
.journey {
	background-color: #fff;
	.detail_trip {
		&> view {
			display: flex;

			&> view {
				&:first-child {
					display: flex;
					width: 100rpx;
					justify-content: center;

					&> image {
						padding-top: 30rpx;
						width: 32rpx;
					}
				}

				&:last-child {
					display: flex;
					width: 100%;
					padding: 31rpx 31rpx 32rpx 0;
					border-bottom: 1px solid #eee;

					&> text {
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
				.text_yu{
					width: 70%;
					height: 116rpx;
					font-size: 26rpx;
				}
			}
		}
		.car-type{
			&>view{
				display: flex;
				align-items: center;
				&>image{
					padding-top: 0 !important;
				}
			}
			
		}
	}
	.affirm {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 73rpx;
		border-top: 1px solid #eee;
		padding-left: 30rpx;
		padding-right: 32rpx;

		&> input {
			flex: 1;
			font-size: 22rpx;
			font-weight: 500;
			color: #999;
		}

		.modify_phone {
			font-size: 24rpx;
			font-weight: 500;
			color: #f60;
		}
	}
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
	
		.popup {
			width: 100%;
			height: 469rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #fff;
			font-size: 32rpx;
			font-weight: 500;
			color: #999;
	
			.popup_th {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 80rpx;
				padding: 0 20rpx;
				border-bottom: 1px solid #eee;
				font-size: 28rpx;
	
				.popup_title {
					font-size: 32rpx;
					color: #000;
				}
			}
	
			.popup_tb {
				padding: 100rpx 0 80rpx;
	
				.select {
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
