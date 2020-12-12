<template>
	<view class="fail">
		<view class="warn">
			<view>
				<image src="@/static/profile/错误.png" mode="widthFix" style="width: 27rpx;height: 28rpx;margin-right: 21rpx;vertical-align: middle;" />
				<text>认证失败</text>
			</view>
			<text>身份证照片上传识别失败，请重新上传</text>
		</view>
		<view class="anew_upload">
			<view>
				<image src="@/static/profile/corner.png" mode="widthFix" style="width: 265rpx; height: 166rpx;" />
				<view>
					<image src="@/static/driver/反.png" mode="widthFix" />
				</view>
				<text>点击重新身份证正面照片</text>
			</view>
			<view>
				<image src="@/static/profile/corner.png" mode="widthFix" style="width: 265rpx; height: 166rpx;" />
				<view>
					<image src="@/static/driver/正.png" mode="widthFix" />
				</view>
				<text>点击重新身份证反面照片</text>
			</view>
		</view>
		<view class="id_info">
			<view class="real_name">
				<text class="">真实姓名：</text>
				<input type="text" value="" placeholder="请输入您的真实姓名" />
			</view>
			<view class="real_id">
				<text class="">身份证号：</text>
				<input type="text" value="" placeholder="请输入您的身份证号" />
			</view>
		</view>
		<navigator url="/pages/owner/realName/success" class="submit">重新提交</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.fail {
		.warn {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 152rpx;
			border-bottom: 15rpx solid #f5f5f5;

			>view {
				padding-bottom: 27rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #f00;
			}

			>text {
				font-size: 24rpx;
				font-weight: 500;
				color: #333;
			}
		}

		.anew_upload {
			display: flex;
			padding: 47rpx 70rpx;
			margin-bottom: 16rpx;

			>view {
				position: relative;

				>view {
					>image {
						position: absolute;
						width: 248rpx;
						height: 159rpx;
						left: 7rpx;
						top: 5rpx;
						z-index: -999;
					}
				}

				background: url('../../../static/profile/拍照.png') no-repeat center;
				background-size: 48rpx;

				&:first-child {
					margin-right: 95rpx;
				}

				>text {
					display: inline-block;
					padding-top: 27rpx;
					font-size: 18rpx;
					font-weight: 500;
					color: #333;
				}
			}
		}

		>.id_info {
			>view {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 0 20rpx;
				padding: 40rpx 28rpx;

				&:first-child {
					border-bottom: 1px solid #eee;
				}

				>text {
					font-size: 28rpx;
					font-weight: 500;
					color: #333;
				}

				input {

					&:-moz-placeholder,
					&:-ms-input-placeholder {
						color: #999;
					}
				}
			}
		}

		>.submit {
			height: 90rpx;
			margin: 0 30rpx;
			margin-top: 95rpx;
			line-height: 90rpx;
			background: #f60;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #fff;
			text-align: center;
		}
	}
</style>
