<template>
	<view>
		用户页面
		<my-component />

		<navbar name="组件属性传递" :content="data" @changeData="changeValueData">
			<view>我是插槽的内容</view>
		</navbar>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	// 定义响应式数据 data
	const data = ref('动态数组');

	const changeValueData = (val) => {
		data.value = val;
	}
</script>

<style>

</style>