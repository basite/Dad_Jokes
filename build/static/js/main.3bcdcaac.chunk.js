(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),r=a.n(c),i=(a(22),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),p=a(15),h=a.n(p),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"card w-50 mx-auto",style:{marginTop:"350px"}},o.a.createElement("div",{className:"card-body"},o.a.createElement("h5",{className:"card-title"},this.props.setup),o.a.createElement("p",{className:"card-text font-weight-bold"},this.props.punchline," ",o.a.createElement("i",{class:"far fa-grin-squint-tears"})),o.a.createElement("a",{href:"#",class:"btn btn-danger",onClick:function(){window.location.reload()}},"Reload ",o.a.createElement("i",{class:"fas fa-sync-alt"}))))}}]),t}(o.a.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={joke:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://safe-falls-22549.herokuapp.com/random_joke").then(function(t){e.setState({joke:t.data})})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container text-right py-5"},o.a.createElement(d,{setup:this.state.joke.setup,punchline:this.state.joke.punchline})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.3bcdcaac.chunk.js.map