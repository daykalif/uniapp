<template>
	<view>
		<!-- 顶部导航栏 -->
		<navbar :isHome='true' />

		<!-- 头部公告栏 -->
		<view style="margin-top: 130rpx;">
			<view class="weui-cell" style="background: #fff9eb;">
				<view class="weui-cell__hd">
					<image src="/static/resource/images/ic_myapp.png"
						style="display: block;width:40rpx;height: 40rpx;margin-right: 14rpx;"></image>
				</view>
				<view class="weui-cell__bd">
					<text style="color:#be9719;font-size: 13px;">点击右上角“添加到我的小程序”，方便下次找到！</text>
				</view>
				<view class="weui-cell__ft">
					<image src="/static/resource/images/modal_closer.png"
						style="display: block;width:30rpx;height: 30rpx;"></image>
				</view>
			</view>
		</view>

		<!-- 轮播图 -->
		<view class="index-swiper" v-if="bannerList && bannerList.length > 0">
			<!-- 自动播放  衔接播放 播放时长 滑动时长 -->
			<swiper :indicator-dots="true" circular autoplay :interval="4000" :duration="1000">
				<swiper-item v-for="(item,index) in bannerList" :key="item.id">
					<image :src="item.pic_image_url" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 快捷入口（两个图片的） -->
		<view v-if="nav2s && nav2s.length>0" class="nav2-list">
			<block v-for="(item,index) in nav2s" :key="idnex">
				<view class="nav2-item" @click="onNav2sTap" :data-index="index">
					<view class="nav2-pic">
						<image :src="item.pic_image_url" mode="widthFix"></image>
					</view>
				</view>
			</block>
		</view>

		<!-- 快捷入口（多个的） -->
		<view v-if="navs && navs.length>0" class="nav-list">
			<block v-for="(item,index) in navs" :key="index">
				<view class="nav-item" @click="onNavsTap" :data-index="index">
					<view class="nav-pic">
						<image :src="item.pic_image_url"></image>
					</view>
					<view class="nav-text" :style="'color' + (item.tcolor ? item.tcolor : '')">{{item.title}}</view>
				</view>
			</block>
		</view>

	</view>
</template>

<script setup>
	import {
		onLoad,
	} from '@dcloudio/uni-app';

	import {
		ref,
		toRaw
	} from "vue";


	const navigatorTo = () => {
		uni.navigateTo({
			url: '/pages/search/index',
		});
	}

	const app = getApp() // 获取uniapp实例
	const bannerList = ref([]) // 轮播图
	const nav2s = ref([]) // 2个导航
	const navs = ref([]) // 多个导航

	onLoad(() => {
		// 调用用户信息
		app.globalData.utils.getUserInfo();

		// 先获取地区码
		app.globalData.utils.request({
			url: '/app/init',
			success: ({
				data
			}) => {
				const {
					id
				} = data.data.area;

				// 根据地区码获取该地区的医院信息（轮播图）
				app.globalData.utils.request({
					url: '/Index/index',
					data: {
						aid: id
					},
					success: (ress) => {
						bannerList.value = ress.data.data.slides // 轮播图
						nav2s.value = ress.data.data.nav2s // 两个导航
						navs.value = ress.data.data.navs // 多个导航
						console.log(bannerList.value, 'ress');
					}
				})
			},

		})
	});

	// 公共部分
	const jump = (nav, type) => {
		// 判断是否为内部链接
		if (nav.stype == 1) {
			uni.navigateTo({
				url: nav.stype_link
			})
		}
	}

	// 点击快捷入口（两个图片的）
	const onNav2sTap = (e) => {
		// 获取当前点击的图片的数据
		const nav = toRaw(nav2s.value)[e.currentTarget.dataset.index]
		console.log(nav);
		jump(nav, 'nav2')
	}

	// 点击快捷入口（多个的）
	const onNavsTap = (e) => {
		// 获取当前点击的图片的数据
		const nav = toRaw(navs.value)[e.currentTarget.dataset.index]
		jump(nav, 'nav')
	}
</script>

<style>
	.index-swiper {
		overflow: hidden;
		margin: 20rpx 20rpx 0;
	}

	.index-swiper swiper {
		overflow: hidden;
		height: 320rpx;
		border-radius: 10rpx;
	}

	.index-swiper swiper-item image {
		width: 100%;
		height: 100%;
	}

	.nav2-list {
		margin: 10rpx 20rpx 0 20rpx;
	}

	.nav2-list::after {
		content: '';
		display: block;
		height: 0;
		line-height: 0;
		clear: both;
		visibility: hidden;
	}

	.nav2-item {
		float: left;
		margin-top: 20rpx;
		width: 50%;
		text-align: center;
		box-sizing: border-box;
		padding: 0 5rpx;
	}

	.nav2-pic {
		width: 100%;
	}

	.nav2-pic image {
		display: block;
		width: 100%;
	}

	.nav-list::after {
		content: '';
		display: block;
		height: 0;
		line-height: 0;
		clear: both;
		visibility: hidden;
	}

	.nav-item {
		float: left;
		margin-top: 20rpx;
		width: 20%;
		text-align: center;
		padding: 10rpx 0;
	}

	.nav-pic image {
		display: block;
		margin: 0 auto;
		width: 110rpx;
		height: 110rpx;
	}

	.nav-text {
		font-size: 24rpx;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
	}
</style>