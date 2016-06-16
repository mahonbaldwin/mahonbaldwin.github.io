// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18370__auto__){
return or__18370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23918_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23918_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23923 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23924 = null;
var count__23925 = (0);
var i__23926 = (0);
while(true){
if((i__23926 < count__23925)){
var n = cljs.core._nth.call(null,chunk__23924,i__23926);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23927 = seq__23923;
var G__23928 = chunk__23924;
var G__23929 = count__23925;
var G__23930 = (i__23926 + (1));
seq__23923 = G__23927;
chunk__23924 = G__23928;
count__23925 = G__23929;
i__23926 = G__23930;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23923);
if(temp__4657__auto__){
var seq__23923__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23923__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23923__$1);
var G__23931 = cljs.core.chunk_rest.call(null,seq__23923__$1);
var G__23932 = c__19173__auto__;
var G__23933 = cljs.core.count.call(null,c__19173__auto__);
var G__23934 = (0);
seq__23923 = G__23931;
chunk__23924 = G__23932;
count__23925 = G__23933;
i__23926 = G__23934;
continue;
} else {
var n = cljs.core.first.call(null,seq__23923__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23935 = cljs.core.next.call(null,seq__23923__$1);
var G__23936 = null;
var G__23937 = (0);
var G__23938 = (0);
seq__23923 = G__23935;
chunk__23924 = G__23936;
count__23925 = G__23937;
i__23926 = G__23938;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23977_23984 = cljs.core.seq.call(null,deps);
var chunk__23978_23985 = null;
var count__23979_23986 = (0);
var i__23980_23987 = (0);
while(true){
if((i__23980_23987 < count__23979_23986)){
var dep_23988 = cljs.core._nth.call(null,chunk__23978_23985,i__23980_23987);
topo_sort_helper_STAR_.call(null,dep_23988,(depth + (1)),state);

var G__23989 = seq__23977_23984;
var G__23990 = chunk__23978_23985;
var G__23991 = count__23979_23986;
var G__23992 = (i__23980_23987 + (1));
seq__23977_23984 = G__23989;
chunk__23978_23985 = G__23990;
count__23979_23986 = G__23991;
i__23980_23987 = G__23992;
continue;
} else {
var temp__4657__auto___23993 = cljs.core.seq.call(null,seq__23977_23984);
if(temp__4657__auto___23993){
var seq__23977_23994__$1 = temp__4657__auto___23993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23977_23994__$1)){
var c__19173__auto___23995 = cljs.core.chunk_first.call(null,seq__23977_23994__$1);
var G__23996 = cljs.core.chunk_rest.call(null,seq__23977_23994__$1);
var G__23997 = c__19173__auto___23995;
var G__23998 = cljs.core.count.call(null,c__19173__auto___23995);
var G__23999 = (0);
seq__23977_23984 = G__23996;
chunk__23978_23985 = G__23997;
count__23979_23986 = G__23998;
i__23980_23987 = G__23999;
continue;
} else {
var dep_24000 = cljs.core.first.call(null,seq__23977_23994__$1);
topo_sort_helper_STAR_.call(null,dep_24000,(depth + (1)),state);

var G__24001 = cljs.core.next.call(null,seq__23977_23994__$1);
var G__24002 = null;
var G__24003 = (0);
var G__24004 = (0);
seq__23977_23984 = G__24001;
chunk__23978_23985 = G__24002;
count__23979_23986 = G__24003;
i__23980_23987 = G__24004;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23981){
var vec__23983 = p__23981;
var x = cljs.core.nth.call(null,vec__23983,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23983,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23983,x,xs,get_deps__$1){
return (function (p1__23939_SHARP_){
return clojure.set.difference.call(null,p1__23939_SHARP_,x);
});})(vec__23983,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24017 = cljs.core.seq.call(null,provides);
var chunk__24018 = null;
var count__24019 = (0);
var i__24020 = (0);
while(true){
if((i__24020 < count__24019)){
var prov = cljs.core._nth.call(null,chunk__24018,i__24020);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24021_24029 = cljs.core.seq.call(null,requires);
var chunk__24022_24030 = null;
var count__24023_24031 = (0);
var i__24024_24032 = (0);
while(true){
if((i__24024_24032 < count__24023_24031)){
var req_24033 = cljs.core._nth.call(null,chunk__24022_24030,i__24024_24032);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24033,prov);

var G__24034 = seq__24021_24029;
var G__24035 = chunk__24022_24030;
var G__24036 = count__24023_24031;
var G__24037 = (i__24024_24032 + (1));
seq__24021_24029 = G__24034;
chunk__24022_24030 = G__24035;
count__24023_24031 = G__24036;
i__24024_24032 = G__24037;
continue;
} else {
var temp__4657__auto___24038 = cljs.core.seq.call(null,seq__24021_24029);
if(temp__4657__auto___24038){
var seq__24021_24039__$1 = temp__4657__auto___24038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24021_24039__$1)){
var c__19173__auto___24040 = cljs.core.chunk_first.call(null,seq__24021_24039__$1);
var G__24041 = cljs.core.chunk_rest.call(null,seq__24021_24039__$1);
var G__24042 = c__19173__auto___24040;
var G__24043 = cljs.core.count.call(null,c__19173__auto___24040);
var G__24044 = (0);
seq__24021_24029 = G__24041;
chunk__24022_24030 = G__24042;
count__24023_24031 = G__24043;
i__24024_24032 = G__24044;
continue;
} else {
var req_24045 = cljs.core.first.call(null,seq__24021_24039__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24045,prov);

var G__24046 = cljs.core.next.call(null,seq__24021_24039__$1);
var G__24047 = null;
var G__24048 = (0);
var G__24049 = (0);
seq__24021_24029 = G__24046;
chunk__24022_24030 = G__24047;
count__24023_24031 = G__24048;
i__24024_24032 = G__24049;
continue;
}
} else {
}
}
break;
}

var G__24050 = seq__24017;
var G__24051 = chunk__24018;
var G__24052 = count__24019;
var G__24053 = (i__24020 + (1));
seq__24017 = G__24050;
chunk__24018 = G__24051;
count__24019 = G__24052;
i__24020 = G__24053;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24017);
if(temp__4657__auto__){
var seq__24017__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24017__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__24017__$1);
var G__24054 = cljs.core.chunk_rest.call(null,seq__24017__$1);
var G__24055 = c__19173__auto__;
var G__24056 = cljs.core.count.call(null,c__19173__auto__);
var G__24057 = (0);
seq__24017 = G__24054;
chunk__24018 = G__24055;
count__24019 = G__24056;
i__24020 = G__24057;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24017__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24025_24058 = cljs.core.seq.call(null,requires);
var chunk__24026_24059 = null;
var count__24027_24060 = (0);
var i__24028_24061 = (0);
while(true){
if((i__24028_24061 < count__24027_24060)){
var req_24062 = cljs.core._nth.call(null,chunk__24026_24059,i__24028_24061);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24062,prov);

var G__24063 = seq__24025_24058;
var G__24064 = chunk__24026_24059;
var G__24065 = count__24027_24060;
var G__24066 = (i__24028_24061 + (1));
seq__24025_24058 = G__24063;
chunk__24026_24059 = G__24064;
count__24027_24060 = G__24065;
i__24028_24061 = G__24066;
continue;
} else {
var temp__4657__auto___24067__$1 = cljs.core.seq.call(null,seq__24025_24058);
if(temp__4657__auto___24067__$1){
var seq__24025_24068__$1 = temp__4657__auto___24067__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24025_24068__$1)){
var c__19173__auto___24069 = cljs.core.chunk_first.call(null,seq__24025_24068__$1);
var G__24070 = cljs.core.chunk_rest.call(null,seq__24025_24068__$1);
var G__24071 = c__19173__auto___24069;
var G__24072 = cljs.core.count.call(null,c__19173__auto___24069);
var G__24073 = (0);
seq__24025_24058 = G__24070;
chunk__24026_24059 = G__24071;
count__24027_24060 = G__24072;
i__24028_24061 = G__24073;
continue;
} else {
var req_24074 = cljs.core.first.call(null,seq__24025_24068__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24074,prov);

var G__24075 = cljs.core.next.call(null,seq__24025_24068__$1);
var G__24076 = null;
var G__24077 = (0);
var G__24078 = (0);
seq__24025_24058 = G__24075;
chunk__24026_24059 = G__24076;
count__24027_24060 = G__24077;
i__24028_24061 = G__24078;
continue;
}
} else {
}
}
break;
}

