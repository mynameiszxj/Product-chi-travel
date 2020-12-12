<template>
	<view class="passenger">
		<!-- 到达城市组件 -->
		<city />
		<!-- main -->
		<navigator class="search-carowner" url="/pages/driver/tripHall">查询车主</navigator>
		<!-- 预约行程 还没有预约 -->
		<!-- <view class="booking-travel">
			<view class="booking">
				<image src="@/static/home/预约.png" mode="widthFix" />
				<text>预约行程</text>
			</view>
			<view class="booking-tb">
				<view class="start-place">
					<text>【起 止 地】</text>
					<view>
						郑州市
						<image src="@/static/home/行程.png" />
						濮阳市
					</view>
				</view>
				<view class="start-time">
					<text>【出发时间】</text>
					<view>11月24日 04：40</view>
					<button type="default">取消</button>
				</view>
			</view>
			<view class="matching">
				系统持续为您匹配中
				<image src="@/static/home/转圈.png" mode="widthFix"></image>
			</view>
		</view> -->
		<!-- 推荐路线 -->
		<view class="route">
			<view class="route-th">
				<view class="remd-route">
					<image src="@/static/home/椭圆.png" mode="" />
					<text>推荐路线</text>
				</view>
				<view class="other-route">
					<image src="@/static/home/疑问.png" mode="widthFix" />
					<navigator url="">其他路线</navigator>
				</view>
			</view>
			<view class="route-tb">
				<navigator url="/pages/driver/tripHall" class="navigator">
					<image src="@/static/home/常用.png" mode="widthFix" class="use-always" />
					长垣市
					<image src="@/static/home/到达.png" />
					郑州市
				</navigator>
				<navigator url="/pages/driver/tripHall" class="navigator">
					长垣市
					<image src="@/static/home/到达.png" />
					郑州市
				</navigator>
				<navigator url="/pages/driver/tripHall" class="navigator">
					长垣市
					<image src="@/static/home/到达.png" />
					郑州市
				</navigator>
				<navigator url="/pages/driver/tripHall" class="navigator">
					长垣市
					<image src="@/static/home/到达.png" />
					郑州市
				</navigator>
				<navigator url="/pages/driver/tripHall" class="navigator">
					长垣市
					<image src="@/static/home/到达.png" />
					郑州市
				</navigator>
				<navigator url="/pages/driver/tripHall" class="navigator">
					长垣市
					<image src="@/static/home/到达.png" />
					郑州市
				</navigator>
			</view>
		</view>
		<!-- 常见问题与联系客服 -->
		<view class="contact">
			<navigator url="/pages/profile/guide" class="uni-navigator"><image src="@/static/home/组1.png" mode="widthFix" /></navigator>
			<navigator url="" class="uni-navigator"><image src="@/static/home/组2.png" mode="widthFix" /></navigator>
		</view>
		<!-- 邀请好友 -->
		<view class="banner-friends"><image src="@/static/home/新用户专享.png" mode="widthFix" /></view>
		<!-- 顺风车注意事项 -->
		<view class="matters">
			<view class="matters-left">
				<text class="bg-green">顺风车注意事项</text>
				<text>车辆超员，驾驶证扣分又罚款</text>
				<view>
					发单如实备注出行人数
					<image src="@/static/home/更多.png" mode="widthFix" />
				</view>
			</view>
			<image src="@/static/home/overman.png" mode="widthFix"></image>
		</view>
		<!-- 安全事项 -->
		<view class="safety">
			<view class="safety-left">
				<text class="bg-orange">顺风车安全事项</text>
				<text>安全无小事，乘车出行一定要安全</text>
				<view>
					查看网约车安全规范
					<image src="@/static/home/更多.png" mode="widthFix" />
				</view>
			</view>
			<image src="@/static/home/trip.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
