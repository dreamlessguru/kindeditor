(function(ba,v){function ca(a){return Object.prototype.toString.call(a)==="[object Array]"}function da(a,b){for(var c=0,d=b.length;c<d;c++)if(a===b[c])return c;return-1}function D(a,b){if(ca(a))for(var c=0,d=a.length;c<d;c++){if(b.call(a[c],c,a[c])===false)break}else for(c in a)if(a.hasOwnProperty(c))if(b.call(a[c],c,a[c])===false)break}function H(a){return a.replace(/^\s+|\s+$/g,"")}function la(a,b,c){c=c===v?",":c;return(c+b+c).indexOf(c+a+c)>=0}function S(a){function b(c){c=parseInt(c,10).toString(16).toUpperCase();
return c.length>1?c:"0"+c}return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig,function(c,d,e,f){return"#"+b(d)+b(e)+b(f)})}function K(a,b){b=b===v?",":b;var c={},d=a.split(b);D(d,function(e,f){c[f]=true});return c}function Fa(a,b,c){if(a.addEventListener)a.addEventListener(b,c,false);else a.attachEvent&&a.attachEvent("on"+b,c)}function T(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,false);else a.detachEvent&&a.detachEvent("on"+b,c)}function Ga(a,b){if(b){var c={},d=a.nodeName.toLowerCase()===
"#document"?a:a.ownerDocument;D(Ha,function(f,i){c[i]=b[i]});if(!b.target)b.target=b.srcElement||d;if(b.target.nodeType===3)b.target=b.target.parentNode;if(!b.relatedTarget&&b.fromElement)b.relatedTarget=b.fromElement===b.target?b.toElement:b.fromElement;if(b.pageX==null&&b.clientX!=null){var e=d.documentElement;d=d.body;b.pageX=b.clientX+(e&&e.scrollLeft||d&&d.scrollLeft||0)-(e&&e.clientLeft||d&&d.clientLeft||0);b.pageY=b.clientY+(e&&e.scrollTop||d&&d.scrollTop||0)-(e&&e.clientTop||d&&d.clientTop||
0)}if(!b.which&&(b.charCode||b.charCode===0?b.charCode:b.keyCode))b.which=b.charCode||b.keyCode;if(!b.metaKey&&b.ctrlKey)b.metaKey=b.ctrlKey;if(!b.which&&b.button!==v)b.which=b.button&1?1:b.button&2?3:b.button&4?2:0;c.preventDefault=function(){b.preventDefault&&b.preventDefault();b.returnValue=false};c.stopPropagation=function(){b.stopPropagation&&b.stopPropagation();b.cancelBubble=true};c.stop=function(){this.preventDefault();this.stopPropagation()};return c}}function ea(a){var b=da(a,fa);if(b<0){b=
fa.length;fa.push(a);s[b]={}}return b}function ma(a,b,c){var d=ea(a);if(s[d][b]!==v&&s[d][b].length>0){D(s[d][b],function(e,f){f===v&&s[d][b].splice(e,1)});T(a,b,s[d][b][0])}else s[d][b]=[];if(s[d][b].length===0)s[d][b][0]=function(e){D(s[d][b],function(f,i){f>0&&i&&i.call(a,Ga(a,e))})};da(c,s[d][b])<0&&s[d][b].push(c);Fa(a,b,s[d][b][0])}function na(a,b,c){var d=ea(a);if(b===v){if(d in s){D(s[d],function(i,h){T(a,i,h[0])});s[d]={}}}else if(s[d][b]!==v&&s[d][b].length>0)if(c===v){T(a,b,s[d][b][0]);
s[d][b]=[]}else{for(var e=0,f=s[d][b].length;e<f;e++)s[d][b][e]===c&&delete s[d][b][e];if(s[d][b].length==2&&s[d][b][1]===v){T(a,b,s[d][b][0]);s[d][b]=[]}}}function oa(a,b){var c=ea(a);s[c][b]!==v&&s[c][b].length>0&&s[c][b][0]()}function pa(a){for(var b={},c=/\s*([\w\-]+)\s*:([^;]*)(;|$)/g,d;d=c.exec(a);){var e=H(d[1].toLowerCase());d=H(S(d[2]));b[e]=d}return b}function qa(a){for(var b={},c=/\s+(?:([\w-:]+)|(?:([\w-:]+)=([^\s"'<>]+))|(?:([\w-:]+)="([^"]*)")|(?:([\w-:]+)='([^']*)'))(?=(?:\s|\/|>)+)/g,
d;d=c.exec(a);)b[d[1]||d[2]||d[4]||d[6]]=(d[2]?d[3]:d[4]?d[5]:d[7])||"";return b}function ra(a){var b="";D(pa(a),function(c,d){b+=c+":"+d+";"});return b}function U(a){a=a.replace(/((?:[\r\n])*)<(\/)?([\w-:]+)(\s*(?:[\w-:]+)(?:=(?:"[^"]*"|'[^']*'|[^\s"'<>]*))?)*\s*(\/)?>((?:[\r\n])*)/g,function(b,c,d,e,f,i,h){b=c||"";d=d||"";e=e.toLowerCase();f=f||"";i=i?" "+i:"";h=h||"";if(i===""&&sa[e])i=" /";if(h)h=" ";if(e!=="script"&&e!=="style")b="";if(f!==""){f=f.replace(/\s*([\w-:]+)=([^\s"'<>]+|"[^"]*"|'[^']*')/g,
function(g,k,j){g=k.toLowerCase();j=j||"";if(j==="")j='""';else{if(g==="style"){j=j.substr(1,j.length-2);j=ra(j);if(j==="")return"";j='"'+j+'"'}/^['"]/.test(j)||(j='"'+j+'"')}return" "+g+"="+j+" "});f=H(f);if(f=f.replace(/\s+/g," "))f=" "+f;return b+"<"+d+e+f+i+">"+h}else return b+"<"+d+e+i+">"+h});return H(a)}function ga(a,b){var c=a.ownerDocument||a,d=b.ownerDocument||b;if(c!==d)return false;if(b===d)return false;if(a===c)return true;if(a.nodeType===3)return false;if(b.nodeType===3){b=b.parentNode;
if(!b)return false;if(a===b)return true}if(a.compareDocumentPosition)return!!(a.compareDocumentPosition(b)&16);return a!==b&&a.contains(b)}function V(a,b){b=b.toLowerCase();var c=null;if(I&&W<8){var d=a.ownerDocument.createElement("div");d.appendChild(a.cloneNode(false));d=qa(d.innerHTML.toLowerCase());if(b in d)c=d[b]}else c=a.getAttribute(b,2);if(b==="style"&&c!==null)c=ra(c);return c}function ta(a,b){function c(p){if(typeof p!="string")return p;return p.replace(/([^\w\-])/g,"\\$1")}function d(p,
x){return p==="*"||p.toLowerCase()===c(x.toLowerCase())}function e(p,x,r){var l=[];(p=(r.ownerDocument||r).getElementById(p.replace(/\\/g,"")))&&d(x,p.nodeName)&&ga(r,p)&&l.push(p);return l}function f(p,x,r){var l=r.ownerDocument||r,t=[],y,B,E;if(r.getElementsByClassName){l=r.getElementsByClassName(p.replace(/\\/g,""));y=0;for(B=l.length;y<B;y++){E=l[y];d(x,E.nodeName)&&t.push(E)}}else if(l.querySelectorAll){l=l.querySelectorAll((r.nodeName!=="#document"?r.nodeName+" ":"")+x+"."+p);y=0;for(B=l.length;y<
B;y++){E=l[y];ga(r,E)&&t.push(E)}}else{l=r.getElementsByTagName(x);y=0;for(B=l.length;y<B;y++){E=l[y];if(E.nodeType==1)(x=E.className)&&(" "+x+" ").indexOf(" "+p+" ")>-1&&t.push(E)}}return t}function i(p,x,r,l){var t=[];r=l.getElementsByTagName(r);l=0;for(var y=r.length,B;l<y;l++){B=r[l];if(B.nodeType==1)if(x===null)V(B,p)!==null&&t.push(B);else x===c(V(B,p))&&t.push(B)}return t}function h(p,x){var r=[],l,t=(l=/^((?:\\.|[^.#\s\[<>])+)/.exec(p))?l[1]:"*";if(l=/#((?:[\w\-]|\\.)+)$/.exec(p))r=e(l[1],
t,x);else if(l=/\.((?:[\w\-]|\\.)+)$/.exec(p))r=f(l[1],t,x);else if(l=/\[((?:[\w\-]|\\.)+)\]/.exec(p))r=i(l[1].toLowerCase(),null,t,x);else if(l=/\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(p)){r=l[1].toLowerCase();l=l[2];if(r==="id")t=e(l,t,x);else{if(r==="class")t=f(l,t,x);else{if(r==="name"){r=[];l=x.getElementsByName(l.replace(/\\/g,""));for(var y=0,B=l.length,E;y<B;y++){E=l[y];d(t,E.nodeName)&&E.getAttributeNode("name")&&r.push(E)}t=r}else t=i(r,l,t,x);t=t}t=t}r=t}else{t=x.getElementsByTagName(t);
l=0;for(y=t.length;l<y;l++){B=t[l];B.nodeType==1&&r.push(B)}}return r}b=b||document;for(var g=[],k,j=/((?:\\.|[^\s>])+|[\s>])/g;k=j.exec(a);)k[1]!==" "&&g.push(k[1]);var n=[];if(g.length==1)return h(g[0],b);k=false;j=0;for(var C=g.length;j<C;j++){var L=g[j];if(L===">")k=true;else{if(j>0){var u=[],m=0,w=n.length;for(n=n[m];m<w;m++){var o=h(L,n),z=0,F=o.length;for(o=o[z];z<F;z++)if(k)n===o.parentNode&&u.push(o);else u.push(o)}n=u}else n=h(L,b);if(n.length===0)return[]}}return n}function ua(a,b){var c=
ta(a,b);return c.length>0?c[0]:null}function R(a){return a.get?a.get():a}function va(a){var b=a.split("-");a="";D(b,function(c,d){a+=c>0?d.charAt(0).toUpperCase()+d.substr(1):d});return a}function J(a){this.node=a;this.doc=this.node.ownerDocument||this.node;this.name=this.node.nodeName.toLowerCase();this.type=this.node.nodeType;this.win=this.doc.parentWindow||this.doc.defaultView;this._prevDisplay=""}function q(a,b){var c;if(typeof a==="string")if(/<.+>/.test(a)){c=b?b.ownerDocument||b:document;c=
c.createElement("div");c.innerHTML=a;c=c.firstChild}else c=ua(a,b);else c=a;if(!c)return null;return new J(c)}function wa(){this.collapsed=this.startContainer===this.endContainer&&this.startOffset===this.endOffset}function xa(){function a(g){for(var k=[];g;){k.push(g);g=g.parentNode}return k}for(var b=a(this.startContainer),c=a(this.endContainer),d=0,e=b.length,f=c.length,i,h;++d;){i=b[e-d];h=c[f-d];if(!i||!h||i!==h)break}this.commonAncestorContainer=b[e-d+1]}function ha(a,b){function c(m,w,o){var z=
m.nodeValue.length,F;if(a){F=m.cloneNode(true).splitText(w);F.splitText(o-w)}if(b){var p=m;if(w>0)p=m.splitText(w);o<z&&p.splitText(o-w);k.push(p)}return F}function d(m,w){var o;if(m.nodeType==3){o=c(m,i,g);a&&w.appendChild(o);return false}o=m.firstChild;for(var z,F;o;){z=new M(e);z.selectNode(o);if(z.compareBoundaryPoints(N,j)>=0)return false;F=o.nextSibling;if(z.compareBoundaryPoints(O,j)>0)if(o.nodeType==1)if(z.compareBoundaryPoints(P,j)>=0&&z.compareBoundaryPoints(Q,j)<=0){a&&w.appendChild(o.cloneNode(true));
b&&k.push(o)}else{var p;if(a){p=o.cloneNode(false);w.appendChild(p)}if(d(o,p)===false)return false}else if(o.nodeType==3){o=o==f&&o==h?c(o,i,g):o==f?c(o,i,o.nodeValue.length):o==h?c(o,0,g):c(o,0,o.nodeValue.length);a&&w.appendChild(o)}o=F}}var e=this.doc,f=this.startContainer,i=this.startOffset,h=this.endContainer,g=this.endOffset,k=[],j=this;if(b){j=this.cloneRange();f.nodeType==3&&i===0&&this.setStart(f.parentNode,0);this.collapse(true)}var n=e.createDocumentFragment();d(j.commonAncestorContainer,
n);for(var C=0,L=k.length;C<L;C++){var u=k[C];u.parentNode&&u.parentNode.removeChild(u)}return a?n:this}function ya(a,b){var c=a.parentElement().ownerDocument,d=a.duplicate();d.collapse(b);var e=d.parentElement(),f=e.childNodes;if(f.length===0)return{node:e.parentNode,offset:q(e).index()};c=c;var i=0,h=false,g=a.duplicate();g.moveToElementText(e);for(var k=0,j=f.length;k<j;k++){var n=f[k],C=g.compareEndPoints("StartToStart",d);if(C>0)h=true;if(C===0)return{node:n.parentNode,offset:k};if(n.nodeType==
1){C=a.duplicate();C.moveToElementText(n);g.setEndPoint("StartToEnd",C);if(h)i+=C.text.length;else i=0}else if(n.nodeType==3){g.moveStart("character",n.nodeValue.length);i+=n.nodeValue.length}h||(c=n)}if(!h&&c.nodeType==1)return{node:e,offset:q(e.lastChild).index()+1};g=a.duplicate();g.moveToElementText(e);g.setEndPoint("StartToEnd",d);i-=g.text.length;return{node:c,offset:i}}function za(a){var b=a.ownerDocument,c=0;for(a=a.previousSibling;a;){if(a.nodeType==1)if(q(a).isSingle())c+=1;else{var d=b.body.createTextRange();
d.moveToElementText(a);c+=d.text.length}else if(a.nodeType==3)c+=a.nodeValue.length;a=a.previousSibling}return c}function Aa(a,b){var c=a.ownerDocument||a,d=c.body.createTextRange();if(c==a){d.collapse(true);return d}if(a.nodeType==1){var e=a.childNodes,f,i=false,h;if(b===0){f=e[0];e=true}else{f=e[b-1];e=false}if(!f){h=c.createTextNode(" ");a.appendChild(h);f=h;i=true}if(f.nodeName.toLowerCase()==="head"){if(b===1)e=true;if(b===2)e=false;d.collapse(e);return d}if(f.nodeType==1){d.moveToElementText(f);
d.collapse(e)}else{d.moveToElementText(a);i&&a.removeChild(h);c=za(f);c=e?c:c+f.nodeValue.length;d.moveStart("character",c)}}else if(a.nodeType==3){d.moveToElementText(a.parentNode);d.moveStart("character",b+za(a))}return d}function M(a){this.startContainer=a;this.startOffset=0;this.endContainer=a;this.endOffset=0;this.collapsed=true;this.doc=this.commonAncestorContainer=a}function X(a){if(!a.nodeName){if(a.get)a=a;else a:{var b;if(I){b=a.parentElement().ownerDocument;if(a.item){b=new M(b);b.selectNode(a.item(0));
a=b;break a}var c=ya(a,true);a=ya(a,false);b=new M(b);b.setStart(c.node,c.offset);b.setEnd(a.node,a.offset)}else{c=a.startContainer;b=c.ownerDocument||c;b=new M(b);b.setStart(c,a.startOffset);b.setEnd(a.endContainer,a.endOffset)}a=b}return a}return new M(a)}function Ba(a,b){var c="";try{c=a.queryCommandValue(b)}catch(d){}if(typeof c!=="string")c="";return c}function Ca(a){var b=a.parentWindow||a.defaultView;return b.getSelection?b.getSelection():a.selection}function ia(){var a=this.sel,b=this.range,
c=b.startContainer,d=b.endContainer,e=c.ownerDocument||c,f=e.parentWindow||e.defaultView;if(I&&c.nodeType==1&&b.collapsed){a=e.createTextNode(" ");d.appendChild(a);e=e.body.createTextRange();e.moveToElementText(d);e.collapse(false);e.select();d.removeChild(a);f.focus();return this}e=b.get();if(I)e.select();else{a.removeAllRanges();a.addRange(e)}f.focus();return this}function Ia(a){var b={},c,d;D(a,function(e,f){c=e.split(",");for(var i=0,h=c.length;i<h;i++){d=c[i];b[d]=f}});return b}function Y(a,
b,c){c=c||a.name;if(a.type!==1)return false;b=Ia(b);if(b[c]){c=b[c].split(",");for(var d=0,e=c.length;d<e;d++){b=c[d];if(b==="*")return true;if(b.charAt(0)==="."&&a.css(b.substr(1))!=="")return true;if(b.charAt(0)!=="."&&a.attr(b)!=="")return true}}return false}function Z(a,b){for(var c=a.commonAncestorContainer;c;){var d=q(c);if(Y(d,b,"*"))return c;if(Y(d,b))return c;c=c.parentNode}return null}function Da(a){var b,c,d;if(a.nodeName){b=a.ownerDocument||a;c=Ca(b);try{d=c.rangeCount>0?c.getRangeAt(0):
c.createRange()}catch(e){}a=d||b;if(I&&(!d||d.parentElement().ownerDocument!==b))return null}else{b=a.startContainer;b=b.ownerDocument||b;c=Ca(b);d=a.get()}this.win=b.parentWindow||b.defaultView;this.doc=b;this.sel=c;this.rng=d;this.range=X(a)}function ja(a){return new Da(a)}function Ja(a){return a.contentDocument||a.contentWindow.document}function Ka(a,b){var c=['<!doctype html><html><head><meta charset="utf-8" /><title>KindEditor</title>'];if(b){if(typeof b=="string"&&!/\{[\s\S]*\}/g.test(b))b=
[b];ca(b)?D(b,function(d,e){e!==""&&c.push('<link href="'+e+'" rel="stylesheet" />')}):c.push("<style>"+b+"</style>")}c.push("</head><body "+(a?'class="'+a+'"':"")+"></body></html>");return c.join("")}function $(a){var b=this.doc.body;if(a===v)return q(b).html();else{q(b).html(a);return this}}function aa(a){var b=this.textarea;if(a===v)return b.val();else{b.val(a);return this}}var G=navigator.userAgent.toLowerCase(),I=G.indexOf("msie")>-1&&G.indexOf("opera")==-1,ka=G.indexOf("gecko")>-1&&G.indexOf("khtml")==
-1,La=G.indexOf("applewebkit")>-1,Ma=G.indexOf("opera")>-1,W=(G=/(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(G))?G[1]:"0",Ea=K("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),Na=K("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul"),
sa=K("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");K("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");K("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");var Oa=K("input,button,textarea,select"),A={IE:I,GECKO:ka,WEBKIT:La,OPERA:Ma,VERSION:W,each:D,isArray:ca,inArray:da,inString:la,trim:H,toHex:S,toMap:K},Ha="altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,layerX,layerY,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(","),
fa=[],s={};A.bind=ma;A.unbind=na;A.fire=oa;A.formatHtml=U;A.query=ua;A.queryAll=ta;J.prototype={bind:function(a,b){ma(this.node,a,b);return this},unbind:function(a,b){na(this.node,a,b);return this},fire:function(a){oa(this.node,a);return this},hasAttr:function(a){return V(this.node,a)},attr:function(a,b){var c=this,d=c.node;if(a===v)return qa(c.outer());if(typeof a==="object"){D(a,function(e,f){c.attr(e,f)});return c}if(b===v){b=V(d,a);return b===null?"":b}if(I&&W<8&&a.toLowerCase()=="class")a="className";
d.setAttribute(a,""+b);return c},removeAttr:function(a){if(I&&W<8&&a.toLowerCase()=="class")a="className";this.attr(a,"");this.node.removeAttribute(a);return this},get:function(){return this.node},hasClass:function(a){return la(a,this.node.className," ")},addClass:function(a){var b=this.node;if(!this.hasClass(a))b.className=H(b.className+" "+a);return this},removeClass:function(a){var b=this.node;if(this.hasClass(a))b.className=H(b.className.replace(new RegExp("\\s*"+a+"\\s*"),""));return this},html:function(a){var b=
this.node;if(a===v)return U(b.innerHTML);else{b.innerHTML=U(a);return this}},val:function(a){var b=this.node;if(a===v)return this.hasVal()?b.value:this.attr("value");else{if(this.hasVal())b.value=a;else this.attr("value",a);return this}},css:function(a,b){var c=this,d=c.node;if(a===v)return pa(c.attr("style"));if(typeof a==="object"){D(a,function(e,f){c.css(e,f)});return c}if(b===v)return d.style[a]||c.computedCss(a)||"";d.style[va(a)]=b;return c},computedCss:function(a){var b=this.node,c=va(a),d=
"";if(this.win.getComputedStyle){d=this.win.getComputedStyle(b,null);d=d[c]||d.getPropertyValue(a)||b.style[c]}else if(b.currentStyle)d=b.currentStyle[c]||b.style[c];return d},clone:function(a){return new J(this.node.cloneNode(a))},append:function(a){this.node.appendChild(R(a));return this},before:function(a){var b=this.node;b.parentNode.insertBefore(R(a),b);return this},after:function(a){var b=this.node;b.nextSibling?b.parentNode.insertBefore(R(a),b.nextSibling):this.append(a);return this},replaceWith:function(a){a=
R(a);var b=this.node;b.parentNode.replaceChild(a,b);this.unbind();this.node=a;return this},remove:function(){var a=this.node;this.unbind();a.parentNode&&a.parentNode.removeChild(a);this.node=null;return this},show:function(){this.computedCss("display")==="none"&&this.css("display",this._prevDisplay);return this},hide:function(){if(this.computedCss("display")!=="none"){this._prevDisplay=this.css("display");this.css("display","none")}return this},outer:function(){var a=this.doc.createElement("div");
a.appendChild(this.node);return U(a.innerHTML)},hasVal:function(){return!!Oa[this.name]},isSingle:function(){return!!sa[this.name]},isInline:function(){return!!Ea[this.name]},isBlock:function(){return!!Na[this.name]},contains:function(a){return ga(this.node,R(a))},parent:function(){return new J(this.node.parentNode)},children:function(){for(var a=[],b=this.node.firstChild;b;){if(b.nodeType!=3||H(b.nodeValue)!=="")a.push(new J(b));b=b.nextSibling}return a},first:function(){var a=this.children();return a.length>
0?a[0]:null},last:function(){var a=this.children();return a.length>0?a[a.length-1]:null},index:function(){for(var a=-1,b=this.node;b;){a++;b=b.previousSibling}return a},prev:function(){return new J(this.node.previousSibling)},next:function(){return new J(this.node.nextSibling)},each:function(a,b){function c(d){for(d=b?d.firstChild:d.lastChild;d;){var e=b?d.nextSibling:d.previousSibling;if(a(new J(d))===false)return false;if(c(d)===false)return;d=e}}b=b===v?true:b;c(this.node)},toString:function(){return this.type==
3?this.node.nodeValue:this.outer()}};A.node=q;var P=0,O=1,Q=2,N=3;M.prototype={setStart:function(a,b){var c=this.doc;this.startContainer=a;this.startOffset=b;if(this.endContainer===c){this.endContainer=a;this.endOffset=b}wa.call(this);xa.call(this);return this},setEnd:function(a,b){var c=this.doc;this.endContainer=a;this.endOffset=b;if(this.startContainer===c){this.startContainer=a;this.startOffset=b}wa.call(this);xa.call(this);return this},setStartBefore:function(a){return this.setStart(a.parentNode||
this.doc,q(a).index())},setStartAfter:function(a){return this.setStart(a.parentNode||this.doc,q(a).index()+1)},setEndBefore:function(a){return this.setEnd(a.parentNode||this.doc,q(a).index())},setEndAfter:function(a){return this.setEnd(a.parentNode||this.doc,q(a).index()+1)},selectNode:function(a){this.setStartBefore(a);return this.setEndAfter(a)},selectNodeContents:function(a){var b=q(a);if(b.type==3||b.isSingle())return this.selectNode(a);b=b.children();if(b.length>0){this.setStartBefore(b[0].get());
return this.setEndAfter(b[b.length-1].get())}this.setStart(a,0);return this.setEnd(a,0)},collapse:function(a){if(a)return this.setEnd(this.startContainer,this.startOffset);return this.setStart(this.endContainer,this.endOffset)},compareBoundaryPoints:function(a,b){var c=this.get(),d=b.get();if(this.doc.createRange)return c.compareBoundaryPoints(a,d);else{var e={};e[P]="StartToStart";e[O]="EndToStart";e[Q]="EndToEnd";e[N]="StartToEnd";c=c.compareEndPoints(e[a],d);if(c!==0)return c;var f,i,h,g;if(a===
P||a===N){f=this.startContainer;h=this.startOffset}if(a===O||a===Q){f=this.endContainer;h=this.endOffset}if(a===P||a===O){i=b.startContainer;g=b.startOffset}if(a===Q||a===N){i=b.endContainer;g=b.endOffset}if(f===i){f=h-g;return f>0?1:f<0?-1:0}for(c=i;c&&c.parentNode!==f;)c=c.parentNode;if(c)return q(c).index()>=h?-1:1;for(c=f;c&&c.parentNode!==i;)c=c.parentNode;if(c)return q(c).index()>=g?1:-1}},cloneRange:function(){var a=new M(this.doc);a.setStart(this.startContainer,this.startOffset);a.setEnd(this.endContainer,
this.endOffset);return a},toString:function(){var a=this.get();return(this.doc.createRange?a.toString():a.text).replace(/\r\n|\n|\r/g,"")},cloneContents:function(){return ha.call(this,true,false)},deleteContents:function(){return ha.call(this,false,true)},extractContents:function(){return ha.call(this,true,true)},insertNode:function(a){var b=this.startContainer,c=this.startOffset,d=this.endContainer,e=this.endOffset,f,i,h,g=1;if(a.nodeName.toLowerCase()==="#document-fragment"){f=a.firstChild;i=a.lastChild;
g=a.childNodes.length}if(b.nodeType==1)if(h=b.childNodes[c]){b.insertBefore(a,h);if(b===d)e+=g}else b.appendChild(a);else if(b.nodeType==3)if(c===0){b.parentNode.insertBefore(a,b);if(b.parentNode===d)e+=g}else if(c>=b.nodeValue.length)b.parentNode.appendChild(a);else{h=b.splitText(c);b.parentNode.insertBefore(a,h);if(b===d){d=h;e-=c}}if(f){this.setStartBefore(f);this.setEndAfter(i)}else this.selectNode(a);return this.setEnd(d,e)},surroundContents:function(a){a.appendChild(this.extractContents());
this.insertNode(a);return this.selectNode(a)},get:function(){var a=this.doc,b=this.startContainer,c=this.startOffset,d=this.endContainer,e=this.endOffset;if(a.createRange){a=a.createRange();try{a.setStart(b,c);a.setEnd(d,e)}catch(f){}}else{a=a.body.createTextRange();a.setEndPoint("StartToStart",Aa(b,c));a.setEndPoint("EndToStart",Aa(d,e))}return a},html:function(){return q(this.cloneContents()).outer()}};A.range=X;A.START_TO_START=P;A.START_TO_END=O;A.END_TO_END=Q;A.END_TO_START=N;Da.prototype={wrap:function(a){function b(u){D(C,
function(m,w){m!=="style"&&u.attr(m,w)});D(L,function(m,w){u.css(m,w)})}function c(u,m,w){var o=u.nodeValue.length,z=u,F=j.clone(false).get();if(m>0)z=u.splitText(m);w<o&&z.splitText(w-m);m=q(u.parentNode);if(z===u&&m.name===n)b(m);else{z.parentNode.insertBefore(F,z);F.appendChild(z);i===u&&f.setStartBefore(F);g===u&&f.setEndAfter(F)}}function d(u){var m=u.firstChild;if(u.nodeType==3){c(u,h,k);return false}for(var w,o;m;){u=X(e);u.selectNode(m);if(u.compareBoundaryPoints(N,f)>=0)return false;w=m.nextSibling;
if(u.compareBoundaryPoints(O,f)>0)if(m.nodeType==1){o=q(m);if(u.compareBoundaryPoints(P,f)>=0&&u.compareBoundaryPoints(Q,f)<=0&&o.name===n)b(o);else if(d(m)===false)return false}else if(m.nodeType==3)if(m==i&&m==g)c(m,h,k);else if(m==i)c(m,h,m.nodeValue.length);else m==g?c(m,0,k):c(m,0,m.nodeValue.length);m=w}}var e=this.doc,f=this.range,i=f.startContainer,h=f.startOffset,g=f.endContainer,k=f.endOffset,j=q(a,e);if(!j.isInline()){f.surroundContents(j.clone(false).get());return ia.call(this)}if(f.collapsed){a=
j.clone(false).get();f.insertNode(a);f.selectNodeContents(a);return ia.call(this)}var n=j.name,C=j.attr(),L=j.css();d(f.commonAncestorContainer);return ia.call(this)},remove:function(a){var b=this.range;if(b.collapsed)return this;var c=b.doc,d=b.endContainer,e=b.endOffset,f=b.cloneRange();f.collapse(true);var i=f.startContainer,h=f.startOffset,g=i.nodeType==3?i.parentNode:i;for(f=false;g&&g.parentNode;){var k=q(g);if(!k.isInline())break;if(!Y(k,a,"*")&&!Y(k,a))break;f=true;g=g.parentNode}if(f){a=
q("<span></span>",c);f=b.cloneRange();f.collapse(false);f.insertNode(a.get());c=X(c);c.setStartBefore(g.firstChild);c.setEnd(i,h);g=c.extractContents();c.insertNode(g);b.setStart(c.endContainer,c.endOffset);b.setEnd(d,e);console.log(i);console.log(h);console.log(d);console.log(e);b.setStart(i,h);b.setEnd(d,e)}console.log(b)},exec:function(a,b){return this[a.toLowerCase()](b)},state:function(a){var b=false;try{b=this.doc.queryCommandState(a)}catch(c){}return b},val:function(a){var b=this.doc,c=this.range;
a=a.toLowerCase();var d="";if(a==="fontfamily"||a==="fontname"){d=Ba(b,"fontname");d=d.replace(/['"]/g,"");return d.toLowerCase()}if(a==="formatblock"){d=Ba(b,a);if(d==="")if(a=Z(c,{"h1,h2,h3,h4,h5,h6,p,div,pre,address":"*"}))d=a.nodeName;if(d==="Normal")d="p";return d.toLowerCase()}if(a==="fontsize"){if(a=Z(c,{"*":".font-size"}))d=q(a).css("font-size");return d.toLowerCase()}if(a==="forecolor"){if(a=Z(c,{"*":".color"}))d=q(a).css("color");d=S(d);if(d==="")d="default";return d.toLowerCase()}if(a===
"hilitecolor"){Z(c,{"*":".background-color"});d=S(d);if(d==="")d="default";return d.toLowerCase()}return d},bold:function(){return this.wrap("<strong></strong>")},italic:function(){return this.wrap("<em></em>")},forecolor:function(a){return this.wrap('<span style="color:'+a+';"></span>')},hilitecolor:function(a){return this.wrap('<span style="background-color:'+a+';"></span>')},fontsize:function(a){return this.wrap('<span style="font-size:'+a+';"></span>')},fontname:function(a){return this.fontfamily(a)},
fontfamily:function(a){return this.wrap('<span style="font-family:'+a+';"></span>')},removeformat:function(){var a={"*":"class,style"};D(Ea,function(b){a[b]="*"});return this.remove(a)}};A.cmd=ja;A.edit=function(a,b){function c(h){return d.hasVal()?d.val(h):d.html(h)}var d=q(a),e=b.designMode===v?true:b.designMode,f=b.bodyClass,i=b.css;return{width:b.width||0,height:b.height||0,html:function(h){this.val(h)},val:function(h){return e?$.call(this,h):aa.call(this,h)},create:function(){function h(){var C=
ja(n);if(C)g.cmd=C}var g=this;if(g.iframe)return g;var k=q('<iframe class="ke-iframe" frameborder="0"></iframe>');k.css({display:"block",width:g.width,height:g.height});var j=q('<textarea class="ke-textarea"></textarea>');j.css({display:"block",width:g.width,height:g.height});e?j.hide():k.hide();d.before(k);d.before(j);d.hide();var n=Ja(k.get());n.open();n.write(Ka(f,i));n.close();n.body.contentEditable="true";g.iframe=k;g.textarea=j;g.doc=n;e?$.call(g,c()):aa.call(g,c());g.cmd=ja(n);g.oninput(h);
q(n).bind("mouseup",h);q(document).bind("mousedown",h);return g},remove:function(){var h=this.iframe,g=this.textarea,k=this.doc;if(!h)return this;q(k).unbind();q(k.body).unbind();q(document).unbind();d.show();c(this.val());h.remove();g.remove();this.iframe=this.textarea=null;return this},toggle:function(h){var g=this.iframe,k=this.textarea;if(!g)return this;if(h===v?!e:h){if(!e){k.hide();$.call(this,aa.call(this));g.show();e=true}}else if(e){g.hide();aa.call(this,$.call(this));k.show();e=false}return this},
toDesign:function(){return this.toggle(true)},toSource:function(){return this.toggle(false)},focus:function(){this.iframe&&e&&this.iframe.contentWindow.focus();return this},oninput:function(h){function g(n){setTimeout(function(){h(n)},1)}var k=this.doc,j=k.body;q(k).bind("keyup",function(n){if(!n.ctrlKey&&!n.altKey&&(n.keyCode<16||n.keyCode>18)&&n.keyCode!=116){h(n);n.stop()}});q(j).bind("paste",g);q(j).bind("cut",g);return this}}};ka=A;A=function(){};D(ka,function(a,b){A[a]=b});if(ba.K===v)ba.K=
A;ba.KindEditor=A})(window);