<template>
	<view class="about">
		<view class="logo">
			<image src="../../static/profile/品驰logo.png" mode="widthFix" />
			<view>品驰出行</view>
		</view>
		<view class="introduce">
			品驰出行是一款集合了拼车、代驾、打车、专车、跑腿等一系列的出行软件，为用户提供的极大的便利，方便了用户的使用，同时为平台招揽了客户资源，干净简洁的界面加上方便快捷的操作使用户更容易一键出行。
		</view>
		<view class="official_wechat">
			<image src="../../static/profile/kfzx_icon_wx.png" mode="widthFix" />
			<view>官方微信</view>
			<text>识别二维码，关注官方微信</text>
		</view>
	</view>
</template>

<script></script>

<style scoped lang="less">
.about {
	padding: 142rpx 68rpx 0 60rpx;
	text-align: center;
	.logo {
		& > image {
			width: 158rpx;
			height: 132rpx;
		}
		& > view {
			margin: 56rpx 0 43rpx 0;
			font-size: 36rpx;
			font-weight: bold;
			color: #000;
		}
	}
	.introduce {
		text-indent: 2rem;
		font-size: 26rpx;
		font-weight: 500;
		color: #333;
		line-height: 36rpx;
	}
	.official_wechat {
		& > image {
			width: 87rpx;
			height: 69rpx;
			margin: 157rpx 265rpx 35rpx 270rpx;
		}
		& > view {
			font-size: 32rpx;
			font-weight: 500;
			color: #1c1b1b;
		}
		& > text {
			font-size: 26rpx;
			font-weight: 500;
			color: #7f7e7e;
		}
	}
}
</style>
