// Compiled by ClojureScript 1.7.228 {}
goog.provide('mb.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('mb.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console. asf");
if(typeof mb.ui.app_state !== 'undefined'){
} else {
mb.ui.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-skills","show-skills",-575250922),false], null));
}
mb.ui.app_list = (function mb$ui$app_list(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),mb.core.navigation.call(null),mb.core.intro_section.call(null),mb.core.skills_section.call(null,mb.ui.app_state),mb.core.portfolio_section.call(null),mb.core.contact_section.call(null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mb.ui.app_list], null),document.getElementById("app"));
mb.ui.on_js_reload = (function mb$ui$on_js_reload(){
return null;
});

//# sourceMappingURL=ui.js.map?rel=1466046468848