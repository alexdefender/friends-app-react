(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(5),c=a.n(s),l=a(1),i=a.n(l),o=a(3),u=a(2),d=a(6),m=a(7),p=a(9),h=a(8),v=a(10),f=(a(18),a(19),a(20),function(e){var t=e.header,a=e.values,n=e.checked,s=e.handleChange,c=a.map(function(e,t){return r.a.createElement("label",{key:t},r.a.createElement("input",{type:"checkbox",value:e,checked:Object.keys(n).includes(e),onChange:s}),r.a.createElement("span",null,e))});return r.a.createElement("div",{className:"filter"},r.a.createElement("div",null,r.a.createElement("strong",null,t,":")),c)}),y=(a(21),function(e){var t=e.name,a=e.value,n=e.handleClick;return r.a.createElement("button",Object.assign({className:"filter-btn"},{value:a},{onClick:n}),t)}),g=(a(22),function(e){var t=e.handleChange;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"search",placeholder:"Search...",onChange:t}))}),E=["Alive","Dead","unknown"],F=["Male","Female","unknown"],k=function(e){var t=e.sortByName,a=e.sortByDesc,n=e.sortByAsc,s=e.sortByStatus,c=e.sortByGender,l=e.resetFilters,i=e.activeFilters;return r.a.createElement("section",{className:"filters"},r.a.createElement(g,{handleChange:t}),r.a.createElement("div",{className:"sort-wrapper"},r.a.createElement(y,{name:"Asc",value:"asc",handleClick:n}),r.a.createElement(y,{name:"Desc",value:"desc",handleClick:a})),r.a.createElement(f,{header:"Status",values:E,checked:i.status,handleChange:s}),r.a.createElement(f,{header:"Gender",values:F,checked:i.gender,handleChange:c}),r.a.createElement(y,{name:"Reset Filters",value:"reset",handleClick:l}))},b=(a(23),a(24),function(e){var t=e.card,a=t.name,n=t.image,s=t.gender,c=t.location,l=t.species,i=t.status;return r.a.createElement("li",{className:"user-card"},r.a.createElement("h3",{className:"name"},a),r.a.createElement("p",null,r.a.createElement("img",{src:n,alt:""})),r.a.createElement("ul",{className:"user-card__info"},r.a.createElement("li",null,r.a.createElement("b",null,"Species:")," ",l),r.a.createElement("li",null,r.a.createElement("b",null,"Gender:")," ",s),r.a.createElement("li",null,r.a.createElement("b",null,"Status:")," ",i),r.a.createElement("li",null,r.a.createElement("b",null,"Location:")," ",c.name)))}),w=r.a.forwardRef(function(e,t){var a=e.cards;return r.a.createElement("ul",{className:"card-wrapper",ref:t},a.map(function(e,t){return r.a.createElement(b,{key:t,card:e})}))}),B="https://rickandmortyapi.com/api/character",O=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<0&&t>25)){e.next=2;break}return e.abrupt("return");case 2:return void 0!==t&&(B+="/?page=".concat(t)),e.prev=3,e.next=6,fetch(B);case 6:return a=e.sent,e.next=9,a.json();case 9:return n=e.sent,e.abrupt("return",n.results);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0);case 16:case"end":return e.stop()}},e,null,[[3,13]])}));return function(t){return e.apply(this,arguments)}}(),N=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleScroll=function(){a.isFreeFilters=Object.values(a.activeFilters).every(function(e){return""===e||0===Object.keys(e).length}),a.heightForUpdList=a.list.clientHeight-window.pageYOffset,a.heightForUpdList<805&&a.isFreeFilters&&a.setList(a.page++)},a.sortByName=function(e){e.stopPropagation();var t=e.target.value.toLowerCase();a.activeFilters.name=t,a.applyFilters()},a.sortByDesc=function(e){e.stopPropagation(),a.activeFilters.sort="desc",a.applyFilters()},a.sortByAsc=function(e){e.stopPropagation(),a.activeFilters.sort="asc",a.applyFilters()},a.sortByStatus=function(e){e.stopPropagation();var t=e.target,n=t.value,r=t.checked;void 0===a.activeFilters.status[n]?a.activeFilters.status[n]=r:delete a.activeFilters.status[n],a.applyFilters()},a.sortByGender=function(e){e.stopPropagation();var t=e.target,n=t.value,r=t.checked;void 0===a.activeFilters.gender[n]?a.activeFilters.gender[n]=r:delete a.activeFilters.gender[n],a.applyFilters()},a.resetFilters=function(e){e.stopPropagation(),a.activeFilters={name:"",sort:"",status:{},gender:{}},a.applyFilters()},a.applyFilters=function(){var e=a.state.list,t=a.activeFilters,n=t.name,r=t.sort,s=t.status,c=t.gender,l=JSON.parse(JSON.stringify(e));""!==n&&(l=l.filter(function(e){return e.name.toLowerCase().includes(n)})),"desc"!==r&&l.sort(function(e,t){if(e.name<t.name)return-1}),"asc"!==r&&l.sort(function(e,t){if(e.name>t.name)return-1}),Object.keys(s).length>0&&(l=l.filter(function(e){return Object.keys(s).includes(e.status)})),Object.keys(c).length>0&&(l=l.filter(function(e){return Object.keys(c).includes(e.gender)})),a.setState({sortedList:l})},a.state={list:[],sortedList:null},a.activeFilters={name:"",sort:"",status:{},gender:{}},a.page=1,a.isFreeFilters=!0,a.heightForUpdList=1e3,a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setList(),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"setList",value:function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:a=e.sent,this.setState({list:[].concat(Object(o.a)(this.state.list),Object(o.a)(a))});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.sortedList;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__text"},"Friends App React")),r.a.createElement("div",{className:"content-wrap"},r.a.createElement(k,{sortByName:this.sortByName,sortByDesc:this.sortByDesc,sortByAsc:this.sortByAsc,sortFilter:this.sortFilter,sortByStatus:this.sortByStatus,sortByGender:this.sortByGender,resetFilters:this.resetFilters,activeFilters:this.activeFilters}),r.a.createElement(w,{ref:function(t){e.list=t},cards:null===n?a:n})))}}]),t}(n.Component);c.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.42993986.chunk.js.map