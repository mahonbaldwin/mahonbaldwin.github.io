// Compiled by ClojureScript 1.7.228 {}
goog.provide('mb.core');
goog.require('cljs.core');
mb.core.logo = (function mb$core$logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#intro"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.logo","span.logo",-1373506483),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mahon"], null),"Mahon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"baldwin"], null),"Baldwin"], null)], null)], null);
});
mb.core.nav_el = (function mb$core$nav_el(var_args){
var args26142 = [];
var len__19428__auto___26148 = arguments.length;
var i__19429__auto___26149 = (0);
while(true){
if((i__19429__auto___26149 < len__19428__auto___26148)){
args26142.push((arguments[i__19429__auto___26149]));

var G__26150 = (i__19429__auto___26149 + (1));
i__19429__auto___26149 = G__26150;
continue;
} else {
}
break;
}

var G__26147 = args26142.length;
switch (G__26147) {
case 1:
return mb.core.nav_el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__19447__auto__ = (new cljs.core.IndexedSeq(args26142.slice((2)),(0)));
return mb.core.nav_el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19447__auto__);

}
});

mb.core.nav_el.cljs$core$IFn$_invoke$arity$1 = (function (name){
return mb.core.nav_el.call(null,name,[cljs.core.str("#"),cljs.core.str(name)].join(''));
});

mb.core.nav_el.cljs$core$IFn$_invoke$arity$variadic = (function (name,link,external){
var m = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null);
var m__$1 = (cljs.core.truth_(cljs.core.first.call(null,external))?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"target","target",253001721),"_blank"):m);
cljs.core.print.call(null,m__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),m__$1,[cljs.core.str("#"),cljs.core.str(name)].join('')], null);
});

mb.core.nav_el.cljs$lang$applyTo = (function (seq26143){
var G__26144 = cljs.core.first.call(null,seq26143);
var seq26143__$1 = cljs.core.next.call(null,seq26143);
var G__26145 = cljs.core.first.call(null,seq26143__$1);
var seq26143__$2 = cljs.core.next.call(null,seq26143__$1);
return mb.core.nav_el.cljs$core$IFn$_invoke$arity$variadic(G__26144,G__26145,seq26143__$2);
});

mb.core.nav_el.cljs$lang$maxFixedArity = (2);
mb.core.navigation = (function mb$core$navigation(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navigation","div.navigation",1362988689),mb.core.logo.call(null),mb.core.nav_el.call(null,"skills"),mb.core.nav_el.call(null,"portfolio"),mb.core.nav_el.call(null,"contact"),mb.core.nav_el.call(null,"blog","http://www.tuesdaydeveloper.com",true)], null);
});
mb.core.title = (function mb$core$title(title__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),title__$1], null),[cljs.core.str("#"),cljs.core.str(title__$1)].join('')], null);
});
mb.core.intro_section = (function mb$core$intro_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.intro.section","div.intro.section",-1295112493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"intro"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.intro-text","div.intro-text",725072392),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"In a world without a leader...",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"A software engineer who uses his powers for good!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Hi, I'm Mahon (my secret identity must remain unknown) which is short for Mahonri. I've been a software engineer since I graduated from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.byui.edu/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null)," BYU-Idaho"], null)," in 2010. In addition to\n    software development I enjoy reading, hiking, photography, psychology, sociology, slight of hand, rearing my child,\n    and finding new ways to surprise my wife."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If you're interested in my skills or portfolio, just scroll down. If you're interested in my work history, you can view it on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.linkedin.com/in/mahonri",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"LinkedIn"], null),". If you're wondering where my name comes from, read the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://mormon.org/beliefs/book-of-mormon",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Book of Mormon"], null),". If you're wondering how bees get their honey into the little plastic bears, I'm sure there is a video on YouTube\n     that can tell you."], null)], null)], null);
});
mb.core.skill = (function mb$core$skill(text,img){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.skill","div.skill",1253973315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("img/"),cljs.core.str(img)].join(''),new cljs.core.Keyword(null,"alt","alt",-3214426),text,new cljs.core.Keyword(null,"title","title",636505583),text], null)], null)], null);
});
mb.core.skill_link_item = (function mb$core$skill_link_item(var_args){
var args26152 = [];
var len__19428__auto___26155 = arguments.length;
var i__19429__auto___26156 = (0);
while(true){
if((i__19429__auto___26156 < len__19428__auto___26155)){
args26152.push((arguments[i__19429__auto___26156]));

var G__26157 = (i__19429__auto___26156 + (1));
i__19429__auto___26156 = G__26157;
continue;
} else {
}
break;
}

var G__26154 = args26152.length;
switch (G__26154) {
case 1:
return mb.core.skill_link_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mb.core.skill_link_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26152.length)].join('')));

}
});

