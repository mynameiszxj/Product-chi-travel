<template>
	<view class="linkman">
		<view class="set_name">
			<view>
				<text>姓名</text>
				<input type="text" value="" placeholder="请输入紧急联系人的电话" />
			</view>
			<view>
				<text>联系电话</text>
				<input type="text" value="" placeholder="请输入紧急联系人的电话号码" />
			</view>
			<navigator url="/pages/user/security/linkman" @tap="saveTell" class="save">保存</navigator>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		saveTell(){
			uni.navigateTo({
				url:'/pages/user/security/linkman'
			})
			// ({
			// 	url:'/pages/user/security/linkman'
			// })
		}
	}
};
</script>
<style scoped lang="less">
.linkman {
	> .set_name {
		padding: 0 30rpx;
		> view {
			display: flex;
			align-items: center;
			height: 110rpx;
			font-weight: 500;
			color: #000;
			border-bottom: 1px solid #eee;

			> text {
				width: 140rpx;
				margin-right: 30rpx;
				font-size: 28rpx;
				text-align: right;
			}

			input {
				flex: 1;
				&:-moz-placeholder,
				&:-ms-input-placeholder {
					font-size: 26rpx;
					font-weight: 400;
					color: #999;
				}
			}
		}
		> .save {
			height: 90rpx;
			letter-spacing: 10rpx;
			line-height: 90rpx;
			margin-top: 88rpx;
			background: #f60;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: #fff;
			text-align: center;
		}
	}
}
</style>
