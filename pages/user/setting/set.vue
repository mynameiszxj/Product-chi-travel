<template>
	<view class="setting">
		<view class="set_head">
			<view class="head_left">
				<image src="@/static/profile/head.png" mode="widthFix" />
				<view>
					<text>品驰出行</text>
					<text>ID：18888888888</text>
				</view>
			</view>
			<navigator url="/pages/user/edit/ed" class="edit">编辑</navigator>
		</view>
		<view class="set_info">
			<navigator url="/pages/profile/address">
				<text>我的常用地址</text>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
			<navigator url="/pages/profile/guide">
				<text>用户指南</text>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
			<navigator url="/pages/profile/opinion">
				<text>意见反馈</text>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
		</view>
		<view class="set_info">
			<navigator url="/pages/profile/about">
				<text>关于我们</text>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
			<navigator url="/pages/profile/platform">
				<text>平台协议</text>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" />
			</navigator>
			<navigator url="/pages/profile/clear">
				<text>清除缓存</text>
				<view class="clear">
					121M
					<image src="@/static/home/czcz_fh.png" mode="widthFix" style="width: 14rpx;height: 22rpx;margin-left: 12rpx;margin-bottom: 8rpx;" />
				</view>
			</navigator>
		</view>
		<view class="out_login">退出登录</view>
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
	.setting {
		height: 100%;
		background: #f5f5f5;

		.set_head {
			display: flex;
			justify-content: space-between;
			height: 166rpx;
			margin-bottom: 10rpx;
			padding: 0 32rpx;
			background: #fff;

			.head_left {
				display: flex;

				&>image {
					width: 106rpx;
					height: 106rpx;
					padding-top: 29rpx;
				}

				&>view {
					display: flex;
					flex-direction: column;
					margin-left: 29rpx;

					&>text {
						&:first-child {
							padding-top: 48rpx;
							font-size: 32rpx;
							font-weight: bold;
							color: rgba(0, 0, 0, 0.96);
						}

						&:last-child {
							font-size: 26rpx;
							font-weight: 500;
							color: #999;
							line-height: 35px;
						}
					}
				}
			}

			.edit {
				width: 90rpx;
				height: 42rpx;
				margin-top: 60rpx;
				line-height: 42rpx;
				border: 1px solid #ff6600;
				border-radius: 6rpx;
				text-align: center;
				font-size: 26rpx;
				font-weight: 500;
				color: #ff6600;
			}
		}

		.set_info {
			margin-bottom: 10rpx;
			padding: 0 30rpx;
			background: #fff;
			font-size: 28rpx;
			font-weight: 500;
			color: #000;

			&>navigator {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 107rpx;
				border-bottom: 1px solid #eee;

				&>image {
					width: 14rpx;
					height: 22rpx;
				}
			}
		}

		.out_login {
			height: 89rpx;
			line-height: 89rpx;
			background: #fff;
			text-align: center;
			font-size: 32rpx;
			font-weight: 500;
			color: #000;
		}
	}
</style>
