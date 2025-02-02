<template>
	<view class="content">
		测试页面：
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<view v-for="item in list" :key="item.name">
			<text>{{item.name}}</text>
			<text>{{item.num}}</text>
		</view>

		<button @click="handleClick">点我</button>

		<text>总共购买的水果数量：{{totalNum}}</text>

		<h1 />

		<my-component />

		<custom_comp name="组件属性传递" :content="data" @changeData="changeValueData">
			<view>我是插槽的内容2</view>
		</custom_comp>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		computed
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';

	// 定义响应式数据 data
	const data = ref('动态数组');
	const title = ref('Hello');
	const list = reactive([{
			name: 'apple',
			num: 1,
		},
		{
			name: 'banana',
			num: 2,
		}
	]);

	onLoad(() => {
		console.log('onLoad生命周期');
	});

	const handleClick = () => {
		list.forEach(item => {
			item.num++;
		});
	}

	// 计算水果总数
	const totalNum = computed(() => {
		return list.reduce((total, cur) => total + cur.num, 0);
	});

	const changeValueData = (val) => {
		data.value = val;
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>