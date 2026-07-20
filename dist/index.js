"use strict";var E=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var _=E(function(U,k){
var h=require('@stdlib/math-base-special-abs/dist');function M(i,e,s,c,r,v,p,o,d,F,b,x,j,l,w,y){var u,R,m,g,n,a,q,t,f;if(i===0)return 0;for(m=j,q=y,t=0;t<i;t++)l[q]=t,t<i-2&&(b[m]=0),q+=w,m+=x;for(m=j,q=y,n=c,a=p,g=F,t=0;t<i-2;t++)h(r[a])>=h(e[n])?r[a]!==0&&(u=e[n]/r[a],e[n]=u,r[a+v]=r[a+v]-u*o[g]):(u=r[a]/e[n],r[a]=e[n],e[n]=u,R=o[g],f=a+v,o[g]=r[f],r[f]=R-u*r[f],f=g+d,b[m]=o[f],o[f]*=-u,l[q]=t+1),a+=v,n+=s,g+=d,m+=x,q+=w;for(i>1&&(t=i-2,h(r[a])>=h(e[n])?r[a]!==0&&(u=e[n]/r[a],e[n]=u,r[a+v]=r[a+v]-u*o[g]):(u=r[a]/e[n],r[a]=e[n],e[n]=u,R=o[g],f=a+v,o[g]=r[f],r[f]=R-u*r[f],l[q]=t+1)),a=p,t=0;t<i;t++){if(r[a]===0)return t;a+=v}return 0}k.exports=M
});var A=E(function(D,z){
var Q=require('@stdlib/error-tools-fmtprodmsg/dist'),S=_();function T(i,e,s,c,r,v){if(i<0)throw new RangeError(Q('2I9G7',i));return S(i,e,1,0,s,1,0,c,1,0,r,1,0,v,1,0)}z.exports=T
});var C=E(function(rr,B){
var W=require('@stdlib/error-tools-fmtprodmsg/dist'),X=_();function Y(i,e,s,c,r,v,p,o,d,F,b,x,j,l,w,y){if(i<0)throw new RangeError(W('2I9G7',i));return X(i,e,s,c,r,v,p,o,d,F,b,x,j,l,w,y)}B.exports=Y
});var J=E(function(er,H){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),$=C();Z(G,"ndarray",$);H.exports=G
});var V=require("path").join,P=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),N=J(),O,K=P(V(__dirname,"./native.js"));I(K)?O=N:O=K;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
