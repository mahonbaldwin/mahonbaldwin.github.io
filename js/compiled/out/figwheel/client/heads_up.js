// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19435__auto__ = [];
var len__19428__auto___25127 = arguments.length;
var i__19429__auto___25128 = (0);
while(true){
if((i__19429__auto___25128 < len__19428__auto___25127)){
args__19435__auto__.push((arguments[i__19429__auto___25128]));

var G__25129 = (i__19429__auto___25128 + (1));
i__19429__auto___25128 = G__25129;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((2) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19436__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25119_25130 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25120_25131 = null;
var count__25121_25132 = (0);
var i__25122_25133 = (0);
while(true){
if((i__25122_25133 < count__25121_25132)){
var k_25134 = cljs.core._nth.call(null,chunk__25120_25131,i__25122_25133);
e.setAttribute(cljs.core.name.call(null,k_25134),cljs.core.get.call(null,attrs,k_25134));

var G__25135 = seq__25119_25130;
var G__25136 = chunk__25120_25131;
var G__25137 = count__25121_25132;
var G__25138 = (i__25122_25133 + (1));
seq__25119_25130 = G__25135;
chunk__25120_25131 = G__25136;
count__25121_25132 = G__25137;
i__25122_25133 = G__25138;
continue;
} else {
var temp__4657__auto___25139 = cljs.core.seq.call(null,seq__25119_25130);
if(temp__4657__auto___25139){
var seq__25119_25140__$1 = temp__4657__auto___25139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25119_25140__$1)){
var c__19173__auto___25141 = cljs.core.chunk_first.call(null,seq__25119_25140__$1);
var G__25142 = cljs.core.chunk_rest.call(null,seq__25119_25140__$1);
var G__25143 = c__19173__auto___25141;
var G__25144 = cljs.core.count.call(null,c__19173__auto___25141);
var G__25145 = (0);
seq__25119_25130 = G__25142;
chunk__25120_25131 = G__25143;
count__25121_25132 = G__25144;
i__25122_25133 = G__25145;
continue;
} else {
var k_25146 = cljs.core.first.call(null,seq__25119_25140__$1);
e.setAttribute(cljs.core.name.call(null,k_25146),cljs.core.get.call(null,attrs,k_25146));

var G__25147 = cljs.core.next.call(null,seq__25119_25140__$1);
var G__25148 = null;
var G__25149 = (0);
var G__25150 = (0);
seq__25119_25130 = G__25147;
chunk__25120_25131 = G__25148;
count__25121_25132 = G__25149;
i__25122_25133 = G__25150;
continue;
}
} else {
}
}
break;
}

var seq__25123_25151 = cljs.core.seq.call(null,children);
var chunk__25124_25152 = null;
var count__25125_25153 = (0);
var i__25126_25154 = (0);
while(true){
if((i__25126_25154 < count__25125_25153)){
var ch_25155 = cljs.core._nth.call(null,chunk__25124_25152,i__25126_25154);
e.appendChild(ch_25155);

var G__25156 = seq__25123_25151;
var G__25157 = chunk__25124_25152;
var G__25158 = count__25125_25153;
var G__25159 = (i__25126_25154 + (1));
seq__25123_25151 = G__25156;
chunk__25124_25152 = G__25157;
count__25125_25153 = G__25158;
i__25126_25154 = G__25159;
continue;
} else {
var temp__4657__auto___25160 = cljs.core.seq.call(null,seq__25123_25151);
if(temp__4657__auto___25160){
var seq__25123_25161__$1 = temp__4657__auto___25160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25123_25161__$1)){
var c__19173__auto___25162 = cljs.core.chunk_first.call(null,seq__25123_25161__$1);
var G__25163 = cljs.core.chunk_rest.call(null,seq__25123_25161__$1);
var G__25164 = c__19173__auto___25162;
var G__25165 = cljs.core.count.call(null,c__19173__auto___25162);
var G__25166 = (0);
seq__25123_25151 = G__25163;
chunk__25124_25152 = G__25164;
count__25125_25153 = G__25165;
i__25126_25154 = G__25166;
continue;
} else {
var ch_25167 = cljs.core.first.call(null,seq__25123_25161__$1);
e.appendChild(ch_25167);

var G__25168 = cljs.core.next.call(null,seq__25123_25161__$1);
var G__25169 = null;
var G__25170 = (0);
var G__25171 = (0);
seq__25123_25151 = G__25168;
chunk__25124_25152 = G__25169;
count__25125_25153 = G__25170;
i__25126_25154 = G__25171;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25116){
var G__25117 = cljs.core.first.call(null,seq25116);
var seq25116__$1 = cljs.core.next.call(null,seq25116);
var G__25118 = cljs.core.first.call(null,seq25116__$1);
var seq25116__$2 = cljs.core.next.call(null,seq25116__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25117,G__25118,seq25116__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19283__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19284__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19285__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19286__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19287__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__,hierarchy__19287__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19287__auto__,method_table__19283__auto__,prefer_table__19284__auto__,method_cache__19285__auto__,cached_hierarchy__19286__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25172 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25172.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25172.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25172.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25172);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25173,st_map){
var map__25178 = p__25173;
var map__25178__$1 = ((((!((map__25178 == null)))?((((map__25178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25178):map__25178);
var container_el = cljs.core.get.call(null,map__25178__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25178,map__25178__$1,container_el){
return (function (p__25180){
var vec__25181 = p__25180;
var k = cljs.core.nth.call(null,vec__25181,(0),null);
var v = cljs.core.nth.call(null,vec__25181,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25178,map__25178__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25182,dom_str){
var map__25185 = p__25182;
var map__25185__$1 = ((((!((map__25185 == null)))?((((map__25185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25185):map__25185);
var c = map__25185__$1;
var content_area_el = cljs.core.get.call(null,map__25185__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25187){
var map__25190 = p__25187;
var map__25190__$1 = ((((!((map__25190 == null)))?((((map__25190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25190):map__25190);
var content_area_el = cljs.core.get.call(null,map__25190__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_25233){
var state_val_25234 = (state_25233[(1)]);
if((state_val_25234 === (1))){
var inst_25218 = (state_25233[(7)]);
var inst_25218__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25219 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25220 = ["10px","10px","100%","68px","1.0"];
var inst_25221 = cljs.core.PersistentHashMap.fromArrays(inst_25219,inst_25220);
var inst_25222 = cljs.core.merge.call(null,inst_25221,style);
var inst_25223 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25218__$1,inst_25222);
var inst_25224 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25218__$1,msg);
var inst_25225 = cljs.core.async.timeout.call(null,(300));
var state_25233__$1 = (function (){var statearr_25235 = state_25233;
(statearr_25235[(8)] = inst_25224);

(statearr_25235[(7)] = inst_25218__$1);

(statearr_25235[(9)] = inst_25223);

return statearr_25235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25233__$1,(2),inst_25225);
} else {
if((state_val_25234 === (2))){
var inst_25218 = (state_25233[(7)]);
var inst_25227 = (state_25233[(2)]);
var inst_25228 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25229 = ["auto"];
var inst_25230 = cljs.core.PersistentHashMap.fromArrays(inst_25228,inst_25229);
var inst_25231 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25218,inst_25230);
var state_25233__$1 = (function (){var statearr_25236 = state_25233;
(statearr_25236[(10)] = inst_25227);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25233__$1,inst_25231);
} else {
return null;
}
}
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto____0 = (function (){
var statearr_25240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25240[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto__);

(statearr_25240[(1)] = (1));

return statearr_25240;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto____1 = (function (state_25233){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e25241){if((e25241 instanceof Object)){
var ex__20916__auto__ = e25241;
var statearr_25242_25244 = state_25233;
(statearr_25242_25244[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25245 = state_25233;
state_25233 = G__25245;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto__ = function(state_25233){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto____1.call(this,state_25233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_25243 = f__21025__auto__.call(null);
(statearr_25243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_25243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__25247 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__25247,(0),null);
var ln = cljs.core.nth.call(null,vec__25247,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25250 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25250,(0),null);
var file_line = cljs.core.nth.call(null,vec__25250,(1),null);
var file_column = cljs.core.nth.call(null,vec__25250,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25250,file_name,file_line,file_column){
return (function (p1__25248_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25248_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25250,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18370__auto__ = file_line;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var and__18358__auto__ = cause;
if(cljs.core.truth_(and__18358__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18358__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25253 = figwheel.client.heads_up.ensure_container.call(null);
var map__25253__$1 = ((((!((map__25253 == null)))?((((map__25253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25253):map__25253);
var content_area_el = cljs.core.get.call(null,map__25253__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_25301){
var state_val_25302 = (state_25301[(1)]);
if((state_val_25302 === (1))){
var inst_25284 = (state_25301[(7)]);
var inst_25284__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25285 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25286 = ["0.0"];
var inst_25287 = cljs.core.PersistentHashMap.fromArrays(inst_25285,inst_25286);
var inst_25288 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25284__$1,inst_25287);
var inst_25289 = cljs.core.async.timeout.call(null,(300));
var state_25301__$1 = (function (){var statearr_25303 = state_25301;
(statearr_25303[(7)] = inst_25284__$1);

(statearr_25303[(8)] = inst_25288);

return statearr_25303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25301__$1,(2),inst_25289);
} else {
if((state_val_25302 === (2))){
var inst_25284 = (state_25301[(7)]);
var inst_25291 = (state_25301[(2)]);
var inst_25292 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25293 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25294 = cljs.core.PersistentHashMap.fromArrays(inst_25292,inst_25293);
var inst_25295 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25284,inst_25294);
var inst_25296 = cljs.core.async.timeout.call(null,(200));
var state_25301__$1 = (function (){var statearr_25304 = state_25301;
(statearr_25304[(9)] = inst_25291);

(statearr_25304[(10)] = inst_25295);

return statearr_25304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25301__$1,(3),inst_25296);
} else {
if((state_val_25302 === (3))){
var inst_25284 = (state_25301[(7)]);
var inst_25298 = (state_25301[(2)]);
var inst_25299 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25284,"");
var state_25301__$1 = (function (){var statearr_25305 = state_25301;
(statearr_25305[(11)] = inst_25298);

return statearr_25305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else {
return null;
}
}
}
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20913__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20913__auto____0 = (function (){
var statearr_25309 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25309[(0)] = figwheel$client$heads_up$clear_$_state_machine__20913__auto__);

(statearr_25309[(1)] = (1));

return statearr_25309;
});
var figwheel$client$heads_up$clear_$_state_machine__20913__auto____1 = (function (state_25301){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e25310){if((e25310 instanceof Object)){
var ex__20916__auto__ = e25310;
var statearr_25311_25313 = state_25301;
(statearr_25311_25313[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25314 = state_25301;
state_25301 = G__25314;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20913__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20913__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20913__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20913__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_25312 = f__21025__auto__.call(null);
(statearr_25312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_25312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_25346){
var state_val_25347 = (state_25346[(1)]);
if((state_val_25347 === (1))){
var inst_25336 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25346__$1,(2),inst_25336);
} else {
if((state_val_25347 === (2))){
var inst_25338 = (state_25346[(2)]);
var inst_25339 = cljs.core.async.timeout.call(null,(400));
var state_25346__$1 = (function (){var statearr_25348 = state_25346;
(statearr_25348[(7)] = inst_25338);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25346__$1,(3),inst_25339);
} else {
if((state_val_25347 === (3))){
var inst_25341 = (state_25346[(2)]);
var inst_25342 = figwheel.client.heads_up.clear.call(null);
var state_25346__$1 = (function (){var statearr_25349 = state_25346;
(statearr_25349[(8)] = inst_25341);

return statearr_25349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25346__$1,(4),inst_25342);
} else {
if((state_val_25347 === (4))){
var inst_25344 = (state_25346[(2)]);
var state_25346__$1 = state_25346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25346__$1,inst_25344);
} else {
return null;
}
}
}
}
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto____0 = (function (){
var statearr_25353 = [null,null,null,null,null,null,null,null,null];
(statearr_25353[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto__);

(statearr_25353[(1)] = (1));

return statearr_25353;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto____1 = (function (state_25346){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e25354){if((e25354 instanceof Object)){
var ex__20916__auto__ = e25354;
var statearr_25355_25357 = state_25346;
(statearr_25355_25357[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25358 = state_25346;
state_25346 = G__25358;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto__ = function(state_25346){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto____1.call(this,state_25346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_25356 = f__21025__auto__.call(null);
(statearr_25356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_25356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1466046462547