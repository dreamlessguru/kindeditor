var KE={};KE.lang={source:"切换模式",preview:"预览",zoom:"放大",undo:"后退",redo:"前进",cut:"剪切",copy:"复制",paste:"粘贴",plainpaste:"粘贴为无格式文本",wordpaste:"从Word粘贴",selectall:"全选",justifyleft:"左对齐",justifycenter:"居中",justifyright:"右对齐",justifyfull:"两端对齐",insertorderedlist:"编号",insertunorderedlist:"项目符号",indent:"增加缩进",outdent:"减少缩进",subscript:"下标",superscript:"上标",date:"插入当前日期",time:"插入当前时间",title:"标题",fontname:"字体",fontsize:"文字大小",textcolor:"文字颜色",bgcolor:"文字背景",bold:"粗体",italic:"斜体",underline:"下划线",strikethrough:"删除线",removeformat:"删除格式",image:"插入图片",flash:"插入Flash",media:"插入多媒体",layer:"插入层",table:"插入表格",specialchar:"插入特殊字符",hr:"插入横线",emoticons:"插入笑脸",link:"超级连接",unlink:"取消超级连接",fullscreen:"全屏显示",about:"关于",print:"打印",yes:"确定",no:"取消",close:"关闭",fontTable:{SimSun:"宋体",SimHei:"黑体",FangSong_GB2312:"仿宋体",KaiTi_GB2312:"楷体",NSimSun:"新宋体",Arial:"Arial","Arial Black":"Arial Black","Times New Roman":"Times New Roman","Courier New":"Courier New",Tahoma:"Tahoma",Verdana:"Verdana"},titleTable:{H1:"标题 1",H2:"标题 2",H3:"标题 3",H4:"标题 4",H5:"标题 5",H6:"标题 6"},charTable:[["§","№","☆","★","○","●","◎","◇","◆","□"],["℃","‰","■","△","▲","※","→","←","↑","↓"],["〓","¤","°","＃","＆","＠","＼","︿","＿","￣"],["―","α","β","γ","δ","ε","ζ","η","θ","ι"],["κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ"],["υ","φ","χ","ψ","ω","≈","≡","≠","＝","≤"],["≥","＜","＞","≮","≯","∷","±","＋","－","×"],["÷","／","∫","∮","∝","∞","∧","∨","∑","∏"],["∪","∩","∈","∵","∴","⊥","∥","∠","⌒","⊙"],["≌","∽","〖","〗","【","】","（","）","［","］"]],colorTable:[["#FFFFFF","#E5E4E4","#D9D8D8","#C0BDBD","#A7A4A4","#8E8A8B","#827E7F","#767173","#5C585A","#000000"],["#FEFCDF","#FEF4C4","#FEED9B","#FEE573","#FFED43","#F6CC0B","#E0B800","#C9A601","#AD8E00","#8C7301"],["#FFDED3","#FFC4B0","#FF9D7D","#FF7A4E","#FF6600","#E95D00","#D15502","#BA4B01","#A44201","#8D3901"],["#FFD2D0","#FFBAB7","#FE9A95","#FF7A73","#FF483F","#FE2419","#F10B00","#D40A00","#940000","#6D201B"],["#FFDAED","#FFB7DC","#FFA1D1","#FF84C3","#FF57AC","#FD1289","#EC0078","#D6006D","#BB005F","#9B014F"],["#FCD6FE","#FBBCFF","#F9A1FE","#F784FE","#F564FE","#F546FF","#F328FF","#D801E5","#C001CB","#8F0197"],["#E2F0FE","#C7E2FE","#ADD5FE","#92C7FE","#6EB5FF","#48A2FF","#2690FE","#0162F4","#013ADD","#0021B0"],["#D3FDFF","#ACFAFD","#7CFAFF","#4AF7FE","#1DE6FE","#01DEFF","#00CDEC","#01B6DE","#00A0C2","#0084A0"],["#EDFFCF","#DFFEAA","#D1FD88","#BEFA5A","#A8F32A","#8FD80A","#79C101","#3FA701","#307F00","#156200"],["#D4C89F","#DAAD88","#C49578","#C2877E","#AC8295","#C0A5C4","#969AC2","#92B7D7","#80ADAF","#9CA53B"]],invalidSwf:"请输入有效的URL地址。\n只允许swf格式。",invalidImg:"请输入有效的URL地址。\n只允许jpg,gif,bmp,png格式。",invalidMedia:"请输入有效的URL地址。\n只允许mp3,wav,wma,wmv,mid,avi,mpg,asf,rm,rmvb格式。",invalidWidth:"宽度必须为数字。",invalidHeight:"高度必须为数字。",invalidBorder:"边框必须为数字。",pleaseInput:"请输入内容"};KE.$=function(b,a){var a=a||document;return a.getElementById(b)};KE.$$=function(a,b){var b=b||document;return b.createElement(a)};KE.event={add:function(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false)}else{if(a.attachEvent){a.attachEvent("on"+b,c)}}},remove:function(a,b,c){if(a.removeEventListener){a.removeEventListener(b,c,false)}else{if(a.detachEvent){a.detachEvent("on"+b,c)}}}};KE.util={getDocumentElement:function(){return(document.compatMode!="CSS1Compat")?document.body:document.documentElement},getDocumentHeight:function(){var a=this.getDocumentElement();return Math.max(a.scrollHeight,a.clientHeight)},getDocumentWidth:function(){var a=this.getDocumentElement();return Math.max(a.scrollWidth,a.clientWidth)},getScriptPath:function(){var b=document.getElementsByTagName("script");for(var a=0;a<b.length;a++){if(b[a].src&&b[a].src.match(/kindeditor[\w\-\.]*\.js/)!=null){return b[a].src.substring(0,b[a].src.lastIndexOf("/")+1)}}},getHtmlPath:function(){return location.href.substring(0,location.href.lastIndexOf("/")+1)},getBrowser:function(){var a="";var b=navigator.userAgent.toLowerCase();if(b.indexOf("msie")>-1){a="IE"}else{if(b.indexOf("gecko")>-1){a="GECKO"}else{if(b.indexOf("opera")>-1){a="OPERA"}}}return a},loadStyle:function(b){var a=KE.$$("link");a.setAttribute("type","text/css");a.setAttribute("rel","stylesheet");a.setAttribute("href",b);document.getElementsByTagName("head")[0].appendChild(a)},inArray:function(c,a){for(var b in a){if(c==a[b]){return true}}return false},getElementPos:function(c){var a=0;var e=0;if(c.getBoundingClientRect){var d=c.getBoundingClientRect();var c=this.getDocumentElement();a=d.left+c.scrollLeft-c.clientLeft;e=d.top+c.scrollTop-c.clientTop}else{a=c.offsetLeft;e=c.offsetTop;var b=c.offsetParent;while(b){a+=b.offsetLeft;e+=b.offsetTop;b=b.offsetParent}}return{x:a,y:e}},getCoords:function(b){b=b||window.event;var a=this.getDocumentElement();if(b.pageX){return{x:b.pageX,y:b.pageY}}return{x:b.clientX+a.scrollLeft-a.clientLeft,y:b.clientY+a.scrollTop-a.clientTop}},setOpacity:function(b,a){if(KE.browser=="IE"){b.style.filter=(a==100)?"":"gray() alpha(opacity="+a+")"}else{b.style.opacity=(a==100)?"":"0."+a.toString()}},showBottom:function(a){KE.g[a].bottom.style.display="block"},hideBottom:function(a){KE.g[a].bottom.style.display="none"},drag:function(e,c,a,b){var d=KE.g[e];c.onmousedown=function(f){if(d.wyswygMode){d.iframe.style.display="none"}if(KE.browser!="IE"){f.preventDefault()}var l=f||window.event;var k=KE.util.getCoords(l);var j=parseInt(a.style.top);var m=parseInt(a.style.left);var n=parseInt(a.style.width);var q=parseInt(a.style.height);var p=k.y;var o=k.x;var i=true;var h=function(s){if(i){var r=s||window.event;var v=KE.util.getCoords(r);var u=v.y-p;var t=v.x-o;b(j,m,n,q,u,t)}return false};var g=function(r){if(d.wyswygMode){d.iframe.style.display=""}i=false;KE.event.remove(document,"mousemove",h);KE.event.remove(document,"mouseup",g)};KE.event.add(document,"mousemove",h);KE.event.add(document,"mouseup",g)}},setDefaultPlugin:function(c){var a=["undo","redo","cut","copy","paste","selectall","justifyleft","justifycenter","justifyright","justifyfull","insertorderedlist","insertunorderedlist","indent","outdent","subscript","superscript","bold","italic","underline","strikethrough","removeformat","unlink"];for(var b in a){KE.plugin[a[b]]={click:new Function("id",'KE.g[id].iframeDoc.execCommand("'+a[b]+'", false, null);')}}},getIframeDoc:function(a){var c=a.contentWindow;var b=null;if(a.contentDocument){b=a.contentDocument}else{b=c.document}return b},getFullHtml:function(b){var a="<html>";a+="<head>";a+='<base href="'+KE.htmlPath+'" />';a+="<title>editor</title>";if(KE.g[b].cssPath){a+='<link href="'+KE.g[b].cssPath+'" rel="stylesheet" type="text/css" />'}a+="</head>";a+="<body>";a+="</body>";a+="</html>";return a},resize:function(g,c,a){var e=KE.g[g];if(c<=e.minWidth||a<=e.minHeight){return}e.container.style.width=c+"px";e.container.style.height=a+"px";e.formDiv.style.height=a+"px";var d=e.toolbarDiv.offsetHeight+e.bottom.offsetHeight;var f=e.formDiv.offsetHeight-e.formDiv.clientHeight;a-=d+f;if(KE.browser=="IE"){var b=e.container.offsetWidth-e.container.clientWidth;if(document.compatMode!="CSS1Compat"){a-=b;c-=b;e.formDiv.style.height=(a+f)+"px"}else{e.formDiv.style.height=a+"px"}e.iframe.style.height=a+"px";e.newTextarea.style.width=(c-b)+"px";e.newTextarea.style.height=(a-f)+"px"}else{e.formDiv.style.height=a+"px";e.iframe.style.height=a+"px";e.newTextarea.style.width="100%";e.newTextarea.style.height=a+"px"}},getData:function(b){var a;if(KE.g[b].wyswygMode){a=KE.g[b].iframeDoc.body.innerHTML}else{a=KE.g[b].newTextarea.value}return a},setData:function(b){var a=this.getData(b);KE.g[b].srcTextarea.value=a},getPureData:function(b){var a=this.getData(b);a=a.replace(/<br[\s\/]{0,2}>/ig,"\r\n");a=a.replace(/<.*?>/ig,"");return a},setPureData:function(b){var a=this.getPureData(b);KE.g[b].srcTextarea.value=a},focus:function(a){if(KE.g[a].wyswygMode){KE.g[a].iframeWin.focus()}else{KE.g[a].newTextarea.focus()}},click:function(b,a){KE.layout.hide(b);KE.util.focus(b);KE.plugin[a].click(b)},selection:function(g){var f=KE.g[g].iframeWin;var d=KE.g[g].iframeDoc;var b=f.getSelection?f.getSelection():d.selection;var a;try{if(b.rangeCount>0){a=b.getRangeAt(0)}else{a=b.createRange?b.createRange():d.createRange()}}catch(c){}if(!a){a=(KE.browser="IE")?d.body.createTextRange():d.createRange()}KE.g[g].selection=b;KE.g[g].range=a},select:function(a){if(KE.browser=="IE"){KE.g[a].range.select()}},pToBr:function(a){if(KE.browser=="IE"){KE.event.add(KE.g[a].iframeDoc,"keydown",function(b){if(b.keyCode==13){KE.util.selection(a);if(KE.g[a].range.parentElement().tagName!="LI"){KE.util.insertHtml(a,"<br />");return false}}})}},insertHtml:function(b,a){if(a==""){return}KE.util.select(b);if(KE.browser=="IE"){if(KE.g[b].selection.type.toLowerCase()=="control"){KE.g[b].range.item(0).outerHTML=a}else{KE.g[b].range.pasteHTML(a)}}else{KE.g[b].iframeDoc.execCommand("inserthtml",false,a)}}};KE.layout={show:function(b,a){KE.layout.hide(b);KE.g[b].hideDiv.appendChild(a);KE.g[b].hideDiv.style.display="block";KE.g[b].layoutDiv=a},hide:function(b){try{KE.g[b].hideDiv.removeChild(KE.g[b].layoutDiv)}catch(a){}KE.g[b].hideDiv.style.display="none";KE.g[b].maskDiv.style.display="none";KE.util.focus(b)},make:function(b){var a=KE.$$("div");a.style.position="absolute";a.style.zIndex=19811214;return a}};KE.menu=function(a){this.arg=a;var d=KE.layout.make(a.id);d.className="ke-menu";var b=KE.g[a.id].toolbarIcon[a.cmd];var c=KE.util.getElementPos(b);d.style.top=c.y+b.offsetHeight+"px";d.style.left=c.x+"px";this.div=d;this.add=function(e,g){var f=KE.$$("div");f.className="ke-menu-noselected";f.style.width=this.arg.width;f.onmouseover=function(){this.className="ke-menu-selected"};f.onmouseout=function(){this.className="ke-menu-noselected"};f.onclick=g;f.innerHTML=e;this.append(f)};this.append=function(e){this.div.appendChild(e)};this.insert=function(e){this.div.innerHTML=e};this.show=function(){KE.layout.show(this.arg.id,this.div)};this.picker=function(){var f=KE.lang.colorTable;var k=KE.$$("table");k.cellPadding=0;k.cellSpacing=0;k.border=0;k.style.margin=0;k.style.padding=0;k.style.borderCollapse="separate";for(var h=0;h<f.length;h++){var l=k.insertRow(h);for(var g=0;g<f[h].length;g++){var e=l.insertCell(g);e.className="ke-picker-cell";e.style.backgroundColor=f[h][g];e.title=f[h][g];e.onmouseover=function(){this.style.borderColor="#000000"};e.onmouseout=function(){this.style.borderColor="#F0F0EE"};e.onclick=new Function('KE.plugin["'+this.arg.cmd+'"].exec("'+this.arg.id+'", "'+f[h][g]+'")');e.innerHTML="&nbsp;"}}this.append(k);this.show()}};KE.dialog=function(a){this.arg=a;this.topHeight=20;this.bottomHeight=76;this.getPos=function(){var d=this.arg;var i=this.arg.id;var h=KE.util.getElementPos(KE.g[i].container);var c=d.height+this.topHeight+this.bottomHeight;var g=Math.round(parseInt(KE.g[i].container.style.width)/2)-Math.round(d.width/2);var e=Math.round(parseInt(KE.g[i].container.style.height)/2)-Math.round(c/2);var b=g<0?h.x:h.x+g;var f=e<0?h.y:h.y+e;return{x:b,y:f}};this.show=function(){var p=this.arg;var e=p.id;var b=KE.layout.make(p.id);b.className="ke-dialog";var n=this.getPos();b.style.width=(p.width+this.topHeight)+"px";b.style.height=(p.height+this.bottomHeight)+"px";b.style.top=n.y+"px";b.style.left=n.x+"px";var h=KE.$$("div");h.className="ke-dialog-title";h.innerHTML=p.title;var j=KE.$$("img");j.src=KE.g[e].skinsPath+"spacer.gif";var c=KE.g[e].skinsPath+KE.g[e].skinType+".gif";j.style.backgroundImage="url("+c+")";j.className="ke-toolbar-close";j.alt=KE.lang.close;j.title=KE.lang.close;j.onclick=new Function("KE.layout.hide('"+e+"')");h.appendChild(j);KE.util.drag(e,h,b,function(r,s,q,v,u,t){b.style.top=(r+u)+"px";b.style.left=(s+t)+"px"});b.appendChild(h);var i=KE.$$("div");i.className="ke-dialog-body";var m=KE.$$("iframe");if(p.useFrameCSS){m.className="ke-dialog-iframe"}m.width=p.width+"px";m.height=p.height+"px";m.setAttribute("frameBorder","0");i.appendChild(m);b.appendChild(i);var d=KE.$$("div");d.className="ke-dialog-bottom";var g=null;var f=null;var o=null;if(p.noButton){g=KE.$$("input");g.className="ke-dialog-no";g.type="button";g.name="noButton";g.value=p.noButton;g.onclick=new Function("KE.layout.hide('"+e+"')");d.appendChild(g)}if(p.yesButton){f=KE.$$("input");f.className="ke-dialog-yes";f.type="button";f.name="yesButton";f.value=p.yesButton;f.onclick=new Function("KE.plugin['"+p.cmd+"'].exec('"+e+"')");d.appendChild(f)}if(p.previewButton){o=KE.$$("input");o.className="ke-dialog-preview";o.type="button";o.name="previewButton";o.value=p.previewButton;o.onclick=new Function("KE.plugin['"+p.cmd+"'].preview('"+e+"')");d.appendChild(o)}b.appendChild(d);KE.layout.show(e,b);window.focus();if(f){f.focus()}else{if(g){g.focus()}}if(typeof p.html!="undefined"){var l=KE.util.getIframeDoc(m);var k=KE.util.getFullHtml(e);l.open();l.write(k);l.close();l.body.innerHTML=p.html}else{m.src=KE.g[e].pluginsPath+p.cmd+".html"}KE.g[e].maskDiv.style.width=KE.util.getDocumentWidth()+"px";KE.g[e].maskDiv.style.height=KE.util.getDocumentHeight()+"px";KE.g[e].maskDiv.style.display="block";KE.g[e].dialog=m;KE.g[e].noButton=g;KE.g[e].yesButton=f;KE.g[e].previewButton=o}};KE.toolbar={able:function(d,a){for(var b in KE.g[d].toolbarIcon){if(KE.util.inArray(b,a)){continue}var c=KE.g[d].toolbarIcon[b];c.className="ke-icon";KE.util.setOpacity(c,100);c.onmouseover=function(){this.className="ke-icon-selected"};c.onmouseout=function(){this.className="ke-icon"};c.onclick=new Function('KE.util.click("'+d+'", "'+b+'")')}},disable:function(d,a){for(var b in KE.g[d].toolbarIcon){if(KE.util.inArray(b,a)){continue}var c=KE.g[d].toolbarIcon[b];c.className="ke-icon-disabled";KE.util.setOpacity(c,50);c.onmouseover=null;c.onmouseout=null;c.onclick=null}},create:function(b){KE.g[b].toolbarIcon=[];var h=KE.$$("table");h.className="ke-toolbar";h.cellPadding=0;h.cellSpacing=0;h.border=0;var l=h.insertRow(0);var m=l.insertCell(0);m.style.padding=0;m.style.margin=0;m.style.border=0;var c=KE.g[b].items.length;var g=0;var l;for(var f=0;f<c;f++){var d=KE.g[b].items[f];if(f==0||d=="-"){var k=KE.$$("table");k.cellPadding=0;k.cellSpacing=0;k.border=0;k.className="ke-toolbar-table";l=k.insertRow(0);g=0;m.appendChild(k);if(d=="-"){continue}}var j=l.insertCell(g);g++;var e=KE.$$("img");e.src=KE.g[b].skinsPath+"spacer.gif";var a=KE.g[b].skinsPath+KE.g[b].skinType+".gif";e.style.backgroundImage="url("+a+")";e.className="ke-icon-"+d;e.alt=KE.lang[d];j.className="ke-icon";j.title=KE.lang[d];j.onmouseover=function(){this.className="ke-icon-selected"};j.onmouseout=function(){this.className="ke-icon"};j.onclick=new Function('KE.util.click("'+b+'", "'+d+'")');j.appendChild(e);KE.g[b].toolbarIcon[d]=j}return h}};KE.create=function(o){var s=KE.$(o);var p=s.style.width;var n=s.style.height;var l=KE.$$("div");l.className="ke-container";l.style.width=p;l.style.height=n;s.parentNode.insertBefore(l,s);var i=KE.toolbar.create(o);l.appendChild(i);var g=KE.$$("iframe");g.className="ke-iframe";g.setAttribute("frameBorder","0");var c=KE.$$("textarea");c.className="ke-textarea";c.style.display="none";var k=KE.$$("div");k.className="ke-form";k.appendChild(g);k.appendChild(c);l.appendChild(k);var f=KE.$$("table");f.className="ke-bottom";f.cellPadding=0;f.cellSpacing=0;f.border=0;var e=f.insertRow(0);var q=e.insertCell(0);q.className="ke-bottom-left";var h=e.insertCell(1);h.className="ke-bottom-right";var t=KE.$$("img");t.className="ke-bottom-right-img";t.src=KE.g[o].skinsPath+"spacer.gif";h.appendChild(t);l.appendChild(f);var d=KE.$$("div");d.style.display="none";var a=KE.$$("div");a.className="ke-mask";KE.util.setOpacity(a,50);document.body.appendChild(d);document.body.appendChild(a);s.style.display="none";KE.util.setDefaultPlugin(o);var r=g.contentWindow;var m=KE.util.getIframeDoc(g);m.designMode="On";var j=KE.util.getFullHtml(o);m.open();m.write(j);m.close();m.body.innerHTML=s.value?s.value:"<p><br /></p>";if(!KE.g[o].wyswygMode){c.value=s.value;c.style.display="block";g.style.display="none";KE.toolbar.disable(o,["source","preview","fullscreen"])}if(KE.g[o].autoOnsubmitMode){var b=s.parentNode;while(b!=null&&b.tagName!="FORM"){b=b.parentNode}if(b!=null&&b.tagName=="FORM"){KE.event.add(b,"submit",new Function('KE.util.setData("'+o+'")'))}}KE.event.add(m,"click",new Function('KE.layout.hide("'+o+'")'));KE.event.add(c,"click",new Function('KE.layout.hide("'+o+'")'));KE.g[o].container=l;KE.g[o].toolbarDiv=i;KE.g[o].formDiv=k;KE.g[o].iframe=g;KE.g[o].newTextarea=c;KE.g[o].srcTextarea=s;KE.g[o].bottom=f;KE.g[o].hideDiv=d;KE.g[o].maskDiv=a;KE.g[o].iframeWin=r;KE.g[o].iframeDoc=m;p=l.offsetWidth;n=l.offsetHeight;KE.g[o].width=p+"px";KE.g[o].height=n+"px";KE.util.resize(o,p,n);KE.util.drag(o,h,l,function(v,w,u,z,y,x){if(KE.g[o].resizeMode==2){KE.util.resize(o,u+x,z+y)}else{if(KE.g[o].resizeMode==1){KE.util.resize(o,u,z+y)}}});KE.util.drag(o,q,l,function(v,w,u,z,y,x){KE.util.resize(o,u,z+y)});if(!KE.g[o].resizeMode){KE.util.hideBottom(o)}KE.util.focus(o)};KE.version="3.0 beta";KE.scriptPath=KE.util.getScriptPath();KE.htmlPath=KE.util.getHtmlPath();KE.browser=KE.util.getBrowser();KE.plugin={};KE.g={};KE.init=function(a){a.wyswygMode=(a.wyswygMode==null)?true:a.wyswygMode;a.autoOnsubmitMode=(a.autoOnsubmitMode==null)?true:a.autoOnsubmitMode;a.resizeMode=(a.resizeMode==null)?2:a.resizeMode;a.skinType=a.skinType||"default";a.cssPath=a.cssPath||"";a.skinsPath=KE.scriptPath+"skins/";a.pluginsPath=KE.scriptPath+"plugins/";a.minWidth=a.minWidth||200;a.minHeight=a.minHeight||100;a.items=a.items||["source","preview","fullscreen","print","undo","redo","cut","copy","paste","plainpaste","wordpaste","justifyleft","justifycenter","justifyright","justifyfull","insertorderedlist","insertunorderedlist","indent","outdent","subscript","superscript","date","time","-","title","fontname","fontsize","textcolor","bgcolor","bold","italic","underline","strikethrough","removeformat","selectall","image","flash","media","layer","table","specialchar","hr","emoticons","link","unlink","about"];KE.g[a.id]=a;KE.util.loadStyle(a.skinsPath+a.skinType+".css")};KE.show=function(a){KE.init(a);KE.event.add(window,"load",new Function('KE.create("'+a.id+'")'))};KE.plugin.bgcolor={icon:"bgcolor.gif",click:function(b){KE.util.selection(b);var a=new KE.menu({id:b,cmd:"bgcolor"});a.picker()},exec:function(b,a){KE.util.select(b);if(KE.browser=="IE"){KE.g[b].iframeDoc.execCommand("backcolor",false,a)}else{KE.g[b].iframeDoc.execCommand("hiliteColor",false,a)}KE.layout.hide(b);KE.util.focus(b)}};KE.plugin.fontname={click:function(f){var d="fontname";KE.util.selection(f);var c=KE.lang.fontTable;var e=new KE.menu({id:f,cmd:d,width:"160px"});for(var b in c){var a='<span style="font-family: '+b+';">'+c[b]+"</span>";e.add(a,new Function('KE.plugin["'+d+'"].exec("'+f+'", "'+b+'")'))}e.show()},exec:function(b,a){KE.util.select(b);KE.g[b].iframeDoc.execCommand("fontname",false,a);KE.layout.hide(b);KE.util.focus(b)}};KE.plugin.fontsize={click:function(f){var d={"1":"8pt","2":"10pt","3":"12pt","4":"14pt","5":"18pt","6":"24pt"};var c="fontsize";KE.util.selection(f);var e=new KE.menu({id:f,cmd:c,width:"100px"});for(var b in d){var a='<span style="font-size: '+d[b]+';">'+d[b]+"</span>";e.add(a,new Function('KE.plugin["'+c+'"].exec("'+f+'", "'+b+'")'))}e.show()},exec:function(b,a){KE.util.select(b);KE.g[b].iframeDoc.execCommand("fontsize",false,a.substr(0,1));KE.layout.hide(b);KE.util.focus(b)}};KE.plugin.textcolor={icon:"textcolor.gif",click:function(b){KE.util.selection(b);var a=new KE.menu({id:b,cmd:"textcolor"});a.picker()},exec:function(b,a){KE.util.select(b);KE.g[b].iframeDoc.execCommand("forecolor",false,a);KE.layout.hide(b)}};