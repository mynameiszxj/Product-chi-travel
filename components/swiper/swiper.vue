<template>
	<view>
		<swiper :autoplay="true" :interval="3000" :duration="1000" class="swiper">
			<!-- <swiper-item v-for="(item,index) in banner">
				<view class="swiper-item">
					<image :src="item.banner1" mode="widthFix" />
				</view>
			</swiper-item> -->
			<swiper-item>
				<view class="swiper-item">
					<image src="@/static/home/立即预约.png" mode="widthFix" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="@/static/home/立即预约.png" mode="widthFix" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		// props:{
		// 	banner:{
		// 		type:Array,
		// 		default:[]
		// 	}
		// },
		data() {
			return {
				banner:[ {"banner1": "uploads/avatar/20201013/a8d5ca7831f73df3a96ec586698151f0.png"},
				{ "banner1": "uploads/avatar/20201013/a8d5ca7831f73df3a96ec586698151f0.png"}]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
view {
	>.swiper {
		width: 100%;
		height: 250rpx;
		background: linear-gradient(0deg, #000000 0%, #ffffff 100%);
	
		.swiper-item {
			>image {
				width: 100%;
			}
		}
	}
}
</style>
