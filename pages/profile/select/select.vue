<template>
	<view class="select">
		<view class="location">
			<view class="search_location">
				<image src="../../../static/profile/放大镜.png" mode="widthFix" style="width: 24rpx;height: 24rpx;margin-right: 17rpx;" />
				<input type="text" :value="value" placeholder="请输入常用选择地址" />
			</view>
			<view class="location_list">
				<view>
					<image src="../../../static/profile/time.png" mode="widthFix" style="width: 25rpx;height: 25rpx;"></image>
					<view>
						<text>新田360广场(郑州国贸店)</text>
						<text>河南省郑州市金水区花园路39号</text>
					</view>
				</view>
				<view>
					<image src="../../../static/profile/time.png" mode="widthFix" style="width: 25rpx;height: 25rpx;"></image>
					<view>
						<text>新田360广场(郑州国贸店)</text>
						<text>河南省郑州市金水区花园路39号</text>
					</view>
				</view>
				<view>
					<image src="../../../static/profile/定位位置.png" mode="widthFix" style="width: 20rpx;height: 28rpx;"></image>
					<view>
						<text>新田360广场(郑州国贸店)</text>
						<text>河南省郑州市金水区花园路39号</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			};
		},
		methods: {}
	};
</script>

<style scoped lang="less">
	.select {
		height: 100%;
		background: #f5f5f5;
		.location {
			
			margin: 18rpx 30rpx;
			background-color: #fff;

			.search_location {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 80rpx;
				border-radius: 10rpx;
				border-bottom: 1px solid #eee;
			}

			.location_list {
				background-color: #fff;

				&>view {
					display: flex;
					align-items: center;
					height: 123rpx;
					border-bottom: 1px solid #eee;
					padding-left: 24rpx;

					&>view {
						display: flex;
						flex-direction: column;
						padding-left: 19rpx;

						&>text {
							&:first-child {
								font-size: 26rpx;
								font-weight: bold;
								color: #333;
								padding-bottom: 10rpx;
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
