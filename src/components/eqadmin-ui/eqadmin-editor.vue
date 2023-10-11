<template>
<div class="eqadmin-editor editor-root" >
  <div ref="eqadmin-toolbar"></div>
  <div 
  ref="eqadminEditorContent"  
  class="editor-content" 
  contenteditable="true" 
  @input="input">

  </div>
</div>
</template>
<script>
import cliboardData from "../../js/clipboarddata.js"
export default {
  name: "eqadmin-editor",
  props:{
     width:{type:String,default:'100%'},
     height:{type:String,default: '100%'},
  },
  watch:{
    width(values){
     this.editorWidth = this.width;
    },
    height(values){
      this.editorHeight = this.height;
    }
  },
  data(){
    return {
       editorWidth:'100%',
       editorHeight:'100%',
       editorContent:null,
       content:{},
	   range:null,
    }
  },
  methods:{
    getEditor(){
      return this.editorContent;
    },
    input(e){
      this.content.text = e.target.innerText;
      this.content.html = e.target.innerHTML;
      this.content.editor = this.editorContent;
      this.$emit('eqadminEditorInput',this.content);
    },
  },
  mounted() {
    let that = this;
    let editorContent = this.$refs.eqadminEditorContent;
    editorContent.focus();
    this.editorContent = editorContent;
    editorContent.style.width = this.editorWidth ;
    editorContent.style.height = this.editorHeight ;
    //添加粘贴板监听事件
    editorContent.addEventListener('paste',function(e){
      const items = (e.clipboardData || window.clipboardData).items;
      if (items && items.length) {
        for (var i = 0; i < items.length; i++) {
          if(items[i].kind=='file'){
            cliboardData.dealFile(items[i].getAsFile(),editorContent);
            //文件处理完毕后，继续聚焦
            //that.appendBlank();
          }
        }
      }
    })

  }
  //


}
</script>

<style >
@import url("../../css/eqadmin.css");
</style>