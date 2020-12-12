<template>
	<view class="personal">
		<view class="personal_header">
			<image class="_image" src="@/static/driver/顺风车-车主/header.png" mode="widthFix" style="width: 88rpx; height: 88rpx;" />
			<view class="personal_msg">
				<text class="_text">安然</text>
				<text class="_text">188****8888</text>
				<view class="_view">
					<image src="@/static/profile/诚信.png" mode="widthFix" style="width: 26rpx; height: 32rpx;margin-right: 9rpx;" />
					<text>诚信值：</text>
					<text class="blue">2.6分</text>
					<image src="@/static/profile/疑问.png" mode="widthFix" style="width: 22rpx;height: 22rpx;margin-left: 10rpx;" />
				</view>
			</view>
		</view>
		<image class="member" src="@/static/profile/组.png" mode="widthFix" />
		<view class="personal_list">
			<navigator class="navigator wallet">
				<view>
					<image class="image" src="@/static/profile/wallet.png" mode="widthFix" />
					<text>我的钱包</text>
				</view>
				<text>￥100.00</text>
			</navigator>
			<navigator class="navigator" url="/pages/user/order/list">
				<image class="image" src="@/static/profile/行程.png" mode="widthFix" />
				<text>我的行程</text>
			</navigator>
			<navigator url="/pages/user/ident/realindex" class="navigator real_attes">
				<view>
					<image class="image" src="@/static/profile/实名认证.png" mode="widthFix" />
					<text>实名认证</text>
				</view>
				<text>未认证</text>
			</navigator>
			<navigator class="navigator" url="/pages/user/setting/userinvite">
				<image class="image" src="@/static/profile/邀请.png" mode="widthFix" />
				<text>邀请好友</text>
			</navigator>
			<navigator class="navigator" url="/pages/user/security/center">
				<image class="image" src="@/static/profile/安全.png" mode="widthFix" />
				<text>安全中心</text>
			</navigator>
			<navigator class="navigator" url="/pages/user/setting/relation">
				<image class="image" src="@/static/profile/联系客服.png" mode="widthFix" />
				<text>联系客服</text>
			</navigator>
			<navigator class="navigator" url="/pages/user/setting/set">
				<image class="image" src="@/static/profile/setting.png" mode="widthFix" />
				<text>设置</text>
			</navigator>
		</view>
		<view class="p_bottom">
			<navigator class="" url="/pages/driver/driver">
				<image src="@/static/profile/car_owner.png" mode="widthFix" style="width: 412rpx;height: 71rpx; margin-left: 29rpx;" />
			</navigator>
			<navigator url=""><image src="@/static/profile/加油券.png" mode="widthFix" style="width: 478rpx;height: 142rpx;" /></navigator>
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

<style lang="less" scoped>
.personal {
	.personal_header {
		display: flex;
		align-items: center;
		height: 230rpx;
		padding-left: 42rpx;
		._image {
			width: 88rpx;
			height: 88rpx;
		}

		.personal_msg {
			display: flex;
			flex-direction: column;
			margin-left: 36rpx;
			color: #333;

			._text {
				&:first-child {
					font-size: 26rpx;
					font-weight: bold;
				}

				&:nth-child(2) {
					font-size: 22rpx;
					font-weight: 500;
					padding-top: 16rpx;
					padding-bottom: 18rpx;
				}
			}

			._view {
				font-size: 22rpx;
				font-weight: 500;
				.green {
					color: #25d3a5;
				}
			}
		}
	}
	.member {
		width: 412rpx;
		height: 125rpx;
		margin-left: 30rpx;
	}
	.personal_list {
		// margin-bottom: 407rpx;

		.navigator {
			display: flex;
			align-items: center;
			height: 100rpx;
			padding-left: 30rpx;
			font-size: 26rpx;
			font-weight: 500;
			color: #000;
		}
		.image {
			width: 36rpx;
			height: 36rpx;
			margin-right: 26rpx;
			vertical-align: bottom;
		}
		.wallet,
		.real_attes {
			display: flex;
			justify-content: space-between;
			padding-right: 58rpx;
			.text {
				font-size: 24rpx;
				font-weight: 500;
				color: #999;
			}
		}
	}
	.p_bottom {
		position: fixed;
		left: 10rpx;
		bottom: 12rpx;
	}
}
</style>
