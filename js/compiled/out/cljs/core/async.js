// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21069 = [];
var len__19428__auto___21075 = arguments.length;
var i__19429__auto___21076 = (0);
while(true){
if((i__19429__auto___21076 < len__19428__auto___21075)){
args21069.push((arguments[i__19429__auto___21076]));

var G__21077 = (i__19429__auto___21076 + (1));
i__19429__auto___21076 = G__21077;
continue;
} else {
}
break;
}

var G__21071 = args21069.length;
switch (G__21071) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21069.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21072 = (function (f,blockable,meta21073){
this.f = f;
this.blockable = blockable;
this.meta21073 = meta21073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21074,meta21073__$1){
var self__ = this;
var _21074__$1 = this;
return (new cljs.core.async.t_cljs$core$async21072(self__.f,self__.blockable,meta21073__$1));
});

cljs.core.async.t_cljs$core$async21072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21074){
var self__ = this;
var _21074__$1 = this;
return self__.meta21073;
});

cljs.core.async.t_cljs$core$async21072.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21072.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21073","meta21073",1859497391,null)], null);
});

cljs.core.async.t_cljs$core$async21072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21072";

cljs.core.async.t_cljs$core$async21072.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async21072");
});

cljs.core.async.__GT_t_cljs$core$async21072 = (function cljs$core$async$__GT_t_cljs$core$async21072(f__$1,blockable__$1,meta21073){
return (new cljs.core.async.t_cljs$core$async21072(f__$1,blockable__$1,meta21073));
});

}

return (new cljs.core.async.t_cljs$core$async21072(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21081 = [];
var len__19428__auto___21084 = arguments.length;
var i__19429__auto___21085 = (0);
while(true){
if((i__19429__auto___21085 < len__19428__auto___21084)){
args21081.push((arguments[i__19429__auto___21085]));

var G__21086 = (i__19429__auto___21085 + (1));
i__19429__auto___21085 = G__21086;
continue;
} else {
}
break;
}

var G__21083 = args21081.length;
switch (G__21083) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21081.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21088 = [];
var len__19428__auto___21091 = arguments.length;
var i__19429__auto___21092 = (0);
while(true){
if((i__19429__auto___21092 < len__19428__auto___21091)){
args21088.push((arguments[i__19429__auto___21092]));

var G__21093 = (i__19429__auto___21092 + (1));
i__19429__auto___21092 = G__21093;
continue;
} else {
}
break;
}

var G__21090 = args21088.length;
switch (G__21090) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21088.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21095 = [];
var len__19428__auto___21098 = arguments.length;
var i__19429__auto___21099 = (0);
while(true){
if((i__19429__auto___21099 < len__19428__auto___21098)){
args21095.push((arguments[i__19429__auto___21099]));

var G__21100 = (i__19429__auto___21099 + (1));
i__19429__auto___21099 = G__21100;
continue;
} else {
}
break;
}

var G__21097 = args21095.length;
switch (G__21097) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21095.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21102 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21102);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21102,ret){
return (function (){
return fn1.call(null,val_21102);
});})(val_21102,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21103 = [];
var len__19428__auto___21106 = arguments.length;
var i__19429__auto___21107 = (0);
while(true){
if((i__19429__auto___21107 < len__19428__auto___21106)){
args21103.push((arguments[i__19429__auto___21107]));

var G__21108 = (i__19429__auto___21107 + (1));
i__19429__auto___21107 = G__21108;
continue;
} else {
}
break;
}

var G__21105 = args21103.length;
switch (G__21105) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21103.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19273__auto___21110 = n;
var x_21111 = (0);
while(true){
if((x_21111 < n__19273__auto___21110)){
(a[x_21111] = (0));

var G__21112 = (x_21111 + (1));
x_21111 = G__21112;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21113 = (i + (1));
i = G__21113;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21117 = (function (alt_flag,flag,meta21118){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21118 = meta21118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21119,meta21118__$1){
var self__ = this;
var _21119__$1 = this;
return (new cljs.core.async.t_cljs$core$async21117(self__.alt_flag,self__.flag,meta21118__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21119){
var self__ = this;
var _21119__$1 = this;
return self__.meta21118;
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21118","meta21118",1983100157,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21117";

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async21117");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21117 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21117(alt_flag__$1,flag__$1,meta21118){
return (new cljs.core.async.t_cljs$core$async21117(alt_flag__$1,flag__$1,meta21118));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21117(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21123 = (function (alt_handler,flag,cb,meta21124){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new cljs.core.async.t_cljs$core$async21123(self__.alt_handler,self__.flag,self__.cb,meta21124__$1));
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null)], null);
});

cljs.core.async.t_cljs$core$async21123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21123";

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async21123");
});

cljs.core.async.__GT_t_cljs$core$async21123 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21123(alt_handler__$1,flag__$1,cb__$1,meta21124){
return (new cljs.core.async.t_cljs$core$async21123(alt_handler__$1,flag__$1,cb__$1,meta21124));
});

}

