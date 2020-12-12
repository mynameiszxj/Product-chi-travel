<template>
	<view class="home">
		<view class="header_title">
			<!-- 这里是状态栏 -->
			<image src="@/static/home/user.png" mode="widthFix" style="width: 57rpx;height: 57rpx;" @tap="open" />
			<view class="title">品驰出行</view>
			<view class="title_right">
				<image src="@/static/home/定位.png" mode="widthFix" style="width: 28rpx;height: 34rpx;margin-right: 14rpx;" />
				郑州
			</view>
		</view>
		<!-- 一级导航条 -->
		<view class="tab-bar">
			<block v-for="(item, index) in tabData" :key="index">
				<view class="tab-item" :class="index == current ? 'select' : ''" @tap="tabSelect" :data-id="index">
					<view>{{ item }}</view>
					<view :class="index == current ? 'b-bottom' : ''" /></view>
					
			</block>
		</view>
		<!-- 拼车组件 -->
		<view class="click-current" :class="{ dis: current == 0 }">
			<!-- :style="[{height:'calc(100vh - '+ CustomBar + 'px - 46px)'}]" -->
			<scroll-view scroll-y="true" :style="[{height:'calc(100vh - '+ CustomBar + 'px - 46px)'}]">
				<carSharing />
			</scroll-view>
			
		</view>
		<!-- 快车组件 -->
		<view class="click-current" :class="{ dis: current == 1 }">
			<fastCar />
		</view>
		<!-- 专车 -->
		<view class="click-current" :class="{ dis: current == 2 }">
			<specail />
		</view>
		<!-- 代驾 -->
		<view class="click-current" :class="{ dis: current == 3 }">
			<dring />
		</view>
		<!-- 跑腿组件 -->
		<view class="click-current" :class="{ dis: current == 4 }">
			<runleg />
		</view>
		<!-- 遮罩 -->
		<u-popup v-model="visible" width="500rpx">
			<view class="popup">
				<personal />
			</view>
		</u-popup>

	</view>
</template>

<script>
	import personal from '@/components/personal/personal.vue';
	import carSharing from '@/components/tabbar/carsharing/carsharing.vue';
	import fastCar from '@/components/tabbar/fastcat/fastcat.vue';
	import specail from '@/components/tabbar/specail/specail.vue';
	import dring from '@/components/tabbar/dring/dring.vue';
	import runleg from '@/components/tabbar/runleg/runleg.vue';

	export default {
		components: {
			personal,
			carSharing,
			fastCar,
			specail,
			dring,
			runleg
		},
		data() {
			return {
				visible: false,
				current: 0,
				// 请求的导航
				tabData: ['拼车', '快车', '专车', '代驾', '跑腿'],
				CustomBar:0
			};
		},

		// onReady() {
		// 	let that = this
		// 	uni.getSystemInfo({
		// 		success: (res) => { // res - 各种参数
		// 			console.log(res.windowHeight); // 屏幕的宽度
		// 			let info = uni.createSelectorQuery().select(".tab-bar"); // 获取某个元素
		// 			console.log(info)
		// 			this.CustomBar = info
		// 			info.boundingClientRect(function(data) { //data - 各种参数
		// 				console.log(data.height) // 获取元素宽度
		// 				let view = res.windowHeight - data.height
		// 				that.heightHome = view
		// 			}).exec()
		// 		}
		// 	});
		// },
		methods: {
			tabSelect(e) {
				this.current = e.currentTarget.dataset.id;
			},
			open() {
				this.visible = true
				// animate();
			}
		}
	};
</script>
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		color: #FFFFFF;
		background: #25d3a5;
	}
</style>
<style scoped lang="less">
	.home {
		.header_title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0rpx 30rpx 0rpx 32rpx;
			background: #25d3a5;
			color: #fff;
			height: 46px;

			.title {
				font-size: 36rpx;
				font-weight: bold;
			}

			.title_right {
				font-size: 26rpx;
				font-weight: 500;
			}
		}

		.tab-bar {
			display: flex;
			align-items: center;
			height: 90rpx;
			font-size: 28rpx;
			font-weight: bold;
			box-shadow: 0px 0px 10rpx 0rpx rgba(0, 0, 0, 0.2);
			border-radius: 0px 0px 20rpx 20rpx;
			text-align: center;

			.tab-item {
				flex: 1;
				position: relative;
			}
		}

		.click-current {
			display: none;
		}

		.dis {
			display: block;
		}

		.select {
			color: #25d3a5;
		}

		.b-bottom {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: 42rpx;
			height: 4rpx;
			margin-top: 10rpx;
			background: #25d3a5;
			border-radius: 2rpx;
		}

		>.mask {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.6);

			>.popup {
				width: 500rpx;
				height: 100%;
				background-color: #fff;
			}
		}
	}
</style>
