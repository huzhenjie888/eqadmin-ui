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
import indexJs from "../../js/index.js"
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
    //初始化
    indexJs.init(this);
  }
  //


}
</script>

<style >
@import url("../../css/eqadmin.css");
</style>