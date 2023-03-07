<template>
	<div class="index_home">
		<Header></Header>
		<div class="aa">
			{{ $store.state.count }}
		</div>
		
		<el-button type="error" @click="add"> 111111111</el-button>
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
	name: "Home",
	components: {
		Header
	},
	data() {
		return {
			
		};
	},
	mounted() {
		// 检测浏览器窗口大小变化 用于地图自适应
		// const _this = this;
		// this.$erd['listenTo'](_this.$refs.map, () => {
		// 	_this.$nextTick(() => {
		// 		this.map.updateSize()
		// 	});
		// });
	},
	beforeDestroy() {},
	destroyed() {},
	methods: {
		add() {
			this.$store.commit('add')
		}
	},
};
</script>
<style scoped lang="less">
.index_home{
	width: 1920px;
  height: 1080px;
	.aa{
		width: 100px;
		height: 50px;
		line-height: 25px;
	}
}
</style>
