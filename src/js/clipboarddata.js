const cliboardData = {

}
//处理文件
cliboardData.dealFile = function(file,editor){
    //创建p标签
    //获取光标位置
    let p = document.createElement('p');
    let image = document.createElement('img');
    //这里处理图片
    if(file.type.indexOf('image')!=-1){
        //此文件是图片，将图片转换为base64编码进行展示。
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            image.src = reader.result;
            image.alt = file.name;
        }
        p.appendChild(image);
        editor.appendChild(p);
        var sel = window.getSelection();
        sel.removeAllRanges();
    }


}

export default cliboardData