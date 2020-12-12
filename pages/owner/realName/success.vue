<template>
	<view class="success">
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
		<view class="order_seat">
			<navigator url="/pages/user/profile/profile" class="btn" hover-class="active" @tap="btnClick" data-id="1">返回个人中心</navigator>
			<navigator url="/pages/index/index" class="btn active" hover-class="active" @tap="btnClick" data-id="2">立即乘车</navigator>
		</view>
		<view class="warn">
			<image src="" mode="widthFix" style="width: 27rpx;height: 27rpx;"></image>
			<text>为了保护您的隐私安全，证件照片已隐藏。</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods: {
			
		}
	};
</script>

<style scoped lang="less">
.success {
	height: 100%;
	background-color: #f5f5f5;
	 .id_info {
		> view {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 40rpx 28rpx;
			background-color: #fff;
			&:first-child {
				border-bottom: 1px solid #eee;
			}
			> text {
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
	 .order_seat {
		display: flex;
		padding: 95rpx 30rpx 28rpx;
		font-size: 32rpx;
		font-weight: 500;
		 .btn {
			flex: 1;
			width: 50%x;
			height: 80rpx;
			line-height: 80rpx;
			background: #fff;
			border: 1px solid #e6e6e6;
			border-radius: 10rpx;
			text-align: center;
			color: #010101;
			&:first-child {
				margin-right: 30rpx;
			}
		}
		.active {
			background: #f60;
			color: #fff;
			border: 0;
		}
	}
	.warn{		
		font-size: 22rpx;
		font-weight: 500;
		color: #333;
	}
}
</style>
