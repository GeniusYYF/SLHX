<template>
	<view class="news" style="height: 100%;display: flex;">
		<u-navbar :placeholder="true" leftIconSize="0"></u-navbar>

		<view style="padding-left: 32rpx;padding-right: 32rpx;">
			<u-search style="flex: unset;" placeholder="日照香炉生紫烟" v-model="searchVal" :clearabled="true" shape="round"
				bgColor="#fff" borderColor="#f56c6c" searchIconColor="#f56c6c" :showAction="false"></u-search>
		</view>

		<u-sticky bgColor="#fff">
			<u-tabs :list="tabList" lineWidth="30" lineColor="#f56c6c" :activeStyle="{
			             color: '#f56c6c',
			             fontWeight: 'bold',
			         }" :inactiveStyle="{
			             color: '#606266',
			         }" itemStyle="height: 34px;padding-left:16rpx;padding-right:16rpx;" @click="click">
				<view slot="right" style="padding-right: 8rpx;" @tap="showSelectTypeDialog">
					<u-icon name="list" size="21" bold></u-icon>
				</view>
			</u-tabs>
		</u-sticky>

		<news-list class="auto-height" ref="newsList"></news-list>

		<select-type-dialog ref="selectTypeDialog"></select-type-dialog>
	</view>
</template>

<script>
	import {
		getNewsTabList
	} from '@/api/news.js'

	import data from "@/mock/data.js"

	import newsList from "./components/news/newsList.vue"
	import selectTypeDialog from "./components/news/selectType.vue"

	export default {
		components: {
			newsList,
			selectTypeDialog
		},
		computed: {},
		data() {
			return {
				searchVal: "",
				tabList: []
			}
		},
		mounted() {
			let list = []
			data.news.tabList.forEach(_ => {
				if (_?.badge?.isDot) {
					_.badge.isDot = !!_.badge.isDot
				}
				list.push(_)
			})
			this.tabList = list
			console.log(JSON.stringify(this.tabList));
			// this.getData()
		},
		methods: {
			getData() {
				getNewsTabList({}).then(res => {
					this.tabList = res.data.map(_ => {
						return {
							..._,
							isDot: !!_.isDot
						}
					})
				}).catch(e => {})

			},
			click(tab) {
				console.log(tab);
			},
			showSelectTypeDialog() {
				this.$refs.selectTypeDialog.show = true
			}

		}
	}
</script>


<style lang="scss" scoped>
	.tools {
		position: relative;

		// &-tabs .uni-scroll-view {
		// 	padding-right: 32px; // 按钮宽度
		// }

		&-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute !important;
			right: 0;
			height: 100%;
			width: 32px;
			background-color: white;
		}
	}
</style>
