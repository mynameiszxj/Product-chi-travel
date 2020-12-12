<template>
	<view class="content">
		<view class="header">
			<text>欢迎登录品驰出行</text>
			<text>输入手机号，快捷登陆</text>
		</view>
		<view class="list">
			<view class="list-call"><input class="sl-input" type="number" v-model="phone" maxlength="11" placeholder="请输入手机号" /></view>
			<view class="list-call">
				<input class="sl-input" type="number" v-model="code" maxlength="6" placeholder="请输入验证码" />
				<view class="verify" :class="{ verify: second > 0 }" @tap="getcode">{{ verification }}</view>
			</view>
			<view class="list-call">
				<input class="sl-input" type="text" v-model="password" maxlength="32" placeholder="请输入新登陆密码" :password="!showPassword" />
				<!-- <image class="img" :src="showPassword ? '/static/shilu-login/op.png' : '/static/shilu-login/cl.png'" @tap="display"></image> -->
			</view>
			<view class="list-call">
				<input class="sl-input" type="text" v-model="password" maxlength="32" placeholder="确认登陆密码" :password="!showPassword" />
				<!-- 				<image class="img" :src="showPassword ? '/static/shilu-login/op.png' : '/static/shilu-login/cl.png'" @tap="display"></image>
 -->
			</view>
		</view>
		<view class="button-login" hover-class="button-hover" @tap="bindLogin()"><text>立即登陆</text></view>

		<view class="input-code">
			<navigator url="login" class="navigator">使用验证码登陆</navigator>
		</view>
		<!-- 微信登陆 -->
		<wechatLogin />
	</view>
</template>

<script>
import wechatLogin from "../../components/wechatLogin/wechatLogin.vue"
var _this, js;
export default {
	components:{
		wechatLogin
	},
	data() {
		return {
			phone: '',
			second: 0,
			code: '',
			showPassword: false,
			password: ''
		};
	},
	onLoad() {
		_this = this;
	},
	computed: {
		verification() {
			if (this.second == 0) {
				return '获取验证码';
			} else {
				if (this.second < 10) {
					return '重新获取0' + this.second;
				} else {
					return '重新获取' + this.second +'s';
				}
			}
		}
	},
	onUnload() {
		this.clear();
	},
	methods: {
		display() {
			this.showPassword = !this.showPassword;
		},
		clear() {
			clearInterval(js);
			js = null;
			this.second = 0;
		},
		getcode() {
			if (this.phone.length != 11) {
				uni.showToast({
					icon: 'none',
					title: '手机号不正确'
				});
				return;
			}
			if (this.second > 0) {
				return;
			}
			_this.second = 60;
			js = setInterval(function() {
				_this.second--;
				if (_this.second == 0) {
					_this.clear();
				}
			}, 1000);
			uni.request({
				url: 'http://***/getcode.html', //仅为示例，并非真实接口地址。
				data: {
					phone: this.phone,
					type: 'forget'
				},
				method: 'POST',
				dataType: 'json',
				success: res => {
					if (res.data.code != 200) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
						_this.second = 0;
					} else {
						uni.showToast({
							title: res.data.msg
						});
						_this.second = 60;
						js = setInterval(function() {
							_this.second--;
							if (_this.second == 0) {
								_this.clear();
							}
						}, 1000);
					}
				},
				fail() {
					this.clear();
				}
			});
		},
		bindLogin() {
			if (this.phone.length != 11) {
				uni.showToast({
					icon: 'none',
					title: '手机号不正确'
				});
				return;
			}
			if (this.password.length < 6) {
				uni.showToast({
					icon: 'none',
					title: '密码不正确'
				});
				return;
			}
			if (this.code.length != 4) {
				uni.showToast({
					icon: 'none',
					title: '验证码不正确'
				});
				return;
			}
			uni.request({
				url: 'http://***/forget.html',
				data: {
					phone: this.phone,
					password: this.password,
					code: this.code
				},
				method: 'POST',
				dataType: 'json',
				success: res => {
					if (res.data.code != 200) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					} else {
						uni.showToast({
							title: res.data.msg
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 1500);
					}
				}
			});
		}
	}
};
</script>

<style scoped lang="less">
	/deep/.uni-page-head{
		.uni-page-head-hd {
			.uni-page-head-btn{
				.uni-btn-icon{
					font-size: 32rpx;
					color: #000;
				}
			}
		}
	}
.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 53rpx;
	> .header {
		> text {
			display: block;
			line-height: 1;

			&:first-child {
				margin-left: 56rpx;
				padding-bottom: 39rpx;
				font-size: 42rpx;
				font-weight: bold;
				color: #000;
			}

			&:last-child {
				margin-left: 54rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #999;
			}
		}
	}
	> .list {
		padding: 30rpx 55rpx 54rpx;
		color: #333;
		> .list-call {
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #eee;
			padding-right: 3rpx;
			> .sl-input {
				height: 118rpx;
				box-sizing: border-box;
				font-size: 32rpx;
				padding-top: 51rpx;
				padding-bottom: 36rpx;
				font-weight: 500;
				&::-ms-input-placeholder {
					color: #999;
				}
			}
			>.verify{
				padding: 0;
				margin: 0;
				line-height: 1;
				padding-top: 55rpx;
				padding-right: 3rpx;
				background-color: #fff;
				font-size: 26rpx;
				font-weight: 500;
				color: #f60;
			}
		}
	}
	> .button-login {
		height: 90rpx;
		margin: 0 50rpx;
		line-height: 90rpx;
		font-size: 36rpx;
		font-weight: 500;
		color: #fff;
		text-align: center;
		background: #dfdfdf;
		box-shadow: 0rpx 5rpx 20rpx 0rpx rgba(223, 223, 223, 0.5);
		border-radius: 45rpx;
	}
	> .button-hover {
		background-color: #f60;
	}
	> .input-code {
		overflow: hidden;
		padding: 30rpx 74rpx 64rpx 0;
		font-size: 26rpx;
		font-weight: 500;
		color: #f60;
		> .navigator {
			float: right;		
		}
	}
}
</style>
