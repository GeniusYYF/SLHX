<template>
	<view style="height: 100%;">
		<scroll-view style="height: 100%;" scroll-y enable-back-to-top show-scrollbar refresher-enabled
			:refresher-triggered="triggered" @refresherrefresh="upper" @scrolltolower="lower"
			@refresherrestore="onRestore">
			<news-item v-for="(item,i) in list" :key="i" :item="item" @close="showPoup"></news-item>

			<u-loadmore :status="status" loading-text="努力加载中" loadmore-text="轻轻上拉" nomore-text="实在没有了"
				@loadmore="loadmore" />

			<!-- 弥补导航栏塌陷 -->
			<!-- <view style="height: 50px;"></view> -->
			<!-- 是否为iPhoneX留出底部安全距离 -->
			<!-- <u-safe-bottom></u-safe-bottom> -->
		</scroll-view>
		<u-modal :show="show" showCancelButton buttonReverse @confirm="sure" @cancel="close">
			<text>您对“<text style="color: #0273f1;">{{poupItem.title}}</text>”不感兴趣吗？</text>
		</u-modal>
	</view>
</template>

<script>
	import newsItem from "./newsItem.vue"

	import data from "@/mock/data.js"

	export default {
		components: {
			newsItem
		},
		props: [],
		data: function() {
			return {
				list: data.newsList.list, // 数据
				page: 1, // 数据页数
				status: 'loadmore', // 底部状态
				triggered: false, // 顶部刷新状态
				show: false, // 不感兴趣弹出框
				poupItem: {}, // 不感兴趣的项
			}
		},
		computed: {},
		watch: {},
		created: function() {},
		mounted: function() {
			this._freshing = false;
			this.triggered = true;
		},
		methods: {
			upper() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
					this.page = 1;
					this.list = data.newsList.list;
				}, 1000)
			},
			lower() {
				if (this.page >= 2) {
					this.status = 'nomore'
					return;
				}
				this.status = 'loading';
				this.page = ++this.page;
				setTimeout(() => {
					this.list = this.list.concat(this.list)
					this.status = 'loadmore'
				}, 2000)
			},
			// status更新后触发
			onRestore() {
				this.triggered = 'restore'; // 需要重置
			},
			showPoup(item) {
				this.poupItem = JSON.parse(JSON.stringify(item))
				if (this.poupItem.title.length > 16) {
					this.poupItem.title = this.poupItem.title.slice(0, 16) + "..."
				}
				this.show = true
			},
			close() {
				this.show = false
				// console.log('close');
			},
			sure() {
				this.show = false
				this.page = 1;
				data.newsList.list = data.newsList.list.filter(_ => _.id !== this.poupItem.id)
				this.list = data.newsList.list
				this.$u.toast('已取消该推荐')
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>
