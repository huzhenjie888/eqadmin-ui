const operation ={

}
//将选中的文本，进行加粗操作。
operation.textSelectBolderOne = function (){
    let sel = window.getSelection();
    let rang = sel.getRangeAt(0);
    let start = rang.startOffset;
    let end = rang.endOffset;
    let text = rang.startContainer.nodeValue;
    let selectText = text.substring(start,end);
    let textNode = document.createTextNode(selectText);





}
export default operation