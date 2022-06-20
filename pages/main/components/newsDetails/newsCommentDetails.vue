<template>
	<u-popup :show="show" mode="bottom" safeAreaInsetTop closeOnClickOverlay @close="close">
		<scroll-view style="height: 100vh;" scroll-y >
			<u-navbar :title="commentNum+'条回复'" :fixed="true" :placeholder="true" :autoBack="false" leftIcon="close"
				@leftClick="close">
			</u-navbar>

			<view  style="padding: 24rpx;">
				<news-comment-item :item="item" isDetails></news-comment-item>

				<!-- 分割线 -->
				<u-line margin="20rpx 0" color="rgb(240,240,240)"></u-line>

				<u--text text="全部回复" bold size="16"></u--text>

				<view v-for="(c,i) in item.children" :key="i">
					<news-comment-item :item="c" isDetails isDetailsChildren @replayChildren="replayChildren">
					</news-comment-item>
				</view>

				<u-empty :show="commentNum===0" mode="data" icon="/static/data-empty.png"></u-empty>
			</view>

			<news-footer ref="newsFooter" :placeholder="placeholder" @blur="blur"></news-footer>
		</scroll-view>
	</u-popup>
</template>

<script>
	import newsCommentItem from "./newsCommentItem.vue"
	import newsFooter from "./newsFooter.vue"

	export default {
		components: {
			newsCommentItem,
			newsFooter
		},
		computed: {},
		data() {
			return {
				show: false,
				item: {
					children: []
				},
				placeholder: "",
				// 当前回复的消息项
				nickname: "",
				commentNum: 0,
				// replaying: false, // 是否点击回复
				// replayText: "", // 回复内容
			}
		},
		methods: {
			init(item) {
				console.log(JSON.stringify(item))
				this.item = item
				this.nickname = item.nickname
				this.placeholder = "回复：" + item.nickname
				this.commentNum = item.children.length
				this.show = true
			},
			close() {
				this.show = false
			},
			replayChildren(item) {
				this.placeholder = "回复：" + item.nickname
				this.$refs.newsFooter.focus()
			},
			blur() {
				this.placeholder = "回复：" + this.item.nickname
			},
		}
	}
</script>

<style lang="scss" scoped>
</style>