import city from '@/components/city.vue';
export default {
	components: {
		city
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="less">
.passenger {
	padding: 25rpx 30rpx 45rpx;

	& > view {
		background-color: #fff;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
	}
	& > .search-carowner {
		height: 90rpx;
		line-height: 90rpx;
		background: #fe6600;
		border-radius: 10rpx;
		font-size: 36rpx;
		font-weight: 500;
		text-align: center;
		color: #fff;
		margin-bottom: 35rpx;
	}

	& > .booking-travel {
		height: 266rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-weight: bold;
		color: #333;
		border-radius: 10rpx;

		& > .booking {
			height: 66rpx;
			line-height: 66rpx;
			padding-left: 25rpx;
			border-bottom: 1px solid #eee;

			& > image {
				width: 35rpx;
				height: 32rpx;
				vertical-align: middle;
				margin-right: 12rpx;
			}
		}

		& > .booking-tb {
			padding: 31rpx 36rpx 0 30rpx;

			& > view {
				display: flex;
				font-size: 26rpx;

				& > view {
					& > text {
						font-weight: bold;
						color: #010101;
					}
				}
			}

			& > .start-place {
				padding-bottom: 30rpx;

				& > view {
					display: flex;
					align-items: center;
					font-weight: bold;
					color: #000;

					& > image {
						width: 36rpx;
						height: 10rpx;
						margin-left: 24rpx;
						margin-right: 20rpx;
					}
				}
			}

			& > .start-time {
				& > view {
					font-weight: 500;
					color: #000;
				}

				& > button {
					width: 120rpx;
					height: 50rpx;
					margin-left: 140rpx;
					line-height: 50rpx;
					background-color: #fff;
					border: 1px solid #f60;
					border-radius: 6rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #f60;
				}
			}
		}

		& > .matching {
			padding-left: 28rpx;
			font-size: 26rpx;
			font-weight: 500;
			color: #000;

			& > image {
				width: 27rpx;
				height: 27rpx;
				vertical-align: middle;
				margin-left: 12rpx;
			}
		}
	}

	& > .route {
		& > .route-th {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 83rpx;
			padding: 0 32rpx;

			& > view {
				display: flex;
			}

			& > .remd-route {
				font-size: 28rpx;
				font-weight: bold;
				color: #333;

				& > image {
					width: 28rpx;
					height: 32rpx;
					margin-right: 10rpx;
				}
			}

			& > .other-route {
				font-size: 24rpx;
				font-weight: 500;
				color: #afb3bf;
				& > image {
					width: 26rpx;
					height: 26rpx;
					margin: 9rpx;
				}
			}
		}

		& > .route-tb {
			display: flex;
			flex-wrap: wrap;
			padding: 0 27rpx 8rpx 26rpx;
			font-size: 26rpx;
			font-weight: 500;
			color: #000;

			& > .navigator {
				position: relative;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				width: 310rpx;
				height: 75rpx;
				margin-bottom: 29rpx;
				margin-right: 17rpx;
				background: #f5f5f5;
				border-radius: 10rpx;

				& > .use-always {
					position: absolute;
					left: 0;
					top: 0;
				}

				&:nth-child(2n) {
					margin-right: 0;
				}

				& > image {
					width: 38rpx;
					height: 11rpx;
				}
			}
		}
	}

	& > .contact {
		display: flex;
		justify-content: space-between;
		height: 120rpx;
		background: #f5f5f5;

		& > .uni-navigator {
			float: left;
			width: 100%;
			height: 100%;
			border-radius: 10rpx;

			&:first-child {
				margin-right: 30rpx;
			}

			& > image {
				width: 100%;
				height: 120rpx;
			}
		}
	}

	& > .banner-friends {
		width: 100%;
		height: 186rpx;

		& > image {
			width: 100%;
			height: 186rpx;
		}
	}

	& > .matters,
	& > .safety {
		display: flex;
		justify-content: space-between;
		height: 160rpx;
		box-sizing: border-box;
		padding: 25rpx 53rpx 35rpx 31rpx;
		font-size: 26rpx;

		& > view {
			display: flex;
			flex-direction: column;

			& > text {
				&:first-child {
					width: 146rpx;
					height: 27rpx;
					padding: 5rpx 9rpx 4rpx;
					line-height: 27rpx;
					text-align: center;
					font-size: 18rpx;
					font-weight: bold;
					color: #fff;
					border-radius: 11rpx 11rpx 11rpx 0rpx;
				}

				&:nth-child(2) {
					padding: 3rpx 0 5rpx 0;
					font-weight: bold;
					color: #000;
				}
			}
			& > view {
				font-weight: 400;
				color: #999;

				image {
					width: 11rpx;
					height: 19rpx;
					margin-left: 13rpx;
				}
			}
		}

		& > image {
			width: 115rpx;
			height: 115rpx;
		}
	}

	.bg-green {
		background: #25d3a5;
	}

	.bg-orange {
		background: #fe6600;
	}
}
</style>
