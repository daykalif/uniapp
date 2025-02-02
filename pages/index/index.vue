<template>
	<view class="content">
		<navbar :isHome='true' />
		<button style="margin-top: 140rpx;" @click="navigatorTo">跳转到搜索页</button>
	</view>
</template>

<script setup>
	const navigatorTo = () => {
		uni.navigateTo({
			url: '/pages/search/index',
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>