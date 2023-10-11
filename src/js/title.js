const titleEditor ={

}

titleEditor.insertH1 = function (editor,content){
    editor.appendChild('<h1>'+content+'</h1>');
}
titleEditor.insertH2 = function (editor,content){
    editor.appendChild('<h2>'+content+'</h2>');
}
titleEditor.insertH3 = function (editor,content){
    editor.appendChild('<h3>'+content+'</h3>');
}
titleEditor.insertH4 = function (editor,content){
    editor.appendChild('<h4>'+content+'</h4>');
}
titleEditor.insertH5 = function (editor,content){
    editor.appendChild('<h5>'+content+'</h5>');
}
titleEditor.insertH6 = function (editor,content){
    editor.appendChild('<h6>'+content+'</h6>');
}

export default titleEditor