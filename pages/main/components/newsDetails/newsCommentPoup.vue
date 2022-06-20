<template>
	<u-popup :show="show" mode="bottom"  closeOnClickOverlay @close="close">
		<scroll-view style="min-height: 50vh;max-height: 100vh;" scroll-y>
			<u-navbar :title="'回复'" :safeAreaInsetTop="false" :autoBack="false" :fixed="false" leftIcon="close" @leftClick="close">
			</u-navbar>

			<view style="padding: 16px;">
				<u-row gutter="16" align="bottom">
					<u-col span="10">
						<u--textarea v-model="replayText" :placeholder="placeholder" autoHeight count maxlength="200"
							focus @blur="blur">
						</u--textarea>
					</u-col>
					<u-col span="2">
						<u-button type="primary" text="回复"></u-button>
					</u-col>
				</u-row>
			</view>

		</scroll-view>
	</u-popup>
</template>

<script>
	export default {
		computed: {},
		data() {
			return {
				show: false,
				placeholder: "",
				replayText: "",
			}
		},
		methods: {
			init(item) {
				this.show = true
			},
			close() {
				this.show = false
			},
			blur(){
				this.$emit("blur")
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
