<template>
  <flexbox>
    <flexbox-item :span="3">
      <div>
        <scroller lock-x :scrollbar-y=false height="-94">
         <div>
           <checker :radio-required="true" v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
             <checker-item v-for="item  in 10" :key="item.id" :value="item"><div style="margin-left: 10px">{{item}}</div></checker-item>
           </checker>
         </div>
        </scroller>
      </div>
    </flexbox-item>
    <flexbox-item>

    </flexbox-item>
  </flexbox>

</template>

<script>
    export default {
        name: "vod",
        data(){
           return{
               demo1:1
           }
        }
    }
</script>

<style scoped>
  .demo1-item-selected {
    color: #FF6F00 ;
  }
  .vux-checker-item{
    display: block!important;
    height: 34px!important;
    line-height: 34px;
  }
  .vux-flexbox {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    align-items: start;
  }

</style>

<style>
  .weui-cells:before{
    border-top: 0px!important;
  }

  .weui-cells__title{
    padding-left: 0px!important;
  }

  .weui-cells:after{
    border-bottom: 0px!important;
  }
  ._v-container{
    position: relative!important;
  }
</style>
