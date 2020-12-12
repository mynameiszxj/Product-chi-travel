<template>
	<view class="edit">
		<view class="edit_info">
			<view class="">
				<text>头像</text>
				<view class="head" @tap="photograph">
					<image src="@/static/profile/edit_head.png" mode="widthFix" style="width: 74rpx;height: 74rpx;" />
					<image src="@/static/home/czcz_fh.png" mode="widthFix" />
				</view>
			</view>
			<view>
				<text>昵称</text>
				<view class="">
					<text>拼车之家</text>
					<image src="@/static/home/czcz_fh.png" mode="widthFix" />
				</view>
			</view>
			<view>
				<text>联系方式</text>
				<view class="">
					<text>188888888888</text>
					<image src="@/static/home/czcz_fh.png" mode="widthFix" />
				</view>
			</view>
		</view>
		<view class="edit_info">
			<view>
				<text>性别</text>
				<view class="">
					<text>男</text>
					<image src="@/static/home/czcz_fh.png" mode="widthFix" />
				</view>
			</view>
			<view>
				<text>修改密码</text>
				<image src="@/static/home/czcz_fh.png" mode="widthFix" style="width: 14rpx;height: 22rpx;" />
			</view>
		</view>
		<!-- 修改头像弹窗 -->
		<u-popup v-model="show" mode="bottom">
			<view class="tan">
				<view class="btn">
					<view class="xuan">
						<view class="phont album">从相册选择照片</view>
						<view class="phont">从相册选择照片</view>
					</view>
					<view class="quxiao xuan">
						<view class="phont">取消</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false

			};
		},
		methods: {
			photograph() {
				this.show = true

			}
		}
	};
</script>

<style scoped lang="less">
	.edit {
		height: 100%;
		background: #f5f5f5;

		&>.edit_info {
			margin-top: 5rpx;
			margin-bottom: 10rpx;
			padding: 0 30rpx;
			background: #fff;
			font-size: 28rpx;
			font-weight: 500;
			color: #000;

			&>view {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 107rpx;
				border-bottom: 1px solid #eee;

				&>view {
					&>image {
						&:last-child {
							width: 14rpx;
							height: 22rpx;
							margin-left: 12rpx;
						}
					}
				}
			}
		}
	}

	.tan {
		background-color: rgba(0, 0, 0, 0.6);

		.btn {
			width: 100%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.xuan {
				width: 90%;
				background: #FFFFFF;
				border-radius: 30rpx;
				text-align: center;
				.phont{
					padding: 35rpx 0 33rpx 0;
				}
				.album{
					border-bottom: 1px solid #DEDEDE;
				}

			}
			.quxiao{
				margin-top: 15rpx;
				margin-bottom: 18rpx;
			}
		}


	}
</style>
