(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{673:function(e,n,t){Promise.resolve().then(t.t.bind(t,813,23)),Promise.resolve().then(t.bind(t,5436))},8131:function(e,n,t){"use strict";var l=t(9268);t(6006),t(7162);let i=e=>{let{top:n,height:t,bubbleDelay:l,animationKeyframe:i,animationTime:a}=e;return n>=0&&n-4<t?{"--bounceHeight":"-".concat(Math.abs(n-4),"px"),"--bubbleDelay":"".concat(null!=l?l:0,"s"),"--animationKeyframe":"".concat(null!=i?i:"float"),"--animationTime":"".concat(null!=a?a:6,"s")}:{"--bounceHeight":"-".concat(t,"px"),"--bubbleDelay":"".concat(null!=l?l:0,"s"),"--animationKeyframe":"".concat(null!=i?i:"float"),"--animationTime":"".concat(null!=a?a:6,"s")}};n.Z=e=>{let{top:n,left:t,width:a,height:s,position:o,bubbleDelay:u,animationKeyframe:r,animationTime:d}=e;return(0,l.jsx)("div",{className:"secondary bubble",style:{position:null!=o?o:"absolute",top:n,left:t,width:a,height:s,...i({top:n,height:s,bubbleDelay:u,animationKeyframe:r,animationTime:d})}})}},5436:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var l=t(9268),i=t(6006),a=t(4835),s=t.n(a);let o=(e,n)=>{let{top:t,left:l,right:i,bottom:a}=e;return n.x<=i&&n.x>=l&&n.y<=a&&n.y>=t};var u=e=>{let[n,t]=(0,i.useState)(""),[l,a]=(0,i.useState)(),[u,r]=(0,i.useState)(),[d,c]=(0,i.useState)(!1),v=n=>(null==e?void 0:e.validBounds)&&!o(e.validBounds,n),h=(0,i.useCallback)(()=>{r(void 0),t(""),c(!1)},[r,t]),m=(0,i.useCallback)(e=>{a({x:e.clientX,y:e.clientY})},[a]),f=(0,i.useCallback)(e=>{if(v({x:e.clientX,y:e.clientY})){h();return}c(!0),r({x:e.clientX,y:e.clientY})},[r,c,h,null==e?void 0:e.validBounds]),b=(0,i.useCallback)(i=>{var a,o,d,m,f,b;if(l&&v(l)){h();return}let x=Math.abs((null!==(a=null==u?void 0:u.x)&&void 0!==a?a:0)-(null!==(o=null==l?void 0:l.x)&&void 0!==o?o:0)),y=Math.abs((null!==(d=null==u?void 0:u.y)&&void 0!==d?d:0)-(null!==(m=null==l?void 0:l.y)&&void 0!==m?m:0)),p=u,w=n;if(s().isNil(u)||s().isNil(l)){h();return}x<(null!==(f=null==e?void 0:e.minXDiff)&&void 0!==f?f:10)||y<(null!==(b=null==e?void 0:e.minYDiff)&&void 0!==b?b:10)?(p=void 0,x>0&&y>0&&(w="TOO SMALL!")):(null==e?void 0:e.maxXDiff)&&x>e.maxXDiff||(null==e?void 0:e.maxYDiff)&&y>e.maxYDiff?(p=void 0,w="TOO BIG!"):w="",r(p),t(w),(null==e?void 0:e.onMouseUp)&&e.onMouseUp(p,l),c(!1)},[u,l,h,c,null==e?void 0:e.validBounds]);return(0,i.useEffect)(()=>(window.addEventListener("mousemove",m),()=>{window.removeEventListener("mousemove",m)}),[m]),(0,i.useEffect)(()=>(window.addEventListener("mousedown",f),()=>{window.removeEventListener("mousedown",f)}),[f]),(0,i.useEffect)(()=>(window.addEventListener("mouseup",b),()=>{window.removeEventListener("mouseup",b)}),[b]),{startPos:u,curPos:l,isDragging:d,message:n,handleReset:h}};let r=(e,n,t)=>{let l=Math.abs(n.x-t.x),i=Math.abs(n.y-t.y);return{width:e?l:Math.max(l,i),height:e?i:Math.max(l,i)}};var d=t(8131),c=t(7931),v=t(7861),h=t(6008);t(7162);var m=e=>{let{handleReset:n,ovalAllowed:t,setOvalAllowed:i}=e,a=(0,h.useRouter)();return(0,l.jsxs)("div",{className:"secondary banner",style:{height:60},children:[(0,l.jsx)(c.Z,{variant:"contained",className:"primary button",onClick:()=>a.push("/"),children:"Back"}),(0,l.jsx)(c.Z,{variant:"contained",className:"primary button",onClick:n,children:"Reset"}),(0,l.jsxs)("div",{className:"primary switch",children:[(0,l.jsx)(v.Z,{checked:t,onChange:()=>i(!t),sx:{"& .MuiSwitch-thumb":{color:"darkblue"}}}),(0,l.jsx)("div",{children:t?"OVALS ALLOWED":"CIRCLES ONLY"})]}),(0,l.jsx)("div",{className:"instructions",children:"Click and drag to create bubbles!"})]})},f=e=>{let{startPos:n,curPos:t,ovalAllowed:i,isDragging:a}=e;return n&&t&&a?(0,l.jsx)("div",{style:{zIndex:1,position:"absolute",borderStyle:"dashed",color:"black",top:Math.min(n.y,t.y),left:Math.min(n.x,t.x),width:r(i,n,t).width,height:r(i,n,t).height}}):null},b=e=>{let{}=e;return(0,l.jsx)("div",{className:"secondary banner",style:{height:20}})},x=t(4746),y=t(4104),p=e=>{let{message:n,openSnackbar:t,setOpenSnackbar:a}=e;return((0,i.useEffect)(()=>{n&&a(!0)},[n]),n)?(0,l.jsx)(x.Z,{open:t,autoHideDuration:6e3,onClose:()=>a(!1),anchorOrigin:{vertical:"top",horizontal:"center"},style:{height:40,justifyContent:"center"},children:(0,l.jsx)(y.Z,{className:"primary alert",onClose:()=>a(!1),severity:"warning",sx:{"& .MuiAlert-icon":{color:"darkblue"}},children:n})}):null},w=()=>{var e,n;let[t,a]=(0,i.useState)([]),[s,o]=(0,i.useState)(!1),[c,v]=(0,i.useState)(!1),h=(0,i.useCallback)((e,n)=>{if(!e||!n)return;let{width:i,height:o}=r(s,e,n);t.push((0,l.jsx)(d.Z,{top:Math.min(e.y,n.y),left:Math.min(e.x,n.x),width:i,height:o},"bubble-".concat(t.length))),a(t)},[t,s,a]),{handleReset:x,message:y,startPos:w,curPos:g,isDragging:k}=u({minXDiff:50,minYDiff:50,maxXDiff:400,maxYDiff:400,validBounds:null===(e=null==document?void 0:document.getElementsByClassName("background"))||void 0===e?void 0:null===(n=e[0])||void 0===n?void 0:n.getBoundingClientRect(),onMouseUp:h}),j=(0,i.useCallback)(()=>{a([]),x()},[a,x]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(m,{handleReset:j,ovalAllowed:s,setOvalAllowed:o}),(0,l.jsxs)("div",{className:"primary background",children:[(0,l.jsx)(p,{message:y,openSnackbar:c,setOpenSnackbar:v}),(0,l.jsx)(f,{isDragging:k,startPos:w,curPos:g,ovalAllowed:s}),t.map(e=>e)]}),(0,l.jsx)(b,{})]})}},7162:function(){},813:function(){}},function(e){e.O(0,[350,69,667,488,744],function(){return e(e.s=673)}),_N_E=e.O()}]);