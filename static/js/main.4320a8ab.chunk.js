(this.webpackJsonpwatermelon=this.webpackJsonpwatermelon||[]).push([[0],{13:function(e,t,a){},20:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),gsap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_Assets_orange_vape_bg_png__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),_Assets_orange_vape_bg_2_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_Assets_green_quiz_bg_png__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23),_Assets_green_quiz_bg_2_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(24),_Assets_orange_tube_bg_png__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(25),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),Quiz=function Quiz(props){var completed=[],points=0,counter=0,question=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),a=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),b=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),c=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),bg=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showA=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showB=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showC=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),showD=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),keyMap=["a","b","c","d"],questionaire_limit=5,list_of_questions=[{question:"1. What size cartridge is the Saturday Watermelon 510:",options:{a:"1g",b:".05g",c:".45g"},answer:"a",bg:"url(".concat(_Assets_orange_vape_bg_png__WEBPACK_IMPORTED_MODULE_3__.a,")")},{question:"2. Saturday Watermelon 1g Distillate Vape Cartridge contains NO added propylene glycol, vegetable glycerin, MCT oil, vitamin E, acetate or other diluents?",options:{a:"True",b:"False"},answer:"a",bg:"url(".concat(_Assets_green_quiz_bg_2_png__WEBPACK_IMPORTED_MODULE_6__.a,")")},{question:"3. What are two dominant flavour aromas that you can expect from Saturday Watermelon Vape?",options:{a:"Citrus + Fuel",b:"Tropical Fruit + Floral",c:"Pepper + Berry"},answer:"b",bg:"url(".concat(_Assets_orange_vape_bg_2_png__WEBPACK_IMPORTED_MODULE_4__.a,")")},{question:"4. Saturday Watermelon Vape is:",options:{a:"70-75% THC",b:"73-78% THC",c:"77-83% THC"},answer:"c",bg:"url(".concat(_Assets_green_quiz_bg_png__WEBPACK_IMPORTED_MODULE_5__.a,")")},{question:"5. I\u2019d Recommend Saturday Watermelon Vape to shopper in a situation where:",options:{a:"An occasional smoker who is looking for an edible",b:"An experienced or occasional cannabis shopper who is seeking a smooth, high-THC smoking experience.",c:"An experienced or occasional smoker looking for a tasty, high-THC experience for on-the-go and values the dollars in their pocket",d:"A shopper who is new to cannabis and is looking for a balanced THC:CBD offering"},answer:"c",bg:"url(".concat(_Assets_orange_tube_bg_png__WEBPACK_IMPORTED_MODULE_7__.a,")")}],history=Object(react_router__WEBPACK_IMPORTED_MODULE_2__.f)();Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){randList()}),[]);var randList=function randList(){if(gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".green_bg",{backgroundColor:"#535938",duration:0}),completed.length>=questionaire_limit)points<4?(localStorage.setItem("points",points),history.push("/points")):(localStorage.setItem("points",points),history.push("/data-capture"));else{var random=counter++,check_completed=completed.find((function(e){return e==random}));check_completed||0===check_completed?randList():(completed.push(random),question.current.textContent=list_of_questions[random].question,bg.current.style.background=list_of_questions[random].bg,bg.current.style.backgroundSize="100% 100%",keyMap.forEach((function(key){list_of_questions[random].options[key]?(eval(key).current.textContent=list_of_questions[random].options[key],eval("show".concat(key.toUpperCase())).current.className="green_bg ".concat(key)):eval("show".concat(key.toUpperCase())).current.className="displayNone"})))}},selectved_answer=function selectved_answer(selected_data){gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".".concat(selected_data),{backgroundColor:"#40473F",duration:.5});var index=completed[completed.length-1];selected_data==list_of_questions[index].answer?(eval(selected_data).current.textContent="Correct",points++,console.log("updated points: ".concat(points))):eval(selected_data).current.textContent="Incorrect",setTimeout((function(){randList()}),1e3)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"Prizing",ref:bg,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"quiz_holder",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{id:"title_holder",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3",{ref:question})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"answer_list",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{ref:showA,className:"displayNone",onClick:function(){return selectved_answer("a")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"ans",ref:a})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{ref:showB,className:"displayNone",onClick:function(){return selectved_answer("b")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"ans",ref:b})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{ref:showC,className:"displayNone",onClick:function(){return selectved_answer("c")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"ans",ref:c})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{ref:showD,className:"displayNone",onClick:function(){return selectved_answer("d")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"ans",ref:d})})]})]})})};__webpack_exports__.a=Quiz},21:function(e,t,a){"use strict";t.a=a.p+"static/media/orange-vape-bg.f71b415d.png"},22:function(e,t,a){"use strict";t.a=a.p+"static/media/orange-vape-bg-2.9534499d.png"},23:function(e,t,a){"use strict";t.a=a.p+"static/media/green-quiz-bg.e9ef03f6.png"},24:function(e,t,a){"use strict";t.a=a.p+"static/media/green-quiz-bg-2.aa02240a.png"},25:function(e,t,a){"use strict";t.a=a.p+"static/media/orange-tube-bg.cdd357bd.png"},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(14),i=a.n(s),r=(a(31),a(26)),o=a(2),_=a(8),l=a(3),A=(a(32),a(33),a(0)),d=(new Date).getFullYear()-19,u=function(e){var t=Object(o.f)(),a=Object(n.useState)({style:{backgroundColor:"".concat(e.color),border:"none",display:"flex",alignItems:"center",justifyContent:"center"},link:""}),c=Object(_.a)(a,1)[0],s=function(){if("/"==e.path&&(void 0==e.day||void 0==e.month||void 0==e.province||void 0==e.verifyAge))return l.a.to(".submission_alert",{opacity:"1",duration:.3}),!0;void 0==e.path&&t.push(e.link)};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h4",{className:"submission_alert",style:{color:"white",position:"absolute",zIndex:"999",marginTop:"-6vh",opacity:"0"},children:"You're missing a required field"}),Object(A.jsxs)("button",{onClick:function(){if(console.log(d),console.log(e.path),s()&&(s(),console.log(window.location.href)),!s()){if(e.verifyAge<d){var a={dob:"".concat(e.verifyAge,"/").concat(e.month,"/").concat(e.day),province:e.province};localStorage.setItem("users_metadata",JSON.stringify(a)),t.push(e.link)}e.verifyAge>d&&window.location.replace("https://www.gotmilk.com/")}},style:c.style,className:"next_btn ".concat(e.class),children:[e.text," ",Object(A.jsx)("img",{id:"next_image",src:e.image,alt:""})]})]})},b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAdCAYAAAD7En+mAAAABHNCSVQICAgIfAhkiAAAAmhJREFUWEfNmL9rFEEUx28lkMI/wM4ySWOrIIZEYoxYBAvRws7OytgZSTAkaLrYqY2djRGxNY0hoCAKFiqoRVLYWOSnwfwgzfl5YU42d3u7b2bfbLIwzN3ud77vffa9uVs2qdfrE7Va7T7D4ljBpCdJktVQM/I5wdpFxvFQj6Z1klNvIicxn2QaNzJ+CuitUC9yecHaa6HrMyGT5Mc+aATY08B+8k0WyDOs+eC7ro1+mfN95PFdrv8HdbDTzHcNAv3C4xRBNrVeQHai/cLo0q7J0a1x7SzxfzY0B0Ad7BTzmEGwtwQa0PoA+hztDa0+R7fuKvk1rWkBdbAPmO8ZBJ0F9nqRD5CjaB4W6RTXpZL9xDwA2dK6aSOCW7XxAr5XCL6RlahhHIGUPfktK05mRRtCwyR+43mbJF6mvE/yWdq1V1GpIskfBOfaQeZWNJWQtJS0lsWxhMkbRjdDvX8LAssP3nkgP+fpcisaobIWNyvtseUgC//KVKDiTBs/YhqxzrSE31/pCir5UeOhBj1isF6Qqj3afLeOQGW9IYNAD7myQZDBoIcEGwxZCrRi2FKQpUErgi0NaQIaGdYE0gw0EqwZpCmoMewOfoM8DLzXPAxoNF4PDBpD/mdn0N3RaNtotjk/BOS7Eh4tS81BXWUfM4e8NxLIi5aVbBBHAXWwz5hvelRlF+2FGJDme7QZijbWwgrkZSDnPW6MlzRaRRtZKN4FRYeMXlHXwnIzZxlXM0pQCWQloA72GLO8mE7D7vH9Usx2Td/Y6K2bamGBfc0YZgjkMJBzXhuthLgyUFfZDuZXjCdAyrujyo5/HyvaQ3ebpMMAAAAASUVORK5CYII=",j=(a(13),function(e){var t=["-"],a=["-"],c=["-","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=["-","ON","QC","NL","PE","NS","NB","MB","SK","AB","BC","YT","NT","NU"],i=Object(n.useState)({title:"",data:[]}),r=Object(_.a)(i,2),o=r[0],d=r[1],j=Object(n.useState)(!0),O=Object(_.a)(j,2),g=O[0],m=O[1],p=Object(n.useState)(""),h=Object(_.a)(p,2),E=h[0],x=h[1],C=Object(n.useState)(),f=Object(_.a)(C,2),w=f[0],v=f[1],I=Object(n.useState)(),N=Object(_.a)(I,2),D=N[0],M=N[1],B=Object(n.useState)(),R=Object(_.a)(B,2),y=R[0],P=R[1],T=Object(n.useState)(),k=Object(_.a)(T,2),W=k[0],U=k[1],Q=function e(n,c,s){n!=c&&(n+=1,"y"==s&&a.unshift(n),"d"==s&&t.push(n),e(n,c,s))};Q(1900,2021,"y"),Q(0,31,"d");var Y=function(e,t){x(e),g&&L(e,t),g||(e!==E?L(e,t):S())},L=function(e,t){"day"==e?l.a.to(".dayArrow",{rotation:"-90",duration:.3}):l.a.to(".dayArrow",{rotation:"0",duration:.3}),"month"==e?l.a.to(".monthArrow",{rotation:"-90",duration:.3}):l.a.to(".monthArrow",{rotation:"0",duration:.3}),"year"==e?l.a.to(".yearArrow",{rotation:"-90",duration:.3}):l.a.to(".yearArrow",{rotation:"0",duration:.3}),"province"==e?l.a.to(".provinceArrow",{rotation:"-90",duration:.3}):l.a.to(".provinceArrow",{rotation:"0",duration:.3}),l.a.to(".sidebar",{width:"70px",duration:.3}),d({title:e,data:t}),m(!g),x(e)},S=function(){l.a.to(".dayArrow",{rotation:"0",duration:.3}),l.a.to(".monthArrow",{rotation:"0",duration:.3}),l.a.to(".yearArrow",{rotation:"0",duration:.3}),l.a.to(".provinceArrow",{rotation:"0",duration:.3}),l.a.to(".sidebar",{width:"0px",duration:.3}),d({title:"",data:[]}),m(!0),x("")};return Object(n.useEffect)((function(){}),[]),Object(A.jsx)("div",{className:"home_bg",children:Object(A.jsxs)("div",{id:"landing_wrapping",children:[Object(A.jsxs)("div",{className:"sidebar",children:[Object(A.jsx)("div",{className:"title",children:Object(A.jsx)("h4",{style:{color:"white"},children:o.title.toUpperCase()})}),Object(A.jsx)("ul",{children:o.data.map((function(e,t){return Object(A.jsx)("li",{className:"opitons_list",name:o.title,onClick:function(t){t.stopPropagation(),function(e,t){"day"==e?v(t):"month"==e?M(t):"year"==e?P(t):"province"==e&&U(t),g||("day"==e&&l.a.to(".dayArrow",{rotation:"0",duration:.3}),"month"==e&&l.a.to(".monthArrow",{rotation:"0",duration:.3}),"year"==e&&l.a.to(".yearArrow",{rotation:"0",duration:.3}),"province"==e&&l.a.to(".provinceArrow",{rotation:"0",duration:.3}),l.a.to(".sidebar",{width:"0px",duration:.3}),d({title:"",data:[]}),m(!g)),x("")}(o.title,e)},children:e},t)}))})]}),Object(A.jsx)("h1",{style:{color:"white",fontWeight:"100",fontSize:"2.2em",fontFamily:"Fjalla One, sans-serif"},children:"PLEASE VERIFY YOUR AGE "}),Object(A.jsxs)("div",{id:"dob_capture",children:[Object(A.jsxs)("div",{className:"select_container",onClick:function(e){Y("day",t)},children:[Object(A.jsx)("div",{className:"box",children:Object(A.jsx)("div",{className:"input-label",children:null!==w&&void 0!==w?w:"DAY"})}),Object(A.jsx)("div",{className:"bb-container ",children:Object(A.jsx)("div",{className:"blackBox",children:Object(A.jsx)("img",{className:"downarrow dayArrow",src:b,alt:"down-arrow"})})})]}),Object(A.jsxs)("div",{className:"select_container",onClick:function(e){e.stopPropagation(),Y("month",c)},children:[Object(A.jsx)("div",{className:"input-label",children:null!==D&&void 0!==D?D:"MONTH"}),Object(A.jsx)("div",{className:"bb-container",children:Object(A.jsx)("div",{className:"blackBox",children:Object(A.jsx)("img",{className:"downarrow monthArrow",src:b,alt:"down-arrow"})})})]}),Object(A.jsxs)("div",{className:"select_container",onClick:function(e){e.stopPropagation(),Y("year",a)},children:[Object(A.jsx)("div",{className:"input-label",children:null!==y&&void 0!==y?y:"YEAR"}),Object(A.jsx)("div",{className:"bb-container",children:Object(A.jsx)("div",{className:"blackBox",children:Object(A.jsx)("img",{className:"downarrow yearArrow",src:b,alt:"down-arrow"})})})]}),Object(A.jsxs)("div",{className:"select_container",onClick:function(e){e.stopPropagation(),Y("province",s)},children:[Object(A.jsx)("div",{className:"input-label",children:null!==W&&void 0!==W?W:"PROVINCE"}),Object(A.jsx)("div",{className:"bb-container",children:Object(A.jsx)("div",{className:"blackBox",children:Object(A.jsx)("img",{className:"downarrow provinceArrow",src:b,alt:"down-arrow"})})})]}),Object(A.jsx)("div",{id:"next_btn_landing",children:Object(A.jsx)(u,{text:"NEXT",path:"/",verifyAge:y,day:w,month:D,province:W,color:"#E14925",link:"/roomba-prize"})})]})]})})}),O=a.p+"static/media/Saturday.d52f26e5.mp4",g=function(e){var t=Object(o.f)();return Object(n.useEffect)((function(){setTimeout((function(){t.push("/watermelon")}),9e3)}),[]),Object(A.jsx)("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,children:Object(A.jsx)("source",{src:O,type:"video/mp4"})})},m=(a(42),"data:image/png;base64,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"),p=(a.p,a.p+"static/media/vape-pen.d018d2e7.svg"),h=function(e){return Object(A.jsxs)("div",{className:"Prizing watermelonBg",children:[Object(A.jsxs)("div",{className:"columns_holder",children:[Object(A.jsx)("div",{className:"shared_width left-content",children:Object(A.jsxs)("div",{className:"shared_width",children:[Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("h1",{className:"watermelon_h1",children:"WATERMELON"}),Object(A.jsx)("h5",{className:"watermelon_h5",children:"1G 510 CARTRIDGE"})]}),Object(A.jsx)("div",{className:"info_container",children:Object(A.jsx)("p",{className:"margin_zero",style:{fontSize:"13px"},children:"Watermelon is our newest Saturday distillate featuring a tropical fruit flavour; packed with a blend of terpenes including alpha-pinene, limonene and linalool. With it\u2019s very strong THC potency potential, Saturday 510 carts are here for the weekend."})}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"HYBRID"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"THC 77-83%"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"CBD 0-2%"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"AROMA & FLAVOURS"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"Fruity, Floral, Sweet"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"LICENSED PRODUCER"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"WeedMD Rx Inc."})]})]})}),Object(A.jsx)("div",{class:"vape_container",children:Object(A.jsx)("img",{id:"vapePen",src:p,alt:""})})]}),Object(A.jsx)("div",{className:"next_btn_watermelon",children:Object(A.jsx)(u,{text:"LET'S BEGIN",link:"/quiz",color:"#535938"})})]})},E=a(20),x=a(27),C=function(e){var t=localStorage.getItem("points"),a=Object(o.f)();return Object(A.jsxs)("div",{className:"Prizing",children:[Object(A.jsx)("div",{id:"quiz_result_holder_",children:Object(A.jsxs)("div",{id:"contact_header_comment_holder",children:[Object(A.jsx)("h2",{children:"CONGRATULATIONS! YOU GOT ".concat(t,"/5 ANSWERS CORRECT!")}),Object(A.jsxs)("h4",{children:["Please leave us your contact info for your ",Object(A.jsx)("strong",{children:"CHANCE TO WIN"})," your very own Saturday Roomba!"]})]})}),Object(A.jsxs)("form",{className:"form_collection",onSubmit:function(e){e.preventDefault();var n=JSON.parse(localStorage.getItem("users_metadata")),c=Object(x.a)({fullname:"".concat(e.target.fullname.value),email:"".concat(e.target.email.value),company:"".concat(e.target.store.value),points:t},n);fetch("https://bottlecapdev.pythonanywhere.com/saturday",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){var t=e.status;200===parseInt(t)&&a.push("/ThanksForEntry")}))},children:[Object(A.jsx)("div",{className:"input_container",children:Object(A.jsxs)("div",{className:"input_wrapper",children:[Object(A.jsx)("div",{className:"label_bg",children:Object(A.jsx)("label",{htmlFor:"fullname",className:"labels_",children:"FULLNAME"})}),Object(A.jsx)("input",{className:"inputs formInput",type:"text",id:"fullname",name:"fullname",placeholder:"FULLNAME",required:!0})]})}),Object(A.jsx)("div",{className:"input_container",children:Object(A.jsxs)("div",{className:"input_wrapper",children:[Object(A.jsx)("div",{className:"label_bg",children:Object(A.jsx)("label",{htmlFor:"email",className:"labels_",children:"EMAIL"})}),Object(A.jsx)("input",{className:"inputs formInput",type:"email",id:"email",name:"email",placeholder:"EMAIL",required:!0})]})}),Object(A.jsx)("div",{className:"input_container",children:Object(A.jsxs)("div",{className:"input_wrapper",children:[Object(A.jsx)("div",{className:"label_bg",children:Object(A.jsx)("label",{htmlFor:"store",className:"labels_",children:"STORE"})}),Object(A.jsx)("input",{className:"inputs formInput",type:"text",id:"store",name:"store",placeholder:"STORE",required:!0})]})}),Object(A.jsx)("input",{type:"submit",id:"submit_btn",value:"SUBMIT"}),Object(A.jsxs)("p",{className:"legal_content",children:["By entering, I consent to receive emails and direct mails regarding newsletters, announcements, updates, promotions in accordance with the Saturday Cannabis and ",Object(A.jsx)("a",{id:"link_",href:"https://entouragehealthcorp.com/privacy-policy",children:"Entourage Health Corp Privacy Policy"}),". I understand that my personal information will never be shared or distributed, and will not be used for purposes other than stated as part of the Saturday Cannabis Quiz."]})]})]})},f=a.p+"static/media/guitar.53634a63.svg",w=function(e){return Object(A.jsxs)("div",{className:"Prizing noOverflow",children:[Object(A.jsx)("div",{id:"next_btn_green",children:Object(A.jsx)(u,{image:m,link:"/Quiz"})}),Object(A.jsx)("div",{id:"ball_layer"}),Object(A.jsx)("div",{id:"guitar_layer",children:Object(A.jsx)("img",{id:"guitar",src:f,alt:""})}),Object(A.jsx)("p",{id:"instruction_context",children:"ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY PARTY FOR YOUR STORE"})]})},v=a.p+"static/media/roomba-bg.d094d11a.png",I=function(e){return Object(A.jsxs)("div",{className:"Roomba_page",children:[Object(A.jsx)("img",{className:"roomba-bg",src:v,alt:"bg"}),Object(A.jsx)("h2",{className:"roomba_header_text",children:"ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY ROOMBA!"}),Object(A.jsx)("div",{id:"next_btn_roomba",children:Object(A.jsx)(u,{text:"EXCITED? LETS GO!",link:"/educational-video",color:"#535938"})})]})},N=a.p+"static/media/orig-roomba.e30ced5a.png",D=function(e){Object(o.f)();var t=localStorage.getItem("points");return Object(n.useEffect)((function(){}),[]),Object(A.jsxs)("div",{className:"points_container",children:[Object(A.jsx)("img",{className:"points_page",src:N,alt:"points"}),Object(A.jsx)("div",{className:"messaging_for_points",children:Object(A.jsxs)("h2",{className:"msg_text",children:["YOU GOT ",t,"/5 NOT QUITE ENOUGH! TRY AGAIN FOR YOUR CHANCE TO WIN!"]})}),Object(A.jsx)("div",{className:"next_btn_ ",children:Object(A.jsx)(u,{class:"short",text:"TRY AGAIN",link:"/quiz",color:"#D9442A"})})]})},M=function(e){Object(o.f)(),localStorage.getItem("points");return Object(n.useEffect)((function(){}),[]),Object(A.jsxs)("div",{className:"points_container",children:[Object(A.jsx)("img",{className:"points_page",src:N,alt:"points"}),Object(A.jsx)("div",{className:"messaging_for_points",children:Object(A.jsx)("h2",{className:"msg_text",children:"THANK YOU FOR TAKING OUR QUIZ"})}),Object(A.jsx)("div",{className:"next_btn_ ",children:Object(A.jsx)(u,{class:"short",text:"PLAY AGAIN",link:"/quiz",color:"#D9442A"})})]})};var B=function(){return Object(A.jsx)(r.a,{basename:"/watermelon",children:Object(A.jsxs)(o.c,{children:[Object(A.jsx)(o.a,{path:"/",exact:!0,strict:!0,component:j}),Object(A.jsx)(o.a,{path:"/points",exact:!0,strict:!0,component:D}),Object(A.jsx)(o.a,{path:"/roomba-prize",exact:!0,strict:!0,component:I}),Object(A.jsx)(o.a,{path:"/educational-video",exact:!0,strict:!0,component:g}),Object(A.jsx)(o.a,{path:"/watermelon",exact:!0,strict:!0,component:h}),Object(A.jsx)(o.a,{path:"/Quiz",exact:!0,strict:!0,component:E.a}),Object(A.jsx)(o.a,{path:"/data-capture",exact:!0,strict:!0,component:C}),Object(A.jsx)(o.a,{path:"/instructions",exact:!0,strict:!0,component:w}),Object(A.jsx)(o.a,{path:"/ThanksForEntry",exact:!0,strict:!0,component:M})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(B,{})}),document.getElementById("root")),R()}},[[43,1,2]]]);
//# sourceMappingURL=main.4320a8ab.chunk.js.map