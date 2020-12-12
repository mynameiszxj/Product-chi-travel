<template>
	<view class="wechat">
		<view class="wechat-login" @tap="wechatLogin">
			<view class="wechat-text">
				<view></view>
				<text>{{ methodLogin }}</text>
				<view></view>
			</view>
			<view class="wechat-logo">
				<image src="@/static/wechat.png" mode="widthFix" />
				<text>微信</text>
			</view>
		</view>

		<view class="agreenment">
			<text>点击“立即登录”即代表知晓并同意了</text>
			<navigator url="../../pages/user/agreement" open-type="navigate" class="uni-navigator">《用户注册协议及隐私权政策》</navigator>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		methodLogin: {
			type: String,
			default: '其他方式登陆'
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="less">
.wechat {
	.wechat-login {
		font-size: 26rpx;
		font-weight: 500;
		.wechat-text {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 95rpx;
			color: #333;
			& > view {
				width: 189rpx;
				height: 2rpx;
				background: #eee;
			}
		}
		.wechat-logo {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 38rpx 0 52rpx 0;
			& > image {
				width: 77rpx;
				height: 77rpx;
			}
			& > text {
				padding-top: 10rpx;
				color: #999;
			}
		}
	}
	.agreenment {
		padding-left: 56rpx;
		padding-right: 65rpx;
		text-align: center;
		font-size: 26rpx;
		font-weight: 500;
		color: #333;
		.uni-navigator {
			display: inline;
			color: #f60;
		}
	}
}
</style>
