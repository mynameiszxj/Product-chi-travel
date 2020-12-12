<template>
	<view>
		<select-city :hotCitys="hotCitys" v-model="locationValue" :locationValue="locationValue" @on-select="selectValue" />
	</view>
</template>

<script>
	import selectCity from '@/components/select-city/select-city.vue'

	export default {
		components: {
			selectCity
		},
		data() {
			return {
				hotCitys: ['杭州', '天津', '北京', '上海', '深圳', '广州', '成都', '重庆', '厦门'],
				locationValue: '正在定位...',
			}
		},
		methods: {
			selectValue(city) {
				console.log(city)
				this.locationValue = city
				uni.showToast({
					title: city,
					icon: 'none'
				})
			}
		}
	}
</script>

<style>

</style>
