import{u as x,q as h,r as l,i as k,o,c as r,b as s,d as y,w as b,k as p,l as c,m as v,a as d,p as S,j as V}from"./index-1d5f5eb5.js";import{U as B,S as C}from"./Show-38d3ccd5.js";import{B as _}from"./Btn-7549b577.js";/* empty css                                                            */const q={class:"signin"},U={class:"container"},I=s("h2",{class:"signin-title"},"Вход",-1),N={key:0,style:{"text-align":"center","margin-top":"20px",color:"red"}},M=s("span",{class:"signin-text"},"Электронная почта",-1),T={class:"signin-label"},$=s("span",{class:"signin-text"},"Пароль",-1),j={class:"signin-label"},D={class:"signin-wrapper"},E={style:{"text-align":"center","margin-top":"20px","font-weight":"900"}},H={__name:"SignIn",setup(L){const g=x(),m=h(),a=l(""),u=l(""),n=l(!1),i=l(!1),f=async()=>{i.value=!1,await g.dispatch("signIn",{username:u.value,password:a.value}),g.state.userInfo?(i.value=!1,m.push("/cabinet")):(console.log("qwerty"),i.value=!0)};return(R,e)=>{const w=k("router-link");return o(),r("section",q,[s("div",U,[I,i.value?(o(),r("p",N," Вы ввели неправильный логин или пароль ")):y("",!0),s("form",{onSubmit:e[5]||(e[5]=b(()=>{},["prevent"])),class:"signin-content"},[M,s("label",T,[p(s("input",{type:"text",placeholder:"Введите",class:"signin-input",required:"","onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t)},null,512),[[c,u.value]])]),$,s("label",j,[s("div",D,[n.value?p((o(),r("input",{key:0,type:"text",placeholder:"Введите пароль",required:"",class:"signin-pass signin-input","onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t)},null,512)),[[c,a.value]]):p((o(),r("input",{key:1,type:"password",placeholder:"Введите пароль",required:"",class:"signin-pass signin-input","onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t)},null,512)),[[c,a.value]]),n.value?(o(),v(B,{key:2,onClick:e[3]||(e[3]=t=>n.value=!n.value),class:"signin-show"})):(o(),v(C,{key:3,onClick:e[4]||(e[4]=t=>n.value=!n.value),class:"signin-show"}))])]),d(_,{onClick:f,class:"signin-btn",text:"Вход"}),d(_,{class:"signin-btn second",disabled:!1,text:"Отмена"}),s("div",E,[d(w,{to:"/signup"},{default:S(()=>[V("Зарегистрироваться")]),_:1})])],32)])])}}};export{H as default};
