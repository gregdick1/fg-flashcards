(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(16)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),i=t.n(c),o=(t(12),t(1)),l=t(2),u=Object(n.createContext)(),s=function(e){var a=e.reducer,t=e.initialState,c=e.children;return r.a.createElement(u.Provider,{value:Object(n.useReducer)(a,t)},c)},f=function(){return Object(n.useContext)(u)},m=t(5),g={Ryu:[{name:"Jab",gif:"https://gfycat.com/ifr/compassionateadmirableasiansmallclawedotter",frameAdvantage:2},{name:"Strong",gif:"https://gfycat.com/ifr/leanweightyblacklemur",frameAdvantage:1},{name:"Fierce",gif:"https://gfycat.com/ifr/diligentsillyargentinehornedfrog",frameAdvantage:-1},{name:"Short",gif:"https://gfycat.com/ifr/costlyoffbeathoneycreeper",frameAdvantage:-2},{name:"Forward",gif:"https://gfycat.com/ifr/belatedamusingbobolink",frameAdvantage:-2},{name:"Roundhouse",gif:"https://gfycat.com/ifr/evenanxiouscockatoo",frameAdvantage:-1},{name:"Crouch Jab",gif:"https://gfycat.com/ifr/enchantingshyherculesbeetle",frameAdvantage:2},{name:"Crouch Strong",gif:"https://gfycat.com/ifr/blissfulordinarycleanerwrasse",frameAdvantage:2},{name:"Crouch Fierce",gif:"https://gfycat.com/ifr/tangiblecreativedarklingbeetle",frameAdvantage:-10},{name:"Crouch Short",gif:"https://gfycat.com/ifr/imperfectgorgeousaustralianfurseal",frameAdvantage:1},{name:"Crouch Forward",gif:"https://gfycat.com/ifr/impassionedcomplexasianwaterbuffalo",frameAdvantage:-3},{name:"Crouch Roundhouse",gif:"https://gfycat.com/ifr/graydamagedgordonsetter",frameAdvantage:-11},{name:"Collarbone Breaker",gif:"https://gfycat.com/ifr/watchfulwearyaardvark",frameAdvantage:-6},{name:"Solar Plexus Strike",gif:"https://gfycat.com/ifr/slimsilentgosling",frameAdvantage:-2},{name:"Axe Kick",gif:"https://gfycat.com/ifr/bountifulzestybactrian",frameAdvantage:-2},{name:"Jodan Sanrengeki (Partial Target Combo)",gif:"https://gfycat.com/ifr/daringrarekusimanse",frameAdvantage:-16},{name:"Jodan Sanrengeki (Target Combo)",gif:"https://gfycat.com/ifr/dentalbrilliantkingfisher",frameAdvantage:-7},{name:"Jodan Nirengeki (Target Combo)",gif:"https://gfycat.com/ifr/rawlonelabradorretriever",frameAdvantage:-7},{name:"Hadoken (All Normal Versions)",gif:"https://gfycat.com/ifr/tanenviousdeviltasmanian",frameAdvantage:-6},{name:"EX Hadoken",gif:"https://gfycat.com/ifr/jaggedmadaddax",frameAdvantage:2},{name:"Tatsumaki Senpukyaku (All Normal Versions)",gif:"https://gfycat.com/ifr/nastyadolescenthummingbird",frameAdvantage:-10},{name:"EX Tatsumaki Senpukyaku",gif:"https://gfycat.com/ifr/frayedwelldocumentedbelugawhale",frameAdvantage:-19},{name:"Jodan Sokutou Geri (All Normal Versions)",gif:"https://gfycat.com/ifr/separatescholarlyairedaleterrier",frameAdvantage:-16},{name:"EX Jodan Sokutou Geri",gif:"https://gfycat.com/ifr/tediousaccomplishedgermanpinscher",frameAdvantage:-16},{name:"Shinkuu Hadoken",gif:"https://gfycat.com/ifr/yearlybelatedgentoopenguin",frameAdvantage:-17}],Ken:[{name:"Jab",gif:"https://gfycat.com/ifr/anytallelver",frameAdvantage:2},{name:"Strong",gif:"https://gfycat.com/ifr/scarceharmfuliggypops",frameAdvantage:2},{name:"Fierce",gif:"https://gfycat.com/ifr/hatefuldifferentballoonfish",frameAdvantage:-3},{name:"Short",gif:"https://gfycat.com/ifr/tediousdizzyarmadillo",frameAdvantage:-1},{name:"Forward",gif:"https://gfycat.com/ifr/sorrowfulfrayedirishdraughthorse",frameAdvantage:-2},{name:"Roundhouse",gif:"https://gfycat.com/ifr/spiritedsillyicelandichorse",frameAdvantage:-4}],Cammy:[{name:"Jab",gif:"https://gfycat.com/ifr/immaterialfrigidgermanshorthairedpointer",frameAdvantage:2},{name:"Fierce",gif:"https://gfycat.com/ifr/speedypoliteflyingsquirrel",frameAdvantage:-3}]},d={Jack:[{name:"Test",gif:"https://gfycat.com/ifr/ablefriendlycardinal",frameAdvantage:1}]},h={};h["Street Fighter V"]=g,h["Tekken 7"]=d,Object.keys(h).forEach(function(e){Object.keys(h[e]).forEach(function(a){h[e][a].forEach(function(t){t.game=e,t.character=a,t.gif=t.gif+"?hd=1&controls=0"})})});var v=Object.keys(h),p=function(e){return Object.keys(h[e])},b=function(e){var a=[];return a.push([e-4,e-2,e]),a.push([e-2,e,e+2]),a.push([e,e+2,e+4]),a[Math.floor(Math.random()*Math.floor(3))]},y=function(e,a){var t=function(e,a){if("All"===a){var t=[];return Object.keys(h[e]).forEach(function(a){t.push.apply(t,Object(m.a)(h[e][a]))}),t}return h[e][a]}(e,a);return t[Math.floor(Math.random()*Math.floor(t.length))]};t(13);function E(){var e=f(),a=Object(l.a)(e,2),t=a[0],c=t.quiz,i=t.config,o=a[1],u=Object(n.useState)({}),s=Object(l.a)(u,2),m=s[0],g=s[1],d=Object(n.useState)(!1),h=Object(l.a)(d,2),v=h[0],p=h[1],b=Object(n.useState)(!1),y=Object(l.a)(b,2),E=y[0],A=y[1],w=Object(n.useState)(0),k=Object(l.a)(w,2),O=k[0],z=k[1];var C=[];c.possibleAnswers.forEach(function(e){var a="QuizCard-button";m[e.toString()]&&e===c.currentMove.frameAdvantage?a+=" QuizCard-button-correct":m[e.toString()]&&(a+=" QuizCard-button-wrong");var t=e;e>0&&(t="+"+e),C.push(r.a.createElement("button",{className:a,key:e+a,onClick:function(){return function(e){var a=m;a[e.toString()]=!0,g(a),e===c.currentMove.frameAdvantage?A(!0):p(!0),z(O+1)}(e)}},t))});var j="Question ".concat(c.answered+1);i.numberOfQuestions>0&&(j+=" of ".concat(i.numberOfQuestions));var Q="".concat(c.correct," of ").concat(c.answered," correct"),M=E?"QuizCard-button QuizCard-button-next":"QuizCard-button QuizCard-button-hidden";return c.running&&!c.finished&&r.a.createElement("div",null,r.a.createElement("div",{className:"QuizCard-header"},r.a.createElement("span",null,j),r.a.createElement("span",null,Q)),r.a.createElement("iframe",{title:"Gif",src:c.currentMove.gif,frameBorder:"0",scrolling:"no",width:"852",height:"524"}),r.a.createElement("iframe",{className:"QuizCard-hidden",title:"Hidden Gif",src:c.nextMove.gif,frameBorder:"0",scrolling:"no",width:"852",height:"524"}),r.a.createElement("div",{className:"QuizCard-footer"},r.a.createElement("span",null,c.currentMove.character),r.a.createElement("span",null,c.currentMove.name)),r.a.createElement("div",{className:"QuizCard-buttons"},r.a.createElement("button",{className:"QuizCard-button QuizCard-button-exit",onClick:function(){return o({type:"endQuiz"}),g({}),p(!1),void A(!1)}},"End Quiz"),r.a.createElement("span",{className:"QuizCard-answers"},C),r.a.createElement("button",{className:M,onClick:function(){return o({type:"answered",correct:!v}),g({}),p(!1),void A(!1)}},"Next")))}function A(){var e=f(),a=Object(l.a)(e,2),t=a[0].quiz,n=a[1];return t.finished&&r.a.createElement("div",null,r.a.createElement("h2",null,"Results"),r.a.createElement("div",null,"Results go here"),r.a.createElement("button",{onClick:function(){return n({type:"resetQuiz"})}},"Start Again"))}t(14);function w(){var e=f(),a=Object(l.a)(e,2),t=a[0],n=t.config,c=t.quiz,i=a[1];var o=[];v.forEach(function(e){o.push(r.a.createElement("option",{key:e,value:e},e))});var u=[r.a.createElement("option",{key:"All",value:"All"},"All")];return p(n.game).forEach(function(e){u.push(r.a.createElement("option",{key:e,value:e},e))}),!c.running&&r.a.createElement("div",null,r.a.createElement("h2",null,"Frame Advantage Quiz"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"OptionsMenu-label-col"},r.a.createElement("label",null,"Game")),r.a.createElement("td",null,r.a.createElement("select",{className:"OptionsMenu-select",onChange:function(e){var a;a=e.target.value,i({type:"changeGame",newGame:a}),i({type:"changeCharacter",newCharacter:"All"})},value:n.game},o))),r.a.createElement("tr",null,r.a.createElement("td",{className:"OptionsMenu-label-col"},r.a.createElement("label",null,"Character")),r.a.createElement("td",null,r.a.createElement("select",{className:"OptionsMenu-select",onChange:function(e){return a=e.target.value,void i({type:"changeCharacter",newCharacter:a});var a},value:n.character},u))),r.a.createElement("tr",null,r.a.createElement("td",{className:"OptionsMenu-label-col"},r.a.createElement("label",null,"# of Questions")),r.a.createElement("td",null,r.a.createElement("input",{className:"OptionsMenu-select",type:"number",value:n.numberOfQuestions,onChange:function(e){return a=e.target.value,void i({type:"changeQuestions",newQuestions:a});var a}}))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{className:"OptionsMenu-hint"},r.a.createElement("span",null,"Leave 0 or blank for endless quiz")))),r.a.createElement("div",null,r.a.createElement("button",{className:"OptionsMenu-button",onClick:function(){i({type:"startQuiz"})}},"Start Quiz")))}t(15);var k=function(){return r.a.createElement(s,{initialState:{config:{game:"Street Fighter V",character:"All",numberOfQuestions:0},quiz:{running:!1,finished:!1,answered:0,correct:0,missed:[],currentMove:null,nextMove:null,possibleAnswers:[]}},reducer:function(e,a){switch(a.type){case"changeGame":return Object(o.a)({},e,{config:Object(o.a)({},e.config,{game:a.newGame})});case"changeCharacter":return Object(o.a)({},e,{config:Object(o.a)({},e.config,{character:a.newCharacter})});case"changeQuestions":return Object(o.a)({},e,{config:Object(o.a)({},e.config,{numberOfQuestions:a.newQuestions})});case"startQuiz":var t=y(e.config.game,e.config.character);return Object(o.a)({},e,{quiz:{running:!0,finished:!1,answered:0,correct:0,missed:[],currentMove:t,nextMove:y(e.config.game,e.config.character),possibleAnswers:b(t.frameAdvantage)}});case"endQuiz":return Object(o.a)({},e,{quiz:Object(o.a)({},e.quiz,{finished:!0})});case"resetQuiz":return Object(o.a)({},e,{quiz:Object(o.a)({},e.quiz,{running:!1,finished:!1,currentMove:null,nextMove:null,possibleAnswers:[]})});case"answered":var n=e.quiz.correct,r=e.quiz.missed;return a.correct?n+=1:r.push(e.quiz.currentMove),Object(o.a)({},e,{quiz:Object(o.a)({},e.quiz,{answered:e.quiz.answered+1,correct:n,missed:r,currentMove:e.quiz.nextMove,nextMove:y(e.config.game,e.config.character),possibleAnswers:b(e.quiz.nextMove.frameAdvantage)})});default:return e}}},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(w,null),r.a.createElement(E,null),r.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.a5cdc643.chunk.js.map