mb.core.skill_link_item.cljs$core$IFn$_invoke$arity$1 = (function (text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),text], null);
});

mb.core.skill_link_item.cljs$core$IFn$_invoke$arity$2 = (function (text,href){
return mb.core.skill_link_item.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null),text], null));
});

mb.core.skill_link_item.cljs$lang$maxFixedArity = 2;
mb.core.show_hide_list = (function mb$core$show_hide_list(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"show-skills","show-skills",-575250922),cljs.core.not.call(null,new cljs.core.Keyword(null,"show-skills","show-skills",-575250922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});
mb.core.skills_list = cljs.core.sort.call(null,(function (p1__26159_SHARP_,p2__26160_SHARP_){
return cljs.core.compare.call(null,p1__26159_SHARP_.toLowerCase(),p2__26160_SHARP_.toLowerCase());
}),cljs.core.distinct.call(null,new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [".NET","AngularJS","Arduino","Clojure","ClojureScript","ColdFusion","CouchBase","CSS","D3","Datomic","EmberJS","Google Cloud","HTML5","Java","JavaScript","jQuery","LESS","MongoDb","NodeJs","PHP","React","Selenium","SQL","SASS","XML"], null)));
mb.core.skills_section = (function mb$core$skills_section(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.skills.section","div.skills.section",5955231),mb.core.title.call(null,"skills"),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.items","div.items",-114898192),mb.core.skill.call(null,"Clojure","clj.png"),mb.core.skill.call(null,"ClojureScript","cljs.png"),mb.core.skill.call(null,"React","react.png"),mb.core.skill.call(null,"NodeJS","node.png"),mb.core.skill.call(null,"jQuery","jquery.png"),mb.core.skill.call(null,"HTML5","html5.png"),mb.core.skill.call(null,".NET","dotnet.png"),mb.core.skill.call(null,"Java","java.png")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.full-list","div.full-list",1152495954),((cljs.core.not.call(null,new cljs.core.Keyword(null,"show-skills","show-skills",-575250922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return mb.core.show_hide_list.call(null,state);
})], null),"view larger list"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__18370__auto__ = new cljs.core.Keyword(null,"show-skills","show-skills",-575250922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "hidden";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.skill-list","ul.skill-list",405059454),(function (){var iter__19142__auto__ = (function mb$core$skills_section_$_iter__26165(s__26166){
return (new cljs.core.LazySeq(null,(function (){
var s__26166__$1 = s__26166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26166__$1);
if(temp__4657__auto__){
var s__26166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26166__$2)){
var c__19140__auto__ = cljs.core.chunk_first.call(null,s__26166__$2);
var size__19141__auto__ = cljs.core.count.call(null,c__19140__auto__);
var b__26168 = cljs.core.chunk_buffer.call(null,size__19141__auto__);
if((function (){var i__26167 = (0);
while(true){
if((i__26167 < size__19141__auto__)){
var s = cljs.core._nth.call(null,c__19140__auto__,i__26167);
cljs.core.chunk_append.call(null,b__26168,mb.core.skill_link_item.call(null,s));

var G__26169 = (i__26167 + (1));
i__26167 = G__26169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26168),mb$core$skills_section_$_iter__26165.call(null,cljs.core.chunk_rest.call(null,s__26166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26168),null);
}
} else {
var s = cljs.core.first.call(null,s__26166__$2);
return cljs.core.cons.call(null,mb.core.skill_link_item.call(null,s),mb$core$skills_section_$_iter__26165.call(null,cljs.core.rest.call(null,s__26166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19142__auto__.call(null,mb.core.skills_list);
})()], null)], null)], null)], null);
});
mb.core.portfolio_item = (function mb$core$portfolio_item(content,description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.portfolio-item","div.portfolio-item",392823567),content,description], null);
});
mb.core.portfolio_item_link = (function mb$core$portfolio_item_link(var_args){
var args__19435__auto__ = [];
var len__19428__auto___26174 = arguments.length;
var i__19429__auto___26175 = (0);
while(true){
if((i__19429__auto___26175 < len__19428__auto___26174)){
args__19435__auto__.push((arguments[i__19429__auto___26175]));

var G__26176 = (i__19429__auto___26175 + (1));
i__19429__auto___26175 = G__26176;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return mb.core.portfolio_item_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

mb.core.portfolio_item_link.cljs$core$IFn$_invoke$arity$variadic = (function (text,img,link,description){
return mb.core.portfolio_item.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),(cljs.core.truth_(img)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("img/"),cljs.core.str(img)].join('')], null)], null):text)], null),description);
});

