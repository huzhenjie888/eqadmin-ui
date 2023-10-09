const cliboardData = {

}
//处理文件
cliboardData.dealFile = function(file,editor){
    //创建p标签
    //聚焦光标起始位置
    editor.focus();
    //获取光标位置
    let image = document.createElement('img');
    editor.appendChild(image);
    let range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    //这里处理图片
    if(file.type.indexOf('image')!=-1){
        //此文件是图片，将图片转换为base64编码进行展示。
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            image.src = reader.result;
        }
    }

}

export default cliboardData