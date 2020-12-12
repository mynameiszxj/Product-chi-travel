<template>
	<view class="address">
		<view class="address_list">
			<!-- <navigator ></navigator> -->
			<navigator url="/pages/profile/select/select" class="address_work">
				<view>
					<image src="@/static/profile/工作.png" mode="widthFix" style="width: 33rpx;height: 34rpx;" />
					<view class="">
						<text>工作</text>
						<text>花园茶城</text>
					</view>
				</view>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
			<navigator class="address_home">
				<view>
					<image src="@/static/profile/家.png" mode="widthFix" style="width: 38rpx;height: 33rpx;" />
					<view>
						<text>家里</text>
						<text>湖泊名城</text>
					</view>
				</view>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
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
.address {
	background: #f5f5f5;

	.address_list {
		margin-top: 20rpx;
		background: #fff;

		& > navigator {
			height: 115rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 32rpx;
			border-bottom: 1px solid #eee;

			& > image {
				width: 14rpx;
				height: 22rpx;
			}

			& > view {
				display: flex;
				align-items: center;

				& > view {
					display: flex;
					flex-direction: column;
					margin-left: 23rpx;
					& > text {
						&:first-child {
							font-size: 26rpx;
							font-weight: bold;
							color: #333;
						}
						&:last-child {
							font-size: 22rpx;
							font-weight: 500;
							color: #999;
						}
					}
				}
			}
		}
	}
}
</style>
