<template>
	<view class="real_name_attestation">
		<attestation />
		<navigator url="/pages/owner/realName/fail" class="submit">提交认证</navigator>
		<view class="privacy">
			点击提交认证 即表示已阅读并同意哒哒出行
			<text style="color: #F00;">《隐私条款》</text>
		</view>
	</view>
</template>

<script>
	import attestation from "@/pages/component/attestation/attestation"

	export default {
		components: {
			attestation
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.real_name_attestation {
		.submit {
			height: 90rpx;
			margin: 0 30rpx;
			margin-top: 95rpx;
			line-height: 90rpx;
			background: #f60;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #fff;
			text-align: center;
		}

		.privacy {
			padding: 27rpx 0 0 31rpx;
			font-size: 22rpx;
			font-weight: 500;
			color: #333;
		}
	}
</style>
