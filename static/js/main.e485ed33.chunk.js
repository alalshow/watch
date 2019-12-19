(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},42:function(e,t,n){e.exports=n(79)},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n.n(i),l=n(9),u=n(10),c=n(12),s=n(11),p=n(13),m=n(82),d=n(84),f=n(81),g=n(83),v=n(8),h=n.n(v),b=n(15),E=n(3),x=n(2),y=n(14),j=n.n(y);function O(){var e=Object(E.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return O=function(){return e},e}function _(){var e=Object(E.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return _=function(){return e},e}function w(){var e=Object(E.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return w=function(){return e},e}var k=x.default.div(w()),S=x.default.span(_()),T=x.default.div(O()),R=function(e){var t=e.title,n=e.children;return r.a.createElement(k,null,r.a.createElement(S,null,t),r.a.createElement(T,null,n))};function M(){var e=Object(E.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return M=function(){return e},e}var U=x.default.div(M()),z=function(){return r.a.createElement(U,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))};function C(){var e=Object(E.a)(["\n  color: ",";\n"]);return C=function(){return e},e}function N(){var e=Object(E.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return N=function(){return e},e}var P=x.default.div(N()),I=x.default.span(C(),function(e){return e.color}),D=function(e){var t=e.text,n=e.color;return r.a.createElement(P,null,r.a.createElement(I,{color:n},t))},F=n(80);function V(){var e=Object(E.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]);return V=function(){return e},e}function A(){var e=Object(E.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return A=function(){return e},e}function B(){var e=Object(E.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return B=function(){return e},e}function L(){var e=Object(E.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return L=function(){return e},e}function q(){var e=Object(E.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return q=function(){return e},e}function J(){var e=Object(E.a)(["\n  font-size: 12px;\n"]);return J=function(){return e},e}var G=x.default.div(J()),H=x.default.div(q(),function(e){return e.bgUrl}),K=x.default.span(L()),Q=x.default.div(B(),H,K),W=x.default.span(A()),X=x.default.span(V()),Y=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(F.a,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(G,null,r.a.createElement(Q,null,r.a.createElement(H,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(30)}),r.a.createElement(K,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),r.a.createElement(W,null,i.length>18?"".concat(i.substring(0,18),"..."):i),r.a.createElement(X,null,l)))};function Z(){var e=Object(E.a)(["\n  padding: 20px;\n"]);return Z=function(){return e},e}var $=x.default.div(Z()),ee=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("title",null,"Movies | Watch")),i?r.a.createElement(z,null):r.a.createElement($,null,r.a.createElement(j.a,null,r.a.createElement("title",null,"Movies | Watch")),t&&t.length>0&&r.a.createElement(R,{title:"Now Playing"},t.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),a&&a.length>0&&r.a.createElement(R,{title:"Upcoming Movies"},a.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(R,{title:"Popular Movies"},n.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),o&&r.a.createElement(D,{color:"#e74c3c",text:o})))},te=n(38),ne=n.n(te).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"10923b261ba94d897ac6b81148314a3f",language:"en-US"}}),ae={nowPlaying:function(){return ne.get("movie/now_playing")},upcoming:function(){return ne.get("movie/upcoming")},popular:function(){return ne.get("movie/popular")},movieDetail:function(e){return ne.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return ne.get("search/movie",{params:{query:encodeURIComponent(e)}})}},re={topRated:function(){return ne.get("tv/top_rated")},popular:function(){return ne.get("tv/popular")},airingToday:function(){return ne.get("tv/airing_today")},showDetail:function(e){return ne.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return ne.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ie=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,i,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,ae.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,ae.popular();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(ee,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function oe(){var e=Object(E.a)(["\n  padding: 20px;\n"]);return oe=function(){return e},e}var le=x.default.div(oe()),ue=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("title",null,"TV Shows | Watch")),i?r.a.createElement(z,null):r.a.createElement(le,null,t&&t.length>0&&r.a.createElement(R,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(R,{title:"Popular Shows"},n.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(R,{title:"Airing Today"},a.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(D,{color:"#e74c3c",text:o})))},ce=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,i,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,re.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,re.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,this,[[0,16,19,22]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(ue,{topRated:t,popular:n,airingToday:a,loading:i,error:o})}}]),t}(r.a.Component),se=n(85);function pe(){var e=Object(E.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return pe=function(){return e},e}function me(){var e=Object(E.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return me=function(){return e},e}function de(){var e=Object(E.a)(["\n  display: flex;\n"]);return de=function(){return e},e}function fe(){var e=Object(E.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return fe=function(){return e},e}var ge=x.default.header(fe()),ve=x.default.ul(de()),he=x.default.li(me(),function(e){return e.current?"#3498db":"transparent"}),be=Object(x.default)(F.a)(pe()),Ee=Object(se.a)(function(e){var t=e.location.pathname;return r.a.createElement(ge,null,r.a.createElement(ve,null,r.a.createElement(he,{current:"/"===t},r.a.createElement(be,{to:"/"},"Movies")),r.a.createElement(he,{current:"/tv"===t},r.a.createElement(be,{to:"/tv"},"TV")),r.a.createElement(he,{current:"/search"===t},r.a.createElement(be,{to:"/search"},"Search"))))});function xe(){var e=Object(E.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return xe=function(){return e},e}function ye(){var e=Object(E.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return ye=function(){return e},e}function je(){var e=Object(E.a)(["\n  padding: 20px;\n"]);return je=function(){return e},e}var Oe=x.default.div(je()),_e=x.default.form(ye()),we=x.default.input(xe()),ke=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.searchTerm,o=e.handleSubmit,l=e.error,u=e.updateTerm;return r.a.createElement(Oe,null,r.a.createElement(j.a,null,r.a.createElement("title",null,"Search | Watch")),r.a.createElement(_e,{onSubmit:o},r.a.createElement(we,{placeholder:"Search Movies or TV Shows...",value:i,onChange:u})),a?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(R,{title:"Movie Results"},t.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(R,{title:"TV Show Results"},n.map(function(e){return r.a.createElement(Y,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),l&&r.a.createElement(D,{color:"#e74c3c",text:l}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(D,{text:"Nothing found",color:"#95a5a6"})))},Se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(b.a)(h.a.mark(function e(){var t,a,r,i,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ae.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,re.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,this,[[2,14,17,20]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return r.a.createElement(ke,{movieResults:t,tvResults:n,loading:i,error:o,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function Te(){var e=Object(E.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return Te=function(){return e},e}function Re(){var e=Object(E.a)(["\n  margin: 0 10px;\n"]);return Re=function(){return e},e}function Me(){var e=Object(E.a)([""]);return Me=function(){return e},e}function Ue(){var e=Object(E.a)(["\n  margin: 20px 0;\n"]);return Ue=function(){return e},e}function ze(){var e=Object(E.a)(["\n  font-size: 32px;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(E.a)(["\n  width: 70%;\n  margin-left: 10px;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(E.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return Ne=function(){return e},e}function Pe(){var e=Object(E.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(E.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return Ie=function(){return e},e}function De(){var e=Object(E.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]);return De=function(){return e},e}var Fe=x.default.div(De()),Ve=x.default.div(Ie(),function(e){return e.bgImage}),Ae=x.default.div(Pe()),Be=x.default.div(Ne(),function(e){return e.bgImage}),Le=x.default.div(Ce()),qe=x.default.h3(ze()),Je=x.default.div(Ue()),Ge=x.default.span(Me()),He=x.default.span(Re()),Ke=x.default.p(Te()),Qe=function(e){var t=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement("title",null,"Loading | Watch")),r.a.createElement(z,null)):r.a.createElement(Fe,null,r.a.createElement(j.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Watch")),r.a.createElement(Ve,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Ae,null,r.a.createElement(Be,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(30)}),r.a.createElement(Le,null,r.a.createElement(qe,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Je,null,r.a.createElement(Ge,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(He,null,"\u2022"),r.a.createElement(Ge,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(He,null,"\u2022"),r.a.createElement(Ge,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))),r.a.createElement(Ke,null,t.overview))))},We=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,r,i,o,l,u;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,ae.movieDetail(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,re.showDetail(i);case 16:u=e.sent,o=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}},e,this,[[6,20,23,26]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(Qe,{result:t,error:n,loading:a})}}]),t}(r.a.Component),Xe=function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null),r.a.createElement(d.a,null,r.a.createElement(f.a,{path:"/",exact:!0,component:ie}),r.a.createElement(f.a,{path:"/tv",component:ce}),r.a.createElement(f.a,{path:"/search",component:Se}),r.a.createElement(f.a,{path:"/movie/:id",component:We}),r.a.createElement(f.a,{path:"/show/:id",component:We}),r.a.createElement(g.a,{from:"*",to:"/"}))))},Ye=n(40),Ze=n.n(Ye);function $e(){var e=Object(E.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n    }\n"]);return $e=function(){return e},e}var et=Object(x.createGlobalStyle)($e(),Ze.a),tt=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,null),r.a.createElement(et,null))}}]),t}(a.Component);o.a.render(r.a.createElement(tt,null),document.getElementById("root"))}},[[42,2,1]]]);
//# sourceMappingURL=main.e485ed33.chunk.js.map