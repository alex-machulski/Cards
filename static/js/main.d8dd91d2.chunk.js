(this["webpackJsonpfriday-project-inc"]=this["webpackJsonpfriday-project-inc"]||[]).push([[0],{11:function(e,n,t){e.exports={navBlock:"Main_navBlock__1BCuH"}},15:function(e,n,t){e.exports={errorBlock:"Error404_errorBlock__31wTr",number:"Error404_number__10AAh",message:"Error404_message__3jV4D",cat:"Error404_cat__vAScU"}},18:function(e,n,t){e.exports={superInput:"SuperInputText_superInput__3p6xM",errorInput:"SuperInputText_errorInput__8MYYn",error:"SuperInputText_error__7wOv0"}},23:function(e,n,t){e.exports={default:"SuperButton_default__1Zqa-",red:"SuperButton_red__1dYOz"}},24:function(e,n,t){e.exports={checkbox:"SuperCheckbox_checkbox__31-MZ",spanClassName:"SuperCheckbox_spanClassName__3J3Yc"}},27:function(e,n,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__3s46N"}},36:function(e,n,t){},37:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(16),s=t.n(a),o=(t(36),t(37),t(3)),i=t(0),j=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Login"})})},u=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Register"})})},l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Profile"})})},b=t(15),d=t.n(b);var h=function(){return Object(i.jsxs)("div",{className:d.a.errorBlock,children:[Object(i.jsx)("div",{className:d.a.number,children:"404"}),Object(i.jsx)("div",{className:d.a.message,children:"Page not found!"}),Object(i.jsx)("div",{className:d.a.cat,children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},p=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Restore Password"})})},O=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Enter Password"})})},x=t(10),v=t(11),f=t.n(v),m=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(x.b,{className:f.a.navBlock,to:R,children:"Login"}),Object(i.jsx)(x.b,{className:f.a.navBlock,to:Y,children:"Register"}),Object(i.jsx)(x.b,{className:f.a.navBlock,to:J,children:"Profile"}),Object(i.jsx)(x.b,{className:f.a.navBlock,to:K,children:"Restore Password"}),Object(i.jsx)(x.b,{className:f.a.navBlock,to:Z,children:"Enter Password"}),Object(i.jsx)(x.b,{className:f.a.navBlock,to:q,children:"Test Page"})]})},g=t(6),_=t(5),C=t(18),N=t.n(C),k=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,j=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(N.a.error," ").concat(o||""),l="".concat(a?N.a.errorInput:N.a.superInput," ").concat(s);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",Object(g.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&r&&r()},className:l},j)),a&&Object(i.jsx)("span",{className:u,children:a})]})},B=t(23),S=t.n(B),y=function(e){var n=e.red,t=e.className,c=Object(_.a)(e,["red","className"]),r="".concat(n?S.a.red:S.a.default," ").concat(t);return Object(i.jsx)("button",Object(g.a)({className:r},c))},E=t(24),P=t.n(E),w=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(c||"");return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),n&&n(e)},className:s,id:"supercheckbox"},a)),Object(i.jsx)("label",{htmlFor:"supercheckbox",children:r&&Object(i.jsx)("span",{className:P.a.spanClassName,children:r})})]})},T=t(31),F=t(27),I=t.n(F),D=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,r=e.spanProps,a=Object(_.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(T.a)(s,2),j=o[0],u=o[1],l=r||{},b=l.children,d=l.onDoubleClick,h=l.className,p=Object(_.a)(l,["children","onDoubleClick","className"]),O="".concat(I.a.editableSpan," ").concat(h);return Object(i.jsx)(i.Fragment,{children:j?Object(i.jsx)(k,Object(g.a)({autoFocus:!0,onBlur:function(e){u(!1),n&&n(e)},onEnter:function(){u(!1),t&&t()}},a)):Object(i.jsxs)("span",Object(g.a)(Object(g.a)({onDoubleClick:function(e){u(!0),d&&d(e)},className:O},p),{},{children:[b||a.value,Object(i.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/45/45706.png",width:"20px"})]}))})},M=(t(43),function(e){var n=e.options,t=e.onChange,c=e.onChangeOption,r=Object(_.a)(e,["options","onChange","onChangeOption"]),a=null===n||void 0===n?void 0:n.map((function(e,n){return Object(i.jsx)("option",{children:e},n)}));return Object(i.jsx)("select",Object(g.a)(Object(g.a)({onChange:function(e){t&&t(e),c&&c(e.currentTarget.value)}},r),{},{children:a}))}),A=(t(44),function(e){e.type;var n=e.name,t=e.options,c=(e.value,e.onChange),r=e.onChangeOption,a=(Object(_.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),s=t?t.map((function(e,t){return Object(i.jsxs)("div",{className:"form_radio",children:[Object(i.jsx)("input",{id:"hw7-radio"+t,className:"radio",type:"radio",name:n,checked:0===t,value:e,onChange:a}),Object(i.jsxs)("label",{htmlFor:"hw7-radio"+t,children:[Object(i.jsx)("span",{}),e]})]},n+"-"+t)})):[];return Object(i.jsx)(i.Fragment,{children:s})}),L=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsx)(k,{value:"super input text"})}),Object(i.jsx)("div",{children:Object(i.jsx)(y,{children:"Super Button"})}),Object(i.jsx)("div",{children:Object(i.jsx)(w,{})}),Object(i.jsx)("div",{children:Object(i.jsx)(D,{value:"Super Editable Span"})}),Object(i.jsx)("div",{children:Object(i.jsx)(M,{options:["value 1","value 2","value 3"]})}),Object(i.jsx)("div",{children:Object(i.jsx)(A,{options:["value 1","value 2","value 3"]})})]})},R="/login",Y="/register",J="/profile",K="/restore-pass",Z="/enter-pass",q="/test";var z=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(l,{})}}),Object(i.jsx)(o.a,{path:R,render:function(){return Object(i.jsx)(j,{})}}),Object(i.jsx)(o.a,{path:Y,render:function(){return Object(i.jsx)(u,{})}}),Object(i.jsx)(o.a,{path:J,render:function(){return Object(i.jsx)(l,{})}}),Object(i.jsx)(o.a,{path:K,render:function(){return Object(i.jsx)(p,{})}}),Object(i.jsx)(o.a,{path:Z,render:function(){return Object(i.jsx)(O,{})}}),Object(i.jsx)(o.a,{path:q,render:function(){return Object(i.jsx)(L,{})}}),Object(i.jsx)(o.a,{render:function(){return Object(i.jsx)(h,{})}})]})})]})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))},U=t(30),V=t(13),G={},Q=t(29),W={},X=Object(V.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;return n.type,e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;return n.type,e}}),$=Object(V.d)(X,Object(V.a)(Q.a));window.store=$,s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x.a,{children:Object(i.jsx)(U.a,{store:$,children:Object(i.jsx)(z,{})})})}),document.getElementById("root")),H()}},[[46,1,2]]]);
//# sourceMappingURL=main.d8dd91d2.chunk.js.map