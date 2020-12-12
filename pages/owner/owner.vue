<template>
	<view class="car-owner">
		<view class="card-header">
			<image src="@/static/driver/顺风车-车主/header.png" mode="widthFix" />
			<view class="owner-msg">
				<text>小熊</text>
				<text>ID：188****8888</text>
				<view>
					诚信值：
					<text class="blue">2.6分</text>
					<image src="@/static/driver/顺风车-车主/问题.png" mode="widthFix" />
				</view>
			</view>
		</view>
		<navigator url="/pages/owner/ownerChild/mycode" class="invite">
			<view class="invite-left">
				<image src="@/static/driver/顺风车-车主/路径.png" mode="widthFix" />
				<text>邀请好友成为车主</text>
			</view>
			<view class="once"><text>立即邀请</text></view>
		</navigator>
		<view class="owner-list">
			<navigator class="real-name" url="/pages/owner/realName/realName">
				<view>
					<image src="@/static/driver/顺风车-车主/real.png" mode="widthFix" style="width: 42rpx;height: 42rpx;" />
					<text>实名认证</text>
				</view>
				<view>
					<text>去认证</text>
					<image src="@/static/driver/顺风车-车主/more.png" mode="widthFix" style="width: 14rpx;height: 24rpx;" />
				</view>
			</navigator>
			<navigator class="owner-attestation" @tap="isVisible" url="/pages/owner/ownerAttestation/ownerAttestation">
				<view>
					<image src="@/static/driver/顺风车-车主/car-manage.png" mode="widthFix" style="width: 38rpx;height: 42rpx;" />
					<text>车主认证</text>
				</view>
				<view>
					<text>去认证</text>
					<image src="@/static/driver/顺风车-车主/more.png" mode="widthFix" style="width: 14rpx;height: 24rpx;" />
				</view>
			</navigator>

			<navigator class="my-car" url="/pages/owner/ownerChild/mycar">
				<view>
					<image src="@/static/driver/顺风车-车主/car.png" mode="widthFix" style="width: 42rpx;height: 30rpx;" />
					<text>我的车辆</text>
				</view>
				<view>
					<image src="@/static/driver/顺风车-车主/more.png" mode="widthFix" style="width: 14rpx;height: 24rpx;" />
				</view>
			</navigator>
			<navigator url="/pages/owner/ownerChild/mytravel">
				<view>
					<image src="@/static/driver/顺风车-车主/travel.png" mode="widthFix" style="width: 42rpx;height: 42rpx;" />
					<text>我的行程</text>
				</view>
				<view>
					<image src="@/static/driver/顺风车-车主/more.png" mode="widthFix" style="width: 14rpx;height: 24rpx;" />
				</view>
			</navigator>
			<navigator>
				<view>
					<image src="@/static/driver/顺风车-车主/联系客服.png" mode="widthFix" style="width: 42rpx;height: 42rpx;" />
					<text>联系客服</text>
				</view>
				<view>
					<image src="@/static/driver/顺风车-车主/more.png" mode="widthFix" style="width: 14rpx;height: 24rpx;" />
				</view>
			</navigator>
		</view>
		<view class="mask" v-if="visible">
			<view class="attestation">
				<view class="content">
					<view class="content-th">认证小贴士</view>
					<view class="content-tb">
						<view>1.需要准备身份证、驾驶证、行驶证三样证件。</view>
						<view>2.拍照或_上传图片时请上传清晰、完整的照片。</view>
						<view>3.请上传身份证与驾驶证相对应人员的照片。</view>
						<view>4.审核需要后台审核，可能需要些许时间，请耐心等待。</view>
					</view>
					<navigator url="/pages/attestation/attestation" class="know">知道啦</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false
			};
		},
		methods: {
			isVisible() {
				this.visible = !this.visible;
			}
		}
	};
</script>

<style scoped lang="less">
	.car-owner {
		.card-header {
			display: flex;
			align-items: center;
			height: 230rpx;
			padding-left: 42rpx;

			>image {
				width: 142rpx;
				height: 142rpx;
			}

			.owner-msg {
				display: flex;
				flex-direction: column;
				color: #000;
				margin-left: 36rpx;

				>text {
					&:first-child {
						font-size: 34rpx;
						font-weight: bold;
					}

					&:nth-child(2) {
						font-size: 24rpx;
						font-weight: 500;
						padding-top: 20rpx;
						padding-bottom: 23rpx;
					}
				}

				>view {
					>.blue {
						color: #0006ff;
					}

					>image {
						width: 21rpx;
						height: 21rpx;
						margin-left: 9rpx;
					}
				}
			}
		}

		>.invite {
			display: flex;
			justify-content: space-between;
			height: 84rpx;
			margin: 0 30rpx;
			padding: 0 32rpx;
			background: linear-gradient(-49deg, #444444 0%, #222222 100%);
			border-radius: 16rpx 16rpx 0rpx 0rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: #fde4b8;

			.invite-left {
				display: flex;
				align-items: center;

				>image {
					width: 36rpx;
					height: 30rpx;
					margin-right: 21rpx;
				}
			}

			>.once {
				margin: 18rpx 0;
				width: 130rpx;
				height: 48rpx;
				line-height: 48rpx;
				border-radius: 24rpx;
				font-size: 24rpx;
				text-align: center;
				color: #333;
				background: url("../../static/driver/顺风车-车主/矩形.png") no-repeat center;
			}
		}

		>.owner-list {
			font-size: 32rpx;
			font-weight: 500;
			color: #000;

			>.my-car {
				border-top: 15rpx solid #F5F5F5;
			}

			>navigator {
				display: flex;
				justify-content: space-between;
				padding: 0 31rpx;
				border-bottom: 1px solid #eee;

				>view {
					height: 120rpx;
					line-height: 120rpx;

					&:first-child {
						>image {
							margin-right: 40rpx;
						}
					}

					&:last-child {
						font-size: 26rpx;
						color: #f60;

						>image {
							margin: auto;
							margin-left: 23rpx;
						}
					}
				}
			}
		}

		>.mask {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.6);

			>.attestation {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				>.content {
					width: 556rpx;
					height: 656rpx;
					padding: 52rpx 76rpx 49rpx 52rpx;
					background: #fff;
					box-sizing: border-box;
					border-radius: 30rpx;
					color: #222;

					>.content-th {
						padding-bottom: 57rpx;
						font-size: 30rpx;
						font-weight: bold;
						color: #222;
						text-align: center;
					}

					>.content-tb {
						font-size: 24rpx;
						font-weight: bold;
						font-weight: 500;
						line-height: 40rpx;
					}

					>.know {
						height: 80rpx;
						margin: 51rpx 4rpx 0 2rpx;
						line-height: 80rpx;
						background: #F60;
						border-radius: 40rpx;
						color: #fff;
						text-align: center;
						font-size: 26rpx;
						font-weight: 500;
					}
				}
			}
		}
	}
</style>
