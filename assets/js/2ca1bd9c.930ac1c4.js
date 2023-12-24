"use strict";(self.webpackChunktetraminoes=self.webpackChunktetraminoes||[]).push([[453],{6114:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var l=i(1527),n=i(7214),r=i(7163);const s={},o="Stickspin \ud83d\udea7",a={id:"Openers/Stickspin",title:"Stickspin \ud83d\udea7",description:"Stickspin is a TSS \u2192 TSD \u2192 TD follow-up devised by stickmancomic. The first bag is built the same way as Single Double PC, but you'll be doing your TSS differently.",source:"@site/docs/Openers/Stickspin.mdx",sourceDirName:"Openers",slug:"/Openers/Stickspin",permalink:"/docs/Openers/Stickspin",draft:!1,unlisted:!1,editUrl:"https://github.com/tetraminoes-wiki/tetraminoes/edit/main/docs/Openers/Stickspin.mdx",tags:[],version:"current",frontMatter:{},sidebar:"wikiSidebar",previous:{title:"Single Double PC",permalink:"/docs/Openers/SDPC"},next:{title:"1st PC",permalink:"/docs/Perfect Clears/1st PC"}},f={},c=[{value:"TSS",id:"tss",level:3},{value:"TSD",id:"tsd",level:3}];function d(e){const t={h1:"h1",h3:"h3",p:"p",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"stickspin-",children:"Stickspin \ud83d\udea7"}),"\n",(0,l.jsx)(t.p,{children:"Stickspin is a TSS \u2192 TSD \u2192 TD follow-up devised by stickmancomic. The first bag is built the same way as Single Double PC, but you'll be doing your TSS differently."}),"\n",(0,l.jsx)(t.h3,{id:"tss",children:"TSS"}),"\n",(0,l.jsx)(r.Z,{fumenData:"v115@0gAtHeBtGewhAtFehlwhRpAeR4i0glwhRpR4Ceg0gl?whJeAgH"}),"\n",(0,l.jsx)(t.h3,{id:"tsd",children:"TSD"}),"\n",(0,l.jsx)(t.p,{children:"You can build this TSD for all bags. You'll often have to soft drop your S_mino."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},7163:(e,t,l)=>{l.d(t,{Z:()=>p});var n=l(959),r=l(3848);let s={7:4,4:7,6:2,2:6,5:5,3:3,1:1,0:0,8:8},o={L:"J",J:"L",S:"Z",Z:"S",T:"T",O:"O",I:"I"},a={spawn:"spawn",right:"left",reverse:"reverse",left:"right"};const f="fumenCanvasSmall_b468";var c=l(6312);function d(e,t){function i(t){window.localStorage.setItem(e,t),window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:t}))}const l=()=>"true"===localStorage.getItem(e),r=e=>(window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)});null===l()&&i(t);return[(0,n.useSyncExternalStore)(r,l),i]}var h=l(1527);const u={I:{normal:"#42afe1",highlight:"#6ceaff",skim:"#5cc7f9"},T:{normal:"#9739a2",highlight:"#d958e9",skim:"#b94bc6"},S:{normal:"#51b84d",highlight:"#84f880",skim:"#70d36d"},Z:{normal:"#eb4f65",highlight:"#ff7f79",skim:"#f96c67"},L:{normal:"#f38927",highlight:"#ffba59",skim:"#f99e4c"},J:{normal:"#1165b5",highlight:"#339bff",skim:"#2c84da"},O:{normal:"#f6d03c",highlight:"#ffff7f",skim:"#f9df6c"},X:{normal:"#868686",highlight:"#dddddd",skim:"#bdbdbd"},Empty:{normal:"#f3f3ed"},Stroke:{normal:"#aaaaaa"}};function m(e){return i==e.x&&j==e.y}const p=e=>{let t,l,p,g,{fumenData:S,tilesize:k,transparent:y,numrows:b,...w}=e;c.Z.canUseDOM&&([t,l]=d("mirrorState",!1),[p,g]=d("gridState",!1));const v=n.useRef(null);let x,T;return[k,y]=function(e,t){return e||(e=32),null==t&&(t=!0),[e,t]}(k,y),(0,n.useEffect)((()=>{let e;e=t?function(e){for(let t=0;t<e.length;t++){let i=e[t]._field.field.pieces;for(let e=0;e<23;e++){let t=i.slice(10*e,10*(e+1));for(let l=0;l<10;l++)i[10*e+l]=s[t[9-l]]}let l=e[t].operation;l&&(l.type=o[l.type],l.x=9-l.x,"IO".includes(l.type)&&("reverse"==l.rotation||"left"==l.rotation&&"O"==l.type?l.x++:"spawn"!=l.rotation&&"O"!=l.type||l.x--),"SZLJT".includes(l.type)&&(l.rotation=a[l.rotation]))}return e}(r.xv.decode(S))[0]:r.xv.decode(S)[0];const l=e.field,n=e.operation,f=v.current,c=f.getContext("2d");let d=[];null==b&&(b=function(e,t,l){function n(e){return i==e.x&&j==e.y}let r=0;for(let i=0;i<e;i++)for(let e=0;e<23;e++)"_"!=t.at(i,e)&&(r=Math.max(r,e)),null!=l&&l.positions().filter(n).length>0&&(r=Math.max(r,e));return r}(10,l,n),b+=2),x=10*k,T=b*k,f.width=x,f.height=T,c.fillStyle=y?"rgba(0, 0, 0, 0)":u.Empty.normal;let h=!0;for(let t=0;t<b-1;t++){d[t]=!0;for(let e=0;e<10;e++)if("_"==l.at(e,t)){d[t]=!1,h=!1;break}}h&&d.fill(!1),function(e,t,i,l,n,r,s,o,a,f){if(e.fillRect(0,0,s,r),f){e.fillStyle="rgba(0, 0, 0, 0)",e.strokeStyle=u.Stroke.normal;for(let t=0;t<o;t++)for(let i=0;i<n;i++)e.strokeRect(t*l,r-(i+1)*l,l,l)}for(let c=0;c<o;c++)for(let s=0;s<n;s++)"_"!=t.at(c,s)&&(e.fillStyle=u[t.at(c,s)].highlight,e.fillRect(c*l,r-(s+1)*l-l/5,l,l+l/5)),null!=i&&i.positions().filter(m).length>0&&(e.fillStyle=u[i.type].highlight,e.fillRect(c*l,r-(s+1)*l-l/5,l,l+l/5));for(let c=0;c<o;c++)for(let s=0;s<n;s++)"_"!=t.at(c,s)&&(a[s]?e.fillStyle=u[t.at(c,s)].skim:e.fillStyle=u[t.at(c,s)].normal,e.fillRect(c*l,r-(s+1)*l,l,l)),null!=i&&i.positions().filter(m).length>0&&(a[s]?e.fillStyle=u[i.type].skim:e.fillStyle=u[i.type].normal,e.fillRect(c*l,r-(s+1)*l,l,l))}(c,l,n,k,b,T,x,10,d,p)}),[t,p]),(0,h.jsx)("canvas",{className:f,onClick:function(){l(!t)},fumenData:S,ref:v,width:x,height:T})}}}]);