"use strict";var s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var n=(t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})},x=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of i(e))!u.call(t,o)&&o!==r&&s(t,o,{get:()=>e[o],enumerable:!(l=d(e,o))||l.enumerable});return t};var y=t=>x(s({},"__esModule",{value:!0}),t);var f={};n(f,{hardhatAddresses:()=>a,helloWorldABI:()=>c});module.exports=y(f);var c=[{stateMutability:"pure",type:"function",inputs:[],name:"sayHello",outputs:[{name:"",internalType:"string",type:"string"}]}];var a={};n(a,{HelloWorld:()=>b});var b="0x3ca5269b5c54d4c807ca0df7eeb2cb7a5327e77d";0&&(module.exports={hardhatAddresses,helloWorldABI});
//# sourceMappingURL=index.js.map