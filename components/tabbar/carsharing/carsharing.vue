<template>
	<!-- 拼车组件 -->
	<view class="sharing-nav">
		<!-- banner -->
		<swiperItem />
		
		<view class="second-nav">
			<view class="passenger">
				<view v-for="(item,index) in secondBar" :key="index" :class="index==tabCar?'color-red':''" @tap="tabClick(index)">
					<text>{{item}}</text>
					<text :class="index==tabCar?'b-bottom':''"></text>
				</view>
			</view>
			<navigator class="owner"  url="/pages/owner/owner">
				<image src="@/static/home/car-owner.png" mode="widthFix" />
				<text>车主</text>
			</navigator>
		</view>
		<!-- 乘客组件 -->
		<view class="tab-cur" :class="{dis:tabCar == 0}">
			<passenger />
		</view>
		<!-- 车主组件 -->
		<view class="tab-cur" :class="{dis:tabCar == 1}">
			
			
			
			<driver />
		</view>
	</view>
</template>

<script>
	import swiperItem from "@/components/swiper/swiper"
	import passenger from "@/pages/passenger/passenger.vue"
	import driver from "@/pages/driver/driver.vue"
	export default {
		components: {
			swiperItem,
			passenger,
			driver
		},
		data() {
			return {
				tabCar: 0,
				secondBar: ['乘客', '车主发布']
			}
		},
		methods: {
			tabClick(index) {
				this.tabCar = index;
			}
		}
	}
</script>

<style scoped lang="less">
	.sharing-nav {	
		background: #F5F5F5;
		// >.swiper {
		// 	width: 100%;
		// 	height: 250rpx;
		// 	background: linear-gradient(0deg, #000000 0%, #ffffff 100%);

		// 	.swiper-item {
		// 		>image {
		// 			width: 100%;
		// 		}
		// 	}
		// }

		>.second-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 77rpx;
			background-color: #fff;
			padding: 15rpx 30rpx 11rpx 29rpx;
			box-sizing: border-box;
			color: #000;

			>.passenger {
				display: flex;

				>view {
					font-size: 28rpx;
					font-weight: bold;
					margin-right: 54rpx;

					>.b-bottom {
						display: block;
						height: 4rpx;
						margin-left: 9rpx;
						margin-top: 10rpx;
						background: #fe6600;
						border-radius: 2rpx;
					}
				}

				>.color-red {
					color: #f60;
				}
			}

	
			>.owner {
				font-size: 26rpx;
				font-weight: 500;
				>image {
					width: 36rpx;
					height: 36rpx;
					margin-right: 17rpx;
				}
			}
		}
		>.tab-cur {
			display: none;
		}
		
		>.dis {
			display: block;
		}
		
	}
</style>
