<template>
	<view class="security">
		<view class="content">
			<view class="current">
				<text>当前参考位置</text>
				<view>河南省郑州市金水区北林路街道</view>
				<view>花园路145-1号润达商务</view>
			</view>
			<view class="contact">
				<view class="exigence">
					<view>紧急联系人</view>
					<text>110报警时，对方可收到您的行程信息</text>
				</view>
				<navigator url="/pages/user/security/linkman" class="set">
					<text>未设置</text>
					<image src="@/static/home/czcz_fh.png" mode="widthFix" style="width: 14rpx;height: 22rpx;" />
				</navigator>
			</view>
			<view class="warn">
				<view>遇到危险，请向警方求助！</view>
				<text>谎报警情将可能被处以五日以上十日以下拘留！</text>
				<button type="default" class="call">呼叫110</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="less">
.security {
	height: 100%;
	background: #f5f5f5;
	&> .content {
		padding: 0 18rpx;
		&> .current {
			margin: 48rpx 0;
			padding: 33rpx 0 26rpx 32rpx;
			background: #fbfbfb;
			box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(51, 51, 51, 0.3);
			border-radius: 20rpx;
			&> text {
				font-size: 24rpx;
				font-weight: 400;
				color: #777;
				padding-bottom: 28rpx;
			}
			&> view {
				font-size: 36rpx;
				font-weight: 500;
				color: #000;
				padding-bottom: 34rpx;
			}
		}
		&> .contact {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 35rpx 13rpx 34rpx 34rpx;
			background: #fbfbfb;
			box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(51, 51, 51, 0.3);
			border-radius: 20rpx;
			font-size: 26rpx;
			color: #999;
			&> .exigence {
				display: flex;
				flex-direction: column;
				&> view {
					padding-bottom: 14rpx;
					font-size: 32rpx;
					font-weight: 500;
					color: #000;
				}
			}
			&> .set {
				&> text {
					margin-right: 16rpx;
				}
			}
		}
		&> .warn {
			position: fixed;
			left: 0;
			width: 100%;
			bottom: 31rpx;
			&> view {
				padding: 0 20rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #ff0000;
				padding-bottom: 16rpx;
			}
			&> text {
				padding: 0 20rpx;
				font-size: 26rpx;
				font-weight: 500;
				color: #333;
			}
			&> .call {
				margin: 20rpx;
				height: 91rpx;
				background: #ff2424;
				border-radius: 10rpx;
				font-size: 32rpx;
				font-weight: 500;
				border: none;
				color: #fff;
			}
		}
	}
}
</style>
