<script >
export default  {
  methods:{
    eqadminEditorInput(data){
      console.log(data)
    }
  }
}
</script>

<template>
<eqadmin-editor @eqadminEditorInput="eqadminEditorInput"></eqadmin-editor>
</template>

<style >
@import url("./public/thems/default.css");
</style>
