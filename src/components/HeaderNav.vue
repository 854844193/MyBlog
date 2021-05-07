<template>
  <div class="header">
    <div class="leftLogo">
      <img alt="HongKuanglogo" src="../assets/images/lawyer.png" />
    </div>
    <div class="middleNav">
      <router-link
        class="navItem"
        v-for="(item, index) in navList"
        :key="index"
        :to="item.routerIndex"
        :class="{ active: activeIndex == index, hover: activeIndex == index }"
        >{{ item.name }}</router-link
      >
      <!-- <router-link class="navItem" to="">关于鸿旷</router-link>
        <router-link class="navItem" to="">业务范围</router-link>
        <router-link class="navItem" to="">律师团队</router-link>
        <router-link class="navItem" to="">案例展示</router-link>
        <router-link class="navItem" to="">法律知识</router-link>
        <router-link class="navItem" to="">联系我们</router-link> -->
    </div>
    <div class="rightZY">
      <span></span>
      <span>EN</span>
      <span class="slash">/</span>
      <span>中文</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"headerNav",
  data(){
    return{
      navList: [
        { name: "关于鸿旷", routerIndex: "/" },
        { name: "业务范围", routerIndex: "/business" },
        { name: "律师团队", routerIndex: "/#" },
        { name: "案例展示", routerIndex: "/#" },
        { name: "法律知识", routerIndex: "/#" },
        { name: "联系我们", routerIndex: "/#" },
      ],
    }
  }
};
</script>

<style  scoped>
.header {
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  display: flex;
  padding: 0.625rem 1.875rem;
  justify-content: space-between;
}
.leftLogo {
  width: 25%;
  height: 100%;
  display: flex;
}
.leftLogo img {
  height: 100%;
}
.middleNav {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.middleNav > .navItem {
  text-decoration: none;
  color: aliceblue;
}
.navItem:hover {
  font-weight: bold;
}
.navItem:active {
  font-size: 20px;
  font-weight: bold;
}
.rightZY {
  color: aliceblue;
  width: 25%;
  height: 100%;
  text-align: right;
  line-height: 3.75rem;
}
.rightZY .slash {
  display: inline-block;
  margin: 0 5px;
}
</style>