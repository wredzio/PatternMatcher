(this["webpackJsonppattern-matcher"]=this["webpackJsonppattern-matcher"]||[]).push([[3],{100:function(e,n,r){var s={"./1/Answer1.png":[102,6],"./1/Answer10.png":[103,7],"./1/Answer11.png":[104,8],"./1/Answer12.png":[105,9],"./1/Answer2.png":[106,10],"./1/Answer3.png":[107,11],"./1/Answer4.png":[108,12],"./1/Answer5.png":[109,13],"./1/Answer6.png":[110,14],"./1/Answer7.png":[111,15],"./1/Answer8.png":[112,16],"./1/Answer9.png":[113,17],"./1/Question.png":[45,0],"./2/Answer1.png":[114,18],"./2/Answer2.png":[115,19],"./2/Answer3.png":[116,20],"./2/Answer4.png":[117,21],"./2/Answer5.png":[118,22],"./2/Question.png":[46,1],"./3/Answer1.png":[119,23],"./3/Answer2.png":[120,24],"./3/Answer3.png":[121,25],"./3/Answer4.png":[122,26],"./3/Answer5.png":[123,27],"./3/Answer6.png":[124,28],"./3/Answer7.png":[125,29],"./3/Question.png":[47,2]};function t(e){if(!r.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],t=n[0];return r.e(n[1]).then((function(){return r.t(t,7)}))}t.keys=function(){return Object.keys(s)},t.id=100,e.exports=t},101:function(e,n,r){"use strict";r.r(n);var s=r(0),t=r.n(s),a=r(8),i=r.n(a),c=(r(53),r(18)),o=r.n(c),l=r(33),d=r(34),u=r(35),w=r(36),p=r(43),g=r(37),m=r(44),f=(r(55),r(10)),A=(r(56),r(4)),y=r(3),v=r.n(y),x=function(e){var n=e.questions,s=e.selectedExerciseId,a=t.a.useState(null),i=Object(f.a)(a,2),c=i[0],o=i[1];return t.a.useEffect((function(){r(57)("./".concat(s,"/Question.png")).then((function(e){o(e.default)}))}),[]),c&&t.a.createElement("div",{className:"Questions__container"},t.a.createElement("div",{className:"Questions__body"},t.a.createElement("img",{src:c,className:"QuestionsImage"}),n.map((function(e){return t.a.createElement(A.c,{key:e.id,droppableId:"question".concat(e.id)},(function(n,r){return t.a.createElement("div",Object.assign({className:v()("Questions__answers"+s,r.isDraggingOver?"Questions__answers--draggingOver":"",null===e.isAnswerCorrect?"":e.isAnswerCorrect?"Questions__answers--correct":"Questions__answers--wrong")},n.droppableProps,{ref:n.innerRef,style:{top:e.y,left:e.x}}),e.selectedAnswers.map((function(e,n){return t.a.createElement(A.b,{key:e.id,draggableId:e.id+"",index:n},(function(n,r){return t.a.createElement("div",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),e.imageUrl&&t.a.createElement("img",{className:"Questions__answer",src:e.imageUrl}))}))})),n.placeholder)}))}))))},b=(r(99),function(e){var n=e.answers;return t.a.createElement("div",{className:"Answers__container"},t.a.createElement(A.c,{droppableId:"answers"},(function(e,r){return t.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:v()("Answers__list",r.isDraggingOver?"Answers__list--draggingOver":"")}),n.map((function(e,n){return t.a.createElement(A.b,{key:e.id,draggableId:e.id+"",index:n},(function(n,r){return t.a.createElement("div",Object.assign({className:"Answers__item",ref:n.innerRef},n.draggableProps,n.dragHandleProps),t.a.createElement("div",null,e.imageUrl&&t.a.createElement("img",{className:"Answers__itemImage",src:e.imageUrl})))}))})),e.placeholder)})))}),h=function(e,n,r){var s=Array.from(e),t=s.splice(n,1),a=Object(f.a)(t,1)[0];return s.splice(r,0,a),s},I=function(e,n,r,s){var t=Array.from(e),a=Array.from(n),i=t.splice(r.index,1),c=Object(f.a)(i,1)[0];a.splice(s.index,0,c);var o={};return o[r.droppableId]=t,o[s.droppableId]=a,o};function E(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}var O=function(e){function n(){var e,r;Object(u.a)(this,n);for(var s=arguments.length,t=new Array(s),a=0;a<s;a++)t[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(t)))).state={selectedExerciseId:null},r.getList=function(e){return"answers"===e?r.state.answers:r.state.questions.find((function(n){return"question".concat(n.id)===e})).selectedAnswers},r.update=function(e,n){if("answers"===e)return{answers:n};var s=Array.from(r.state.questions);return s.find((function(n){return"question".concat(n.id)===e})).selectedAnswers=n,{questions:s}},r.onDragEnd=function(e){var n=e.source,s=e.destination;if(r.cleanAnswers(),s)if(n.droppableId===s.droppableId){var t=h(r.getList(n.droppableId),n.index,s.index),a=r.update(n.droppableId,t);r.setState(a)}else{var i=I(r.getList(n.droppableId),r.getList(s.droppableId),n,s),c=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?E(r,!0).forEach((function(n){Object(d.a)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},r.update(n.droppableId,i[n.droppableId]),{},r.update(s.droppableId,i[s.droppableId]));r.setState(c)}},r}return Object(m.a)(n,e),Object(w.a)(n,[{key:"selectExercise",value:function(){var e=Object(l.a)(o.a.mark((function e(n){var s,t,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=k.find((function(e){return e.exerciseId===n})),t=s.answers,a=0;case 3:if(!(a<t.length)){e.next=11;break}return e.next=6,r(100)("./".concat(n,"/Answer").concat(t[a].id,".png"));case 6:i=e.sent,t[a].imageUrl=i.default;case 8:a++,e.next=3;break;case 11:this.setState({selectedExerciseId:n,answers:this.shuffleArray(t),questions:s.questions});case 12:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"shuffleArray",value:function(e){for(var n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),s=e[n];e[n]=e[r],e[r]=s}return e}},{key:"checkAnswers",value:function(){for(var e=this.state.questions,n=function(n){e[n].isAnswerCorrect=1===e[n].selectedAnswers.length&&e[n].selectedAnswers.every((function(r){return r.id===e[n].answerId}))},r=0;r<e.length;r++)n(r);this.setState({questions:e})}},{key:"cleanAnswers",value:function(){for(var e=this.state.questions,n=0;n<e.length;n++)e[n].isAnswerCorrect=null;this.setState({questions:e})}},{key:"backToSelectExercise",value:function(){window.location=window.location}},{key:"renderExercise",value:function(){var e=this;return t.a.createElement("div",{className:"App"},t.a.createElement(A.a,{onDragEnd:this.onDragEnd},t.a.createElement("div",{className:"QuestionsSide"},t.a.createElement("button",{className:v()("Button","Button--Back"),onClick:function(){e.backToSelectExercise()}},"Wr\xf3\u0107"),t.a.createElement(x,{selectedExerciseId:this.state.selectedExerciseId,questions:this.state.questions}),t.a.createElement("button",{className:v()("Button","Button--Check"),onClick:function(){e.checkAnswers()}},"Sprawd\u017a")),t.a.createElement("div",{className:"AnswersSide"},t.a.createElement(b,{answers:this.state.answers}))))}},{key:"renderSelectExercise",value:function(){var e=this;return t.a.createElement("div",{className:"App"},t.a.createElement("div",{className:"SelectExercise"},k.map((function(n){return t.a.createElement("button",{key:n.exerciseId,className:v()("Button","Button--Select"),onClick:function(){return e.selectExercise(n.exerciseId)}},n.exerciseName)}))))}},{key:"render",value:function(){return this.state.selectedExerciseId?this.renderExercise():this.renderSelectExercise()}}]),n}(t.a.Component),k=[{exerciseId:1,exerciseName:"Cykl Kerbsa",questions:[{id:1,answerId:1,x:"76.7%",y:"58%",selectedAnswers:[],isAnswerCorrect:null},{id:2,answerId:2,x:"78.0%",y:"71.6%",selectedAnswers:[],isAnswerCorrect:null},{id:3,answerId:3,x:"57.6%",y:"88.5%",selectedAnswers:[],isAnswerCorrect:null},{id:4,answerId:4,x:"37.9%",y:"87.6%",selectedAnswers:[],isAnswerCorrect:null},{id:5,answerId:5,x:"0%",y:"73.5%",selectedAnswers:[],isAnswerCorrect:null},{id:6,answerId:6,x:"1.6%",y:"58.8%",selectedAnswers:[],isAnswerCorrect:null},{id:7,answerId:7,x:"0%",y:"34.9%",selectedAnswers:[],isAnswerCorrect:null},{id:8,answerId:8,x:"9.4%",y:"15.8%",selectedAnswers:[],isAnswerCorrect:null},{id:9,answerId:9,x:"15.2%",y:"5.3%",selectedAnswers:[],isAnswerCorrect:null},{id:10,answerId:10,x:"59.6%",y:"13%",selectedAnswers:[],isAnswerCorrect:null},{id:11,answerId:11,x:"71.6%",y:"31.9%",selectedAnswers:[],isAnswerCorrect:null},{id:12,answerId:12,x:"68.7%",y:"46.2%",selectedAnswers:[],isAnswerCorrect:null}],answers:[{id:1,imageUrl:""},{id:2,imageUrl:""},{id:3,imageUrl:""},{id:4,imageUrl:""},{id:5,imageUrl:""},{id:6,imageUrl:""},{id:7,imageUrl:""},{id:8,imageUrl:""},{id:9,imageUrl:""},{id:10,imageUrl:""},{id:11,imageUrl:""},{id:12,imageUrl:""}]},{exerciseId:2,exerciseName:"Cykl Mocznikowy",questions:[{id:1,answerId:1,x:"55%",y:"66%",selectedAnswers:[],isAnswerCorrect:null},{id:2,answerId:2,x:"40.1%",y:"73.8%",selectedAnswers:[],isAnswerCorrect:null},{id:3,answerId:3,x:"6.25%",y:"63.4%",selectedAnswers:[],isAnswerCorrect:null},{id:4,answerId:4,x:"4.6%",y:"41.5%",selectedAnswers:[],isAnswerCorrect:null},{id:5,answerId:5,x:"20.6%",y:"0.2%",selectedAnswers:[],isAnswerCorrect:null}],answers:[{id:1,imageUrl:""},{id:2,imageUrl:""},{id:3,imageUrl:""},{id:4,imageUrl:""},{id:5,imageUrl:""}]},{exerciseId:3,exerciseName:"B-oksydacja kwasow t\u0142uszczowych",questions:[{id:1,answerId:1,x:"61.25%",y:"62.2%",selectedAnswers:[],isAnswerCorrect:null},{id:2,answerId:2,x:"9.5%",y:"67.2%",selectedAnswers:[],isAnswerCorrect:null},{id:3,answerId:3,x:"0.1%",y:"28.8%",selectedAnswers:[],isAnswerCorrect:null},{id:4,answerId:4,x:"71.1%",y:"12.6%",selectedAnswers:[],isAnswerCorrect:null},{id:5,answerId:5,x:"68.8%",y:"27.1%",selectedAnswers:[],isAnswerCorrect:null},{id:6,answerId:6,x:"71.1%",y:"40.1%",selectedAnswers:[],isAnswerCorrect:null},{id:7,answerId:7,x:"0.3%",y:"41.4%",selectedAnswers:[],isAnswerCorrect:null}],answers:[{id:1,imageUrl:""},{id:2,imageUrl:""},{id:3,imageUrl:""},{id:4,imageUrl:""},{id:5,imageUrl:""},{id:6,imageUrl:""},{id:7,imageUrl:""}]}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,n,r){e.exports=r(101)},53:function(e,n,r){},55:function(e,n,r){},56:function(e,n,r){},57:function(e,n,r){var s={"./1/Question.png":[45,0],"./2/Question.png":[46,1],"./3/Question.png":[47,2]};function t(e){if(!r.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],t=n[0];return r.e(n[1]).then((function(){return r.t(t,7)}))}t.keys=function(){return Object.keys(s)},t.id=57,e.exports=t},99:function(e,n,r){}},[[48,4,5]]]);
//# sourceMappingURL=main.948d503f.chunk.js.map