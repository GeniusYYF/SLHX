<template>
	<view>
		<view v-for="item in details.data">
			<u--text v-if="item.type==='text'" :text="item.value" size="16" block margin="16rpx 0" wordWrap="anywhere">
			</u--text>
			<u--image v-if="item.type==='image'" :showLoading="true" :src="item.value" width="100%"></u--image>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["details"],
		computed: {
			getSupportAndTransmit() {
				return `${this.details.supportNum} 赞 | ${this.details.transmitNum} 转发`
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
