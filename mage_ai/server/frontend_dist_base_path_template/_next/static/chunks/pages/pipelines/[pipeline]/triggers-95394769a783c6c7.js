(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{48381:function(e,n,r){"use strict";var t=r(82684),i=r(31882),o=r(55485),u=r(30160),c=r(86735),l=r(28598);n.Z=function(e){var n=e.onClickTag,r=e.tags,a=void 0===r?[]:r,s=(0,t.useMemo)((function(){return(null===a||void 0===a?void 0:a.length)||0}),[a]),d=(0,t.useMemo)((function(){return(0,c.YC)(a||[],"uuid")}),[a]);return(0,l.jsx)(o.ZP,{alignItems:"center",flexWrap:"wrap",children:null===d||void 0===d?void 0:d.reduce((function(e,r){return e.push((0,l.jsx)("div",{style:{marginBottom:2,marginRight:s>=2?4:0,marginTop:2},children:(0,l.jsx)(i.Z,{onClick:n?function(){return n(r)}:null,small:!0,children:(0,l.jsx)(u.ZP,{children:r.uuid})})},"tag-".concat(r.uuid))),e}),[])})}},91349:function(e,n,r){"use strict";r.d(n,{Z:function(){return O}});var t=r(82394),i=r(75582),o=r(82684),u=r(55485),c=r(38276),l=r(75499),a=r(30160),s=r(35576),d=r(17488),p=r(69650),f=r(38626),v=r(44897),g=r(42631),h=r(70515),m=f.default.div.withConfig({displayName:"indexstyle__ToggleStyle",componentId:"sc-f9kt7n-0"})(["padding:","px ","px;border-radius:","px;",""],1.5*h.iI,2*h.iI,g.n_,(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme||v.Z).borders.light,";\n    background-color: ").concat((e.theme||v.Z).background.popup,";\n  ")})),b=r(81728),x=r(28598);function j(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?j(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var O=function(e){var n=e.borderless,r=e.compact,f=e.enableVariablesOverwrite,v=e.runtimeVariables,g=e.setEnableVariablesOverwrite,h=e.setRuntimeVariables,j=(0,o.useState)({}),O=j[0],w=j[1];(0,o.useEffect)((function(){var e=Object.entries(v).reduce((function(e,n){var r=(0,i.Z)(n,2),o=r[0],u=r[1],c=(0,b.Pb)(u)&&"object"===typeof JSON.parse(u)&&!Array.isArray(JSON.parse(u))&&null!==JSON.parse(u);return y(y({},e),{},(0,t.Z)({},o,c))}),{});w(e)}),[]);var Z=function(e,n){var r={borderless:!0,key:"variable_uuid_input_".concat(e),monospace:!0,onChange:function(n){n.preventDefault(),h((function(r){return y(y({},r),{},(0,t.Z)({},e,n.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:n};return O[e]?(0,x.jsx)(s.Z,y(y({},r),{},{rows:1,value:n})):(0,x.jsx)(d.Z,y({},r))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m,{borderless:n,children:(0,x.jsxs)(u.ZP,{alignItems:"center",children:[(0,x.jsx)(c.Z,{mr:2,children:(0,x.jsx)(p.Z,{checked:f,compact:r,onCheck:g})}),(0,x.jsx)(a.ZP,{bold:!r,large:!r,children:"Overwrite runtime variables"})]})}),f&&v&&Object.entries(v).length>0&&(0,x.jsx)(c.Z,{mt:2,children:(0,x.jsx)(l.Z,{columnFlex:[null,1],columns:[{uuid:"Variable"},{uuid:"Value"}],rows:Object.entries(v).map((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1];return[(0,x.jsx)(a.ZP,{default:!0,monospace:!0,children:r},"variable_".concat(r)),Z(r,t)]}))})})]})}},16488:function(e,n,r){"use strict";r.d(n,{IJ:function(){return g},M8:function(){return P},Vx:function(){return j},XM:function(){return Z},_U:function(){return v},eI:function(){return x},gU:function(){return O},lO:function(){return k},ri:function(){return m},tL:function(){return y},vJ:function(){return w},xH:function(){return b}});var t,i=r(82394),o=r(92083),u=r.n(o),c=r(3917),l=r(4383),a=r(30229),s=r(42122),d=r(86735);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(e){return!!e&&!Object.values(a.U5).includes(e)};function g(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var r=n.block_uuid,t=n.completed_at,o=n.started_at,c=n.status,l=null;o&&t&&(l=u()(t).valueOf()-u()(o).valueOf());return f(f({},e),{},(0,i.Z)({},r,{runtime:l,status:c}))}),{})}var h,m=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return e?n.slice(0,1):n};function b(e){var n=(0,s.gR)(e,[a.gm.INTERVAL,a.gm.TYPE]),r=e[a.gm.INTERVAL];r&&(n["schedule_interval[]"]=encodeURIComponent(r));var t=e[a.gm.TYPE];return t&&(n["schedule_type[]"]=t),n}function x(e){if(!e)return null;var n=new Date(u()(e).valueOf()),r=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(r)}function j(e){return"string"!==typeof e?e:x(e.split("+")[0]).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(h||(h={}));var y=(t={},(0,i.Z)(t,h.DAY,86400),(0,i.Z)(t,h.HOUR,3600),(0,i.Z)(t,h.MINUTE,60),(0,i.Z)(t,h.SECOND,1),t);function O(e){var n=h.SECOND,r=e;return e%86400===0?(r/=86400,n=h.DAY):e%3600===0?(r/=3600,n=h.HOUR):e%60===0&&(r/=60,n=h.MINUTE),{time:r,unit:n}}function w(e,n){return e*y[n]}function Z(e,n,r){var t="".concat(e.toISOString().split("T")[0]," ").concat(null===n||void 0===n?void 0:n.hour,":").concat(null===n||void 0===n?void 0:n.minute);if(null!==r&&void 0!==r&&r.includeSeconds&&(t=t.concat(":00")),null!==r&&void 0!==r&&r.localTimezone){var i=u()(e);i.set("hour",+(null===n||void 0===n?void 0:n.hour)||0),i.set("minute",+(null===n||void 0===n?void 0:n.minute)||0),i.set("second",0),t=i.format(c.lE),null!==r&&void 0!==r&&r.convertToUtc&&(t=(0,c.d$)(t,{includeSeconds:null===r||void 0===r?void 0:r.includeSeconds,utcFormat:!0}))}return t}function P(e){var n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="",i=!0;return i&&(r?t="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(t="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(t="".concat(t,"/").concat(e.token)))),i&&(n=window.location.port)&&(t=t.replace(n,l.QT)),t}function I(e,n,r){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,r){var t=r.indexOf(e),i=0;if(n<0)for(var o=0;o>n;o--)0===t?(t=r.length-1,i-=1):t-=1;else if(n>0)for(var u=0;u<n;u++)t===r.length-1?(t=0,i+=1):t+=1;return{additionalOffset:i,cronValue:String(r[t]||e)}}(+e,n,r)}var _=(0,d.m5)(60),C=(0,d.m5)(24),E=(0,c.Cs)();function k(e,n){if(!e)return e;var r=u()().local().format("Z"),t=r.split(":"),i="-"===r[0],o=3===t[0].length?Number(t[0].slice(1)):Number(t[0]),c=Number(t[1]);(i&&!n||!i&&n)&&(o=-o,c=-c);var l=e.split(" "),a=l[0],s=l[1],d=l[2],p=I(a,c,_),f=I(s,o+p.additionalOffset,C);if(l[0]=p.cronValue,l[1]=f.cronValue,0!==(null===f||void 0===f?void 0:f.additionalOffset)){var v=I(d,f.additionalOffset,E);l[2]=v.cronValue}return l.join(" ")}},44265:function(e,n,r){"use strict";r.d(n,{Az:function(){return a},BF:function(){return l},Do:function(){return d},IK:function(){return c},P0:function(){return i},VO:function(){return u},sZ:function(){return s}});var t,i,o=r(82394),u=r(41143).V,c=[u.FAILED,u.COMPLETED,u.RUNNING,u.CANCELLED,u.INITIAL],l=[u.INITIAL,u.RUNNING],a=[u.CANCELLED,u.COMPLETED,u.FAILED],s="__mage_variables",d=(t={},(0,o.Z)(t,u.CANCELLED,"Cancelled"),(0,o.Z)(t,u.COMPLETED,"Done"),(0,o.Z)(t,u.FAILED,"Failed"),(0,o.Z)(t,u.INITIAL,"Ready"),(0,o.Z)(t,u.RUNNING,"Running"),t);!function(e){e.PIPELINE_UUID="pipeline_uuid[]",e.STATUS="status[]",e.TAG="pipeline_tag[]"}(i||(i={}))},30229:function(e,n,r){"use strict";r.d(n,{TR:function(){return f},U5:function(){return l},Wb:function(){return p},Xm:function(){return o},Z4:function(){return a},fq:function(){return c},gm:function(){return s},kJ:function(){return d}});var t,i,o,u=r(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var c,l,a=(t={},(0,u.Z)(t,o.API,(function(){return"API"})),(0,u.Z)(t,o.EVENT,(function(){return"event"})),(0,u.Z)(t,o.TIME,(function(){return"schedule"})),t);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(c||(c={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly",e.ALWAYS_ON="@always_on"}(l||(l={}));var s,d,p=[l.ONCE,l.HOURLY,l.DAILY,l.WEEKLY,l.MONTHLY];!function(e){e.INTERVAL="frequency[]",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(s||(s={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(d||(d={}));var f=(i={},(0,u.Z)(i,d.CREATED_AT,"Created at"),(0,u.Z)(i,d.NAME,"Name"),(0,u.Z)(i,d.PIPELINE,"Pipeline"),(0,u.Z)(i,d.STATUS,"Active"),(0,u.Z)(i,d.TYPE,"Type"),i)},31882:function(e,n,r){"use strict";var t=r(38626),i=r(71180),o=r(55485),u=r(30160),c=r(44897),l=r(72473),a=r(70515),s=r(61896),d=r(28598),p=t.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||c.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||c.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((a.iI+s.Al)/2,"px;\n    height: ").concat(1.5*a.iI+s.Al,"px;\n    padding: ").concat(a.iI/1.5,"px ").concat(1.25*a.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((a.iI/2+s.Al)/2,"px;\n    height: ").concat(s.Al+a.iI/2+2,"px;\n    padding: ").concat(a.iI/4,"px ").concat(a.iI,"px;\n  ")}),(function(e){return e.xsmall&&"\n    border-radius: ".concat((a.iI/1+s.Al)/1,"px;\n    height: ").concat(20,"px;\n    padding: 4px 6px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||c.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,r=e.children,t=e.disabled,c=e.label,s=e.monospace,f=e.onClick,v=e.primary,g=e.small,h=e.xsmall;return(0,d.jsx)(p,{border:n,primary:v,small:g,xsmall:h,children:(0,d.jsx)(i.ZP,{basic:!0,disabled:t,noBackground:!0,noPadding:!0,onClick:f,transparent:!0,children:(0,d.jsxs)(o.ZP,{alignItems:"center",children:[r,c&&(0,d.jsx)(u.ZP,{monospace:s,small:g,xsmall:h,children:c}),!t&&f&&(0,d.jsx)("div",{style:{marginLeft:2}}),!t&&f&&(0,d.jsx)(l.x8,{default:v,muted:!v,size:g?a.iI:1.25*a.iI})]})})})}},46732:function(e,n,r){"use strict";var t=r(82394),i=r(26304),o=(r(82684),r(50724)),u=r(70374),c=r(28598),l=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.children,r=e.items,t=e.open,a=e.onClickCallback,d=e.onClickOutside,p=e.parentRef,f=e.uuid,v=e.zIndex,g=(0,i.Z)(e,l),h=(0,c.jsxs)("div",{style:{position:"relative",zIndex:(d?3:2)+(v||0)},children:[(0,c.jsx)("div",{ref:p,children:n}),(0,c.jsx)(u.Z,s(s({},g),{},{items:r,onClickCallback:a,open:t,parentRef:p,uuid:f}))]});return d?(0,c.jsx)(o.Z,{onClickOutside:d,open:!0,children:h}):h}},35185:function(e,n,r){"use strict";var t=r(82394),i=r(91835),o=(r(82684),r(38626)),u=r(44897),c=r(42631),l=r(70515),a=r(28598);function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var p=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],c.BG,.75*l.iI,(function(e){return"\n    background-color: ".concat((e.theme.monotone||u.Z.monotone).grey200,";\n  ")})),f=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(e){return!e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).positive,";\n  ")}),(function(e){return e.progress&&"\n    width: ".concat(e.progress,"%;\n  ")}),(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).negative,";\n  ")}),(function(e){return e.animateProgress&&"\n    animation: animate-progress ".concat(e.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(e.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(e.animateProgress.end,"%;\n      }\n    }\n  ")}));n.Z=function(e){var n=(0,i.Z)({},e);return(0,a.jsx)(p,d(d({},n),{},{children:(0,a.jsx)(f,d({},n))}))}},43096:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return we}});var t=r(77837),i=r(75582),o=r(82394),u=r(38860),c=r.n(u),l=r(12691),a=r.n(l),s=r(82684),d=r(69864),p=r(34376),f=r(24138),v=r(15338),g=r(93369),h=r(48670),m=r(55072),b=r(75457),x=r(30229),j=r(93808),y=r(82359),O=r(71180),w=r(55485),Z=r(85854),P=r(91349),I=r(65956),_=r(38276),C=r(44897),E=r(70515),k=r(8916),T=r(81728),S=r(28598);function N(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?N(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var A="".concat(E.iI,"px ").concat(3*E.iI,"px");var R=function(e){var n=e.initialPipelineSchedulePayload,r=e.onCancel,t=e.onSuccess,i=e.variables,o=(0,s.useState)(!1),u=o[0],c=o[1],l=(0,s.useState)(i||{}),a=l[0],d=l[1],p=(0,s.useMemo)((function(){return D(D({},n),{},{name:(0,T.Y6)(),variables:u?(0,k.e7)(a):null})}),[n,u,a]);return(0,S.jsx)(I.Z,{footer:(0,S.jsxs)(w.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,S.jsx)(O.ZP,{onClick:function(){t({pipeline_schedule:p}),r()},padding:A,primaryAlternate:!0,children:"Run now"}),(0,S.jsx)(_.Z,{mr:1}),(0,S.jsx)(O.ZP,{borderColor:C.Z.background.page,onClick:r,padding:A,secondary:!0,children:"Cancel"})]}),header:(0,S.jsx)(Z.Z,{level:5,children:"Run pipeline now"}),maxHeight:"90vh",minWidth:85*E.iI,subtitle:"Creates a new trigger and immediately runs the current pipeline once.",children:(0,S.jsx)(P.Z,{enableVariablesOverwrite:u,runtimeVariables:a,setEnableVariablesOverwrite:c,setRuntimeVariables:d})})},M=r(97618),L=r(30160),B=r(72473),V=r(38626),U=r(42631),Y=r(47041),F=r(91437),H=V.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-pu8csx-0"})([""," overflow-y:auto;position:relative;width:100%;z-index:3;border-radius:","px;"," "," "," ",""],Y.w5,U.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||C.Z.background).page,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.flex&&"\n    flex: 1;\n  "}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),G=V.default.div.withConfig({displayName:"indexstyle__ColumnHeaderRowStyle",componentId:"sc-pu8csx-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;position:sticky;top:0;width:100%;z-index:2;"," "," ",""],U.n_,U.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||C.Z.background).panel,";\n  ")}),(function(e){return!e.noBorder&&"\n    border: 1px solid ".concat((e.theme.interactive||C.Z.interactive).defaultBorder,";\n  ")}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),z=V.default.div.withConfig({displayName:"indexstyle__ColumnHeaderCellStyle",componentId:"sc-pu8csx-2"})([""," ",""],(function(e){return!e.small&&"\n    padding: ".concat(1.5*E.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*E.iI,"px;\n  ")})),q=V.default.div.withConfig({displayName:"indexstyle__RowTitleStyle",componentId:"sc-pu8csx-3"})([""," "," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||C.Z.background).header,";\n    border: 1px solid ").concat((e.theme.interative||C.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*E.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*E.iI,"px;\n  ")})),W=V.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-pu8csx-4"})([""," "," "," ",""],(0,F.eR)(),(function(e){return"\n    background-color: ".concat((e.theme.background||C.Z.background).page,";\n    border-top: none;\n    border-bottom: none;\n  ")}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.interactive||C.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||C.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||C.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.finalRow&&!e.noBorderRadius&&"\n    border-bottom-left-radius: ".concat(U.n_,"px;\n    border-bottom-right-radius: ").concat(U.n_,"px;\n  ")})),X=V.default.div.withConfig({displayName:"indexstyle__TextStyle",componentId:"sc-pu8csx-5"})(["p{cursor:pointer;}"]),J=V.default.div.withConfig({displayName:"indexstyle__RowCellStyle",componentId:"sc-pu8csx-6"})(["width:100%;z-index:0;"," "," "," "," ",""],(function(e){return!e.first&&"\n    border-left: 1px solid ".concat((e.theme.background||C.Z.background).page,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*E.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*E.iI,"px;\n  ")}),(function(e){return e.textColor&&"\n    & p {\n      color: ".concat(e.textColor,";\n    }\n  ")}),(function(e){return e.vanish&&"\n    border: none;\n    padding: 0 !important;\n    width: 0% !important;\n    height: 100% !important;\n    background-color: ".concat((e.theme.background||C.Z.background).page," !important;\n  ")})),Q=r(35185);var K=function(e){var n,r=e.cellIndex,t=e.danger,i=e.flex,o=e.render,u=e.rowGroupIndex,c=e.rowIndex,l=e.selected,a=e.small,d=e.showBackground,p=e.showProgress,f=e.textColor,v=e.value,g=e.vanish,m=(0,s.useState)(!1),b=m[0],x=m[1],j=Array.isArray(v);return n=o?o(v):"function"===typeof v?v({selected:l}):j?(0,S.jsxs)(M.Z,{alignItems:"start",flexDirection:"row",justifyContent:"space-between",children:[(0,S.jsxs)(L.ZP,{small:a,textOverflow:!0,title:v[0],children:[b&&(0,S.jsx)(S.Fragment,{children:"".concat(v[0]," & ").concat(v.length-1," more")}),!b&&(0,S.jsx)(S.Fragment,{children:v.map((function(e){return(0,S.jsx)("div",{children:e},e)}))})]}),(0,S.jsxs)(h.Z,{onClick:function(){return x(!b)},children:[b&&(0,S.jsx)(B.K5,{muted:!0,size:2*E.iI}),!b&&(0,S.jsx)(B.ol,{muted:!0,size:2*E.iI})]})]}):p?(0,S.jsx)(w.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:(0,S.jsx)(Q.Z,{danger:v<80,progress:v})}):(0,S.jsx)(L.ZP,{bold:t,danger:t,small:a,textOverflow:!0,title:v,children:v}),(0,S.jsx)(M.Z,{flex:i,textOverflow:!0,children:(0,S.jsx)(J,{first:0===r,showBackground:d,small:a,textColor:f,vanish:g,children:!g&&(0,S.jsxs)(S.Fragment,{children:[n," "]})})},"cell-".concat(u,"-").concat(c,"-").concat(r,"-").concat(v))};var $=function(e){var n=e.columnFlexNumbers,r=e.columnHeaders,t=e.height,i=e.isTextSelectionRequired,o=e.noBorder,u=e.noBorderRadius,c=e.onClickRow,l=e.onHoverRow,a=e.renderRowCellByIndex,d=e.rowGroupData,p=void 0===d?[]:d,f=e.selectedRowIndexes,v=e.small,g=e.flex,m=e.warnings,b=void 0===m?[]:m,x=(0,s.useMemo)((function(){return p.length}),[p]);return(0,S.jsxs)(H,{flex:g,height:t,noBorder:o,noBorderRadius:u,noScrollbarTrackBackground:!0,children:[(0,S.jsx)(G,{noBorder:o,noBorderRadius:u,children:(0,S.jsx)(w.ZP,{alignItems:"center",children:r.map((function(e,r){var t=e.Icon,i=e.label;return(0,S.jsx)(M.Z,{flex:n[r],children:(0,S.jsx)(z,{first:0===r,small:v,children:(0,S.jsxs)(w.ZP,{alignItems:"center",children:[t&&(0,S.jsx)(B.Jr,{}),t&&(0,S.jsx)(_.Z,{mr:1}),(0,S.jsx)(L.ZP,{bold:!0,children:i})]})})},i)}))})}),p&&p.map((function(e,r){var t,s=e.title,d=e.rowData,p=s||r,g=[];s&&(t=(0,S.jsx)(q,{small:v,children:(0,S.jsx)(L.ZP,{bold:!0,children:s})}));var m=null===d||void 0===d?void 0:d.length;return null===d||void 0===d||d.forEach((function(e,t){var s=e.columnTextColors,d=e.columnValues,j=e.danger,y=e.uuid,O=(null===f||void 0===f?void 0:f[0])===r&&(null===f||void 0===f?void 0:f[1])===t,Z=[],P=b.find((function(e){return e.name===d[0]})),I=P&&(0,T.HD)(d[1])?(0,T.Tz)(d[1]):d[1],_=P&&P.compare(I,P.val);null===d||void 0===d||d.forEach((function(e,i,o){var u=null===a||void 0===a?void 0:a[i],c=s?s[i]:void 0;Array.isArray(e)?Z.push((0,S.jsx)(K,{cellIndex:i,flex:n[i],render:u,rowGroupIndex:r,rowIndex:t,selected:O,showBackground:t%2===1,showProgress:e[0],small:v,textColor:c,value:e[1]},i)):"undefined"===typeof e?(Z.pop(),i=o.length+1,Z.push((0,S.jsx)(K,{cellIndex:i,danger:j,flex:n[i],render:u,rowGroupIndex:r,rowIndex:t,selected:O,showBackground:t%2===1,small:v,textColor:c,value:e,vanish:!0},i))):Z.push((0,S.jsx)(K,{cellIndex:i,danger:_||j,flex:n[i],render:u,rowGroupIndex:r,rowIndex:t,selected:O,showBackground:t%2===1,small:v,textColor:c,value:e},i))}));var C=(0,S.jsx)(w.ZP,{textOverflow:!0,children:Z});g.push((0,S.jsxs)(W,{finalRow:x-1===r&&m-1===t,hasHover:!!l,noBorder:o,noBorderRadius:u,onMouseEnter:function(){return null===l||void 0===l?void 0:l({rowGroupIndex:r,rowIndex:t,uuid:y})},selected:O,children:[c&&(i?(0,S.jsx)(X,{onClick:function(){return c({rowGroupIndex:r,rowIndex:t,uuid:y})},role:"cell",children:C}):(0,S.jsx)(h.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(){return c({rowGroupIndex:r,rowIndex:t,uuid:y})},preventDefault:!0,children:C})),!c&&C]},"row-group-".concat(p,"-row-").concat(t)))})),(0,S.jsxs)("div",{children:[t,g]},p)}))]})},ee=V.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["display:flex;flex-direction:column;height:","px;border-bottom:1px solid ",";"],(function(e){return e.height}),C.Z.borders.medium),ne=r(79633);var re=function(e){var n=e.height,r=e.scheduleType,t=e.variables,o=e.variablesOverride,u=[];Object.entries(t).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1],c=null===o||void 0===o?void 0:o[r];u.push({uuid:r,value:(0,k.FS)(c||t)})})),(0,k.JZ)(u,r);var c=Object.keys(t).length;return(0,S.jsx)(ee,{height:n,children:t&&(0,S.jsx)($,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Runtime variable (".concat(c,")")},{label:"Value"}],noBorderRadius:!0,rowGroupData:[{rowData:u.map((function(e){var n=e.uuid,r=e.value;return{columnTextColors:[ne.Or,void 0],columnValues:[n,r],uuid:n}}))}],small:!0})})},te=r(4190),ie=r(12717),oe=r(85544),ue=r(29624),ce=r(35686),le=r(28795),ae=r(81066),se=r(24944),de=r(3917),pe=r(69419),fe=r(16488),ve=r(86735),ge=r(42122),he=r(50178),me=r(72619),be=r(70320),xe=r(89538);function je(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function ye(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?je(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function Oe(e){var n=e.pipeline,r=(0,p.useRouter)(),t=(0,he.Ct)(),u=n.uuid,c=(0,s.useState)(null),l=c[0],j=c[1],O=(0,s.useState)(null),w=O[0],Z=O[1],P=(0,s.useState)(!1),I=P[0],C=P[1],N=ce.ZP.projects.list().data,D=(0,s.useMemo)((function(){var e;return null===N||void 0===N||null===(e=N.projects)||void 0===e?void 0:e[0]}),[N]),A=((0,s.useMemo)((function(){var e;return(0,be.h)(null===D||void 0===D||null===(e=D.features)||void 0===e?void 0:e[y.d.LOCAL_TIMEZONE])}),[null===D||void 0===D?void 0:D.features]),ce.ZP.client_pages.detail("pipeline_schedule:create",{"pipelines[]":[u]},{},{key:"Triggers/Edit/".concat(u)}).data),M=(0,s.useMemo)((function(){return null===A||void 0===A?void 0:A.client_page}),[A]),V=(0,s.useMemo)((function(){var e,n;return null===M||void 0===M||null===(e=M.components)||void 0===e||null===(n=e.find((function(e){return"create_with_interactions_component"===e.uuid})))||void 0===n?void 0:n.enabled}),[M]),U=(0,s.useMemo)((function(){return null===M||void 0===M?void 0:M.disabled}),[M]),Y=ce.ZP.variables.pipelines.list(u,{global_only:!0},{revalidateOnFocus:!1}).data,F=null===Y||void 0===Y?void 0:Y.variables,H=(0,pe.iV)(),G=(0,pe.DQ)(H,[x.gm.INTERVAL,x.gm.STATUS,x.gm.TAG,x.gm.TYPE]),z=(0,fe.xH)(G),q=null!==H&&void 0!==H&&H.page?H.page:0,W=ce.ZP.pipeline_schedules.pipelines.list(u,ye(ye({},z),{},{_limit:m.Q,_offset:(null!==H&&void 0!==H&&H.page?H.page:0)*m.Q}),{refreshInterval:7500}),X=W.data,J=W.mutate,Q=(0,s.useMemo)((function(){return(null===X||void 0===X?void 0:X.pipeline_schedules)||[]}),[X]),K=function(e){return(0,d.Db)(ce.ZP.pipeline_schedules.pipelines.useCreate(u),{onSuccess:function(n){return(0,me.wD)(n,{callback:function(n){var r=n.pipeline_schedule.id;null===e||void 0===e||e(r)},onErrorCallback:function(e,n){return j({errors:n,response:e})}})}})},$=K((function(e){return r.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===n||void 0===n?void 0:n.uuid,"/triggers/").concat(e,"/edit"))})),ee=(0,i.Z)($,2),ne=ee[0],je=ee[1].isLoading,Oe=K(J),we=(0,i.Z)(Oe,2),Ze=we[0],Pe=we[1].isLoading,Ie=(0,s.useMemo)((function(){return(0,k.Tt)(F)}),[F]),_e=(0,T.Y6)(),Ce=(0,s.useMemo)((function(){return{name:_e,schedule_interval:x.U5.ONCE,schedule_type:x.Xm.TIME,start_time:(0,de.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:x.fq.ACTIVE}}),[_e]),Ee=(0,xe.dd)((function(){return(0,S.jsx)(R,{initialPipelineSchedulePayload:Ce,onCancel:Se,onSuccess:Ze,variables:Ie})}),{},[F,Ie],{background:!0,uuid:"run_pipeline_now_popup"}),ke=(0,i.Z)(Ee,2),Te=ke[0],Se=ke[1],Ne=(0,s.useState)(),De=Ne[0],Ae=Ne[1],Re=(0,s.useMemo)((function(){var e=null===De||void 0===De?void 0:De.variables,n=!(0,ge.Qr)(Ie);return function(r){var i=80;if(n){var o=Object.keys(Ie).length;i=46+43*Math.min(5,o)+1}var c=r.height-i;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(f.ZP,ye(ye({},r),{},{enablePorts:!1,height:c,noStatus:!0})),n&&(0,S.jsx)(re,{height:i,scheduleType:null===De||void 0===De?void 0:De.schedule_type,variables:Ie,variablesOverride:e}),!n&&(0,S.jsxs)(_.Z,{p:E.cd,children:[(0,S.jsx)(L.ZP,{children:"This pipeline has no runtime variables."}),!t&&(0,S.jsxs)(_.Z,{mt:1,children:[(0,S.jsx)(a(),{as:"/pipelines/".concat(u,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,S.jsx)(h.Z,{primary:!0,children:"Click here"})})," ",(0,S.jsx)(L.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]})]})}}),[t,u,null===De||void 0===De?void 0:De.schedule_type,null===De||void 0===De?void 0:De.variables,Ie]),Me=(0,s.useMemo)((function(){var e;return(null===X||void 0===X||null===(e=X.metadata)||void 0===e?void 0:e.count)||[]}),[X]),Le=ce.ZP.pipeline_triggers.pipelines.list(u).data,Be=(0,s.useMemo)((function(){return(0,ve.HK)((null===Le||void 0===Le?void 0:Le.pipeline_triggers)||[],(function(e){return e.name}))}),[Le]);(0,s.useEffect)((function(){var e=((null===Le||void 0===Le?void 0:Le.pipeline_triggers)||[]).find((function(e){var n=e.settings;return null===n||void 0===n?void 0:n.invalid_schedule_interval}));Z(e?{displayMessage:'Schedule interval for Trigger (in code) "'.concat(null===e||void 0===e?void 0:e.name,'"')+" is invalid. Please check your cron expression\u2019s syntax in the pipeline\u2019s triggers.yaml file."}:null)}),[null===Le||void 0===Le?void 0:Le.pipeline_triggers]);var Ve=ce.ZP.tags.list().data,Ue=(0,s.useMemo)((function(){return(0,ve.YC)((null===Ve||void 0===Ve?void 0:Ve.tags)||[],(function(e){return e.uuid}))}),[Ve]),Ye=ce.ZP.pipeline_interactions.detail(V&&u,{filter_for_permissions:1}),Fe=Ye.data,He=(Ye.mutate,ce.ZP.interactions.pipeline_interactions.list(V&&u)),Ge=He.data,ze=(He.mutate,ce.ZP.pipelines.detail(V&&u).data),qe=(0,s.useMemo)((function(){return(null===Fe||void 0===Fe?void 0:Fe.pipeline_interaction)||{}}),[Fe]),We=((0,s.useMemo)((function(){return(null===Ge||void 0===Ge?void 0:Ge.interactions)||[]}),[Ge]),(0,s.useMemo)((function(){var e;return V&&(null===(e=Object.keys((null===qe||void 0===qe?void 0:qe.blocks)||{}))||void 0===e?void 0:e.length)>=1}),[V,qe])),Xe=(0,s.useMemo)((function(){return We&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(_.Z,{ml:"12px"}),(0,S.jsx)(se.lZ,{}),(0,S.jsx)(_.Z,{ml:"12px"}),(0,S.jsx)(g.ZP,ye(ye({},ae.B),{},{Icon:B.yd,inline:!0,onClick:function(){return C(!0)},uuid:"Create trigger with no-code",children:"Create trigger with no-code"}))]})}),[We,C]),Je=(0,s.useMemo)((function(){return(0,S.jsx)(oe.Z,{addButtonProps:!U&&{isLoading:je,label:"New trigger",onClick:function(){return ne({pipeline_schedule:{name:(0,T.Y6)()}})}},filterOptions:{frequency:Object.values(x.U5),status:Object.values(x.fq),tag:Ue.map((function(e){return e.uuid})),type:Object.values(x.Xm)},filterValueLabelMapping:{status:Object.values(x.fq).reduce((function(e,n){return ye(ye({},e),{},(0,o.Z)({},n,(0,T.kC)(n)))}),{}),tag:Ue.reduce((function(e,n){var r=n.uuid;return ye(ye({},e),{},(0,o.Z)({},r,r))}),{}),type:x.Z4},onClickFilterDefaults:function(){r.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers"))},query:G,resetPageOnFilterApply:!0,secondaryButtonProps:!U&&{disabled:t,isLoading:Pe,label:"Run @once",onClick:(0,ge.Qr)(Ie)?function(){return Ze({pipeline_schedule:Ce})}:Te,tooltip:"Creates an @once trigger and runs pipeline immediately"},showDivider:!U,children:Xe})}),[ne,Ze,U,je,Pe,t,Xe,Ce,u,G,r,Te,Ue,Ie]),Qe=(0,s.useMemo)((function(){var e=[];return I?e.push.apply(e,[{label:function(){return"Triggers"},onClick:function(){return C(!1)}},{bold:!0,label:function(){return"New trigger"}}]):e.push({label:function(){return"Triggers"}}),e}),[I,C]);return I?(0,S.jsx)(ie.Z,{creatingWithLimitation:!0,errors:l,onCancel:function(){return C(!1)},pipeline:null===ze||void 0===ze?void 0:ze.pipeline,project:D,setErrors:j,useCreateScheduleMutation:K}):(0,S.jsx)(b.Z,{breadcrumbs:Qe,buildSidekick:!I&&Re,errors:l||w,pageName:le.M.TRIGGERS,pipeline:n,setErrors:j,subheader:!I&&Je,title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(le.M.TRIGGERS,"_").concat(u),children:!I&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v.Z,{light:!0}),X?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(ue.Z,{fetchPipelineSchedules:J,pipeline:n,pipelineSchedules:Q,pipelineTriggersByName:Be,selectedSchedule:De,setErrors:j,setSelectedSchedule:Ae}),(0,S.jsx)(_.Z,{p:2,children:(0,S.jsx)(m.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),t=ye(ye({},H),{},{page:n>=0?n:0});r.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers?").concat((0,pe.uM)(t)))},page:Number(q),totalPages:Math.ceil(Me/m.Q)})})]}):(0,S.jsx)(_.Z,{m:2,children:(0,S.jsx)(te.Z,{inverted:!0,large:!0})})]})})}Oe.getInitialProps=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var we=(0,j.Z)(Oe)},40183:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return r(43096)}])}},function(e){e.O(0,[2678,1154,844,8224,1124,341,9161,4495,9302,4267,600,8487,8264,7858,5499,3932,5457,722,1769,9624,5544,6333,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);