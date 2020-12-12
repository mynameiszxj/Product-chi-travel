<template>
	<view class="login">
		<view class="header">
			<text>欢迎登录品驰出行</text>
			<text>输入手机号，快捷登陆</text>
		</view>

		<view class="input-wrap">
			<view class="input-call">
				<input class="sl-input" v-model="mobile" @blur="regPhone" placeholder-class="font-color" type="number" minlength="11" maxlength="11" placeholder="请输入手机号" />
			</view>

			<view class="input-call" v-if="isShow">
				<input class="sl-input" v-model="userCode" type="text" @input="getValue" data-id="1" maxlength="6" placeholder-class="font-color" placeholder="请输入验证码" />
				<button @tap="getCode" :disabled="disabled" class="get-vcode">{{ codeBtn.codeText }}</button>
			</view>
			<view class="input-call" v-else>
				<input
					class="sl-input"
					:type="isText"
					@input="getValue"
					data-id="2"
					placeholder="输入登录密码"
					maxlength="16"
					placeholder-class="font-color"
					v-model="userPwd"
					style="border: 0; outline: none;"
				/>
				<view class="input-eye">
					<image :src="eyeUrl" mode="widthFix" @click="isPwd" />
					<text></text>
					<navigator url="forget" open-type="navigate" class="uni-navigator">忘记密码</navigator>
				</view>
			</view>
		</view>

		<view :class="[isLogin ? 'button-hover' : 'button-login']"><text @tap="login">立即登录</text></view>
		<!-- 	<view :class="[isLogin ? 'button-hover' : 'button-login']" @tap="submit" v-if="!isShow">立即登录</view> -->

		<view class="input-switch" :class="[isShow ? 'input-pwd' : 'input-code']" @click="loginSwitch">
			<text>{{ loginWay }}</text>
		</view>
		<!-- 微信登陆 -->
		<wechatLogin :methodLogin="methodLogin"></wechatLogin>
	</view>
</template>

