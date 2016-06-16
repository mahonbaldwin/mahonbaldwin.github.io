// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('mb.ui');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__26181__delegate = function (x){
if(cljs.core.truth_(mb.ui.on_js_reload)){
return cljs.core.apply.call(null,mb.ui.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mb.ui/on-js-reload' is missing");
}
};
var G__26181 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__26182__i = 0, G__26182__a = new Array(arguments.length -  0);
while (G__26182__i < G__26182__a.length) {G__26182__a[G__26182__i] = arguments[G__26182__i + 0]; ++G__26182__i;}
  x = new cljs.core.IndexedSeq(G__26182__a,0);
} 
return G__26181__delegate.call(this,x);};
G__26181.cljs$lang$maxFixedArity = 0;
G__26181.cljs$lang$applyTo = (function (arglist__26183){
var x = cljs.core.seq(arglist__26183);
return G__26181__delegate(x);
});
G__26181.cljs$core$IFn$_invoke$arity$variadic = G__26181__delegate;
return G__26181;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1466046468856