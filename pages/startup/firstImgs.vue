<template>
	<view class="swiper">
		<swiper class="swiper-box" :current="current" @change="swiperChange">
			<swiper-item v-for="(item,index) in swiperInfo" :key="item.title">
				<view class="swiper-item" :class="item.itemClass">
					<image :src="item.url" mode="aspectFill" />
					<view class="titleText">
						<text>{{item.title}}</text>
						<text>{{item.content}}</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="dots-container" v-if="isShow">
			<block v-for="(dot,index) in swiperInfo" :key="index">
				<view :class="['instruct',index===indexCurrent?'active':' ']"></view>
			</block>
		</view>
		<navigator url="/pages/user/login" v-else class="start"><button type="default"
			 class="btn">马上开始</button></navigator>
	</view>

</template>
<script>
	export default {
		data() {
			return {
				swiperInfo: [{
						itemClass: "first",
						url: "/static/introduction/Page1.png",
						title: "预约乘车",
						content: "您可预约乘坐顺路的顺风司机"
					},
					{
						itemClass: "second",
						url: "/static/introduction/Page2.png",
						title: "查看你的司机",
						content: "大型的司机网络系统帮助你找到舒适安全、便宜的乘车方式"
					},
					{
						itemClass: "three",
						url: "/static/introduction/Page3.png",
						title: "定位轨迹",
						content: "提前知道你的司机，并能在地图上查看司机当前位置。"
					}
				],
				current: 0,
				indexCurrent: 0,
				isShow: true,
			};
		},
		created(){
			// uni.getSystemInfo({
			//     success: function (res) {
			// 			let head = res.screenHeight-res.windowHeight;
			// 				this.topHeight = 349-head;
			//     }
			// });
		},
		methods: {
			swiperChange(e) {
				this.indexCurrent = e.detail.current;
				if (this.indexCurrent === this.swiperInfo.length - 1) {
					this.isShow = false;
				} else {
					this.isShow = true;
				}
			},
			// goto(url) {
			// 	uni.navigateTo({
			// 		url: url
			// 	})
			// }
		}
	};
</script>

<style scoped lang="less">
	.swiper {
		padding-top: 193rpx;
		width: 100%;
		height: 100vh;

		.swiper-box {
			width: 100%;
			height: 985rpx;

			.swiper-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				margin-top: 20rpx;

				>image {
					width: 556rpx;
					height: 556rpx;
					margin-bottom: 236rpx;
				}

				.titleText {
					display: flex;
					flex-direction: column;
					line-height: 1;

					text {
						&:nth-of-type(1) {
							font-size: 40rpx;
							font-weight: 800;
							color: #262628;
							margin-bottom: 36rpx;
						}

						&:nth-of-type(2) {
							font-size: 28rpx;
							font-weight: 500;
						}
					}
				}
			}


			.second {
				text {
					margin: 0 94rpx;

					&:last-child {
						line-height: 36rpx;
					}
				}
			}

			.three {
				width: 556rpx;
				margin-left: 100rpx;

				text {
					&:last-child {
						line-height: 36rpx;
					}
				}
			}
		}

		.dots-container {
			display: flex;
			justify-content: center;

			.instruct {
				width: 16rpx;
				height: 16rpx;
				margin: 0 16rpx;
				border: 2px solid #25D3A5;
				border-radius: 50%;
			}

			.instruct.active {
				background-color: #25D3A5;
			}
		}

		.start {
			// position: absolute;
			// bottom: 215rpx;
			// left: 50%;
			// transform: translateX(-50%);
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			.btn {
				width: 380rpx;
				height: 90rpx;
				line-height: 90rpx;
				border-radius: 16px;
				font-size: 34rpx;
				color: #fff;
				background: #25D3A5;
			}

		}
	}
</style>
