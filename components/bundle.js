/* @ds-bundle: {"format":4,"namespace":"DeadPixel","components":[{"name":"Button"},{"name":"Icon"},{"name":"Link"},{"name":"Code"},{"name":"CodeBlock"},{"name":"Tag"},{"name":"TextField"},{"name":"Card"},{"name":"Alert"}]} */
(function(){
"use strict";
var React=window.React,h=React.createElement;
var ICONS={"add":["M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"],"arrow_back":["m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"],"arrow_forward":["M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"],"check":["M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"],"check_circle":["m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"],"close":["m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"],"code":["M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"],"content_copy":["M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"],"download":["M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"],"error":["M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"],"grid_on":["M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z"],"home":["M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"],"info":["M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"],"link":["M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"],"mail":["M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"],"menu":["M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"],"open_in_new":["M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"],"palette":["M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"],"search":["M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"],"settings":["m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"],"terminal":["M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"],"warning":["m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"]};

function cx(){var o=[];for(var i=0;i<arguments.length;i++){if(arguments[i])o.push(arguments[i]);}return o.join(" ");}
function omit(p,keys){var o={};for(var k in p){if(Object.prototype.hasOwnProperty.call(p,k)&&keys.indexOf(k)<0)o[k]=p[k];}return o;}

/* Icon: Material Symbols Outlined. Built-in names render as inline SVG (currentColor);
   any other name falls back to the Material Symbols font ligature. */
function Icon(p){
  var size=p.size||24, name=p.name, d=ICONS[name];
  var a11y=p.label?{role:"img","aria-label":p.label}:{"aria-hidden":"true"};
  if(d){
    return h("svg",Object.assign({className:cx("dp-icon",p.className),width:size,height:size,viewBox:"0 -960 960 960",fill:"currentColor",focusable:"false"},a11y),
      d.map(function(x,i){return h("path",{key:i,d:x});}));
  }
  return h("span",Object.assign({className:cx("dp-icon","dp-icon-font","material-symbols-outlined",p.className),style:{fontSize:size+"px"}},a11y),name);
}

function Button(p){
  var variant=p.variant||"primary", size=p.size||"md";
  var rest=omit(p,["variant","size","icon","iconAfter","className","children","href"]);
  var kids=[p.icon?h(Icon,{key:"i",name:p.icon,size:20}):null,p.children!=null?h("span",{key:"t"},p.children):null,p.iconAfter?h(Icon,{key:"a",name:p.iconAfter,size:20}):null];
  var cls=cx("dp-btn","dp-btn-"+variant,size==="sm"&&"dp-btn-sm",!p.children&&"dp-btn-icon",p.className);
  if(p.href) return h("a",Object.assign({className:cls,href:p.href},rest),kids);
  return h("button",Object.assign({type:"button",className:cls},rest),kids);
}

function Link(p){
  var rest=omit(p,["external","className","children"]);
  var ext=p.external?{target:"_blank",rel:"noopener noreferrer"}:{};
  return h("a",Object.assign({className:cx("dp-link",p.className)},ext,rest),p.children,
    p.external?h(Icon,{name:"open_in_new",size:16,label:"(opens in a new tab)"}):null);
}

function Code(p){return h("code",{className:cx("dp-code",p.className)},p.children);}

function CodeBlock(p){
  var st=React.useState(false),copied=st[0],setCopied=st[1];
  function copy(){
    try{navigator.clipboard.writeText(p.code).then(function(){setCopied(true);setTimeout(function(){setCopied(false);},1600);},function(){});}catch(e){}
  }
  var head=(p.filename||p.language||p.copyable!==false)?h("div",{className:"dp-codeblock-head"},
    h("span",{className:"dp-codeblock-name"},p.filename||p.language||""),
    p.copyable===false?null:h("button",{type:"button",className:"dp-codeblock-copy",onClick:copy,"aria-label":"Copy code"},h(Icon,{name:copied?"check":"content_copy",size:16}),h("span",null,copied?"Copied":"Copy"))):null;
  return h("figure",{className:cx("dp-codeblock",p.className)},head,
    h("pre",null,h("code",{className:p.language?"language-"+p.language:undefined},p.code)));
}

function Tag(p){
  return h("span",{className:cx("dp-tag","dp-tag-"+(p.tone||"neutral"),p.className)},p.children);
}

var uid=0;
function TextField(p){
  var r=React.useRef(null); if(!r.current) r.current=p.id||("dp-field-"+(++uid));
  var id=r.current, hintId=id+"-hint";
  var rest=omit(p,["label","hint","error","id","className","multiline"]);
  var el=p.multiline?"textarea":"input";
  var desc=(p.error||p.hint)?{"aria-describedby":hintId}:{};
  return h("div",{className:cx("dp-field",p.error&&"dp-field-invalid",p.className)},
    h("label",{htmlFor:id,className:"dp-field-label"},p.label),
    h(el,Object.assign({id:id,className:"dp-field-input","aria-invalid":p.error?"true":undefined},desc,rest)),
    p.error?h("p",{id:hintId,className:"dp-field-msg dp-field-error"},h(Icon,{name:"error",size:16}),p.error)
      :(p.hint?h("p",{id:hintId,className:"dp-field-msg"},p.hint):null));
}

function Card(p){
  var title=p.title?h("h3",{className:"dp-card-title"},p.href?h("a",{href:p.href},p.title):p.title):null;
  return h("article",{className:cx("dp-card",p.href&&"dp-card-link",p.className)},
    p.eyebrow?h("p",{className:"dp-card-eyebrow"},p.eyebrow):null, title,
    p.children!=null?h("div",{className:"dp-card-body"},p.children):null,
    p.footer?h("div",{className:"dp-card-footer"},p.footer):null);
}

var ALERT={info:{icon:"info",word:"Note"},success:{icon:"check_circle",word:"Done"},danger:{icon:"error",word:"Error"}};
function Alert(p){
  var tone=p.tone||"info", m=ALERT[tone]||ALERT.info;
  return h("div",{className:cx("dp-alert","dp-alert-"+tone,p.className),role:tone==="danger"?"alert":"status"},
    h(Icon,{name:m.icon,size:20}),
    h("div",{className:"dp-alert-text"},h("p",{className:"dp-alert-title"},p.title||m.word),p.children!=null?h("div",null,p.children):null));
}

function Breadcrumb(p){
  return h("nav",{className:cx("dp-breadcrumb",p.className),"aria-label":p.label||"Breadcrumb"},
    h("ol",null,(p.items||[]).map(function(item,i){
      var last=i===p.items.length-1;
      return h("li",{key:i,className:last?"is-current":undefined},last?h("span",{"aria-current":"page"},item.label):h("a",{href:item.href||"#"},item.label));
    })));
}

function Dropdown(p){
  var st=React.useState(false),open=st[0],setOpen=st[1];
  return h("div",{className:cx("dp-dropdown",open&&"is-open",p.className)},
    h("button",{type:"button",className:"dp-btn dp-btn-secondary dp-dropdown-toggle","aria-expanded":open,onClick:function(){setOpen(!open);}},p.label||"Options"),
    open?h("div",{className:"dp-dropdown-menu",role:"menu"},(p.items||[]).map(function(item,i){return h("button",{type:"button",role:"menuitem",key:i,onClick:function(){setOpen(false);if(item.onClick)item.onClick();}},item.label);})):null);
}

function Tabs(p){
  var items=p.items||[],st=React.useState(0),active=st[0],setActive=st[1];
  return h("div",{className:cx("dp-tabs",p.className)},
    h("div",{className:"dp-tab-list",role:"tablist"},items.map(function(item,i){return h("button",{type:"button",role:"tab",key:i,className:i===active?"is-active":undefined,"aria-selected":i===active,onClick:function(){setActive(i);}},item.label);})),
    items[active]?h("div",{className:"dp-tab-panel",role:"tabpanel"},items[active].content):null);
}

function Accordion(p){
  var st=React.useState(null),active=st[0],setActive=st[1];
  return h("div",{className:cx("dp-accordion",p.className)},(p.items||[]).map(function(item,i){var open=active===i;return h("div",{className:cx("dp-accordion-item",open&&"is-open"),key:i},
    h("h3",null,h("button",{type:"button","aria-expanded":open,onClick:function(){setActive(open?null:i);}},item.title,h("span",{className:"dp-accordion-icon","aria-hidden":"true"},open?"−":"+"))),
    open?h("div",{className:"dp-accordion-panel"},item.content):null);}));
}

function Progress(p){var value=Math.max(0,Math.min(100,Number(p.value)||0));return h("div",{className:cx("dp-progress",p.className),role:"progressbar","aria-valuenow":value,"aria-valuemin":0,"aria-valuemax":100,"aria-label":p.label||"Progress"},h("span",{style:{width:value+"%"}}),p.showValue?h("strong",null,value+"%"):null);}
function Spinner(p){return h("span",{className:cx("dp-spinner",p.size&&"dp-spinner-"+p.size,p.className),role:"status","aria-label":p.label||"Loading"});}
function Pagination(p){var count=Math.max(1,p.pages||1),current=Math.max(1,Math.min(count,p.current||1));return h("nav",{className:cx("dp-pagination",p.className),"aria-label":p.label||"Pagination"},h("button",{type:"button",disabled:current===1,onClick:function(){if(p.onChange)p.onChange(current-1);}},"Previous"),h("ol",null,Array.from({length:count},function(_,i){var page=i+1;return h("li",{key:page},h("button",{type:"button",className:page===current?"is-active":undefined,"aria-current":page===current?"page":undefined,onClick:function(){if(p.onChange)p.onChange(page);}},page));})),h("button",{type:"button",disabled:current===count,onClick:function(){if(p.onChange)p.onChange(current+1);}},"Next"));}
function Table(p){return h("div",{className:cx("dp-table-wrap",p.className)},h("table",null,p.caption?h("caption",null,p.caption):null,h("thead",null,h("tr",null,(p.headers||[]).map(function(x,i){return h("th",{scope:"col",key:i},x);}))),h("tbody",null,(p.rows||[]).map(function(row,i){return h("tr",{key:i},row.map(function(cell,j){return h(j===0?"th":"td",j===0?{scope:"row",key:j}:{key:j},cell);}));}))));}
function SelectField(p){var id=p.id||"dp-select-"+(++uid);return h("div",{className:cx("dp-field",p.className)},h("label",{htmlFor:id,className:"dp-field-label"},p.label),h("select",{id:id,className:"dp-field-input",defaultValue:p.defaultValue||""},(p.options||[]).map(function(o,i){return h("option",{value:o.value,key:i},o.label);})),p.hint?h("p",{className:"dp-field-msg"},p.hint):null);}

window.DeadPixel=Object.assign(window.DeadPixel||{},{Button:Button,Icon:Icon,Link:Link,Code:Code,CodeBlock:CodeBlock,Tag:Tag,TextField:TextField,Card:Card,Alert:Alert,Breadcrumb:Breadcrumb,Dropdown:Dropdown,Tabs:Tabs,Accordion:Accordion,Progress:Progress,Spinner:Spinner,Pagination:Pagination,Table:Table,SelectField:SelectField});
})();
