function mkElem(t,n){
    const r=$(`<${t}>`,{
        "class":n
    })
    return r
}
function createElement(destination,title,description1,code,description2) {
    const o = mkElem("div",".java-ex");
    const t = mkElem("h2",".title").text(title).appendTo(o);
    const d1 = mkElem("p",".desc").text(description1).appendTo(o);
    if(code!==null){
        const c = mkElem("p")
    }
    $(destination).append(o);
}