(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(1),o=a.n(n),i=a(12),s=a.n(i),l=(a(101),a(8)),r=a(9),d=(a(102),a.p+"static/media/BCBLogo.64ce2888.png"),j=a(57),b=a(0);var u=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i=function(){return o(!1)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b.b.Provider,{value:{color:"#fff"},children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"navbar-container container",children:[Object(c.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:i,children:[Object(c.jsx)("img",{src:d,alt:"logo",className:"navbar-icon"}),"BCB"]}),Object(c.jsx)("div",{className:"menu-icon",onClick:function(){return o(!a)},children:a?Object(c.jsx)(j.b,{}):Object(c.jsx)(j.a,{})}),Object(c.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/",className:"nav-links",onClick:i,children:"Home"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/login",className:"nav-links",onClick:i,children:"Administradores"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(r.b,{to:"/articulos",className:"nav-links",onClick:i,children:"Art\xedculos"})})]})]})})})})},h=a(15),m=a.p+"static/media/header.0fc39ced.png";a(108);var g=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:m,alt:"headimg",className:"headimg"})})},p=a.p+"static/media/homeimg.a2c63002.png";a(109);var O=function(){return Object(c.jsx)("div",{className:"homemain",children:Object(c.jsx)("img",{src:p,alt:"homeimg",className:"homeimg"})})},x=a(16),f=a.n(x),v=a(191),y=(a(127),a.p+"static/media/userimg.06e7d20e.png"),C=a(75),N=a(76),k=a(81),S=a(80),w=(a(128),function(e){Object(k.a)(a,e);var t=Object(S.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"buttonmain",children:Object(c.jsx)("button",{className:"bttn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()},children:this.props.text})})}}]),a}(o.a.Component));var I=function(){var e=function(e){console.log("Me voy a la lista de usuarios")},t="1"===localStorage.getItem("role"),a="2"===localStorage.getItem("role"),o=Object(h.f)(),i=Object(n.useState)(""),s=Object(l.a)(i,2),d=s[0],j=s[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),m=u[0],g=u[1];return""!==localStorage.getItem("name")?(console.log("estoy aca"),Object(c.jsxs)("div",{className:"containerlogin",children:[Object(c.jsx)("img",{src:y,alt:"icon",className:"icon"}),Object(c.jsx)("h1",{className:"title",children:"Log Out"}),Object(c.jsx)(r.b,{to:"/login",children:Object(c.jsx)(w,{text:"Logout",disabled:!1,onClick:function(){localStorage.setItem("role",""),localStorage.setItem("name",""),localStorage.setItem("lastnm",""),console.log(localStorage.getItem("role")),console.log(localStorage.getItem("name")),console.log(localStorage.getItem("lastnm"))}})}),Object(c.jsx)(r.b,{to:"/artireded",children:Object(c.jsx)(w,{text:"Todos los Art\xedculos",disabled:!1,onClick:e})}),t&&Object(c.jsx)(r.b,{to:"/listausuarios",children:Object(c.jsx)(w,{text:"Ver Usuarios",disabled:!1,onClick:e})}),a&&Object(c.jsx)(r.b,{to:"/creararti",children:Object(c.jsx)(w,{text:"Crear Art\xedculo",disabled:!1,onClick:e})})]})):Object(c.jsxs)("div",{className:"containerlogin",children:[Object(c.jsx)("img",{src:y,alt:"icon",className:"icon"}),Object(c.jsx)("h1",{className:"title",children:"Log In"}),Object(c.jsx)(v.a,{label:"Email",color:"primary",variant:"filled",onChange:function(e){j(e.target.value)}}),Object(c.jsx)(v.a,{label:"Contrase\xf1a",color:"primary",variant:"filled",type:"password",onChange:function(e){g(e.target.value)}}),Object(c.jsx)(w,{text:"Login",disabled:!1,onClick:function(){f.a.post("/webpage_backend/login",{email:d,password:m}).then((function(e){console.log(e.data),"error"===e.data.status?console.log("im an error"):(localStorage.setItem("token",e.token),localStorage.setItem("role",e.data[0].roles),localStorage.setItem("name",e.data[0].names),localStorage.setItem("lastnm",e.data[0].lastnames),console.log(localStorage.getItem("role")),console.log(localStorage.getItem("name")),console.log(localStorage.getItem("lastnm")),o.push("/"))}))}})]})},D=a(172),P=a(173),W=a(174),A=a(175),E=a(179),_=a(177),U=a(176),L=a(180),V=a(178),B=a(189),z=a(190),R=a(171),H=a(187),F=Object(D.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",overflow:"hidden",maxWidth:"80%",justifyContent:"center",alignItems:"center"},formControl:{margin:10,minWidth:120},media:{height:140},gridList:{width:"100%",height:"100%",padding:10},card:{padding:10,width:"100%",backgroundColor:e.palette.background.paper}}}));var T=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],s=F();Object(n.useEffect)((function(){f.a.get("/webpage_backend/posts").then((function(e){console.log(e),i(e.data)})).catch((function(e){console.log(e)}),[])}));var r=Object(h.f)(),d=o.a.useState(""),j=Object(l.a)(d,2),b=j[0],u=j[1];return console.log(localStorage.getItem("name")),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",background:"bleachedalmond"},children:[Object(c.jsx)(v.a,{label:"Buscar",color:"primary",variant:"filled",value:b,onChange:function(e){u(e.target.value)}}),Object(c.jsxs)(R.a,{className:s.formControl,children:[Object(c.jsx)(B.a,{id:"demo-simple-select-label",children:"Categor\xeda"}),Object(c.jsxs)(H.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:b,onChange:function(e){u(e.target.value)},children:[Object(c.jsx)(z.a,{value:"name",children:"Name"}),Object(c.jsx)(z.a,{value:"code",children:"Code"}),Object(c.jsx)(z.a,{value:"population",children:"Population"})]})]}),Object(c.jsx)(P.a,{cellHeight:300,className:s.gridList,cols:3,children:a.filter((function(e){return"1"===e.revised})).map((function(e){return Object(c.jsx)("div",{className:s.card,children:Object(c.jsxs)(W.a,{className:s.root,children:[Object(c.jsxs)(A.a,{className:s.card,children:[Object(c.jsx)(U.a,{className:s.media,image:e.photo,title:e.title}),Object(c.jsxs)(_.a,{children:[Object(c.jsx)(V.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(c.jsx)(V.a,{variant:"body2",color:"textSecondary",component:"p",children:e.shortDescription})]})]}),Object(c.jsx)(E.a,{children:Object(c.jsx)(L.a,{size:"small",color:"primary",onClick:function(){return r.push({pathname:"/artpg",data:{idPost:e.idPost,title:e.title,shortDescription:e.shortDescription,description:e.description,author:e.author,date:e.date,photo:e.photo,category:e.category,revised:e.revised,video:e.video}})},children:"Ver m\xe1s"})})]})})}))})]})};a(129);var M=function(){var e="2"===localStorage.getItem("role"),t="3"===localStorage.getItem("role"),a=Object(h.f)(),n=Object(h.g)().data,o=n.title,i=n.description,s=n.shortDescription,l=n.author,d=n.date,j=n.category,b=n.revised,u=n.video,m=n.idPost,g="1"===b&&(e||t),p="2"===b&&(e||t),O="0"===b&&(e||t);return console.log(m),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"artmaincont",children:[Object(c.jsx)("h1",{className:"arttitle",children:o}),g&&Object(c.jsx)("h1",{className:"status",children:"Art\xedculo Aprobado"}),p&&Object(c.jsx)("strong",{className:"status",children:"Art\xedculo Rechazado"}),O&&Object(c.jsx)("strong",{className:"status",children:"Art\xedculo Sin Revisar"}),Object(c.jsx)("strong",{className:"author",children:l}),Object(c.jsxs)("strong",{className:"date",children:[" ",d]}),Object(c.jsxs)("strong",{className:"date",children:[" ",s]}),Object(c.jsxs)("strong",{className:"date",children:[" ",j]}),Object(c.jsx)("iframe",{title:"A video",width:"560",height:"315",src:u,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(c.jsxs)("div",{className:"body",children:[" ",i]}),t&&Object(c.jsxs)(r.b,{to:"/artireded",children:[" ",Object(c.jsx)("button",{onClick:function(){f.a.put("/webpage_backend/posts",{idPost:m,title:o,shortDescription:s,description:i,author:l,date:Date().toLocaleString(),photo:"http://skynet.lp.upb.edu/~pbruckner18/webpage_backend/storage/images/posts/serj.jpg",category:j,revised:"1",video:u}).then((function(e){console.log(e)}))},children:"Aprobar"})," "]}),t&&Object(c.jsxs)(r.b,{to:"/artireded",children:[" ",Object(c.jsx)("button",{onClick:function(){f.a.put("/webpage_backend/posts",{idPost:m,title:o,shortDescription:s,description:i,author:l,date:Date().toLocaleString(),photo:"http://skynet.lp.upb.edu/~pbruckner18/webpage_backend/storage/images/posts/serj.jpg",category:j,revised:"2",video:u}).then((function(e){console.log(e)}))},children:"Rechazar"})," "]}),e&&Object(c.jsx)(r.b,{to:"/artireded",children:Object(c.jsx)(L.a,{size:"small",color:"primary",onClick:function(){f.a.delete("/webpage_backend/posts",{data:{idPost:m}}).then((function(e){console.log(e)}))},children:" Borrar Art\xedculo"})}),e&&Object(c.jsx)(L.a,{size:"small",color:"primary",onClick:function(){return a.push({pathname:"/editarti",data:{idPost:n.idPost,title:n.title,shortDescription:n.shortDescription,description:n.description,author:n.author,date:n.date,photo:n.photo,category:n.category,revised:n.revised,video:n.video}})},children:"Editar Articulo"})]})})},J=a(133),Y=a(182),G=a(185),q=a(184),K=a(181),Q=a(183),X=a(188),Z=a(186),$=Object(D.a)({root:{width:"100%"},container:{maxHeight:440},formControl:{margin:10,minWidth:120},selectEmpty:{marginTop:10}});function ee(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1];Object(n.useEffect)((function(){f.a.get("/webpage_backend/users").then((function(e){console.log(e),i(e.data)})).catch((function(e){console.log(e)}),[])}));var s=Object(h.f)(),d=$(),j=o.a.useState(0),b=Object(l.a)(j,2),u=b[0],m=b[1],g=o.a.useState(10),p=Object(l.a)(g,2),O=p[0],x=p[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)(J.a,{className:d.root,children:[Object(c.jsx)(K.a,{className:d.container,children:Object(c.jsxs)(Y.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(c.jsxs)(Q.a,{children:[Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:"ID"}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:"Nombre"}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:"Apellido"}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:"Email"}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:"Roles"}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:"Opciones"})]}),Object(c.jsx)(G.a,{children:a.map((function(e){return Object(c.jsxs)(Z.a,{align:"center",style:{minWidth:100},children:[Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:e.idUser}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:e.names}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:e.lastnames}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:e.email}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:e.roles}),Object(c.jsx)(q.a,{align:"center",style:{minWidth:100},children:Object(c.jsx)(w,{text:"Editar Usuario",disabled:!1,onClick:function(){return s.push({pathname:"/edicionusuario",data:{idUser:e.idUser,email:e.email,names:e.names,lastnames:e.lastnames,password:e.password,roles:e.roles}})}})})]})}))})]})}),Object(c.jsx)(X.a,{rowsPerPageOptions:[10,25,100],component:"div",rowsPerPage:O,page:u,onChangePage:function(e,t){m(t)},onChangeRowsPerPage:function(e){x(+e.target.value),m(0)}})]}),Object(c.jsx)(r.b,{to:"/crearusuario",children:Object(c.jsx)(w,{text:"Crear Usuario",disabled:!1,onClick:function(e){console.log("me voy a la siguiente")}})})]})}a(130);var te=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),d=s[0],j=s[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),h=u[0],m=u[1],g=Object(n.useState)(""),p=Object(l.a)(g,2),O=p[0],x=p[1],C=Object(n.useState)(""),N=Object(l.a)(C,2),k=N[0],S=N[1];return Object(c.jsxs)("div",{className:"containercreateuser",children:[Object(c.jsx)("img",{src:y,alt:"icon",className:"icon"}),Object(c.jsx)("h1",{className:"title",children:"Crear Usuario"}),Object(c.jsx)(v.a,{type:"text",label:"Email",color:"primary",variant:"filled",onChange:function(e){o(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Nombre",color:"primary",variant:"filled",onChange:function(e){j(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Apellido",color:"primary",variant:"filled",onChange:function(e){m(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Contrase\xf1a",color:"primary",variant:"filled",onChange:function(e){x(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Rol",color:"primary",variant:"filled",onChange:function(e){S(e.target.value)}}),Object(c.jsx)(r.b,{to:"/listausuarios",children:Object(c.jsx)(w,{text:"Create User",disabled:!1,onClick:function(){f.a.post("/webpage_backend/users",{email:a,names:d,lastnames:h,password:O,roles:k}).then((function(e){console.log(e)}))}})})]})};a(131);var ae=function(){var e=Object(h.g)().data,t=Object(n.useState)(e.email),a=Object(l.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(e.names),d=Object(l.a)(s,2),j=d[0],b=d[1],u=Object(n.useState)(e.lastnames),m=Object(l.a)(u,2),g=m[0],p=m[1],O=Object(n.useState)(e.password),x=Object(l.a)(O,2),C=x[0],N=x[1],k=Object(n.useState)(e.roles),S=Object(l.a)(k,2),I=S[0],D=S[1];return Object(c.jsxs)("div",{className:"containerdeledit",children:[Object(c.jsx)("img",{src:y,alt:"icon",className:"icon"}),Object(c.jsx)("h1",{className:"title",children:"Editar Usuario"}),Object(c.jsx)(v.a,{type:"text",label:"Email",defaultValue:e.email,color:"primary",variant:"filled",onChange:function(e){i(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Nombre",defaultValue:e.names,color:"primary",variant:"filled",onChange:function(e){b(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Apellido",defaultValue:e.lastnames,color:"primary",variant:"filled",onChange:function(e){p(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Contrase\xf1a",defaultValue:e.password,color:"primary",variant:"filled",onChange:function(e){N(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Rol",defaultValue:e.roles,color:"primary",variant:"filled",onChange:function(e){D(e.target.value)}}),Object(c.jsx)(r.b,{to:"/listausuarios",children:Object(c.jsx)(w,{text:"Guardar Cambios",disabled:!1,onClick:function(){f.a.put("/webpage_backend/users",{idUser:e.idUser,email:o,names:j,lastnames:g,password:C,roles:I}).then((function(e){console.log(e)}))}})}),Object(c.jsx)(r.b,{to:"/listausuarios",children:Object(c.jsx)(w,{text:"Delete User",disabled:!1,onClick:function(){f.a.delete("/webpage_backend/users",{data:{idUser:e.idUser}}).then((function(e){console.log(e)}))}})})]})},ce=Object(D.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",overflow:"hidden",maxWidth:"80%",justifyContent:"center",alignItems:"center"},formControl:{margin:10,minWidth:120},media:{height:140},gridList:{width:"100%",height:"100%",padding:10},card:{padding:10,width:"100%",backgroundColor:e.palette.background.paper}}}));var ne=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],s=ce();Object(n.useEffect)((function(){f.a.get("/webpage_backend/posts").then((function(e){console.log(e),i(e.data)})).catch((function(e){console.log(e)}),[])}));var r=Object(h.f)(),d=o.a.useState(""),j=Object(l.a)(d,2),b=j[0],u=j[1];return Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",background:"bleachedalmond"},children:[Object(c.jsx)(v.a,{label:"Buscar",color:"primary",variant:"filled",value:b,onChange:function(e){u(e.target.value)}}),Object(c.jsxs)(R.a,{className:s.formControl,children:[Object(c.jsx)(B.a,{id:"demo-simple-select-label",children:"Categor\xeda"}),Object(c.jsxs)(H.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:b,onChange:function(e){u(e.target.value)},children:[Object(c.jsx)(z.a,{value:"name",children:"Name"}),Object(c.jsx)(z.a,{value:"code",children:"Code"}),Object(c.jsx)(z.a,{value:"population",children:"Population"})]})]}),Object(c.jsx)(P.a,{cellHeight:300,className:s.gridList,cols:3,children:a.map((function(e){return Object(c.jsx)("div",{className:s.card,children:Object(c.jsxs)(W.a,{className:s.root,children:[Object(c.jsxs)(A.a,{className:s.card,children:[Object(c.jsx)(U.a,{className:s.media,image:e.photo,title:e.title}),Object(c.jsxs)(_.a,{children:[Object(c.jsx)(V.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(c.jsx)(V.a,{variant:"body2",color:"textSecondary",component:"p",children:e.shortDescription})]})]}),Object(c.jsx)(E.a,{children:Object(c.jsx)(L.a,{size:"small",color:"primary",onClick:function(){return r.push({pathname:"/artpg",data:{idPost:e.idPost,title:e.title,shortDescription:e.shortDescription,description:e.description,author:e.author,date:e.date,photo:e.photo,category:e.category,revised:e.revised,video:e.video}})},children:"Ver m\xe1s"})})]})})}))})]})};a(74);var oe=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),d=s[0],j=s[1],b=Object(n.useState)(""),u=Object(l.a)(b,2),h=u[0],m=u[1],g=Object(n.useState)(""),p=Object(l.a)(g,2),O=p[0],x=p[1],y=new Date;return Object(c.jsxs)("div",{className:"containerArtiEdit",children:[Object(c.jsx)("h1",{className:"title",children:"Nuevo Art\xedculo"}),Object(c.jsx)(v.a,{type:"text",label:"T\xedtulo",color:"primary",variant:"filled",onChange:function(e){o(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Descripci\xf3n Corta",color:"primary",variant:"filled",onChange:function(e){x(e.target.value)}}),Object(c.jsx)("h1",{className:"content",children:"Contenido"}),Object(c.jsx)(v.a,{id:"standard-textarea",label:"Contenido",placeholder:"Contenido",multiline:!0,fullWidth:!0,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("h1",{className:"extras",children:"Extras"}),Object(c.jsx)(v.a,{type:"text",label:"Link de video",color:"primary",variant:"filled",height:"100%",onChange:function(e){m(e.target.value)}}),Object(c.jsx)(r.b,{to:"/artireded",children:Object(c.jsx)(w,{text:"Publicar",disabled:!1,onClick:function(){f.a.post("/webpage_backend/posts",{title:a,shortDescription:O,description:d,author:localStorage.getItem("name")+" "+localStorage.getItem("lastnm"),date:y.getFullYear()+"-"+(y.getMonth()+1)+"-"+y.getDate(),photo:"http://skynet.lp.upb.edu/~pbruckner18/webpage_backend/storage/images/posts/serj.jpg",category:"economia",revised:"0",video:h}).then((function(e){console.log(e)}))}})})]})};var ie=function(){var e=Object(h.g)().data,t=Object(n.useState)(e.title),a=Object(l.a)(t,2),o=a[0],i=a[1],s=Object(n.useState)(e.description),d=Object(l.a)(s,2),j=d[0],b=d[1],u=Object(n.useState)(e.video),m=Object(l.a)(u,2),g=m[0],p=m[1],O=Object(n.useState)(e.shortDescription),x=Object(l.a)(O,2),y=x[0],C=x[1],N=new Date;return Object(c.jsxs)("div",{className:"containerArtiEdit",children:[Object(c.jsx)("h1",{className:"title",children:"Editando Art\xedculo"}),Object(c.jsx)(v.a,{type:"text",defaultValue:e.title,label:"T\xedtulo",color:"primary",variant:"filled",onChange:function(e){i(e.target.value)}}),Object(c.jsx)(v.a,{type:"text",label:"Descripci\xf3n Corta",defaultValue:e.shortDescription,color:"primary",variant:"filled",onChange:function(e){C(e.target.value)}}),Object(c.jsx)("h1",{className:"content",children:"Contenido"}),Object(c.jsx)(v.a,{id:"standard-textarea",label:"Contenido",placeholder:"Contenido",defaultValue:e.description,multiline:!0,fullWidth:!0,onChange:function(e){b(e.target.value)}}),Object(c.jsx)("h1",{className:"extras",children:"Extras"}),Object(c.jsx)(v.a,{type:"text",label:"Link de video",defaultValue:e.video,color:"primary",variant:"filled",height:"100%",onChange:function(e){p(e.target.value)}}),Object(c.jsx)(r.b,{to:"/artireded",children:Object(c.jsx)(w,{text:"Actualizar",disabled:!1,onClick:function(){f.a.put("/webpage_backend/posts",{idPost:e.idPost,title:o,shortDescription:y,description:j,author:localStorage.getItem("name")+" "+localStorage.getItem("lastnm"),date:N.getFullYear()+"-"+(N.getMonth()+1)+"-"+N.getDate(),photo:"http://skynet.lp.upb.edu/~pbruckner18/webpage_backend/storage/images/posts/serj.jpg",category:"economia",revised:"0",video:g}).then((function(e){console.log(e)}))}})})]})};var se=function(){return Object(c.jsx)("div",{className:"maincont",children:Object(c.jsxs)(r.a,{children:[Object(c.jsx)(g,{}),Object(c.jsx)(u,{}),Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/",exact:!0,component:O}),Object(c.jsx)(h.a,{path:"/login",component:I}),Object(c.jsx)(h.a,{path:"/articulos",component:T}),Object(c.jsx)(h.a,{path:"/artpg",component:M}),Object(c.jsx)(h.a,{path:"/listausuarios",component:ee}),Object(c.jsx)(h.a,{path:"/crearusuario",component:te}),Object(c.jsx)(h.a,{path:"/edicionusuario",component:ae}),Object(c.jsx)(h.a,{path:"/artireded",component:ne}),Object(c.jsx)(h.a,{path:"/creararti",component:oe}),Object(c.jsx)(h.a,{path:"/editarti",component:ie})]})]})})};s.a.render(Object(c.jsx)(se,{}),document.getElementById("root"))},74:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.abe9f4b7.chunk.js.map