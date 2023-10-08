"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{1174:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var a,o=t(2791),r=t(9434),i=t(6907),s=t(3634),c=t(5984),u=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},d=function(n){return n.contacts.error},m=t(7145),h=t(4906),x=t(1919),f=t(4701),p=t(8734),b={formBox:"ContactForm_formBox__cXiHe"},j=t(3329),v=function(){var n=(0,r.I0)(),e=(0,r.v9)(u),t=(0,c.x0)(),a=(0,c.x0)();return(0,j.jsxs)(p.Z,{className:b.formBox,onSubmit:function(t){t.preventDefault();var a,o=t.target;e.forEach((function(n){o.name.value.toLowerCase()===n.name.toLowerCase()&&(a=!0)})),a&&(0,m.doubledContactNotification)(o.name.value),a||(n((0,s.uK)({name:o.name.value,number:o.number.value})),(0,m.addedContactNotification)(o.name.value)),o.reset()},children:[(0,j.jsxs)(f.Z,{children:[(0,j.jsx)("label",{className:b.label,htmlFor:t,children:"Name"}),(0,j.jsx)(x.Z,{id:t,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C])?[a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,j.jsxs)(f.Z,{children:[(0,j.jsx)("label",{className:b.label,htmlFor:a,children:"Number"}),(0,j.jsx)(x.Z,{id:a,type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,j.jsx)(h.Z,{type:"submit",name:"submit",children:"Add contact"})]})},Z=t(1634),C="Filter_filter__vxThR",_=function(){var n=(0,r.I0)(),e=(0,c.x0)();return(0,j.jsx)("div",{className:C,children:(0,j.jsxs)(f.Z,{children:[(0,j.jsx)("label",{htmlFor:e,children:"Find contacts"}),(0,j.jsx)(x.Z,{id:e,type:"search",placeholder:"Enter name",onChange:function(e){return function(e){n((0,Z.T)(e.currentTarget.value))}(e)}})]})})},g=t(3433),w=(0,t(6916).P1)([u,function(n){return n.filter}],(function(n,e){return(0,g.Z)(n).sort((function(n,e){return n.name.localeCompare(e.name)})).filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=t(8462),N="ContactsListElement_contactLi__fsEDQ",L="ContactsListElement_contact__8RVfB",A="ContactsListElement_btnDelete__RZfFE",F=t(1686),B=t.n(F),E=t(9135),k=function(n){var e=n.contact,t=(0,r.I0)();return(0,j.jsxs)("div",{className:N,children:[(0,j.jsxs)("p",{className:L,children:[(0,j.jsx)("span",{style:{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),textShadow:"1px 1px black"},children:"\u273f"})," ",e.name,":"]}),(0,j.jsx)("p",{className:L,children:e.number}),(0,j.jsx)("button",{type:"button",className:A,onClick:function(){B().Confirm.show("Please confirm","Are you sure to delete ".concat(e.name,"?"),"Yes","No",(function(){t((0,s.GK)(e.id))}))},children:(0,j.jsx)(E._Pm,{})})]})},P=t(9439),z=t(168),D=t(6444).ZP.div(a||(a=(0,z.Z)(["\n  position: fixed;\n  width: 100%;\n  left: 50%;\n  bottom: 40px;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 25;\n  cursor: pointer;\n  color: rgba(55, 0, 201, 0.5);\n"]))),I=function(){var n=(0,o.useState)(!1),e=(0,P.Z)(n,2),t=e[0],a=e[1];return window.addEventListener("scroll",(function(){var n=document.documentElement.scrollTop;n>100?a(!0):n<=100&&a(!1)})),(0,j.jsx)(D,{children:(0,j.jsx)(E.nbd,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"inline":"none"}})})},T={contactsList:"ContactsList_contactsList__ZQI1L",title:"ContactsList_title__Nc-fb"},S=function(){var n=(0,r.v9)(w),e=(0,r.v9)(l);return(0,j.jsxs)("div",{className:T.contactsListBox,children:[(0,j.jsxs)("h4",{className:T.title,children:["You have ",n.length," contact",1===n.length?null:"s"]}),(0,j.jsxs)("ul",{className:T.contactsList,children:[!!e&&(0,j.jsx)(y.Z,{}),!!n&&n.map((function(n){return(0,j.jsx)("li",{children:(0,j.jsx)(k,{contact:n})},n.id)})),(0,j.jsx)(I,{})]})]})};function q(){var n=(0,r.I0)(),e=(0,r.v9)(l),t=(0,r.v9)(d);return(0,o.useEffect)((function(){n((0,s.yF)())}),[n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:"Phonebook"})}),(0,j.jsx)(v,{}),(0,j.jsx)(_,{}),(0,j.jsx)(S,{}),!!e&&!t&&(0,j.jsx)(y.Z,{})]})}},8734:function(n,e,t){var a,o=t(168),r=t(6444).ZP.form(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 320px;\n  font-family: Coiny;\n  gap: 12px;\n\n  @media screen and (min-width: 520px) {\n    & {\n      align-items: flex-start;\n    }\n  }\n"])));e.Z=r},1919:function(n,e,t){var a,o=t(168),r=t(6444).ZP.input(a||(a=(0,o.Z)(["\n  min-width: 280px;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n  padding: 0 15px;\n  border-radius: 15px;\n  outline: none;\n  border: none;\n  color: rgb(89, 22, 153);\n\n  &::placeholder {\n    color: rgba(138, 43, 226, 0.3);\n  }\n"])));e.Z=r},4701:function(n,e,t){var a,o=t(168),r=t(6444).ZP.div(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: Coiny;\n  color: violet;\n  gap: 4px;\n"])));e.Z=r}}]);
//# sourceMappingURL=174.24de7154.chunk.js.map