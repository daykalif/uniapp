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

		<!-- 医院列表 -->
		<view class="weui-cells hosp-list">
			<view class="weui-cell hosp-item weui-cell-access" v-for="(item,index) in hospitals" :key="item.id"
				:data-hid="item.id" @click="toHospitals">
				<!-- 图片 -->
				<view class="weui-cell__hd">
					<image :src="item.avatar?item.avatar_url:'../../static/resource/images/avatar.jpg'"
						mode="aspectFill" class="hosp-avatar"></image>
				</view>
				<!-- 医院信息 -->
				<view class="weui-cell__bd">
					<!-- 医院名称 -->
					<view>
						<text class="hosp-name">{{item.name}}</text>
					</view>
					<!-- 医院类型 -->
					<view class="hosp-line">
						<!-- 医院地位 -->
						<text class="hosp-rank">{{item.rank}}</text>
						<!-- 医院标签 -->
						<text class="hosp-label">{{item.label}}</text>
					</view>
					<!-- 医院介绍 -->
					<view class="hosp-line">
						<text class="hosp-intro">{{item.intro}}</text>
					</view>
				</view>
			</view>
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
	// 医院列表
	const hospitals = ref([])

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
				} = data.area;

				// 根据地区码获取该地区的医院信息（轮播图）
				app.globalData.utils.request({
					url: '/Index/index',
					data: {
						aid: id
					},
					success: (ress) => {
						bannerList.value = ress.data.slides // 轮播图
						nav2s.value = ress.data.nav2s // 两个导航
						navs.value = ress.data.navs // 多个导航
						hospitals.value = ress.data.hospitals // 医院列表
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
		jump(nav, 'nav2')
	}

	// 点击快捷入口（多个的）
	const onNavsTap = (e) => {
		// 获取当前点击的图片的数据
		const nav = toRaw(navs.value)[e.currentTarget.dataset.index]
		jump(nav, 'nav')
	}

	// 跳转到医院详情
	const toHospitals = (e) => {
		uni.navigateTo({
			url: '/pages/hospital/index?hid=' + e.currentTarget.dataset.hid
		})
	}
</script>

<style>
	/* banner */
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

	/* 快捷入口 */
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

	/* 医院列表 */
	.hosp-list {
		margin: 10rpx 0 0 0;
		background: none;
	}

	.hosp-list::before {
		display: none;
	}

	.hosp-list::after {
		display: none;
	}

	.hosp-item {
		-webkit-box-align: stretch;
		-webkit-align-items: stretch;
		align-items: stretch;
		padding: 20rpx;
		margin: 20rpx;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.04), 0 1px 6px 0 rgba(0, 0, 0, 0.04);
	}

	.hosp-item::before {
		display: none;
	}

	.hosp-item::after {
		display: none;
	}

	.hosp-name {
		font-weight: bold;
		font-size: 34rpx;
	}

	.hosp-avatar {
		display: block;
		width: 200rpx;
		height: 180rpx;
		border-radius: 10rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}

	.hosp-line {
		margin-top: 5rpx;
	}

	.hosp-line text {
		font-size: 26rpx;
	}

	.hosp-rank {
		font-weight: bold;
		color: #0bb585;
		margin-right: 15rpx;
	}

	.hosp-label {
		font-weight: bold;
		color: #0ca7ae;
		margin-right: 15rpx;
	}

	.hosp-intro {
		color: #999999;
	}
</style>