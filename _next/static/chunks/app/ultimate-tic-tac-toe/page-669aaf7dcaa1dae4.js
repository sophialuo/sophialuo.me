(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{8747:function(e,a,n){Promise.resolve().then(n.t.bind(n,3752,23)),Promise.resolve().then(n.bind(n,4739))},4739:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return S}});var s,r,i,o,t=n(9268),l=n(6006),c=n(4835),m=n.n(c),d=n(5846),g=n.n(d);n(3321),(s=i||(i={}))[s.O=0]="O",s[s.X=1]="X",(r=o||(o={})).InProgress="In Progress",r.Tied="Tied",r.OWon="Player O Won",r.XWon="Player X Won";let u=["Welcome!","Ultimate Tic Tac Toe involves playing 9 mini Tic Tac Toe games with two players: X and O.","To win a mini game, you must place your letter in three tiles in a row (horizontally, vertically, or diagonally).","To win the ultimate game, you must win 3 mini games in a row.","Player X goes first. Please click on any tile to begin."],h=["Please click on an empty tile in the focused mini game."],P=["Please click on any empty tile in any mini game"],v=e=>["Game Over: ".concat(e)],p=e=>{let{row:a,col:n}=e;return a>=0&&a<3&&n>=0&&n<3},w=(e,a,n,s)=>{let{row:r,col:i}=e,o=0;for(let e of s){let{row:s,col:t}=e,l={row:r+s,col:i+t};if(p(l)&&a[l.row][l.col]===n&&(o+=1),o>=3)return!0}return!1},f=m().range(-2,3).map(e=>({row:0,col:e})),x=m().range(-2,3).map(e=>({row:e,col:0})),j=m().range(-2,3).map(e=>({row:-e,col:-e})),N=m().range(-2,3).map(e=>({row:-e,col:e})),y=(e,a,n,s)=>{if(w(a,n,s,f)||w(a,n,s,x)||w(a,n,s,j)||w(a,n,s,N)){if(s===i.O||s===o.OWon)return o.OWon;if(s===i.X||s===o.XWon)return o.XWon}return 9===e?o.Tied:o.InProgress};var I=n(3380),T=n(9),b=n(9614),O=e=>{let{row:a,col:n,handleTileClick:s,tilePlayer:r}=e;return(0,t.jsxs)("div",{className:"tile tile_".concat(2===a?a:"r","_").concat(2===a&&2!==n?"c":n),onClick:()=>s({row:a,col:n}),children:[r===i.X&&(0,t.jsx)(I.G,{className:"tile-icon",icon:T.g82,size:"lg"}),r===i.O&&(0,t.jsx)(I.G,{className:"tile-icon",icon:b.diR})]})},X=e=>{let{miniGameLoc:a,focused:n,anyMiniGameAllowed:s,curPlayer:r,mainGameStatus:i,miniGameStatus:c,handleNext:d,wiggle:g,setWiggle:u}=e,[h,P]=(0,l.useState)(0),[v,p]=(0,l.useState)(m().range(3).map(e=>m().range(3).map(e=>void 0))),[w,f]=(0,l.useState)(!0),x=(0,l.useCallback)(e=>{let{row:t,col:l}=e,g=i===o.InProgress&&c===o.InProgress&&(s||n&&m().isNil(v[t][l]));if(g){let n=m().cloneDeep(v);n[t][l]=r,p(n);let s=h+1;P(s);let i=y(s,e,n,r);d({loc:a,miniGameStatus:i},e)}},[i,c,s,r,a,n,v,p,h,P,d]);return(0,t.jsxs)("div",{className:"board ".concat(n||s&&c===o.InProgress?"board-focused":""," ").concat(g&&c===o.InProgress?"board-wiggle":""),onAnimationEnd:()=>u(!1),children:[c!==o.InProgress&&!w&&(0,t.jsx)("div",{className:"mini-game-tile",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:(0,t.jsx)(I.G,{icon:c===o.Tied?T.TzT:c===o.XWon?T.g82:b.diR})}),(c===o.InProgress||w)&&(0,t.jsx)("div",{onMouseLeave:()=>f(!1),children:m().range(3).map(e=>(0,t.jsx)("div",{className:"board-row",children:m().range(3).map(a=>(0,t.jsx)(O,{row:e,col:a,handleTileClick:x,tilePlayer:v[e][a]},"tic-tac-toe_".concat(e,"_").concat(a)))}))})]})},S=()=>{let[e,a]=(0,l.useState)(!1),[n,s]=(0,l.useState)(void 0),[r,c]=(0,l.useState)(i.X),[d,p]=(0,l.useState)(0),[w,f]=(0,l.useState)(m().range(3).map(e=>m().range(3).map(e=>o.InProgress))),[x,j]=(0,l.useState)(o.InProgress),[N,I]=(0,l.useState)(u);(0,l.useEffect)(()=>{0!==d&&(x!==o.InProgress?I(v(x)):n?I(h):I(P))},[d,x,n,I]);let T=(0,l.useCallback)((e,n)=>{let{loc:t,miniGameStatus:l}=e;r===i.O?c(i.X):c(i.O);let g=d+1;p(g);let{row:u,col:h}=t,P=w,v=x;if(l!==o.InProgress&&((P=m().cloneDeep(w))[u][h]=l,f(P),j(v=y(g,t,P,l))),v!==o.InProgress){s(void 0);return}P[n.row][n.col]===o.InProgress?s(n):s(void 0),a(!0)},[w,f,d,p,j,r,c,a]);return(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"header",children:(0,t.jsx)(g(),{href:"/",children:"Back"})}),(0,t.jsxs)("div",{className:"game-wrapper",children:[(0,t.jsx)("h1",{children:"Ultimate Tic Tac Toe"}),(0,t.jsx)("h2",{className:"game-message",children:N[0]}),N.length>0&&(0,t.jsx)("div",{className:"game-sub-message-wrapper",children:N.slice(1).map(e=>(0,t.jsx)("div",{className:"game-sub-message",children:e},e))}),x===o.InProgress&&(0,t.jsx)("h2",{className:"game-message",children:"Next: Player ".concat(r===i.X?"X":"O")}),(0,t.jsx)("div",{className:"ultimate-board",children:m().range(3).map(s=>(0,t.jsx)("div",{className:"ultimate-board-row",children:m().range(3).map(i=>(0,t.jsx)("div",{children:(0,t.jsx)(X,{miniGameLoc:{row:s,col:i},anyMiniGameAllowed:x===o.InProgress&&m().isNil(n),focused:x===o.InProgress&&s===(null==n?void 0:n.row)&&i===(null==n?void 0:n.col),wiggle:x===o.InProgress&&e&&(n&&s===n.row&&i===n.col||!n),setWiggle:a,mainGameStatus:x,miniGameStatus:w[s][i],curPlayer:r,handleNext:T})},"ultimate-tic-tac-toe_".concat(s,"_").concat(i)))},"ultimate-tic-tac-toe_".concat(s)))})]})]})}},3321:function(){},3752:function(){}},function(e){e.O(0,[350,626,120,667,488,744],function(){return e(e.s=8747)}),_N_E=e.O()}]);