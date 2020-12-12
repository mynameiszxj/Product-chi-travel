<template>
	<view class="pay_over">
		<view class="moey">
			<image src="@/static/profile/pay_over.png" mode="widthFix"  />
			<view class="">订单支付成功</view>
			<view class="">￥12.00</view>
			<text>感谢您的乘坐，欢迎再次乘坐！</text>
		</view>
		<view class="comment">
			<navigator url="/pages/user/order/commint" class="btn active">立即评价</navigator>
			<navigator url="/pages/index/index" class="btn" hover-class="active">返回首页</navigator>
		</view>
	</view>
</template>

<script>
export default {

};
</script>

<style scoped lang="less">
.pay_over {
	.moey {
		padding-top: 85rpx;
		text-align: center;
		&>image {
			width: 186rpx;
			height: 171rpx;
			margin-bottom: 36rpx;
		}
		&>view {		
			padding-bottom: 29rpx;
			font-size: 34rpx;
			font-weight: bold;
			color: #030303
		}
		&>text {
			padding-top: 4rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #999;
		}
	}
	 .comment {
		display: flex;
		padding: 58rpx 55rpx;
		font-size: 32rpx;
		font-weight: 500;

		.btn {
			flex: 1;
			width: 50%x;
			height: 80rpx;
			line-height: 80rpx;
			background: #fff;
			border: 2rpx solid #999;
			border-radius: 10rpx;
			color: #999;
			text-align: center;

			&:first-child {
				margin-right: 37rpx;
			}
		}

		.active {
			background: #f60;
			color: #fff;
			border: 0;
		}
	}
}
</style>
