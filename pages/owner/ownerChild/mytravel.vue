<template>
	<view class="my-travel">
		<view class="travel-list">
			<navigator class="travel-item" url="/pages/owner/goDetail/goDetail">
				<view class="tab-th">
					<view>
						从
						<text>郑州市</text>
						<image src="@/static/driver/顺风车-车主/arrive.png" mode="widthFix" style="width: 38rpx; height: 11rpx;"></image>
						到
						<text>长垣市</text>
					</view>
					<view class="color-orange">
						<text>进行中</text>
						<image src="@/static/driver/顺风车-车主/go_back.png" mode="widthFix" style="width: 12rpx; height: 19rpx;margin-left: 12rpx;" />
					</view>
				</view>
				<view class="tab-tb">
					<view>
						<text>【出发时间】</text>
						<text>11月24日04:40</text>
					</view>
					<view>
						<text>【订座人数】</text>
						<text>2人</text>
					</view>
					<view>
						<text>【剩余座位】</text>
						<text style="color: #FF6600;">1</text>个
					</view>
					<view>
						<text>【备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注】</text>
						<text>顺路上下，花园路三全路交叉口出发</text>
					</view>
				</view>
			</navigator>
			<navigator class="travel-item" url="/pages/owner/finish/finish">
				<view class="tab-th">
					<view>
						从
						<text>郑州市</text>
						<image src="@/static/driver/顺风车-车主/arrive.png" mode="widthFix" style="width: 38rpx; height: 11rpx;"></image>
						到
						<text>长垣市</text>
					</view>
					<view>
						<text>已完成</text>
						<image src="@/static/driver/顺风车-车主/more.png" mode="widthFix" style="width: 12rpx; height: 19rpx;margin-left: 12rpx;" />
					</view>
				</view>
				<view class="nine">
					<view>
						<text>【出发时间】</text>
						<text>11月24日04:40</text>
					</view>
					<view>
						<text>【订座人数】</text>
						<text>2人</text>
					</view>
					<view>
						<text>【剩余座位】</text>
						<text>1</text>个
					</view>
					<view>
						<text>【备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;注】</text>
						<text>顺路上下，花园路三全路交叉口出发</text>
					</view>
				</view>
			</navigator>
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
.my-travel {
	height: 100%;
	background: #f5f5f5;
	.travel-list {
		padding: 28rpx 30rpx;
		.travel-item {
			background: #ffff;
			box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(153, 153, 153, 0.2);
			border-radius: 10rpx;
			margin-bottom: 30rpx;
			&> .tab-th {
				display: flex;
				justify-content: space-between;
				margin-left: 36rpx;
				margin-right: 17rpx;
				padding-top: 34rpx;
				padding-bottom: 30rpx;
				border-bottom: 1px solid #eee;
				font-size: 28rpx;
				font-weight: 500;
				color: #999;
				&>view {
					&:first-child{
						text {
							color: #000;
						}
						image {
							margin: 0 16rpx;
							margin-bottom: 5rpx;
						}
					}
					&:last-child {
						font-size: 26rpx;
					}
				}
				
			}
			&>.tab-tb {
				padding: 30rpx 0 3rpx 30rpx;
				&>view {
					font-size: 26rpx;
					padding-bottom: 26rpx;
					&>text {
						&:first-child {						
							font-weight: bold;
							color: #010101;
						}
						&:last-child {						
							font-weight: 500;
							color: #000;
						}
					}
				}
			}
			&>.nine {
				color: #999 !important;
				padding: 30rpx 0 3rpx 30rpx;
				&>view {
					font-size: 26rpx;
					padding-bottom: 26rpx;
					&>text {
						&:first-child {						
							font-weight: bold;
						}
						&:last-child {						
							font-weight: 500;
						}
					}
				}
			}
		}
	}
}
</style>
