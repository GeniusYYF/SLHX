<template>
	<view>
		<view class="flex-row" style="margin-bottom: 16rpx;">
			<u--text :text="'评论 '+details.commentList.length" bold size="16"></u--text>
			<u--text :text="getSupportAndTransmit" size="12" color="#999696" align="right"></u--text>
		</view>

		<view v-for="(item,i) in list" :key="i" style="width: 100%;">
			<news-comment-item :item="item" :author="details.author" @replay="replay"></news-comment-item>
		</view>
	</view>
</template>

<script>
	import newsCommentItem from "./newsCommentItem.vue"
	export default {
		props: ["details"],
		components: {
			newsCommentItem
		},
		computed: {
			getSupportAndTransmit() {
				return `${this.details.supportNum} 赞 | ${this.details.transmitNum} 转发`
			}
		},
		data() {
			return {
				list: [],
				dict: {}
			}
		},
		mounted() {
			this.formatData(this.details.commentList)
		},
		methods: {
			formatData(list) {
				let dict = {}
				let res = []
				let twoLevelComments = []
				list.forEach(item => {
					if (item.pid) {
						twoLevelComments.push(item)
					} else {
						item.children = []
						dict[item.id] = item
					}
				})
				twoLevelComments.forEach(item => {
					dict[item.pid].children.push(item)
				})
				this.dict = dict
				for (let k in dict) {
					res.push(dict[k])
				}
				this.list = res
			},
			replay(item) {
				this.$emit("replay", this.dict[item.id])
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
