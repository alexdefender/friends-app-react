(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),l=a(1),i=a.n(l),o=a(3),u=a(2),m=a(6),p=a(7),d=a(9),f=a(8),v=a(10),h=(a(18),a(19),a(20),function(e){var t=e.name,a=e.values,n=e.handleChange,s=a.map(function(e,a){return r.a.createElement("label",{key:a},r.a.createElement("input",{type:"radio",value:e,name:t,onChange:n}),r.a.createElement("span",null,e))});return r.a.createElement("div",{className:"filter"},r.a.createElement("div",null,r.a.createElement("strong",null,t,":")),s)}),E=(a(21),function(e){var t=e.name,a=e.value,n=e.handleClick;return r.a.createElement("button",Object.assign({className:"filter-btn"},a,{onClick:n}),t)}),y=(a(22),function(e){var t=e.handleChange;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"search",placeholder:"Search...",onChange:t}))}),g=["Alive","Dead","unknown"],F=["Male","Female","unknown"],b=function(e){var t=e.sortByName,a=e.sortByDesc,n=e.sortByAsc,s=e.sortByStatus,c=e.sortByGender,l=e.resetFilters;return r.a.createElement("section",{className:"filters"},r.a.createElement(y,{handleChange:t}),r.a.createElement("div",{className:"sort-wrapper"},r.a.createElement(E,{name:"Asc",value:"asc",handleClick:n}),r.a.createElement(E,{name:"Desc",value:"desc",handleClick:a})),r.a.createElement(h,{name:"Status",values:g,handleChange:s}),r.a.createElement(h,{name:"Gender",values:F,handleChange:c}),r.a.createElement(E,{name:"Reset Filters",value:"reset",handleClick:l}))},B=(a(23),a(24),function(e){var t=e.card,a=t.name,n=t.image,s=t.gender,c=t.location,l=t.species,i=t.status;return r.a.createElement("section",{className:"user-card"},r.a.createElement("h3",{className:"name"},a),r.a.createElement("p",null,r.a.createElement("img",{src:n,alt:""})),r.a.createElement("ul",{className:"user-card__info"},r.a.createElement("li",null,r.a.createElement("b",null,"Species:")," ",l),r.a.createElement("li",null,r.a.createElement("b",null,"Gender:")," ",s),r.a.createElement("li",null,r.a.createElement("b",null,"Status:")," ",i),r.a.createElement("li",null,r.a.createElement("b",null,"Location:")," ",c.name)))}),N=function(e){var t=e.cards;return r.a.createElement("div",{className:"card-wrapper"},t.map(function(e,t){return r.a.createElement(B,{key:t,card:e})}))},k="https://rickandmortyapi.com/api/character",w=function(){var e=Object(o.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<0&&t>25)){e.next=2;break}return e.abrupt("return");case 2:return void 0!==t&&(k+="/?page=".concat(t)),e.prev=3,e.next=6,fetch(k);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,console.log(n.results),e.abrupt("return",n.results);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[3,14]])}));return function(t){return e.apply(this,arguments)}}(),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).sortByName=function(e){e.stopPropagation();var t=e.target.value.toLowerCase();a.activeFilters=Object(u.a)({},a.activeFilters,{name:t}),a.applyFilters()},a.sortByDesc=function(e){e.stopPropagation(),a.activeFilters=Object(u.a)({},a.activeFilters,{sort:"desc"}),a.applyFilters()},a.sortByAsc=function(e){e.stopPropagation(),a.activeFilters=Object(u.a)({},a.activeFilters,{sort:"asc"}),a.applyFilters()},a.sortByStatus=function(e){e.stopPropagation(),a.activeFilters=Object(u.a)({},a.activeFilters,{status:e.target.value}),a.applyFilters()},a.sortByGender=function(e){e.stopPropagation(),a.activeFilters=Object(u.a)({},a.activeFilters,{gender:e.target.value}),a.applyFilters()},a.resetFilters=function(e){e.stopPropagation(),a.activeFilters={name:"",sort:"",status:"",gender:""},a.applyFilters()},a.applyFilters=function(){var e=a.state.list,t=a.activeFilters,n=t.name,r=t.sort,s=t.status,c=t.gender,l=JSON.parse(JSON.stringify(e));""!==n&&(l=l.filter(function(e){return e.name.toLowerCase().includes(n)})),"desc"!==r&&l.sort(function(e,t){if(e.name<t.name)return-1}),"asc"!==r&&l.sort(function(e,t){if(e.name>t.name)return-1}),""!==s&&(l=l.filter(function(e){return e.status===s})),""!==c&&(l=l.filter(function(e){return e.gender===c})),a.setState({sortedList:l})},a.state={list:[],sortedList:null},a.activeFilters={name:"",sort:"",status:"",gender:""},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setList()}},{key:"setList",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({list:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.list,a=e.sortedList;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__text"},"Friends App React")),r.a.createElement("div",{className:"content-wrap"},r.a.createElement(b,{sortByName:this.sortByName,sortByDesc:this.sortByDesc,sortByAsc:this.sortByAsc,sortFilter:this.sortFilter,sortByStatus:this.sortByStatus,sortByGender:this.sortByGender,resetFilters:this.resetFilters}),r.a.createElement(N,{cards:null===a?t:a})))}}]),t}(n.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6040b200.chunk.js.map