mb.core.portfolio_item_link.cljs$lang$maxFixedArity = (3);

mb.core.portfolio_item_link.cljs$lang$applyTo = (function (seq26170){
var G__26171 = cljs.core.first.call(null,seq26170);
var seq26170__$1 = cljs.core.next.call(null,seq26170);
var G__26172 = cljs.core.first.call(null,seq26170__$1);
var seq26170__$2 = cljs.core.next.call(null,seq26170__$1);
var G__26173 = cljs.core.first.call(null,seq26170__$2);
var seq26170__$3 = cljs.core.next.call(null,seq26170__$2);
return mb.core.portfolio_item_link.cljs$core$IFn$_invoke$arity$variadic(G__26171,G__26172,G__26173,seq26170__$3);
});
mb.core.portfolio_youtube = (function mb$core$portfolio_youtube(src,description){
return mb.core.portfolio_item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(560),new cljs.core.Keyword(null,"height","height",1025178622),(315),new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),(0),new cljs.core.Keyword(null,"allowfullscreen","allowfullscreen",-1595290361),true], null)], null),description);
});
mb.core.portfolio_section = (function mb$core$portfolio_section(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.portfolio.section","div.portfolio.section",-658607353),mb.core.title.call(null,"portfolio"),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.items","div.items",-114898192),mb.core.portfolio_item_link.call(null,"beingCindy.com","being-cindy.png","http://beingcindy.com","Cindy Baldwin is a talented children's book writer and poet who needs a place to tell agents and publishers about her and her work, ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://beingcindy.com"], null),"beingcindy.com"], null)," is her place to do that. She is also my awesome wife. I developed her site after she drew up some mock-ups of what she wanted."),mb.core.portfolio_youtube.call(null,"https://www.youtube.com/embed/ugp_lkuYVis","I enjoy playing around with electronics. This is an Arduino hooked up to the motors of an old remote controlled car. One day I plan to get a WiFi board and add remote functionality."),mb.core.portfolio_item_link.call(null,"github.com","github.png","http://github.com/mahonbaldwin","I have several small projects on GitHub, most of them are simple proofs of concept.")], null)], null);
});
mb.core.contact_section = (function mb$core$contact_section(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contact.section","div.contact.section",505667245),mb.core.title.call(null,"contact"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Feel free to drop me a line, but if you really want to be considerate, please pick it up again. The best ways to get a hold of me are using one of the following social networks."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/mahonrib"], null),"Twitter"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.linkedin.com/in/mahonri"], null),"LinkedIn"], null)], null)], null)], null);
});

//# sourceMappingURL=core.js.map?rel=1466046468794