<template>
	<view class="comment">
		<view class="trip_msg">
			<view>
				<view><image src="@/static/driver/车主发布/路线.png" mode="widthFix" style="width: 32rpx;height: 29rpx;" /></view>
				<view class="go_city">
					<text>【起&ensp;止&ensp;地】</text>
					<view>
						郑州市
						<image src="@/static/driver/顺风车-车主/arrive.png" mode="widthFix" style="width: 38rpx;height: 11rpx;margin: -7rpx 16rpx 0 25rpx; " />
						濮阳市
					</view>
				</view>
			</view>
			<view class="car_owner">
				<view><image src="@/static/home/车主管理.png" mode="widthFix" style="width: 29rpx;height: 32rpx;" /></view>
				<view>
					<text>【车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;主】</text>
					<text>李先生</text>
				</view>
			</view>
			<view>
				<view><image src="@/static/driver/车主发布/时间.png" mode="widthFix" style="width: 32rpx;height: 32rpx;" /></view>
				<view class="go_time">
					<text>【出发时间】</text>
					<input type="text" value="11月24日04:40" placeholder="" />
				</view>
			</view>
			<view class="car-type">
				<view><image src="@/static/driver/车主发布/车型.png" mode="widthFix" style="width: 32rpx;height: 26rpx;" /></view>
				<view>
					<text>【车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;型】</text>
					<text>上汽*大通</text>
				</view>
			</view>
		</view>
		<view class="rate">评价类型</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			star: 3
		};
	},
	methods: {
		btnClick(e) {
			// console.log(e.currentTarget.dataset.id);
		}
	}
};
</script>

<style scoped lang="less">
.comment {
	& > .trip_msg {
		padding-right: 30rpx;
		border-bottom: 15rpx solid #f5f5f5;
		& > view {
			display: flex;
			height: 96rpx;
			line-height: 96rpx;
			font-size: 26rpx;
			color: #010101;
			& > view {
				&:first-child {
					padding-left: 46rpx;
					margin-right: 23rpx;
				}

				&:last-child {
					display: flex;
					width: 100%;
					padding-bottom: 30rpx;
					border-bottom: 1px solid #eee;

					& > text {
						&:first-child {
							// white-space: pre-wrap;
							font-weight: bold;
							margin-right: 30rpx;
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
