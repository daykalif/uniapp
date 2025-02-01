<template>
	<view class="nav">
		<!-- 状态栏 -->
		<view :style="'height:' + status + 'rpx;' + containerStyle"></view>

		<!-- 内容 -->
		<view class="navbar" :style="'height:' + navHeight + 'rpx;' + containerStyle"></view>
	</view>
</template>

<script setup>
	import {
		ref,
		onBeforeMount,
		defineProps
	} from 'vue';

	const props = defineProps({
		background: {
			type: String,
			default: 'rgba(255,255,255,1)'
		},
		color: {
			type: String,
			default: 'rgba(0,0,0,1)'
		},
		fontSize: {
			type: Number,
			default: 32
		},
		iconWidth: {
			type: Number,
			default: 116
		},
		iconHeight: {
			type: Number,
			default: 38
		}
	});

	// 响应式变量
	const status = ref(0);

	// 内容高度
	const navHeight = ref(0);

	// 背景颜色
	const containerStyle = ref('');

	// 字体样式
	const textStyle = ref('');

	// 图标样式
	const iconStyle = ref('');

	// 计算状态栏高度
	const setNavSize = () => {
		const {
			system,
			statusBarHeight
		} = uni.getSystemInfoSync();

		status.value = statusBarHeight * 2;

		const isIos = system.indexOf('ios') > -1;
		if (!isIos) {
			navHeight.value = 96;
		} else {
			navHeight.value = 88;
		}
	}

	// 样式设置
	const setStyle = () => {
		containerStyle.value = ['background:' + props.background].join(';')
		textStyle.value = ['color:' + props.color, 'font-size:' + props.fontSize + 'rpx'].join(';')
		iconStyle.value = ['width:' + props.iconWidth + 'rpx', 'height:' + props.iconHeight + 'rpx'].join(';')
	}

	// 页面渲染前执行
	onBeforeMount(() => {
		setNavSize();
		setStyle();
	});
</script>

<style>
	.nav {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2;
	}
</style>