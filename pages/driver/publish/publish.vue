<template>
	<view class="over">
		<view class="success">
			<image src="@/static/driver/顺风车-车主/over.png" mode="widthFix" style="width: 294rpx;height: 228rpx;" />
			<view>发布成功</view>
		</view>
		<navigator url="/pages/owner/goDetail/goDetail" class="see_detail">查看发布详情</navigator>
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
.over {
	.success {
		padding: 150rpx 210rpx 83rpx 248rpx;
		>view {		
			margin-left: 27rpx;
			font-size: 45rpx;		
			font-weight: bold;
			color: #535353;
		}
	}
	.see_detail {
		height: 90rpx;
		margin-left: 210rpx;
		margin-right: 216rpx;
		line-height: 90rpx;
		background: #FF6600;
		border-radius: 45rpx;
		font-size: 30rpx;
		font-weight: 500;
		color: #FFF;
		text-align: center;
	}
}
</style>
