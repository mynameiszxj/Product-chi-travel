<template>
	<view class="select-city-wrap">
		<view class="select-city">
			<view class="index-bg-view">
				<view class="index" @touchmove="touchMoveIndex">
					<view class="index-item" @click="scrollTo('首字母')">首字母</view>
					<view class="index-item" v-for="item in citys" :key="item.letter" @click="scrollTo(item.letter)">{{ item.letter }}</view>
				</view>
			</view>
			<scroll-view :scroll-into-view="scrollIntoId" @scroll="scrollChange" :scroll-y="true" :scroll-with-animation="isAnimation"
			 :style="{ height: windowHeight }">
				<view class="content">
					<view class="section" id="current">
						<view class="city-title">当前定位</view>
						<view class="city-list">
							<view @click="onSelect(value)" class="city-item" style="display: flex; justify-content: center; align-items: center;">
								<image v-if="locationValue == value" style="margin-right: 12rpx; width: 21rpx; height: 26rpx;" src="/static/home/椭圆1.png"
								 mode="aspectFit"></image>
								{{ current }}
							</view>
						</view>
					</view>
					<view class="section" id="hot" v-if="hotCitys.length">
						<view class="city-title">最近使用</view>
						<view class="city-list">
							<view class="city-item" :class="{ active: current === city }" v-for="(city, i) in hotCitys" :key="i" @click="onSelect(city)">{{ city }}</view>
						</view>
					</view>
					<view class="town" :id="item.letter" v-for="item in citys" :key="item.letter">
						<view class="letter">{{ item.letter }}</view>
						<view class="city-letter">
							<view class="letter-item" :class="{ active: current === city }" v-for="(city, itemIndex) in item.list" :key="itemIndex"
							 @click="onSelect(city)">
								{{ city }}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	import Citys from '@/common/city.js';
	export default {
		props: {
			hotCitys: {
				type: Array,
				default () {
					return [];
				}
			},
			value: {
				type: String,
				default: ''
			},
			locationValue: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				citys: Citys,
				windowHeight: '',
				scrollIntoId: 'F',
				current: this.value,
				itemBounds: {},
				marginTopHeight: 0,
				isAnimation: true,
				query: null
			};
		},
		mounted() {
			this.getSystemInfo();
		},
		created() {
			let that = this;
			uni.$on('upadteLoaction', function(city) {
				that.current = city;
				console.log(city);
			});
		},
		beforeDestroy() {
			uni.$off(['upadteLoaction']);
		},
		methods: {
			scrollChange: function(e) {},
			// 获取导航栏的高度
			getItemHeight: function() {
				let that = this;
				this.query = uni.createSelectorQuery().in(this);
				this.query
					.select('.index-item')
					.boundingClientRect(data => {
						let itemW = data.width;
						let itemH = data.height;
						that.itemBounds = {
							width: itemW,
							height: itemH
						};
					})
					.exec();
				this.query
					.select('.index')
					.boundingClientRect(data => {
						console.log(data);
						console.log(this.windowHeight);
						console.log(data.height);
						this.marginTopHeight = (parseInt(this.windowHeight) - parseInt(data.height)) / 2;
						console.log(this.marginTopHeight);
					})
					.exec();
				this.query
					.select('.letter')
					.boundingClientRect(data => {
						console.log(data);

					})
					.exec();
			},
			getSystemInfo() {
				uni.getSystemInfo().then(res => {
					let [error, data] = res;
					this.windowHeight = `${data.windowHeight}px`;
					this.getItemHeight();
				});
			},

			scrollTo(letter) {
				console.log(letter);
				this.isAnimation = false;
				this.scrollIntoId = letter === '#' ? 'current' : letter;
			},
			onSelect(city) {
				console.log(city);
				this.current = city;
				this.$emit('input', city);
				this.$emit('on-select', city);
			},

			touchMoveIndex: function(e) {
				let info = e.changedTouches[0];
				// console.log('开始移动点：' + info.pageY);
				let itemY = info.pageY - this.marginTopHeight;
				var count = Math.ceil(itemY / this.itemBounds.height);
				if (count == 1) {
					this.isAnimation = true;
					this.scrollIntoId = 'current';
					return;
				}
				// console.log(count);
				if (count > 23) {
					return
				}
				if (count - 1 > 0) {
					count = count - 1;
				}
				let item = this.citys[count - 1];
				if (this.scrollIntoId == item.letter) {
					return;
				}
				// console.log(item.letter);
				this.isAnimation = true;
				this.scrollIntoId = item.letter === '#' ? 'current' : item.letter;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.select-city-wrap {
		position: relative;
		font-size: 26rpx;
		font-weight: 500;
		color: #000;
	}


	.index-item {
		width: 100rpx;
		height: 42rpx;
		font-size: 24rpx;
		line-height: 42rpx;
		color: #666;
		text-align: center;
	}

	.select-city {
		.index-bg-view {
			position: absolute;
			right: 10rpx;
			z-index: 999;
			height: 100%;
			width: 60rpx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.town {
			border-top: 1px solid #eee;

			.letter {
				text-align: left;
				padding: 30rpx 0 10rpx 29rpx;
			}

			.letter-item {
				height: 65rpx;
				padding: 0 29rpx;
				line-height: 65rpx;
				border-bottom: 1px solid #eee;
			}
		}

		.section {
			padding: 0 30rpx;

			.city-title {
				color: #000;
				margin-bottom: 28rpx;
			}

			.city-list {
				display: flex;
				flex-wrap: wrap;

				.city-item {
					width: 138rpx;
					height: 47rpx;
					margin-right: 23rpx;
					margin-bottom: 30rpx;
					line-height: 47rpx;
					text-align: center;
					box-shadow: 0rpx 0rpx 4rpx 0rpx rgba(197, 197, 197, 0.35);
					border-radius: 10rpx;

					// 选中状态
					&.active {
						background-color: rgba(255, 102, 0, 1.0);
						// border-color: #2f9bfe;
						color: #fff;
					}
				}
			}
		}
	}
</style>
