<template>
   <div class="header">
     <div class="content-wrapper">
       <div class="avatar">
         <img :src="seller.avatar" width="64" height="64">
       </div>
       <div class="content">
         <div class="title">
           <span class="brand"></span>
           <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟到达
         </div>
         <div class="support" v-if="seller.supports">
           <span class="icon" :class="classMap[seller.supports[0].type]"></span>
           <span class="text">{{seller.supports[0].description}}</span>
         </div>
         <div v-if="seller.supports" class="support-count">
           <span class="count">{{seller.supports.length}}个</span>
           <i class="icon-keyboard_arrow_right"></i>
         </div>
       </div>

     </div>
     <div class="bulletin-wrapper">


     </div>
   </div>
</template>
<script>
  export default{
      props:{
          seller:{
              type:Object
          }
      },
      created(){
          this.classMap=["decrease","discount","special","guarantee"];
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .header
    color #fff
    background-color rgba(7,17,27,0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        margin-right 16px
        &>img
          border-radius 2px
      .content
        display inline-block
        font-size 14px
        .title
          margin 2px 6px 8px 0
          .brand
            display inline-block
            vertical-align top
            bg-image('brand')
            width 30px
            height 18px
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left:6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin 8px 0 10px 0
          font-weight 200
          font-size 12px
          line-height 1em
      .support
        .icon
          display inline-block
          vertical-align middle
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.special
            bg-image('special_1')
          &.guarantee
            bg-image('guarantee_1')
        .text
          line-height 12px
          font-size 10px
          font-weight 200


      .support-count
        padding 0 8px
        height 24px
        border-radius 14px
        position absolute
        right 12px
        bottom 14px
        background-color rgba(0,0,0,0.2)
        font-size 10px
        line-height 24px
        font-weight 200
        text-align center
        .count
          font-size 10px
        .icon-keyboard_arrow_right
          line-height 24px
          font-size 10px
          margin-left 2px
</style>
