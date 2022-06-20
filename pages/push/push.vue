<template>
	<view style="padding: 32rpx;">
		<u-navbar :placeholder="true" autoBack></u-navbar>

		<view style="width: 100%; margin-bottom: 16rpx;">
			<u--textarea v-model="text" height="500rpx" focus maxlength="200" placeholder="请输入内容" count>
			</u--textarea>
		</view>

		<u-upload accept="image" :fileList="fileList" :previewFullImage="true" name="1" multiple :maxCount="10"
			:maxSize="maxSize" @afterRead="afterRead" @delete="deletePic" @oversize="oversize">
		</u-upload>

		<u-button type="warning" @click="push">发布</u-button>
		<view style="height: 16rpx;"></view>
		<u-button type="info" @click="push">暂存</u-button>

		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '统计字数',
				fileList: [],
				maxSize: 1024 * 100,
			}
		},
		methods: {
			// 删除图片 index，file，name
			deletePic(e) {
				this.fileList.splice(e.index, 1)
			},
			// 新增图片 file, lists, name
			async afterRead(e) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(e.file)
				console.log(lists);
				let fileListLen = this.fileList.length
				lists.map((item) => {
					this.fileList.push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					console.log(result);
					let item = this.fileList[fileListLen]
					this.fileList.splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://101.35.125.245/uniapp/slhx/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						},
						fail: (res) => {
							console.log(res)
						},
						complete: (res) => {
							console.log(res)
						}
					});
				})
			},
			// 超出尺寸 file, lists, name
			oversize(e) {
				let fileName = e.file[0]?.name || "文件"

				this.$refs.uToast.show({
					type: 'error',
					icon: false,
					title: '失败',
					message: `${fileName}超出最大限度（${this.maxSize/1024}KB）`,
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/error.png'
				})
			},
			push() {
				this.$refs.uToast.show({
					type: 'success',
					title: '提示',
					message: "发布成功！",
					iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/success.png'
				})
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/main/index"
					})
				}, 2000)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
