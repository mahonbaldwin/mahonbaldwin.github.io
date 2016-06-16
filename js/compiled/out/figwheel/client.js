// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25361 = cljs.core._EQ_;
var expr__25362 = (function (){var or__18370__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25365){if((e25365 instanceof Error)){
var e = e25365;
return false;
} else {
throw e25365;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25361.call(null,"true",expr__25362))){
return true;
} else {
if(cljs.core.truth_(pred__25361.call(null,"false",expr__25362))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25362)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25367){if((e25367 instanceof Error)){
var e = e25367;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25367;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19435__auto__ = [];
var len__19428__auto___25369 = arguments.length;
var i__19429__auto___25370 = (0);
while(true){
if((i__19429__auto___25370 < len__19428__auto___25369)){
args__19435__auto__.push((arguments[i__19429__auto___25370]));

var G__25371 = (i__19429__auto___25370 + (1));
i__19429__auto___25370 = G__25371;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25368){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25368));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25372){
var map__25375 = p__25372;
var map__25375__$1 = ((((!((map__25375 == null)))?((((map__25375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25375):map__25375);
var message = cljs.core.get.call(null,map__25375__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18358__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21024__auto___25537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___25537,ch){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___25537,ch){
return (function (state_25506){
var state_val_25507 = (state_25506[(1)]);
if((state_val_25507 === (7))){
var inst_25502 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25508_25538 = state_25506__$1;
(statearr_25508_25538[(2)] = inst_25502);

(statearr_25508_25538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (1))){
var state_25506__$1 = state_25506;
var statearr_25509_25539 = state_25506__$1;
(statearr_25509_25539[(2)] = null);

(statearr_25509_25539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (4))){
var inst_25459 = (state_25506[(7)]);
var inst_25459__$1 = (state_25506[(2)]);
var state_25506__$1 = (function (){var statearr_25510 = state_25506;
(statearr_25510[(7)] = inst_25459__$1);

return statearr_25510;
})();
if(cljs.core.truth_(inst_25459__$1)){
var statearr_25511_25540 = state_25506__$1;
(statearr_25511_25540[(1)] = (5));

} else {
var statearr_25512_25541 = state_25506__$1;
(statearr_25512_25541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (15))){
var inst_25466 = (state_25506[(8)]);
var inst_25481 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25466);
var inst_25482 = cljs.core.first.call(null,inst_25481);
var inst_25483 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25482);
var inst_25484 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25483)].join('');
var inst_25485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25484);
var state_25506__$1 = state_25506;
var statearr_25513_25542 = state_25506__$1;
(statearr_25513_25542[(2)] = inst_25485);

(statearr_25513_25542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (13))){
var inst_25490 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25514_25543 = state_25506__$1;
(statearr_25514_25543[(2)] = inst_25490);

(statearr_25514_25543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (6))){
var state_25506__$1 = state_25506;
var statearr_25515_25544 = state_25506__$1;
(statearr_25515_25544[(2)] = null);

(statearr_25515_25544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (17))){
var inst_25488 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25516_25545 = state_25506__$1;
(statearr_25516_25545[(2)] = inst_25488);

(statearr_25516_25545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (3))){
var inst_25504 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25506__$1,inst_25504);
} else {
if((state_val_25507 === (12))){
var inst_25465 = (state_25506[(9)]);
var inst_25479 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25465,opts);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25479)){
var statearr_25517_25546 = state_25506__$1;
(statearr_25517_25546[(1)] = (15));

} else {
var statearr_25518_25547 = state_25506__$1;
(statearr_25518_25547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (2))){
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25506__$1,(4),ch);
} else {
if((state_val_25507 === (11))){
var inst_25466 = (state_25506[(8)]);
var inst_25471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25472 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25466);
var inst_25473 = cljs.core.async.timeout.call(null,(1000));
var inst_25474 = [inst_25472,inst_25473];
var inst_25475 = (new cljs.core.PersistentVector(null,2,(5),inst_25471,inst_25474,null));
var state_25506__$1 = state_25506;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25506__$1,(14),inst_25475);
} else {
if((state_val_25507 === (9))){
var inst_25466 = (state_25506[(8)]);
var inst_25492 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25493 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25466);
var inst_25494 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25493);
var inst_25495 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25494)].join('');
var inst_25496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25495);
var state_25506__$1 = (function (){var statearr_25519 = state_25506;
(statearr_25519[(10)] = inst_25492);

return statearr_25519;
})();
var statearr_25520_25548 = state_25506__$1;
(statearr_25520_25548[(2)] = inst_25496);

