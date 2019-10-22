<template>
	<view class = "frame">
		<h1 align="center">我的地块</h1>
		
		<view >
			<view class="plant" hover-class="uni-list-cell-hover" v-for="(item,index) in plantList" :key="index" @tap="getPlantDetail(item.id)">
				<view class="plant-image">
					<image :src="item.image"></image>
				</view>
				<text class="plant-name">{{item.name}}(编号：{{item.id}})</text>
				<progress-bar :percent="item.water" type="info" :showinfo="true" :striped="true" :animated="true" :format="percentFormatWater"></progress-bar>
				<progress-bar :percent="item.fertilizer" type="success" :showinfo="true" :striped="true" :animated="false" :format="percentFormatFerti"></progress-bar>
				<progress-bar :percent="item.pesticide" type="item.pesticide? defaultPstyle :dangerPstyle " :showinfo="true" :striped="true" :animated="false" :format="percentFormatPetsi"></progress-bar>
			</view>
		</view>
		
	</view>
</template>

<script>
	//1引入组件 uni-load-more.vue
	import uniLoadMore from '@/components/uni-load-more.vue';
	import {
		friendlyDate
	} from '@/common/util.js';
	var _self,
		page = 1,
		timer = null;
		
	//引入组件使用vue-Blu	
	import VueBlu from 'vue-blu'

	// 定义全局参数,控制数据加载
	
	
	export default {
		//注册组件
		components: { //2注册组件
			uniLoadMore,
			VueBlu
		},
		
		data() {
			return {
				defaultPstyle:"info",//默认进度条样式
				dangerPstyle:"danger",//危险进度条样式
				plantList: [],
			}
		},
		
		onLoad: function(e) {
			//console.log("接收id:" + JSON.stringify(e.iconId));
			this.storage_key =  e.iconId;
			_self = this;
			e = this.getplantList(e); // 修改1111111
			console.log(e);
			uni.setNavigationBarTitle({
				title: "我的领地"//"页面标题"//
			});
			//页面一加载时请求一次数据
			this.getplantList();
		},
		onPullDownRefresh: function(e) {
			//下拉刷新的时候请求一次数据
			this.getplantList();
		},
		
		
		methods: {
			
			percentFormatWater(val) {
				return `水份: ${val}%`;
			},
			percentFormatFerti(val) {
				return `肥料: ${val}%`;
			},
			percentFormatPetsi(val) {
				return `药品: ${val}%`;
			},
			
			getplantList(e) { //第一次回去数据
				page = 1;
				this.loadingType = 0;
				uni.showNavigationBarLoading();
				uni.request({
					url: this.$apiUrl + '/api/v0/plants/user?page_index=' + (this.refreshing ? 1 : page) +'&page_size=5',
					method: 'GET',
					success: function(res) {
						page++; //得到数据之后page+1
						const data = res.data.data.items.map((plant) => {
							return {
								id: plant.id,
								plant_id: plant.plant_id,
								active_flag: plant.active_flag,
								water: plant.water,
								created_at: friendlyDate(new Date(plant.created_at.replace(/\-/g, '/')).getTime()),
								fertilizer: plant.fertilizer,
								pesticide: plant.pesticide,
								price: plant.price,
								harvest_at: friendlyDate(new Date(plant.harvest_at.replace(/\-/g, '/')).getTime()),
								status: plant.status,
								image: plant.image,
								created_at: plant.created_at,
								name: plant.name,
								category: plant.category,
							};
						});
						_self.plantList = data;
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
					}
				});
			},
			
			getPlantDetail :function(e){
				console.log('loading detail',e)
			},
			
			
			
		}
	}
</script>

<style>
	.frame{
		margin-left: 5%;
		margin-right: 5%;
	}
	
	.plant{
		margin-bottom: 80px;
	}
	.plant-name {
	flex: 1;
	margin-top: 6upx;
	line-height: 40upx;
	font-size: 30upx;
	columns: #303030;
	}
	.plant-image{
		align-content: center;
	}
</style>
