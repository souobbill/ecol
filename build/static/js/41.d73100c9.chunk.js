(this["webpackJsonpstudent-scheduler"]=this["webpackJsonpstudent-scheduler"]||[]).push([[41],{151:function(t,n,c){"use strict";c.d(n,"b",(function(){return e})),c.d(n,"a",(function(){return a}));var e="https://meet.appui.io:8443",a={GRANT_TYPE:"client_credentials",CLIENT_ID:"1095225836707-p73rgbikb2dbniu8pjdgso14slpir3nf.apps.googleusercontent.com",CLIENT_SECRET:"QBkD6wvItNsLttKtucXjWV1V"}},152:function(t,n,c){"use strict";c.d(n,"F",(function(){return r})),c.d(n,"E",(function(){return u})),c.d(n,"x",(function(){return i})),c.d(n,"L",(function(){return s})),c.d(n,"z",(function(){return f})),c.d(n,"y",(function(){return d})),c.d(n,"w",(function(){return l})),c.d(n,"G",(function(){return h})),c.d(n,"K",(function(){return g})),c.d(n,"B",(function(){return p})),c.d(n,"D",(function(){return b})),c.d(n,"r",(function(){return m})),c.d(n,"p",(function(){return v})),c.d(n,"q",(function(){return D})),c.d(n,"s",(function(){return E})),c.d(n,"t",(function(){return y})),c.d(n,"A",(function(){return x})),c.d(n,"v",(function(){return z})),c.d(n,"C",(function(){return j})),c.d(n,"i",(function(){return k})),c.d(n,"c",(function(){return I})),c.d(n,"b",(function(){return T})),c.d(n,"d",(function(){return C})),c.d(n,"m",(function(){return N})),c.d(n,"u",(function(){return O})),c.d(n,"n",(function(){return L})),c.d(n,"h",(function(){return S})),c.d(n,"j",(function(){return w})),c.d(n,"k",(function(){return M})),c.d(n,"g",(function(){return R})),c.d(n,"e",(function(){return _})),c.d(n,"f",(function(){return P})),c.d(n,"O",(function(){return J})),c.d(n,"M",(function(){return B})),c.d(n,"N",(function(){return A})),c.d(n,"J",(function(){return F})),c.d(n,"I",(function(){return K})),c.d(n,"a",(function(){return q})),c.d(n,"P",(function(){return G})),c.d(n,"o",(function(){return U})),c.d(n,"l",(function(){return V})),c.d(n,"H",(function(){return H}));var e=c(56),a=c.n(e),o=c(151),r=(btoa(o.a.CLIENT_ID+":"+o.a.CLIENT_SECRET),function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"availabilityId";return a.a.get("".concat(o.b,"/search/student-bookings?").concat(n,"=").concat(t)).then((function(t){return console.log(t.data),t.data})).catch((function(t){}))}),u=function(t,n,c,e,r,u){return a.a.get("".concat(o.b,"/search/student-bookings?startDate=").concat(t,"&endDate=").concat(n,"&page=").concat(c,"&size=").concat(e,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},i=function(t,n,c,e,r,u){return a.a.get("".concat(o.b,"/search/student-parents?page=").concat(c,"&size=").concat(e,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},s=function(t){return a.a.get("".concat(o.b,"/tenant-profile/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},f=function(t,n,c,e,r,u,i,s){return a.a.get("".concat(o.b,"/search/schedules?gradeMin=").concat(t,"&gradeMax=").concat(n,"&startDate=").concat(c,"&endDate=").concat(e,"&page=").concat(r,"&size=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},d=function(t){JSON.parse(localStorage.getItem("tenant"+JSON.parse(localStorage.getItem("user")).id));return a.a.get("".concat(o.b,"/search/schedules?gradeMin=",0,"&gradeMax=",100,"&page=").concat(0,"&size=").concat(100,"&sort=").concat("startDate",",").concat("asc")).then((function(t){return t.data}))},l=function(){return a.a.get("http://ip-api.com/json").then((function(t){return t.data}))},h=function(t,n,c,e,r,u){return a.a.get("".concat(o.b,"/search/student-profiles?startDate=").concat(t,"&endDate=").concat(n,"&page=").concat(c,"&size=").concat(e,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},g=function(t,n,c,e,r,u){return a.a.get("".concat(o.b,"/search/teacher-profiles?startDate=").concat(t,"&endDate=").concat(n,"page=").concat(c,"&size=").concat(e,"&sort=").concat(r,",").concat(u||"asc")).then((function(t){return t.data})).catch((function(t){}))},p=function(t,n,c,e,r,u,i){return a.a.get("".concat(o.b,"/search/customer-messages?category=").concat(t,"&startDate=").concat(n,"&endDate=").concat(c,"&page=").concat(e,"&size=").concat(r,"&sort=").concat(u,",").concat(i||"asc")).then((function(t){return t.data})).catch((function(t){}))},b=function(t){return a.a.get("".concat(o.b,"/student-bookings/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},m=function(t,n,c,e,r,u,i,s){return a.a.get("".concat(o.b,"/search/student-bookings?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(c,"&page=").concat(e,"&size=").concat(r,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},v=function(t,n,c,e,r,u,i){return a.a.get("".concat(o.b,"/search/student-parents?email=").concat(t,"&page=").concat(e,"&size=").concat(r,"&sort=").concat(u,",").concat(i||"asc")).then((function(t){return t.data})).catch((function(t){}))},D=function(t,n,c,e,r,u,i,s){return a.a.get("".concat(o.b,"/search/schedules?gradeMin=").concat(t,"&gradeMax=").concat(n,"&startDate=").concat(c,"&endDate=").concat(e,"&page=").concat(r,"&size=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},E=function(t,n,c,e,r,u,i,s){return a.a.get("".concat(o.b,"/search/student-profiles?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(c,"&page=").concat(e,"&size=").concat(r,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},y=function(t,n,c,e,r,u,i,s){return a.a.get("".concat(o.b,"/search/teacher-profiles?firstName=").concat(t,"&startDate=").concat(n,"&endDate=").concat(c,"&page=").concat(e,"&size=").concat(r,"&tag=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},x=function(t,n,c,e,r,u,i,s){return a.a.get("".concat(o.b,"/search/customer-messages?category=").concat(t,"&firstName=").concat(n,"&startDate=").concat(c,"&endDate=").concat(e,"&page=").concat(r,"&size=").concat(u,"&sort=").concat(i,",").concat(s||"asc")).then((function(t){return t.data})).catch((function(t){}))},z=function(t){return a.a.get("".concat(o.b,"/search/student-profiles?parentId=").concat(t)).then((function(t){return t.data}))},j=function(t,n,c,e,r){return a.a.get("".concat(o.b,"/search/customer-message-templates?category=").concat(t,"&page=").concat(n,"&size=").concat(c)).then((function(t){return t.data})).catch((function(t){}))},k=function(t){return a.a.get("".concat(o.b,"/student-bookings/disable/").concat(t)).then((function(t){return t.data})).catch((function(t){}))},I=function(t,n){var c=[];n.split(",").forEach((function(t){var n={};n.id=t,c.push(n)}));var e={studentBookings:c};return a.a.patch("".concat(o.b,"/teacher-availability/").concat(t),e).then((function(t){return t.data})).catch((function(t){}))},T=function(t,n){var c={teacherProfile:{conferenceUrl:n}};return a.a.patch("".concat(o.b,"/teacher-availability/").concat(t),c).then((function(t){return t.data})).catch((function(t){}))},C=function(t){return a.a.get("".concat(o.b,"/bridge?open=").concat(t)).then((function(t){return t.data})).catch((function(t){}))},N=function(t,n){return a.a.get("".concat(o.b,"/student-bookings/update/").concat(t,"?subject=").concat(n)).then((function(t){return t})).catch((function(t){}))},O=function(t){return a.a.get("".concat(o.b,"/student-booking/").concat(t)).then((function(t){return t})).catch((function(t){}))},L=function(t,n,c){return a.a.get("".concat(o.b,"/teachers_availabilities/update/").concat(t,"?subjects=").concat(n,"&grades=").concat(c)).then((function(t){return t})).catch((function(t){}))},S=function(t){var n=t.split(","),c="";return n.forEach((function(t,e){e==n.length-1?c+="id="+t:c+="id="+t+"&"})),a.a.delete("".concat(o.b,"/schedule?").concat(c)).then((function(t){return t})).catch((function(t){return console.log(t)}))},w=function(t){var n=t.split(","),c="";return n.forEach((function(t,e){e==n.length-1?c+="id="+t:c+="id="+t+"&"})),a.a.delete("".concat(o.b,"/schedule?").concat(c)).then((function(t){return t})).catch((function(t){return console.log(t)}))},M=function(t){var n=t.split(","),c="";return n.forEach((function(t,e){e==n.length-1?c+="id="+t:c+="id="+t+"&"})),a.a.delete("".concat(o.b,"/schedule?").concat(c)).then((function(t){return t})).catch((function(t){return console.log(t)}))},R=function(t){var n=t.split(","),c="";return n.forEach((function(t,e){e==n.length-1?c+="id="+t:c+="id="+t+"&"})),a.a.delete("".concat(o.b,"/student-parent?").concat(c)).then((function(t){return t})).catch((function(t){return console.log(t)}))},_=function(t){var n=t.split(","),c="";return n.forEach((function(t,e){e==n.length-1?c+="id="+t:c+="id="+t+"&"})),a.a.delete("".concat(o.b,"/teacher-availability?").concat(c)).then((function(t){return t})).catch((function(t){return console.log(t)}))},P=function(t){var n=t.split(","),c="";return n.forEach((function(t,e){e==n.length-1?c+="id="+t:c+="id="+t+"&"})),a.a.delete("".concat(o.b,"/student-booking?").concat(c)).then((function(t){return t})).catch((function(t){return console.log(t)}))},J=function(t){return a.a.post("".concat(o.b,"/message\u200b/").concat(t,"/students")).then((function(t){return t})).catch((function(t){return console.log(t)}))},B=function(t){return a.a.post("".concat(o.b,"/message/").concat(t,"/bookings")).then((function(t){return t})).catch((function(t){return console.log(t)}))},A=function(t,n){return a.a.post("".concat(o.b,"/message/booking/").concat(t),n,{headers:{"Content-Length":0,"Content-Type":"text/plain"},responseType:"text"}).then((function(t){return t})).catch((function(t){return console.log(t)}))},F=function(t,n,c,e){return a.a.get("".concat(o.b,"/search/tags?page=").concat(t,"&size=").concat(n,"&sort=").concat(c,",").concat(e||"asc")).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},K=function(t){return a.a.get("".concat(o.b,"/search/tags?name=").concat(t)).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},q=function(t){return a.a.post("".concat(o.b,"/tag"),t).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},G=function(t,n){return a.a.patch("".concat(o.b,"/tag/").concat(t),n).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},U=function(t){return a.a.post("".concat(o.b,"/tag/enable"),t).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},V=function(t){return a.a.post("".concat(o.b,"/tag/disable"),t).then((function(t){return t.data})).catch((function(t){return console.log(t)}))},H=function(t,n,c,e,r,u){return a.a.get("".concat(o.b,"/search/tags?page=").concat(t,"&size=").concat(n,"&sort=").concat(c,",").concat(e,"&name=").concat(r,"&createDate=").concat(u)).then((function(t){return t.data})).catch((function(t){return console.log(t)}))}},546:function(t,n,c){"use strict";c.r(n);var e=c(43),a=c(72),o=c(24),r=c(0),u=c.n(r),i=c(548),s=c(549),f=c(550),d=c(210),l=c(11),h=c(152),g=(c(103),function(t,n){return Object(o.a)(Object(o.a)({},t),{},Object(a.a)({},n.name,n.value))});n.default=function(){var t=Object(l.g)(),n=Object(r.useReducer)(g,{}),c=Object(e.a)(n,2),a=c[0],o=c[1],p=i.a.useForm(),b=Object(e.a)(p,1)[0],m=Object(r.useState)(!1),v=Object(e.a)(m,2),D=v[0],E=v[1],y=function(t){o({name:t.target.name,value:t.target.value})};return u.a.createElement("div",null,u.a.createElement(s.a,{ghost:!1,title:u.a.createElement("p",{style:{fontSize:"3em",textAlign:"center",marginTop:"20px",marginBottom:"20px"}},"Create Tag"),extra:[]},u.a.createElement(i.a,{form:b,autoComplete:"off",onFinish:function(){if(a.name)if(a.name.toString().length<=0)alert("Please, fill the form 1!");else{E(!0);var n={name:a.name,url:a.url};Object(h.a)(n).then((function(n){t.push("/tagList")})).finally((function(){return E(!1)}))}else alert("Please, fill the form 2!")},layout:"vertical",onKeyPress:function(t){13===t.which&&t.preventDefault()},style:{width:"80%",marginLeft:"10%"}},u.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.a.createElement(i.a.Item,{label:"Name",required:!0,style:{flex:1,marginRight:"40px"}},u.a.createElement(f.a,{type:"text",name:"name",onChange:y}))),u.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.a.createElement(i.a.Item,{label:"Url",style:{flex:1,marginRight:"40px"}},u.a.createElement(f.a,{type:"url",name:"url",onChange:y}))),u.a.createElement(i.a.Item,{style:{flex:1,marginRight:"40px",marginTop:"20px"}},u.a.createElement(d.a,{disabled:D,type:"primary",size:"large",htmlType:"submit"},D?"Loading...":"Create a Tag")))))}}}]);
//# sourceMappingURL=41.d73100c9.chunk.js.map