(statearr_25520_25548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (5))){
var inst_25459 = (state_25506[(7)]);
var inst_25461 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25462 = (new cljs.core.PersistentArrayMap(null,2,inst_25461,null));
var inst_25463 = (new cljs.core.PersistentHashSet(null,inst_25462,null));
var inst_25464 = figwheel.client.focus_msgs.call(null,inst_25463,inst_25459);
var inst_25465 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25464);
var inst_25466 = cljs.core.first.call(null,inst_25464);
var inst_25467 = figwheel.client.autoload_QMARK_.call(null);
var state_25506__$1 = (function (){var statearr_25521 = state_25506;
(statearr_25521[(9)] = inst_25465);

(statearr_25521[(8)] = inst_25466);

return statearr_25521;
})();
if(cljs.core.truth_(inst_25467)){
var statearr_25522_25549 = state_25506__$1;
(statearr_25522_25549[(1)] = (8));

} else {
var statearr_25523_25550 = state_25506__$1;
(statearr_25523_25550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (14))){
var inst_25477 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25524_25551 = state_25506__$1;
(statearr_25524_25551[(2)] = inst_25477);

(statearr_25524_25551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (16))){
var state_25506__$1 = state_25506;
var statearr_25525_25552 = state_25506__$1;
(statearr_25525_25552[(2)] = null);

(statearr_25525_25552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (10))){
var inst_25498 = (state_25506[(2)]);
var state_25506__$1 = (function (){var statearr_25526 = state_25506;
(statearr_25526[(11)] = inst_25498);

return statearr_25526;
})();
var statearr_25527_25553 = state_25506__$1;
(statearr_25527_25553[(2)] = null);

(statearr_25527_25553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (8))){
var inst_25465 = (state_25506[(9)]);
var inst_25469 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25465,opts);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25469)){
var statearr_25528_25554 = state_25506__$1;
(statearr_25528_25554[(1)] = (11));

} else {
var statearr_25529_25555 = state_25506__$1;
(statearr_25529_25555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21024__auto___25537,ch))
;
return ((function (switch__20912__auto__,c__21024__auto___25537,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20913__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20913__auto____0 = (function (){
var statearr_25533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25533[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20913__auto__);

(statearr_25533[(1)] = (1));

return statearr_25533;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20913__auto____1 = (function (state_25506){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e25534){if((e25534 instanceof Object)){
var ex__20916__auto__ = e25534;
var statearr_25535_25556 = state_25506;
(statearr_25535_25556[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25557 = state_25506;
state_25506 = G__25557;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20913__auto__ = function(state_25506){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20913__auto____1.call(this,state_25506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20913__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20913__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___25537,ch))
})();
var state__21026__auto__ = (function (){var statearr_25536 = f__21025__auto__.call(null);
(statearr_25536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___25537);

return statearr_25536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___25537,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25558_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25558_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25565 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25565){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25563 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25564 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25564;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25563;
}}catch (e25562){if((e25562 instanceof Error)){
var e = e25562;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25565], null));
} else {
var e = e25562;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25565))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25566){
var map__25573 = p__25566;
var map__25573__$1 = ((((!((map__25573 == null)))?((((map__25573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);
var opts = map__25573__$1;
var build_id = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25573,map__25573__$1,opts,build_id){
return (function (p__25575){
var vec__25576 = p__25575;
var map__25577 = cljs.core.nth.call(null,vec__25576,(0),null);
var map__25577__$1 = ((((!((map__25577 == null)))?((((map__25577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25577):map__25577);
var msg = map__25577__$1;
var msg_name = cljs.core.get.call(null,map__25577__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25576,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25576,map__25577,map__25577__$1,msg,msg_name,_,map__25573,map__25573__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25576,map__25577,map__25577__$1,msg,msg_name,_,map__25573,map__25573__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25573,map__25573__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25583){
var vec__25584 = p__25583;
var map__25585 = cljs.core.nth.call(null,vec__25584,(0),null);
var map__25585__$1 = ((((!((map__25585 == null)))?((((map__25585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25585):map__25585);
var msg = map__25585__$1;
var msg_name = cljs.core.get.call(null,map__25585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25584,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25587){
var map__25597 = p__25587;
var map__25597__$1 = ((((!((map__25597 == null)))?((((map__25597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25597):map__25597);
var on_compile_warning = cljs.core.get.call(null,map__25597__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25597__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25597,map__25597__$1,on_compile_warning,on_compile_fail){
return (function (p__25599){
var vec__25600 = p__25599;
var map__25601 = cljs.core.nth.call(null,vec__25600,(0),null);
var map__25601__$1 = ((((!((map__25601 == null)))?((((map__25601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25601):map__25601);
var msg = map__25601__$1;
var msg_name = cljs.core.get.call(null,map__25601__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25600,(1));
var pred__25603 = cljs.core._EQ_;
var expr__25604 = msg_name;
if(cljs.core.truth_(pred__25603.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25604))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25603.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25604))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25597,map__25597__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__,msg_hist,msg_names,msg){
return (function (state_25820){
var state_val_25821 = (state_25820[(1)]);
if((state_val_25821 === (7))){
var inst_25744 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25744)){
var statearr_25822_25868 = state_25820__$1;
(statearr_25822_25868[(1)] = (8));

} else {
var statearr_25823_25869 = state_25820__$1;
(statearr_25823_25869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (20))){
var inst_25814 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25824_25870 = state_25820__$1;
(statearr_25824_25870[(2)] = inst_25814);

(statearr_25824_25870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (27))){
var inst_25810 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25825_25871 = state_25820__$1;
(statearr_25825_25871[(2)] = inst_25810);

(statearr_25825_25871[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (1))){
var inst_25737 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25737)){
var statearr_25826_25872 = state_25820__$1;
(statearr_25826_25872[(1)] = (2));

} else {
var statearr_25827_25873 = state_25820__$1;
(statearr_25827_25873[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (24))){
var inst_25812 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25828_25874 = state_25820__$1;
(statearr_25828_25874[(2)] = inst_25812);

(statearr_25828_25874[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (4))){
var inst_25818 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25820__$1,inst_25818);
} else {
if((state_val_25821 === (15))){
var inst_25816 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25829_25875 = state_25820__$1;
(statearr_25829_25875[(2)] = inst_25816);

(statearr_25829_25875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (21))){
var inst_25775 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25830_25876 = state_25820__$1;
(statearr_25830_25876[(2)] = inst_25775);

(statearr_25830_25876[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (31))){
var inst_25799 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25799)){
var statearr_25831_25877 = state_25820__$1;
(statearr_25831_25877[(1)] = (34));

} else {
var statearr_25832_25878 = state_25820__$1;
(statearr_25832_25878[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (32))){
var inst_25808 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25833_25879 = state_25820__$1;
(statearr_25833_25879[(2)] = inst_25808);

(statearr_25833_25879[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (33))){
var inst_25797 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25834_25880 = state_25820__$1;
(statearr_25834_25880[(2)] = inst_25797);

(statearr_25834_25880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (13))){
var inst_25758 = figwheel.client.heads_up.clear.call(null);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(16),inst_25758);
} else {
if((state_val_25821 === (22))){
var inst_25779 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25780 = figwheel.client.heads_up.append_message.call(null,inst_25779);
var state_25820__$1 = state_25820;
var statearr_25835_25881 = state_25820__$1;
(statearr_25835_25881[(2)] = inst_25780);

(statearr_25835_25881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (36))){
var inst_25806 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25836_25882 = state_25820__$1;
(statearr_25836_25882[(2)] = inst_25806);

(statearr_25836_25882[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (29))){
var inst_25790 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25837_25883 = state_25820__$1;
(statearr_25837_25883[(2)] = inst_25790);

(statearr_25837_25883[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (6))){
var inst_25739 = (state_25820[(7)]);
var state_25820__$1 = state_25820;
var statearr_25838_25884 = state_25820__$1;
(statearr_25838_25884[(2)] = inst_25739);

(statearr_25838_25884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (28))){
var inst_25786 = (state_25820[(2)]);
var inst_25787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25788 = figwheel.client.heads_up.display_warning.call(null,inst_25787);
var state_25820__$1 = (function (){var statearr_25839 = state_25820;
(statearr_25839[(8)] = inst_25786);

return statearr_25839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(29),inst_25788);
} else {
if((state_val_25821 === (25))){
var inst_25784 = figwheel.client.heads_up.clear.call(null);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(28),inst_25784);
} else {
if((state_val_25821 === (34))){
var inst_25801 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(37),inst_25801);
} else {
if((state_val_25821 === (17))){
var inst_25766 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25840_25885 = state_25820__$1;
(statearr_25840_25885[(2)] = inst_25766);

(statearr_25840_25885[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (3))){
var inst_25756 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25756)){
var statearr_25841_25886 = state_25820__$1;
(statearr_25841_25886[(1)] = (13));

} else {
var statearr_25842_25887 = state_25820__$1;
(statearr_25842_25887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (12))){
var inst_25752 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25843_25888 = state_25820__$1;
(statearr_25843_25888[(2)] = inst_25752);

(statearr_25843_25888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (2))){
var inst_25739 = (state_25820[(7)]);
var inst_25739__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25820__$1 = (function (){var statearr_25844 = state_25820;
(statearr_25844[(7)] = inst_25739__$1);

return statearr_25844;
})();
if(cljs.core.truth_(inst_25739__$1)){
var statearr_25845_25889 = state_25820__$1;
(statearr_25845_25889[(1)] = (5));

} else {
var statearr_25846_25890 = state_25820__$1;
(statearr_25846_25890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (23))){
var inst_25782 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25782)){
var statearr_25847_25891 = state_25820__$1;
(statearr_25847_25891[(1)] = (25));

} else {
var statearr_25848_25892 = state_25820__$1;
(statearr_25848_25892[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (35))){
var state_25820__$1 = state_25820;
var statearr_25849_25893 = state_25820__$1;
(statearr_25849_25893[(2)] = null);

(statearr_25849_25893[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (19))){
var inst_25777 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25777)){
var statearr_25850_25894 = state_25820__$1;
(statearr_25850_25894[(1)] = (22));

} else {
var statearr_25851_25895 = state_25820__$1;
(statearr_25851_25895[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (11))){
var inst_25748 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25852_25896 = state_25820__$1;
(statearr_25852_25896[(2)] = inst_25748);

(statearr_25852_25896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (9))){
var inst_25750 = figwheel.client.heads_up.clear.call(null);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(12),inst_25750);
} else {
if((state_val_25821 === (5))){
var inst_25741 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25820__$1 = state_25820;
var statearr_25853_25897 = state_25820__$1;
(statearr_25853_25897[(2)] = inst_25741);

(statearr_25853_25897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (14))){
var inst_25768 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25768)){
var statearr_25854_25898 = state_25820__$1;
(statearr_25854_25898[(1)] = (18));

} else {
var statearr_25855_25899 = state_25820__$1;
(statearr_25855_25899[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (26))){
var inst_25792 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25820__$1 = state_25820;
if(cljs.core.truth_(inst_25792)){
var statearr_25856_25900 = state_25820__$1;
(statearr_25856_25900[(1)] = (30));

} else {
var statearr_25857_25901 = state_25820__$1;
(statearr_25857_25901[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (16))){
var inst_25760 = (state_25820[(2)]);
var inst_25761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25762 = figwheel.client.format_messages.call(null,inst_25761);
var inst_25763 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25764 = figwheel.client.heads_up.display_error.call(null,inst_25762,inst_25763);
var state_25820__$1 = (function (){var statearr_25858 = state_25820;
(statearr_25858[(9)] = inst_25760);

return statearr_25858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(17),inst_25764);
} else {
if((state_val_25821 === (30))){
var inst_25794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25795 = figwheel.client.heads_up.display_warning.call(null,inst_25794);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(33),inst_25795);
} else {
if((state_val_25821 === (10))){
var inst_25754 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25859_25902 = state_25820__$1;
(statearr_25859_25902[(2)] = inst_25754);

(statearr_25859_25902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (18))){
var inst_25770 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25771 = figwheel.client.format_messages.call(null,inst_25770);
var inst_25772 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25773 = figwheel.client.heads_up.display_error.call(null,inst_25771,inst_25772);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(21),inst_25773);
} else {
if((state_val_25821 === (37))){
var inst_25803 = (state_25820[(2)]);
var state_25820__$1 = state_25820;
var statearr_25860_25903 = state_25820__$1;
(statearr_25860_25903[(2)] = inst_25803);

(statearr_25860_25903[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25821 === (8))){
var inst_25746 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25820__$1 = state_25820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25820__$1,(11),inst_25746);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21024__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20912__auto__,c__21024__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto____0 = (function (){
var statearr_25864 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25864[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto__);

(statearr_25864[(1)] = (1));

return statearr_25864;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto____1 = (function (state_25820){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e25865){if((e25865 instanceof Object)){
var ex__20916__auto__ = e25865;
var statearr_25866_25904 = state_25820;
(statearr_25866_25904[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25905 = state_25820;
state_25820 = G__25905;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto__ = function(state_25820){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto____1.call(this,state_25820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__,msg_hist,msg_names,msg))
})();
var state__21026__auto__ = (function (){var statearr_25867 = f__21025__auto__.call(null);
(statearr_25867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_25867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__,msg_hist,msg_names,msg))
);

return c__21024__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21024__auto___25968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___25968,ch){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___25968,ch){
return (function (state_25951){
var state_val_25952 = (state_25951[(1)]);
if((state_val_25952 === (1))){
var state_25951__$1 = state_25951;
var statearr_25953_25969 = state_25951__$1;
(statearr_25953_25969[(2)] = null);

(statearr_25953_25969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (2))){
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25951__$1,(4),ch);
} else {
if((state_val_25952 === (3))){
var inst_25949 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25951__$1,inst_25949);
} else {
if((state_val_25952 === (4))){
var inst_25939 = (state_25951[(7)]);
var inst_25939__$1 = (state_25951[(2)]);
var state_25951__$1 = (function (){var statearr_25954 = state_25951;
(statearr_25954[(7)] = inst_25939__$1);

return statearr_25954;
})();
if(cljs.core.truth_(inst_25939__$1)){
var statearr_25955_25970 = state_25951__$1;
(statearr_25955_25970[(1)] = (5));

} else {
var statearr_25956_25971 = state_25951__$1;
(statearr_25956_25971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (5))){
var inst_25939 = (state_25951[(7)]);
var inst_25941 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25939);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25951__$1,(8),inst_25941);
} else {
if((state_val_25952 === (6))){
var state_25951__$1 = state_25951;
var statearr_25957_25972 = state_25951__$1;
(statearr_25957_25972[(2)] = null);

(statearr_25957_25972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (7))){
var inst_25947 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
var statearr_25958_25973 = state_25951__$1;
(statearr_25958_25973[(2)] = inst_25947);

(statearr_25958_25973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25952 === (8))){
var inst_25943 = (state_25951[(2)]);
var state_25951__$1 = (function (){var statearr_25959 = state_25951;
(statearr_25959[(8)] = inst_25943);

return statearr_25959;
})();
var statearr_25960_25974 = state_25951__$1;
(statearr_25960_25974[(2)] = null);

(statearr_25960_25974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21024__auto___25968,ch))
;
return ((function (switch__20912__auto__,c__21024__auto___25968,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20913__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20913__auto____0 = (function (){
var statearr_25964 = [null,null,null,null,null,null,null,null,null];
(statearr_25964[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20913__auto__);

(statearr_25964[(1)] = (1));

return statearr_25964;
});
var figwheel$client$heads_up_plugin_$_state_machine__20913__auto____1 = (function (state_25951){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e25965){if((e25965 instanceof Object)){
var ex__20916__auto__ = e25965;
var statearr_25966_25975 = state_25951;
(statearr_25966_25975[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25976 = state_25951;
state_25951 = G__25976;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20913__auto__ = function(state_25951){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20913__auto____1.call(this,state_25951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20913__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20913__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___25968,ch))
})();
var state__21026__auto__ = (function (){var statearr_25967 = f__21025__auto__.call(null);
(statearr_25967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___25968);

return statearr_25967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___25968,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_25997){
var state_val_25998 = (state_25997[(1)]);
if((state_val_25998 === (1))){
var inst_25992 = cljs.core.async.timeout.call(null,(3000));
var state_25997__$1 = state_25997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25997__$1,(2),inst_25992);
} else {
if((state_val_25998 === (2))){
var inst_25994 = (state_25997[(2)]);
var inst_25995 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25997__$1 = (function (){var statearr_25999 = state_25997;
(statearr_25999[(7)] = inst_25994);

return statearr_25999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25997__$1,inst_25995);
} else {
return null;
}
}
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20913__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20913__auto____0 = (function (){
var statearr_26003 = [null,null,null,null,null,null,null,null];
(statearr_26003[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20913__auto__);

(statearr_26003[(1)] = (1));

return statearr_26003;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20913__auto____1 = (function (state_25997){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_25997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e26004){if((e26004 instanceof Object)){
var ex__20916__auto__ = e26004;
var statearr_26005_26007 = state_25997;
(statearr_26005_26007[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26008 = state_25997;
state_25997 = G__26008;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20913__auto__ = function(state_25997){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20913__auto____1.call(this,state_25997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20913__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20913__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_26006 = f__21025__auto__.call(null);
(statearr_26006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_26006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26009){
var map__26016 = p__26009;
var map__26016__$1 = ((((!((map__26016 == null)))?((((map__26016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26016):map__26016);
var ed = map__26016__$1;
var formatted_exception = cljs.core.get.call(null,map__26016__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26016__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26016__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26018_26022 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26019_26023 = null;
var count__26020_26024 = (0);
var i__26021_26025 = (0);
while(true){
if((i__26021_26025 < count__26020_26024)){
var msg_26026 = cljs.core._nth.call(null,chunk__26019_26023,i__26021_26025);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26026);

var G__26027 = seq__26018_26022;
var G__26028 = chunk__26019_26023;
var G__26029 = count__26020_26024;
var G__26030 = (i__26021_26025 + (1));
seq__26018_26022 = G__26027;
chunk__26019_26023 = G__26028;
count__26020_26024 = G__26029;
i__26021_26025 = G__26030;
continue;
} else {
var temp__4657__auto___26031 = cljs.core.seq.call(null,seq__26018_26022);
if(temp__4657__auto___26031){
var seq__26018_26032__$1 = temp__4657__auto___26031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26018_26032__$1)){
var c__19173__auto___26033 = cljs.core.chunk_first.call(null,seq__26018_26032__$1);
var G__26034 = cljs.core.chunk_rest.call(null,seq__26018_26032__$1);
var G__26035 = c__19173__auto___26033;
var G__26036 = cljs.core.count.call(null,c__19173__auto___26033);
var G__26037 = (0);
seq__26018_26022 = G__26034;
chunk__26019_26023 = G__26035;
count__26020_26024 = G__26036;
i__26021_26025 = G__26037;
continue;
} else {
var msg_26038 = cljs.core.first.call(null,seq__26018_26032__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26038);

var G__26039 = cljs.core.next.call(null,seq__26018_26032__$1);
var G__26040 = null;
var G__26041 = (0);
var G__26042 = (0);
seq__26018_26022 = G__26039;
chunk__26019_26023 = G__26040;
count__26020_26024 = G__26041;
i__26021_26025 = G__26042;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26043){
var map__26046 = p__26043;
var map__26046__$1 = ((((!((map__26046 == null)))?((((map__26046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26046):map__26046);
var w = map__26046__$1;
var message = cljs.core.get.call(null,map__26046__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26054 = cljs.core.seq.call(null,plugins);
var chunk__26055 = null;
var count__26056 = (0);
var i__26057 = (0);
while(true){
if((i__26057 < count__26056)){
var vec__26058 = cljs.core._nth.call(null,chunk__26055,i__26057);
var k = cljs.core.nth.call(null,vec__26058,(0),null);
var plugin = cljs.core.nth.call(null,vec__26058,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26060 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26054,chunk__26055,count__26056,i__26057,pl_26060,vec__26058,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26060.call(null,msg_hist);
});})(seq__26054,chunk__26055,count__26056,i__26057,pl_26060,vec__26058,k,plugin))
);
} else {
}

var G__26061 = seq__26054;
var G__26062 = chunk__26055;
var G__26063 = count__26056;
var G__26064 = (i__26057 + (1));
seq__26054 = G__26061;
chunk__26055 = G__26062;
count__26056 = G__26063;
i__26057 = G__26064;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26054);
if(temp__4657__auto__){
var seq__26054__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26054__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__26054__$1);
var G__26065 = cljs.core.chunk_rest.call(null,seq__26054__$1);
var G__26066 = c__19173__auto__;
var G__26067 = cljs.core.count.call(null,c__19173__auto__);
var G__26068 = (0);
seq__26054 = G__26065;
chunk__26055 = G__26066;
count__26056 = G__26067;
i__26057 = G__26068;
continue;
} else {
var vec__26059 = cljs.core.first.call(null,seq__26054__$1);
var k = cljs.core.nth.call(null,vec__26059,(0),null);
var plugin = cljs.core.nth.call(null,vec__26059,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26069 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26054,chunk__26055,count__26056,i__26057,pl_26069,vec__26059,k,plugin,seq__26054__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26069.call(null,msg_hist);
});})(seq__26054,chunk__26055,count__26056,i__26057,pl_26069,vec__26059,k,plugin,seq__26054__$1,temp__4657__auto__))
);
} else {
}

var G__26070 = cljs.core.next.call(null,seq__26054__$1);
var G__26071 = null;
var G__26072 = (0);
var G__26073 = (0);
seq__26054 = G__26070;
chunk__26055 = G__26071;
count__26056 = G__26072;
i__26057 = G__26073;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26074 = [];
var len__19428__auto___26077 = arguments.length;
var i__19429__auto___26078 = (0);
while(true){
if((i__19429__auto___26078 < len__19428__auto___26077)){
args26074.push((arguments[i__19429__auto___26078]));

var G__26079 = (i__19429__auto___26078 + (1));
i__19429__auto___26078 = G__26079;
continue;
} else {
}
break;
}

var G__26076 = args26074.length;
switch (G__26076) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26074.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26085 = arguments.length;
var i__19429__auto___26086 = (0);
while(true){
if((i__19429__auto___26086 < len__19428__auto___26085)){
args__19435__auto__.push((arguments[i__19429__auto___26086]));

var G__26087 = (i__19429__auto___26086 + (1));
i__19429__auto___26086 = G__26087;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26082){
var map__26083 = p__26082;
var map__26083__$1 = ((((!((map__26083 == null)))?((((map__26083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26083):map__26083);
var opts = map__26083__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26081){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26081));
});

//# sourceMappingURL=client.js.map?rel=1466046462958