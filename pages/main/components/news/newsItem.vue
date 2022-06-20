<template>
	<view class="row" @click="enterNewsDetails">
		<image v-if="getImgsLength===1" class="one-img" :src="item.imgs[0]" />
		<view class="row-wrapper">
			<text class="title">{{item.title}}</text>

			<view v-if="getImgsLength>1" class="more-img">
				<image v-for="(img,i) in item.imgs" :key="i" class="more-img-item" :src="img" />
			</view>

			<view class="footer">
				<view class="remark-wrapper">
					<text class="top" v-if="item.top!=0">{{item.top!=0?'置顶':''}}</text>
					<image class="icon" :src="item.icon" />
					<text class="remark">{{getRemark}}</text>
				</view>
				<u-icon name="close" size="32rpx" color="#ccc8c8" @click="close(item)"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		props: ["item"],
		data: function() {
			return {}
		},
		computed: {
			getRemark() {
				return `${this.item.ref} 评论(${ this.item.commentNum }) ${ this.item.time }`
			},
			getImgsLength() {
				return this.item.imgs?.length || 0
			}
		},
		watch: {},
		created: function() {},
		mounted: function() {},
		methods: {
			close(item) {
				this.$emit("close", item)
			},
			enterNewsDetails() {
				uni.navigateTo({
					url: "/pages/main/newsDetails?newsItem=" + JSON.stringify(encodeURIComponent(this.item))
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		flex-direction: row;
		width: 750rpx;
		padding: 16rpx;
		background-color: white;
		// box-shadow: 0px 0px 2px rgb(238, 238, 238);
		border-bottom: 1px solid rgb(238, 238, 238);


		.one-img {
			height: 160rpx;
			width: 200rpx;
		}

		&-wrapper {
			flex: 1;
			justify-content: space-between;
			margin-left: 8rpx;

			.title {
				height: auto;
				font-size: 18px;
				margin-bottom: 8rpx;

				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				width: 100%;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.more-img {
				flex-direction: row;
				justify-content: flex-start;
				margin-bottom: 8rpx;

				overflow: hidden;

				&-item {
					height: 160rpx;
					width: 240rpx;
					padding-right: 10rpx;
				}
			}

			.footer {
				flex-direction: row;
				justify-content: space-between;

				.remark-wrapper {
					flex-direction: row;

					.icon {
						width: 16px;
						height: 16px;
						background-size: 100% 100% !important;
					}

					.remark {
						color: #999696;
						font-size: 12px;
					}
				}

				.top {
					font-size: 12px;
					color: $myp-color-error;
				}
			}
		}
	}
</style>
