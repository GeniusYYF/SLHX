<template>
	<view v-if="show" class="select-type">
		<scroll-view style="height: calc(100% - 56px);flex: 1;" scroll-y enable-back-to-top show-scrollbar>
			<u-navbar title="选择类型" :placeholder="true" leftIconSize="0"></u-navbar>
			<view class="module">
				<text class="title">当前选择：</text>
				<view class="tag-wrapper">
					<view v-if="item.checked" v-for="(item, i) in selectList" :key="i" style="margin: 8rpx;">
						<u-tag :text="item.label" :name="i" plainFill plain="" size="large" @click="unselect(item)">
						</u-tag>
					</view>
				</view>
				<u-empty v-if="getSelectVisible" mode="data" text="暂无当前选择" height="200rpx"></u-empty>
			</view>
			<u-line margin="20rpx 0"></u-line>
			<view class="module">
				<text class="title">系统推荐：</text>
				<view class="tag-wrapper">
					<view v-if="item.checked" v-for="(item, i) in unselectList" :key="i" style="margin: 8rpx;">
						<u-tag :text="item.label" :name="i" plain="" size="large" @click="select(item)">
						</u-tag>
					</view>
				</view>
				<u-empty v-if="getUnselectVisible" mode="data" text="暂无系统推荐" height="200rpx"></u-empty>
			</view>
		</scroll-view>
		<view class="footer">
			<u-button type="primary" text="确定" @click="sure"></u-button>
			<view class="btn-space"></view>
			<u-button text="取消" @click="close"></u-button>
		</view>
	</view>
</template>

<script>
	import newsItem from "./newsItem.vue"
	
	import data from "@/mock/data.js"
	
	export default {
		data: function() {
			return {
				show: false,
				selectList: data.news.selectList,
				unselectList: data.news.unselectList,
			}
		},
		computed: {
			getSelectVisible() {
				return this.selectList.filter(_ => !_.checked).length === this.selectList.length
			},
			getUnselectVisible() {
				return this.unselectList.filter(_ => !_.checked).length === this.unselectList.length
			},
		},
		watch: {},
		created: function() {},
		mounted: function() {

		},
		methods: {
			close() {
				this.show = false
			},
			unselect(item) {
				item.checked = false
				for (let l of this.unselectList) {
					if (l.id === item.id) {
						l.checked = true
					}
				}
			},
			select(item) {
				item.checked = false
				for (let l of this.selectList) {
					if (l.id === item.id) {
						l.checked = true
					}
				}
			},
			sure() {
				this.show = false
			}
		},
	}
</script>

<style lang="scss" scoped>
	.select-type {
		position: fixed;
		justify-content: space-between;
		z-index: 2022;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: #fff;
		padding: 32rpx;
	}

	.module {
		min-height: 25vh;

		.title {
			margin-bottom: 16rpx;
		}
	}

	.tag-wrapper {
		flex-direction: row;
		flex-wrap: wrap;
	}

	.footer {
		flex-direction: row;
		flex: unset;
		padding-bottom: 16rpx;
		padding-top: 16rpx;
	}
</style>
