<template>
  <flexbox>
    <flexbox-item :span="3">
      <div>
        <scroller ref="s1" lock-x :scrollbar-y=false height="-97">
         <div>
           <checker :radio-required="true"  @on-change="selectType" v-model="type" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
             <checker-item v-for="item  in list" :key="item.id"  :value="item.id"><div style="margin-left: 10px">{{item.name}}</div></checker-item>
           </checker>
         </div>
        </scroller>
      </div>
    </flexbox-item>
    <flexbox-item>
      <div>
        <scroller ref="s2" lock-x :scrollbar-y=false height="-97">
          <div>
            <group v-for="item in list" :title="item.name" :key="item.id" :ref="'type_'+item.id">
              <flexbox :gutter="0" wrap="wrap" >
                <flexbox-item v-for="live in item.lives" :key="live.id":span="1/3"><div><img :src="live.icon"/></div></flexbox-item>
              </flexbox>
            </group>
          </div>
        </scroller>
      </div>
    </flexbox-item>
  </flexbox>

</template>

<script>
    export default {
        name: "live",
        data(){
           return{
               type:1,
               list:{}
           }
        },
        mounted(){
            var that = this;
            this.api_post(this.api.livetype,function (res) {
                that.list = res.data
            })
        },
        methods:{
            selectType:function () {
              console.log(this.$refs['type_' + this.type][0].$el.offsetTop)
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
</style>
