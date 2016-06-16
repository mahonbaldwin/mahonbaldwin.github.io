// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24942_24956 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24943_24957 = null;
var count__24944_24958 = (0);
var i__24945_24959 = (0);
while(true){
if((i__24945_24959 < count__24944_24958)){
var f_24960 = cljs.core._nth.call(null,chunk__24943_24957,i__24945_24959);
cljs.core.println.call(null,"  ",f_24960);

var G__24961 = seq__24942_24956;
var G__24962 = chunk__24943_24957;
var G__24963 = count__24944_24958;
var G__24964 = (i__24945_24959 + (1));
seq__24942_24956 = G__24961;
chunk__24943_24957 = G__24962;
count__24944_24958 = G__24963;
i__24945_24959 = G__24964;
continue;
} else {
var temp__4657__auto___24965 = cljs.core.seq.call(null,seq__24942_24956);
if(temp__4657__auto___24965){
var seq__24942_24966__$1 = temp__4657__auto___24965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24942_24966__$1)){
var c__19173__auto___24967 = cljs.core.chunk_first.call(null,seq__24942_24966__$1);
var G__24968 = cljs.core.chunk_rest.call(null,seq__24942_24966__$1);
var G__24969 = c__19173__auto___24967;
var G__24970 = cljs.core.count.call(null,c__19173__auto___24967);
var G__24971 = (0);
seq__24942_24956 = G__24968;
chunk__24943_24957 = G__24969;
count__24944_24958 = G__24970;
i__24945_24959 = G__24971;
continue;
} else {
var f_24972 = cljs.core.first.call(null,seq__24942_24966__$1);
cljs.core.println.call(null,"  ",f_24972);

var G__24973 = cljs.core.next.call(null,seq__24942_24966__$1);
var G__24974 = null;
var G__24975 = (0);
var G__24976 = (0);
seq__24942_24956 = G__24973;
chunk__24943_24957 = G__24974;
count__24944_24958 = G__24975;
i__24945_24959 = G__24976;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24977 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24977);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24977)))?cljs.core.second.call(null,arglists_24977):arglists_24977));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24946 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24947 = null;
var count__24948 = (0);
var i__24949 = (0);
while(true){
if((i__24949 < count__24948)){
var vec__24950 = cljs.core._nth.call(null,chunk__24947,i__24949);
var name = cljs.core.nth.call(null,vec__24950,(0),null);
var map__24951 = cljs.core.nth.call(null,vec__24950,(1),null);
var map__24951__$1 = ((((!((map__24951 == null)))?((((map__24951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24951):map__24951);
var doc = cljs.core.get.call(null,map__24951__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24951__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24978 = seq__24946;
var G__24979 = chunk__24947;
var G__24980 = count__24948;
var G__24981 = (i__24949 + (1));
seq__24946 = G__24978;
chunk__24947 = G__24979;
count__24948 = G__24980;
i__24949 = G__24981;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24946);
if(temp__4657__auto__){
var seq__24946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24946__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__24946__$1);
var G__24982 = cljs.core.chunk_rest.call(null,seq__24946__$1);
var G__24983 = c__19173__auto__;
var G__24984 = cljs.core.count.call(null,c__19173__auto__);
var G__24985 = (0);
seq__24946 = G__24982;
chunk__24947 = G__24983;
count__24948 = G__24984;
i__24949 = G__24985;
continue;
} else {
var vec__24953 = cljs.core.first.call(null,seq__24946__$1);
var name = cljs.core.nth.call(null,vec__24953,(0),null);
var map__24954 = cljs.core.nth.call(null,vec__24953,(1),null);
var map__24954__$1 = ((((!((map__24954 == null)))?((((map__24954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24954):map__24954);
var doc = cljs.core.get.call(null,map__24954__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24954__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24986 = cljs.core.next.call(null,seq__24946__$1);
var G__24987 = null;
var G__24988 = (0);
var G__24989 = (0);
seq__24946 = G__24986;
chunk__24947 = G__24987;
count__24948 = G__24988;
i__24949 = G__24989;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1466046461951