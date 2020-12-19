(this["webpackJsonpmovies.app"]=this["webpackJsonpmovies.app"]||[]).push([[0],{28:function(e,t){e.exports={APIKey:"6d0c250c"}},46:function(e,t,c){},51:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c(19),i=c.n(r),s=(c(46),c(8)),o=c(9),l=c(11),j=c(10),b=c(13),d=c(16),m=c(3);c(51);var h=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-light bg-dark mb-5",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"navbar-header",children:Object(n.jsx)(d.b,{className:"navbar-brand text-white text-lg brand-text",to:"/",children:"MovieBuff."})}),Object(n.jsxs)("ul",{className:"navbar-nav ml-auto text-light d-inline-block",children:[Object(n.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(n.jsx)("i",{className:"fab fa-imdb fa-5x",id:"imdb-logo"})}),Object(n.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(n.jsx)("i",{className:"fab fa-react fa-5x",id:"react-logo"})})]})]})})})};var u=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"footer p-3 mt-4 text-center bg-dark text-light",children:["Developed By: ",Object(n.jsx)("span",{className:"text-warning font-weight-normal",children:"Dhruv Samant"}),", Using ",Object(n.jsx)("i",{className:"fab fa-react"})," React JS & Redux JS integrated with external movies data API ",Object(n.jsx)("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer",children:"OMDB"})]})})})})},O=c.p+"static/media/spinner.78672653.gif";var p=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:O,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},x=c(21),v="SEARCH_MOVIE",f="FETCH_MOVIES",g="FETCH_MOVIE",y="LOADING",N=c(27),w=c.n(N),k=c(28),M=function(){return{type:y}},C=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onChange=function(t){e.props.searchMovie(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid mt-5 text-center",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("h1",{className:"display-4 mb-3",children:[Object(n.jsx)("i",{className:"fa fa-search"})," Search for any Movie/Web Series"]}),Object(n.jsxs)("form",{id:"searchForm",onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Enter Movie / Web series name here...",onChange:this.onChange}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-bg mt-3",children:"Search"})]})]})})}}]),c}(a.Component),S=Object(b.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:v,payload:e})}},fetchMovies:function(e){return function(t){w.a.get("https://www.omdbapi.com/?apikey=".concat(k.APIKey,"&s=").concat(e)).then((function(e){return t(Object(x.a)({type:f,payload:e.data.Search},"payload",e.data))})).catch((function(e){return console.log(e)}))}},setLoading:M})(C),D=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.movie;return Object(n.jsx)("div",{className:"col-md-3 mb-5",children:Object(n.jsxs)("div",{className:"card card-body bg-dark text-center h-100",children:[Object(n.jsx)("img",{className:"w-100 mb-2",src:e.Poster,alt:"Movie Cover"}),Object(n.jsxs)("h5",{className:"text-light card-title",children:[e.Title," - ",e.Year]}),Object(n.jsxs)(d.b,{className:"btn btn-primary",to:"/movie/"+e.imdbID,children:["Movie Details",Object(n.jsx)("i",{className:"fas fa-chevron-right"})]})]})})}}]),c}(a.Component),I=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e,t=this.props.movies;return e=t.length>0?t.map((function(e,t){return Object(n.jsx)(D,{movie:e},t)})):"True"===t.Response?t.Search.map((function(e,t){return Object(n.jsx)(D,{movie:e},t)})):null,Object(n.jsx)("div",{className:"row",children:e})}}]),c}(a.Component),R=Object(b.b)((function(e){return{movies:e.movies.movies}}))(I),A=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.loading;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(S,{}),e?Object(n.jsx)(p,{}):Object(n.jsx)(R,{})]})}}]),c}(a.Component),P=Object(b.b)((function(e){return{loading:e.movies.loading}}))(A),T=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,c=e.movie,a=Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-4 card card-body",children:Object(n.jsx)("img",{src:c.Poster,className:"thumbnail",alt:"Poster"})}),Object(n.jsxs)("div",{className:"col-md-8",children:[Object(n.jsx)("h2",{className:"mb-4",children:c.Title}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Genre:"})," ",c.Genre]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Released:"})," ",c.Released]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Rated:"})," ",c.Rated]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"IMDB Rating:"})," ",c.imdbRating]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Director:"})," ",c.Director]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Writer:"})," ",c.Writer]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("strong",{children:"Actors:"})," ",c.Actors]})]})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"card card-body bg-dark my-5 text-light",children:Object(n.jsxs)("div",{className:"col-md-12",children:[Object(n.jsx)("h3",{children:"About "}),c.Plot,Object(n.jsx)("hr",{}),Object(n.jsx)("a",{href:"https://www.imdb.com/title/"+c.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"View on IMDB"}),Object(n.jsx)(d.b,{to:"/",className:"btn btn-default text-light",children:"Go Back To Search"})]})})})]}),r=t?Object(n.jsx)(p,{}):a;return Object(n.jsx)("div",{children:r})}}]),c}(a.Component),B=Object(b.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){w.a.get("https://www.omdbapi.com/?apikey=".concat(k.APIKey,"&i=").concat(e)).then((function(e){return t({type:g,payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:M})(T),E=c(15),L=c(39),F=c(40),W=c(14),_={text:"",movies:[],loading:!1,movie:[]},G=Object(E.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(W.a)(Object(W.a)({},e),{},{text:t.payload,loading:!1});case f:return Object(W.a)(Object(W.a)({},e),{},{movies:t.payload,loading:!1});case g:return Object(W.a)(Object(W.a)({},e),{},{movie:t.payload,loading:!1});case y:return Object(W.a)(Object(W.a)({},e),{},{loading:!0});default:return e}}}),J=[L.a],V=Object(E.createStore)(G,{},Object(F.composeWithDevTools)(E.applyMiddleware.apply(void 0,J))),H=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b.a,{store:V,children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{}),Object(n.jsx)(m.a,{exact:!0,path:"/",component:P}),Object(n.jsx)(m.a,{exact:!0,path:"/movie/:id",component:B}),Object(n.jsx)(u,{})]})})})}}]),c}(a.Component),K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(n.jsx)(H,{}),document.getElementById("root")),K()}},[[70,1,2]]]);
//# sourceMappingURL=main.a495e7b2.chunk.js.map