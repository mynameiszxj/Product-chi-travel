<template>
	<view class="set_password">
		<view class="original">
			<text>输入原密码</text>
			<input type="text" value="" placeholder="请输入原密码" />
		</view>
		<view class="original">
			<text>设置新密码</text>
			<input type="text" value="" placeholder="请输入新密码" />
		</view>
		<view class="reminder">密码为8-16位，可包含数字、字母、符号</view>
		<navigator class="modify"><text>确认修改</text></navigator>
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
.set_password {
	.original {
		display: flex;
		align-items: center;
		height: 106rpx;
		padding-left: 30rpx;
		font-weight: 500;
		color: #000;
		border-bottom: 1px solid #eee;

		> text {			
			font-weight: bold;
			color: #000;
			margin-right: 30rpx;
			font-size: 28rpx;
		}

		input {
			&:-moz-placeholder,
			&:-ms-input-placeholder {
				font-size: 28rpx;
				font-weight: bold;
				color: #999;
			}
		}
	}
	.reminder {
		margin: 27rpx 0 67rpx 31rpx;
		font-size: 24rpx;		
		font-weight: 500;
		color: #333;
	}
	.modify {
		height: 90rpx;
		margin: 0 30rpx;
		line-height: 90rpx;
		background: #f60;
		border-radius: 10rpx;
		font-size: 32rpx;
		font-weight: 500;
		color: #fff;
		text-align: center;
	}
}
</style>
