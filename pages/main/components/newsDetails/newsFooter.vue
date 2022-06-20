<template>
	<view>
		<view
			style="position: fixed;z-index: 1;bottom: 0;width: 100%;padding: 8px 0;border-top: 1px solid rgb(240, 240, 240);background-color: #fff;">
			<u-row>
				<view class="flex-row" style="flex-shrink: 0;flex-grow: 0;flex-basis: auto;">
					<u-col :span="showIcon?6:12">
						<view style="padding: 0 16px;">
							<view class="input-btn" @click="focus">
								<text class="text">{{placeholder||defaultPlaceholder}}</text>
							</view>
							<!-- <u--input :placeholder="placeholder||defaultPlaceholder" @focus="focus">
							</u--input> -->
						</view>
					</u-col>
					<u-col v-if="showIcon" :span="5">
						<view class="flex-row" style="justify-content: space-between;height: 100%;">
							<view style="position: relative;display: flex;justify-content: center;"
								@click="commentClick">
								<u-icon name="chat" size="28"> </u-icon>
								<view style="position: absolute;top: 0;right: -50%;">
									<u-badge type="error" max="99" :value="commentNum"></u-badge>
								</view>
							</view>

							<view style="position: relative;display: flex;justify-content: center;">
								<u-icon v-if="supported_" name="thumb-up-fill" size="28" color="#f9ae3d"
									@click="supported_=!supported_"></u-icon>
								<u-icon v-if="!supported_" name="thumb-up" size="28" @click="supported_=!supported_">
								</u-icon>
								<view style="position: absolute;top: 0;right: -50%;">
									<u-badge type="error" max="99" :value="supportNum"></u-badge>
								</view>
							</view>

							<u-icon v-if="collectioned_" name="star-fill" size="28" color="#f9ae3d"
								@click="collectioned_=!collectioned_"></u-icon>
							<u-icon v-if="!collectioned_" name="star" size="28" @click="collectioned_=!collectioned_">
							</u-icon>

							<u-icon name="share-square" size="28"></u-icon>
						</view>
					</u-col>
				</view>
			</u-row>

			<!-- 是否为iPhoneX留出底部安全距离 -->
			<u-safe-bottom></u-safe-bottom>
		</view>

		<view style="height: 54px;"></view>
		<u-safe-bottom></u-safe-bottom>
		<comment-poup ref="commentPoup" @blur="blur"></comment-poup>
	</view>
</template>

<script>
	import commentPoup from "./newsCommentPoup.vue"
	export default {
		props: ["showIcon", "placeholder", "commentNum", "supportNum", "supported", "collectioned"],
		components: {
			commentPoup
		},
		computed: {},
		data() {
			return {
				defaultPlaceholder: "评论...",
				supported_: false,
				collectioned_: false,
			}
		},
		mounted() {
			this.supported_ = this.supported
			this.collectioned_ = this.collectioned
		},
		methods: {
			focus() {
				this.$refs.commentPoup.init()
			},
			blur() {
				this.$emit("blur")
			},
			commentClick() {
				this.$emit("commentClick")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-btn {
		border-radius: 4px;
		padding: 6px 12px;
		border-width: 0.5px !important;
		border-color: #dadbde !important;
		border-style: solid;

		.text {
			font-size: 15px;
			height: 24px;
			line-height: 26px;
			text-align: left;
			color: rgb(192, 196, 204);
		}
	}
</style>
