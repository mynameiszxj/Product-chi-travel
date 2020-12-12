<template>
	<view class="modify_trip">
		<city />
		<journey />
		<view class="order_seat" v-if="!isFinish">
			<button class="btn" hover-class="active" @tap="finishClick" data-id="1">设为无座</button>
			<navigator url="/pages/owner/goDetail/goDetail" class="btn active" hover-class="active" data-id="2">保存行程</navigator>
		</view>
		<button v-if="isFinish" :disabled="true" type="default" class="finish">行程已完成</button>
		<view class="notice">
			<view>温馨提示：</view>
			<view>1、请务必保证所填写车型与实际出行车型保持一致，并保证实收价格、联系手机号真实有效，如被拼友投诉，一经核实平台将限制您再次发布信息，情节严重的将直接封号。</view>
			<view>2、平台为顺风车信息服务平台，严谨营运车辆以及“盈利性质车辆”以任何形式发布出行信息，一经发现立即封号。</view>
		</view>
	</view>
</template>

<script>
	import city from '@/components/city.vue';
	import journey from '@/pages/component/journey/journey';
	export default {
		components: {
			city,
			journey
		},
		data() {
			return {
				isFinish: false
			};
		},
		methods: {
			finishClick() {
				this.isFinish = true;
			}
		}
	};
</script>

<style lang="less" scoped>
	.modify_trip {
		background: #f5f5f5;

		>.order_seat {
			display: flex;
			padding: 41rpx 30rpx;

			>.btn {
				flex: 1;
				width: 50%x;
				height: 80rpx;
				line-height: 80rpx;
				border: 1px solid #999;
				border-radius: 10rpx;
				text-align: center;
				color: #333;
				font-size: 32rpx;
				font-weight: 500;

				&:first-child {
					margin-right: 30rpx;
				}
			}

			.active {
				background: #f60;
				color: #fff;
				border: 0;
			}
		}

		>.finish {
			height: 90rpx;
			margin: 30rpx;
			line-height: 90rpx;
			border: 1px solid #999999;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
			text-align: center;
		}

		>.notice {
			padding: 0 34rpx 183rpx 31rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #666;
		}
	}
</style>
