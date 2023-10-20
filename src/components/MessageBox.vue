<template>
  <div class="msg-box" :class="classes">
    <div class="border-style">
      <div class="msg-inner">
        <h1 class="msg-title" :title="title">{{ title }}</h1>
        <div class="msg-content">{{ modifiedContent }}</div>  
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { computed } from 'vue';

const props = withDefaults(defineProps<{
  /**
   * The title of message box
   */
  title?: string,
  /**
   * The content of message box
   */
  content?: string,
  /**
   * The size of message box
   */
  size?: 'small' | 'medium' | 'large'

}>(), { 
  title: '제목', 
  content: '내용' 
  });
// @clickBtn 메소드에 대한 주석
const clickBtn = () => {
  console.log('test');
};

const modifiedContent = computed(() => {
  let maxContent: number;

  if(props.size === 'small')
  {
    maxContent = 35;
  }
  else if(props.size === 'medium')
  {
    maxContent = 50;
  }
  else if(props.size === 'large')
  {
    maxContent = 65;
  }
  return props.content.length > maxContent ? props.content.substr(0, maxContent) + '...' : props.content
});

const classes = computed(() => ({
  [`msg-box--${props.size || 'medium'}`]: true,
}));

</script>

<style lang="scss" scoped>
.msg-box{
  color: #d2d2d2;
  border: 1px solid #3c3c3c;
  border-radius: 3px;

  .border-style{
    margin: 1px;
    border: 1px solid #fff;
    border-radius: 2px;
    
    .msg-inner{
      padding: 5px 5px 5px 5px;
      
      .msg-title{
        white-space: nowrap;
        overflow: hidden;
        border-bottom: 1px solid #3c3c3c;
        padding-bottom: 5px;
        font-weight: 600;
      }    

      .msg-content{
        padding-top: 5px;
      }
    }
  }
}

.msg-box {
  &--small {
    width: 200px;
    max-height: 150px;

    .msg-title{
      font-size: 16px;
    }   
    .msg-content{
      font-size: 14px;
    }   
  }
  
  &--medium {
    width: 300px;
    max-height: 120px;
      .msg-title{
        font-size: 17px;
      }   
      .msg-content{
        font-size: 16px;
      }     
  }
  
  &--large {
    width: 400px;
    .msg-title{
        font-size: 18px;
      }   
      .msg-content{
        font-size: 17px;
      } 
  }
}

</style>