<script>
import wechatLogin from '../../components/wechatLogin/wechatLogin.vue';
import { login, code } from '../../api/login.js';
export default {
	components: {
		wechatLogin
	},
	data() {
		return {
			mobile: '',
			userCode: '',
			userPwd: '',
			isLogin: false,
			disabled: false,
			isShow: true,
			get_captcha: '',
			isClick: false,
			isText: 'password',
			login_type: 1,
			eyeUrl: require('../../static/眼睛-close.png'),
			loginWay: '使用密码登录',
			methodLogin: '其他方式登录',
			//验证码按钮
			codeBtn: {
				codeTime: 60,
				codeText: '获取验证码',
				codeStatus: true
			},
			//验证规则
			rules: {
				userName: {
					rule: /\S/,
					msg: '账号不能为空'
				},
				mobile: {
					rule: /^1[3|4|5|7|8][0-9]{9}$/,
					msg: '手机号格式不正确'
				},
				userPwd: {
					rule: /^[0-9a-zA-Z]{6,16}$/,
					msg: '密码应该为6-16位'
				},
				userCode: {
					rule: /^[0-9]{6}$/,
					msg: '请输入6位数字验证码'
				}
			}
		};
	},
	methods: {
		//切换登录方式
		loginSwitch() {
			this.isShow = !this.isShow;
			if (!this.isShow) {
				this.loginWay = '使用验证码登录';
				this.methodLogin = '第三方登录';
			} else {
				this.loginWay = '使用密码登录';
				this.methodLogin = '其他方式登录';
			}
		},
		// 将获取的验证码动态添加到input
		getValue(event) {
			console.log(event);
			let that = this;
			let value = event.detail.value;
			this.login_type = event.currentTarget.dataset.id;
			console.log(this.login_type);
			let id = event.currentTarget.dataset.id;
			if (id == 1) {
				that.userCode = value;
			} else if (id == 2) {
				// 用户密码登陆
				that.userCode = value;
			}
		},

		// 验证手机号
		regPhone() {
			if (this.mobile === '') {
				uni.showToast({
					icon: 'none',
					title: '手机号不能为空'
				});
			}
		},
		// 是否显示密码为文本
		isPwd() {
			this.isClick = !this.isClick;
			if (!this.isClick) {
				this.isText = 'text';
				this.eyeUrl = require('../../static/眼睛.png');
			} else {
				this.isText = 'password';
				this.eyeUrl = require('../../static/眼睛-close.png');
			}
		},

		// 获取验证码
		getCode() {
			if (!this.validate('mobile')) return;
			this.disabled = true;
			this.codeBtn.timestatus = false;
			let timerId = setInterval(() => {
				let codetime = this.codeBtn.codeTime;
				codetime--;
				this.codeBtn.codeTime = codetime;
				this.codeBtn.codeText = codetime + 's';
				if (codetime < 1) {
					clearInterval(timerId);
					this.codeBtn.codeText = '重新获取';
					this.codeBtn.codeTime = 60;
					this.codeBtn.codeStatus = true;
				}
			}, 1000);
			// setTimeout(() => {
			// 	//隐藏登录状态
			// 	uni.hideLoading();
			// 	uni.navigateBack({
			// 		delta: 1
			// 	})
			// }, 2000)

			console.log('发送获取验证码的请求');
		},
		//判断验证是否符合要求
		validate(key) {
			let bool = true;
			if (!this.rules[key].rule.test(this[key])) {
				//提示信息
				uni.showToast({
					icon: 'none',
					title: this.rules[key].msg
				});
				//取反
				bool = false;
				return false;
			}
			return bool;
		},
		login() {
			console.log(this.login_type);
			// 判断登陆的类型调取不同的接口登陆
			if (this.login_type == '1') {
				let _that = this;
				// 手机号密码登陆
				if (!_that.validate('userNamePhone')) return;
				if (!_that.validate('userPwdPhone')) return;
				uni.request({
					url: '/api/user/login',
					data: {
						login_type: _that.login_type,
						mobile: _that.mobile,
						password: _that.userPwd
					},
					success: res => {
						console.log(res);
					}
				});
			}
		}
		//手机验证码登录
		// submitPhone() {

		// 	//向服务器发送登陆请求
		// 	uni.request({
		// 		url: '/api/user/login', //接口地址
		// 		data: {
		// 		        login_type: this.login_type,
		// 				mobile:this.mobile,

		// 		    },
		// 		method: 'POST',
		// 		success: res => {
		// 			console.log('之前的数据状态' + '账号：' + this.userNamePhone + '密码：' + this.userPwdPhone);
		// 			// let list = JSON(stringify(res.data));
		// 			// console.log('数据状态:' + list);

		// 			if (list == '[]') {
		// 				uni.showToast({
		// 					icon: 'none',
		// 					title: '用户名密码错误'
		// 				});
		// 				return;
		// 			}
		// 			uni.showToast({
		// 				icon: 'none',
		// 				title: '登陆成功'
		// 			});
		// 			uni.switchTab({
		// 				url: '../course/index'
		// 			});
		// 		},
		// 		fail: () => {
		// 			uni.showToast({
		// 				icon: 'none',
		// 				title: '网络异常，请稍后再试'
		// 			});
		// 		}
		// 	});
		// },

		//账号密码点击登录
		// submit() {
		// 	if (!this.validate('userName')) return;
		// 	if (!this.validate('userPwd')) return;
		// 	uni.showLoading({
		// 		title: '登录中...'
		// 	});
		// 	//向服务器发送登陆请求
		// 	setTimeout(() => {
		// 		//隐藏登录状态
		// 		uni.hideLoading();
		// 		uni.navigateBack({
		// 			delta: 1
		// 		});
		// 	}, 2000);
		// }
		// wechatLogin() {
		// 	uni.login({
		// 		provider: 'weixin',
		// 		success: function(loginRes) {
		// 			console.log(loginRes.authResult);
		// 			// 获取用户信息
		// 			uni.getUserInfo({
		// 				provider: 'weixin',
		// 				success: function(infoRes) {
		// 					console.log('用户昵称为：' + infoRes.userInfo.nickName);
		// 				}
		// 			});
		// 		}
		// 	});
		// }
	}
};
</script>

<style scoped lang="less">
.login {
	padding-top: 193rpx;
	.header {
		& > text {
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

	& > .input-wrap {
		padding: 81rpx 55rpx 54rpx;
		color: #333;

		& > .input-call {
			display: flex;
			justify-content: space-between;
			border-bottom: 2rpx solid #eee;
			padding-right: 3rpx;
			& > .sl-input {
				height: 118rpx;
				box-sizing: border-box;
				font-size: 32rpx;
				padding-top: 51rpx;
				padding-bottom: 36rpx;
				font-weight: 500;

				& > .font-color {
					color: #999;
				}
			}

			& > .input-eye {
				display: flex;
				align-items: center;
				height: 118rpx;
				& > image {
					width: 38rpx;
					height: 30rpx;
				}

				& > text {
					display: inline-block;
					margin: 0 14rpx;
					width: 2rpx;
					height: 40rpx;
					background: #eee;
				}
				& > .uni-navigator {
					line-height: 32rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: #333;
				}
			}

			& > .get-vcode {
				padding: 0;
				margin: 0;
				line-height: 1;
				padding-top: 55rpx;
				padding-right: 3rpx;
				background-color: #fff;
				font-size: 26rpx;
				font-weight: 500;
				color: #ff6600;

				&::after {
					border: 0;
				}
			}
		}
	}

	& > .button-login {
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

	& > .button-hover {
		background-color: #f60;
	}

	& > .input-switch {
		overflow: hidden;
		padding-top: 36rpx;
		padding-bottom: 130rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #ff6600;
		& > text {
			float: right;
		}
	}

	& > .input-pwd {
		margin-right: 90rpx;
	}

	& > .input-code {
		margin-right: 85rpx;
	}
}
</style>
