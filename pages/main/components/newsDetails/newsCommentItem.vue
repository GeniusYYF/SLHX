<template>
	<view class="flex-row" style="padding: 16rpx 0;">
		<u-avatar fontSize="16" randomBgColor size="32" :src="item.src"></u-avatar>
		<view style="display: flex;flex-direction: column;padding-left: 16rpx;width: 0;flex-grow: 1;">
			<u-row>
				<view class="flex-row" style="justify-content: space-between;">
					<u-col span="6">
						<view class="flex-row" style="align-items: flex-start;">
							<u--text :text="item.nickname" bold size="14" lines="1"></u--text>
							<u-tag v-if="item.nickname===author" style="margin-left: 16rpx;" text="作者" size="mini"
								type="warning"></u-tag>
						</view>
					</u-col>
					<u-col span="3">
						<view class="flex-row">
							<u--text v-if="!supported_" text="赞" size="13" suffixIcon="thumb-up"
								@click="supported_=!supported_"></u--text>
							<u--text v-if="supported_" text="赞" size="13" suffixIcon="thumb-up-fill"
								@click="supported_=!supported_"></u--text>
							<u--text v-if="!stamped_" text="踩" size="13" suffixIcon="thumb-down"
								@click="stamped_=!stamped_"></u--text>
							<u--text v-if="stamped_" text="踩" size="13" suffixIcon="thumb-down-fill"
								@click="stamped_=!stamped_"></u--text>
						</view>
					</u-col>
				</view>
			</u-row>

			<u--text wordWrap="anywhere" block :text="item.text" :lines="4" @click="replay(item)"></u--text>

			<view class="flex-row">
				<view v-if="!isDetails" style="flex-shrink: 1;margin-top: 16rpx;margin-right: 16rpx;">
					<u-button type="info" shape="circle" size="small" :text="'回复 '+item.children.length"
						@click="replay(item)"></u-button>
				</view>
				<view v-if="isDetails&&isDetailsChildren" style="flex-shrink: 1;margin-top: 16rpx;margin-right: 16rpx;">
					<u-button type="info" shape="circle" size="small" text="回复" @click="replayChildren(item)">
					</u-button>
				</view>
				<view style="display: flex;justify-content: center;margin-top: 16rpx;width: 100%;">
					<u--text :text="item.creatTime" block size="12" color="#999696"></u--text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["item", "author", "isDetails", "isDetailsChildren"],
		data() {
			return {
				supported_: false,
				stamped_: false,
			}
		},
		mounted() {
			this.supported_ = this.item.supported
			this.stamped_ = this.item.stamped
		},
		methods: {
			replay(item) {
				this.$emit("replay", item)
			},
			replayChildren(item) {
				this.$emit("replayChildren", item)
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
