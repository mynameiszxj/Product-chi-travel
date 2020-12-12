<template>
	<view class="city">
		<view class="city-left">
			<view class="start-city">
				<text class="dot-green"></text>
				<navigator url="/pages/component/setCity/setCity" class="navigator">
					<text>出发城市</text>
					<input type="text" value="" v-model="depart" placeholder="请选择城市" disabled/>
				</navigator>
			</view>
			<view class="arrive-city">
				<text class="dot-red"></text>
				<navigator url="/pages/component/setCity/setCity" class="navigator">
					<text>到达城市</text>
					<input type="text" value=""  v-model="finish" placeholder="请选择城市" disabled/>
				</navigator>
			</view>
			<!-- <view class="arrive-city" v-for="(item,index) in city" :key="index">
				<view  v-for="it in item" :key="it.id">
					<text :class="it.dot_color"></text>
					<navigator url="/pages/startcity/startcity" class="navigator">
						<text>{{it.city_name}}</text>
						<input type="text" :value="it.value" />
					</navigator>
				</view>
			</view> -->
			<!-- <view class="arrive-city">
				<text class="dot-red"></text>
				<navigator url="/pages/startcity/startcity" class="navigator">
					<text>到达城市</text>
					<input type="text" value="长垣市" />
				</navigator>
			</view> -->
		</view>
		<view class="toggle"><image src="../static/driver/车主发布/切换.png" mode="widthFix" @tap="isToggle" /></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// city: [
			// 	[{id:0, city_name: '出发城市' ,  value: '郑州市',dot_color: 'dot-green', }],
			// 	[{id:1,city_name: '到达城市' , value: '长垣市' ,dot_color: 'dot-red',}],
			// 	],
			city: [],
			depart:"", //出发城市
			finish:"" //结束城市
		};
	},
	
	methods: {
		isToggle() {
			this.city.reverse();
			this.isDot = !this.isDot;
		}
	}
};
</script>

<style scoped lang="less">
.city {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	.city-left {
		// > view {
		& > view {
			display: flex;
			align-items: center;
			& > text {
				display: block;
				width: 12rpx;
				height: 12rpx;
				border-radius: 50%;
				margin: 44rpx 46rpx 41rpx 31rpx;
			}

			& > .navigator {
				display: flex;
				align-items: center;
				height: 96rpx;
				font-size: 28rpx;
				color: #333;
				&:first-of-type {
					border-bottom: 1rpx solid #eee;
				}
				& > text {
					font-weight: bold;
					color: #333;
					padding-right: 58rpx;
				}
				& > input {
					font-size: 28rpx;
					font-weight: 500;
				}
			}
			& > .dot-green {
				background: #21cac8;
			}
			& > .dot-red {
				background: #ff5446;
			}
			// }
		}
	}
	& > .toggle {
		& > image {
			width: 49rpx;
			height: 50rpx;
			margin-right: 31rpx;
		}
	}
}
</style>
