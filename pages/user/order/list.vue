<template>
	<view class="user_travel">
		<!-- 一级切换栏 -->
		<view class=""></view>

		<view class="all_trip">
			<view v-for="item in userList" :key="item.create_time">
				<view class="tab_title">
					<text>拼车</text>
					<view class="color-orange">
						进行中
						<image src="@/static/driver/顺风车-车主/go_back.png" mode="widthFix" style="width: 12rpx;height: 19rpx;margin-left: 17rpx;" />
					</view>
				</view>
				<view class="user_detail">
					<view>
						<text>【出发时间】</text>
						<text>{{ item.create_time }}</text>
					</view>
					<view class="go_city">
						<text>【起&ensp;止&ensp;地】</text>
						<view>
							<text class="gray">从</text>
							{{ item.start_location }}
							<image src="@/static/driver/顺风车-车主/arrive.png" mode="widthFix" style="width: 38rpx;height: 11rpx;margin: -7rpx 16rpx 0 25rpx; " />
							<text class="gray">到</text>
							{{ item.end_location }}
						</view>
					</view>
					<view>
						<text>【乘坐人数】</text>
						<text>1</text>
						人
					</view>
					<view>
						<text>【上&ensp;车&ensp;点】</text>
						<text>顺路上下，花园路三全路交叉口出发</text>
					</view>
					<navigator class="button" @tap="goOther(item.status_text)">{{ item.status_text }}</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userList: [
				{
					order_id: 41,
					order_sn: 'PC20120716084310785',
					start_location: '郑州火车站西广场',
					end_location: '鹤壁市',
					create_time: '2020-12-07 16:08:43',
					status: 9,
					status_text: '联系车主'
				},
				{
					order_id: 40,
					order_sn: 'PC20120715570810784',
					start_location: '朗悦公园茂',
					end_location: '安阳市',
					create_time: '2020-12-07 15:57:08',
					status: 9,
					status_text: '立即付款'
				},
				{
					order_id: 39,
					order_sn: 'PC20120715562310783',
					start_location: '朗悦公园茂',
					end_location: '安阳市',
					create_time: '2020-12-07 15:56:23',
					status: 0,
					status_text: '立即评价'
				}
			]
		};
	},
	created() {
		uni.request({
			url: 'http://trip.api.qianshangyun.com/api/user/order/getList',
			success: res => {
				uni.hideLoading();
				// if (res.data.code !== '200') {
				// 	uni.showToast({
				// 		title: '获取数据失败:' + res.data.msg,
				// 		duration: 1000,
				// 		icon: "none"
				// 	})
				// 	return;
				// }
				// resolve(res.data);
				console.log(res.data);
			},
			fail: err => {
				// reject(err);
				console.log(err);
				uni.hideLoading();
			},
			complete: () => {
				console.log('请求完成');
				uni.hideLoading();
			}
		});
	},
	methods: {
		goOther(v) {
			console.log(v);
			if (v === '联系车主') {
				uni.redirectTo({
					url: '/pages/user/order/details'
				});
			} else if (v === '立即付款') {
				uni.redirectTo({
					url: '/pages/user/order/pay'
				});
			}
		}
	}
};
</script>

<style scoped lang="less">
.user_travel {
	background-color: #f5f5f5;
	.all_trip {
		padding: 108rpx 30rpx 29rpx;
		& > view {
			margin-bottom: 30rpx;
			padding-left: 35rpx;
			padding-right: 17rpx;
			background-color: #fff;
			box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(153, 153, 153, 0.2);
			border-radius: 10rpx;
			.tab_title {
				display: flex;
				justify-content: space-between;
				height: 90rpx;
				padding-left: 1rpx;
				line-height: 90rpx;
				border-bottom: 1px solid #eee;
			}
			.user_detail {
				overflow: hidden;
				padding: 30rpx 0 29rpx 0;
				font-size: 26rpx;
				.go_city {
					display: flex;
					.gray {
						color: #999;
					}
				}
				& > view {
					padding-bottom: 26rpx;
					& > text {
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
				.button {
					float: right;
					width: 140rpx;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 22rpx;
					text-align: center;
					font-weight: 500;
					color: #f60;
					border: 1px solid #ff6600;
					border-radius: 25rpx;
				}
			}
		}
	}
}
</style>
