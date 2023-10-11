import cliboardData from "./clipboarddata.js";

const index = {

}
index.init = function(obj){
    let editorContent = obj.$refs.eqadminEditorContent;
    editorContent.focus();
    this.editorContent = editorContent;
    editorContent.style.width = obj.editorWidth ;
    editorContent.style.height = obj.editorHeight ;
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
    //获取选中的文本
    document.addEventListener("mouseup", function(){
        //给选中的文本进行加粗。
        let sel = window.getSelection();
        let rang = sel.getRangeAt(0);

        let start = rang.startOffset;
        let end = rang.endOffset;
        let text = rang.startContainer.nodeValue;
        let startText = text.substring(0,start);
        let endText = text.substring(end,text.length);
        let selectText = text.substring(start,end);
        let textElement = document.createElement('span');
        textElement.style.fontWeight="bolder";
        //textElement.style.fontSize = "20px";
        rang.insertNode(document.createTextNode(startText));
        rang.insertNode(textElement);
        rang.insertNode(document.createTextNode(endText));
        //rang

        console.log(rang.startContainer.nodeValue)
    });
}
export default index