<template>
	<view class="modify-phone-number">
		<view class="modify-phone">
			<view>
				<text>设置手机号</text>
				<input type="text" value="" placeholder="请输入新手机号" />
			</view>
			<view>
				<text>验证码</text>
				<input type="text" value="" placeholder="请输入验证码" />
				<button type="default" class="get-code">获取验证码</button>
			</view>
			<button type="default" class="modify"><text>确认修改</text></button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style scoped lang="less">
	.modify-phone-number {
		.modify-phone {
			padding: 0 30rpx;

			>view {
				display: flex;
				align-items: center;
				height: 110rpx;
				font-weight: 500;
				color: #000;
				border-bottom: 1px solid #eee;

				>text {
					width: 140rpx;
					margin-right: 30rpx;
					font-size: 28rpx;
					text-align: right;
				}

				input {

					&:-moz-placeholder,
					&:-ms-input-placeholder {
						font-size: 26rpx;
						font-weight: 400;
						color: #999;
					}
				}

				.get-code {
					width: 191rpx;
					height: 52rpx;
					line-height: 52rpx;
					background: #f60;
					border-radius: 26rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #fff;
				}
			}

			.modify {
				height: 90rpx;
				letter-spacing: 10rpx;
				line-height: 90rpx;
				margin-top: 109rpx;
				background: #f60;
				border-radius: 10rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #fff;
			}
		}

	}
</style>
