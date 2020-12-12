<template>
	<view class="upload_ID">
		<view class="upload_picture">
			<view class="forward">
				<view>
					<view class="corner_left"></view>
					<view class="corner_right"></view>
					<view class="corner_right_bottom"></view>
					<view class="corner_left_bottom"></view>
					<image src="@/static/driver/正.png" mode="widthFix" style="width: 249rpx;height: 150rpx;" />
				</view>
				<view class="click">点击上传身份证正面照片</view>
			</view>
			<view class="behind">
				<view class="">
					<view class="corner_left"></view>
					<view class="corner_right"></view>
					<view class="corner_right_bottom"></view>
					<view class="corner_left_bottom"></view>
					<image src="@/static/driver/反.png" mode="widthFix" style="width: 249rpx;height: 150rpx;" />
				</view>
				<view class="click">点击上传身份证反面照片</view>
			</view>
		</view>
		<!-- <view>
			<camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
			<button type="primary" @click="takePhoto">拍照</button>
			<view>预览</view>
			<image mode="widthFix" :src="src"></image>
		</view> -->
		<view class="id_info">
			<view class="real_name">
				<text class="">真实姓名：</text>
				<input type="text" value="" placeholder="请输入您的真实姓名" />
			</view>
			<view class="real_id">
				<text class="">身份证号：</text>
				<input type="text" value="" placeholder="请输入您的身份证号" />
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: ''
		};
	},
	methods: {
		takePhoto() {
			const ctx = uni.createCameraContext();
			ctx.takePhoto({
				quality: 'high',
				success: res => {
					this.src = res.tempImagePath;
				}
			});
		},
		error(e) {
			console.log(e.detail);
		}
	}
};
</script>

<style lang="less" scoped>
.upload_ID {
	.upload_picture {
		display: flex;
		padding: 20rpx 67rpx;
		&> view {
			&> view {
				font-size: 18rpx;
				font-weight: 500;
				color: #333;
				text-align: center;
				&:first-child {
					position: relative;
					margin-bottom: 20rpx;
					&> view {
						position: absolute;
						width: 21rpx;
						height: 21rpx;
					}
					.corner_left {
						left: -8rpx;
						top: -3rpx;
						border-left: 3rpx solid #4781d8;
						border-top: 3rpx solid #4781d8;
					}
					.corner_right {
						right: -7rpx;
						top: -3rpx;
						border-right: 3rpx solid #4781d8;
						border-top: 3rpx solid #4781d8;
					}
					.corner_right_bottom {
						right: -7rpx;
						bottom: -3rpx;
						border-right: 3rpx solid #4781d8;
						border-bottom: 3rpx solid #4781d8;
					}
					.corner_left_bottom {
						left: -8rpx;
						bottom: -3rpx;
						border-left: 3rpx solid #4781d8;
						border-bottom: 3rpx solid #4781d8;
					}
				}
			}
			&:first-child {
				margin-right: 90rpx;
			}
		}
	}
	.id_info {
		&> view {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 0 20rpx;
			padding: 40rpx 28rpx;
			&:first-child {
				border-bottom: 1px solid #eee;
			}
			&> text {
				font-size: 28rpx;
				font-weight: 500;
				color: #333;
			}
			input {
				&:-moz-placeholder,
				&:-ms-input-placeholder {
					color: #999;
				}
			}
		}
	}
}
</style>
