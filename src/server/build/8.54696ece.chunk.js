(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(43),o=a(22),r=a(14);a(70);class c extends s.a.Component{constructor(...e){var t,a,n;super(...e),n={blogs:[]},(a="state")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}async componentDidMount(){this.setState({blogs:await fetch("/api/blogs").then(e=>e.json())})}render(){return s.a.createElement("div",{className:"content"},s.a.createElement("header",{className:"header"},s.a.createElement("span",null,"BLOGS")),s.a.createElement("div",{className:"list"},this.state.blogs.map(e=>s.a.createElement(r.a,{className:"boxy",key:e.id,to:`/blogs/${e.id}`},s.a.createElement("div",{className:"blog-info"},s.a.createElement("div",{className:"blog-name blurple"},e.name),s.a.createElement("div",{className:"blog-date"},"Posted ",function(e){const t=(e=new Date(e)).toLocaleString("default",{month:"long"}),a=(n=e.getDate(),n+(n>0?["th","st","nd","rd"][n>3&&n<21||n%10>3?0:n%10]:""));var n;return`${t} ${a}`}(e.date)," by ",e.author),s.a.createElement("span",{className:"blog-desc"},e.desc))))))}}a(71);class m extends s.a.Component{constructor(...e){var t,a,n;super(...e),t=this,a="state",n={name:"",date:new Date("04/20").getTime(),content:""},a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}async componentDidMount(){this.setState(await fetch(`/api/blogs/${this.props.match.params.blog}`).then(e=>e.json()))}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"blog-header blurple"},this.state.name),s.a.createElement("div",{className:"blog-timestamp"},"Posted ",function(e){const t=(e=new Date(e)).toLocaleString("default",{month:"long"}),a=(n=e.getDate(),n+(n>0?["th","st","nd","rd"][n>3&&n<21||n%10>3?0:n%10]:""));var n;return`${t} ${a}`}(this.state.date)," by ",this.state.author),this.state.image&&s.a.createElement("div",{className:"blog-header-img"},s.a.createElement("img",{src:this.state.image})),s.a.createElement("div",{className:"blog-content",dangerouslySetInnerHTML:{__html:this.state.content}}))}}t.default=()=>s.a.createElement(l.a,null,s.a.createElement(o.a,{exact:!0,path:"/blogs",component:()=>s.a.createElement(c,null)}),s.a.createElement(o.a,{exact:!0,path:"/blogs/:blog",component:e=>s.a.createElement(m,e)}))},70:function(e,t,a){},71:function(e,t,a){}}]);