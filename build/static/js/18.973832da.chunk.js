(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{494:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d=m.a.oneOfType([m.a.number,m.a.string]),i={tag:E.q,noGutters:m.a.bool,className:m.a.string,cssModule:m.a.object,form:m.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,s=e.tag,m=e.form,u=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),i=[];u.forEach((function(a,t){var l=e[a];if(delete d[a],l){var n=!t;i.push(n?"row-cols-"+l:"row-cols-"+a+"-"+l)}}));var b=Object(E.m)(o()(a,r?"no-gutters":null,m?"form-row":"row",i),t);return c.a.createElement(s,Object(l.a)({},d,{className:b}))};g.propTypes=i,g.defaultProps=b,a.a=g},495:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d=m.a.oneOfType([m.a.number,m.a.string]),i=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),order:d,offset:d})]),b={tag:E.q,xs:i,sm:i,md:i,lg:i,xl:i,className:m.a.string,cssModule:m.a.object,widths:m.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,s=e.tag,m=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];r.forEach((function(a,l){var n=e[a];if(delete m[a],n||""===n){var r=!l;if(Object(E.k)(n)){var c,s=r?"-":"-"+a+"-",d=f(r,a,n.size);u.push(Object(E.m)(o()(((c={})[d]=n.size||""===n.size,c["order"+s+n.order]=n.order||0===n.order,c["offset"+s+n.offset]=n.offset||0===n.offset,c)),t))}else{var i=f(r,a,n);u.push(i)}}})),u.length||u.push("col");var d=Object(E.m)(o()(a,u),t);return c.a.createElement(s,Object(l.a)({},m,{className:d}))};v.propTypes=b,v.defaultProps=g,a.a=v},497:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={tag:E.q,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},i=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.body,m=e.inverse,u=e.outline,d=e.tag,i=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(E.m)(o()(a,"card",!!m&&"text-white",!!s&&"card-body",!!r&&(u?"border":"bg")+"-"+r),t);return c.a.createElement(d,Object(l.a)({},b,{className:g,ref:i}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},498:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={tag:E.q,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},i=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,s=e.tag,m=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(E.m)(o()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},m,{className:u,ref:r}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},499:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={tag:E.q,className:m.a.string,cssModule:m.a.object},i=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),m=Object(E.m)(o()(a,"card-header"),t);return c.a.createElement(r,Object(l.a)({},s,{className:m}))};i.propTypes=d,i.defaultProps={tag:"div"},a.a=i},533:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:E.q,responsiveTag:E.q,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},i=function(e){var a=e.className,t=e.cssModule,r=e.size,s=e.bordered,m=e.borderless,u=e.striped,d=e.dark,i=e.hover,b=e.responsive,g=e.tag,f=e.responsiveTag,v=e.innerRef,p=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(E.m)(o()(a,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!m&&"table-borderless",!!u&&"table-striped",!!d&&"table-dark",!!i&&"table-hover"),t),N=c.a.createElement(g,Object(l.a)({},p,{ref:v,className:h}));if(b){var j=Object(E.m)(!0===b?"table-responsive":"table-responsive-"+b,t);return c.a.createElement(f,{className:j},N)}return N};i.propTypes=d,i.defaultProps={tag:"table",responsiveTag:"div"},a.a=i},626:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={children:m.a.node,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,size:m.a.string,tag:E.q,listTag:E.q,"aria-label":m.a.string},i=function(e){var a,t=e.className,r=e.listClassName,s=e.cssModule,m=e.size,u=e.tag,d=e.listTag,i=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),g=Object(E.m)(o()(t),s),f=Object(E.m)(o()(r,"pagination",((a={})["pagination-"+m]=!!m,a)),s);return c.a.createElement(u,{className:g,"aria-label":i},c.a.createElement(d,Object(l.a)({},b,{className:f})))};i.propTypes=d,i.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=i},627:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={active:m.a.bool,children:m.a.node,className:m.a.string,cssModule:m.a.object,disabled:m.a.bool,tag:E.q},i=function(e){var a=e.active,t=e.className,r=e.cssModule,s=e.disabled,m=e.tag,u=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(E.m)(o()(t,"page-item",{active:a,disabled:s}),r);return c.a.createElement(m,Object(l.a)({},u,{className:d}))};i.propTypes=d,i.defaultProps={tag:"li"},a.a=i},628:function(e,a,t){"use strict";var l=t(19),n=t(49),r=t(2),c=t.n(r),s=t(61),m=t.n(s),u=t(489),o=t.n(u),E=t(490),d={"aria-label":m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,next:m.a.bool,previous:m.a.bool,first:m.a.bool,last:m.a.bool,tag:E.q},i=function(e){var a,t=e.className,r=e.cssModule,s=e.next,m=e.previous,u=e.first,d=e.last,i=e.tag,b=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),g=Object(E.m)(o()(t,"page-link"),r);m?a="Previous":s?a="Next":u?a="First":d&&(a="Last");var f,v=e["aria-label"]||a;m?f="\u2039":s?f="\u203a":u?f="\xab":d&&(f="\xbb");var p=e.children;return p&&Array.isArray(p)&&0===p.length&&(p=null),b.href||"a"!==i||(i="button"),(m||s||u||d)&&(p=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},p||f),c.a.createElement("span",{className:"sr-only",key:"sr"},v)]),c.a.createElement(i,Object(l.a)({},b,{className:g,"aria-label":v}),p)};i.propTypes=d,i.defaultProps={tag:"a"},a.a=i},753:function(e,a,t){"use strict";t.r(a);var l=t(151),n=t(152),r=t(154),c=t(153),s=t(2),m=t.n(s),u=t(494),o=t(495),E=t(497),d=t(499),i=t(498),b=t(533),g=t(729),f=t(626),v=t(627),p=t(628),h=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(o.a,{xs:"12",lg:"6"},m.a.createElement(E.a,null,m.a.createElement(d.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Simple Table"),m.a.createElement(i.a,null,m.a.createElement(b.a,{responsive:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Username"),m.a.createElement("th",null,"Date registered"),m.a.createElement("th",null,"Role"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"Samppa Nori"),m.a.createElement("td",null,"2012/01/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Estavan Lykos"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"danger"},"Banned"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Chetan Mohamed"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Admin"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"secondary"},"Inactive"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Derick Maximinus"),m.a.createElement("td",null,"2012/03/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"warning"},"Pending"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Friderik D\xe1vid"),m.a.createElement("td",null,"2012/01/21"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))))),m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(p.a,{previous:!0,tag:"button"})),m.a.createElement(v.a,{active:!0},m.a.createElement(p.a,{tag:"button"},"1")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"2")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"3")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"4")),m.a.createElement(v.a,null,m.a.createElement(p.a,{next:!0,tag:"button"})))))),m.a.createElement(o.a,{xs:"12",lg:"6"},m.a.createElement(E.a,null,m.a.createElement(d.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Striped Table"),m.a.createElement(i.a,null,m.a.createElement(b.a,{responsive:!0,striped:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Username"),m.a.createElement("th",null,"Date registered"),m.a.createElement("th",null,"Role"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"Yiorgos Avraamu"),m.a.createElement("td",null,"2012/01/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Avram Tarasios"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"danger"},"Banned"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Quintin Ed"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Admin"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"secondary"},"Inactive"))),m.a.createElement("tr",null,m.a.createElement("td",null,"En\xe9as Kwadwo"),m.a.createElement("td",null,"2012/03/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"warning"},"Pending"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Agapetus Tade\xe1\u0161"),m.a.createElement("td",null,"2012/01/21"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))))),m.a.createElement(f.a,null,m.a.createElement(v.a,{disabled:!0},m.a.createElement(p.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(v.a,{active:!0},m.a.createElement(p.a,{tag:"button"},"1")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"2")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"3")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"4")),m.a.createElement(v.a,null,m.a.createElement(p.a,{next:!0,tag:"button"},"Next"))))))),m.a.createElement(u.a,null,m.a.createElement(o.a,{xs:"12",lg:"6"},m.a.createElement(E.a,null,m.a.createElement(d.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Condensed Table"),m.a.createElement(i.a,null,m.a.createElement(b.a,{responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Username"),m.a.createElement("th",null,"Date registered"),m.a.createElement("th",null,"Role"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"Carwyn Fachtna"),m.a.createElement("td",null,"2012/01/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Nehemiah Tatius"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"danger"},"Banned"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Ebbe Gemariah"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Admin"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"secondary"},"Inactive"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Eustorgios Amulius"),m.a.createElement("td",null,"2012/03/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"warning"},"Pending"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Leopold G\xe1sp\xe1r"),m.a.createElement("td",null,"2012/01/21"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))))),m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(p.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(v.a,{active:!0},m.a.createElement(p.a,{tag:"button"},"1")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"2")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"3")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"4")),m.a.createElement(v.a,null,m.a.createElement(p.a,{next:!0,tag:"button"},"Next")))))),m.a.createElement(o.a,{xs:"12",lg:"6"},m.a.createElement(E.a,null,m.a.createElement(d.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Bordered Table"),m.a.createElement(i.a,null,m.a.createElement(b.a,{responsive:!0,bordered:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Username"),m.a.createElement("th",null,"Date registered"),m.a.createElement("th",null,"Role"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"Pompeius Ren\xe9"),m.a.createElement("td",null,"2012/01/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Pa\u0109jo Jadon"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"danger"},"Banned"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Micheal Mercurius"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Admin"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"secondary"},"Inactive"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Ganesha Dubhghall"),m.a.createElement("td",null,"2012/03/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"warning"},"Pending"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Hiroto \u0160imun"),m.a.createElement("td",null,"2012/01/21"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))))),m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(p.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(v.a,{active:!0},m.a.createElement(p.a,{tag:"button"},"1")),m.a.createElement(v.a,{className:"page-item"},m.a.createElement(p.a,{tag:"button"},"2")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"3")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"4")),m.a.createElement(v.a,null,m.a.createElement(p.a,{next:!0,tag:"button"},"Next"))))))),m.a.createElement(u.a,null,m.a.createElement(o.a,null,m.a.createElement(E.a,null,m.a.createElement(d.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Combined All Table"),m.a.createElement(i.a,null,m.a.createElement(b.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Username"),m.a.createElement("th",null,"Date registered"),m.a.createElement("th",null,"Role"),m.a.createElement("th",null,"Status"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",null,"Vishnu Serghei"),m.a.createElement("td",null,"2012/01/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Zbyn\u011bk Phoibos"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"danger"},"Banned"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Einar Randall"),m.a.createElement("td",null,"2012/02/01"),m.a.createElement("td",null,"Admin"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"secondary"},"Inactive"))),m.a.createElement("tr",null,m.a.createElement("td",null,"F\xe9lix Troels"),m.a.createElement("td",null,"2012/03/01"),m.a.createElement("td",null,"Member"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"warning"},"Pending"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Aulus Agmundr"),m.a.createElement("td",null,"2012/01/21"),m.a.createElement("td",null,"Staff"),m.a.createElement("td",null,m.a.createElement(g.a,{color:"success"},"Active"))))),m.a.createElement("nav",null,m.a.createElement(f.a,null,m.a.createElement(v.a,null,m.a.createElement(p.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(v.a,{active:!0},m.a.createElement(p.a,{tag:"button"},"1")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"2")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"3")),m.a.createElement(v.a,null,m.a.createElement(p.a,{tag:"button"},"4")),m.a.createElement(v.a,null,m.a.createElement(p.a,{next:!0,tag:"button"},"Next")))))))))}}]),t}(s.Component);a.default=h}}]);
//# sourceMappingURL=18.973832da.chunk.js.map