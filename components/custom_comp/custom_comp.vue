<template>
	<view>
		navbar组件
		<view>组件的name属性：{{name}}</view>
		<view>组件的content属性：{{content}}</view>
		<slot></slot>
		<button @click="handleChange">修改</button>
	</view>
</template>

<script setup>
	import {
		defineProps,
		defineEmits
	} from 'vue';

	// defineProps(['name', 'content'])
	defineProps({
		name: String,
		content: {
			type: String,
			default: () => {
				return '默认值'
			}
		}
	});

	const emit = defineEmits(['changeData']);
	const handleChange = () => {
		emit('changeData', '修改后的数据');
	}
</script>

<style>

</style>