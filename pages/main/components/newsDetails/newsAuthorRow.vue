<template>
	<u-row>
		<view class="flex-row" style="display: flex;justify-content: space-between;padding: 16rpx;margin-bottom: 10px;">
			<u-col span="8">
				<view class="flex-row">
					<u-avatar fontSize="16" randomBgColor :src="details.src"></u-avatar>
					<view style="display: flex;flex-direction: column;padding-left: 16rpx;">
						<view class="flex-row" style="align-items: flex-start;">
							<u--text :text="details.author" bold size="14" lines="1"></u--text>
							<view style="width: 16rpx;"></view>
							<u-tag :text="details.articleFromName" size="mini"
								:type="details.articleFrom==='1'?'info':'warning'">
							</u-tag>
						</view>
						<u--text :text="details.creatTime" size="12" color="#999696"></u--text>
					</view>
				</view>
			</u-col>
			<u-col span="2">
				<u-button v-if="!followed_" type="warning" size="mini" @click="follow(true)">关注</u-button>
				<u-button v-if="followed_" type="success" size="mini" @click="follow(false)">已关注</u-button>
			</u-col>
		</view>
	</u-row>

</template>

<script>
	export default {
		props: ["details"],
		data() {
			return {
				followed_: false
			}
		},
		mounted() {
			this.followed_ = this.details.followed
		},
		methods: {
			follow(bool) {
				this.$set(this.details, "followed", bool)
				this.followed_ = bool
				// this.$forceUpdate()
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
