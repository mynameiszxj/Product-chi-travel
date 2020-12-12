<template>
	<view class="driver-publish">
		<view class="city">
			<view class="city-left">
				<view class="start-city">
					<text class="dot-green"></text>
					<navigator url="/pages/component/setCity/setCity" class="navigator">
						<text>出发城市</text>
						<input type="text" value="" v-model="depart" placeholder="请选择城市" disabled/>
					</navigator>
				</view>
				<view class="arrive-city">
					<text class="dot-red"></text>
					<navigator url="/pages/component/setCity/setCity" class="navigator">
						<text>到达城市</text>
						<input type="text" value=""  v-model="finish" placeholder="请选择城市" disabled/>
					</navigator>
				</view>
			</view>
			<view class="toggle"><image src="@/static/driver/车主发布/切换.png" mode="widthFix" @tap="isToggle" /></view>
		</view>
		<view class="detail_trip">
			<view class="go-off-time">
				<view>
					<image src="@/static/driver/车主发布/时间.png" mode="widthFix" style="width: 32rpx; height: 32rpx;" />
				</view>
				<view>
					<text>【出发时间】</text>
					<text @tap="isMask">{{ year }}年{{ month }}月{{ day }}日</text>
				</view>
			</view>
			<view>
				<view>
					<image src="@/static/driver/车主发布/路线.png" mode="widthFix" />
				</view>
				<view class="travel">
					<text>【行&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;程】</text>
					<!-- <text>柳林(地铁站)出发，花园路站上高速， 濮阳站下高速，途径网通公司，水秀， 目的地：友谊宾馆(中原路店)</text> -->
					<!-- <u-input v-model="journey" placeholder="柳林(地铁站)出发，花园路站上高速"/> -->
					<textarea v-model="journey" placeholder="柳林(地铁站)出发，花园路站上高速..." class="text_yu" />
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
	
		<view class="footer">
			<view class="agree">
				<image class="radio" :src="radio" mode="widthFix" @tap="agree" />
				<text>我已阅读并同意哒哒出行</text>
				<text>《合乘协议》</text>
			</view>
			<navigator url="/pages/driver/publish/publish" class="publish-msg">发布出行信息</navigator>
			<view class="hint">
				<view>温馨提示：</view>
				<view>
					1、请务必保证所填写车型与实际出行车型保持一致，并保证实收价格、联系手机号真实有效，如被拼友投诉，一经核实平台将限制您再次发布信息，情节严重的将直接封号。
				</view>
				<view>2、平台为顺风车信息服务平台，严谨营运车辆以及“盈利性质车辆”以任何形式发布出行信息，一经发现立即封号。</view>
			</view>
		</view>
		<!-- 选择时间 -->
		<u-picker v-model="visible" mode="time" title="选择时间" confirm-color="#F60" cancel-color="#999" :start-year="year" @confirm="confirm"></u-picker>
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
			radio:"",
			years,
			year,
			months,
			month,
			days,
			day,
			visible: false,
			journey:'', //行程
			vehicle:'', //车型
			license:"", //车牌号
			saddle:"", //车座
			c_price:"" ,//乘车费用
			remark:"" ,//乘车备注
			depart:"郑州", //出发城市
			finish:"北京" //结束城市
			
		};
	},
	computed: {},
	onLoad() {
		console.log('2222222222222')
	},
	methods: {
		agree() {
			this.isAgree = !this.isAgree;
			if (this.isAgree) {
				this.radio = require('../../static/home/check.png');
			} else {
				this.radio = require('../../static/home/circle.png');
			}
		},
		isToggle() {
			let stemp = '';
			stemp=this.depart;
			this.depart=this.finish;
			this.finish=stemp;
		},
		isMask() {
			this.visible = !this.visible;
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
.driver-publish {
	background-color: #fff;
	.city {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		.city-left {
			& > view {
				display: flex;
				align-items: center;
				& > text {
					display: block;
					width: 12rpx;
					height: 12rpx;
					border-radius: 50%;
					margin: 44rpx 46rpx 41rpx 31rpx;
				}
	
				.navigator {
					display: flex;
					align-items: center;
					height: 96rpx;
					font-size: 28rpx;
					color: #333;
					&:first-of-type {
						border-bottom: 1rpx solid #eee;
					}
					& > text {
						font-weight: bold;
						color: #333;
						padding-right: 58rpx;
					}
					& > input {
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
			& > image {
				width: 49rpx;
				height: 50rpx;
				margin-right: 31rpx;
			}
		}
	}
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
	}
	.footer {
		padding: 0 35rpx 86rpx 30rpx;
		background-color: #f5f5f5;

		.agree {
			height: 100rpx;
			line-height: 100rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #333;

			.radio {
				width: 27rpx;
				height: 26rpx;
				margin-right: 13rpx;
				vertical-align: middle;
			}

			& text {
				&:last-child {
					color: #f60;
				}
			}
		}

		.publish-msg {
			height: 90rpx;
			line-height: 90rpx;
			background: #f60;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #fff;
			text-align: center;
		}

		.hint {
			padding-top: 20rpx;
			line-height: 30rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #666;
		}
	}
}
</style>
