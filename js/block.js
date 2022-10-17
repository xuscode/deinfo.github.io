window.onload=function(){
    document.onkeydown=function(){
        var e=window.event||arguments[0];
        if(e.keyCode==123){
            alert("SHANGHAI DESIGN INFORMATION TECHNOLOGY CO.,LTD ");
            return false;
        }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
            alert("SHANGHAI DESIGN INFORMATION TECHNOLOGY CO.,LTD ");
            return false;
        }else if((e.ctrlKey)&&(e.keyCode==85)){//追加

　　　　　　　　return false;
　　　　　　　}
    };
    document.oncontextmenu=function(){
        alert("SHANGHAI DESIGN INFORMATION TECHNOLOGY CO.,LTD ");
        return false;
    }
}

