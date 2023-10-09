const cliboardData = {

}
//处理文件
cliboardData.dealFile = function(file,editor){
    //创建p标签
    //获取光标位置
	var range, node;
	if(!editor.hasfocus){
		editor.focus();
	}
	let imgBase64 = '';
	//这里处理图片
	if(file.type.indexOf('image')!=-1){
	    //此文件是图片，将图片转换为base64编码进行展示。
	    let reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onloadend = function () {
	        imgBase64 = reader.result;
			let image = "<img src='"+imgBase64+"'   />";
			if (window.getSelection && window.getSelection().getRangeAt) {
				range = window.getSelection().getRangeAt(0);
				range.collapse(false);
				node = range.createContextualFragment(image);
				var c = node.lastChild;
				range.insertNode(node);
				if(c){
				range.setEndAfter(c);
				range.setStartAfter(c)
				}
				var j = window.getSelection();
				j.removeAllRanges();
				j.addRange(range);
			}else if(document.selection && document.selection.createRange){
				document.selection.createRange().pasteHTML(image);
			}
	    }
	
		
	}
	
	
  


}

export default cliboardData