(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[449],{3942:function(){},3449:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var r,a=t(2791),o=t(9434),i=t(6907),u=t(3634),s=t(5984),c=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},d=function(n){return n.contacts.error},m=t(7145),h=t(4906),x=t(1919),f=t(4701),p=t(8734),v={formBox:"ContactForm_formBox__cXiHe"},b=t(3329),j=function(){var n=(0,o.I0)(),e=(0,o.v9)(c),t=(0,s.x0)(),r=(0,s.x0)();return(0,b.jsxs)(p.Z,{className:v.formBox,onSubmit:function(t){t.preventDefault();var r,a=t.target;e.forEach((function(n){a.name.value.toLowerCase()===n.name.toLowerCase()&&(r=!0)})),r&&(0,m.doubledContactNotification)(a.name.value),r||(n((0,u.uK)({name:a.name.value,number:a.number.value})),(0,m.addedContactNotification)(a.name.value)),a.reset()},children:[(0,b.jsxs)(f.Z,{children:[(0,b.jsx)("label",{className:v.label,htmlFor:t,children:"Name"}),(0,b.jsx)(x.Z,{id:t,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C])?[a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)(f.Z,{children:[(0,b.jsx)("label",{className:v.label,htmlFor:r,children:"Number"}),(0,b.jsx)(x.Z,{id:r,type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)(h.Z,{type:"submit",name:"submit",children:"Add contact"})]})},Z=t(1634),C="Filter_filter__vxThR",g=function(){var n=(0,o.I0)(),e=(0,s.x0)();return(0,b.jsx)("div",{className:C,children:(0,b.jsxs)(f.Z,{children:[(0,b.jsx)("label",{htmlFor:e,children:"Find contacts"}),(0,b.jsx)(x.Z,{id:e,type:"search",placeholder:"Enter name",onChange:function(e){return function(e){n((0,Z.T)(e.currentTarget.value))}(e)}})]})})},w=t(3433),_=(0,t(6916).P1)([c,function(n){return n.filter}],(function(n,e){return(0,w.Z)(n).sort((function(n,e){return n.name.localeCompare(e.name)})).filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),y=t(8462),L=t(3942),N=t.n(L),A=t(9439),F=t(9135),B=t(168),k=t(6444).ZP.div(r||(r=(0,B.Z)(["\n  position: fixed;\n  width: 100%;\n  left: 50%;\n  bottom: 40px;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 25;\n  cursor: pointer;\n  color: rgba(55, 0, 201, 0.5);\n"]))),E=function(){var n=(0,a.useState)(!1),e=(0,A.Z)(n,2),t=e[0],r=e[1];return window.addEventListener("scroll",(function(){var n=document.documentElement.scrollTop;n>100?r(!0):n<=100&&r(!1)})),(0,b.jsx)(k,{children:(0,b.jsx)(F.nbd,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:t?"inline":"none"}})})},P={contactsList:"ContactsList_contactsList__ZQI1L",title:"ContactsList_title__Nc-fb"},z=function(){var n=(0,o.v9)(_),e=(0,o.v9)(l);return(0,b.jsxs)("div",{className:P.contactsListBox,children:[(0,b.jsxs)("h4",{className:P.title,children:["You have ",n.length," contact",1===n.length?null:"s"]}),(0,b.jsxs)("ul",{className:P.contactsList,children:[!!e&&(0,b.jsx)(y.Z,{}),!!n&&n.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(N(),{contact:n})},n.id)})),(0,b.jsx)(E,{})]})]})};function T(){var n=(0,o.I0)(),e=(0,o.v9)(l),t=(0,o.v9)(d);return(0,a.useEffect)((function(){n((0,u.yF)())}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:"Phonebook"})}),(0,b.jsx)(j,{}),(0,b.jsx)(g,{}),(0,b.jsx)(z,{}),!!e&&!t&&(0,b.jsx)(y.Z,{})]})}},8734:function(n,e,t){"use strict";var r,a=t(168),o=t(6444).ZP.form(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 320px;\n  font-family: Coiny;\n  gap: 12px;\n\n  @media screen and (min-width: 520px) {\n    & {\n      align-items: flex-start;\n    }\n  }\n"])));e.Z=o},1919:function(n,e,t){"use strict";var r,a=t(168),o=t(6444).ZP.input(r||(r=(0,a.Z)(["\n  min-width: 280px;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n  padding: 0 15px;\n  border-radius: 15px;\n  outline: none;\n  border: none;\n  color: rgb(89, 22, 153);\n\n  &::placeholder {\n    color: rgba(138, 43, 226, 0.3);\n  }\n"])));e.Z=o},4701:function(n,e,t){"use strict";var r,a=t(168),o=t(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: Coiny;\n  color: violet;\n  gap: 4px;\n"])));e.Z=o}}]);
//# sourceMappingURL=449.e76684df.chunk.js.map