return (new cljs.core.async.t_cljs$core$async21123(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21126_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21126_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21127_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18370__auto__ = wport;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21128 = (i + (1));
i = G__21128;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18370__auto__ = ret;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___21134 = arguments.length;
var i__19429__auto___21135 = (0);
while(true){
if((i__19429__auto___21135 < len__19428__auto___21134)){
args__19435__auto__.push((arguments[i__19429__auto___21135]));

var G__21136 = (i__19429__auto___21135 + (1));
i__19429__auto___21135 = G__21136;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21131){
var map__21132 = p__21131;
var map__21132__$1 = ((((!((map__21132 == null)))?((((map__21132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21132):map__21132);
var opts = map__21132__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21129){
var G__21130 = cljs.core.first.call(null,seq21129);
var seq21129__$1 = cljs.core.next.call(null,seq21129);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21130,seq21129__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21137 = [];
var len__19428__auto___21187 = arguments.length;
var i__19429__auto___21188 = (0);
while(true){
if((i__19429__auto___21188 < len__19428__auto___21187)){
args21137.push((arguments[i__19429__auto___21188]));

var G__21189 = (i__19429__auto___21188 + (1));
i__19429__auto___21188 = G__21189;
continue;
} else {
}
break;
}

var G__21139 = args21137.length;
switch (G__21139) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21137.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21024__auto___21191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___21191){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___21191){
return (function (state_21163){
var state_val_21164 = (state_21163[(1)]);
if((state_val_21164 === (7))){
var inst_21159 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
var statearr_21165_21192 = state_21163__$1;
(statearr_21165_21192[(2)] = inst_21159);

(statearr_21165_21192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (1))){
var state_21163__$1 = state_21163;
var statearr_21166_21193 = state_21163__$1;
(statearr_21166_21193[(2)] = null);

(statearr_21166_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (4))){
var inst_21142 = (state_21163[(7)]);
var inst_21142__$1 = (state_21163[(2)]);
var inst_21143 = (inst_21142__$1 == null);
var state_21163__$1 = (function (){var statearr_21167 = state_21163;
(statearr_21167[(7)] = inst_21142__$1);

return statearr_21167;
})();
if(cljs.core.truth_(inst_21143)){
var statearr_21168_21194 = state_21163__$1;
(statearr_21168_21194[(1)] = (5));

} else {
var statearr_21169_21195 = state_21163__$1;
(statearr_21169_21195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (13))){
var state_21163__$1 = state_21163;
var statearr_21170_21196 = state_21163__$1;
(statearr_21170_21196[(2)] = null);

(statearr_21170_21196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (6))){
var inst_21142 = (state_21163[(7)]);
var state_21163__$1 = state_21163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21163__$1,(11),to,inst_21142);
} else {
if((state_val_21164 === (3))){
var inst_21161 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21163__$1,inst_21161);
} else {
if((state_val_21164 === (12))){
var state_21163__$1 = state_21163;
var statearr_21171_21197 = state_21163__$1;
(statearr_21171_21197[(2)] = null);

(statearr_21171_21197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (2))){
var state_21163__$1 = state_21163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21163__$1,(4),from);
} else {
if((state_val_21164 === (11))){
var inst_21152 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
if(cljs.core.truth_(inst_21152)){
var statearr_21172_21198 = state_21163__$1;
(statearr_21172_21198[(1)] = (12));

} else {
var statearr_21173_21199 = state_21163__$1;
(statearr_21173_21199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (9))){
var state_21163__$1 = state_21163;
var statearr_21174_21200 = state_21163__$1;
(statearr_21174_21200[(2)] = null);

(statearr_21174_21200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (5))){
var state_21163__$1 = state_21163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21175_21201 = state_21163__$1;
(statearr_21175_21201[(1)] = (8));

} else {
var statearr_21176_21202 = state_21163__$1;
(statearr_21176_21202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (14))){
var inst_21157 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
var statearr_21177_21203 = state_21163__$1;
(statearr_21177_21203[(2)] = inst_21157);

(statearr_21177_21203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (10))){
var inst_21149 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
var statearr_21178_21204 = state_21163__$1;
(statearr_21178_21204[(2)] = inst_21149);

(statearr_21178_21204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (8))){
var inst_21146 = cljs.core.async.close_BANG_.call(null,to);
var state_21163__$1 = state_21163;
var statearr_21179_21205 = state_21163__$1;
(statearr_21179_21205[(2)] = inst_21146);

(statearr_21179_21205[(1)] = (10));


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
});})(c__21024__auto___21191))
;
return ((function (switch__20912__auto__,c__21024__auto___21191){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_21183 = [null,null,null,null,null,null,null,null];
(statearr_21183[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_21183[(1)] = (1));

return statearr_21183;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_21163){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object)){
var ex__20916__auto__ = e21184;
var statearr_21185_21206 = state_21163;
(statearr_21185_21206[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21207 = state_21163;
state_21163 = G__21207;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_21163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_21163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___21191))
})();
var state__21026__auto__ = (function (){var statearr_21186 = f__21025__auto__.call(null);
(statearr_21186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___21191);

return statearr_21186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___21191))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21391){
var vec__21392 = p__21391;
var v = cljs.core.nth.call(null,vec__21392,(0),null);
var p = cljs.core.nth.call(null,vec__21392,(1),null);
var job = vec__21392;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21024__auto___21574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___21574,res,vec__21392,v,p,job,jobs,results){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___21574,res,vec__21392,v,p,job,jobs,results){
return (function (state_21397){
var state_val_21398 = (state_21397[(1)]);
if((state_val_21398 === (1))){
var state_21397__$1 = state_21397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21397__$1,(2),res,v);
} else {
if((state_val_21398 === (2))){
var inst_21394 = (state_21397[(2)]);
var inst_21395 = cljs.core.async.close_BANG_.call(null,res);
var state_21397__$1 = (function (){var statearr_21399 = state_21397;
(statearr_21399[(7)] = inst_21394);

return statearr_21399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21397__$1,inst_21395);
} else {
return null;
}
}
});})(c__21024__auto___21574,res,vec__21392,v,p,job,jobs,results))
;
return ((function (switch__20912__auto__,c__21024__auto___21574,res,vec__21392,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0 = (function (){
var statearr_21403 = [null,null,null,null,null,null,null,null];
(statearr_21403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__);

(statearr_21403[(1)] = (1));

return statearr_21403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1 = (function (state_21397){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object)){
var ex__20916__auto__ = e21404;
var statearr_21405_21575 = state_21397;
(statearr_21405_21575[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21576 = state_21397;
state_21397 = G__21576;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = function(state_21397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1.call(this,state_21397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___21574,res,vec__21392,v,p,job,jobs,results))
})();
var state__21026__auto__ = (function (){var statearr_21406 = f__21025__auto__.call(null);
(statearr_21406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___21574);

return statearr_21406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___21574,res,vec__21392,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21407){
var vec__21408 = p__21407;
var v = cljs.core.nth.call(null,vec__21408,(0),null);
var p = cljs.core.nth.call(null,vec__21408,(1),null);
var job = vec__21408;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19273__auto___21577 = n;
var __21578 = (0);
while(true){
if((__21578 < n__19273__auto___21577)){
var G__21409_21579 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21409_21579) {
case "compute":
var c__21024__auto___21581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21578,c__21024__auto___21581,G__21409_21579,n__19273__auto___21577,jobs,results,process,async){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (__21578,c__21024__auto___21581,G__21409_21579,n__19273__auto___21577,jobs,results,process,async){
return (function (state_21422){
var state_val_21423 = (state_21422[(1)]);
if((state_val_21423 === (1))){
var state_21422__$1 = state_21422;
var statearr_21424_21582 = state_21422__$1;
(statearr_21424_21582[(2)] = null);

(statearr_21424_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (2))){
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21422__$1,(4),jobs);
} else {
if((state_val_21423 === (3))){
var inst_21420 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21422__$1,inst_21420);
} else {
if((state_val_21423 === (4))){
var inst_21412 = (state_21422[(2)]);
var inst_21413 = process.call(null,inst_21412);
var state_21422__$1 = state_21422;
if(cljs.core.truth_(inst_21413)){
var statearr_21425_21583 = state_21422__$1;
(statearr_21425_21583[(1)] = (5));

} else {
var statearr_21426_21584 = state_21422__$1;
(statearr_21426_21584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (5))){
var state_21422__$1 = state_21422;
var statearr_21427_21585 = state_21422__$1;
(statearr_21427_21585[(2)] = null);

(statearr_21427_21585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (6))){
var state_21422__$1 = state_21422;
var statearr_21428_21586 = state_21422__$1;
(statearr_21428_21586[(2)] = null);

(statearr_21428_21586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (7))){
var inst_21418 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
var statearr_21429_21587 = state_21422__$1;
(statearr_21429_21587[(2)] = inst_21418);

(statearr_21429_21587[(1)] = (3));


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
});})(__21578,c__21024__auto___21581,G__21409_21579,n__19273__auto___21577,jobs,results,process,async))
;
return ((function (__21578,switch__20912__auto__,c__21024__auto___21581,G__21409_21579,n__19273__auto___21577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0 = (function (){
var statearr_21433 = [null,null,null,null,null,null,null];
(statearr_21433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__);

(statearr_21433[(1)] = (1));

return statearr_21433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1 = (function (state_21422){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21434){if((e21434 instanceof Object)){
var ex__20916__auto__ = e21434;
var statearr_21435_21588 = state_21422;
(statearr_21435_21588[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21589 = state_21422;
state_21422 = G__21589;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = function(state_21422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1.call(this,state_21422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__;
})()
;})(__21578,switch__20912__auto__,c__21024__auto___21581,G__21409_21579,n__19273__auto___21577,jobs,results,process,async))
})();
var state__21026__auto__ = (function (){var statearr_21436 = f__21025__auto__.call(null);
(statearr_21436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___21581);

return statearr_21436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(__21578,c__21024__auto___21581,G__21409_21579,n__19273__auto___21577,jobs,results,process,async))
);


break;
case "async":
var c__21024__auto___21590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21578,c__21024__auto___21590,G__21409_21579,n__19273__auto___21577,jobs,results,process,async){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (__21578,c__21024__auto___21590,G__21409_21579,n__19273__auto___21577,jobs,results,process,async){
return (function (state_21449){
var state_val_21450 = (state_21449[(1)]);
if((state_val_21450 === (1))){
var state_21449__$1 = state_21449;
var statearr_21451_21591 = state_21449__$1;
(statearr_21451_21591[(2)] = null);

(statearr_21451_21591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (2))){
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21449__$1,(4),jobs);
} else {
if((state_val_21450 === (3))){
var inst_21447 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21449__$1,inst_21447);
} else {
if((state_val_21450 === (4))){
var inst_21439 = (state_21449[(2)]);
var inst_21440 = async.call(null,inst_21439);
var state_21449__$1 = state_21449;
if(cljs.core.truth_(inst_21440)){
var statearr_21452_21592 = state_21449__$1;
(statearr_21452_21592[(1)] = (5));

} else {
var statearr_21453_21593 = state_21449__$1;
(statearr_21453_21593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (5))){
var state_21449__$1 = state_21449;
var statearr_21454_21594 = state_21449__$1;
(statearr_21454_21594[(2)] = null);

(statearr_21454_21594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (6))){
var state_21449__$1 = state_21449;
var statearr_21455_21595 = state_21449__$1;
(statearr_21455_21595[(2)] = null);

(statearr_21455_21595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (7))){
var inst_21445 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21456_21596 = state_21449__$1;
(statearr_21456_21596[(2)] = inst_21445);

(statearr_21456_21596[(1)] = (3));


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
});})(__21578,c__21024__auto___21590,G__21409_21579,n__19273__auto___21577,jobs,results,process,async))
;
return ((function (__21578,switch__20912__auto__,c__21024__auto___21590,G__21409_21579,n__19273__auto___21577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0 = (function (){
var statearr_21460 = [null,null,null,null,null,null,null];
(statearr_21460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__);

(statearr_21460[(1)] = (1));

return statearr_21460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1 = (function (state_21449){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object)){
var ex__20916__auto__ = e21461;
var statearr_21462_21597 = state_21449;
(statearr_21462_21597[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21598 = state_21449;
state_21449 = G__21598;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = function(state_21449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1.call(this,state_21449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__;
})()
;})(__21578,switch__20912__auto__,c__21024__auto___21590,G__21409_21579,n__19273__auto___21577,jobs,results,process,async))
})();
var state__21026__auto__ = (function (){var statearr_21463 = f__21025__auto__.call(null);
(statearr_21463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___21590);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(__21578,c__21024__auto___21590,G__21409_21579,n__19273__auto___21577,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21599 = (__21578 + (1));
__21578 = G__21599;
continue;
} else {
}
break;
}

var c__21024__auto___21600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___21600,jobs,results,process,async){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___21600,jobs,results,process,async){
return (function (state_21485){
var state_val_21486 = (state_21485[(1)]);
if((state_val_21486 === (1))){
var state_21485__$1 = state_21485;
var statearr_21487_21601 = state_21485__$1;
(statearr_21487_21601[(2)] = null);

(statearr_21487_21601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (2))){
var state_21485__$1 = state_21485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21485__$1,(4),from);
} else {
if((state_val_21486 === (3))){
var inst_21483 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21485__$1,inst_21483);
} else {
if((state_val_21486 === (4))){
var inst_21466 = (state_21485[(7)]);
var inst_21466__$1 = (state_21485[(2)]);
var inst_21467 = (inst_21466__$1 == null);
var state_21485__$1 = (function (){var statearr_21488 = state_21485;
(statearr_21488[(7)] = inst_21466__$1);

return statearr_21488;
})();
if(cljs.core.truth_(inst_21467)){
var statearr_21489_21602 = state_21485__$1;
(statearr_21489_21602[(1)] = (5));

} else {
var statearr_21490_21603 = state_21485__$1;
(statearr_21490_21603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (5))){
var inst_21469 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21485__$1 = state_21485;
var statearr_21491_21604 = state_21485__$1;
(statearr_21491_21604[(2)] = inst_21469);

(statearr_21491_21604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (6))){
var inst_21471 = (state_21485[(8)]);
var inst_21466 = (state_21485[(7)]);
var inst_21471__$1 = cljs.core.async.chan.call(null,(1));
var inst_21472 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21473 = [inst_21466,inst_21471__$1];
var inst_21474 = (new cljs.core.PersistentVector(null,2,(5),inst_21472,inst_21473,null));
var state_21485__$1 = (function (){var statearr_21492 = state_21485;
(statearr_21492[(8)] = inst_21471__$1);

return statearr_21492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21485__$1,(8),jobs,inst_21474);
} else {
if((state_val_21486 === (7))){
var inst_21481 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
var statearr_21493_21605 = state_21485__$1;
(statearr_21493_21605[(2)] = inst_21481);

(statearr_21493_21605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (8))){
var inst_21471 = (state_21485[(8)]);
var inst_21476 = (state_21485[(2)]);
var state_21485__$1 = (function (){var statearr_21494 = state_21485;
(statearr_21494[(9)] = inst_21476);

return statearr_21494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21485__$1,(9),results,inst_21471);
} else {
if((state_val_21486 === (9))){
var inst_21478 = (state_21485[(2)]);
var state_21485__$1 = (function (){var statearr_21495 = state_21485;
(statearr_21495[(10)] = inst_21478);

return statearr_21495;
})();
var statearr_21496_21606 = state_21485__$1;
(statearr_21496_21606[(2)] = null);

(statearr_21496_21606[(1)] = (2));


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
});})(c__21024__auto___21600,jobs,results,process,async))
;
return ((function (switch__20912__auto__,c__21024__auto___21600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0 = (function (){
var statearr_21500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__);

(statearr_21500[(1)] = (1));

return statearr_21500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1 = (function (state_21485){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21501){if((e21501 instanceof Object)){
var ex__20916__auto__ = e21501;
var statearr_21502_21607 = state_21485;
(statearr_21502_21607[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21608 = state_21485;
state_21485 = G__21608;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = function(state_21485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1.call(this,state_21485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___21600,jobs,results,process,async))
})();
var state__21026__auto__ = (function (){var statearr_21503 = f__21025__auto__.call(null);
(statearr_21503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___21600);

return statearr_21503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___21600,jobs,results,process,async))
);


var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__,jobs,results,process,async){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__,jobs,results,process,async){
return (function (state_21541){
var state_val_21542 = (state_21541[(1)]);
if((state_val_21542 === (7))){
var inst_21537 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21543_21609 = state_21541__$1;
(statearr_21543_21609[(2)] = inst_21537);

(statearr_21543_21609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (20))){
var state_21541__$1 = state_21541;
var statearr_21544_21610 = state_21541__$1;
(statearr_21544_21610[(2)] = null);

(statearr_21544_21610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (1))){
var state_21541__$1 = state_21541;
var statearr_21545_21611 = state_21541__$1;
(statearr_21545_21611[(2)] = null);

(statearr_21545_21611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (4))){
var inst_21506 = (state_21541[(7)]);
var inst_21506__$1 = (state_21541[(2)]);
var inst_21507 = (inst_21506__$1 == null);
var state_21541__$1 = (function (){var statearr_21546 = state_21541;
(statearr_21546[(7)] = inst_21506__$1);

return statearr_21546;
})();
if(cljs.core.truth_(inst_21507)){
var statearr_21547_21612 = state_21541__$1;
(statearr_21547_21612[(1)] = (5));

} else {
var statearr_21548_21613 = state_21541__$1;
(statearr_21548_21613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (15))){
var inst_21519 = (state_21541[(8)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21541__$1,(18),to,inst_21519);
} else {
if((state_val_21542 === (21))){
var inst_21532 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21549_21614 = state_21541__$1;
(statearr_21549_21614[(2)] = inst_21532);

(statearr_21549_21614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (13))){
var inst_21534 = (state_21541[(2)]);
var state_21541__$1 = (function (){var statearr_21550 = state_21541;
(statearr_21550[(9)] = inst_21534);

return statearr_21550;
})();
var statearr_21551_21615 = state_21541__$1;
(statearr_21551_21615[(2)] = null);

(statearr_21551_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (6))){
var inst_21506 = (state_21541[(7)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21541__$1,(11),inst_21506);
} else {
if((state_val_21542 === (17))){
var inst_21527 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
if(cljs.core.truth_(inst_21527)){
var statearr_21552_21616 = state_21541__$1;
(statearr_21552_21616[(1)] = (19));

} else {
var statearr_21553_21617 = state_21541__$1;
(statearr_21553_21617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (3))){
var inst_21539 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21541__$1,inst_21539);
} else {
if((state_val_21542 === (12))){
var inst_21516 = (state_21541[(10)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21541__$1,(14),inst_21516);
} else {
if((state_val_21542 === (2))){
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21541__$1,(4),results);
} else {
if((state_val_21542 === (19))){
var state_21541__$1 = state_21541;
var statearr_21554_21618 = state_21541__$1;
(statearr_21554_21618[(2)] = null);

(statearr_21554_21618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (11))){
var inst_21516 = (state_21541[(2)]);
var state_21541__$1 = (function (){var statearr_21555 = state_21541;
(statearr_21555[(10)] = inst_21516);

return statearr_21555;
})();
var statearr_21556_21619 = state_21541__$1;
(statearr_21556_21619[(2)] = null);

(statearr_21556_21619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (9))){
var state_21541__$1 = state_21541;
var statearr_21557_21620 = state_21541__$1;
(statearr_21557_21620[(2)] = null);

(statearr_21557_21620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (5))){
var state_21541__$1 = state_21541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21558_21621 = state_21541__$1;
(statearr_21558_21621[(1)] = (8));

} else {
var statearr_21559_21622 = state_21541__$1;
(statearr_21559_21622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (14))){
var inst_21519 = (state_21541[(8)]);
var inst_21521 = (state_21541[(11)]);
var inst_21519__$1 = (state_21541[(2)]);
var inst_21520 = (inst_21519__$1 == null);
var inst_21521__$1 = cljs.core.not.call(null,inst_21520);
var state_21541__$1 = (function (){var statearr_21560 = state_21541;
(statearr_21560[(8)] = inst_21519__$1);

(statearr_21560[(11)] = inst_21521__$1);

return statearr_21560;
})();
if(inst_21521__$1){
var statearr_21561_21623 = state_21541__$1;
(statearr_21561_21623[(1)] = (15));

} else {
var statearr_21562_21624 = state_21541__$1;
(statearr_21562_21624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (16))){
var inst_21521 = (state_21541[(11)]);
var state_21541__$1 = state_21541;
var statearr_21563_21625 = state_21541__$1;
(statearr_21563_21625[(2)] = inst_21521);

(statearr_21563_21625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (10))){
var inst_21513 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21564_21626 = state_21541__$1;
(statearr_21564_21626[(2)] = inst_21513);

(statearr_21564_21626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (18))){
var inst_21524 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21565_21627 = state_21541__$1;
(statearr_21565_21627[(2)] = inst_21524);

(statearr_21565_21627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (8))){
var inst_21510 = cljs.core.async.close_BANG_.call(null,to);
var state_21541__$1 = state_21541;
var statearr_21566_21628 = state_21541__$1;
(statearr_21566_21628[(2)] = inst_21510);

(statearr_21566_21628[(1)] = (10));


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
});})(c__21024__auto__,jobs,results,process,async))
;
return ((function (switch__20912__auto__,c__21024__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0 = (function (){
var statearr_21570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__);

(statearr_21570[(1)] = (1));

return statearr_21570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1 = (function (state_21541){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21571){if((e21571 instanceof Object)){
var ex__20916__auto__ = e21571;
var statearr_21572_21629 = state_21541;
(statearr_21572_21629[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21630 = state_21541;
state_21541 = G__21630;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__ = function(state_21541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1.call(this,state_21541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20913__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__,jobs,results,process,async))
})();
var state__21026__auto__ = (function (){var statearr_21573 = f__21025__auto__.call(null);
(statearr_21573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_21573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__,jobs,results,process,async))
);

return c__21024__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21631 = [];
var len__19428__auto___21634 = arguments.length;
var i__19429__auto___21635 = (0);
while(true){
if((i__19429__auto___21635 < len__19428__auto___21634)){
args21631.push((arguments[i__19429__auto___21635]));

var G__21636 = (i__19429__auto___21635 + (1));
i__19429__auto___21635 = G__21636;
continue;
} else {
}
break;
}

var G__21633 = args21631.length;
switch (G__21633) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21631.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21638 = [];
var len__19428__auto___21641 = arguments.length;
var i__19429__auto___21642 = (0);
while(true){
if((i__19429__auto___21642 < len__19428__auto___21641)){
args21638.push((arguments[i__19429__auto___21642]));

var G__21643 = (i__19429__auto___21642 + (1));
i__19429__auto___21642 = G__21643;
continue;
} else {
}
break;
}

var G__21640 = args21638.length;
switch (G__21640) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21638.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21645 = [];
var len__19428__auto___21698 = arguments.length;
var i__19429__auto___21699 = (0);
while(true){
if((i__19429__auto___21699 < len__19428__auto___21698)){
args21645.push((arguments[i__19429__auto___21699]));

var G__21700 = (i__19429__auto___21699 + (1));
i__19429__auto___21699 = G__21700;
continue;
} else {
}
break;
}

var G__21647 = args21645.length;
switch (G__21647) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21645.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21024__auto___21702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___21702,tc,fc){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___21702,tc,fc){
return (function (state_21673){
var state_val_21674 = (state_21673[(1)]);
if((state_val_21674 === (7))){
var inst_21669 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
var statearr_21675_21703 = state_21673__$1;
(statearr_21675_21703[(2)] = inst_21669);

(statearr_21675_21703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (1))){
var state_21673__$1 = state_21673;
var statearr_21676_21704 = state_21673__$1;
(statearr_21676_21704[(2)] = null);

(statearr_21676_21704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (4))){
var inst_21650 = (state_21673[(7)]);
var inst_21650__$1 = (state_21673[(2)]);
var inst_21651 = (inst_21650__$1 == null);
var state_21673__$1 = (function (){var statearr_21677 = state_21673;
(statearr_21677[(7)] = inst_21650__$1);

return statearr_21677;
})();
if(cljs.core.truth_(inst_21651)){
var statearr_21678_21705 = state_21673__$1;
(statearr_21678_21705[(1)] = (5));

} else {
var statearr_21679_21706 = state_21673__$1;
(statearr_21679_21706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (13))){
var state_21673__$1 = state_21673;
var statearr_21680_21707 = state_21673__$1;
(statearr_21680_21707[(2)] = null);

(statearr_21680_21707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (6))){
var inst_21650 = (state_21673[(7)]);
var inst_21656 = p.call(null,inst_21650);
var state_21673__$1 = state_21673;
if(cljs.core.truth_(inst_21656)){
var statearr_21681_21708 = state_21673__$1;
(statearr_21681_21708[(1)] = (9));

} else {
var statearr_21682_21709 = state_21673__$1;
(statearr_21682_21709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (3))){
var inst_21671 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21673__$1,inst_21671);
} else {
if((state_val_21674 === (12))){
var state_21673__$1 = state_21673;
var statearr_21683_21710 = state_21673__$1;
(statearr_21683_21710[(2)] = null);

(statearr_21683_21710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (2))){
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21673__$1,(4),ch);
} else {
if((state_val_21674 === (11))){
var inst_21650 = (state_21673[(7)]);
var inst_21660 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21673__$1,(8),inst_21660,inst_21650);
} else {
if((state_val_21674 === (9))){
var state_21673__$1 = state_21673;
var statearr_21684_21711 = state_21673__$1;
(statearr_21684_21711[(2)] = tc);

(statearr_21684_21711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (5))){
var inst_21653 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21654 = cljs.core.async.close_BANG_.call(null,fc);
var state_21673__$1 = (function (){var statearr_21685 = state_21673;
(statearr_21685[(8)] = inst_21653);

return statearr_21685;
})();
var statearr_21686_21712 = state_21673__$1;
(statearr_21686_21712[(2)] = inst_21654);

(statearr_21686_21712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (14))){
var inst_21667 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
var statearr_21687_21713 = state_21673__$1;
(statearr_21687_21713[(2)] = inst_21667);

(statearr_21687_21713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (10))){
var state_21673__$1 = state_21673;
var statearr_21688_21714 = state_21673__$1;
(statearr_21688_21714[(2)] = fc);

(statearr_21688_21714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (8))){
var inst_21662 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
if(cljs.core.truth_(inst_21662)){
var statearr_21689_21715 = state_21673__$1;
(statearr_21689_21715[(1)] = (12));

} else {
var statearr_21690_21716 = state_21673__$1;
(statearr_21690_21716[(1)] = (13));

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
});})(c__21024__auto___21702,tc,fc))
;
return ((function (switch__20912__auto__,c__21024__auto___21702,tc,fc){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_21694 = [null,null,null,null,null,null,null,null,null];
(statearr_21694[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_21694[(1)] = (1));

return statearr_21694;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_21673){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21695){if((e21695 instanceof Object)){
var ex__20916__auto__ = e21695;
var statearr_21696_21717 = state_21673;
(statearr_21696_21717[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21718 = state_21673;
state_21673 = G__21718;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_21673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_21673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___21702,tc,fc))
})();
var state__21026__auto__ = (function (){var statearr_21697 = f__21025__auto__.call(null);
(statearr_21697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___21702);

return statearr_21697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___21702,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_21782){
var state_val_21783 = (state_21782[(1)]);
if((state_val_21783 === (7))){
var inst_21778 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
var statearr_21784_21805 = state_21782__$1;
(statearr_21784_21805[(2)] = inst_21778);

(statearr_21784_21805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (1))){
var inst_21762 = init;
var state_21782__$1 = (function (){var statearr_21785 = state_21782;
(statearr_21785[(7)] = inst_21762);

return statearr_21785;
})();
var statearr_21786_21806 = state_21782__$1;
(statearr_21786_21806[(2)] = null);

(statearr_21786_21806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (4))){
var inst_21765 = (state_21782[(8)]);
var inst_21765__$1 = (state_21782[(2)]);
var inst_21766 = (inst_21765__$1 == null);
var state_21782__$1 = (function (){var statearr_21787 = state_21782;
(statearr_21787[(8)] = inst_21765__$1);

return statearr_21787;
})();
if(cljs.core.truth_(inst_21766)){
var statearr_21788_21807 = state_21782__$1;
(statearr_21788_21807[(1)] = (5));

} else {
var statearr_21789_21808 = state_21782__$1;
(statearr_21789_21808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (6))){
var inst_21769 = (state_21782[(9)]);
var inst_21762 = (state_21782[(7)]);
var inst_21765 = (state_21782[(8)]);
var inst_21769__$1 = f.call(null,inst_21762,inst_21765);
var inst_21770 = cljs.core.reduced_QMARK_.call(null,inst_21769__$1);
var state_21782__$1 = (function (){var statearr_21790 = state_21782;
(statearr_21790[(9)] = inst_21769__$1);

return statearr_21790;
})();
if(inst_21770){
var statearr_21791_21809 = state_21782__$1;
(statearr_21791_21809[(1)] = (8));

} else {
var statearr_21792_21810 = state_21782__$1;
(statearr_21792_21810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (3))){
var inst_21780 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21782__$1,inst_21780);
} else {
if((state_val_21783 === (2))){
var state_21782__$1 = state_21782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21782__$1,(4),ch);
} else {
if((state_val_21783 === (9))){
var inst_21769 = (state_21782[(9)]);
var inst_21762 = inst_21769;
var state_21782__$1 = (function (){var statearr_21793 = state_21782;
(statearr_21793[(7)] = inst_21762);

return statearr_21793;
})();
var statearr_21794_21811 = state_21782__$1;
(statearr_21794_21811[(2)] = null);

(statearr_21794_21811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (5))){
var inst_21762 = (state_21782[(7)]);
var state_21782__$1 = state_21782;
var statearr_21795_21812 = state_21782__$1;
(statearr_21795_21812[(2)] = inst_21762);

(statearr_21795_21812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (10))){
var inst_21776 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
var statearr_21796_21813 = state_21782__$1;
(statearr_21796_21813[(2)] = inst_21776);

(statearr_21796_21813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (8))){
var inst_21769 = (state_21782[(9)]);
var inst_21772 = cljs.core.deref.call(null,inst_21769);
var state_21782__$1 = state_21782;
var statearr_21797_21814 = state_21782__$1;
(statearr_21797_21814[(2)] = inst_21772);

(statearr_21797_21814[(1)] = (10));


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
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20913__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20913__auto____0 = (function (){
var statearr_21801 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21801[(0)] = cljs$core$async$reduce_$_state_machine__20913__auto__);

(statearr_21801[(1)] = (1));

return statearr_21801;
});
var cljs$core$async$reduce_$_state_machine__20913__auto____1 = (function (state_21782){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21802){if((e21802 instanceof Object)){
var ex__20916__auto__ = e21802;
var statearr_21803_21815 = state_21782;
(statearr_21803_21815[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21816 = state_21782;
state_21782 = G__21816;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20913__auto__ = function(state_21782){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20913__auto____1.call(this,state_21782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20913__auto____0;
cljs$core$async$reduce_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20913__auto____1;
return cljs$core$async$reduce_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_21804 = f__21025__auto__.call(null);
(statearr_21804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_21804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21817 = [];
var len__19428__auto___21869 = arguments.length;
var i__19429__auto___21870 = (0);
while(true){
if((i__19429__auto___21870 < len__19428__auto___21869)){
args21817.push((arguments[i__19429__auto___21870]));

var G__21871 = (i__19429__auto___21870 + (1));
i__19429__auto___21870 = G__21871;
continue;
} else {
}
break;
}

var G__21819 = args21817.length;
switch (G__21819) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21817.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_21844){
var state_val_21845 = (state_21844[(1)]);
if((state_val_21845 === (7))){
var inst_21826 = (state_21844[(2)]);
var state_21844__$1 = state_21844;
var statearr_21846_21873 = state_21844__$1;
(statearr_21846_21873[(2)] = inst_21826);

(statearr_21846_21873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (1))){
var inst_21820 = cljs.core.seq.call(null,coll);
var inst_21821 = inst_21820;
var state_21844__$1 = (function (){var statearr_21847 = state_21844;
(statearr_21847[(7)] = inst_21821);

return statearr_21847;
})();
var statearr_21848_21874 = state_21844__$1;
(statearr_21848_21874[(2)] = null);

(statearr_21848_21874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (4))){
var inst_21821 = (state_21844[(7)]);
var inst_21824 = cljs.core.first.call(null,inst_21821);
var state_21844__$1 = state_21844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21844__$1,(7),ch,inst_21824);
} else {
if((state_val_21845 === (13))){
var inst_21838 = (state_21844[(2)]);
var state_21844__$1 = state_21844;
var statearr_21849_21875 = state_21844__$1;
(statearr_21849_21875[(2)] = inst_21838);

(statearr_21849_21875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (6))){
var inst_21829 = (state_21844[(2)]);
var state_21844__$1 = state_21844;
if(cljs.core.truth_(inst_21829)){
var statearr_21850_21876 = state_21844__$1;
(statearr_21850_21876[(1)] = (8));

} else {
var statearr_21851_21877 = state_21844__$1;
(statearr_21851_21877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (3))){
var inst_21842 = (state_21844[(2)]);
var state_21844__$1 = state_21844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21844__$1,inst_21842);
} else {
if((state_val_21845 === (12))){
var state_21844__$1 = state_21844;
var statearr_21852_21878 = state_21844__$1;
(statearr_21852_21878[(2)] = null);

(statearr_21852_21878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (2))){
var inst_21821 = (state_21844[(7)]);
var state_21844__$1 = state_21844;
if(cljs.core.truth_(inst_21821)){
var statearr_21853_21879 = state_21844__$1;
(statearr_21853_21879[(1)] = (4));

} else {
var statearr_21854_21880 = state_21844__$1;
(statearr_21854_21880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (11))){
var inst_21835 = cljs.core.async.close_BANG_.call(null,ch);
var state_21844__$1 = state_21844;
var statearr_21855_21881 = state_21844__$1;
(statearr_21855_21881[(2)] = inst_21835);

(statearr_21855_21881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (9))){
var state_21844__$1 = state_21844;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21856_21882 = state_21844__$1;
(statearr_21856_21882[(1)] = (11));

} else {
var statearr_21857_21883 = state_21844__$1;
(statearr_21857_21883[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (5))){
var inst_21821 = (state_21844[(7)]);
var state_21844__$1 = state_21844;
var statearr_21858_21884 = state_21844__$1;
(statearr_21858_21884[(2)] = inst_21821);

(statearr_21858_21884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (10))){
var inst_21840 = (state_21844[(2)]);
var state_21844__$1 = state_21844;
var statearr_21859_21885 = state_21844__$1;
(statearr_21859_21885[(2)] = inst_21840);

(statearr_21859_21885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21845 === (8))){
var inst_21821 = (state_21844[(7)]);
var inst_21831 = cljs.core.next.call(null,inst_21821);
var inst_21821__$1 = inst_21831;
var state_21844__$1 = (function (){var statearr_21860 = state_21844;
(statearr_21860[(7)] = inst_21821__$1);

return statearr_21860;
})();
var statearr_21861_21886 = state_21844__$1;
(statearr_21861_21886[(2)] = null);

(statearr_21861_21886[(1)] = (2));


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
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_21865 = [null,null,null,null,null,null,null,null];
(statearr_21865[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_21865[(1)] = (1));

return statearr_21865;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_21844){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_21844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e21866){if((e21866 instanceof Object)){
var ex__20916__auto__ = e21866;
var statearr_21867_21887 = state_21844;
(statearr_21867_21887[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21888 = state_21844;
state_21844 = G__21888;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_21844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_21844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_21868 = f__21025__auto__.call(null);
(statearr_21868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_21868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19025__auto__ = (((_ == null))?null:_);
var m__19026__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,_);
} else {
var m__19026__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22110 = (function (mult,ch,cs,meta22111){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22111 = meta22111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22112,meta22111__$1){
var self__ = this;
var _22112__$1 = this;
return (new cljs.core.async.t_cljs$core$async22110(self__.mult,self__.ch,self__.cs,meta22111__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22112){
var self__ = this;
var _22112__$1 = this;
return self__.meta22111;
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22111","meta22111",-1403316613,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22110";

cljs.core.async.t_cljs$core$async22110.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22110");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22110 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22110(mult__$1,ch__$1,cs__$1,meta22111){
return (new cljs.core.async.t_cljs$core$async22110(mult__$1,ch__$1,cs__$1,meta22111));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22110(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21024__auto___22331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___22331,cs,m,dchan,dctr,done){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___22331,cs,m,dchan,dctr,done){
return (function (state_22243){
var state_val_22244 = (state_22243[(1)]);
if((state_val_22244 === (7))){
var inst_22239 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22245_22332 = state_22243__$1;
(statearr_22245_22332[(2)] = inst_22239);

(statearr_22245_22332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (20))){
var inst_22144 = (state_22243[(7)]);
var inst_22154 = cljs.core.first.call(null,inst_22144);
var inst_22155 = cljs.core.nth.call(null,inst_22154,(0),null);
var inst_22156 = cljs.core.nth.call(null,inst_22154,(1),null);
var state_22243__$1 = (function (){var statearr_22246 = state_22243;
(statearr_22246[(8)] = inst_22155);

return statearr_22246;
})();
if(cljs.core.truth_(inst_22156)){
var statearr_22247_22333 = state_22243__$1;
(statearr_22247_22333[(1)] = (22));

} else {
var statearr_22248_22334 = state_22243__$1;
(statearr_22248_22334[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (27))){
var inst_22191 = (state_22243[(9)]);
var inst_22184 = (state_22243[(10)]);
var inst_22115 = (state_22243[(11)]);
var inst_22186 = (state_22243[(12)]);
var inst_22191__$1 = cljs.core._nth.call(null,inst_22184,inst_22186);
var inst_22192 = cljs.core.async.put_BANG_.call(null,inst_22191__$1,inst_22115,done);
var state_22243__$1 = (function (){var statearr_22249 = state_22243;
(statearr_22249[(9)] = inst_22191__$1);

return statearr_22249;
})();
if(cljs.core.truth_(inst_22192)){
var statearr_22250_22335 = state_22243__$1;
(statearr_22250_22335[(1)] = (30));

} else {
var statearr_22251_22336 = state_22243__$1;
(statearr_22251_22336[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (1))){
var state_22243__$1 = state_22243;
var statearr_22252_22337 = state_22243__$1;
(statearr_22252_22337[(2)] = null);

(statearr_22252_22337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (24))){
var inst_22144 = (state_22243[(7)]);
var inst_22161 = (state_22243[(2)]);
var inst_22162 = cljs.core.next.call(null,inst_22144);
var inst_22124 = inst_22162;
var inst_22125 = null;
var inst_22126 = (0);
var inst_22127 = (0);
var state_22243__$1 = (function (){var statearr_22253 = state_22243;
(statearr_22253[(13)] = inst_22124);

(statearr_22253[(14)] = inst_22125);

(statearr_22253[(15)] = inst_22161);

(statearr_22253[(16)] = inst_22127);

(statearr_22253[(17)] = inst_22126);

return statearr_22253;
})();
var statearr_22254_22338 = state_22243__$1;
(statearr_22254_22338[(2)] = null);

(statearr_22254_22338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (39))){
var state_22243__$1 = state_22243;
var statearr_22258_22339 = state_22243__$1;
(statearr_22258_22339[(2)] = null);

(statearr_22258_22339[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (4))){
var inst_22115 = (state_22243[(11)]);
var inst_22115__$1 = (state_22243[(2)]);
var inst_22116 = (inst_22115__$1 == null);
var state_22243__$1 = (function (){var statearr_22259 = state_22243;
(statearr_22259[(11)] = inst_22115__$1);

return statearr_22259;
})();
if(cljs.core.truth_(inst_22116)){
var statearr_22260_22340 = state_22243__$1;
(statearr_22260_22340[(1)] = (5));

} else {
var statearr_22261_22341 = state_22243__$1;
(statearr_22261_22341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (15))){
var inst_22124 = (state_22243[(13)]);
var inst_22125 = (state_22243[(14)]);
var inst_22127 = (state_22243[(16)]);
var inst_22126 = (state_22243[(17)]);
var inst_22140 = (state_22243[(2)]);
var inst_22141 = (inst_22127 + (1));
var tmp22255 = inst_22124;
var tmp22256 = inst_22125;
var tmp22257 = inst_22126;
var inst_22124__$1 = tmp22255;
var inst_22125__$1 = tmp22256;
var inst_22126__$1 = tmp22257;
var inst_22127__$1 = inst_22141;
var state_22243__$1 = (function (){var statearr_22262 = state_22243;
(statearr_22262[(13)] = inst_22124__$1);

(statearr_22262[(18)] = inst_22140);

(statearr_22262[(14)] = inst_22125__$1);

(statearr_22262[(16)] = inst_22127__$1);

(statearr_22262[(17)] = inst_22126__$1);

return statearr_22262;
})();
var statearr_22263_22342 = state_22243__$1;
(statearr_22263_22342[(2)] = null);

(statearr_22263_22342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (21))){
var inst_22165 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22267_22343 = state_22243__$1;
(statearr_22267_22343[(2)] = inst_22165);

(statearr_22267_22343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (31))){
var inst_22191 = (state_22243[(9)]);
var inst_22195 = done.call(null,null);
var inst_22196 = cljs.core.async.untap_STAR_.call(null,m,inst_22191);
var state_22243__$1 = (function (){var statearr_22268 = state_22243;
(statearr_22268[(19)] = inst_22195);

return statearr_22268;
})();
var statearr_22269_22344 = state_22243__$1;
(statearr_22269_22344[(2)] = inst_22196);

(statearr_22269_22344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (32))){
var inst_22185 = (state_22243[(20)]);
var inst_22184 = (state_22243[(10)]);
var inst_22183 = (state_22243[(21)]);
var inst_22186 = (state_22243[(12)]);
var inst_22198 = (state_22243[(2)]);
var inst_22199 = (inst_22186 + (1));
var tmp22264 = inst_22185;
var tmp22265 = inst_22184;
var tmp22266 = inst_22183;
var inst_22183__$1 = tmp22266;
var inst_22184__$1 = tmp22265;
var inst_22185__$1 = tmp22264;
var inst_22186__$1 = inst_22199;
var state_22243__$1 = (function (){var statearr_22270 = state_22243;
(statearr_22270[(20)] = inst_22185__$1);

(statearr_22270[(22)] = inst_22198);

(statearr_22270[(10)] = inst_22184__$1);

(statearr_22270[(21)] = inst_22183__$1);

(statearr_22270[(12)] = inst_22186__$1);

return statearr_22270;
})();
var statearr_22271_22345 = state_22243__$1;
(statearr_22271_22345[(2)] = null);

(statearr_22271_22345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (40))){
var inst_22211 = (state_22243[(23)]);
var inst_22215 = done.call(null,null);
var inst_22216 = cljs.core.async.untap_STAR_.call(null,m,inst_22211);
var state_22243__$1 = (function (){var statearr_22272 = state_22243;
(statearr_22272[(24)] = inst_22215);

return statearr_22272;
})();
var statearr_22273_22346 = state_22243__$1;
(statearr_22273_22346[(2)] = inst_22216);

(statearr_22273_22346[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (33))){
var inst_22202 = (state_22243[(25)]);
var inst_22204 = cljs.core.chunked_seq_QMARK_.call(null,inst_22202);
var state_22243__$1 = state_22243;
if(inst_22204){
var statearr_22274_22347 = state_22243__$1;
(statearr_22274_22347[(1)] = (36));

} else {
var statearr_22275_22348 = state_22243__$1;
(statearr_22275_22348[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (13))){
var inst_22134 = (state_22243[(26)]);
var inst_22137 = cljs.core.async.close_BANG_.call(null,inst_22134);
var state_22243__$1 = state_22243;
var statearr_22276_22349 = state_22243__$1;
(statearr_22276_22349[(2)] = inst_22137);

(statearr_22276_22349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (22))){
var inst_22155 = (state_22243[(8)]);
var inst_22158 = cljs.core.async.close_BANG_.call(null,inst_22155);
var state_22243__$1 = state_22243;
var statearr_22277_22350 = state_22243__$1;
(statearr_22277_22350[(2)] = inst_22158);

(statearr_22277_22350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (36))){
var inst_22202 = (state_22243[(25)]);
var inst_22206 = cljs.core.chunk_first.call(null,inst_22202);
var inst_22207 = cljs.core.chunk_rest.call(null,inst_22202);
var inst_22208 = cljs.core.count.call(null,inst_22206);
var inst_22183 = inst_22207;
var inst_22184 = inst_22206;
var inst_22185 = inst_22208;
var inst_22186 = (0);
var state_22243__$1 = (function (){var statearr_22278 = state_22243;
(statearr_22278[(20)] = inst_22185);

(statearr_22278[(10)] = inst_22184);

(statearr_22278[(21)] = inst_22183);

(statearr_22278[(12)] = inst_22186);

return statearr_22278;
})();
var statearr_22279_22351 = state_22243__$1;
(statearr_22279_22351[(2)] = null);

(statearr_22279_22351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (41))){
var inst_22202 = (state_22243[(25)]);
var inst_22218 = (state_22243[(2)]);
var inst_22219 = cljs.core.next.call(null,inst_22202);
var inst_22183 = inst_22219;
var inst_22184 = null;
var inst_22185 = (0);
var inst_22186 = (0);
var state_22243__$1 = (function (){var statearr_22280 = state_22243;
(statearr_22280[(20)] = inst_22185);

(statearr_22280[(10)] = inst_22184);

(statearr_22280[(21)] = inst_22183);

(statearr_22280[(27)] = inst_22218);

(statearr_22280[(12)] = inst_22186);

return statearr_22280;
})();
var statearr_22281_22352 = state_22243__$1;
(statearr_22281_22352[(2)] = null);

(statearr_22281_22352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (43))){
var state_22243__$1 = state_22243;
var statearr_22282_22353 = state_22243__$1;
(statearr_22282_22353[(2)] = null);

(statearr_22282_22353[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (29))){
var inst_22227 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22283_22354 = state_22243__$1;
(statearr_22283_22354[(2)] = inst_22227);

(statearr_22283_22354[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (44))){
var inst_22236 = (state_22243[(2)]);
var state_22243__$1 = (function (){var statearr_22284 = state_22243;
(statearr_22284[(28)] = inst_22236);

return statearr_22284;
})();
var statearr_22285_22355 = state_22243__$1;
(statearr_22285_22355[(2)] = null);

(statearr_22285_22355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (6))){
var inst_22175 = (state_22243[(29)]);
var inst_22174 = cljs.core.deref.call(null,cs);
var inst_22175__$1 = cljs.core.keys.call(null,inst_22174);
var inst_22176 = cljs.core.count.call(null,inst_22175__$1);
var inst_22177 = cljs.core.reset_BANG_.call(null,dctr,inst_22176);
var inst_22182 = cljs.core.seq.call(null,inst_22175__$1);
var inst_22183 = inst_22182;
var inst_22184 = null;
var inst_22185 = (0);
var inst_22186 = (0);
var state_22243__$1 = (function (){var statearr_22286 = state_22243;
(statearr_22286[(29)] = inst_22175__$1);

(statearr_22286[(20)] = inst_22185);

(statearr_22286[(10)] = inst_22184);

(statearr_22286[(21)] = inst_22183);

(statearr_22286[(12)] = inst_22186);

(statearr_22286[(30)] = inst_22177);

return statearr_22286;
})();
var statearr_22287_22356 = state_22243__$1;
(statearr_22287_22356[(2)] = null);

(statearr_22287_22356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (28))){
var inst_22202 = (state_22243[(25)]);
var inst_22183 = (state_22243[(21)]);
var inst_22202__$1 = cljs.core.seq.call(null,inst_22183);
var state_22243__$1 = (function (){var statearr_22288 = state_22243;
(statearr_22288[(25)] = inst_22202__$1);

return statearr_22288;
})();
if(inst_22202__$1){
var statearr_22289_22357 = state_22243__$1;
(statearr_22289_22357[(1)] = (33));

} else {
var statearr_22290_22358 = state_22243__$1;
(statearr_22290_22358[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (25))){
var inst_22185 = (state_22243[(20)]);
var inst_22186 = (state_22243[(12)]);
var inst_22188 = (inst_22186 < inst_22185);
var inst_22189 = inst_22188;
var state_22243__$1 = state_22243;
if(cljs.core.truth_(inst_22189)){
var statearr_22291_22359 = state_22243__$1;
(statearr_22291_22359[(1)] = (27));

} else {
var statearr_22292_22360 = state_22243__$1;
(statearr_22292_22360[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (34))){
var state_22243__$1 = state_22243;
var statearr_22293_22361 = state_22243__$1;
(statearr_22293_22361[(2)] = null);

(statearr_22293_22361[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (17))){
var state_22243__$1 = state_22243;
var statearr_22294_22362 = state_22243__$1;
(statearr_22294_22362[(2)] = null);

(statearr_22294_22362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (3))){
var inst_22241 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22243__$1,inst_22241);
} else {
if((state_val_22244 === (12))){
var inst_22170 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22295_22363 = state_22243__$1;
(statearr_22295_22363[(2)] = inst_22170);

(statearr_22295_22363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (2))){
var state_22243__$1 = state_22243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22243__$1,(4),ch);
} else {
if((state_val_22244 === (23))){
var state_22243__$1 = state_22243;
var statearr_22296_22364 = state_22243__$1;
(statearr_22296_22364[(2)] = null);

(statearr_22296_22364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (35))){
var inst_22225 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22297_22365 = state_22243__$1;
(statearr_22297_22365[(2)] = inst_22225);

(statearr_22297_22365[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (19))){
var inst_22144 = (state_22243[(7)]);
var inst_22148 = cljs.core.chunk_first.call(null,inst_22144);
var inst_22149 = cljs.core.chunk_rest.call(null,inst_22144);
var inst_22150 = cljs.core.count.call(null,inst_22148);
var inst_22124 = inst_22149;
var inst_22125 = inst_22148;
var inst_22126 = inst_22150;
var inst_22127 = (0);
var state_22243__$1 = (function (){var statearr_22298 = state_22243;
(statearr_22298[(13)] = inst_22124);

(statearr_22298[(14)] = inst_22125);

(statearr_22298[(16)] = inst_22127);

(statearr_22298[(17)] = inst_22126);

return statearr_22298;
})();
var statearr_22299_22366 = state_22243__$1;
(statearr_22299_22366[(2)] = null);

(statearr_22299_22366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (11))){
var inst_22124 = (state_22243[(13)]);
var inst_22144 = (state_22243[(7)]);
var inst_22144__$1 = cljs.core.seq.call(null,inst_22124);
var state_22243__$1 = (function (){var statearr_22300 = state_22243;
(statearr_22300[(7)] = inst_22144__$1);

return statearr_22300;
})();
if(inst_22144__$1){
var statearr_22301_22367 = state_22243__$1;
(statearr_22301_22367[(1)] = (16));

} else {
var statearr_22302_22368 = state_22243__$1;
(statearr_22302_22368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (9))){
var inst_22172 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22303_22369 = state_22243__$1;
(statearr_22303_22369[(2)] = inst_22172);

(statearr_22303_22369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (5))){
var inst_22122 = cljs.core.deref.call(null,cs);
var inst_22123 = cljs.core.seq.call(null,inst_22122);
var inst_22124 = inst_22123;
var inst_22125 = null;
var inst_22126 = (0);
var inst_22127 = (0);
var state_22243__$1 = (function (){var statearr_22304 = state_22243;
(statearr_22304[(13)] = inst_22124);

(statearr_22304[(14)] = inst_22125);

(statearr_22304[(16)] = inst_22127);

(statearr_22304[(17)] = inst_22126);

return statearr_22304;
})();
var statearr_22305_22370 = state_22243__$1;
(statearr_22305_22370[(2)] = null);

(statearr_22305_22370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (14))){
var state_22243__$1 = state_22243;
var statearr_22306_22371 = state_22243__$1;
(statearr_22306_22371[(2)] = null);

(statearr_22306_22371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (45))){
var inst_22233 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22307_22372 = state_22243__$1;
(statearr_22307_22372[(2)] = inst_22233);

(statearr_22307_22372[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (26))){
var inst_22175 = (state_22243[(29)]);
var inst_22229 = (state_22243[(2)]);
var inst_22230 = cljs.core.seq.call(null,inst_22175);
var state_22243__$1 = (function (){var statearr_22308 = state_22243;
(statearr_22308[(31)] = inst_22229);

return statearr_22308;
})();
if(inst_22230){
var statearr_22309_22373 = state_22243__$1;
(statearr_22309_22373[(1)] = (42));

} else {
var statearr_22310_22374 = state_22243__$1;
(statearr_22310_22374[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (16))){
var inst_22144 = (state_22243[(7)]);
var inst_22146 = cljs.core.chunked_seq_QMARK_.call(null,inst_22144);
var state_22243__$1 = state_22243;
if(inst_22146){
var statearr_22311_22375 = state_22243__$1;
(statearr_22311_22375[(1)] = (19));

} else {
var statearr_22312_22376 = state_22243__$1;
(statearr_22312_22376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (38))){
var inst_22222 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22313_22377 = state_22243__$1;
(statearr_22313_22377[(2)] = inst_22222);

(statearr_22313_22377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (30))){
var state_22243__$1 = state_22243;
var statearr_22314_22378 = state_22243__$1;
(statearr_22314_22378[(2)] = null);

(statearr_22314_22378[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (10))){
var inst_22125 = (state_22243[(14)]);
var inst_22127 = (state_22243[(16)]);
var inst_22133 = cljs.core._nth.call(null,inst_22125,inst_22127);
var inst_22134 = cljs.core.nth.call(null,inst_22133,(0),null);
var inst_22135 = cljs.core.nth.call(null,inst_22133,(1),null);
var state_22243__$1 = (function (){var statearr_22315 = state_22243;
(statearr_22315[(26)] = inst_22134);

return statearr_22315;
})();
if(cljs.core.truth_(inst_22135)){
var statearr_22316_22379 = state_22243__$1;
(statearr_22316_22379[(1)] = (13));

} else {
var statearr_22317_22380 = state_22243__$1;
(statearr_22317_22380[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (18))){
var inst_22168 = (state_22243[(2)]);
var state_22243__$1 = state_22243;
var statearr_22318_22381 = state_22243__$1;
(statearr_22318_22381[(2)] = inst_22168);

(statearr_22318_22381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (42))){
var state_22243__$1 = state_22243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22243__$1,(45),dchan);
} else {
if((state_val_22244 === (37))){
var inst_22202 = (state_22243[(25)]);
var inst_22115 = (state_22243[(11)]);
var inst_22211 = (state_22243[(23)]);
var inst_22211__$1 = cljs.core.first.call(null,inst_22202);
var inst_22212 = cljs.core.async.put_BANG_.call(null,inst_22211__$1,inst_22115,done);
var state_22243__$1 = (function (){var statearr_22319 = state_22243;
(statearr_22319[(23)] = inst_22211__$1);

return statearr_22319;
})();
if(cljs.core.truth_(inst_22212)){
var statearr_22320_22382 = state_22243__$1;
(statearr_22320_22382[(1)] = (39));

} else {
var statearr_22321_22383 = state_22243__$1;
(statearr_22321_22383[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22244 === (8))){
var inst_22127 = (state_22243[(16)]);
var inst_22126 = (state_22243[(17)]);
var inst_22129 = (inst_22127 < inst_22126);
var inst_22130 = inst_22129;
var state_22243__$1 = state_22243;
if(cljs.core.truth_(inst_22130)){
var statearr_22322_22384 = state_22243__$1;
(statearr_22322_22384[(1)] = (10));

} else {
var statearr_22323_22385 = state_22243__$1;
(statearr_22323_22385[(1)] = (11));

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
});})(c__21024__auto___22331,cs,m,dchan,dctr,done))
;
return ((function (switch__20912__auto__,c__21024__auto___22331,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20913__auto__ = null;
var cljs$core$async$mult_$_state_machine__20913__auto____0 = (function (){
var statearr_22327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22327[(0)] = cljs$core$async$mult_$_state_machine__20913__auto__);

(statearr_22327[(1)] = (1));

return statearr_22327;
});
var cljs$core$async$mult_$_state_machine__20913__auto____1 = (function (state_22243){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_22243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e22328){if((e22328 instanceof Object)){
var ex__20916__auto__ = e22328;
var statearr_22329_22386 = state_22243;
(statearr_22329_22386[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22387 = state_22243;
state_22243 = G__22387;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20913__auto__ = function(state_22243){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20913__auto____1.call(this,state_22243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20913__auto____0;
cljs$core$async$mult_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20913__auto____1;
return cljs$core$async$mult_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___22331,cs,m,dchan,dctr,done))
})();
var state__21026__auto__ = (function (){var statearr_22330 = f__21025__auto__.call(null);
(statearr_22330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___22331);

return statearr_22330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___22331,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22388 = [];
var len__19428__auto___22391 = arguments.length;
var i__19429__auto___22392 = (0);
while(true){
if((i__19429__auto___22392 < len__19428__auto___22391)){
args22388.push((arguments[i__19429__auto___22392]));

var G__22393 = (i__19429__auto___22392 + (1));
i__19429__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var G__22390 = args22388.length;
switch (G__22390) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22388.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,state_map);
} else {
var m__19026__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,mode);
} else {
var m__19026__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___22405 = arguments.length;
var i__19429__auto___22406 = (0);
while(true){
if((i__19429__auto___22406 < len__19428__auto___22405)){
args__19435__auto__.push((arguments[i__19429__auto___22406]));

var G__22407 = (i__19429__auto___22406 + (1));
i__19429__auto___22406 = G__22407;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22399){
var map__22400 = p__22399;
var map__22400__$1 = ((((!((map__22400 == null)))?((((map__22400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22400):map__22400);
var opts = map__22400__$1;
var statearr_22402_22408 = state;
(statearr_22402_22408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22400,map__22400__$1,opts){
return (function (val){
var statearr_22403_22409 = state;
(statearr_22403_22409[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22400,map__22400__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22404_22410 = state;
(statearr_22404_22410[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22395){
var G__22396 = cljs.core.first.call(null,seq22395);
var seq22395__$1 = cljs.core.next.call(null,seq22395);
var G__22397 = cljs.core.first.call(null,seq22395__$1);
var seq22395__$2 = cljs.core.next.call(null,seq22395__$1);
var G__22398 = cljs.core.first.call(null,seq22395__$2);
var seq22395__$3 = cljs.core.next.call(null,seq22395__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22396,G__22397,G__22398,seq22395__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22574 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22574 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22575){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22575 = meta22575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22576,meta22575__$1){
var self__ = this;
var _22576__$1 = this;
return (new cljs.core.async.t_cljs$core$async22574(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22575__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22576){
var self__ = this;
var _22576__$1 = this;
return self__.meta22575;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22575","meta22575",2066944367,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22574.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22574.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22574";

cljs.core.async.t_cljs$core$async22574.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22574");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22574 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22574(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22575){
return (new cljs.core.async.t_cljs$core$async22574(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22575));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22574(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21024__auto___22737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22674){
var state_val_22675 = (state_22674[(1)]);
if((state_val_22675 === (7))){
var inst_22592 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22676_22738 = state_22674__$1;
(statearr_22676_22738[(2)] = inst_22592);

(statearr_22676_22738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (20))){
var inst_22604 = (state_22674[(7)]);
var state_22674__$1 = state_22674;
var statearr_22677_22739 = state_22674__$1;
(statearr_22677_22739[(2)] = inst_22604);

(statearr_22677_22739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (27))){
var state_22674__$1 = state_22674;
var statearr_22678_22740 = state_22674__$1;
(statearr_22678_22740[(2)] = null);

(statearr_22678_22740[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (1))){
var inst_22580 = (state_22674[(8)]);
var inst_22580__$1 = calc_state.call(null);
var inst_22582 = (inst_22580__$1 == null);
var inst_22583 = cljs.core.not.call(null,inst_22582);
var state_22674__$1 = (function (){var statearr_22679 = state_22674;
(statearr_22679[(8)] = inst_22580__$1);

return statearr_22679;
})();
if(inst_22583){
var statearr_22680_22741 = state_22674__$1;
(statearr_22680_22741[(1)] = (2));

} else {
var statearr_22681_22742 = state_22674__$1;
(statearr_22681_22742[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (24))){
var inst_22634 = (state_22674[(9)]);
var inst_22648 = (state_22674[(10)]);
var inst_22627 = (state_22674[(11)]);
var inst_22648__$1 = inst_22627.call(null,inst_22634);
var state_22674__$1 = (function (){var statearr_22682 = state_22674;
(statearr_22682[(10)] = inst_22648__$1);

return statearr_22682;
})();
if(cljs.core.truth_(inst_22648__$1)){
var statearr_22683_22743 = state_22674__$1;
(statearr_22683_22743[(1)] = (29));

} else {
var statearr_22684_22744 = state_22674__$1;
(statearr_22684_22744[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (4))){
var inst_22595 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22595)){
var statearr_22685_22745 = state_22674__$1;
(statearr_22685_22745[(1)] = (8));

} else {
var statearr_22686_22746 = state_22674__$1;
(statearr_22686_22746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (15))){
var inst_22621 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22621)){
var statearr_22687_22747 = state_22674__$1;
(statearr_22687_22747[(1)] = (19));

} else {
var statearr_22688_22748 = state_22674__$1;
(statearr_22688_22748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (21))){
var inst_22626 = (state_22674[(12)]);
var inst_22626__$1 = (state_22674[(2)]);
var inst_22627 = cljs.core.get.call(null,inst_22626__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22628 = cljs.core.get.call(null,inst_22626__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22629 = cljs.core.get.call(null,inst_22626__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22674__$1 = (function (){var statearr_22689 = state_22674;
(statearr_22689[(12)] = inst_22626__$1);

(statearr_22689[(11)] = inst_22627);

(statearr_22689[(13)] = inst_22628);

return statearr_22689;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22674__$1,(22),inst_22629);
} else {
if((state_val_22675 === (31))){
var inst_22656 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22656)){
var statearr_22690_22749 = state_22674__$1;
(statearr_22690_22749[(1)] = (32));

} else {
var statearr_22691_22750 = state_22674__$1;
(statearr_22691_22750[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (32))){
var inst_22633 = (state_22674[(14)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(35),out,inst_22633);
} else {
if((state_val_22675 === (33))){
var inst_22626 = (state_22674[(12)]);
var inst_22604 = inst_22626;
var state_22674__$1 = (function (){var statearr_22692 = state_22674;
(statearr_22692[(7)] = inst_22604);

return statearr_22692;
})();
var statearr_22693_22751 = state_22674__$1;
(statearr_22693_22751[(2)] = null);

(statearr_22693_22751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (13))){
var inst_22604 = (state_22674[(7)]);
var inst_22611 = inst_22604.cljs$lang$protocol_mask$partition0$;
var inst_22612 = (inst_22611 & (64));
var inst_22613 = inst_22604.cljs$core$ISeq$;
var inst_22614 = (inst_22612) || (inst_22613);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22614)){
var statearr_22694_22752 = state_22674__$1;
(statearr_22694_22752[(1)] = (16));

} else {
var statearr_22695_22753 = state_22674__$1;
(statearr_22695_22753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (22))){
var inst_22634 = (state_22674[(9)]);
var inst_22633 = (state_22674[(14)]);
var inst_22632 = (state_22674[(2)]);
var inst_22633__$1 = cljs.core.nth.call(null,inst_22632,(0),null);
var inst_22634__$1 = cljs.core.nth.call(null,inst_22632,(1),null);
var inst_22635 = (inst_22633__$1 == null);
var inst_22636 = cljs.core._EQ_.call(null,inst_22634__$1,change);
var inst_22637 = (inst_22635) || (inst_22636);
var state_22674__$1 = (function (){var statearr_22696 = state_22674;
(statearr_22696[(9)] = inst_22634__$1);

(statearr_22696[(14)] = inst_22633__$1);

return statearr_22696;
})();
if(cljs.core.truth_(inst_22637)){
var statearr_22697_22754 = state_22674__$1;
(statearr_22697_22754[(1)] = (23));

} else {
var statearr_22698_22755 = state_22674__$1;
(statearr_22698_22755[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (36))){
var inst_22626 = (state_22674[(12)]);
var inst_22604 = inst_22626;
var state_22674__$1 = (function (){var statearr_22699 = state_22674;
(statearr_22699[(7)] = inst_22604);

return statearr_22699;
})();
var statearr_22700_22756 = state_22674__$1;
(statearr_22700_22756[(2)] = null);

(statearr_22700_22756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (29))){
var inst_22648 = (state_22674[(10)]);
var state_22674__$1 = state_22674;
var statearr_22701_22757 = state_22674__$1;
(statearr_22701_22757[(2)] = inst_22648);

(statearr_22701_22757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (6))){
var state_22674__$1 = state_22674;
var statearr_22702_22758 = state_22674__$1;
(statearr_22702_22758[(2)] = false);

(statearr_22702_22758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (28))){
var inst_22644 = (state_22674[(2)]);
var inst_22645 = calc_state.call(null);
var inst_22604 = inst_22645;
var state_22674__$1 = (function (){var statearr_22703 = state_22674;
(statearr_22703[(7)] = inst_22604);

(statearr_22703[(15)] = inst_22644);

return statearr_22703;
})();
var statearr_22704_22759 = state_22674__$1;
(statearr_22704_22759[(2)] = null);

(statearr_22704_22759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (25))){
var inst_22670 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22705_22760 = state_22674__$1;
(statearr_22705_22760[(2)] = inst_22670);

(statearr_22705_22760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (34))){
var inst_22668 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22706_22761 = state_22674__$1;
(statearr_22706_22761[(2)] = inst_22668);

(statearr_22706_22761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (17))){
var state_22674__$1 = state_22674;
var statearr_22707_22762 = state_22674__$1;
(statearr_22707_22762[(2)] = false);

(statearr_22707_22762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (3))){
var state_22674__$1 = state_22674;
var statearr_22708_22763 = state_22674__$1;
(statearr_22708_22763[(2)] = false);

(statearr_22708_22763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (12))){
var inst_22672 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22674__$1,inst_22672);
} else {
if((state_val_22675 === (2))){
var inst_22580 = (state_22674[(8)]);
var inst_22585 = inst_22580.cljs$lang$protocol_mask$partition0$;
var inst_22586 = (inst_22585 & (64));
var inst_22587 = inst_22580.cljs$core$ISeq$;
var inst_22588 = (inst_22586) || (inst_22587);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22588)){
var statearr_22709_22764 = state_22674__$1;
(statearr_22709_22764[(1)] = (5));

} else {
var statearr_22710_22765 = state_22674__$1;
(statearr_22710_22765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (23))){
var inst_22633 = (state_22674[(14)]);
var inst_22639 = (inst_22633 == null);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22639)){
var statearr_22711_22766 = state_22674__$1;
(statearr_22711_22766[(1)] = (26));

} else {
var statearr_22712_22767 = state_22674__$1;
(statearr_22712_22767[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (35))){
var inst_22659 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
if(cljs.core.truth_(inst_22659)){
var statearr_22713_22768 = state_22674__$1;
(statearr_22713_22768[(1)] = (36));

} else {
var statearr_22714_22769 = state_22674__$1;
(statearr_22714_22769[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (19))){
var inst_22604 = (state_22674[(7)]);
var inst_22623 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22604);
var state_22674__$1 = state_22674;
var statearr_22715_22770 = state_22674__$1;
(statearr_22715_22770[(2)] = inst_22623);

(statearr_22715_22770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (11))){
var inst_22604 = (state_22674[(7)]);
var inst_22608 = (inst_22604 == null);
var inst_22609 = cljs.core.not.call(null,inst_22608);
var state_22674__$1 = state_22674;
if(inst_22609){
var statearr_22716_22771 = state_22674__$1;
(statearr_22716_22771[(1)] = (13));

} else {
var statearr_22717_22772 = state_22674__$1;
(statearr_22717_22772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (9))){
var inst_22580 = (state_22674[(8)]);
var state_22674__$1 = state_22674;
var statearr_22718_22773 = state_22674__$1;
(statearr_22718_22773[(2)] = inst_22580);

(statearr_22718_22773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (5))){
var state_22674__$1 = state_22674;
var statearr_22719_22774 = state_22674__$1;
(statearr_22719_22774[(2)] = true);

(statearr_22719_22774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (14))){
var state_22674__$1 = state_22674;
var statearr_22720_22775 = state_22674__$1;
(statearr_22720_22775[(2)] = false);

(statearr_22720_22775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (26))){
var inst_22634 = (state_22674[(9)]);
var inst_22641 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22634);
var state_22674__$1 = state_22674;
var statearr_22721_22776 = state_22674__$1;
(statearr_22721_22776[(2)] = inst_22641);

(statearr_22721_22776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (16))){
var state_22674__$1 = state_22674;
var statearr_22722_22777 = state_22674__$1;
(statearr_22722_22777[(2)] = true);

(statearr_22722_22777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (38))){
var inst_22664 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22723_22778 = state_22674__$1;
(statearr_22723_22778[(2)] = inst_22664);

(statearr_22723_22778[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (30))){
var inst_22634 = (state_22674[(9)]);
var inst_22627 = (state_22674[(11)]);
var inst_22628 = (state_22674[(13)]);
var inst_22651 = cljs.core.empty_QMARK_.call(null,inst_22627);
var inst_22652 = inst_22628.call(null,inst_22634);
var inst_22653 = cljs.core.not.call(null,inst_22652);
var inst_22654 = (inst_22651) && (inst_22653);
var state_22674__$1 = state_22674;
var statearr_22724_22779 = state_22674__$1;
(statearr_22724_22779[(2)] = inst_22654);

(statearr_22724_22779[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (10))){
var inst_22580 = (state_22674[(8)]);
var inst_22600 = (state_22674[(2)]);
var inst_22601 = cljs.core.get.call(null,inst_22600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22602 = cljs.core.get.call(null,inst_22600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22603 = cljs.core.get.call(null,inst_22600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22604 = inst_22580;
var state_22674__$1 = (function (){var statearr_22725 = state_22674;
(statearr_22725[(16)] = inst_22602);

(statearr_22725[(17)] = inst_22601);

(statearr_22725[(7)] = inst_22604);

(statearr_22725[(18)] = inst_22603);

return statearr_22725;
})();
var statearr_22726_22780 = state_22674__$1;
(statearr_22726_22780[(2)] = null);

(statearr_22726_22780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (18))){
var inst_22618 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22727_22781 = state_22674__$1;
(statearr_22727_22781[(2)] = inst_22618);

(statearr_22727_22781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (37))){
var state_22674__$1 = state_22674;
var statearr_22728_22782 = state_22674__$1;
(statearr_22728_22782[(2)] = null);

(statearr_22728_22782[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (8))){
var inst_22580 = (state_22674[(8)]);
var inst_22597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22580);
var state_22674__$1 = state_22674;
var statearr_22729_22783 = state_22674__$1;
(statearr_22729_22783[(2)] = inst_22597);

(statearr_22729_22783[(1)] = (10));


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
});})(c__21024__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20912__auto__,c__21024__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20913__auto__ = null;
var cljs$core$async$mix_$_state_machine__20913__auto____0 = (function (){
var statearr_22733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22733[(0)] = cljs$core$async$mix_$_state_machine__20913__auto__);

(statearr_22733[(1)] = (1));

return statearr_22733;
});
var cljs$core$async$mix_$_state_machine__20913__auto____1 = (function (state_22674){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_22674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e22734){if((e22734 instanceof Object)){
var ex__20916__auto__ = e22734;
var statearr_22735_22784 = state_22674;
(statearr_22735_22784[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22785 = state_22674;
state_22674 = G__22785;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20913__auto__ = function(state_22674){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20913__auto____1.call(this,state_22674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20913__auto____0;
cljs$core$async$mix_$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20913__auto____1;
return cljs$core$async$mix_$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21026__auto__ = (function (){var statearr_22736 = f__21025__auto__.call(null);
(statearr_22736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___22737);

return statearr_22736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22786 = [];
var len__19428__auto___22789 = arguments.length;
var i__19429__auto___22790 = (0);
while(true){
if((i__19429__auto___22790 < len__19428__auto___22789)){
args22786.push((arguments[i__19429__auto___22790]));

var G__22791 = (i__19429__auto___22790 + (1));
i__19429__auto___22790 = G__22791;
continue;
} else {
}
break;
}

var G__22788 = args22786.length;
switch (G__22788) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22786.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22794 = [];
var len__19428__auto___22919 = arguments.length;
var i__19429__auto___22920 = (0);
while(true){
if((i__19429__auto___22920 < len__19428__auto___22919)){
args22794.push((arguments[i__19429__auto___22920]));

var G__22921 = (i__19429__auto___22920 + (1));
i__19429__auto___22920 = G__22921;
continue;
} else {
}
break;
}

var G__22796 = args22794.length;
switch (G__22796) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22794.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18370__auto__,mults){
return (function (p1__22793_SHARP_){
if(cljs.core.truth_(p1__22793_SHARP_.call(null,topic))){
return p1__22793_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22793_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22797 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22798){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22798 = meta22798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22799,meta22798__$1){
var self__ = this;
var _22799__$1 = this;
return (new cljs.core.async.t_cljs$core$async22797(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22798__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22799){
var self__ = this;
var _22799__$1 = this;
return self__.meta22798;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22798","meta22798",1001965873,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22797";

cljs.core.async.t_cljs$core$async22797.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22797");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22797 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22797(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22798){
return (new cljs.core.async.t_cljs$core$async22797(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22798));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22797(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21024__auto___22923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___22923,mults,ensure_mult,p){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___22923,mults,ensure_mult,p){
return (function (state_22871){
var state_val_22872 = (state_22871[(1)]);
if((state_val_22872 === (7))){
var inst_22867 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22873_22924 = state_22871__$1;
(statearr_22873_22924[(2)] = inst_22867);

(statearr_22873_22924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (20))){
var state_22871__$1 = state_22871;
var statearr_22874_22925 = state_22871__$1;
(statearr_22874_22925[(2)] = null);

(statearr_22874_22925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (1))){
var state_22871__$1 = state_22871;
var statearr_22875_22926 = state_22871__$1;
(statearr_22875_22926[(2)] = null);

(statearr_22875_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (24))){
var inst_22850 = (state_22871[(7)]);
var inst_22859 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22850);
var state_22871__$1 = state_22871;
var statearr_22876_22927 = state_22871__$1;
(statearr_22876_22927[(2)] = inst_22859);

(statearr_22876_22927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (4))){
var inst_22802 = (state_22871[(8)]);
var inst_22802__$1 = (state_22871[(2)]);
var inst_22803 = (inst_22802__$1 == null);
var state_22871__$1 = (function (){var statearr_22877 = state_22871;
(statearr_22877[(8)] = inst_22802__$1);

return statearr_22877;
})();
if(cljs.core.truth_(inst_22803)){
var statearr_22878_22928 = state_22871__$1;
(statearr_22878_22928[(1)] = (5));

} else {
var statearr_22879_22929 = state_22871__$1;
(statearr_22879_22929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (15))){
var inst_22844 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22880_22930 = state_22871__$1;
(statearr_22880_22930[(2)] = inst_22844);

(statearr_22880_22930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (21))){
var inst_22864 = (state_22871[(2)]);
var state_22871__$1 = (function (){var statearr_22881 = state_22871;
(statearr_22881[(9)] = inst_22864);

return statearr_22881;
})();
var statearr_22882_22931 = state_22871__$1;
(statearr_22882_22931[(2)] = null);

(statearr_22882_22931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (13))){
var inst_22826 = (state_22871[(10)]);
var inst_22828 = cljs.core.chunked_seq_QMARK_.call(null,inst_22826);
var state_22871__$1 = state_22871;
if(inst_22828){
var statearr_22883_22932 = state_22871__$1;
(statearr_22883_22932[(1)] = (16));

} else {
var statearr_22884_22933 = state_22871__$1;
(statearr_22884_22933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (22))){
var inst_22856 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
if(cljs.core.truth_(inst_22856)){
var statearr_22885_22934 = state_22871__$1;
(statearr_22885_22934[(1)] = (23));

} else {
var statearr_22886_22935 = state_22871__$1;
(statearr_22886_22935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (6))){
var inst_22802 = (state_22871[(8)]);
var inst_22850 = (state_22871[(7)]);
var inst_22852 = (state_22871[(11)]);
var inst_22850__$1 = topic_fn.call(null,inst_22802);
var inst_22851 = cljs.core.deref.call(null,mults);
var inst_22852__$1 = cljs.core.get.call(null,inst_22851,inst_22850__$1);
var state_22871__$1 = (function (){var statearr_22887 = state_22871;
(statearr_22887[(7)] = inst_22850__$1);

(statearr_22887[(11)] = inst_22852__$1);

return statearr_22887;
})();
if(cljs.core.truth_(inst_22852__$1)){
var statearr_22888_22936 = state_22871__$1;
(statearr_22888_22936[(1)] = (19));

} else {
var statearr_22889_22937 = state_22871__$1;
(statearr_22889_22937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (25))){
var inst_22861 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22890_22938 = state_22871__$1;
(statearr_22890_22938[(2)] = inst_22861);

(statearr_22890_22938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (17))){
var inst_22826 = (state_22871[(10)]);
var inst_22835 = cljs.core.first.call(null,inst_22826);
var inst_22836 = cljs.core.async.muxch_STAR_.call(null,inst_22835);
var inst_22837 = cljs.core.async.close_BANG_.call(null,inst_22836);
var inst_22838 = cljs.core.next.call(null,inst_22826);
var inst_22812 = inst_22838;
var inst_22813 = null;
var inst_22814 = (0);
var inst_22815 = (0);
var state_22871__$1 = (function (){var statearr_22891 = state_22871;
(statearr_22891[(12)] = inst_22813);

(statearr_22891[(13)] = inst_22837);

(statearr_22891[(14)] = inst_22815);

(statearr_22891[(15)] = inst_22812);

(statearr_22891[(16)] = inst_22814);

return statearr_22891;
})();
var statearr_22892_22939 = state_22871__$1;
(statearr_22892_22939[(2)] = null);

(statearr_22892_22939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (3))){
var inst_22869 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22871__$1,inst_22869);
} else {
if((state_val_22872 === (12))){
var inst_22846 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22893_22940 = state_22871__$1;
(statearr_22893_22940[(2)] = inst_22846);

(statearr_22893_22940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (2))){
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22871__$1,(4),ch);
} else {
if((state_val_22872 === (23))){
var state_22871__$1 = state_22871;
var statearr_22894_22941 = state_22871__$1;
(statearr_22894_22941[(2)] = null);

(statearr_22894_22941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (19))){
var inst_22802 = (state_22871[(8)]);
var inst_22852 = (state_22871[(11)]);
var inst_22854 = cljs.core.async.muxch_STAR_.call(null,inst_22852);
var state_22871__$1 = state_22871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22871__$1,(22),inst_22854,inst_22802);
} else {
if((state_val_22872 === (11))){
var inst_22826 = (state_22871[(10)]);
var inst_22812 = (state_22871[(15)]);
var inst_22826__$1 = cljs.core.seq.call(null,inst_22812);
var state_22871__$1 = (function (){var statearr_22895 = state_22871;
(statearr_22895[(10)] = inst_22826__$1);

return statearr_22895;
})();
if(inst_22826__$1){
var statearr_22896_22942 = state_22871__$1;
(statearr_22896_22942[(1)] = (13));

} else {
var statearr_22897_22943 = state_22871__$1;
(statearr_22897_22943[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (9))){
var inst_22848 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22898_22944 = state_22871__$1;
(statearr_22898_22944[(2)] = inst_22848);

(statearr_22898_22944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (5))){
var inst_22809 = cljs.core.deref.call(null,mults);
var inst_22810 = cljs.core.vals.call(null,inst_22809);
var inst_22811 = cljs.core.seq.call(null,inst_22810);
var inst_22812 = inst_22811;
var inst_22813 = null;
var inst_22814 = (0);
var inst_22815 = (0);
var state_22871__$1 = (function (){var statearr_22899 = state_22871;
(statearr_22899[(12)] = inst_22813);

(statearr_22899[(14)] = inst_22815);

(statearr_22899[(15)] = inst_22812);

(statearr_22899[(16)] = inst_22814);

return statearr_22899;
})();
var statearr_22900_22945 = state_22871__$1;
(statearr_22900_22945[(2)] = null);

(statearr_22900_22945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (14))){
var state_22871__$1 = state_22871;
var statearr_22904_22946 = state_22871__$1;
(statearr_22904_22946[(2)] = null);

(statearr_22904_22946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (16))){
var inst_22826 = (state_22871[(10)]);
var inst_22830 = cljs.core.chunk_first.call(null,inst_22826);
var inst_22831 = cljs.core.chunk_rest.call(null,inst_22826);
var inst_22832 = cljs.core.count.call(null,inst_22830);
var inst_22812 = inst_22831;
var inst_22813 = inst_22830;
var inst_22814 = inst_22832;
var inst_22815 = (0);
var state_22871__$1 = (function (){var statearr_22905 = state_22871;
(statearr_22905[(12)] = inst_22813);

(statearr_22905[(14)] = inst_22815);

(statearr_22905[(15)] = inst_22812);

(statearr_22905[(16)] = inst_22814);

return statearr_22905;
})();
var statearr_22906_22947 = state_22871__$1;
(statearr_22906_22947[(2)] = null);

(statearr_22906_22947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (10))){
var inst_22813 = (state_22871[(12)]);
var inst_22815 = (state_22871[(14)]);
var inst_22812 = (state_22871[(15)]);
var inst_22814 = (state_22871[(16)]);
var inst_22820 = cljs.core._nth.call(null,inst_22813,inst_22815);
var inst_22821 = cljs.core.async.muxch_STAR_.call(null,inst_22820);
var inst_22822 = cljs.core.async.close_BANG_.call(null,inst_22821);
var inst_22823 = (inst_22815 + (1));
var tmp22901 = inst_22813;
var tmp22902 = inst_22812;
var tmp22903 = inst_22814;
var inst_22812__$1 = tmp22902;
var inst_22813__$1 = tmp22901;
var inst_22814__$1 = tmp22903;
var inst_22815__$1 = inst_22823;
var state_22871__$1 = (function (){var statearr_22907 = state_22871;
(statearr_22907[(12)] = inst_22813__$1);

(statearr_22907[(14)] = inst_22815__$1);

(statearr_22907[(17)] = inst_22822);

(statearr_22907[(15)] = inst_22812__$1);

(statearr_22907[(16)] = inst_22814__$1);

return statearr_22907;
})();
var statearr_22908_22948 = state_22871__$1;
(statearr_22908_22948[(2)] = null);

(statearr_22908_22948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (18))){
var inst_22841 = (state_22871[(2)]);
var state_22871__$1 = state_22871;
var statearr_22909_22949 = state_22871__$1;
(statearr_22909_22949[(2)] = inst_22841);

(statearr_22909_22949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22872 === (8))){
var inst_22815 = (state_22871[(14)]);
var inst_22814 = (state_22871[(16)]);
var inst_22817 = (inst_22815 < inst_22814);
var inst_22818 = inst_22817;
var state_22871__$1 = state_22871;
if(cljs.core.truth_(inst_22818)){
var statearr_22910_22950 = state_22871__$1;
(statearr_22910_22950[(1)] = (10));

} else {
var statearr_22911_22951 = state_22871__$1;
(statearr_22911_22951[(1)] = (11));

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
});})(c__21024__auto___22923,mults,ensure_mult,p))
;
return ((function (switch__20912__auto__,c__21024__auto___22923,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_22915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22915[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_22915[(1)] = (1));

return statearr_22915;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_22871){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_22871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e22916){if((e22916 instanceof Object)){
var ex__20916__auto__ = e22916;
var statearr_22917_22952 = state_22871;
(statearr_22917_22952[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22953 = state_22871;
state_22871 = G__22953;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_22871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_22871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___22923,mults,ensure_mult,p))
})();
var state__21026__auto__ = (function (){var statearr_22918 = f__21025__auto__.call(null);
(statearr_22918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___22923);

return statearr_22918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___22923,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22954 = [];
var len__19428__auto___22957 = arguments.length;
var i__19429__auto___22958 = (0);
while(true){
if((i__19429__auto___22958 < len__19428__auto___22957)){
args22954.push((arguments[i__19429__auto___22958]));

var G__22959 = (i__19429__auto___22958 + (1));
i__19429__auto___22958 = G__22959;
continue;
} else {
}
break;
}

var G__22956 = args22954.length;
switch (G__22956) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22954.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22961 = [];
var len__19428__auto___22964 = arguments.length;
var i__19429__auto___22965 = (0);
while(true){
if((i__19429__auto___22965 < len__19428__auto___22964)){
args22961.push((arguments[i__19429__auto___22965]));

var G__22966 = (i__19429__auto___22965 + (1));
i__19429__auto___22965 = G__22966;
continue;
} else {
}
break;
}

var G__22963 = args22961.length;
switch (G__22963) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22961.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22968 = [];
var len__19428__auto___23039 = arguments.length;
var i__19429__auto___23040 = (0);
while(true){
if((i__19429__auto___23040 < len__19428__auto___23039)){
args22968.push((arguments[i__19429__auto___23040]));

var G__23041 = (i__19429__auto___23040 + (1));
i__19429__auto___23040 = G__23041;
continue;
} else {
}
break;
}

var G__22970 = args22968.length;
switch (G__22970) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22968.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21024__auto___23043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23043,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23043,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23009){
var state_val_23010 = (state_23009[(1)]);
if((state_val_23010 === (7))){
var state_23009__$1 = state_23009;
var statearr_23011_23044 = state_23009__$1;
(statearr_23011_23044[(2)] = null);

(statearr_23011_23044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (1))){
var state_23009__$1 = state_23009;
var statearr_23012_23045 = state_23009__$1;
(statearr_23012_23045[(2)] = null);

(statearr_23012_23045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (4))){
var inst_22973 = (state_23009[(7)]);
var inst_22975 = (inst_22973 < cnt);
var state_23009__$1 = state_23009;
if(cljs.core.truth_(inst_22975)){
var statearr_23013_23046 = state_23009__$1;
(statearr_23013_23046[(1)] = (6));

} else {
var statearr_23014_23047 = state_23009__$1;
(statearr_23014_23047[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (15))){
var inst_23005 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23015_23048 = state_23009__$1;
(statearr_23015_23048[(2)] = inst_23005);

(statearr_23015_23048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (13))){
var inst_22998 = cljs.core.async.close_BANG_.call(null,out);
var state_23009__$1 = state_23009;
var statearr_23016_23049 = state_23009__$1;
(statearr_23016_23049[(2)] = inst_22998);

(statearr_23016_23049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (6))){
var state_23009__$1 = state_23009;
var statearr_23017_23050 = state_23009__$1;
(statearr_23017_23050[(2)] = null);

(statearr_23017_23050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (3))){
var inst_23007 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23009__$1,inst_23007);
} else {
if((state_val_23010 === (12))){
var inst_22995 = (state_23009[(8)]);
var inst_22995__$1 = (state_23009[(2)]);
var inst_22996 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22995__$1);
var state_23009__$1 = (function (){var statearr_23018 = state_23009;
(statearr_23018[(8)] = inst_22995__$1);

return statearr_23018;
})();
if(cljs.core.truth_(inst_22996)){
var statearr_23019_23051 = state_23009__$1;
(statearr_23019_23051[(1)] = (13));

} else {
var statearr_23020_23052 = state_23009__$1;
(statearr_23020_23052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (2))){
var inst_22972 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22973 = (0);
var state_23009__$1 = (function (){var statearr_23021 = state_23009;
(statearr_23021[(7)] = inst_22973);

(statearr_23021[(9)] = inst_22972);

return statearr_23021;
})();
var statearr_23022_23053 = state_23009__$1;
(statearr_23022_23053[(2)] = null);

(statearr_23022_23053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (11))){
var inst_22973 = (state_23009[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23009,(10),Object,null,(9));
var inst_22982 = chs__$1.call(null,inst_22973);
var inst_22983 = done.call(null,inst_22973);
var inst_22984 = cljs.core.async.take_BANG_.call(null,inst_22982,inst_22983);
var state_23009__$1 = state_23009;
var statearr_23023_23054 = state_23009__$1;
(statearr_23023_23054[(2)] = inst_22984);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23009__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (9))){
var inst_22973 = (state_23009[(7)]);
var inst_22986 = (state_23009[(2)]);
var inst_22987 = (inst_22973 + (1));
var inst_22973__$1 = inst_22987;
var state_23009__$1 = (function (){var statearr_23024 = state_23009;
(statearr_23024[(7)] = inst_22973__$1);

(statearr_23024[(10)] = inst_22986);

return statearr_23024;
})();
var statearr_23025_23055 = state_23009__$1;
(statearr_23025_23055[(2)] = null);

(statearr_23025_23055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (5))){
var inst_22993 = (state_23009[(2)]);
var state_23009__$1 = (function (){var statearr_23026 = state_23009;
(statearr_23026[(11)] = inst_22993);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23009__$1,(12),dchan);
} else {
if((state_val_23010 === (14))){
var inst_22995 = (state_23009[(8)]);
var inst_23000 = cljs.core.apply.call(null,f,inst_22995);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23009__$1,(16),out,inst_23000);
} else {
if((state_val_23010 === (16))){
var inst_23002 = (state_23009[(2)]);
var state_23009__$1 = (function (){var statearr_23027 = state_23009;
(statearr_23027[(12)] = inst_23002);

return statearr_23027;
})();
var statearr_23028_23056 = state_23009__$1;
(statearr_23028_23056[(2)] = null);

(statearr_23028_23056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (10))){
var inst_22977 = (state_23009[(2)]);
var inst_22978 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23009__$1 = (function (){var statearr_23029 = state_23009;
(statearr_23029[(13)] = inst_22977);

return statearr_23029;
})();
var statearr_23030_23057 = state_23009__$1;
(statearr_23030_23057[(2)] = inst_22978);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23009__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (8))){
var inst_22991 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23031_23058 = state_23009__$1;
(statearr_23031_23058[(2)] = inst_22991);

(statearr_23031_23058[(1)] = (5));


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
});})(c__21024__auto___23043,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20912__auto__,c__21024__auto___23043,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23035[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23035[(1)] = (1));

return statearr_23035;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23009){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23036){if((e23036 instanceof Object)){
var ex__20916__auto__ = e23036;
var statearr_23037_23059 = state_23009;
(statearr_23037_23059[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23060 = state_23009;
state_23009 = G__23060;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23043,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21026__auto__ = (function (){var statearr_23038 = f__21025__auto__.call(null);
(statearr_23038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23043);

return statearr_23038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23043,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23062 = [];
var len__19428__auto___23118 = arguments.length;
var i__19429__auto___23119 = (0);
while(true){
if((i__19429__auto___23119 < len__19428__auto___23118)){
args23062.push((arguments[i__19429__auto___23119]));

var G__23120 = (i__19429__auto___23119 + (1));
i__19429__auto___23119 = G__23120;
continue;
} else {
}
break;
}

var G__23064 = args23062.length;
switch (G__23064) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23062.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21024__auto___23122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23122,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23122,out){
return (function (state_23094){
var state_val_23095 = (state_23094[(1)]);
if((state_val_23095 === (7))){
var inst_23074 = (state_23094[(7)]);
var inst_23073 = (state_23094[(8)]);
var inst_23073__$1 = (state_23094[(2)]);
var inst_23074__$1 = cljs.core.nth.call(null,inst_23073__$1,(0),null);
var inst_23075 = cljs.core.nth.call(null,inst_23073__$1,(1),null);
var inst_23076 = (inst_23074__$1 == null);
var state_23094__$1 = (function (){var statearr_23096 = state_23094;
(statearr_23096[(9)] = inst_23075);

(statearr_23096[(7)] = inst_23074__$1);

(statearr_23096[(8)] = inst_23073__$1);

return statearr_23096;
})();
if(cljs.core.truth_(inst_23076)){
var statearr_23097_23123 = state_23094__$1;
(statearr_23097_23123[(1)] = (8));

} else {
var statearr_23098_23124 = state_23094__$1;
(statearr_23098_23124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (1))){
var inst_23065 = cljs.core.vec.call(null,chs);
var inst_23066 = inst_23065;
var state_23094__$1 = (function (){var statearr_23099 = state_23094;
(statearr_23099[(10)] = inst_23066);

return statearr_23099;
})();
var statearr_23100_23125 = state_23094__$1;
(statearr_23100_23125[(2)] = null);

(statearr_23100_23125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (4))){
var inst_23066 = (state_23094[(10)]);
var state_23094__$1 = state_23094;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23094__$1,(7),inst_23066);
} else {
if((state_val_23095 === (6))){
var inst_23090 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23101_23126 = state_23094__$1;
(statearr_23101_23126[(2)] = inst_23090);

(statearr_23101_23126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (3))){
var inst_23092 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23094__$1,inst_23092);
} else {
if((state_val_23095 === (2))){
var inst_23066 = (state_23094[(10)]);
var inst_23068 = cljs.core.count.call(null,inst_23066);
var inst_23069 = (inst_23068 > (0));
var state_23094__$1 = state_23094;
if(cljs.core.truth_(inst_23069)){
var statearr_23103_23127 = state_23094__$1;
(statearr_23103_23127[(1)] = (4));

} else {
var statearr_23104_23128 = state_23094__$1;
(statearr_23104_23128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (11))){
var inst_23066 = (state_23094[(10)]);
var inst_23083 = (state_23094[(2)]);
var tmp23102 = inst_23066;
var inst_23066__$1 = tmp23102;
var state_23094__$1 = (function (){var statearr_23105 = state_23094;
(statearr_23105[(10)] = inst_23066__$1);

(statearr_23105[(11)] = inst_23083);

return statearr_23105;
})();
var statearr_23106_23129 = state_23094__$1;
(statearr_23106_23129[(2)] = null);

(statearr_23106_23129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (9))){
var inst_23074 = (state_23094[(7)]);
var state_23094__$1 = state_23094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23094__$1,(11),out,inst_23074);
} else {
if((state_val_23095 === (5))){
var inst_23088 = cljs.core.async.close_BANG_.call(null,out);
var state_23094__$1 = state_23094;
var statearr_23107_23130 = state_23094__$1;
(statearr_23107_23130[(2)] = inst_23088);

(statearr_23107_23130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (10))){
var inst_23086 = (state_23094[(2)]);
var state_23094__$1 = state_23094;
var statearr_23108_23131 = state_23094__$1;
(statearr_23108_23131[(2)] = inst_23086);

(statearr_23108_23131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23095 === (8))){
var inst_23066 = (state_23094[(10)]);
var inst_23075 = (state_23094[(9)]);
var inst_23074 = (state_23094[(7)]);
var inst_23073 = (state_23094[(8)]);
var inst_23078 = (function (){var cs = inst_23066;
var vec__23071 = inst_23073;
var v = inst_23074;
var c = inst_23075;
return ((function (cs,vec__23071,v,c,inst_23066,inst_23075,inst_23074,inst_23073,state_val_23095,c__21024__auto___23122,out){
return (function (p1__23061_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23061_SHARP_);
});
;})(cs,vec__23071,v,c,inst_23066,inst_23075,inst_23074,inst_23073,state_val_23095,c__21024__auto___23122,out))
})();
var inst_23079 = cljs.core.filterv.call(null,inst_23078,inst_23066);
var inst_23066__$1 = inst_23079;
var state_23094__$1 = (function (){var statearr_23109 = state_23094;
(statearr_23109[(10)] = inst_23066__$1);

return statearr_23109;
})();
var statearr_23110_23132 = state_23094__$1;
(statearr_23110_23132[(2)] = null);

(statearr_23110_23132[(1)] = (2));


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
});})(c__21024__auto___23122,out))
;
return ((function (switch__20912__auto__,c__21024__auto___23122,out){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23114[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23114[(1)] = (1));

return statearr_23114;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23094){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23115){if((e23115 instanceof Object)){
var ex__20916__auto__ = e23115;
var statearr_23116_23133 = state_23094;
(statearr_23116_23133[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23134 = state_23094;
state_23094 = G__23134;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23122,out))
})();
var state__21026__auto__ = (function (){var statearr_23117 = f__21025__auto__.call(null);
(statearr_23117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23122);

return statearr_23117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23122,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23135 = [];
var len__19428__auto___23184 = arguments.length;
var i__19429__auto___23185 = (0);
while(true){
if((i__19429__auto___23185 < len__19428__auto___23184)){
args23135.push((arguments[i__19429__auto___23185]));

var G__23186 = (i__19429__auto___23185 + (1));
i__19429__auto___23185 = G__23186;
continue;
} else {
}
break;
}

var G__23137 = args23135.length;
switch (G__23137) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23135.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21024__auto___23188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23188,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23188,out){
return (function (state_23161){
var state_val_23162 = (state_23161[(1)]);
if((state_val_23162 === (7))){
var inst_23143 = (state_23161[(7)]);
var inst_23143__$1 = (state_23161[(2)]);
var inst_23144 = (inst_23143__$1 == null);
var inst_23145 = cljs.core.not.call(null,inst_23144);
var state_23161__$1 = (function (){var statearr_23163 = state_23161;
(statearr_23163[(7)] = inst_23143__$1);

return statearr_23163;
})();
if(inst_23145){
var statearr_23164_23189 = state_23161__$1;
(statearr_23164_23189[(1)] = (8));

} else {
var statearr_23165_23190 = state_23161__$1;
(statearr_23165_23190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (1))){
var inst_23138 = (0);
var state_23161__$1 = (function (){var statearr_23166 = state_23161;
(statearr_23166[(8)] = inst_23138);

return statearr_23166;
})();
var statearr_23167_23191 = state_23161__$1;
(statearr_23167_23191[(2)] = null);

(statearr_23167_23191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (4))){
var state_23161__$1 = state_23161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23161__$1,(7),ch);
} else {
if((state_val_23162 === (6))){
var inst_23156 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23168_23192 = state_23161__$1;
(statearr_23168_23192[(2)] = inst_23156);

(statearr_23168_23192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (3))){
var inst_23158 = (state_23161[(2)]);
var inst_23159 = cljs.core.async.close_BANG_.call(null,out);
var state_23161__$1 = (function (){var statearr_23169 = state_23161;
(statearr_23169[(9)] = inst_23158);

return statearr_23169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23161__$1,inst_23159);
} else {
if((state_val_23162 === (2))){
var inst_23138 = (state_23161[(8)]);
var inst_23140 = (inst_23138 < n);
var state_23161__$1 = state_23161;
if(cljs.core.truth_(inst_23140)){
var statearr_23170_23193 = state_23161__$1;
(statearr_23170_23193[(1)] = (4));

} else {
var statearr_23171_23194 = state_23161__$1;
(statearr_23171_23194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (11))){
var inst_23138 = (state_23161[(8)]);
var inst_23148 = (state_23161[(2)]);
var inst_23149 = (inst_23138 + (1));
var inst_23138__$1 = inst_23149;
var state_23161__$1 = (function (){var statearr_23172 = state_23161;
(statearr_23172[(10)] = inst_23148);

(statearr_23172[(8)] = inst_23138__$1);

return statearr_23172;
})();
var statearr_23173_23195 = state_23161__$1;
(statearr_23173_23195[(2)] = null);

(statearr_23173_23195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (9))){
var state_23161__$1 = state_23161;
var statearr_23174_23196 = state_23161__$1;
(statearr_23174_23196[(2)] = null);

(statearr_23174_23196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (5))){
var state_23161__$1 = state_23161;
var statearr_23175_23197 = state_23161__$1;
(statearr_23175_23197[(2)] = null);

(statearr_23175_23197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (10))){
var inst_23153 = (state_23161[(2)]);
var state_23161__$1 = state_23161;
var statearr_23176_23198 = state_23161__$1;
(statearr_23176_23198[(2)] = inst_23153);

(statearr_23176_23198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23162 === (8))){
var inst_23143 = (state_23161[(7)]);
var state_23161__$1 = state_23161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23161__$1,(11),out,inst_23143);
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
});})(c__21024__auto___23188,out))
;
return ((function (switch__20912__auto__,c__21024__auto___23188,out){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23180[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23180[(1)] = (1));

return statearr_23180;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23161){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23181){if((e23181 instanceof Object)){
var ex__20916__auto__ = e23181;
var statearr_23182_23199 = state_23161;
(statearr_23182_23199[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23200 = state_23161;
state_23161 = G__23200;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23188,out))
})();
var state__21026__auto__ = (function (){var statearr_23183 = f__21025__auto__.call(null);
(statearr_23183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23188);

return statearr_23183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23188,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23208 = (function (map_LT_,f,ch,meta23209){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23209 = meta23209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23210,meta23209__$1){
var self__ = this;
var _23210__$1 = this;
return (new cljs.core.async.t_cljs$core$async23208(self__.map_LT_,self__.f,self__.ch,meta23209__$1));
});

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23210){
var self__ = this;
var _23210__$1 = this;
return self__.meta23209;
});

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23211 = (function (map_LT_,f,ch,meta23209,_,fn1,meta23212){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23209 = meta23209;
this._ = _;
this.fn1 = fn1;
this.meta23212 = meta23212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23213,meta23212__$1){
var self__ = this;
var _23213__$1 = this;
return (new cljs.core.async.t_cljs$core$async23211(self__.map_LT_,self__.f,self__.ch,self__.meta23209,self__._,self__.fn1,meta23212__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23213){
var self__ = this;
var _23213__$1 = this;
return self__.meta23212;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23211.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23201_SHARP_){
return f1.call(null,(((p1__23201_SHARP_ == null))?null:self__.f.call(null,p1__23201_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23211.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23209","meta23209",711349664,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23208","cljs.core.async/t_cljs$core$async23208",-1600209387,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23212","meta23212",-296024390,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23211";

cljs.core.async.t_cljs$core$async23211.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async23211");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23211 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23211(map_LT___$1,f__$1,ch__$1,meta23209__$1,___$2,fn1__$1,meta23212){
return (new cljs.core.async.t_cljs$core$async23211(map_LT___$1,f__$1,ch__$1,meta23209__$1,___$2,fn1__$1,meta23212));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23211(self__.map_LT_,self__.f,self__.ch,self__.meta23209,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18358__auto__ = ret;
if(cljs.core.truth_(and__18358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23209","meta23209",711349664,null)], null);
});

cljs.core.async.t_cljs$core$async23208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23208";

cljs.core.async.t_cljs$core$async23208.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async23208");
});

cljs.core.async.__GT_t_cljs$core$async23208 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23208(map_LT___$1,f__$1,ch__$1,meta23209){
return (new cljs.core.async.t_cljs$core$async23208(map_LT___$1,f__$1,ch__$1,meta23209));
});

}

return (new cljs.core.async.t_cljs$core$async23208(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23217 = (function (map_GT_,f,ch,meta23218){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23218 = meta23218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23219,meta23218__$1){
var self__ = this;
var _23219__$1 = this;
return (new cljs.core.async.t_cljs$core$async23217(self__.map_GT_,self__.f,self__.ch,meta23218__$1));
});

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23219){
var self__ = this;
var _23219__$1 = this;
return self__.meta23218;
});

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23217.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23218","meta23218",712376825,null)], null);
});

cljs.core.async.t_cljs$core$async23217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23217";

cljs.core.async.t_cljs$core$async23217.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async23217");
});

cljs.core.async.__GT_t_cljs$core$async23217 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23217(map_GT___$1,f__$1,ch__$1,meta23218){
return (new cljs.core.async.t_cljs$core$async23217(map_GT___$1,f__$1,ch__$1,meta23218));
});

}

return (new cljs.core.async.t_cljs$core$async23217(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23223 = (function (filter_GT_,p,ch,meta23224){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23224 = meta23224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23225,meta23224__$1){
var self__ = this;
var _23225__$1 = this;
return (new cljs.core.async.t_cljs$core$async23223(self__.filter_GT_,self__.p,self__.ch,meta23224__$1));
});

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23225){
var self__ = this;
var _23225__$1 = this;
return self__.meta23224;
});

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23224","meta23224",1102659753,null)], null);
});

cljs.core.async.t_cljs$core$async23223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23223";

cljs.core.async.t_cljs$core$async23223.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async23223");
});

cljs.core.async.__GT_t_cljs$core$async23223 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23223(filter_GT___$1,p__$1,ch__$1,meta23224){
return (new cljs.core.async.t_cljs$core$async23223(filter_GT___$1,p__$1,ch__$1,meta23224));
});

}

return (new cljs.core.async.t_cljs$core$async23223(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23226 = [];
var len__19428__auto___23270 = arguments.length;
var i__19429__auto___23271 = (0);
while(true){
if((i__19429__auto___23271 < len__19428__auto___23270)){
args23226.push((arguments[i__19429__auto___23271]));

var G__23272 = (i__19429__auto___23271 + (1));
i__19429__auto___23271 = G__23272;
continue;
} else {
}
break;
}

var G__23228 = args23226.length;
switch (G__23228) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23226.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21024__auto___23274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23274,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23274,out){
return (function (state_23249){
var state_val_23250 = (state_23249[(1)]);
if((state_val_23250 === (7))){
var inst_23245 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
var statearr_23251_23275 = state_23249__$1;
(statearr_23251_23275[(2)] = inst_23245);

(statearr_23251_23275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (1))){
var state_23249__$1 = state_23249;
var statearr_23252_23276 = state_23249__$1;
(statearr_23252_23276[(2)] = null);

(statearr_23252_23276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (4))){
var inst_23231 = (state_23249[(7)]);
var inst_23231__$1 = (state_23249[(2)]);
var inst_23232 = (inst_23231__$1 == null);
var state_23249__$1 = (function (){var statearr_23253 = state_23249;
(statearr_23253[(7)] = inst_23231__$1);

return statearr_23253;
})();
if(cljs.core.truth_(inst_23232)){
var statearr_23254_23277 = state_23249__$1;
(statearr_23254_23277[(1)] = (5));

} else {
var statearr_23255_23278 = state_23249__$1;
(statearr_23255_23278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (6))){
var inst_23231 = (state_23249[(7)]);
var inst_23236 = p.call(null,inst_23231);
var state_23249__$1 = state_23249;
if(cljs.core.truth_(inst_23236)){
var statearr_23256_23279 = state_23249__$1;
(statearr_23256_23279[(1)] = (8));

} else {
var statearr_23257_23280 = state_23249__$1;
(statearr_23257_23280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (3))){
var inst_23247 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23249__$1,inst_23247);
} else {
if((state_val_23250 === (2))){
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23249__$1,(4),ch);
} else {
if((state_val_23250 === (11))){
var inst_23239 = (state_23249[(2)]);
var state_23249__$1 = state_23249;
var statearr_23258_23281 = state_23249__$1;
(statearr_23258_23281[(2)] = inst_23239);

(statearr_23258_23281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (9))){
var state_23249__$1 = state_23249;
var statearr_23259_23282 = state_23249__$1;
(statearr_23259_23282[(2)] = null);

(statearr_23259_23282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (5))){
var inst_23234 = cljs.core.async.close_BANG_.call(null,out);
var state_23249__$1 = state_23249;
var statearr_23260_23283 = state_23249__$1;
(statearr_23260_23283[(2)] = inst_23234);

(statearr_23260_23283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (10))){
var inst_23242 = (state_23249[(2)]);
var state_23249__$1 = (function (){var statearr_23261 = state_23249;
(statearr_23261[(8)] = inst_23242);

return statearr_23261;
})();
var statearr_23262_23284 = state_23249__$1;
(statearr_23262_23284[(2)] = null);

(statearr_23262_23284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23250 === (8))){
var inst_23231 = (state_23249[(7)]);
var state_23249__$1 = state_23249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23249__$1,(11),out,inst_23231);
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
});})(c__21024__auto___23274,out))
;
return ((function (switch__20912__auto__,c__21024__auto___23274,out){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23266 = [null,null,null,null,null,null,null,null,null];
(statearr_23266[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23266[(1)] = (1));

return statearr_23266;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23249){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23267){if((e23267 instanceof Object)){
var ex__20916__auto__ = e23267;
var statearr_23268_23285 = state_23249;
(statearr_23268_23285[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23286 = state_23249;
state_23249 = G__23286;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23274,out))
})();
var state__21026__auto__ = (function (){var statearr_23269 = f__21025__auto__.call(null);
(statearr_23269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23274);

return statearr_23269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23274,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23287 = [];
var len__19428__auto___23290 = arguments.length;
var i__19429__auto___23291 = (0);
while(true){
if((i__19429__auto___23291 < len__19428__auto___23290)){
args23287.push((arguments[i__19429__auto___23291]));

var G__23292 = (i__19429__auto___23291 + (1));
i__19429__auto___23291 = G__23292;
continue;
} else {
}
break;
}

var G__23289 = args23287.length;
switch (G__23289) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23287.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto__){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto__){
return (function (state_23459){
var state_val_23460 = (state_23459[(1)]);
if((state_val_23460 === (7))){
var inst_23455 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23461_23502 = state_23459__$1;
(statearr_23461_23502[(2)] = inst_23455);

(statearr_23461_23502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (20))){
var inst_23425 = (state_23459[(7)]);
var inst_23436 = (state_23459[(2)]);
var inst_23437 = cljs.core.next.call(null,inst_23425);
var inst_23411 = inst_23437;
var inst_23412 = null;
var inst_23413 = (0);
var inst_23414 = (0);
var state_23459__$1 = (function (){var statearr_23462 = state_23459;
(statearr_23462[(8)] = inst_23413);

(statearr_23462[(9)] = inst_23411);

(statearr_23462[(10)] = inst_23436);

(statearr_23462[(11)] = inst_23412);

(statearr_23462[(12)] = inst_23414);

return statearr_23462;
})();
var statearr_23463_23503 = state_23459__$1;
(statearr_23463_23503[(2)] = null);

(statearr_23463_23503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (1))){
var state_23459__$1 = state_23459;
var statearr_23464_23504 = state_23459__$1;
(statearr_23464_23504[(2)] = null);

(statearr_23464_23504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (4))){
var inst_23400 = (state_23459[(13)]);
var inst_23400__$1 = (state_23459[(2)]);
var inst_23401 = (inst_23400__$1 == null);
var state_23459__$1 = (function (){var statearr_23465 = state_23459;
(statearr_23465[(13)] = inst_23400__$1);

return statearr_23465;
})();
if(cljs.core.truth_(inst_23401)){
var statearr_23466_23505 = state_23459__$1;
(statearr_23466_23505[(1)] = (5));

} else {
var statearr_23467_23506 = state_23459__$1;
(statearr_23467_23506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (15))){
var state_23459__$1 = state_23459;
var statearr_23471_23507 = state_23459__$1;
(statearr_23471_23507[(2)] = null);

(statearr_23471_23507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (21))){
var state_23459__$1 = state_23459;
var statearr_23472_23508 = state_23459__$1;
(statearr_23472_23508[(2)] = null);

(statearr_23472_23508[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (13))){
var inst_23413 = (state_23459[(8)]);
var inst_23411 = (state_23459[(9)]);
var inst_23412 = (state_23459[(11)]);
var inst_23414 = (state_23459[(12)]);
var inst_23421 = (state_23459[(2)]);
var inst_23422 = (inst_23414 + (1));
var tmp23468 = inst_23413;
var tmp23469 = inst_23411;
var tmp23470 = inst_23412;
var inst_23411__$1 = tmp23469;
var inst_23412__$1 = tmp23470;
var inst_23413__$1 = tmp23468;
var inst_23414__$1 = inst_23422;
var state_23459__$1 = (function (){var statearr_23473 = state_23459;
(statearr_23473[(8)] = inst_23413__$1);

(statearr_23473[(9)] = inst_23411__$1);

(statearr_23473[(14)] = inst_23421);

(statearr_23473[(11)] = inst_23412__$1);

(statearr_23473[(12)] = inst_23414__$1);

return statearr_23473;
})();
var statearr_23474_23509 = state_23459__$1;
(statearr_23474_23509[(2)] = null);

(statearr_23474_23509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (22))){
var state_23459__$1 = state_23459;
var statearr_23475_23510 = state_23459__$1;
(statearr_23475_23510[(2)] = null);

(statearr_23475_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (6))){
var inst_23400 = (state_23459[(13)]);
var inst_23409 = f.call(null,inst_23400);
var inst_23410 = cljs.core.seq.call(null,inst_23409);
var inst_23411 = inst_23410;
var inst_23412 = null;
var inst_23413 = (0);
var inst_23414 = (0);
var state_23459__$1 = (function (){var statearr_23476 = state_23459;
(statearr_23476[(8)] = inst_23413);

(statearr_23476[(9)] = inst_23411);

(statearr_23476[(11)] = inst_23412);

(statearr_23476[(12)] = inst_23414);

return statearr_23476;
})();
var statearr_23477_23511 = state_23459__$1;
(statearr_23477_23511[(2)] = null);

(statearr_23477_23511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (17))){
var inst_23425 = (state_23459[(7)]);
var inst_23429 = cljs.core.chunk_first.call(null,inst_23425);
var inst_23430 = cljs.core.chunk_rest.call(null,inst_23425);
var inst_23431 = cljs.core.count.call(null,inst_23429);
var inst_23411 = inst_23430;
var inst_23412 = inst_23429;
var inst_23413 = inst_23431;
var inst_23414 = (0);
var state_23459__$1 = (function (){var statearr_23478 = state_23459;
(statearr_23478[(8)] = inst_23413);

(statearr_23478[(9)] = inst_23411);

(statearr_23478[(11)] = inst_23412);

(statearr_23478[(12)] = inst_23414);

return statearr_23478;
})();
var statearr_23479_23512 = state_23459__$1;
(statearr_23479_23512[(2)] = null);

(statearr_23479_23512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (3))){
var inst_23457 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23459__$1,inst_23457);
} else {
if((state_val_23460 === (12))){
var inst_23445 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23480_23513 = state_23459__$1;
(statearr_23480_23513[(2)] = inst_23445);

(statearr_23480_23513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (2))){
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23459__$1,(4),in$);
} else {
if((state_val_23460 === (23))){
var inst_23453 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23481_23514 = state_23459__$1;
(statearr_23481_23514[(2)] = inst_23453);

(statearr_23481_23514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (19))){
var inst_23440 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23482_23515 = state_23459__$1;
(statearr_23482_23515[(2)] = inst_23440);

(statearr_23482_23515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (11))){
var inst_23425 = (state_23459[(7)]);
var inst_23411 = (state_23459[(9)]);
var inst_23425__$1 = cljs.core.seq.call(null,inst_23411);
var state_23459__$1 = (function (){var statearr_23483 = state_23459;
(statearr_23483[(7)] = inst_23425__$1);

return statearr_23483;
})();
if(inst_23425__$1){
var statearr_23484_23516 = state_23459__$1;
(statearr_23484_23516[(1)] = (14));

} else {
var statearr_23485_23517 = state_23459__$1;
(statearr_23485_23517[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (9))){
var inst_23447 = (state_23459[(2)]);
var inst_23448 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23459__$1 = (function (){var statearr_23486 = state_23459;
(statearr_23486[(15)] = inst_23447);

return statearr_23486;
})();
if(cljs.core.truth_(inst_23448)){
var statearr_23487_23518 = state_23459__$1;
(statearr_23487_23518[(1)] = (21));

} else {
var statearr_23488_23519 = state_23459__$1;
(statearr_23488_23519[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (5))){
var inst_23403 = cljs.core.async.close_BANG_.call(null,out);
var state_23459__$1 = state_23459;
var statearr_23489_23520 = state_23459__$1;
(statearr_23489_23520[(2)] = inst_23403);

(statearr_23489_23520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (14))){
var inst_23425 = (state_23459[(7)]);
var inst_23427 = cljs.core.chunked_seq_QMARK_.call(null,inst_23425);
var state_23459__$1 = state_23459;
if(inst_23427){
var statearr_23490_23521 = state_23459__$1;
(statearr_23490_23521[(1)] = (17));

} else {
var statearr_23491_23522 = state_23459__$1;
(statearr_23491_23522[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (16))){
var inst_23443 = (state_23459[(2)]);
var state_23459__$1 = state_23459;
var statearr_23492_23523 = state_23459__$1;
(statearr_23492_23523[(2)] = inst_23443);

(statearr_23492_23523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23460 === (10))){
var inst_23412 = (state_23459[(11)]);
var inst_23414 = (state_23459[(12)]);
var inst_23419 = cljs.core._nth.call(null,inst_23412,inst_23414);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23459__$1,(13),out,inst_23419);
} else {
if((state_val_23460 === (18))){
var inst_23425 = (state_23459[(7)]);
var inst_23434 = cljs.core.first.call(null,inst_23425);
var state_23459__$1 = state_23459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23459__$1,(20),out,inst_23434);
} else {
if((state_val_23460 === (8))){
var inst_23413 = (state_23459[(8)]);
var inst_23414 = (state_23459[(12)]);
var inst_23416 = (inst_23414 < inst_23413);
var inst_23417 = inst_23416;
var state_23459__$1 = state_23459;
if(cljs.core.truth_(inst_23417)){
var statearr_23493_23524 = state_23459__$1;
(statearr_23493_23524[(1)] = (10));

} else {
var statearr_23494_23525 = state_23459__$1;
(statearr_23494_23525[(1)] = (11));

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
});})(c__21024__auto__))
;
return ((function (switch__20912__auto__,c__21024__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20913__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20913__auto____0 = (function (){
var statearr_23498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23498[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20913__auto__);

(statearr_23498[(1)] = (1));

return statearr_23498;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20913__auto____1 = (function (state_23459){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23499){if((e23499 instanceof Object)){
var ex__20916__auto__ = e23499;
var statearr_23500_23526 = state_23459;
(statearr_23500_23526[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23527 = state_23459;
state_23459 = G__23527;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20913__auto__ = function(state_23459){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20913__auto____1.call(this,state_23459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20913__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20913__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto__))
})();
var state__21026__auto__ = (function (){var statearr_23501 = f__21025__auto__.call(null);
(statearr_23501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto__);

return statearr_23501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto__))
);

return c__21024__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23528 = [];
var len__19428__auto___23531 = arguments.length;
var i__19429__auto___23532 = (0);
while(true){
if((i__19429__auto___23532 < len__19428__auto___23531)){
args23528.push((arguments[i__19429__auto___23532]));

var G__23533 = (i__19429__auto___23532 + (1));
i__19429__auto___23532 = G__23533;
continue;
} else {
}
break;
}

var G__23530 = args23528.length;
switch (G__23530) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23528.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23535 = [];
var len__19428__auto___23538 = arguments.length;
var i__19429__auto___23539 = (0);
while(true){
if((i__19429__auto___23539 < len__19428__auto___23538)){
args23535.push((arguments[i__19429__auto___23539]));

var G__23540 = (i__19429__auto___23539 + (1));
i__19429__auto___23539 = G__23540;
continue;
} else {
}
break;
}

var G__23537 = args23535.length;
switch (G__23537) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23535.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23542 = [];
var len__19428__auto___23593 = arguments.length;
var i__19429__auto___23594 = (0);
while(true){
if((i__19429__auto___23594 < len__19428__auto___23593)){
args23542.push((arguments[i__19429__auto___23594]));

var G__23595 = (i__19429__auto___23594 + (1));
i__19429__auto___23594 = G__23595;
continue;
} else {
}
break;
}

var G__23544 = args23542.length;
switch (G__23544) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23542.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21024__auto___23597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23597,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23597,out){
return (function (state_23568){
var state_val_23569 = (state_23568[(1)]);
if((state_val_23569 === (7))){
var inst_23563 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23570_23598 = state_23568__$1;
(statearr_23570_23598[(2)] = inst_23563);

(statearr_23570_23598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (1))){
var inst_23545 = null;
var state_23568__$1 = (function (){var statearr_23571 = state_23568;
(statearr_23571[(7)] = inst_23545);

return statearr_23571;
})();
var statearr_23572_23599 = state_23568__$1;
(statearr_23572_23599[(2)] = null);

(statearr_23572_23599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (4))){
var inst_23548 = (state_23568[(8)]);
var inst_23548__$1 = (state_23568[(2)]);
var inst_23549 = (inst_23548__$1 == null);
var inst_23550 = cljs.core.not.call(null,inst_23549);
var state_23568__$1 = (function (){var statearr_23573 = state_23568;
(statearr_23573[(8)] = inst_23548__$1);

return statearr_23573;
})();
if(inst_23550){
var statearr_23574_23600 = state_23568__$1;
(statearr_23574_23600[(1)] = (5));

} else {
var statearr_23575_23601 = state_23568__$1;
(statearr_23575_23601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (6))){
var state_23568__$1 = state_23568;
var statearr_23576_23602 = state_23568__$1;
(statearr_23576_23602[(2)] = null);

(statearr_23576_23602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (3))){
var inst_23565 = (state_23568[(2)]);
var inst_23566 = cljs.core.async.close_BANG_.call(null,out);
var state_23568__$1 = (function (){var statearr_23577 = state_23568;
(statearr_23577[(9)] = inst_23565);

return statearr_23577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23568__$1,inst_23566);
} else {
if((state_val_23569 === (2))){
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23568__$1,(4),ch);
} else {
if((state_val_23569 === (11))){
var inst_23548 = (state_23568[(8)]);
var inst_23557 = (state_23568[(2)]);
var inst_23545 = inst_23548;
var state_23568__$1 = (function (){var statearr_23578 = state_23568;
(statearr_23578[(7)] = inst_23545);

(statearr_23578[(10)] = inst_23557);

return statearr_23578;
})();
var statearr_23579_23603 = state_23568__$1;
(statearr_23579_23603[(2)] = null);

(statearr_23579_23603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (9))){
var inst_23548 = (state_23568[(8)]);
var state_23568__$1 = state_23568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23568__$1,(11),out,inst_23548);
} else {
if((state_val_23569 === (5))){
var inst_23545 = (state_23568[(7)]);
var inst_23548 = (state_23568[(8)]);
var inst_23552 = cljs.core._EQ_.call(null,inst_23548,inst_23545);
var state_23568__$1 = state_23568;
if(inst_23552){
var statearr_23581_23604 = state_23568__$1;
(statearr_23581_23604[(1)] = (8));

} else {
var statearr_23582_23605 = state_23568__$1;
(statearr_23582_23605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (10))){
var inst_23560 = (state_23568[(2)]);
var state_23568__$1 = state_23568;
var statearr_23583_23606 = state_23568__$1;
(statearr_23583_23606[(2)] = inst_23560);

(statearr_23583_23606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23569 === (8))){
var inst_23545 = (state_23568[(7)]);
var tmp23580 = inst_23545;
var inst_23545__$1 = tmp23580;
var state_23568__$1 = (function (){var statearr_23584 = state_23568;
(statearr_23584[(7)] = inst_23545__$1);

return statearr_23584;
})();
var statearr_23585_23607 = state_23568__$1;
(statearr_23585_23607[(2)] = null);

(statearr_23585_23607[(1)] = (2));


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
});})(c__21024__auto___23597,out))
;
return ((function (switch__20912__auto__,c__21024__auto___23597,out){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23589 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23589[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23589[(1)] = (1));

return statearr_23589;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23568){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23590){if((e23590 instanceof Object)){
var ex__20916__auto__ = e23590;
var statearr_23591_23608 = state_23568;
(statearr_23591_23608[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23609 = state_23568;
state_23568 = G__23609;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23597,out))
})();
var state__21026__auto__ = (function (){var statearr_23592 = f__21025__auto__.call(null);
(statearr_23592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23597);

return statearr_23592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23597,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23610 = [];
var len__19428__auto___23680 = arguments.length;
var i__19429__auto___23681 = (0);
while(true){
if((i__19429__auto___23681 < len__19428__auto___23680)){
args23610.push((arguments[i__19429__auto___23681]));

var G__23682 = (i__19429__auto___23681 + (1));
i__19429__auto___23681 = G__23682;
continue;
} else {
}
break;
}

var G__23612 = args23610.length;
switch (G__23612) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23610.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21024__auto___23684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23684,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23684,out){
return (function (state_23650){
var state_val_23651 = (state_23650[(1)]);
if((state_val_23651 === (7))){
var inst_23646 = (state_23650[(2)]);
var state_23650__$1 = state_23650;
var statearr_23652_23685 = state_23650__$1;
(statearr_23652_23685[(2)] = inst_23646);

(statearr_23652_23685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (1))){
var inst_23613 = (new Array(n));
var inst_23614 = inst_23613;
var inst_23615 = (0);
var state_23650__$1 = (function (){var statearr_23653 = state_23650;
(statearr_23653[(7)] = inst_23615);

(statearr_23653[(8)] = inst_23614);

return statearr_23653;
})();
var statearr_23654_23686 = state_23650__$1;
(statearr_23654_23686[(2)] = null);

(statearr_23654_23686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (4))){
var inst_23618 = (state_23650[(9)]);
var inst_23618__$1 = (state_23650[(2)]);
var inst_23619 = (inst_23618__$1 == null);
var inst_23620 = cljs.core.not.call(null,inst_23619);
var state_23650__$1 = (function (){var statearr_23655 = state_23650;
(statearr_23655[(9)] = inst_23618__$1);

return statearr_23655;
})();
if(inst_23620){
var statearr_23656_23687 = state_23650__$1;
(statearr_23656_23687[(1)] = (5));

} else {
var statearr_23657_23688 = state_23650__$1;
(statearr_23657_23688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (15))){
var inst_23640 = (state_23650[(2)]);
var state_23650__$1 = state_23650;
var statearr_23658_23689 = state_23650__$1;
(statearr_23658_23689[(2)] = inst_23640);

(statearr_23658_23689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (13))){
var state_23650__$1 = state_23650;
var statearr_23659_23690 = state_23650__$1;
(statearr_23659_23690[(2)] = null);

(statearr_23659_23690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (6))){
var inst_23615 = (state_23650[(7)]);
var inst_23636 = (inst_23615 > (0));
var state_23650__$1 = state_23650;
if(cljs.core.truth_(inst_23636)){
var statearr_23660_23691 = state_23650__$1;
(statearr_23660_23691[(1)] = (12));

} else {
var statearr_23661_23692 = state_23650__$1;
(statearr_23661_23692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (3))){
var inst_23648 = (state_23650[(2)]);
var state_23650__$1 = state_23650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23650__$1,inst_23648);
} else {
if((state_val_23651 === (12))){
var inst_23614 = (state_23650[(8)]);
var inst_23638 = cljs.core.vec.call(null,inst_23614);
var state_23650__$1 = state_23650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23650__$1,(15),out,inst_23638);
} else {
if((state_val_23651 === (2))){
var state_23650__$1 = state_23650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23650__$1,(4),ch);
} else {
if((state_val_23651 === (11))){
var inst_23630 = (state_23650[(2)]);
var inst_23631 = (new Array(n));
var inst_23614 = inst_23631;
var inst_23615 = (0);
var state_23650__$1 = (function (){var statearr_23662 = state_23650;
(statearr_23662[(10)] = inst_23630);

(statearr_23662[(7)] = inst_23615);

(statearr_23662[(8)] = inst_23614);

return statearr_23662;
})();
var statearr_23663_23693 = state_23650__$1;
(statearr_23663_23693[(2)] = null);

(statearr_23663_23693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (9))){
var inst_23614 = (state_23650[(8)]);
var inst_23628 = cljs.core.vec.call(null,inst_23614);
var state_23650__$1 = state_23650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23650__$1,(11),out,inst_23628);
} else {
if((state_val_23651 === (5))){
var inst_23618 = (state_23650[(9)]);
var inst_23615 = (state_23650[(7)]);
var inst_23614 = (state_23650[(8)]);
var inst_23623 = (state_23650[(11)]);
var inst_23622 = (inst_23614[inst_23615] = inst_23618);
var inst_23623__$1 = (inst_23615 + (1));
var inst_23624 = (inst_23623__$1 < n);
var state_23650__$1 = (function (){var statearr_23664 = state_23650;
(statearr_23664[(11)] = inst_23623__$1);

(statearr_23664[(12)] = inst_23622);

return statearr_23664;
})();
if(cljs.core.truth_(inst_23624)){
var statearr_23665_23694 = state_23650__$1;
(statearr_23665_23694[(1)] = (8));

} else {
var statearr_23666_23695 = state_23650__$1;
(statearr_23666_23695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (14))){
var inst_23643 = (state_23650[(2)]);
var inst_23644 = cljs.core.async.close_BANG_.call(null,out);
var state_23650__$1 = (function (){var statearr_23668 = state_23650;
(statearr_23668[(13)] = inst_23643);

return statearr_23668;
})();
var statearr_23669_23696 = state_23650__$1;
(statearr_23669_23696[(2)] = inst_23644);

(statearr_23669_23696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (10))){
var inst_23634 = (state_23650[(2)]);
var state_23650__$1 = state_23650;
var statearr_23670_23697 = state_23650__$1;
(statearr_23670_23697[(2)] = inst_23634);

(statearr_23670_23697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23651 === (8))){
var inst_23614 = (state_23650[(8)]);
var inst_23623 = (state_23650[(11)]);
var tmp23667 = inst_23614;
var inst_23614__$1 = tmp23667;
var inst_23615 = inst_23623;
var state_23650__$1 = (function (){var statearr_23671 = state_23650;
(statearr_23671[(7)] = inst_23615);

(statearr_23671[(8)] = inst_23614__$1);

return statearr_23671;
})();
var statearr_23672_23698 = state_23650__$1;
(statearr_23672_23698[(2)] = null);

(statearr_23672_23698[(1)] = (2));


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
});})(c__21024__auto___23684,out))
;
return ((function (switch__20912__auto__,c__21024__auto___23684,out){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23676[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23676[(1)] = (1));

return statearr_23676;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23650){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23677){if((e23677 instanceof Object)){
var ex__20916__auto__ = e23677;
var statearr_23678_23699 = state_23650;
(statearr_23678_23699[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23700 = state_23650;
state_23650 = G__23700;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23684,out))
})();
var state__21026__auto__ = (function (){var statearr_23679 = f__21025__auto__.call(null);
(statearr_23679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23684);

return statearr_23679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23684,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23701 = [];
var len__19428__auto___23775 = arguments.length;
var i__19429__auto___23776 = (0);
while(true){
if((i__19429__auto___23776 < len__19428__auto___23775)){
args23701.push((arguments[i__19429__auto___23776]));

var G__23777 = (i__19429__auto___23776 + (1));
i__19429__auto___23776 = G__23777;
continue;
} else {
}
break;
}

var G__23703 = args23701.length;
switch (G__23703) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23701.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21024__auto___23779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21024__auto___23779,out){
return (function (){
var f__21025__auto__ = (function (){var switch__20912__auto__ = ((function (c__21024__auto___23779,out){
return (function (state_23745){
var state_val_23746 = (state_23745[(1)]);
if((state_val_23746 === (7))){
var inst_23741 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23747_23780 = state_23745__$1;
(statearr_23747_23780[(2)] = inst_23741);

(statearr_23747_23780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (1))){
var inst_23704 = [];
var inst_23705 = inst_23704;
var inst_23706 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23745__$1 = (function (){var statearr_23748 = state_23745;
(statearr_23748[(7)] = inst_23705);

(statearr_23748[(8)] = inst_23706);

return statearr_23748;
})();
var statearr_23749_23781 = state_23745__$1;
(statearr_23749_23781[(2)] = null);

(statearr_23749_23781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (4))){
var inst_23709 = (state_23745[(9)]);
var inst_23709__$1 = (state_23745[(2)]);
var inst_23710 = (inst_23709__$1 == null);
var inst_23711 = cljs.core.not.call(null,inst_23710);
var state_23745__$1 = (function (){var statearr_23750 = state_23745;
(statearr_23750[(9)] = inst_23709__$1);

return statearr_23750;
})();
if(inst_23711){
var statearr_23751_23782 = state_23745__$1;
(statearr_23751_23782[(1)] = (5));

} else {
var statearr_23752_23783 = state_23745__$1;
(statearr_23752_23783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (15))){
var inst_23735 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23753_23784 = state_23745__$1;
(statearr_23753_23784[(2)] = inst_23735);

(statearr_23753_23784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (13))){
var state_23745__$1 = state_23745;
var statearr_23754_23785 = state_23745__$1;
(statearr_23754_23785[(2)] = null);

(statearr_23754_23785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (6))){
var inst_23705 = (state_23745[(7)]);
var inst_23730 = inst_23705.length;
var inst_23731 = (inst_23730 > (0));
var state_23745__$1 = state_23745;
if(cljs.core.truth_(inst_23731)){
var statearr_23755_23786 = state_23745__$1;
(statearr_23755_23786[(1)] = (12));

} else {
var statearr_23756_23787 = state_23745__$1;
(statearr_23756_23787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (3))){
var inst_23743 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else {
if((state_val_23746 === (12))){
var inst_23705 = (state_23745[(7)]);
var inst_23733 = cljs.core.vec.call(null,inst_23705);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,(15),out,inst_23733);
} else {
if((state_val_23746 === (2))){
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23745__$1,(4),ch);
} else {
if((state_val_23746 === (11))){
var inst_23709 = (state_23745[(9)]);
var inst_23713 = (state_23745[(10)]);
var inst_23723 = (state_23745[(2)]);
var inst_23724 = [];
var inst_23725 = inst_23724.push(inst_23709);
var inst_23705 = inst_23724;
var inst_23706 = inst_23713;
var state_23745__$1 = (function (){var statearr_23757 = state_23745;
(statearr_23757[(11)] = inst_23725);

(statearr_23757[(7)] = inst_23705);

(statearr_23757[(8)] = inst_23706);

(statearr_23757[(12)] = inst_23723);

return statearr_23757;
})();
var statearr_23758_23788 = state_23745__$1;
(statearr_23758_23788[(2)] = null);

(statearr_23758_23788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (9))){
var inst_23705 = (state_23745[(7)]);
var inst_23721 = cljs.core.vec.call(null,inst_23705);
var state_23745__$1 = state_23745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,(11),out,inst_23721);
} else {
if((state_val_23746 === (5))){
var inst_23709 = (state_23745[(9)]);
var inst_23706 = (state_23745[(8)]);
var inst_23713 = (state_23745[(10)]);
var inst_23713__$1 = f.call(null,inst_23709);
var inst_23714 = cljs.core._EQ_.call(null,inst_23713__$1,inst_23706);
var inst_23715 = cljs.core.keyword_identical_QMARK_.call(null,inst_23706,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23716 = (inst_23714) || (inst_23715);
var state_23745__$1 = (function (){var statearr_23759 = state_23745;
(statearr_23759[(10)] = inst_23713__$1);

return statearr_23759;
})();
if(cljs.core.truth_(inst_23716)){
var statearr_23760_23789 = state_23745__$1;
(statearr_23760_23789[(1)] = (8));

} else {
var statearr_23761_23790 = state_23745__$1;
(statearr_23761_23790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (14))){
var inst_23738 = (state_23745[(2)]);
var inst_23739 = cljs.core.async.close_BANG_.call(null,out);
var state_23745__$1 = (function (){var statearr_23763 = state_23745;
(statearr_23763[(13)] = inst_23738);

return statearr_23763;
})();
var statearr_23764_23791 = state_23745__$1;
(statearr_23764_23791[(2)] = inst_23739);

(statearr_23764_23791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (10))){
var inst_23728 = (state_23745[(2)]);
var state_23745__$1 = state_23745;
var statearr_23765_23792 = state_23745__$1;
(statearr_23765_23792[(2)] = inst_23728);

(statearr_23765_23792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23746 === (8))){
var inst_23705 = (state_23745[(7)]);
var inst_23709 = (state_23745[(9)]);
var inst_23713 = (state_23745[(10)]);
var inst_23718 = inst_23705.push(inst_23709);
var tmp23762 = inst_23705;
var inst_23705__$1 = tmp23762;
var inst_23706 = inst_23713;
var state_23745__$1 = (function (){var statearr_23766 = state_23745;
(statearr_23766[(7)] = inst_23705__$1);

(statearr_23766[(8)] = inst_23706);

(statearr_23766[(14)] = inst_23718);

return statearr_23766;
})();
var statearr_23767_23793 = state_23745__$1;
(statearr_23767_23793[(2)] = null);

(statearr_23767_23793[(1)] = (2));


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
});})(c__21024__auto___23779,out))
;
return ((function (switch__20912__auto__,c__21024__auto___23779,out){
return (function() {
var cljs$core$async$state_machine__20913__auto__ = null;
var cljs$core$async$state_machine__20913__auto____0 = (function (){
var statearr_23771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23771[(0)] = cljs$core$async$state_machine__20913__auto__);

(statearr_23771[(1)] = (1));

return statearr_23771;
});
var cljs$core$async$state_machine__20913__auto____1 = (function (state_23745){
while(true){
var ret_value__20914__auto__ = (function (){try{while(true){
var result__20915__auto__ = switch__20912__auto__.call(null,state_23745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20915__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20915__auto__;
}
break;
}
}catch (e23772){if((e23772 instanceof Object)){
var ex__20916__auto__ = e23772;
var statearr_23773_23794 = state_23745;
(statearr_23773_23794[(5)] = ex__20916__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23795 = state_23745;
state_23745 = G__23795;
continue;
} else {
return ret_value__20914__auto__;
}
break;
}
});
cljs$core$async$state_machine__20913__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20913__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20913__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20913__auto____0;
cljs$core$async$state_machine__20913__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20913__auto____1;
return cljs$core$async$state_machine__20913__auto__;
})()
;})(switch__20912__auto__,c__21024__auto___23779,out))
})();
var state__21026__auto__ = (function (){var statearr_23774 = f__21025__auto__.call(null);
(statearr_23774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21024__auto___23779);

return statearr_23774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21026__auto__);
});})(c__21024__auto___23779,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1466046460993