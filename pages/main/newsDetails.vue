<template>
	<view >
		<view style="padding: 24rpx;">
			<!-- 标题 -->
			<u-navbar :placeholder="true" autoBack />
			<!-- 文档标题 -->
			<u--text :text="details.title" bold size="20"></u--text>
			<!-- 作者栏 -->
			<news-author-row :details="details"></news-author-row>
			<!-- 数字和图片 -->
			<news-content :details="details"></news-content>
			<!-- 分割线 -->
			<u-line margin="20rpx 0" color="rgb(240,240,240)"></u-line>
			<!-- 评论区 -->
			<news-comment class="comment" :details="details" @replay="replay"></news-comment>
		</view>
		<!-- 悬浮评论页脚 -->
		<news-footer showIcon :commentNum="details.commentList.length" :supportNum="details.supportNum"
			:supported="details.supported" :collectioned="details.collectioned" @commentClick="scrollToComment">
		</news-footer>
		<!-- 评论详情 -->
		<news-comment-details ref="commentDetailsRef"></news-comment-details>
	</view>
</template>

<script>
	import newsAuthorRow from "./components/newsDetails/newsAuthorRow.vue"
	import newsContent from "./components/newsDetails/newsContent.vue"
	import newsComment from "./components/newsDetails/newsComment.vue"
	import newsFooter from "./components/newsDetails/newsFooter.vue"
	import newsCommentDetails from "./components/newsDetails/newsCommentDetails.vue"

	import data from "@/mock/data.js"

	export default {
		components: {
			newsAuthorRow,
			newsContent,
			newsComment,
			newsFooter,
			newsCommentDetails
		},
		// 在vue页面接受参数
		onLoad: function(option) {
			if (option.newsItem) {
				this.newsItem = JSON.parse(decodeURIComponent(option.newsItem));
			}
			this.details = data.newsDetails.newsDetails
			console.log(this.newsItem)
		},
		props: [],
		data: function() {
			return {
				details: {},
				newsItem: {},
			}
		},
		watch: {},
		created: function() {},
		mounted: function() {},
		methods: {
			replay(item) {
				this.$refs.commentDetailsRef.init(item)
			},
			scrollToComment() {
				uni.createSelectorQuery()
					.select(".wrapper") //对应外层节点
					.boundingClientRect((container) => {
						uni.createSelectorQuery()
							.select(".comment") //目标节点
							.boundingClientRect((target) => {
								uni.pageScrollTo({
									scrollTop: target.top - container.top, //滚动到实际距离是元素距离顶部的距离减去最外层盒子的滚动距离
								});
							})
							.exec();
					})
					.exec();
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