var G__24079 = cljs.core.next.call(null,seq__24017__$1);
var G__24080 = null;
var G__24081 = (0);
var G__24082 = (0);
seq__24017 = G__24079;
chunk__24018 = G__24080;
count__24019 = G__24081;
i__24020 = G__24082;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24087_24091 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24088_24092 = null;
var count__24089_24093 = (0);
var i__24090_24094 = (0);
while(true){
if((i__24090_24094 < count__24089_24093)){
var ns_24095 = cljs.core._nth.call(null,chunk__24088_24092,i__24090_24094);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24095);

var G__24096 = seq__24087_24091;
var G__24097 = chunk__24088_24092;
var G__24098 = count__24089_24093;
var G__24099 = (i__24090_24094 + (1));
seq__24087_24091 = G__24096;
chunk__24088_24092 = G__24097;
count__24089_24093 = G__24098;
i__24090_24094 = G__24099;
continue;
} else {
var temp__4657__auto___24100 = cljs.core.seq.call(null,seq__24087_24091);
if(temp__4657__auto___24100){
var seq__24087_24101__$1 = temp__4657__auto___24100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24087_24101__$1)){
var c__19173__auto___24102 = cljs.core.chunk_first.call(null,seq__24087_24101__$1);
var G__24103 = cljs.core.chunk_rest.call(null,seq__24087_24101__$1);
var G__24104 = c__19173__auto___24102;
var G__24105 = cljs.core.count.call(null,c__19173__auto___24102);
var G__24106 = (0);
seq__24087_24091 = G__24103;
chunk__24088_24092 = G__24104;
count__24089_24093 = G__24105;
i__24090_24094 = G__24106;
continue;
} else {
var ns_24107 = cljs.core.first.call(null,seq__24087_24101__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24107);

var G__24108 = cljs.core.next.call(null,seq__24087_24101__$1);
var G__24109 = null;
var G__24110 = (0);
var G__24111 = (0);
seq__24087_24091 = G__24108;
chunk__24088_24092 = G__24109;
count__24089_24093 = G__24110;
i__24090_24094 = G__24111;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18370__auto__ = goog.require__;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24112__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24113__i = 0, G__24113__a = new Array(arguments.length -  0);
while (G__24113__i < G__24113__a.length) {G__24113__a[G__24113__i] = arguments[G__24113__i + 0]; ++G__24113__i;}
  args = new cljs.core.IndexedSeq(G__24113__a,0);
} 
return G__24112__delegate.call(this,args);};
G__24112.cljs$lang$maxFixedArity = 0;
G__24112.cljs$lang$applyTo = (function (arglist__24114){
var args = cljs.core.seq(arglist__24114);
return G__24112__delegate(args);
});
G__24112.cljs$core$IFn$_invoke$arity$variadic = G__24112__delegate;
return G__24112;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24116 = cljs.core._EQ_;
var expr__24117 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24116.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24117))){
var path_parts = ((function (pred__24116,expr__24117){
return (function (p1__24115_SHARP_){
return clojure.string.split.call(null,p1__24115_SHARP_,/[\/\\]/);
});})(pred__24116,expr__24117))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24116,expr__24117){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24119){if((e24119 instanceof Error)){
var e = e24119;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24119;

}
}})());
});
;})(path_parts,sep,root,pred__24116,expr__24117))
} else {
if(cljs.core.truth_(pred__24116.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24117))){
return ((function (pred__24116,expr__24117){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24116,expr__24117){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24116,expr__24117))
);

return deferred.addErrback(((function (deferred,pred__24116,expr__24117){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24116,expr__24117))
);
});
;})(pred__24116,expr__24117))
} else {
return ((function (pred__24116,expr__24117){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24116,expr__24117))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24120,callback){
var map__24123 = p__24120;
var map__24123__$1 = ((((!((map__24123 == null)))?((((map__24123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24123):map__24123);
var file_msg = map__24123__$1;
var request_url = cljs.core.get.call(null,map__24123__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24123,map__24123__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24123,map__24123__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_24147){
var state_val_24148 = (state_24147[(1)]);
if((state_val_24148 === (7))){
var inst_24143 = (state_24147[(2)]);
var state_24147__$1 = state_24147;
var statearr_24149_24169 = state_24147__$1;
(statearr_24149_24169[(2)] = inst_24143);

(statearr_24149_24169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (1))){
var state_24147__$1 = state_24147;
var statearr_24150_24170 = state_24147__$1;
(statearr_24150_24170[(2)] = null);

(statearr_24150_24170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (4))){
var inst_24127 = (state_24147[(7)]);
var inst_24127__$1 = (state_24147[(2)]);
var state_24147__$1 = (function (){var statearr_24151 = state_24147;
(statearr_24151[(7)] = inst_24127__$1);

return statearr_24151;
})();
if(cljs.core.truth_(inst_24127__$1)){
var statearr_24152_24171 = state_24147__$1;
(statearr_24152_24171[(1)] = (5));

} else {
var statearr_24153_24172 = state_24147__$1;
(statearr_24153_24172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (6))){
var state_24147__$1 = state_24147;
var statearr_24154_24173 = state_24147__$1;
(statearr_24154_24173[(2)] = null);

(statearr_24154_24173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (3))){
var inst_24145 = (state_24147[(2)]);
var state_24147__$1 = state_24147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24147__$1,inst_24145);
} else {
if((state_val_24148 === (2))){
var state_24147__$1 = state_24147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24147__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24148 === (11))){
var inst_24139 = (state_24147[(2)]);
var state_24147__$1 = (function (){var statearr_24155 = state_24147;
(statearr_24155[(8)] = inst_24139);

return statearr_24155;
})();
var statearr_24156_24174 = state_24147__$1;
(statearr_24156_24174[(2)] = null);

(statearr_24156_24174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (9))){
var inst_24133 = (state_24147[(9)]);
var inst_24131 = (state_24147[(10)]);
var inst_24135 = inst_24133.call(null,inst_24131);
var state_24147__$1 = state_24147;
var statearr_24157_24175 = state_24147__$1;
(statearr_24157_24175[(2)] = inst_24135);

(statearr_24157_24175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (5))){
var inst_24127 = (state_24147[(7)]);
var inst_24129 = figwheel.client.file_reloading.blocking_load.call(null,inst_24127);
var state_24147__$1 = state_24147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24147__$1,(8),inst_24129);
} else {
if((state_val_24148 === (10))){
var inst_24131 = (state_24147[(10)]);
var inst_24137 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24131);
var state_24147__$1 = state_24147;
var statearr_24158_24176 = state_24147__$1;
(statearr_24158_24176[(2)] = inst_24137);

(statearr_24158_24176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24148 === (8))){
var inst_24133 = (state_24147[(9)]);
var inst_24127 = (state_24147[(7)]);
var inst_24131 = (state_24147[(2)]);
var inst_24132 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24133__$1 = cljs.core.get.call(null,inst_24132,inst_24127);
var state_24147__$1 = (function (){var statearr_24159 = state_24147;
(statearr_24159[(9)] = inst_24133__$1);

(statearr_24159[(10)] = inst_24131);

return statearr_24159;
})();
if(cljs.core.truth_(inst_24133__$1)){
var statearr_24160_24177 = state_24147__$1;
(statearr_24160_24177[(1)] = (9));

} else {
var statearr_24161_24178 = state_24147__$1;
(statearr_24161_24178[(1)] = (10));

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
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20913__auto__ = null;
var figwheel$client$file_reloading$state_machine__20913__auto____0 = (function (){
var statearr_24165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24165[(0)] = figwheel$client$file_reloading$state_machine__20913__auto__);

(statearr_24165[(1)] = (1));

return statearr_24165;
});
var figwheel$client$file_reloading$state_machine__20913__auto____1 = (function (state_24147){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_24147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e24166){if((e24166 instanceof Object)){
var ex__20916__auto__ = e24166;
var statearr_24167_24179 = state_24147;
(statearr_24167_24179[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24180 = state_24147;
state_24147 = G__24180;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20913__auto__ = function(state_24147){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20913__auto____1.call(this,state_24147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20913__auto____0;
figwheel$client$file_reloading$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20913__auto____1;
return figwheel$client$file_reloading$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_24168 = f__21025__auto__.call(null);
(statearr_24168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_24168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24181,callback){
var map__24184 = p__24181;
var map__24184__$1 = ((((!((map__24184 == null)))?((((map__24184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184):map__24184);
var file_msg = map__24184__$1;
var namespace = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24184,map__24184__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24184,map__24184__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24186){
var map__24189 = p__24186;
var map__24189__$1 = ((((!((map__24189 == null)))?((((map__24189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24189):map__24189);
var file_msg = map__24189__$1;
var namespace = cljs.core.get.call(null,map__24189__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18358__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18358__auto__){
var or__18370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24191,callback){
var map__24194 = p__24191;
var map__24194__$1 = ((((!((map__24194 == null)))?((((map__24194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24194):map__24194);
var file_msg = map__24194__$1;
var request_url = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24194__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21024__auto___24282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___24282,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___24282,out){
return (function (state_24264){
var state_val_24265 = (state_24264[(1)]);
if((state_val_24265 === (1))){
var inst_24242 = cljs.core.nth.call(null,files,(0),null);
var inst_24243 = cljs.core.nthnext.call(null,files,(1));
var inst_24244 = files;
var state_24264__$1 = (function (){var statearr_24266 = state_24264;
(statearr_24266[(7)] = inst_24243);

(statearr_24266[(8)] = inst_24244);

(statearr_24266[(9)] = inst_24242);

return statearr_24266;
})();
var statearr_24267_24283 = state_24264__$1;
(statearr_24267_24283[(2)] = null);

(statearr_24267_24283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24265 === (2))){
var inst_24244 = (state_24264[(8)]);
var inst_24247 = (state_24264[(10)]);
var inst_24247__$1 = cljs.core.nth.call(null,inst_24244,(0),null);
var inst_24248 = cljs.core.nthnext.call(null,inst_24244,(1));
var inst_24249 = (inst_24247__$1 == null);
var inst_24250 = cljs.core.not.call(null,inst_24249);
var state_24264__$1 = (function (){var statearr_24268 = state_24264;
(statearr_24268[(11)] = inst_24248);

(statearr_24268[(10)] = inst_24247__$1);

return statearr_24268;
})();
if(inst_24250){
var statearr_24269_24284 = state_24264__$1;
(statearr_24269_24284[(1)] = (4));

} else {
var statearr_24270_24285 = state_24264__$1;
(statearr_24270_24285[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24265 === (3))){
var inst_24262 = (state_24264[(2)]);
var state_24264__$1 = state_24264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24264__$1,inst_24262);
} else {
if((state_val_24265 === (4))){
var inst_24247 = (state_24264[(10)]);
var inst_24252 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24247);
var state_24264__$1 = state_24264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24264__$1,(7),inst_24252);
} else {
if((state_val_24265 === (5))){
var inst_24258 = cljs.core.async.close_BANG_.call(null,out);
var state_24264__$1 = state_24264;
var statearr_24271_24286 = state_24264__$1;
(statearr_24271_24286[(2)] = inst_24258);

(statearr_24271_24286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24265 === (6))){
var inst_24260 = (state_24264[(2)]);
var state_24264__$1 = state_24264;
var statearr_24272_24287 = state_24264__$1;
(statearr_24272_24287[(2)] = inst_24260);

(statearr_24272_24287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24265 === (7))){
var inst_24248 = (state_24264[(11)]);
var inst_24254 = (state_24264[(2)]);
var inst_24255 = cljs.core.async.put_BANG_.call(null,out,inst_24254);
var inst_24244 = inst_24248;
var state_24264__$1 = (function (){var statearr_24273 = state_24264;
(statearr_24273[(12)] = inst_24255);

(statearr_24273[(8)] = inst_24244);

return statearr_24273;
})();
var statearr_24274_24288 = state_24264__$1;
(statearr_24274_24288[(2)] = null);

(statearr_24274_24288[(1)] = (2));


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
});})(c__21024__auto___24282,out))
;
return ((function (switch__20912__auto__,c__21024__auto___24282,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto____0 = (function (){
var statearr_24278 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24278[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto__);

(statearr_24278[(1)] = (1));

return statearr_24278;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto____1 = (function (state_24264){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_24264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e24279){if((e24279 instanceof Object)){
var ex__20916__auto__ = e24279;
var statearr_24280_24289 = state_24264;
(statearr_24280_24289[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24290 = state_24264;
state_24264 = G__24290;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto__ = function(state_24264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto____1.call(this,state_24264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___24282,out))
})();
var state__21026__auto__ = (function (){var statearr_24281 = f__21025__auto__.call(null);
(statearr_24281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___24282);

return statearr_24281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___24282,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24291,opts){
var map__24295 = p__24291;
var map__24295__$1 = ((((!((map__24295 == null)))?((((map__24295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24295):map__24295);
var eval_body__$1 = cljs.core.get.call(null,map__24295__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18358__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18358__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18358__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24297){var e = e24297;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24298_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24298_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__24303){
var vec__24304 = p__24303;
var k = cljs.core.nth.call(null,vec__24304,(0),null);
var v = cljs.core.nth.call(null,vec__24304,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24305){
var vec__24306 = p__24305;
var k = cljs.core.nth.call(null,vec__24306,(0),null);
var v = cljs.core.nth.call(null,vec__24306,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24310,p__24311){
var map__24558 = p__24310;
var map__24558__$1 = ((((!((map__24558 == null)))?((((map__24558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24558):map__24558);
var opts = map__24558__$1;
var before_jsload = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24558__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24559 = p__24311;
var map__24559__$1 = ((((!((map__24559 == null)))?((((map__24559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24559):map__24559);
var msg = map__24559__$1;
var files = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24559__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24712){
var state_val_24713 = (state_24712[(1)]);
if((state_val_24713 === (7))){
var inst_24575 = (state_24712[(7)]);
var inst_24574 = (state_24712[(8)]);
var inst_24573 = (state_24712[(9)]);
var inst_24576 = (state_24712[(10)]);
var inst_24581 = cljs.core._nth.call(null,inst_24574,inst_24576);
var inst_24582 = figwheel.client.file_reloading.eval_body.call(null,inst_24581,opts);
var inst_24583 = (inst_24576 + (1));
var tmp24714 = inst_24575;
var tmp24715 = inst_24574;
var tmp24716 = inst_24573;
var inst_24573__$1 = tmp24716;
var inst_24574__$1 = tmp24715;
var inst_24575__$1 = tmp24714;
var inst_24576__$1 = inst_24583;
var state_24712__$1 = (function (){var statearr_24717 = state_24712;
(statearr_24717[(7)] = inst_24575__$1);

(statearr_24717[(8)] = inst_24574__$1);

(statearr_24717[(9)] = inst_24573__$1);

(statearr_24717[(11)] = inst_24582);

(statearr_24717[(10)] = inst_24576__$1);

return statearr_24717;
})();
var statearr_24718_24804 = state_24712__$1;
(statearr_24718_24804[(2)] = null);

(statearr_24718_24804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (20))){
var inst_24616 = (state_24712[(12)]);
var inst_24624 = figwheel.client.file_reloading.sort_files.call(null,inst_24616);
var state_24712__$1 = state_24712;
var statearr_24719_24805 = state_24712__$1;
(statearr_24719_24805[(2)] = inst_24624);

(statearr_24719_24805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (27))){
var state_24712__$1 = state_24712;
var statearr_24720_24806 = state_24712__$1;
(statearr_24720_24806[(2)] = null);

(statearr_24720_24806[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (1))){
var inst_24565 = (state_24712[(13)]);
var inst_24562 = before_jsload.call(null,files);
var inst_24563 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24564 = (function (){return ((function (inst_24565,inst_24562,inst_24563,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24307_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24307_SHARP_);
});
;})(inst_24565,inst_24562,inst_24563,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24565__$1 = cljs.core.filter.call(null,inst_24564,files);
var inst_24566 = cljs.core.not_empty.call(null,inst_24565__$1);
var state_24712__$1 = (function (){var statearr_24721 = state_24712;
(statearr_24721[(14)] = inst_24562);

(statearr_24721[(13)] = inst_24565__$1);

(statearr_24721[(15)] = inst_24563);

return statearr_24721;
})();
if(cljs.core.truth_(inst_24566)){
var statearr_24722_24807 = state_24712__$1;
(statearr_24722_24807[(1)] = (2));

} else {
var statearr_24723_24808 = state_24712__$1;
(statearr_24723_24808[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (24))){
var state_24712__$1 = state_24712;
var statearr_24724_24809 = state_24712__$1;
(statearr_24724_24809[(2)] = null);

(statearr_24724_24809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (39))){
var inst_24666 = (state_24712[(16)]);
var state_24712__$1 = state_24712;
var statearr_24725_24810 = state_24712__$1;
(statearr_24725_24810[(2)] = inst_24666);

(statearr_24725_24810[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (46))){
var inst_24707 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24726_24811 = state_24712__$1;
(statearr_24726_24811[(2)] = inst_24707);

(statearr_24726_24811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (4))){
var inst_24610 = (state_24712[(2)]);
var inst_24611 = cljs.core.List.EMPTY;
var inst_24612 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24611);
var inst_24613 = (function (){return ((function (inst_24610,inst_24611,inst_24612,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24308_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24308_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24308_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_24610,inst_24611,inst_24612,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24614 = cljs.core.filter.call(null,inst_24613,files);
var inst_24615 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24616 = cljs.core.concat.call(null,inst_24614,inst_24615);
var state_24712__$1 = (function (){var statearr_24727 = state_24712;
(statearr_24727[(17)] = inst_24612);

(statearr_24727[(12)] = inst_24616);

(statearr_24727[(18)] = inst_24610);

return statearr_24727;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24728_24812 = state_24712__$1;
(statearr_24728_24812[(1)] = (16));

} else {
var statearr_24729_24813 = state_24712__$1;
(statearr_24729_24813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (15))){
var inst_24600 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24730_24814 = state_24712__$1;
(statearr_24730_24814[(2)] = inst_24600);

(statearr_24730_24814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (21))){
var inst_24626 = (state_24712[(19)]);
var inst_24626__$1 = (state_24712[(2)]);
var inst_24627 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24626__$1);
var state_24712__$1 = (function (){var statearr_24731 = state_24712;
(statearr_24731[(19)] = inst_24626__$1);

return statearr_24731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24712__$1,(22),inst_24627);
} else {
if((state_val_24713 === (31))){
var inst_24710 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24712__$1,inst_24710);
} else {
if((state_val_24713 === (32))){
var inst_24666 = (state_24712[(16)]);
var inst_24671 = inst_24666.cljs$lang$protocol_mask$partition0$;
var inst_24672 = (inst_24671 & (64));
var inst_24673 = inst_24666.cljs$core$ISeq$;
var inst_24674 = (inst_24672) || (inst_24673);
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24674)){
var statearr_24732_24815 = state_24712__$1;
(statearr_24732_24815[(1)] = (35));

} else {
var statearr_24733_24816 = state_24712__$1;
(statearr_24733_24816[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (40))){
var inst_24687 = (state_24712[(20)]);
var inst_24686 = (state_24712[(2)]);
var inst_24687__$1 = cljs.core.get.call(null,inst_24686,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24688 = cljs.core.get.call(null,inst_24686,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24689 = cljs.core.not_empty.call(null,inst_24687__$1);
var state_24712__$1 = (function (){var statearr_24734 = state_24712;
(statearr_24734[(20)] = inst_24687__$1);

(statearr_24734[(21)] = inst_24688);

return statearr_24734;
})();
if(cljs.core.truth_(inst_24689)){
var statearr_24735_24817 = state_24712__$1;
(statearr_24735_24817[(1)] = (41));

} else {
var statearr_24736_24818 = state_24712__$1;
(statearr_24736_24818[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (33))){
var state_24712__$1 = state_24712;
var statearr_24737_24819 = state_24712__$1;
(statearr_24737_24819[(2)] = false);

(statearr_24737_24819[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (13))){
var inst_24586 = (state_24712[(22)]);
var inst_24590 = cljs.core.chunk_first.call(null,inst_24586);
var inst_24591 = cljs.core.chunk_rest.call(null,inst_24586);
var inst_24592 = cljs.core.count.call(null,inst_24590);
var inst_24573 = inst_24591;
var inst_24574 = inst_24590;
var inst_24575 = inst_24592;
var inst_24576 = (0);
var state_24712__$1 = (function (){var statearr_24738 = state_24712;
(statearr_24738[(7)] = inst_24575);

(statearr_24738[(8)] = inst_24574);

(statearr_24738[(9)] = inst_24573);

(statearr_24738[(10)] = inst_24576);

return statearr_24738;
})();
var statearr_24739_24820 = state_24712__$1;
(statearr_24739_24820[(2)] = null);

(statearr_24739_24820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (22))){
var inst_24630 = (state_24712[(23)]);
var inst_24634 = (state_24712[(24)]);
var inst_24626 = (state_24712[(19)]);
var inst_24629 = (state_24712[(25)]);
var inst_24629__$1 = (state_24712[(2)]);
var inst_24630__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24629__$1);
var inst_24631 = (function (){var all_files = inst_24626;
var res_SINGLEQUOTE_ = inst_24629__$1;
var res = inst_24630__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24630,inst_24634,inst_24626,inst_24629,inst_24629__$1,inst_24630__$1,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24309_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24309_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24630,inst_24634,inst_24626,inst_24629,inst_24629__$1,inst_24630__$1,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24632 = cljs.core.filter.call(null,inst_24631,inst_24629__$1);
var inst_24633 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24634__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24633);
var inst_24635 = cljs.core.not_empty.call(null,inst_24634__$1);
var state_24712__$1 = (function (){var statearr_24740 = state_24712;
(statearr_24740[(23)] = inst_24630__$1);

(statearr_24740[(26)] = inst_24632);

(statearr_24740[(24)] = inst_24634__$1);

(statearr_24740[(25)] = inst_24629__$1);

return statearr_24740;
})();
if(cljs.core.truth_(inst_24635)){
var statearr_24741_24821 = state_24712__$1;
(statearr_24741_24821[(1)] = (23));

} else {
var statearr_24742_24822 = state_24712__$1;
(statearr_24742_24822[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (36))){
var state_24712__$1 = state_24712;
var statearr_24743_24823 = state_24712__$1;
(statearr_24743_24823[(2)] = false);

(statearr_24743_24823[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (41))){
var inst_24687 = (state_24712[(20)]);
var inst_24691 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24692 = cljs.core.map.call(null,inst_24691,inst_24687);
var inst_24693 = cljs.core.pr_str.call(null,inst_24692);
var inst_24694 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24693)].join('');
var inst_24695 = figwheel.client.utils.log.call(null,inst_24694);
var state_24712__$1 = state_24712;
var statearr_24744_24824 = state_24712__$1;
(statearr_24744_24824[(2)] = inst_24695);

(statearr_24744_24824[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (43))){
var inst_24688 = (state_24712[(21)]);
var inst_24698 = (state_24712[(2)]);
var inst_24699 = cljs.core.not_empty.call(null,inst_24688);
var state_24712__$1 = (function (){var statearr_24745 = state_24712;
(statearr_24745[(27)] = inst_24698);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24699)){
var statearr_24746_24825 = state_24712__$1;
(statearr_24746_24825[(1)] = (44));

} else {
var statearr_24747_24826 = state_24712__$1;
(statearr_24747_24826[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (29))){
var inst_24630 = (state_24712[(23)]);
var inst_24632 = (state_24712[(26)]);
var inst_24634 = (state_24712[(24)]);
var inst_24626 = (state_24712[(19)]);
var inst_24629 = (state_24712[(25)]);
var inst_24666 = (state_24712[(16)]);
var inst_24662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24665 = (function (){var all_files = inst_24626;
var res_SINGLEQUOTE_ = inst_24629;
var res = inst_24630;
var files_not_loaded = inst_24632;
var dependencies_that_loaded = inst_24634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24666,inst_24662,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24664){
var map__24748 = p__24664;
var map__24748__$1 = ((((!((map__24748 == null)))?((((map__24748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24748):map__24748);
var namespace = cljs.core.get.call(null,map__24748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24666,inst_24662,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24666__$1 = cljs.core.group_by.call(null,inst_24665,inst_24632);
var inst_24668 = (inst_24666__$1 == null);
var inst_24669 = cljs.core.not.call(null,inst_24668);
var state_24712__$1 = (function (){var statearr_24750 = state_24712;
(statearr_24750[(28)] = inst_24662);

(statearr_24750[(16)] = inst_24666__$1);

return statearr_24750;
})();
if(inst_24669){
var statearr_24751_24827 = state_24712__$1;
(statearr_24751_24827[(1)] = (32));

} else {
var statearr_24752_24828 = state_24712__$1;
(statearr_24752_24828[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (44))){
var inst_24688 = (state_24712[(21)]);
var inst_24701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24688);
var inst_24702 = cljs.core.pr_str.call(null,inst_24701);
var inst_24703 = [cljs.core.str("not required: "),cljs.core.str(inst_24702)].join('');
var inst_24704 = figwheel.client.utils.log.call(null,inst_24703);
var state_24712__$1 = state_24712;
var statearr_24753_24829 = state_24712__$1;
(statearr_24753_24829[(2)] = inst_24704);

(statearr_24753_24829[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (6))){
var inst_24607 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24754_24830 = state_24712__$1;
(statearr_24754_24830[(2)] = inst_24607);

(statearr_24754_24830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (28))){
var inst_24632 = (state_24712[(26)]);
var inst_24659 = (state_24712[(2)]);
var inst_24660 = cljs.core.not_empty.call(null,inst_24632);
var state_24712__$1 = (function (){var statearr_24755 = state_24712;
(statearr_24755[(29)] = inst_24659);

return statearr_24755;
})();
if(cljs.core.truth_(inst_24660)){
var statearr_24756_24831 = state_24712__$1;
(statearr_24756_24831[(1)] = (29));

} else {
var statearr_24757_24832 = state_24712__$1;
(statearr_24757_24832[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (25))){
var inst_24630 = (state_24712[(23)]);
var inst_24646 = (state_24712[(2)]);
var inst_24647 = cljs.core.not_empty.call(null,inst_24630);
var state_24712__$1 = (function (){var statearr_24758 = state_24712;
(statearr_24758[(30)] = inst_24646);

return statearr_24758;
})();
if(cljs.core.truth_(inst_24647)){
var statearr_24759_24833 = state_24712__$1;
(statearr_24759_24833[(1)] = (26));

} else {
var statearr_24760_24834 = state_24712__$1;
(statearr_24760_24834[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (34))){
var inst_24681 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24681)){
var statearr_24761_24835 = state_24712__$1;
(statearr_24761_24835[(1)] = (38));

} else {
var statearr_24762_24836 = state_24712__$1;
(statearr_24762_24836[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (17))){
var state_24712__$1 = state_24712;
var statearr_24763_24837 = state_24712__$1;
(statearr_24763_24837[(2)] = recompile_dependents);

(statearr_24763_24837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (3))){
var state_24712__$1 = state_24712;
var statearr_24764_24838 = state_24712__$1;
(statearr_24764_24838[(2)] = null);

(statearr_24764_24838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (12))){
var inst_24603 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24765_24839 = state_24712__$1;
(statearr_24765_24839[(2)] = inst_24603);

(statearr_24765_24839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (2))){
var inst_24565 = (state_24712[(13)]);
var inst_24572 = cljs.core.seq.call(null,inst_24565);
var inst_24573 = inst_24572;
var inst_24574 = null;
var inst_24575 = (0);
var inst_24576 = (0);
var state_24712__$1 = (function (){var statearr_24766 = state_24712;
(statearr_24766[(7)] = inst_24575);

(statearr_24766[(8)] = inst_24574);

(statearr_24766[(9)] = inst_24573);

(statearr_24766[(10)] = inst_24576);

return statearr_24766;
})();
var statearr_24767_24840 = state_24712__$1;
(statearr_24767_24840[(2)] = null);

(statearr_24767_24840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (23))){
var inst_24630 = (state_24712[(23)]);
var inst_24632 = (state_24712[(26)]);
var inst_24634 = (state_24712[(24)]);
var inst_24626 = (state_24712[(19)]);
var inst_24629 = (state_24712[(25)]);
var inst_24637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24639 = (function (){var all_files = inst_24626;
var res_SINGLEQUOTE_ = inst_24629;
var res = inst_24630;
var files_not_loaded = inst_24632;
var dependencies_that_loaded = inst_24634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24637,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24638){
var map__24768 = p__24638;
var map__24768__$1 = ((((!((map__24768 == null)))?((((map__24768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24768):map__24768);
var request_url = cljs.core.get.call(null,map__24768__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24637,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24640 = cljs.core.reverse.call(null,inst_24634);
var inst_24641 = cljs.core.map.call(null,inst_24639,inst_24640);
var inst_24642 = cljs.core.pr_str.call(null,inst_24641);
var inst_24643 = figwheel.client.utils.log.call(null,inst_24642);
var state_24712__$1 = (function (){var statearr_24770 = state_24712;
(statearr_24770[(31)] = inst_24637);

return statearr_24770;
})();
var statearr_24771_24841 = state_24712__$1;
(statearr_24771_24841[(2)] = inst_24643);

(statearr_24771_24841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (35))){
var state_24712__$1 = state_24712;
var statearr_24772_24842 = state_24712__$1;
(statearr_24772_24842[(2)] = true);

(statearr_24772_24842[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (19))){
var inst_24616 = (state_24712[(12)]);
var inst_24622 = figwheel.client.file_reloading.expand_files.call(null,inst_24616);
var state_24712__$1 = state_24712;
var statearr_24773_24843 = state_24712__$1;
(statearr_24773_24843[(2)] = inst_24622);

(statearr_24773_24843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (11))){
var state_24712__$1 = state_24712;
var statearr_24774_24844 = state_24712__$1;
(statearr_24774_24844[(2)] = null);

(statearr_24774_24844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (9))){
var inst_24605 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24775_24845 = state_24712__$1;
(statearr_24775_24845[(2)] = inst_24605);

(statearr_24775_24845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (5))){
var inst_24575 = (state_24712[(7)]);
var inst_24576 = (state_24712[(10)]);
var inst_24578 = (inst_24576 < inst_24575);
var inst_24579 = inst_24578;
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24579)){
var statearr_24776_24846 = state_24712__$1;
(statearr_24776_24846[(1)] = (7));

} else {
var statearr_24777_24847 = state_24712__$1;
(statearr_24777_24847[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (14))){
var inst_24586 = (state_24712[(22)]);
var inst_24595 = cljs.core.first.call(null,inst_24586);
var inst_24596 = figwheel.client.file_reloading.eval_body.call(null,inst_24595,opts);
var inst_24597 = cljs.core.next.call(null,inst_24586);
var inst_24573 = inst_24597;
var inst_24574 = null;
var inst_24575 = (0);
var inst_24576 = (0);
var state_24712__$1 = (function (){var statearr_24778 = state_24712;
(statearr_24778[(7)] = inst_24575);

(statearr_24778[(32)] = inst_24596);

(statearr_24778[(8)] = inst_24574);

(statearr_24778[(9)] = inst_24573);

(statearr_24778[(10)] = inst_24576);

return statearr_24778;
})();
var statearr_24779_24848 = state_24712__$1;
(statearr_24779_24848[(2)] = null);

(statearr_24779_24848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (45))){
var state_24712__$1 = state_24712;
var statearr_24780_24849 = state_24712__$1;
(statearr_24780_24849[(2)] = null);

(statearr_24780_24849[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (26))){
var inst_24630 = (state_24712[(23)]);
var inst_24632 = (state_24712[(26)]);
var inst_24634 = (state_24712[(24)]);
var inst_24626 = (state_24712[(19)]);
var inst_24629 = (state_24712[(25)]);
var inst_24649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24651 = (function (){var all_files = inst_24626;
var res_SINGLEQUOTE_ = inst_24629;
var res = inst_24630;
var files_not_loaded = inst_24632;
var dependencies_that_loaded = inst_24634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24649,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24650){
var map__24781 = p__24650;
var map__24781__$1 = ((((!((map__24781 == null)))?((((map__24781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24781):map__24781);
var namespace = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24649,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24652 = cljs.core.map.call(null,inst_24651,inst_24630);
var inst_24653 = cljs.core.pr_str.call(null,inst_24652);
var inst_24654 = figwheel.client.utils.log.call(null,inst_24653);
var inst_24655 = (function (){var all_files = inst_24626;
var res_SINGLEQUOTE_ = inst_24629;
var res = inst_24630;
var files_not_loaded = inst_24632;
var dependencies_that_loaded = inst_24634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24649,inst_24651,inst_24652,inst_24653,inst_24654,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24630,inst_24632,inst_24634,inst_24626,inst_24629,inst_24649,inst_24651,inst_24652,inst_24653,inst_24654,state_val_24713,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24656 = setTimeout(inst_24655,(10));
var state_24712__$1 = (function (){var statearr_24783 = state_24712;
(statearr_24783[(33)] = inst_24654);

(statearr_24783[(34)] = inst_24649);

return statearr_24783;
})();
var statearr_24784_24850 = state_24712__$1;
(statearr_24784_24850[(2)] = inst_24656);

(statearr_24784_24850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (16))){
var state_24712__$1 = state_24712;
var statearr_24785_24851 = state_24712__$1;
(statearr_24785_24851[(2)] = reload_dependents);

(statearr_24785_24851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (38))){
var inst_24666 = (state_24712[(16)]);
var inst_24683 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24666);
var state_24712__$1 = state_24712;
var statearr_24786_24852 = state_24712__$1;
(statearr_24786_24852[(2)] = inst_24683);

(statearr_24786_24852[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (30))){
var state_24712__$1 = state_24712;
var statearr_24787_24853 = state_24712__$1;
(statearr_24787_24853[(2)] = null);

(statearr_24787_24853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (10))){
var inst_24586 = (state_24712[(22)]);
var inst_24588 = cljs.core.chunked_seq_QMARK_.call(null,inst_24586);
var state_24712__$1 = state_24712;
if(inst_24588){
var statearr_24788_24854 = state_24712__$1;
(statearr_24788_24854[(1)] = (13));

} else {
var statearr_24789_24855 = state_24712__$1;
(statearr_24789_24855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (18))){
var inst_24620 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
if(cljs.core.truth_(inst_24620)){
var statearr_24790_24856 = state_24712__$1;
(statearr_24790_24856[(1)] = (19));

} else {
var statearr_24791_24857 = state_24712__$1;
(statearr_24791_24857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (42))){
var state_24712__$1 = state_24712;
var statearr_24792_24858 = state_24712__$1;
(statearr_24792_24858[(2)] = null);

(statearr_24792_24858[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (37))){
var inst_24678 = (state_24712[(2)]);
var state_24712__$1 = state_24712;
var statearr_24793_24859 = state_24712__$1;
(statearr_24793_24859[(2)] = inst_24678);

(statearr_24793_24859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24713 === (8))){
var inst_24586 = (state_24712[(22)]);
var inst_24573 = (state_24712[(9)]);
var inst_24586__$1 = cljs.core.seq.call(null,inst_24573);
var state_24712__$1 = (function (){var statearr_24794 = state_24712;
(statearr_24794[(22)] = inst_24586__$1);

return statearr_24794;
})();
if(inst_24586__$1){
var statearr_24795_24860 = state_24712__$1;
(statearr_24795_24860[(1)] = (10));

} else {
var statearr_24796_24861 = state_24712__$1;
(statearr_24796_24861[(1)] = (11));

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
});})(c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20912__auto__,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto____0 = (function (){
var statearr_24800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24800[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto__);

(statearr_24800[(1)] = (1));

return statearr_24800;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto____1 = (function (state_24712){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_24712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e24801){if((e24801 instanceof Object)){
var ex__20916__auto__ = e24801;
var statearr_24802_24862 = state_24712;
(statearr_24802_24862[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24863 = state_24712;
state_24712 = G__24863;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto__ = function(state_24712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto____1.call(this,state_24712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21026__auto__ = (function (){var statearr_24803 = f__21025__auto__.call(null);
(statearr_24803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_24803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__,map__24558,map__24558__$1,opts,before_jsload,on_jsload,reload_dependents,map__24559,map__24559__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21024__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24866,link){
var map__24869 = p__24866;
var map__24869__$1 = ((((!((map__24869 == null)))?((((map__24869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24869):map__24869);
var file = cljs.core.get.call(null,map__24869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24869,map__24869__$1,file){
return (function (p1__24864_SHARP_,p2__24865_SHARP_){
if(cljs.core._EQ_.call(null,p1__24864_SHARP_,p2__24865_SHARP_)){
return p1__24864_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24869,map__24869__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24875){
var map__24876 = p__24875;
var map__24876__$1 = ((((!((map__24876 == null)))?((((map__24876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24876):map__24876);
var match_length = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24876__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24871_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24871_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24878 = [];
var len__19428__auto___24881 = arguments.length;
var i__19429__auto___24882 = (0);
while(true){
if((i__19429__auto___24882 < len__19428__auto___24881)){
args24878.push((arguments[i__19429__auto___24882]));

var G__24883 = (i__19429__auto___24882 + (1));
i__19429__auto___24882 = G__24883;
continue;
} else {
}
break;
}

var G__24880 = args24878.length;
switch (G__24880) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24878.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24885_SHARP_,p2__24886_SHARP_){
return cljs.core.assoc.call(null,p1__24885_SHARP_,cljs.core.get.call(null,p2__24886_SHARP_,key),p2__24886_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24887){
var map__24890 = p__24887;
var map__24890__$1 = ((((!((map__24890 == null)))?((((map__24890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24890):map__24890);
var f_data = map__24890__$1;
var file = cljs.core.get.call(null,map__24890__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24892,files_msg){
var map__24899 = p__24892;
var map__24899__$1 = ((((!((map__24899 == null)))?((((map__24899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24899):map__24899);
var opts = map__24899__$1;
var on_cssload = cljs.core.get.call(null,map__24899__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24901_24905 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24902_24906 = null;
var count__24903_24907 = (0);
var i__24904_24908 = (0);
while(true){
if((i__24904_24908 < count__24903_24907)){
var f_24909 = cljs.core._nth.call(null,chunk__24902_24906,i__24904_24908);
figwheel.client.file_reloading.reload_css_file.call(null,f_24909);

var G__24910 = seq__24901_24905;
var G__24911 = chunk__24902_24906;
var G__24912 = count__24903_24907;
var G__24913 = (i__24904_24908 + (1));
seq__24901_24905 = G__24910;
chunk__24902_24906 = G__24911;
count__24903_24907 = G__24912;
i__24904_24908 = G__24913;
continue;
} else {
var temp__4657__auto___24914 = cljs.core.seq.call(null,seq__24901_24905);
if(temp__4657__auto___24914){
var seq__24901_24915__$1 = temp__4657__auto___24914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24901_24915__$1)){
var c__19173__auto___24916 = cljs.core.chunk_first.call(null,seq__24901_24915__$1);
var G__24917 = cljs.core.chunk_rest.call(null,seq__24901_24915__$1);
var G__24918 = c__19173__auto___24916;
var G__24919 = cljs.core.count.call(null,c__19173__auto___24916);
var G__24920 = (0);
seq__24901_24905 = G__24917;
chunk__24902_24906 = G__24918;
count__24903_24907 = G__24919;
i__24904_24908 = G__24920;
continue;
} else {
var f_24921 = cljs.core.first.call(null,seq__24901_24915__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24921);

var G__24922 = cljs.core.next.call(null,seq__24901_24915__$1);
var G__24923 = null;
var G__24924 = (0);
var G__24925 = (0);
seq__24901_24905 = G__24922;
chunk__24902_24906 = G__24923;
count__24903_24907 = G__24924;
i__24904_24908 = G__24925;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24899,map__24899__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24899,map__24899__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466046461860