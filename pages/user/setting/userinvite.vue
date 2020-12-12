<template>
	<view class="code">
		<view class="code_detail">
			<view class="friends">邀请好友成为车主一起赚钱</view>
			<view class="create_code">
				<view class="title_code">邀请二维码</view>
				<view class="generate_code"><view></view></view>
				<view class="notice">
					<view>1.使用微信扫码即可打开</view>
					<view>2.完成认证即可发布路程</view>
				</view>
			</view>
		</view>
		<navigator class="save">保存图片到本地</navigator>
		<view class="post">
			<tki-qrcode class="qrcode" cid="qrcode" ref="qrcode" :val="val" :size="size" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" :show="false" />
			<view class="wrapper"><canvas style="height: 100%;width: 100%;backgroundColor: #FFFFFF" canvas-id="firstCanvas"></canvas></view>
		</view>
	</view>
</template>

<script>
import qr from '@/common/wxqrcode.js';
import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue';
export default {
	data() {
		return {
			canvasShow: false,
			picurl: '',
			val: '', // 要生成的二维码值
			size: 325, // 二维码大小
			unit: 'upx', // 单位
			background: '#b4e9e2', // 背景色
			foreground: '#309286', // 前景色
			pdground: '#32dbc6', // 角标色
			icon: '', // 二维码图标
			iconsize: 40, // 二维码图标大小
			lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
			onval: false, // val值变化时自动重新生成二维码
			loadMake: true, // 组件加载完成后自动生成二维码
			src: '', // 二维码生成后的图片地址或base64
			cover: 'static/share_bg.png'
		};
	},
	onLoad: function(option) {
		var thas = this;
		thas.val = option.devicenumber;
	},
	methods: {
		qrR(path) {
			let that = this;
			this.qr_path = path;
			let system_info = uni.getSystemInfoSync();
			let ctx = uni.createCanvasContext('firstCanvas');
			console.log(res.path);
			ctx.drawImage(res.path, 0, 0, uni.upx2px(750), uni.upx2px(1330));
			ctx.drawImage(path, uni.upx2px(184), uni.upx2px(630), uni.upx2px(375), uni.upx2px(400));
			ctx.draw(false, () => {
				uni.canvasToTempFilePath({
					x: 0,
					y: 0,
					width: 375,
					height: uni.upx2px(1330),
					destWidth: 375,
					destHeight: uni.upx2px(1330),
					canvasId: 'firstCanvas',
					success: function(res) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function() {
								that.picurl = res.tempFilePath;
							}
						});
					},
					fail(e) {
						uni.showToast({
							title: '生成海报失败',
							icon: 'none'
						});
					}
				});
			});
		}
	},
	//保存
	savePic() {
		uni.showLoading({
			title: '正在保存'
		});
		uni.saveImageToPhotosAlbum({
			filePath: this.picurl,
			success: function() {
				uni.showToast({
					title: '图片保存成功～'
				});
			},
			fail: function(e) {},
			complete: function() {
				uni.hideLoading();
			}
		});
	},
	components: {
		tkiQrcode
	}
};
</script>
<style lang="less" scoped>
.code {
	& > .header_title {
		display: flex;
		align-items: center;
		height: 90rpx;
		padding: 0 30rpx;
		border-bottom: 1px solid #eee;

		& > .title {
			margin-left: 258rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #333;
		}
	}

	& > .code_detail {
		padding: 62rpx 55rpx;
		text-align: center;

		& > .friends {
			padding-bottom: 33rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #ff6600;
			line-height: 54px;
		}

		& > .create_code {
			width: 100%;
			height: 780rpx;
			padding-top: 78rpx;
			background: url(@/static/driver/顺风车-车主/bg_code.png) no-repeat center;

			& > .title_code {
				font-size: 32rpx;
				font-family: Adobe Heiti Std;
				font-weight: bold;
				color: #121922;
			}

			& > .generate_code {
				padding: 62rpx 143rpx 86rpx 142rpx;
			}

			& > .notice {
				font-size: 30rpx;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				color: #7c838d;
			}
		}
	}

	& > .save {
		height: 96rpx;
		line-height: 96rpx;
		margin: 0 30rpx;
		border-radius: 10rpx;
		text-align: center;
		font-size: 32rpx;
		color: #fff;
		font-weight: 500;
		background: #f60;
	}
}
</style>
