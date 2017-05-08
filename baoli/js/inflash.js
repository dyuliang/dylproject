// JavaScript Document
function playswf(sFile,sWidth,sHeight){
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+ sWidth +'" height="'+ sHeight +'"> ');
document.write(' <param name="movie" value="'+ sFile +'"> ');
document.write(' <param name="quality" value="high"> ');
document.write(' <param name="wmode" value="transparent"> ');//背景透明
document.write(' <param name="wmode" value="opaque"> ');//FLASH在最底层与上一句代码不能同时打开
document.write(' <embed src="'+ sFile +'" wmode="transparent" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+ sWidth +'" height="'+ sHeight +'"></embed> ');
document.write('</object> ');
}
// JavaScript Document