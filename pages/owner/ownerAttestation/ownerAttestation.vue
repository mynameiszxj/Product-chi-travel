<template>
	<view class="owner_attestation">
		<uni-steps :options="[{title: '身份证'}, {title: '驾驶证'}, {title: '行驶证'}]" :active="0" active-color="#FF6600"></uni-steps>
		
		
		<attestation />
		
		</view>
</template>

<script>
import uniSteps from '@/components/uni-steps/uni-steps.vue';
import attestation from '@/pages/component/attestation/attestation';
export default {
	components: {
		attestation,
		uniSteps
	},
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
.owner_attestation {
}
</style>
