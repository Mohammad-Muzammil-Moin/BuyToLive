(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,c,a){},128:function(e,c,a){},129:function(e,c,a){},130:function(e,c,a){"use strict";a.r(c);var o=a(0),s=a.n(o),t=a(11),r=a.n(t),i=(a(120),a(48)),n=a(39),l=(a(76),a(194)),d=a(133),j=a(1);var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("div",{className:"form_heading",children:"Sign In"}),Object(j.jsx)(l.a,{color:"secondary",id:"standard-basic",label:"UserName"}),Object(j.jsx)(l.a,{color:"secondary",id:"standard-basic",label:"Password",type:"password"}),Object(j.jsx)(d.a,{className:"login_btn",color:"secondary",variant:"contained",children:"Sign In"})]})})};var p=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)(l.a,{color:"secondary",id:"standard-basic",label:"UserName"}),Object(j.jsx)(l.a,{color:"secondary",id:"standard-basic",label:"E-mail"}),Object(j.jsx)(l.a,{color:"secondary",id:"standard-basic",label:"Password",type:"password"}),Object(j.jsx)(l.a,{color:"secondary",id:"standard-basic",label:"Repeat password",type:"password"}),Object(j.jsx)(d.a,{className:"login_btn",color:"secondary",variant:"contained",children:"Sign Up"})]})})},x=a(183),m=a(180),O=a(184),h=Object(x.a)({root:{background:" rgba(0, 0, 0, 0.7)"}});var u=function(e,c){c.width,c.color;var a=h(),t=s.a.useState(null),r=Object(i.a)(t,2),n=r[0],l=r[1],x=Boolean(n),u=x?"simple-popover":void 0,y=Object(o.useState)(null),g=Object(i.a)(y,2),v=g[0],w=g[1];return Object(j.jsx)("themeProvider",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(d.a,{style:{borderRadius:"0px 50px 0px 50px"},variant:"contained",color:"secondary",onClick:function(e){l(e.currentTarget)},children:Object(j.jsx)("div",{style:{fontFamily:" Haettenschweiler",fontWeight:"bold"},children:e.name})}),Object(j.jsxs)(m.a,{className:a.root,id:u,open:x,anchorEl:n,onClose:function(){l(null)},anchorOrigin:{vertical:"right",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(j.jsxs)("div",{className:"form_container",children:[Object(j.jsx)(O.a,{variant:"contained",disableElevation:!0,color:"secondary",size:"small",children:Object(j.jsx)(d.a,{onClick:function(){w(!v)},children:v?Object(j.jsx)("span",{children:"Sign Up"}):Object(j.jsx)("span",{children:"Sign In"})})}),Object(j.jsx)("p",{className:"login",children:"Join our comunity"})]}),v?Object(j.jsx)(b,{}):Object(j.jsx)(p,{})]})]})})},y=a(22),g=a(190),v=a(102),w=a(73),f=a(72),N=a(189),k=a(100),_=a.n(k),I=a(58),D=a.n(I),S=a(193),F=a(187),R=a(198),C=a(197),A=a(188),P=a(97),L=a.n(P),B=a(182),z=a(185),q=a(186),E=a(199),$=a(98),U=a.n($),T=a(99),H=a.n(T),M=a(16),W=[{path:"/",title:"Home"},{path:"/contact",title:"Contact"},{path:"/email",title:"Email"},{path:"/drafts",title:"Drafts"}],G=Array.from(W);function J(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(C.a,{smDown:!0,children:G.map((function(e,c){return Object(j.jsx)("div",{className:"fonts",children:Object(j.jsx)(y.b,{style:{textDecoration:"none"},to:e.path,children:Object(j.jsx)(O.a,{size:"small",disableElevation:!0,variant:"contained",color:"primary",children:Object(j.jsx)(d.a,{style:{borderRadius:"0px 100px 0px 100px",color:"white",textShadow:"2px 1px 1px black,1px 2px 1px gray"},children:Object(j.jsx)("i",{children:e.title})},c)})})})}))})})}var X=Object(x.a)((function(e){return{root:{display:"flex"},drawer:Object(n.a)({},e.breakpoints.up("sm"),{flexShrink:0}),appBar:Object(n.a)({},e.breakpoints.up("xs"),{width:"calc(100% - ".concat(210,"px)")}),menuButton:Object(n.a)({},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:210},content:{flexGrow:1,paddingTop:e.spacing(0)}}}));var K=function(e){var c=X(),a=Object(M.a)(),o=s.a.useState(!1),t=Object(i.a)(o,2),r=t[0],n=t[1],l=function(){n(!r)},d=Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:c.toolbar}),Object(j.jsx)(B.a,{children:W.map((function(e,c){return Object(j.jsx)(z.a,{button:!0,children:Object(j.jsxs)(y.b,{style:{display:"flex",textDecoration:"none",color:"black"},to:e.path,children:[Object(j.jsx)(q.a,{children:c%2===0?Object(j.jsx)(L.a,{}):Object(j.jsx)(U.a,{})}),Object(j.jsx)(E.a,{primary:e.title})]})})}))})]});return Object(j.jsxs)("div",{className:c.root,children:[Object(j.jsx)(F.a,{}),Object(j.jsx)(A.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:l,className:c.menuButton,children:Object(j.jsx)(H.a,{style:{}})}),Object(j.jsx)("nav",{className:c.drawer,"aria-label":"mailbox folders",children:Object(j.jsx)(C.a,{smUp:!0,implementation:"css",children:Object(j.jsx)(R.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:r,onClose:l,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0},children:d})})})]})},Y=a(191),V=a(192),Z=Object(v.a)({palette:{primary:{main:w.a[900]},secondary:{main:f.a[500]},aditionary:{main:N.a[500]}}}),Q=Object(x.a)((function(e){var c;return{root:{"& > *":(c={width:"80ch",color:"White"},Object(n.a)(c,e.breakpoints.down("sm"),{width:"23ch",marginBottom:"10px",marginLeft:"5px"}),Object(n.a)(c,e.breakpoints.up("md"),{width:"50ch"}),c)}}}));function ee(){var e=Q(),c=s.a.useState(null),a=Object(i.a)(c,2),t=a[0],r=(a[1],Object(o.useState)(!1)),n=Object(i.a)(r,2);n[0],n[1],Boolean(t);return Object(j.jsx)(g.a,{theme:Z,children:Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(Y.a,{position:"fixed",style:{zIndex:"10"},color:"primary",children:Object(j.jsxs)(V.a,{children:[Object(j.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"flex-end"},children:[Object(j.jsx)(y.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)("div",{paddingRight:"",children:Object(j.jsxs)("h1",{className:"heading",style:{color:"black"},children:[Object(j.jsxs)("i",{children:["Bu",Object(j.jsx)("sup",{children:"y"})]}),Object(j.jsx)(D.a,{style:{boxShadow:" 3px 1px 1px black, 1px 3px 1px white",borderRadius:"50px"}})]})})}),Object(j.jsx)("div",{children:Object(j.jsx)(l.a,{label:Object(j.jsx)(S.a,{}),id:"standard-basic",type:"text",className:e.root,color:"secondary",placeholder:"Search"})}),Object(j.jsx)(J,{}),Object(j.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:Object(j.jsx)(C.a,{xsDown:!0,children:Object(j.jsx)(u,{name:"Sign In / UP"})})}),Object(j.jsx)(K,{})]}),Object(j.jsx)(ce,{})]})})})})}function ce(){return Object(j.jsx)("div",{className:"ButtonSingInUp",style:{cursor:"pointer"},children:Object(j.jsx)(_.a,{})})}var ae,oe=a.p+"static/media/businessman_PNG6558.12478e43.png",se=a(195),te=a(200),re=a(20),ie=a.n(re),ne=a(19),le=a.n(ne),de=a(6),je=a.n(de),be=a(59),pe=a.n(be),xe=a(28),me=a.n(xe),Oe=[{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"4.5",image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1583535344-juliana-maverick-x01-rsv-1583535332.jpg?crop=1xw:1xh;center,top&resize=320%3A%2A",prices:"300$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Mountain Bicycle",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(pe.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},(ae={wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"3.5",image:"https://static.toiimg.com/photo/80998213.cms",prices:"50$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Wrist Watch",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(pe.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},Object(n.a)(ae,"wishlistIcon",Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})})),Object(n.a)(ae,"cartIcon",Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})})),ae),{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"6.5",image:"https://ae01.alicdn.com/kf/H2cd47910854643809bc941bee459b515k/TWS-Wireless-Bluetooth-Earphone-6D-Stereo-Wireless-Earphones-IPX5-Waterproof-Earphones-650mAh-V5-0-Headfree-For.jpg_350x350.jpg",prices:"200$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"6D Stereo Earphone",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(pe.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"6.9",image:"https://static-01.daraz.pk/p/d59de06448c0ac352c856707bc6ee9b5.jpg",prices:"1000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Apple Laptop",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(me.a,{color:"secondary"}),Object(j.jsx)(pe.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})}],he=[{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"120.10",image:"https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg",prices:"900$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Iphone X",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"0.0",image:"https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/b/e/beats_solo3_wireless_on-ear_headphones_rose_gold_999_2.jpg",prices:"80$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Wireless Headphone",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"0.0",image:"https://media1.svb-media.de/media/snr/505942/images/normal/image_2016-01-11--1.jpg",prices:"5000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Germin GPS73",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"0.0",image:"https://149355317.v2.pressablecdn.com/wp-content/uploads/2020/10/Ruko-B7-Drone-Top-Camera-Drones.jpg",prices:"200$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Drones with camera",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})}],ue=[{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"120.10",image:"https://ae01.alicdn.com/kf/HTB1KbuLUAvoK1RjSZFwq6AiCFXaL.jpg",prices:"210$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Tatto machine",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"80.3",image:"https://i.pinimg.com/736x/41/39/26/413926aeef062fce7b5a6076d0479178.jpg",prices:"300$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Mini Laptop",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"23.10",image:"https://media1.svb-media.de/media/snr/505942/images/normal/image_2016-01-11--1.jpg",prices:"5000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Germin GPS73",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"134.0",image:"https://s3-ap-northeast-1.amazonaws.com/media.want.jp/BC/A5D760D973BFBC/A5D760D973BFBC_1_250.jpg",prices:"110$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Drones with camera",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})}],ye=[{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"120.10",image:"https://www.cleanlink.com/resources/editorial/2017/floor-scrubber-20728.jpg",prices:"1000$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Scrubber cleaner",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"30.43",image:"https://www.vitamix.com/media/catalog/product/blendingstationadvance/images/BSA-lglam.jpg",prices:"430$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Advance blending",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"30.12",image:"https://images.homedepot-static.com/productImages/94e77ff2-d4c4-4165-8a8d-955c0e257367/svn/emerson-quiet-kool-portable-air-conditioners-eap01-64_400.jpg",prices:"400$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"Portable Air Conditioners",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})},{wishlistIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(le.a,{})}),cartIcon:Object(j.jsx)(A.a,{color:"secondary",style:{color:"black"},"aria-label":"upload picture",component:"span",children:Object(j.jsx)(ie.a,{})}),Rating:"21.0",image:"https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sony_clm-fhd5_clip-on_lcd_monitor1_-_tejar.jpg",prices:"560$",productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",productName:"CLM-FHD5 LCD Monitor",reviews:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"}),Object(j.jsx)(je.a,{color:"secondary"})]})})}],ge=(a(93),Object(x.a)((function(e){return{arrow:{color:"black"},tooltip:{backgroundColor:"black",boxShadow:"1px 1px 1px crimson",fontSize:"15px"}}})));function ve(){var e=ge();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"Product_Container",children:Oe.map((function(c,a){return Object(j.jsxs)("div",{className:"products",children:[Object(j.jsx)(y.b,{to:"#",children:Object(j.jsx)("img",{src:c.image})}),Object(j.jsxs)("div",{className:"desciption_products",children:[Object(j.jsxs)("span",{children:[c.reviews,Object(j.jsx)("code",{children:c.Rating})]}),Object(j.jsxs)("div",{className:"head_prics",children:[Object(j.jsx)("h1",{children:c.productName}),Object(j.jsx)("code",{children:c.prices})]}),Object(j.jsx)("div",{className:"accordion",style:{color:"black",width:"100%",borderRadius:"10px"},children:Object(j.jsx)("div",{className:"AccordionSummary",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(C.a,{smDown:!0,children:Object(j.jsx)("h2",{style:{marginBottom:"10px"},children:"About Product"})}),Object(j.jsx)("p",{className:"productDescriptio",children:c.productDescription}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})}))}),Object(j.jsx)("h1",{className:"Product_heading",children:"New Products"}),Object(j.jsx)("div",{className:"Product_Container",children:he.map((function(c,a){return Object(j.jsxs)("div",{className:"products",children:[Object(j.jsx)(y.b,{to:"#",children:Object(j.jsx)("img",{src:c.image})}),Object(j.jsxs)("div",{className:"desciption_products",children:[Object(j.jsxs)("span",{children:[c.reviews,Object(j.jsx)("code",{children:c.Rating})]}),Object(j.jsxs)("div",{className:"head_prics",children:[Object(j.jsx)("h1",{children:c.productName}),Object(j.jsx)("code",{children:c.prices})]}),Object(j.jsx)("div",{className:"accordion",style:{color:"black",width:"100%",borderRadius:"10px"},children:Object(j.jsx)("div",{className:"AccordionSummary",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(C.a,{smDown:!0,children:Object(j.jsx)("h2",{style:{marginBottom:"10px"},children:"About Product"})}),Object(j.jsx)("p",{className:"productDescriptio",children:c.productDescription}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})}))})]})}var we=Object(x.a)((function(e){return{arrow:{color:"black"},tooltip:{backgroundColor:"black",boxShadow:"1px 1px 1px crimson",fontSize:"15px"}}}));function fe(){var e=we();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container_Products container-2",children:[ue.map((function(c,a){return Object(j.jsx)("div",{className:"products-2",children:Object(j.jsxs)("div",{className:"description_container",children:[Object(j.jsx)(y.b,{to:"#",children:Object(j.jsx)("img",{src:c.image})}),Object(j.jsxs)("div",{className:"description-1",children:[Object(j.jsxs)("span",{children:[c.reviews,Object(j.jsx)("code",{children:c.Rating})]}),Object(j.jsxs)("div",{className:"head_prics",children:[Object(j.jsx)("h1",{children:c.productName}),Object(j.jsx)("code",{children:c.prices})]}),Object(j.jsx)("div",{className:"accordion-1",style:{color:"",width:"",borderRadius:""},children:Object(j.jsx)("div",{className:"AccordionSummary-1",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{display:"",flexDirection:""},children:[Object(j.jsx)(C.a,{smDown:!0,children:Object(j.jsx)("h2",{style:{marginBottom:""},children:"About Product"})}),Object(j.jsx)("p",{className:"",children:c.productDescription}),Object(j.jsxs)("div",{className:"icons-1",children:[Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})})})),ye.map((function(c,a){return Object(j.jsx)("div",{className:"products-2",children:Object(j.jsxs)("div",{className:"description_container",children:[Object(j.jsx)(y.b,{to:"#",children:Object(j.jsx)("img",{src:c.image})}),Object(j.jsxs)("div",{className:"description-1",children:[Object(j.jsxs)("span",{children:[c.reviews,Object(j.jsx)("code",{children:c.Rating})]}),Object(j.jsxs)("div",{className:"head_prics",children:[Object(j.jsx)("h1",{children:c.productName}),Object(j.jsx)("code",{children:c.prices})]}),Object(j.jsx)("div",{className:"accordion-1",style:{color:"",width:"",borderRadius:""},children:Object(j.jsx)("div",{className:"AccordionSummary-1",children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{display:"",flexDirection:""},children:[Object(j.jsx)(C.a,{smDown:!0,children:Object(j.jsx)("h2",{style:{marginBottom:""},children:"About Product"})}),Object(j.jsx)("p",{className:"",children:c.productDescription}),Object(j.jsxs)("div",{className:"icons-1",children:[Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to wishlist","aria-label":"add",children:c.wishlistIcon}),Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Add to cart","aria-label":"add",children:c.cartIcon})]})]})})})})]})]})})}))]})})}var Ne=a(81),ke=a.n(Ne),_e=a(82),Ie=a.n(_e),De=a(80),Se=a.n(De),Fe=a(79),Re=a.n(Fe),Ce=a(134),Ae=(a(128),["About Us","Comunity","Curent Offer","Accessibility"]),Pe=["Report an Ethical Concern","Coustomer Care","Privacy Statement","Feed back"],Le=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"Parllax_image",children:Object(j.jsx)("img",{src:"https://images.wallpaperscraft.com/image/gifts_holiday_package_surprise_50827_1400x1050.jpg"})}),Object(j.jsxs)("div",{className:"bf-footer",children:[Object(j.jsx)("p",{children:"30% cashback & Wine exclusive Prices now"}),Object(j.jsx)(d.a,{variant:"contained",color:"primary",size:"large",style:{marginTop:"20px"},children:"Learn More"})]})]})},Be=Object(Ce.a)((function(e){return{arrow:{color:"crimson"},tooltip:{backgroundColor:"black",boxShadow:"1px 1px 1px crimson",fontSize:"12px"}}}));function ze(){var e=Be();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(Le,{color:"primary"}),Object(j.jsx)("div",{className:"footer_container",children:Object(j.jsxs)("div",{className:"email_Us",children:[Object(j.jsx)("h1",{children:"Subscribe Now to Up to date to our daily offers"}),Object(j.jsxs)("div",{className:"input_field ",children:[Object(j.jsx)(l.a,{style:{width:"100%"},label:"Email",id:"standard-basic",color:"secondary",placeholder:"Enter Your Email Address"}),Object(j.jsx)(d.a,{variant:"contained",style:{borderRadius:"0px 40px 0px 40px",fontSize:"15px"},size:"large",color:"secondary",children:"Subscribe"})]})]})}),Object(j.jsxs)("div",{className:"footer_container-2",children:[Object(j.jsxs)("div",{className:"footerData",children:[Object(j.jsxs)("div",{className:"Contenct_US",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("span",{className:"logo",children:["Buy",Object(j.jsx)(D.a,{style:{boxShadow:" 3px 1px 1px black, 1px 3px 1px crimson",borderRadius:"50px"}})]})}),Object(j.jsxs)("div",{className:"contact_icon",children:[Object(j.jsx)(Re.a,{className:"icon"}),Object(j.jsx)(Se.a,{className:"icon"}),Object(j.jsx)(ke.a,{className:"icon"}),Object(j.jsx)(Ie.a,{className:"icon"})]})]}),Object(j.jsx)("div",{className:"footer_arry",children:Ae.map((function(e,c){return Object(j.jsx)("p",{children:e},c)}))}),Object(j.jsx)("div",{className:"footer_arry_2",children:Pe.map((function(e,c){return Object(j.jsx)("p",{children:e},c)}))})]}),Object(j.jsxs)("div",{className:"bottom_of_footer",children:["Live Yous Life",Object(j.jsx)(D.a,{style:{boxShadow:" 3px 1px 1px black, 1px 3px 1px crimson",borderRadius:"50px"}})]})]}),Object(j.jsxs)("div",{className:"copy_right",children:[Object(j.jsx)(te.a,{arrow:!0,classes:e,title:"Contact Us: muzammilmoin844@gmail.com",children:Object(j.jsx)("p",{children:" \xa9 M.Muzammil Moin-2020"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(Re.a,{className:"bottom_icon"}),Object(j.jsx)(Se.a,{className:"bottom_icon"}),Object(j.jsx)(ke.a,{className:"bottom_icon"}),Object(j.jsx)(Ie.a,{className:"bottom_icon"})]})]})]})})}function qe(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(se.a,{clasName:"Home",style:{background:"#6697e0",height:"auto"},children:[Object(j.jsx)("div",{className:"Home_contents ",children:Object(j.jsxs)("div",{className:"background_div",children:[Object(j.jsx)("div",{className:"on_image_contents",children:Object(j.jsx)("img",{src:oe,className:"man_image"})}),Object(j.jsx)("div",{className:"offer",style:{color:"black"},children:Object(j.jsxs)("div",{className:"offer_details",children:[Object(j.jsx)("h1",{className:"disscount",children:"Disscount"}),Object(j.jsx)("h4",{children:"50% Discount on your first delivery! "}),Object(j.jsxs)("h1",{children:["Best Collection Of 2021 buy & wine exclusive prices",Object(j.jsx)(u,{name:"SHOP NOW",style:{marginLeft:"150px"}})]})]})})]})}),Object(j.jsx)("h1",{className:"Product_heading",children:"FEATURED PRODUCTS"}),Object(j.jsx)(ve,{}),Object(j.jsx)("h1",{className:"Product_heading",children:"On Sale"}),Object(j.jsx)(fe,{})]}),Object(j.jsx)(ze,{})]})}a(129);var Ee=a(14);var $e=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(y.a,{children:[Object(j.jsx)(ee,{}),Object(j.jsx)(Ee.c,{children:Object(j.jsx)(Ee.a,{component:qe})})]})})},Ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,201)).then((function(c){var a=c.getCLS,o=c.getFID,s=c.getFCP,t=c.getLCP,r=c.getTTFB;a(e),o(e),s(e),t(e),r(e)}))};r.a.render(Object(j.jsx)($e,{}),document.getElementById("root")),Ue()},76:function(e,c,a){},93:function(e,c,a){}},[[130,1,2]]]);
//# sourceMappingURL=main.1ee7bf8e.chunk.js.map