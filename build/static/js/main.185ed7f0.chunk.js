(this.webpackJsonpadeptusadministratumfrontend=this.webpackJsonpadeptusadministratumfrontend||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),i=n.n(r),s=n(22),c=n.n(s),o=(n(29),n(10)),l=n(3),h=n(4),d=n(6),j=n(5),u=(n(30),n(2)),p=n(7),b=n.p+"static/media/logo.7a6f7eeb.png",O=n.p+"static/media/planet2.52d95c54.jpg",m=n.p+"static/media/army2.66695b41.jpg",f=n.p+"static/media/search.652d3e17.png",x=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={login:!1},t}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(t){t.login!==this.props.login&&this.setState({login:this.props.login})}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"navbar-container",children:[Object(a.jsx)("div",{id:"brand",children:Object(a.jsxs)(u.c,{exact:!0,activeClassName:"active",className:"menu-link",to:"/",children:[Object(a.jsx)("img",{src:b,alt:"Logo"}),"Home"]})}),Object(a.jsxs)("div",{id:"navbar-items",children:[Object(a.jsxs)(u.c,{exact:!0,activeClassName:"active",className:"menu-link",to:"/planets",children:[Object(a.jsx)("img",{src:O,alt:"Planet Logo"}),"Planets"]}),Object(a.jsxs)(u.c,{activeClassName:"active",className:"menu-link",to:"/garrisons",children:[Object(a.jsx)("img",{src:m,alt:"Garrison Logo"}),"Garrisons"]}),Object(a.jsxs)(u.c,{activeClassName:"active",className:"menu-link",to:"/planets/search",children:[Object(a.jsx)("img",{src:f,alt:"Search Logo"}),"Search Empire"]})]}),Object(a.jsx)("div",{id:"user-items",children:this.state.login?Object(a.jsx)(u.b,{className:"menu-link",to:"/logout",children:"Logout"}):Object(a.jsx)(u.b,{className:"menu-link",to:"/login",children:"Login"})})]})}}]),n}(i.a.Component),g=n(9),v="http://52.53.150.109:8080/AdeptusAdministratum/login",y=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={username:"admin",password:"admin",redirect:!1},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:t.state.username,password:t.state.password})};fetch(v,n).then((function(t){t.json()})).then((function(e){t.props.returnLogin(!0),t.setState({redirect:!0})}))},t}return Object(h.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:{pathname:"/",state:{message:"Successfully Logged In!"}}}):Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsx)("h2",{children:"User Login"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Username:",Object(a.jsx)("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.username,required:!0})]}),Object(a.jsxs)("label",{children:["Password:",Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password,required:!0})]}),Object(a.jsx)("button",{type:"submit",children:"Login"})]})]})}}]),n}(i.a.Component),A="http://52.53.150.109:8080/AdeptusAdministratum/logout",C=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={username:"admin",password:"admin",redirect:!1},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({username:t.state.username,password:t.state.password})};fetch(A,n).then((function(t){t.json()})).then((function(e){t.props.returnLogout(!1),t.setState({redirect:!0})}))},t}return Object(h.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:{pathname:"/",state:{message:"Successfully Logged Out!"}}}):Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsx)("h2",{children:"User Logout (Must Enter Username and Password)"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Username:",Object(a.jsx)("input",{type:"text",name:"username",onChange:this.handleChange,value:this.state.username,required:!0})]}),Object(a.jsxs)("label",{children:["Password:",Object(a.jsx)("input",{type:"password",name:"password",onChange:this.handleChange,value:this.state.password,required:!0})]}),Object(a.jsx)("button",{type:"submit",children:"Logout"})]})]})}}]),n}(i.a.Component),S=function(t){return Object(a.jsxs)("div",{id:"home-container",children:[Object(a.jsx)("h2",{className:"msgSuccess",children:t.history.location.state?t.history.location.state.message:""}),Object(a.jsx)("h1",{children:"Welcome to Adeptus Administratum"}),Object(a.jsx)("p",{children:"The Adeptus Administratum is the administrative and bureaucratic heart of the Imperium of Man, managing thousands of worlds, billions of soldiers, and trillions of citizens."}),Object(a.jsxs)("div",{id:"menu-grid",children:[Object(a.jsxs)("div",{id:"menu1",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:O,alt:"planet logo"})}),Object(a.jsx)(u.b,{className:"menu-link",to:"/planets",children:Object(a.jsx)("h2",{children:"Manage Existing Planets"})}),Object(a.jsx)(u.b,{className:"menu-link",exact:"true",to:"/planets/new",children:Object(a.jsx)("h2",{children:"Add Planet"})})]}),Object(a.jsxs)("div",{id:"menu2",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:m,alt:"army logo"})}),Object(a.jsx)(u.b,{className:"menu-link",to:"/garrisons",children:Object(a.jsx)("h2",{children:"Manage Existing Garrisons"})}),Object(a.jsx)(u.b,{className:"menu-link",to:"/garrisons/new",children:Object(a.jsx)("h2",{children:"Add Garrison"})})]})]})]})},N=n(13),k=function(t){var e=function(t){if(!t||Number.isNaN(t))return t;var e=parseFloat(t).toFixed(2).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e[0]};return Object(a.jsxs)("table",{className:"planet-table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Planet ID"}),Object(a.jsx)("th",{children:"Planet Name"}),Object(a.jsx)("th",{children:"Inhabitants"}),Object(a.jsx)("th",{children:"Population"}),Object(a.jsx)("th",{children:"View Details"})]})}),Object(a.jsx)("tbody",{children:t.planetArray.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.inhabitants}),Object(a.jsx)("td",{id:"population",children:e(t.population)}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{exact:"true",to:"/planets/".concat(t.id),children:"Get Planet Details"})})]},t.id)}))})]})},w=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).sortedPlanetList=function(){var e=t.props.planetArray.sort((function(t,e){return t.name.toUpperCase()<e.name.toUpperCase()?-1:e.name.toUpperCase()<t.name.toUpperCase()?1:0}));return Object(a.jsx)(k,{planetArray:e})},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:this.sortedPlanetList()})}}]),n}(i.a.Component),P=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={id:0,name:void 0,inhabitants:void 0,population:0,garrisonId:0,planetArray:[{id:0,name:"",inhabitants:"",population:0,garrison_id:0}],garrisonArray:[{id:0,chapter:"",size:0}]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://52.53.150.109:8080/AdeptusAdministratum/planets").then((function(t){return t.json()})).then((function(e){t.setState({planetArray:Object(N.a)(e)})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"planet-container",children:[Object(a.jsx)("h1",{children:"All Planets in the Administratum"}),Object(a.jsx)(w,{planetArray:this.state.planetArray})]})}}]),n}(i.a.Component),D="http://52.53.150.109:8080/AdeptusAdministratum",z=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={id:"",name:"",inhabitants:"",population:"",garrisonId:"",garrison:{id:0,chapter:"",size:0},redirect:!1},t.handleDelete=function(){fetch(D+t.props.match.url,{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return t.setState({redirect:!0})}))},t.formatNumber=function(t){if(!t||Number.isNaN(t))return t;var e=parseFloat(t).toFixed(2).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e[0]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(D+this.props.match.url).then((function(t){return t.json()})).then((function(e){var n={id:e.garrison.id,chapter:e.garrison.chapter,size:e.garrison.size};t.setState({id:e.id,name:e.name,inhabitants:e.inhabitants,population:e.population,garrisonId:e.garrison_id,garrison:Object(o.a)({},n)},(function(){return console.log("returned from fetch in PlanetDetail: ",t.state,t.props)}))}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:"/planets"}):Object(a.jsxs)("div",{id:"planet-detail-container",children:[Object(a.jsx)("h2",{className:"msgSuccess",children:this.props.history.location.state?this.props.history.location.state.message:""}),Object(a.jsxs)("h1",{children:["Planet ",this.state.name]}),Object(a.jsxs)("p",{children:["Inhabitants: ",this.state.inhabitants]}),Object(a.jsxs)("p",{children:["Population: ",this.formatNumber(this.state.population)]}),Object(a.jsxs)("p",{children:["Garrison Chapter: ",this.state.garrison.chapter]}),Object(a.jsxs)("p",{children:["Garrison Size: ",this.formatNumber(this.state.garrison.size)]}),Object(a.jsx)(u.b,{to:"/planets/".concat(this.state.id,"/edit"),children:Object(a.jsx)("button",{id:"updateBtn",children:"Modify Planet Details"})}),Object(a.jsx)("button",{id:"deleteBtn",onClick:this.handleDelete,children:"Delete Planet"})]})}}]),n}(i.a.Component),I="http://52.53.150.109:8080/AdeptusAdministratum/planets",G=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={id:0,name:"",inhabitants:"",population:"",garrisonId:"",garrisonArray:[{id:0,chapter:"",size:""}],redirect:!1},t.createGarrisonSelect=function(){return t.state.garrisonArray.map((function(t){return Object(a.jsx)("option",{value:t.id,children:t.chapter},t.id)}))},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.state.name,inhabitants:t.state.inhabitants,population:t.state.population,garrison_id:t.state.garrisonId})};fetch(I,n).then((function(t){return t.json()})).then((function(e){t.setState({id:e.id,redirect:!0})}))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://52.53.150.109:8080/AdeptusAdministratum/garrisons").then((function(t){return t.json()})).then((function(e){t.setState({garrisonArray:Object(N.a)(e)})}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:{pathname:"/planets/".concat(this.state.id),state:{message:"Planet Successfully Created!"}}}):Object(a.jsxs)("div",{id:"add-planet-container",children:[Object(a.jsx)("h1",{children:"Add a Planet"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{for:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),Object(a.jsx)("label",{for:"inhabitants",children:"Inhabitants:"}),Object(a.jsx)("input",{type:"text",list:"inhabitant-list",name:"inhabitants",onChange:this.handleChange,value:this.state.inhabitants}),Object(a.jsxs)("datalist",{id:"inhabitant-list",children:[Object(a.jsx)("option",{children:"Asharian"}),Object(a.jsx)("option",{children:"Eldar"}),Object(a.jsx)("option",{children:"Human"}),Object(a.jsx)("option",{children:"Ork"})]}),Object(a.jsx)("label",{for:"population",children:"Population:"}),Object(a.jsx)("input",{type:"number",name:"population",onChange:this.handleChange,value:this.state.population,step:"1000"}),Object(a.jsx)("label",{for:"garrisonId",children:"Garrison:"}),Object(a.jsxs)("select",{name:"garrisonId",onChange:this.handleChange,value:this.state.garrisonId,required:!0,children:[Object(a.jsx)("option",{value:"",disabled:!0,defaultValue:!0,hidden:!0,children:"Choose from list"}),this.createGarrisonSelect()]}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),n}(i.a.Component),L="http://52.53.150.109:8080/AdeptusAdministratum",U=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={id:"",name:"",inhabitants:"",population:"",garrisonId:"",garrison:{id:0,chapter:"",size:0},garrisonArray:[{id:0,chapter:"",size:""}],redirect:!1},t.createGarrisonSelect=function(){return t.state.garrisonArray.map((function(t){return Object(a.jsx)("option",{value:t.id,children:t.chapter},t.id)}))},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.state.name,inhabitants:t.state.inhabitants,population:t.state.population,garrison_id:t.state.garrisonId})};console.log(n),fetch(L+"/planets/"+t.state.id,n).then((function(t){return t.json()})).then((function(e){return t.setState({id:e.id,redirect:!0})}))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://52.53.150.109:8080/AdeptusAdministratum/garrisons").then((function(t){return t.json()})).then((function(e){t.setState({garrisonArray:Object(N.a)(e)})})),fetch(L+this.props.match.url).then((function(t){return t.json()})).then((function(e){console.log(e);var n={id:e.garrison.id,chapter:e.garrison.chapter,size:e.garrison.size};t.setState({id:e.id,name:e.name,inhabitants:e.inhabitants,population:e.population,garrisonId:e.garrison_id,garrison:Object(o.a)({},n)},(function(){return console.log("returned from fetch in PlanetEDIT: ",t.state)}))}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:{pathname:"/planets/".concat(this.state.id),state:{message:"Planet Successfully Updated!"}}}):Object(a.jsxs)("div",{id:"add-planet-container",children:[Object(a.jsx)("h1",{children:"Modify Planet"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{for:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),Object(a.jsx)("label",{for:"inhabitants",children:"Inhabitants:"}),Object(a.jsx)("input",{type:"text",list:"inhabitant-list",name:"inhabitants",onChange:this.handleChange,value:this.state.inhabitants}),Object(a.jsxs)("datalist",{id:"inhabitant-list",children:[Object(a.jsx)("option",{children:"Asharian"}),Object(a.jsx)("option",{children:"Eldar"}),Object(a.jsx)("option",{children:"Human"}),Object(a.jsx)("option",{children:"Ork"})]}),Object(a.jsx)("label",{for:"population",children:"Population:"}),Object(a.jsx)("input",{type:"number",name:"population",onChange:this.handleChange,value:this.state.population,step:"1000"}),Object(a.jsx)("label",{for:"garrisonId",children:"Garrison:"}),Object(a.jsxs)("select",{name:"garrisonId",onChange:this.handleChange,value:this.state.garrisonId,required:!0,children:[Object(a.jsx)("option",{value:"",disabled:!0,defaultValue:!0,hidden:!0,children:"Choose from list"}),this.createGarrisonSelect()]}),Object(a.jsx)("button",{type:"submit",children:"Update"})]})]})}}]),n}(i.a.Component),T="http://52.53.150.109:8080/AdeptusAdministratum/empire?inhabitants=",E=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={result:!1,inhabitants:"",planetArray:[],garrisonArray:[{id:0,chapter:"",size:0}]},t.handleChange=function(e){t.setState({result:!1,inhabitants:e.target.value})},t.handleSearch=function(e){e.preventDefault(),fetch(T+t.state.inhabitants).then((function(t){return t.json()})).then((function(e){t.setState({result:!0,planetArray:Object(N.a)(e)})}))},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{id:"search-container",children:[Object(a.jsx)("div",{id:"search-heading",children:Object(a.jsx)("h2",{children:"Search Administratum for Inhabitants"})}),Object(a.jsx)("div",{id:"search-form-container",children:Object(a.jsxs)("form",{onSubmit:this.handleSearch,children:[Object(a.jsx)("p",{children:"Enter Inhabitants:"}),Object(a.jsx)("input",{onChange:this.handleChange,name:"inhabitants",value:this.state.inhabitants,placeholder:"Search Planets by Inhabitant"}),Object(a.jsx)("button",{children:"Search"})]})}),Object(a.jsx)("div",{id:"search-image-container",children:Object(a.jsx)("img",{src:f,alt:"Search Image"})}),Object(a.jsx)("div",{id:"search-result-container",children:this.state.result?this.state.planetArray.length<1?Object(a.jsxs)("p",{children:["No planets found with ",this.state.inhabitants,"s."]}):Object(a.jsx)(w,{planetArray:this.state.planetArray}):null})]})}}]),n}(i.a.Component),M=function(t){var e=function(t){if(!t||Number.isNaN(t))return t;var e=parseFloat(t).toFixed(2).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e[0]};return Object(a.jsxs)("table",{className:"planet-table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Garrison ID"}),Object(a.jsx)("th",{children:"Chapter Name"}),Object(a.jsx)("th",{children:"Size"}),Object(a.jsx)("th",{children:"View Details"})]})}),Object(a.jsx)("tbody",{children:t.garrisonArray.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:t.chapter}),Object(a.jsx)("td",{children:e(t.size)}),Object(a.jsx)("td",{children:Object(a.jsx)(u.b,{exact:"true",to:"/garrisons/".concat(t.id),children:"Get Garrison Details"})})]},t.id)}))})]})},F=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={garrisonArray:[]},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://52.53.150.109:8080/AdeptusAdministratum/garrisons").then((function(t){return t.json()})).then((function(e){t.setState({garrisonArray:Object(N.a)(e)})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{id:"garrison-container",children:[Object(a.jsx)("h1",{children:"All Garrisons in the Administratum"}),Object(a.jsx)(M,{garrisonArray:this.state.garrisonArray})]})}}]),n}(i.a.Component),B="http://52.53.150.109:8080/AdeptusAdministratum",J=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={id:0,chapter:"",size:0,redirect:!1,planetArray:[{id:0,name:"",inhabitants:"",population:0,garrison_id:0}]},t.handleDelete=function(){fetch(B+t.props.match.url,{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return t.setState({redirect:!0})}))},t.formatNumber=function(t){if(!t||Number.isNaN(t))return t;var e=parseFloat(t).toFixed(2).split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e[0]},t.sortedPlanetList=function(){var e=t.state.planetArray.filter((function(e){return e.garrison_id===t.state.id}));if(e.length<1)return Object(a.jsx)("p",{children:"Not Assigned to Any Planets"});var n=e.sort((function(t,e){return t.name.toUpperCase()<e.name.toUpperCase()?-1:e.name.toUpperCase()<t.name.toUpperCase()?1:0}));return Object(a.jsx)(k,{planetArray:n})},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(B+this.props.match.url).then((function(t){return t.json()})).then((function(e){t.setState({id:e.id,chapter:e.chapter,size:e.size},(function(){return console.log("returned from fetch in GarrisonDetail: ",t.state,t.props)}))})),fetch("http://52.53.150.109:8080/AdeptusAdministratum/planets").then((function(t){return t.json()})).then((function(e){t.setState({planetArray:Object(N.a)(e)},(function(){return console.log("returned array from fetch: ",t.state.planetArray)}))}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:"/garrisons"}):Object(a.jsxs)("div",{id:"garrison-detail-container",children:[Object(a.jsx)("h2",{className:"msgSuccess",children:this.props.history.location.state?this.props.history.location.state.message:""}),Object(a.jsxs)("h1",{children:["Garrison ",this.state.chapter]}),Object(a.jsxs)("p",{children:["Size: ",this.formatNumber(this.state.size)]}),Object(a.jsxs)("div",{id:"planet-container-in-garrison",children:[Object(a.jsx)("h2",{children:"All Planets with this Garrison"}),this.sortedPlanetList()]}),Object(a.jsx)(u.b,{to:"/garrisons/".concat(this.state.id,"/edit"),children:Object(a.jsx)("button",{id:"updateBtn",children:"Modify Garrison Details"})}),Object(a.jsx)("button",{id:"deleteBtn",onClick:this.handleDelete,children:"Delete Garrison"})]})}}]),n}(i.a.Component),_="http://52.53.150.109:8080/AdeptusAdministratum/garrisons",q=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={id:0,chapter:"",size:"",redirect:!1},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({chapter:t.state.chapter,size:t.state.size})};console.log(n),fetch(_,n).then((function(t){return t.json()})).then((function(e){return t.setState({id:e.id,redirect:!0})}))},t}return Object(h.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:{pathname:"/garrisons/".concat(this.state.id),state:{message:"Garrison Successfully Created!"}}}):Object(a.jsxs)("div",{id:"add-garrison-container",children:[Object(a.jsx)("h1",{children:"Add Garrison"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Chapter:",Object(a.jsx)("input",{type:"text",name:"chapter",onChange:this.handleChange,value:this.state.chapter})]}),Object(a.jsxs)("label",{children:["Size:",Object(a.jsx)("input",{type:"number",name:"size",onChange:this.handleChange,value:this.state.size,step:"1000"})]}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})]})}}]),n}(i.a.Component),V="http://52.53.150.109:8080/AdeptusAdministratum",H=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={id:"",chapter:"",size:"",redirect:!1},t.handleChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({chapter:t.state.chapter,size:t.state.size})};console.log(n),fetch(V+"/garrisons/"+t.state.id,n).then((function(t){return t.json()})).then((function(e){return t.setState({id:e.id,redirect:!0})}))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch(V+this.props.match.url).then((function(t){return t.json()})).then((function(e){console.log(e),t.setState({id:e.id,chapter:e.chapter,size:e.size},(function(){return console.log("returned from fetch in GarrisonEDIT: ",t.state)}))}))}},{key:"render",value:function(){return this.state.redirect?Object(a.jsx)(p.a,{to:{pathname:"/garrisons/".concat(this.state.id),state:{message:"Garrison Successfully Updated!"}}}):Object(a.jsxs)("div",{id:"add-garrison-container",children:[Object(a.jsx)("h1",{children:"Modify Garrison"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["Chapter:",Object(a.jsx)("input",{type:"text",name:"chapter",onChange:this.handleChange,value:this.state.chapter})]}),Object(a.jsxs)("label",{children:["Size:",Object(a.jsx)("input",{type:"number",name:"size",onChange:this.handleChange,value:this.state.size,step:"1000"})]}),Object(a.jsx)("button",{type:"submit",children:"Update"})]})]})}}]),n}(i.a.Component),W=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"footer-container",children:Object(a.jsx)("a",{href:"https://pngtree.com/free-backgrounds",children:"free background photos frompngtree.com"})})}}]),n}(i.a.Component),K=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={login:!1},t.updateUser=function(e){t.setState({login:e})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)(u.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{id:"nav-div",children:Object(a.jsx)(x,{login:this.state.login})}),Object(a.jsx)("div",{className:"app-div",children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"/",render:function(t){return Object(a.jsx)(S,Object(o.a)({},t))}}),Object(a.jsx)(p.b,{exact:!0,path:"/planets",component:P}),Object(a.jsx)(p.b,{exact:!0,path:"/planets/new",component:G}),Object(a.jsx)(p.b,{exact:!0,path:"/planets/:id/edit",render:function(t){return Object(a.jsx)(U,Object(o.a)({},t))}}),Object(a.jsx)(p.b,{exact:!0,path:"/planets/search",component:E}),Object(a.jsx)(p.b,{exact:!0,path:"/planets/:id",render:function(t){return Object(a.jsx)(z,Object(o.a)({},t))}}),Object(a.jsx)(p.b,{exact:!0,path:"/garrisons",component:F}),Object(a.jsx)(p.b,{exact:!0,path:"/garrisons/new",component:q}),Object(a.jsx)(p.b,{exact:!0,path:"/garrisons/:id/edit",render:function(t){return Object(a.jsx)(H,Object(o.a)({},t))}}),Object(a.jsx)(p.b,{exact:!0,path:"/garrisons/:id",render:function(t){return Object(a.jsx)(J,Object(o.a)({},t))}}),Object(a.jsx)(p.b,{exact:!0,path:"/login",render:function(e){return Object(a.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{returnLogin:t.updateUser}))}}),Object(a.jsx)(p.b,{exact:!0,path:"/logout",render:function(e){return Object(a.jsx)(C,Object(o.a)(Object(o.a)({},e),{},{returnLogout:t.updateUser}))}})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(W,{})})]})})}}]),n}(i.a.Component),Q=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),i(t),s(t)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),Q()}},[[36,1,2]]]);
//# sourceMappingURL=main.185ed7f0.chunk.js.map