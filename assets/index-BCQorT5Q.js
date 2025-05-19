var Od=Object.defineProperty;var bc=r=>{throw TypeError(r)};var Fd=(r,e,t)=>e in r?Od(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var en=(r,e,t)=>Fd(r,typeof e!="symbol"?e+"":e,t),Bd=(r,e,t)=>e.has(r)||bc("Cannot "+t);var Ec=(r,e,t)=>e.has(r)?bc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var lr=(r,e,t)=>(Bd(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const zd="modulepreload",kd=function(r){return"/crepe-maker/"+r},wc={},Hd=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(h=>{if(h=kd(h),h in wc)return;wc[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":zd,u||(f.as="script"),f.crossOrigin="",f.href=h,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((p,_)=>{f.addEventListener("load",p),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="169",rs={ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,Tc=1,Gd=2,_u=1,Wd=2,In=3,zn=0,qt=1,Bt=2,ni=0,os=1,Ac=2,Cc=3,Rc=4,Xd=5,vi=100,qd=101,Yd=102,Kd=103,Zd=104,Jd=200,$d=201,jd=202,Qd=203,Aa=204,Ca=205,ef=206,tf=207,nf=208,sf=209,rf=210,of=211,af=212,lf=213,cf=214,Ra=0,Pa=1,La=2,us=3,Ia=4,Da=5,Na=6,Ua=7,mo=0,hf=1,uf=2,ii=0,df=1,ff=2,pf=3,mf=4,gf=5,_f=6,xf=7,Pc="attached",yf="detached",Sl=300,Ei=301,wi=302,so=303,ro=304,ir=306,kn=1e3,Nn=1001,Zs=1002,Dt=1003,bl=1004,es=1005,Wt=1006,Xs=1007,xn=1008,Hn=1009,xu=1010,yu=1011,Js=1012,El=1013,oi=1014,jt=1015,sr=1016,wl=1017,Tl=1018,ds=1020,vu=35902,Mu=1021,Su=1022,Xt=1023,bu=1024,Eu=1025,as=1026,fs=1027,Al=1028,go=1029,wu=1030,Cl=1031,Rl=1033,Jr=33776,$r=33777,jr=33778,Qr=33779,Oa=35840,Fa=35841,Ba=35842,za=35843,ka=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Ka=37813,Za=37814,Ja=37815,$a=37816,ja=37817,Qa=37818,el=37819,tl=37820,nl=37821,eo=36492,il=36494,sl=36495,Tu=36283,rl=36284,ol=36285,al=36286,$s=2300,js=2301,No=2302,Lc=2400,Ic=2401,Dc=2402,vf=2500,Mf=0,Au=1,ll=2,Sf=3200,bf=3201,Ri=0,Ef=1,ei="",Ft="srgb",Ct="srgb-linear",Pl="display-p3",_o="display-p3-linear",oo="linear",ut="srgb",ao="rec709",lo="p3",Ni=7680,Nc=519,wf=512,Tf=513,Af=514,Cu=515,Cf=516,Rf=517,Pf=518,Lf=519,cl=35044,Uc="300 es",Un=2e3,co=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const ls=Math.PI/180,ps=180/Math.PI;function ln(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Ll(r,e){return(r%e+e)%e}function If(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function Df(r,e,t){return r!==e?(t-r)/(e-r):0}function qs(r,e,t){return(1-t)*r+t*e}function Nf(r,e,t,n){return qs(r,e,1-Math.exp(-t*n))}function Uf(r,e=1){return e-Math.abs(Ll(r,e*2)-e)}function Of(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ff(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Bf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zf(r,e){return r+Math.random()*(e-r)}function kf(r){return r*(.5-Math.random())}function Hf(r){r!==void 0&&(Oc=r);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(r){return r*ls}function Gf(r){return r*ps}function Wf(r){return(r&r-1)===0&&r!==0}function Xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yf(r,e,t,n,s){const o=Math.cos,a=Math.sin,l=o(t/2),c=a(t/2),h=o((e+n)/2),u=a((e+n)/2),d=o((e-n)/2),f=a((e-n)/2),p=o((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":r.set(l*u,c*d,c*f,l*h);break;case"YZY":r.set(c*f,l*u,c*d,l*h);break;case"ZXZ":r.set(c*d,c*f,l*u,l*h);break;case"XZX":r.set(l*u,c*_,c*p,l*h);break;case"YXY":r.set(c*p,l*u,c*_,l*h);break;case"ZYZ":r.set(c*_,c*p,l*u,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ru={DEG2RAD:ls,RAD2DEG:ps,generateUUID:ln,clamp:xt,euclideanModulo:Ll,mapLinear:If,inverseLerp:Df,lerp:qs,damp:Nf,pingpong:Uf,smoothstep:Of,smootherstep:Ff,randInt:Bf,randFloat:zf,randFloatSpread:kf,seededRandom:Hf,degToRad:Vf,radToDeg:Gf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Yf,normalize:it,denormalize:mn};class q{constructor(e=0,t=0){q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*s+e.x,this.y=o*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,o,a,l,c,h){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,a,l,c,h)}set(e,t,n,s,o,a,l,c,h){const u=this.elements;return u[0]=e,u[1]=s,u[2]=l,u[3]=t,u[4]=o,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],u=n[4],d=n[7],f=n[2],p=n[5],_=n[8],x=s[0],m=s[3],g=s[6],v=s[1],y=s[4],M=s[7],L=s[2],T=s[5],A=s[8];return o[0]=a*x+l*v+c*L,o[3]=a*m+l*y+c*T,o[6]=a*g+l*M+c*A,o[1]=h*x+u*v+d*L,o[4]=h*m+u*y+d*T,o[7]=h*g+u*M+d*A,o[2]=f*x+p*v+_*L,o[5]=f*m+p*y+_*T,o[8]=f*g+p*M+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*l*h-n*o*u+n*l*c+s*o*h-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=u*a-l*h,f=l*c-u*o,p=h*o-a*c,_=t*d+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(s*h-u*n)*x,e[2]=(l*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*o-l*t)*x,e[6]=p*x,e[7]=(n*c-h*t)*x,e[8]=(a*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,a,l){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*a+h*l)+a+e,-s*h,s*c,-s*(-h*a+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new He;function Pu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Kf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ts(r,e){return new Kf[r](e)}function Qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zf(){const r=Qs("canvas");return r.style.display="block",r}const Fc={};function to(r){r in Fc||(Fc[r]=!0,console.warn(r))}function Jf(r,e,t){return new Promise(function(n,s){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function $f(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bc=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[Ct]:{transfer:oo,primaries:ao,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Ft]:{transfer:ut,primaries:ao,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_o]:{transfer:oo,primaries:lo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(zc),fromReference:r=>r.applyMatrix3(Bc)},[Pl]:{transfer:ut,primaries:lo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(zc),fromReference:r=>r.applyMatrix3(Bc).convertLinearToSRGB()}},Qf=new Set([Ct,_o]),Ze={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Qf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Cs[e].toReference,s=Cs[t].fromReference;return s(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Cs[r].primaries},getTransfer:function(r){return r===ei?oo:Cs[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Cs[e].luminanceCoefficients)}};function cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class ep{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Qs("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=cs(o[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tp=0;class ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?o.push(Fo(s[a].image)):o.push(Fo(s[a]))}else o=Fo(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Fo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ep.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let np=0;class Mt extends Pi{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Nn,s=Nn,o=Wt,a=xn,l=Xt,c=Hn,h=Mt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ln(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Sl;Mt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,s=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const c=e.elements,h=c[0],u=c[4],d=c[8],f=c[1],p=c[5],_=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(h+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,M=(p+1)/2,L=(g+1)/2,T=(u+f)/4,A=(d+x)/4,I=(_+m)/4;return y>M&&y>L?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=T/n,o=A/n):M>L?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=T/s,o=I/s):L<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),n=A/o,s=I/o),this.set(n,s,o,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((h+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ip extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Mt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends ip{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lu extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,a,l){let c=n[s+0],h=n[s+1],u=n[s+2],d=n[s+3];const f=o[a+0],p=o[a+1],_=o[a+2],x=o[a+3];if(l===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d;return}if(l===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(d!==x||c!==f||h!==p||u!==_){let m=1-l;const g=c*f+h*p+u*_+d*x,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,g*v);m=Math.sin(m*T)/L,l=Math.sin(l*T)/L}const M=l*v;if(c=c*m+f*M,h=h*m+p*M,u=u*m+_*M,d=d*m+x*M,m===1-l){const L=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=L,h*=L,u*=L,d*=L}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,a){const l=n[s],c=n[s+1],h=n[s+2],u=n[s+3],d=o[a],f=o[a+1],p=o[a+2],_=o[a+3];return e[t]=l*_+u*d+c*p-h*f,e[t+1]=c*_+u*f+h*d-l*p,e[t+2]=h*_+u*p+l*f-c*d,e[t+3]=u*_-l*d-c*f-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,a=e._order,l=Math.cos,c=Math.sin,h=l(n/2),u=l(s/2),d=l(o/2),f=c(n/2),p=c(s/2),_=c(o/2);switch(a){case"XYZ":this._x=f*u*d+h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d+f*p*_;break;case"YZX":this._x=f*u*d+h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d-f*p*_;break;case"XZY":this._x=f*u*d-h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],a=t[1],l=t[5],c=t[9],h=t[2],u=t[6],d=t[10],f=n+l+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-h)*p,this._z=(a-s)*p}else if(n>l&&n>d){const p=2*Math.sqrt(1+n-l-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(o+h)/p}else if(l>d){const p=2*Math.sqrt(1+l-n-d);this._w=(o-h)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-l);this._w=(a-s)/p,this._x=(o+h)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,a=e._w,l=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*l+s*h-o*c,this._y=s*u+a*c+o*l-n*h,this._z=o*u+a*h+n*c-s*l,this._w=a*u-n*l-s*c-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,a=this._w;let l=a*e._w+n*e._x+s*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=s,this._z=o,this;const c=1-l*l;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,l),d=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,a=e.y,l=e.z,c=e.w,h=2*(a*s-l*n),u=2*(l*t-o*s),d=2*(o*n-a*t);return this.x=t+c*h+a*d-l*u,this.y=n+c*u+l*h-o*d,this.z=s+c*d+o*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-o*l,this.y=o*a-n*c,this.z=n*l-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new R,kc=new vn;class kt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(o,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const s=e.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),hr.subVectors(this.max,Rs),Oi.subVectors(e.a,Rs),Fi.subVectors(e.b,Rs),Bi.subVectors(e.c,Rs),Xn.subVectors(Fi,Oi),qn.subVectors(Bi,Fi),hi.subVectors(Oi,Bi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-hi.z,hi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,hi.z,0,-hi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-hi.y,hi.x,0];return!zo(t,Oi,Fi,Bi,hr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,Oi,Fi,Bi,hr))?!1:(ur.crossVectors(Xn,qn),t=[ur.x,ur.y,ur.z],zo(t,Oi,Fi,Bi,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,cr=new kt,Oi=new R,Fi=new R,Bi=new R,Xn=new R,qn=new R,hi=new R,Rs=new R,hr=new R,ur=new R,ui=new R;function zo(r,e,t,n,s){for(let o=0,a=r.length-3;o<=a;o+=3){ui.fromArray(r,o);const l=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),c=e.dot(ui),h=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>l)return!1}return!0}const rp=new kt,Ps=new R,ko=new R;class Nt{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rp.setFromPoints(e).getCenter(n);let s=0;for(let o=0,a=e.length;o<a;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(ko)),this.expandByPoint(Ps.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new R,Ho=new R,dr=new R,Yn=new R,Vo=new R,fr=new R,Go=new R;class Ms{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ho.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ho);const o=e.distanceTo(t)*.5,a=-this.direction.dot(dr),l=Yn.dot(this.direction),c=-Yn.dot(dr),h=Yn.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*c-l,f=a*l-c,_=o*u,d>=0)if(f>=-_)if(f<=_){const x=1/u;d*=x,f*=x,p=d*(d+a*f+2*l)+f*(a*d+f+2*c)+h}else f=o,d=Math.max(0,-(a*f+l)),p=-d*d+f*(f+2*c)+h;else f=-o,d=Math.max(0,-(a*f+l)),p=-d*d+f*(f+2*c)+h;else f<=-_?(d=Math.max(0,-(-a*o+l)),f=d>0?-o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+h):f<=_?(d=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+h):(d=Math.max(0,-(a*o+l)),f=d>0?o:Math.min(Math.max(-o,-c),o),p=-d*d+f*(f+2*c)+h);else f=a>0?-o:o,d=Math.max(0,-(a*f+l)),p=-d*d+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ho).addScaledVector(dr,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,o=e.radius*e.radius;if(s>o)return null;const a=Math.sqrt(o-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,a,l,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,s=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,s=(e.min.x-f.x)*h),u>=0?(o=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||o>s||((o>n||isNaN(n))&&(n=o),(a<s||isNaN(s))&&(s=a),d>=0?(l=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(l=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,o){Vo.subVectors(t,e),fr.subVectors(n,e),Go.crossVectors(Vo,fr);let a=this.direction.dot(Go),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const c=l*this.direction.dot(fr.crossVectors(Yn,fr));if(c<0)return null;const h=l*this.direction.dot(Vo.cross(Yn));if(h<0||c+h>a)return null;const u=-l*Yn.dot(Go);return u<0?null:this.at(u/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,s,o,a,l,c,h,u,d,f,p,_,x,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,a,l,c,h,u,d,f,p,_,x,m)}set(e,t,n,s,o,a,l,c,h,u,d,f,p,_,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=a,g[9]=l,g[13]=c,g[2]=h,g[6]=u,g[10]=d,g[14]=f,g[3]=p,g[7]=_,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),o=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=a*u,p=a*d,_=l*u,x=l*d;t[0]=c*u,t[4]=-c*d,t[8]=h,t[1]=p+_*h,t[5]=f-x*h,t[9]=-l*c,t[2]=x-f*h,t[6]=_+p*h,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*d,_=h*u,x=h*d;t[0]=f+x*l,t[4]=_*l-p,t[8]=a*h,t[1]=a*d,t[5]=a*u,t[9]=-l,t[2]=p*l-_,t[6]=x+f*l,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*d,_=h*u,x=h*d;t[0]=f-x*l,t[4]=-a*d,t[8]=_+p*l,t[1]=p+_*l,t[5]=a*u,t[9]=x-f*l,t[2]=-a*h,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*d,_=l*u,x=l*d;t[0]=c*u,t[4]=_*h-p,t[8]=f*h+x,t[1]=c*d,t[5]=x*h+f,t[9]=p*h-_,t[2]=-h,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*h,_=l*c,x=l*h;t[0]=c*u,t[4]=x-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-l*u,t[2]=-h*u,t[6]=p*d+_,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,p=a*h,_=l*c,x=l*h;t[0]=c*u,t[4]=-d,t[8]=h*u,t[1]=f*d+x,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=l*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(op,e,ap)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Kn.crossVectors(n,Zt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Kn.crossVectors(n,Zt)),Kn.normalize(),pr.crossVectors(Zt,Kn),s[0]=Kn.x,s[4]=pr.x,s[8]=Zt.x,s[1]=Kn.y,s[5]=pr.y,s[9]=Zt.y,s[2]=Kn.z,s[6]=pr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],u=n[1],d=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],g=n[14],v=n[3],y=n[7],M=n[11],L=n[15],T=s[0],A=s[4],I=s[8],F=s[12],S=s[1],E=s[5],V=s[9],k=s[13],G=s[2],Q=s[6],z=s[10],te=s[14],X=s[3],de=s[7],me=s[11],ge=s[15];return o[0]=a*T+l*S+c*G+h*X,o[4]=a*A+l*E+c*Q+h*de,o[8]=a*I+l*V+c*z+h*me,o[12]=a*F+l*k+c*te+h*ge,o[1]=u*T+d*S+f*G+p*X,o[5]=u*A+d*E+f*Q+p*de,o[9]=u*I+d*V+f*z+p*me,o[13]=u*F+d*k+f*te+p*ge,o[2]=_*T+x*S+m*G+g*X,o[6]=_*A+x*E+m*Q+g*de,o[10]=_*I+x*V+m*z+g*me,o[14]=_*F+x*k+m*te+g*ge,o[3]=v*T+y*S+M*G+L*X,o[7]=v*A+y*E+M*Q+L*de,o[11]=v*I+y*V+M*z+L*me,o[15]=v*F+y*k+M*te+L*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],a=e[1],l=e[5],c=e[9],h=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],x=e[7],m=e[11],g=e[15];return _*(+o*c*d-s*h*d-o*l*f+n*h*f+s*l*p-n*c*p)+x*(+t*c*p-t*h*f+o*a*f-s*a*p+s*h*u-o*c*u)+m*(+t*h*d-t*l*p-o*a*d+n*a*p+o*l*u-n*h*u)+g*(-s*l*u-t*c*d+t*l*f+s*a*d-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],x=e[13],m=e[14],g=e[15],v=d*m*h-x*f*h+x*c*p-l*m*p-d*c*g+l*f*g,y=_*f*h-u*m*h-_*c*p+a*m*p+u*c*g-a*f*g,M=u*x*h-_*d*h+_*l*p-a*x*p-u*l*g+a*d*g,L=_*d*c-u*x*c-_*l*f+a*x*f+u*l*m-a*d*m,T=t*v+n*y+s*M+o*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(x*f*o-d*m*o-x*s*p+n*m*p+d*s*g-n*f*g)*A,e[2]=(l*m*o-x*c*o+x*s*h-n*m*h-l*s*g+n*c*g)*A,e[3]=(d*c*o-l*f*o-d*s*h+n*f*h+l*s*p-n*c*p)*A,e[4]=y*A,e[5]=(u*m*o-_*f*o+_*s*p-t*m*p-u*s*g+t*f*g)*A,e[6]=(_*c*o-a*m*o-_*s*h+t*m*h+a*s*g-t*c*g)*A,e[7]=(a*f*o-u*c*o+u*s*h-t*f*h-a*s*p+t*c*p)*A,e[8]=M*A,e[9]=(_*d*o-u*x*o-_*n*p+t*x*p+u*n*g-t*d*g)*A,e[10]=(a*x*o-_*l*o+_*n*h-t*x*h-a*n*g+t*l*g)*A,e[11]=(u*l*o-a*d*o-u*n*h+t*d*h+a*n*p-t*l*p)*A,e[12]=L*A,e[13]=(u*x*s-_*d*s+_*n*f-t*x*f-u*n*m+t*d*m)*A,e[14]=(_*l*s-a*x*s-_*n*c+t*x*c+a*n*m-t*l*m)*A,e[15]=(a*d*s-u*l*s+u*n*c-t*d*c-a*n*f+t*l*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,a=e.x,l=e.y,c=e.z,h=o*a,u=o*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,u*l+n,u*c-s*a,0,h*c-s*l,u*c+s*a,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,a){return this.set(1,n,o,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,a=t._y,l=t._z,c=t._w,h=o+o,u=a+a,d=l+l,f=o*h,p=o*u,_=o*d,x=a*u,m=a*d,g=l*d,v=c*h,y=c*u,M=c*d,L=n.x,T=n.y,A=n.z;return s[0]=(1-(x+g))*L,s[1]=(p+M)*L,s[2]=(_-y)*L,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+g))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(_+y)*A,s[9]=(m-v)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const h=1/o,u=1/a,d=1/l;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,o,a,l=Un){const c=this.elements,h=2*o/(t-e),u=2*o/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let p,_;if(l===Un)p=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(l===co)p=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,a,l=Un){const c=this.elements,h=1/(t-e),u=1/(n-s),d=1/(a-o),f=(t+e)*h,p=(n+s)*u;let _,x;if(l===Un)_=(a+o)*d,x=-2*d;else if(l===co)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new R,dn=new Le,op=new R(0,0,0),ap=new R(1,1,1),Kn=new R,pr=new R,Zt=new R,Hc=new Le,Vc=new vn;class cn{constructor(e=0,t=0,n=0,s=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lp=0;const Gc=new R,ki=new vn,Cn=new Le,mr=new R,Ls=new R,cp=new R,hp=new vn,Wc=new R(1,0,0),Xc=new R(0,1,0),qc=new R(0,0,1),Yc={type:"added"},up={type:"removed"},Hi={type:"childadded",child:null},Wo={type:"childremoved",child:null};class at extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new R,t=new cn,n=new vn,s=new R(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new He}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ls,mr,this.up):Cn.lookAt(mr,Ls,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Cn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(up),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,cp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(e.materials,this.material[c]));s.material=l}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(o(e.animations,c))}}if(t){const l=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(l){const c=[];for(const h in l){const u=l[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}at.DEFAULT_UP=new R(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new R,Rn=new R,Xo=new R,Pn=new R,Vi=new R,Gi=new R,Kc=new R,qo=new R,Yo=new R,Ko=new R,Zo=new $e,Jo=new $e,$o=new $e;class $t{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){fn.subVectors(s,t),Rn.subVectors(n,t),Xo.subVectors(e,t);const a=fn.dot(fn),l=fn.dot(Rn),c=fn.dot(Xo),h=Rn.dot(Rn),u=Rn.dot(Xo),d=a*h-l*l;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(h*c-l*u)*f,_=(a*u-l*c)*f;return o.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,o,a,l,c){return this.getBarycoord(e,t,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(l,Pn.z),c)}static getInterpolatedAttribute(e,t,n,s,o,a){return Zo.setScalar(0),Jo.setScalar(0),$o.setScalar(0),Zo.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,n),$o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zo,o.x),a.addScaledVector(Jo,o.y),a.addScaledVector($o,o.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Rn.subVectors(e,t),fn.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),fn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return $t.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let a,l;Vi.subVectors(s,n),Gi.subVectors(o,n),qo.subVectors(e,n);const c=Vi.dot(qo),h=Gi.dot(qo);if(c<=0&&h<=0)return t.copy(n);Yo.subVectors(e,s);const u=Vi.dot(Yo),d=Gi.dot(Yo);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*h;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Vi,a);Ko.subVectors(e,o);const p=Vi.dot(Ko),_=Gi.dot(Ko);if(_>=0&&p<=_)return t.copy(o);const x=p*h-c*_;if(x<=0&&h>=0&&_<=0)return l=h/(h-_),t.copy(n).addScaledVector(Gi,l);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Kc.subVectors(o,s),l=(d-u)/(d-u+(p-_)),t.copy(s).addScaledVector(Kc,l);const g=1/(m+x+f);return a=x*g,l=f*g,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function jo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Ll(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=jo(a,o,e+1/3),this.g=jo(a,o,e),this.b=jo(a,o,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ze.fromWorkingColorSpace(Pt.copy(this),e),Math.round(xt(Pt.r*255,0,255))*65536+Math.round(xt(Pt.g*255,0,255))*256+Math.round(xt(Pt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,o=Pt.b,a=Math.max(n,s,o),l=Math.min(n,s,o);let c,h;const u=(l+a)/2;if(l===a)c=0,h=0;else{const d=a-l;switch(h=u<=.5?d/(a+l):d/(2-a-l),a){case n:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-n)/d+2;break;case o:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ft){Ze.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(gr);const n=qs(Zn.h,gr.h,t),s=qs(Zn.s,gr.s,t),o=qs(Zn.l,gr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new we;we.NAMES=Iu;let dp=0;class wt extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=os,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ca,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(t){const o=s(e.textures),a=s(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new R,_r=new q;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),o=it(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}}class Du extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nu extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ze extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fp=0;const tn=new Le,Qo=new at,Wi=new R,Jt=new kt,Is=new kt,Et=new R;class lt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Nu:Du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new He().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Jt.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const l=t[o];Is.setFromBufferAttribute(l),this.morphTargetsRelative?(Et.addVectors(Jt.min,Is.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,Is.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(Is.min),Jt.expandByPoint(Is.max))}Jt.getCenter(n);let s=0;for(let o=0,a=e.count;o<a;o++)Et.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let o=0,a=t.length;o<a;o++){const l=t[o],c=this.morphTargetsRelative;for(let h=0,u=l.count;h<u;h++)Et.fromBufferAttribute(l,h),c&&(Wi.fromBufferAttribute(e,h),Et.add(Wi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],c=[];for(let I=0;I<n.count;I++)l[I]=new R,c[I]=new R;const h=new R,u=new R,d=new R,f=new q,p=new q,_=new q,x=new R,m=new R;function g(I,F,S){h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,F),d.fromBufferAttribute(n,S),f.fromBufferAttribute(o,I),p.fromBufferAttribute(o,F),_.fromBufferAttribute(o,S),u.sub(h),d.sub(h),p.sub(f),_.sub(f);const E=1/(p.x*_.y-_.x*p.y);isFinite(E)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(E),l[I].add(x),l[F].add(x),l[S].add(x),c[I].add(m),c[F].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,F=v.length;I<F;++I){const S=v[I],E=S.start,V=S.count;for(let k=E,G=E+V;k<G;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new R,M=new R,L=new R,T=new R;function A(I){L.fromBufferAttribute(s,I),T.copy(L);const F=l[I];y.copy(F),y.sub(L.multiplyScalar(L.dot(F))).normalize(),M.crossVectors(T,F);const E=M.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,E)}for(let I=0,F=v.length;I<F;++I){const S=v[I],E=S.start,V=S.count;for(let k=E,G=E+V;k<G;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,o),d.subVectors(s,o),u.cross(d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),l.add(u),c.add(u),h.add(u),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,o),d.subVectors(s,o),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(l,c){const h=l.array,u=l.itemSize,d=l.normalized,f=new h.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){l.isInterleavedBufferAttribute?p=c[x]*l.data.stride+l.offset:p=c[x]*u;for(let g=0;g<u;g++)f[_++]=h[p++]}return new yt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,s=this.attributes;for(const l in s){const c=s[l],h=e(c,n);t.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const c=[],h=o[l];for(let u=0,d=h.length;u<d;u++){const f=h[u],p=e(f,n);c.push(p)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(t))}const o=e.morphAttributes;for(const h in o){const u=[],d=o[h];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Le,di=new Ms,xr=new Nt,Jc=new R,yr=new R,vr=new R,Mr=new R,ea=new R,Sr=new R,$c=new R,br=new R;class rt extends at{constructor(e=new lt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(o&&l){Sr.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const u=l[c],d=o[c];u!==0&&(ea.fromBufferAttribute(d,e),a?Sr.addScaledVector(ea,u):Sr.addScaledVector(ea.sub(t),u))}t.add(Sr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(o),di.copy(e.ray).recast(e.near),!(xr.containsPoint(di.origin)===!1&&(di.intersectSphere(xr,Jc)===null||di.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(o).invert(),di.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let s;const o=this.geometry,a=this.material,l=o.index,c=o.attributes.position,h=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],g=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,L=y;M<L;M+=3){const T=l.getX(M),A=l.getX(M+1),I=l.getX(M+2);s=Er(this,g,e,n,h,u,d,T,A,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,g=x;m<g;m+=3){const v=l.getX(m),y=l.getX(m+1),M=l.getX(m+2);s=Er(this,a,e,n,h,u,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],g=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,L=y;M<L;M+=3){const T=M,A=M+1,I=M+2;s=Er(this,g,e,n,h,u,d,T,A,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,g=x;m<g;m+=3){const v=m,y=m+1,M=m+2;s=Er(this,a,e,n,h,u,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function pp(r,e,t,n,s,o,a,l){let c;if(e.side===qt?c=n.intersectTriangle(a,o,s,!0,l):c=n.intersectTriangle(s,o,a,e.side===zn,l),c===null)return null;br.copy(l),br.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(br);return h<t.near||h>t.far?null:{distance:h,point:br.clone(),object:r}}function Er(r,e,t,n,s,o,a,l,c,h){r.getVertexPosition(l,yr),r.getVertexPosition(c,vr),r.getVertexPosition(h,Mr);const u=pp(r,e,t,n,yr,vr,Mr,$c);if(u){const d=new R;$t.getBarycoord($c,yr,vr,Mr,d),s&&(u.uv=$t.getInterpolatedAttribute(s,l,c,h,d,new q)),o&&(u.uv1=$t.getInterpolatedAttribute(o,l,c,h,d,new q)),a&&(u.normal=$t.getInterpolatedAttribute(a,l,c,h,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:l,b:c,c:h,normal:new R,materialIndex:0};$t.getNormal(yr,vr,Mr,f.normal),u.face=f,u.barycoord=d}return u}class on extends lt{constructor(e=1,t=1,n=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:a};const l=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,o,0),_("z","y","x",1,-1,n,t,-e,a,o,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,o,4),_("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new ze(h,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(d,2));function _(x,m,g,v,y,M,L,T,A,I,F){const S=M/A,E=L/I,V=M/2,k=L/2,G=T/2,Q=A+1,z=I+1;let te=0,X=0;const de=new R;for(let me=0;me<z;me++){const ge=me*E-k;for(let Xe=0;Xe<Q;Xe++){const Je=Xe*S-V;de[x]=Je*v,de[m]=ge*y,de[g]=G,h.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[g]=T>0?1:-1,u.push(de.x,de.y,de.z),d.push(Xe/A),d.push(1-me/I),te+=1}}for(let me=0;me<I;me++)for(let ge=0;ge<A;ge++){const Xe=f+ge+Q*me,Je=f+ge+Q*(me+1),Y=f+(ge+1)+Q*(me+1),ne=f+(ge+1)+Q*me;c.push(Xe,Je,ne),c.push(Je,Y,ne),X+=6}l.addGroup(p,X,F),p+=X,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const n=ms(r[t]);for(const s in n)e[s]=n[s]}return e}function mp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Uu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const gp={clone:ms,merge:Ot};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ou extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new R,jc=new q,Qc=new q;class At extends Ou{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,jc,Qc),t.subVectors(Qc,jc)}setViewOffset(e,t,n,s,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class yp extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new At(Xi,qi,e,t);s.layers=this.layers,this.add(s);const o=new At(Xi,qi,e,t);o.layers=this.layers,this.add(o);const a=new At(Xi,qi,e,t);a.layers=this.layers,this.add(a);const l=new At(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new At(Xi,qi,e,t);c.layers=this.layers,this.add(c);const h=new At(Xi,qi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,a,l,c]=t;for(const h of t)this.remove(h);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,c,h,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dl extends Mt{constructor(e,t,n,s,o,a,l,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:Ei,super(e,t,n,s,o,a,l,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Dl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),o=new Mn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:ni});o.uniforms.tEquirect.value=t;const a=new rt(s,o),l=t.minFilter;return t.minFilter===xn&&(t.minFilter=Wt),new yp(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(o)}}const ta=new R,Mp=new R,Sp=new He;class Qn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ta.subVectors(n,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),s=this.coplanarPoint(ta).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Nt,wr=new R;class xo{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,o=new Qn,a=new Qn){this.planes=[e,t,n,s,o,a]}set(e,t,n,s,o,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(o),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un){const n=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],x=s[10],m=s[11],g=s[12],v=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-o,f-h,m-p,M-g).normalize(),n[1].setComponents(c+o,f+h,m+p,M+g).normalize(),n[2].setComponents(c+a,f+u,m+_,M+v).normalize(),n[3].setComponents(c-a,f-u,m-_,M-v).normalize(),n[4].setComponents(c-l,f-d,m-x,M-y).normalize(),t===Un)n[5].setComponents(c+l,f+d,m+x,M+y).normalize();else if(t===co)n[5].setComponents(l,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(wr.x=s.normal.x>0?e.max.x:e.min.x,wr.y=s.normal.y>0?e.max.y:e.min.y,wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fu(){let r=null,e=!1,t=null,n=null;function s(o,a){t(o,a),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function bp(r){const e=new WeakMap;function t(l,c){const h=l.array,u=l.usage,d=h.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,h,u),l.onUploadCallback();let p;if(h instanceof Float32Array)p=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=r.SHORT;else if(h instanceof Uint32Array)p=r.UNSIGNED_INT;else if(h instanceof Int32Array)p=r.INT;else if(h instanceof Int8Array)p=r.BYTE;else if(h instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function n(l,c,h){const u=c.array,d=c.updateRanges;if(r.bindBuffer(h,l),d.length===0)r.bufferSubData(h,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],x=d[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const x=d[p];r.bufferSubData(h,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=e.get(l);(!u||u.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:o,update:a}}class On extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,a=t/2,l=Math.floor(n),c=Math.floor(s),h=l+1,u=c+1,d=e/l,f=t/c,p=[],_=[],x=[],m=[];for(let g=0;g<u;g++){const v=g*f-a;for(let y=0;y<h;y++){const M=y*d-o;_.push(M,-v,0),x.push(0,0,1),m.push(y/l),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<l;v++){const y=v+h*g,M=v+h*(g+1),L=v+1+h*(g+1),T=v+1+h*g;p.push(y,M,T),p.push(M,L,T)}this.setIndex(p),this.setAttribute("position",new ze(_,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",tm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,um=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Am=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Um=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Ep,alphahash_pars_fragment:wp,alphamap_fragment:Tp,alphamap_pars_fragment:Ap,alphatest_fragment:Cp,alphatest_pars_fragment:Rp,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Ip,batching_vertex:Dp,begin_vertex:Np,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:Fp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Vp,color_fragment:Gp,color_pars_fragment:Wp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:Jp,displacementmap_vertex:$p,emissivemap_fragment:jp,emissivemap_pars_fragment:Qp,colorspace_fragment:em,colorspace_pars_fragment:tm,envmap_fragment:nm,envmap_common_pars_fragment:im,envmap_pars_fragment:sm,envmap_pars_vertex:rm,envmap_physical_pars_fragment:gm,envmap_vertex:om,fog_vertex:am,fog_pars_vertex:lm,fog_fragment:cm,fog_pars_fragment:hm,gradientmap_pars_fragment:um,lightmap_pars_fragment:dm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:pm,lights_pars_begin:mm,lights_toon_fragment:_m,lights_toon_pars_fragment:xm,lights_phong_fragment:ym,lights_phong_pars_fragment:vm,lights_physical_fragment:Mm,lights_physical_pars_fragment:Sm,lights_fragment_begin:bm,lights_fragment_maps:Em,lights_fragment_end:wm,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Am,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Rm,map_fragment:Pm,map_pars_fragment:Lm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Um,morphinstance_vertex:Om,morphcolor_vertex:Fm,morphnormal_vertex:Bm,morphtarget_pars_vertex:zm,morphtarget_vertex:km,normal_fragment_begin:Hm,normal_fragment_maps:Vm,normal_pars_fragment:Gm,normal_pars_vertex:Wm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:$m,packing:jm,premultiplied_alpha_fragment:Qm,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:og,shadowmap_vertex:ag,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:_g,transmission_pars_fragment:xg,uv_pars_fragment:yg,uv_pars_vertex:vg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:bg,background_frag:Eg,backgroundCube_vert:wg,backgroundCube_frag:Tg,cube_vert:Ag,cube_frag:Cg,depth_vert:Rg,depth_frag:Pg,distanceRGBA_vert:Lg,distanceRGBA_frag:Ig,equirect_vert:Dg,equirect_frag:Ng,linedashed_vert:Ug,linedashed_frag:Og,meshbasic_vert:Fg,meshbasic_frag:Bg,meshlambert_vert:zg,meshlambert_frag:kg,meshmatcap_vert:Hg,meshmatcap_frag:Vg,meshnormal_vert:Gg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:Kg,meshtoon_vert:Zg,meshtoon_frag:Jg,points_vert:$g,points_frag:jg,shadow_vert:Qg,shadow_frag:e_,sprite_vert:t_,sprite_frag:n_},he={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},_n={basic:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ot([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ot([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ot([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ot([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ot([he.points,he.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ot([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ot([he.common,he.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ot([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ot([he.sprite,he.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ot([he.common,he.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ot([he.lights,he.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};_n.physical={uniforms:Ot([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Tr={r:0,b:0,g:0},pi=new cn,i_=new Le;function s_(r,e,t,n,s,o,a){const l=new we(0);let c=o===!0?0:1,h,u,d=null,f=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1;const M=_(v);M===null?g(l,c):M&&M.isColor&&(g(M,1),y=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===ir)?(u===void 0&&(u=new rt(new on(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ms(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(i_.makeRotationFromEuler(pi)),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ut,(d!==M||f!==M.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new rt(new On(2,2),new Mn({name:"BackgroundMaterial",uniforms:ms(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function g(v,y){v.getRGB(Tr,Uu(r)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,y,a)}return{getClearColor:function(){return l},setClearColor:function(v,y=1){l.set(v),c=y,g(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,g(l,c)},render:x,addToRenderList:m}}function r_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,a=!1;function l(S,E,V,k,G){let Q=!1;const z=d(k,V,E);o!==z&&(o=z,h(o.object)),Q=p(S,k,V,G),Q&&_(S,k,V,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(S,E,V,k),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function h(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function d(S,E,V){const k=V.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let Q=G[E.id];Q===void 0&&(Q={},G[E.id]=Q);let z=Q[k];return z===void 0&&(z=f(c()),Q[k]=z),z}function f(S){const E=[],V=[],k=[];for(let G=0;G<t;G++)E[G]=0,V[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,E,V,k){const G=o.attributes,Q=E.attributes;let z=0;const te=V.getAttributes();for(const X in te)if(te[X].location>=0){const me=G[X];let ge=Q[X];if(ge===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;z++}return o.attributesNum!==z||o.index!==k}function _(S,E,V,k){const G={},Q=E.attributes;let z=0;const te=V.getAttributes();for(const X in te)if(te[X].location>=0){let me=Q[X];me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),G[X]=ge,z++}o.attributes=G,o.attributesNum=z,o.index=k}function x(){const S=o.newAttributes;for(let E=0,V=S.length;E<V;E++)S[E]=0}function m(S){g(S,0)}function g(S,E){const V=o.newAttributes,k=o.enabledAttributes,G=o.attributeDivisors;V[S]=1,k[S]===0&&(r.enableVertexAttribArray(S),k[S]=1),G[S]!==E&&(r.vertexAttribDivisor(S,E),G[S]=E)}function v(){const S=o.newAttributes,E=o.enabledAttributes;for(let V=0,k=E.length;V<k;V++)E[V]!==S[V]&&(r.disableVertexAttribArray(V),E[V]=0)}function y(S,E,V,k,G,Q,z){z===!0?r.vertexAttribIPointer(S,E,V,G,Q):r.vertexAttribPointer(S,E,V,k,G,Q)}function M(S,E,V,k){x();const G=k.attributes,Q=V.getAttributes(),z=E.defaultAttributeValues;for(const te in Q){const X=Q[te];if(X.location>=0){let de=G[te];if(de===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const me=de.normalized,ge=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const Je=Xe.buffer,Y=Xe.type,ne=Xe.bytesPerElement,Se=Y===r.INT||Y===r.UNSIGNED_INT||de.gpuType===El;if(de.isInterleavedBufferAttribute){const ue=de.data,De=ue.stride,Ie=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<X.locationSize;Be++)g(X.location+Be,ue.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<X.locationSize;Be++)m(X.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let Be=0;Be<X.locationSize;Be++)y(X.location+Be,ge/X.locationSize,Y,me,De*ne,(Ie+ge/X.locationSize*Be)*ne,Se)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)g(X.location+ue,de.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Je);for(let ue=0;ue<X.locationSize;ue++)y(X.location+ue,ge/X.locationSize,Y,me,ge*ne,ge/X.locationSize*ue*ne,Se)}}else if(z!==void 0){const me=z[te];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(X.location,me);break;case 3:r.vertexAttrib3fv(X.location,me);break;case 4:r.vertexAttrib4fv(X.location,me);break;default:r.vertexAttrib1fv(X.location,me)}}}}v()}function L(){I();for(const S in n){const E=n[S];for(const V in E){const k=E[V];for(const G in k)u(k[G].object),delete k[G];delete E[V]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const E=n[S.id];for(const V in E){const k=E[V];for(const G in k)u(k[G].object),delete k[G];delete E[V]}delete n[S.id]}function A(S){for(const E in n){const V=n[E];if(V[S.id]===void 0)continue;const k=V[S.id];for(const G in k)u(k[G].object),delete k[G];delete V[S.id]}}function I(){F(),a=!0,o!==s&&(o=s,h(o.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function o_(r,e,t){let n;function s(h){n=h}function o(h,u){r.drawArrays(n,h,u),t.update(u,n,1)}function a(h,u,d){d!==0&&(r.drawArraysInstanced(n,h,u,d),t.update(u,n,d))}function l(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];t.update(p,n,1)}function c(h,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h.length;_++)a(h[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,h,0,u,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=u[x];for(let x=0;x<f.length;x++)t.update(_,n,f[x])}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function a_(r,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Xt&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const I=A===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Hn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==jt&&!I)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const u=c(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:L,maxSamples:T}}function l_(r){const e=this;let t=null,n=0,s=!1,o=!1;const a=new Qn,l=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!s||_===null||_.length===0||o&&!m)o?u(null):h();else{const v=o?0:n,y=v*4;let M=g.clippingState||null;c.value=M,M=u(_,f,y,p);for(let L=0;L!==y;++L)M[L]=t[L];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,_){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const g=p+x*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=p;y!==x;++y,M+=4)a.copy(d[y]).applyMatrix4(v,l),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function c_(r){let e=new WeakMap;function t(a,l){return l===so?a.mapping=Ei:l===ro&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===so||l===ro)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new vp(c.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class yo extends Ou{constructor(e=-1,t=1,n=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,a=n+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,l-=u*this.view.offsetY,c=l-u*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,eh=[.125,.215,.35,.446,.526,.582],Mi=20,na=new yo,th=new we;let ia=null,sa=0,ra=0,oa=!1;const yi=(1+Math.sqrt(5))/2,Yi=1/yi,nh=[new R(-yi,Yi,0),new R(yi,Yi,0),new R(-Yi,0,yi),new R(Yi,0,yi),new R(0,yi,-Yi),new R(0,yi,Yi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=oa,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:sr,format:Xt,colorSpace:Ct,depthBuffer:!1},s=sh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(o)),this._blurMaterial=u_(o,e,t)}return s}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,s){const l=new At(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(th),u.toneMapping=ii,u.autoClear=!1;const p=new zt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),_=new rt(new on,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(th),x=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(l.up.set(0,c[g],0),l.lookAt(h[g],0,0)):v===1?(l.up.set(0,0,c[g]),l.lookAt(0,h[g],0)):(l.up.set(0,c[g],0),l.lookAt(0,0,h[g]));const y=this._cubeSize;Ar(s,v*y,g>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ei||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const c=this._cubeSize;Ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=nh[(s-o-1)%nh.length];this._blur(e,o-1,o,a,l)}t.autoClear=n}_blur(e,t,n,s,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",o),this._halfBlur(a,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,a,l){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new rt(this._lodPlanes[s],h),f=h.uniforms,p=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),x=o/_,m=isFinite(o)?1+Math.floor(u*x):Mi;m>Mi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const g=[];let v=0;for(let A=0;A<Mi;++A){const I=A/x,F=Math.exp(-I*I/2);g.push(F),A===0?v+=F:A<m&&(v+=2*F)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const M=this._sizeLods[s],L=3*M*(s>y-is?s-y+is:0),T=4*(this._cubeSize-M);Ar(t,L,T,3*M,2*M),c.setRenderTarget(t),c.render(d,na)}}function h_(r){const e=[],t=[],n=[];let s=r;const o=r-is+1+eh.length;for(let a=0;a<o;a++){const l=Math.pow(2,s);t.push(l);let c=1/l;a>r-is?c=eh[a-r+is-1]:a===0&&(c=0),n.push(c);const h=1/(l-2),u=-h,d=1+h,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,x=3,m=2,g=1,v=new Float32Array(x*_*p),y=new Float32Array(m*_*p),M=new Float32Array(g*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,F=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];v.set(F,x*_*T),y.set(f,m*_*T);const S=[T,T,T,T,T,T];M.set(S,g*_*T)}const L=new lt;L.setAttribute("position",new yt(v,x)),L.setAttribute("uv",new yt(y,m)),L.setAttribute("faceIndex",new yt(M,g)),e.push(L),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sh(r,e,t){const n=new Ti(r,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function u_(r,e,t){const n=new Float32Array(Mi),s=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function rh(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function oh(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d_(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,h=c===so||c===ro,u=c===Ei||c===wi;if(h||u){let d=e.get(l);const f=d!==void 0?d.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return t===null&&(t=new ih(r)),d=h?t.fromEquirectangular(l,d):t.fromCubemap(l,d),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),d.texture;if(d!==void 0)return d.texture;{const p=l.image;return h&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ih(r)),d=h?t.fromEquirectangular(l):t.fromCubemap(l),d.texture.pmremVersion=l.pmremVersion,e.set(l,d),l.addEventListener("dispose",o),d.texture):null}}}return l}function s(l){let c=0;const h=6;for(let u=0;u<h;u++)l[u]!==void 0&&c++;return c===h}function o(l){const c=l.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function f_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&to("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function p_(r,e,t,n){const s={},o=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,g=x.length;m<g;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function l(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,g=x.length;m<g;m++)e.update(x[m],r.ARRAY_BUFFER)}}function h(d){const f=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let y=0,M=v.length;y<M;y+=3){const L=v[y+0],T=v[y+1],A=v[y+2];f.push(L,T,T,A,A,L)}}else if(_!==void 0){const v=_.array;x=_.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const L=y+0,T=y+1,A=y+2;f.push(L,T,T,A,A,L)}}else return;const m=new(Pu(f)?Nu:Du)(f,1);m.version=x;const g=o.get(d);g&&e.remove(g),o.set(d,m)}function u(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&h(d)}else h(d);return o.get(d)}return{get:l,update:c,getWireframeAttribute:u}}function m_(r,e,t){let n;function s(f){n=f}let o,a;function l(f){o=f.type,a=f.bytesPerElement}function c(f,p){r.drawElements(n,p,o,f*a),t.update(p,n,1)}function h(f,p,_){_!==0&&(r.drawElementsInstanced(n,p,o,f*a,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,_);let m=0;for(let g=0;g<_;g++)m+=p[g];t.update(m,n,1)}function d(f,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)h(f[g]/a,p[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,x,0,_);let g=0;for(let v=0;v<_;v++)g+=p[v];for(let v=0;v<x.length;v++)t.update(g,n,x[v])}}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function g_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(o/3);break;case r.LINES:t.lines+=l*(o/2);break;case r.LINE_STRIP:t.lines+=l*(o-1);break;case r.LINE_LOOP:t.lines+=l*o;break;case r.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function __(r,e,t){const n=new WeakMap,s=new $e;function o(a,l,c){const h=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(l);if(f===void 0||f.count!==d){let F=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();const p=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],v=l.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let M=l.attributes.position.count*y,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*L*4*d),A=new Lu(T,M,L,d);A.type=jt,A.needsUpdate=!0;const I=y*4;for(let S=0;S<d;S++){const E=m[S],V=g[S],k=v[S],G=M*L*4*S;for(let Q=0;Q<E.count;Q++){const z=Q*I;p===!0&&(s.fromBufferAttribute(E,Q),T[G+z+0]=s.x,T[G+z+1]=s.y,T[G+z+2]=s.z,T[G+z+3]=0),_===!0&&(s.fromBufferAttribute(V,Q),T[G+z+4]=s.x,T[G+z+5]=s.y,T[G+z+6]=s.z,T[G+z+7]=0),x===!0&&(s.fromBufferAttribute(k,Q),T[G+z+8]=s.x,T[G+z+9]=s.y,T[G+z+10]=s.z,T[G+z+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new q(M,L)},n.set(l,f),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<h.length;x++)p+=h[x];const _=l.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",h)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:o}}function x_(r,e,t,n){let s=new WeakMap;function o(c){const h=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}class Bu extends Mt{constructor(e,t,n,s,o,a,l,c,h,u=as){if(u!==as&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===as&&(n=oi),n===void 0&&u===fs&&(n=ds),super(null,s,o,a,l,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zu=new Mt,ah=new Bu(1,1),ku=new Lu,Hu=new sp,Vu=new Dl,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Ss(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let o=lh[s];if(o===void 0&&(o=new Float32Array(s),lh[s]=o),e!==0){n.toArray(o,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(o,l)}return o}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vo(r,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function v_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),bt(t,e)}}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),bt(t,e)}}function S_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),bt(t,e)}}function b_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;dh.set(n),r.uniformMatrix2fv(this.addr,!1,dh),bt(t,n)}}function E_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;uh.set(n),r.uniformMatrix3fv(this.addr,!1,uh),bt(t,n)}}function w_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,n))return;hh.set(n),r.uniformMatrix4fv(this.addr,!1,hh),bt(t,n)}}function T_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),bt(t,e)}}function C_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),bt(t,e)}}function R_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),bt(t,e)}}function P_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function L_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),bt(t,e)}}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),bt(t,e)}}function D_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),bt(t,e)}}function N_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let o;this.type===r.SAMPLER_2D_SHADOW?(ah.compareFunction=Cu,o=ah):o=zu,t.setTexture2D(e||o,s)}function U_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hu,s)}function O_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vu,s)}function F_(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ku,s)}function B_(r){switch(r){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return E_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return L_;case 36295:return I_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return F_}}function z_(r,e){r.uniform1fv(this.addr,e)}function k_(r,e){const t=Ss(e,this.size,2);r.uniform2fv(this.addr,t)}function H_(r,e){const t=Ss(e,this.size,3);r.uniform3fv(this.addr,t)}function V_(r,e){const t=Ss(e,this.size,4);r.uniform4fv(this.addr,t)}function G_(r,e){const t=Ss(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function W_(r,e){const t=Ss(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function X_(r,e){const t=Ss(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function q_(r,e){r.uniform1iv(this.addr,e)}function Y_(r,e){r.uniform2iv(this.addr,e)}function K_(r,e){r.uniform3iv(this.addr,e)}function Z_(r,e){r.uniform4iv(this.addr,e)}function J_(r,e){r.uniform1uiv(this.addr,e)}function $_(r,e){r.uniform2uiv(this.addr,e)}function j_(r,e){r.uniform3uiv(this.addr,e)}function Q_(r,e){r.uniform4uiv(this.addr,e)}function e0(r,e,t){const n=this.cache,s=e.length,o=vo(t,s);St(n,o)||(r.uniform1iv(this.addr,o),bt(n,o));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zu,o[a])}function t0(r,e,t){const n=this.cache,s=e.length,o=vo(t,s);St(n,o)||(r.uniform1iv(this.addr,o),bt(n,o));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hu,o[a])}function n0(r,e,t){const n=this.cache,s=e.length,o=vo(t,s);St(n,o)||(r.uniform1iv(this.addr,o),bt(n,o));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vu,o[a])}function i0(r,e,t){const n=this.cache,s=e.length,o=vo(t,s);St(n,o)||(r.uniform1iv(this.addr,o),bt(n,o));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ku,o[a])}function s0(r){switch(r){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return K_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return $_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class r0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}}class a0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const l=s[o];l.setValue(e,t[l.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function fh(r,e){r.seq.push(e),r.map[e.id]=e}function l0(r,e,t){const n=r.name,s=n.length;for(aa.lastIndex=0;;){const o=aa.exec(n),a=aa.lastIndex;let l=o[1];const c=o[2]==="]",h=o[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){fh(t,h===void 0?new r0(l,r,e):new o0(l,r,e));break}else{let d=t.map[l];d===void 0&&(d=new a0(l),fh(t,d)),t=d}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),a=e.getUniformLocation(t,o.name);l0(o,a,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,a=t.length;o!==a;++o){const l=t[o],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ph(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const c0=37297;let h0=0;function u0(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=s;a<o;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function d0(r){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(r);let n;switch(e===t?n="":e===lo&&t===ao?n="LinearDisplayP3ToLinearSRGB":e===ao&&t===lo&&(n="LinearSRGBToLinearDisplayP3"),r){case Ct:case _o:return[n,"LinearTransferOETF"];case Ft:case Pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function mh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+u0(r.getShaderSource(e),a)}else return s}function f0(r,e){const t=d0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function p0(r,e){let t;switch(e){case df:t="Linear";break;case ff:t="Reinhard";break;case pf:t="Cineon";break;case mf:t="ACESFilmic";break;case _f:t="AgX";break;case xf:t="Neutral";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new R;function m0(){Ze.getLuminanceCoefficients(Cr);const r=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function _0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=r.getActiveAttrib(e,s),a=o.name;let l=1;o.type===r.FLOAT_MAT2&&(l=2),o.type===r.FLOAT_MAT3&&(l=3),o.type===r.FLOAT_MAT4&&(l=4),t[a]={type:o.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function Gs(r){return r!==""}function gh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(r){return r.replace(y0,M0)}const v0=new Map;function M0(r,e){let t=Ve[e];if(t===void 0){const n=v0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hl(t)}const S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(r){return r.replace(S0,b0)}function b0(r,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function yh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function w0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ei:case wi:e="ENVMAP_TYPE_CUBE";break;case ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function A0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case hf:e="ENVMAP_BLENDING_MIX";break;case uf:e="ENVMAP_BLENDING_ADD";break}return e}function C0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function R0(r,e,t,n){const s=r.getContext(),o=t.defines;let a=t.vertexShader,l=t.fragmentShader;const c=E0(t),h=w0(t),u=T0(t),d=A0(t),f=C0(t),p=g0(t),_=_0(o),x=s.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Gs).join(`
`),g.length>0&&(g+=`
`)):(m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),g=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ii?p0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),m0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=hl(a),a=gh(a,t),a=_h(a,t),l=hl(l),l=gh(l,t),l=_h(l,t),a=xh(a),l=xh(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+m+a,M=v+g+l,L=ph(s,s.VERTEX_SHADER,y),T=ph(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(E){if(r.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(L).trim(),G=s.getShaderInfoLog(T).trim();let Q=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,x,L,T);else{const te=mh(s,L,"vertex"),X=mh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+te+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||G==="")&&(z=!1);z&&(E.diagnostics={runnable:Q,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:g}})}s.deleteShader(L),s.deleteShader(T),I=new no(s,x),F=x0(s,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let F;this.getAttributes=function(){return F===void 0&&A(this),F};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,c0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}let P0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I0(e),t.set(e,n)),n}}class I0{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}}function D0(r,e,t,n,s,o,a){const l=new Il,c=new L0,h=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return h.add(S),S===0?"uv":`uv${S}`}function g(S,E,V,k,G){const Q=k.fog,z=G.geometry,te=S.isMeshStandardMaterial?k.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||te),de=X&&X.mapping===ir?X.image.height:null,me=x[S.type];S.precision!==null&&(_=s.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Xe=ge!==void 0?ge.length:0;let Je=0;z.morphAttributes.position!==void 0&&(Je=1),z.morphAttributes.normal!==void 0&&(Je=2),z.morphAttributes.color!==void 0&&(Je=3);let Y,ne,Se,ue;if(me){const Vt=_n[me];Y=Vt.vertexShader,ne=Vt.fragmentShader}else Y=S.vertexShader,ne=S.fragmentShader,c.update(S),Se=c.getVertexShaderID(S),ue=c.getFragmentShaderID(S);const De=r.getRenderTarget(),Ie=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,Ge=!!S.map,J=!!S.matcap,P=!!X,ae=!!S.aoMap,oe=!!S.lightMap,ee=!!S.bumpMap,le=!!S.normalMap,Re=!!S.displacementMap,_e=!!S.emissiveMap,C=!!S.metalnessMap,b=!!S.roughnessMap,O=S.anisotropy>0,K=S.clearcoat>0,$=S.dispersion>0,Z=S.iridescence>0,Te=S.sheen>0,ce=S.transmission>0,ve=O&&!!S.anisotropyMap,qe=K&&!!S.clearcoatMap,ie=K&&!!S.clearcoatNormalMap,Me=K&&!!S.clearcoatRoughnessMap,Oe=Z&&!!S.iridescenceMap,Fe=Z&&!!S.iridescenceThicknessMap,be=Te&&!!S.sheenColorMap,Ye=Te&&!!S.sheenRoughnessMap,ke=!!S.specularMap,ct=!!S.specularColorMap,D=!!S.specularIntensityMap,xe=ce&&!!S.transmissionMap,W=ce&&!!S.thicknessMap,j=!!S.gradientMap,fe=!!S.alphaMap,ye=S.alphaTest>0,Ke=!!S.alphaHash,gt=!!S.extensions;let Ht=ii;S.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const je={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:ne,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&G.instanceColor!==null,instancingMorph:Ie&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:De===null?r.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ct,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:J,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:de,aoMap:ae,lightMap:oe,bumpMap:ee,normalMap:le,displacementMap:p&&Re,emissiveMap:_e,normalMapObjectSpace:le&&S.normalMapType===Ef,normalMapTangentSpace:le&&S.normalMapType===Ri,metalnessMap:C,roughnessMap:b,anisotropy:O,anisotropyMap:ve,clearcoat:K,clearcoatMap:qe,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:$,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:Fe,sheen:Te,sheenColorMap:be,sheenRoughnessMap:Ye,specularMap:ke,specularColorMap:ct,specularIntensityMap:D,transmission:ce,transmissionMap:xe,thicknessMap:W,gradientMap:j,opaque:S.transparent===!1&&S.blending===os&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:ye,alphaHash:Ke,combine:S.combine,mapUv:Ge&&m(S.map.channel),aoMapUv:ae&&m(S.aoMap.channel),lightMapUv:oe&&m(S.lightMap.channel),bumpMapUv:ee&&m(S.bumpMap.channel),normalMapUv:le&&m(S.normalMap.channel),displacementMapUv:Re&&m(S.displacementMap.channel),emissiveMapUv:_e&&m(S.emissiveMap.channel),metalnessMapUv:C&&m(S.metalnessMap.channel),roughnessMapUv:b&&m(S.roughnessMap.channel),anisotropyMapUv:ve&&m(S.anisotropyMap.channel),clearcoatMapUv:qe&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(S.sheenRoughnessMap.channel),specularMapUv:ke&&m(S.specularMap.channel),specularColorMapUv:ct&&m(S.specularColorMap.channel),specularIntensityMapUv:D&&m(S.specularIntensityMap.channel),transmissionMapUv:xe&&m(S.transmissionMap.channel),thicknessMapUv:W&&m(S.thicknessMap.channel),alphaMapUv:fe&&m(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(le||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(Ge||fe),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:Je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=h.has(1),je.vertexUv2s=h.has(2),je.vertexUv3s=h.has(3),h.clear(),je}function v(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)E.push(V),E.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(y(E,S),M(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),S.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.alphaToCoverage&&l.enable(20),S.push(l.mask)}function L(S){const E=x[S.type];let V;if(E){const k=_n[E];V=gp.clone(k.uniforms)}else V=S.uniforms;return V}function T(S,E){let V;for(let k=0,G=u.length;k<G;k++){const Q=u[k];if(Q.cacheKey===E){V=Q,++V.usedTimes;break}}return V===void 0&&(V=new R0(r,E,S,o),u.push(V)),V}function A(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function I(S){c.remove(S)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:L,acquireProgram:T,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:F}}function N0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function s(a,l,c){r.get(a)[l]=c}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function U0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function vh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Mh(){const r=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,_,x,m){let g=r[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},r[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=_,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function l(d,f,p,_,x,m){const g=a(d,f,p,_,x,m);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):t.push(g)}function c(d,f,p,_,x,m){const g=a(d,f,p,_,x,m);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):t.unshift(g)}function h(d,f){t.length>1&&t.sort(d||U0),n.length>1&&n.sort(f||vh),s.length>1&&s.sort(f||vh)}function u(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:l,unshift:c,finish:u,sort:h}}function O0(){let r=new WeakMap;function e(n,s){const o=r.get(n);let a;return o===void 0?(a=new Mh,r.set(n,[a])):s>=o.length?(a=new Mh,o.push(a)):a=o[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function F0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new we};break;case"SpotLight":t={position:new R,direction:new R,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function B0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let z0=0;function k0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function H0(r){const e=new F0,t=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const s=new R,o=new Le,a=new Le;function l(h){let u=0,d=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,_=0,x=0,m=0,g=0,v=0,y=0,M=0,L=0,T=0,A=0;h.sort(k0);for(let F=0,S=h.length;F<S;F++){const E=h[F],V=E.color,k=E.intensity,G=E.distance,Q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=V.r*k,d+=V.g*k,f+=V.b*k;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],k);A++}else if(E.isDirectionalLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const te=E.shadow,X=t.get(E);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=E.shadow.matrix,v++}n.directional[p]=z,p++}else if(E.isSpotLight){const z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(V).multiplyScalar(k),z.distance=G,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[x]=z;const te=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,te.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[x]=te.matrix,E.castShadow){const X=t.get(E);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Q,M++}x++}else if(E.isRectAreaLight){const z=e.get(E);z.color.copy(V).multiplyScalar(k),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=z,m++}else if(E.isPointLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const te=E.shadow,X=t.get(E);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=E.shadow.matrix,y++}n.point[_]=z,_++}else if(E.isHemisphereLight){const z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(k),z.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[g]=z,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=p,I.pointLength=_,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=A,n.version=z0++)}function c(h,u){let d=0,f=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let g=0,v=h.length;g<v;g++){const y=h[g];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:l,setupView:c,state:n}}function Sh(r){const e=new H0(r),t=[],n=[];function s(u){h.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(){e.setup(t)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function V0(r){let e=new WeakMap;function t(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Sh(r),e.set(s,[l])):o>=a.length?(l=new Sh(r),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gu extends wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wu extends wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X0(r,e,t){let n=new xo;const s=new q,o=new q,a=new $e,l=new Gu({depthPacking:bf}),c=new Wu,h={},u=t.maxTextureSize,d={[zn]:qt,[qt]:zn,[Bt]:Bt},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new lt;_.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let g=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const F=r.getRenderTarget(),S=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),V=r.state;V.setBlending(ni),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=g!==In&&this.type===In,G=g===In&&this.type!==In;for(let Q=0,z=T.length;Q<z;Q++){const te=T[Q],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const de=X.getFrameExtents();if(s.multiply(de),o.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/de.x),s.x=o.x*de.x,X.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/de.y),s.y=o.y*de.y,X.mapSize.y=o.y)),X.map===null||k===!0||G===!0){const ge=this.type!==In?{minFilter:Dt,magFilter:Dt}:{};X.map!==null&&X.map.dispose(),X.map=new Ti(s.x,s.y,ge),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const me=X.getViewportCount();for(let ge=0;ge<me;ge++){const Xe=X.getViewport(ge);a.set(o.x*Xe.x,o.y*Xe.y,o.x*Xe.z,o.y*Xe.w),V.viewport(a),X.updateMatrices(te,ge),n=X.getFrustum(),M(A,I,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===In&&v(X,I),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(F,S,E)};function v(T,A){const I=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,I,f,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,I,p,x,null)}function y(T,A,I,F){let S=null;const E=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)S=E;else if(S=I.isPointLight===!0?c:l,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=S.uuid,k=A.uuid;let G=h[V];G===void 0&&(G={},h[V]=G);let Q=G[k];Q===void 0&&(Q=S.clone(),G[k]=Q,A.addEventListener("dispose",L)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,F===In?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=r.properties.get(S);V.light=I}return S}function M(T,A,I,F,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const k=e.update(T),G=T.material;if(Array.isArray(G)){const Q=k.groups;for(let z=0,te=Q.length;z<te;z++){const X=Q[z],de=G[X.materialIndex];if(de&&de.visible){const me=y(T,de,F,S);T.onBeforeShadow(r,T,A,I,k,me,X),r.renderBufferDirect(I,null,k,me,T,X),T.onAfterShadow(r,T,A,I,k,me,X)}}}else if(G.visible){const Q=y(T,G,F,S);T.onBeforeShadow(r,T,A,I,k,Q,null),r.renderBufferDirect(I,null,k,Q,T,null),T.onAfterShadow(r,T,A,I,k,Q,null)}}const V=T.children;for(let k=0,G=V.length;k<G;k++)M(V[k],A,I,F,S)}function L(T){T.target.removeEventListener("dispose",L);for(const I in h){const F=h[I],S=T.target.uuid;S in F&&(F[S].dispose(),delete F[S])}}}const q0={[Ra]:Pa,[La]:Na,[Ia]:Ua,[us]:Da,[Pa]:Ra,[Na]:La,[Ua]:Ia,[Da]:us};function Y0(r){function e(){let D=!1;const xe=new $e;let W=null;const j=new $e(0,0,0,0);return{setMask:function(fe){W!==fe&&!D&&(r.colorMask(fe,fe,fe,fe),W=fe)},setLocked:function(fe){D=fe},setClear:function(fe,ye,Ke,gt,Ht){Ht===!0&&(fe*=gt,ye*=gt,Ke*=gt),xe.set(fe,ye,Ke,gt),j.equals(xe)===!1&&(r.clearColor(fe,ye,Ke,gt),j.copy(xe))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function t(){let D=!1,xe=!1,W=null,j=null,fe=null;return{setReversed:function(ye){xe=ye},setTest:function(ye){ye?Se(r.DEPTH_TEST):ue(r.DEPTH_TEST)},setMask:function(ye){W!==ye&&!D&&(r.depthMask(ye),W=ye)},setFunc:function(ye){if(xe&&(ye=q0[ye]),j!==ye){switch(ye){case Ra:r.depthFunc(r.NEVER);break;case Pa:r.depthFunc(r.ALWAYS);break;case La:r.depthFunc(r.LESS);break;case us:r.depthFunc(r.LEQUAL);break;case Ia:r.depthFunc(r.EQUAL);break;case Da:r.depthFunc(r.GEQUAL);break;case Na:r.depthFunc(r.GREATER);break;case Ua:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ye}},setLocked:function(ye){D=ye},setClear:function(ye){fe!==ye&&(r.clearDepth(ye),fe=ye)},reset:function(){D=!1,W=null,j=null,fe=null}}}function n(){let D=!1,xe=null,W=null,j=null,fe=null,ye=null,Ke=null,gt=null,Ht=null;return{setTest:function(je){D||(je?Se(r.STENCIL_TEST):ue(r.STENCIL_TEST))},setMask:function(je){xe!==je&&!D&&(r.stencilMask(je),xe=je)},setFunc:function(je,Vt,wn){(W!==je||j!==Vt||fe!==wn)&&(r.stencilFunc(je,Vt,wn),W=je,j=Vt,fe=wn)},setOp:function(je,Vt,wn){(ye!==je||Ke!==Vt||gt!==wn)&&(r.stencilOp(je,Vt,wn),ye=je,Ke=Vt,gt=wn)},setLocked:function(je){D=je},setClear:function(je){Ht!==je&&(r.clearStencil(je),Ht=je)},reset:function(){D=!1,xe=null,W=null,j=null,fe=null,ye=null,Ke=null,gt=null,Ht=null}}}const s=new e,o=new t,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,g=null,v=null,y=null,M=null,L=null,T=new we(0,0,0),A=0,I=!1,F=null,S=null,E=null,V=null,k=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,z=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),Q=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Q=z>=2);let X=null,de={};const me=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),Xe=new $e().fromArray(me),Je=new $e().fromArray(ge);function Y(D,xe,W,j){const fe=new Uint8Array(4),ye=r.createTexture();r.bindTexture(D,ye),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<W;Ke++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(xe+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ye}const ne={};ne[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(r.DEPTH_TEST),o.setFunc(us),oe(!1),ee(Tc),Se(r.CULL_FACE),P(ni);function Se(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function ue(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function De(D,xe){return u[D]!==xe?(r.bindFramebuffer(D,xe),u[D]=xe,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=xe),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ie(D,xe){let W=f,j=!1;if(D){W=d.get(xe),W===void 0&&(W=[],d.set(xe,W));const fe=D.textures;if(W.length!==fe.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Ke=fe.length;ye<Ke;ye++)W[ye]=r.COLOR_ATTACHMENT0+ye;W.length=fe.length,j=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,j=!0);j&&r.drawBuffers(W)}function Be(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const Ge={[vi]:r.FUNC_ADD,[qd]:r.FUNC_SUBTRACT,[Yd]:r.FUNC_REVERSE_SUBTRACT};Ge[Kd]=r.MIN,Ge[Zd]=r.MAX;const J={[Jd]:r.ZERO,[$d]:r.ONE,[jd]:r.SRC_COLOR,[Aa]:r.SRC_ALPHA,[rf]:r.SRC_ALPHA_SATURATE,[nf]:r.DST_COLOR,[ef]:r.DST_ALPHA,[Qd]:r.ONE_MINUS_SRC_COLOR,[Ca]:r.ONE_MINUS_SRC_ALPHA,[sf]:r.ONE_MINUS_DST_COLOR,[tf]:r.ONE_MINUS_DST_ALPHA,[of]:r.CONSTANT_COLOR,[af]:r.ONE_MINUS_CONSTANT_COLOR,[lf]:r.CONSTANT_ALPHA,[cf]:r.ONE_MINUS_CONSTANT_ALPHA};function P(D,xe,W,j,fe,ye,Ke,gt,Ht,je){if(D===ni){_===!0&&(ue(r.BLEND),_=!1);return}if(_===!1&&(Se(r.BLEND),_=!0),D!==Xd){if(D!==x||je!==I){if((m!==vi||y!==vi)&&(r.blendEquation(r.FUNC_ADD),m=vi,y=vi),je)switch(D){case os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ac:r.blendFunc(r.ONE,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ac:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,v=null,M=null,L=null,T.set(0,0,0),A=0,x=D,I=je}return}fe=fe||xe,ye=ye||W,Ke=Ke||j,(xe!==m||fe!==y)&&(r.blendEquationSeparate(Ge[xe],Ge[fe]),m=xe,y=fe),(W!==g||j!==v||ye!==M||Ke!==L)&&(r.blendFuncSeparate(J[W],J[j],J[ye],J[Ke]),g=W,v=j,M=ye,L=Ke),(gt.equals(T)===!1||Ht!==A)&&(r.blendColor(gt.r,gt.g,gt.b,Ht),T.copy(gt),A=Ht),x=D,I=!1}function ae(D,xe){D.side===Bt?ue(r.CULL_FACE):Se(r.CULL_FACE);let W=D.side===qt;xe&&(W=!W),oe(W),D.blending===os&&D.transparent===!1?P(ni):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(D){F!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),F=D)}function ee(D){D!==Vd?(Se(r.CULL_FACE),D!==S&&(D===Tc?r.cullFace(r.BACK):D===Gd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ue(r.CULL_FACE),S=D}function le(D){D!==E&&(Q&&r.lineWidth(D),E=D)}function Re(D,xe,W){D?(Se(r.POLYGON_OFFSET_FILL),(V!==xe||k!==W)&&(r.polygonOffset(xe,W),V=xe,k=W)):ue(r.POLYGON_OFFSET_FILL)}function _e(D){D?Se(r.SCISSOR_TEST):ue(r.SCISSOR_TEST)}function C(D){D===void 0&&(D=r.TEXTURE0+G-1),X!==D&&(r.activeTexture(D),X=D)}function b(D,xe,W){W===void 0&&(X===null?W=r.TEXTURE0+G-1:W=X);let j=de[W];j===void 0&&(j={type:void 0,texture:void 0},de[W]=j),(j.type!==D||j.texture!==xe)&&(X!==W&&(r.activeTexture(W),X=W),r.bindTexture(D,xe||ne[D]),j.type=D,j.texture=xe)}function O(){const D=de[X];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){Xe.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function be(D){Je.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Ye(D,xe){let W=c.get(xe);W===void 0&&(W=new WeakMap,c.set(xe,W));let j=W.get(D);j===void 0&&(j=r.getUniformBlockIndex(xe,D.name),W.set(D,j))}function ke(D,xe){const j=c.get(xe).get(D);l.get(xe)!==j&&(r.uniformBlockBinding(xe,j,D.__bindingPointIndex),l.set(xe,j))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,de={},u={},d=new WeakMap,f=[],p=null,_=!1,x=null,m=null,g=null,v=null,y=null,M=null,L=null,T=new we(0,0,0),A=0,I=!1,F=null,S=null,E=null,V=null,k=null,Xe.set(0,0,r.canvas.width,r.canvas.height),Je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Se,disable:ue,bindFramebuffer:De,drawBuffers:Ie,useProgram:Be,setBlending:P,setMaterial:ae,setFlipSided:oe,setCullFace:ee,setLineWidth:le,setPolygonOffset:Re,setScissorTest:_e,activeTexture:C,bindTexture:b,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:Me,texImage3D:Oe,updateUBOMapping:Ye,uniformBlockBinding:ke,texStorage2D:qe,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:ve,scissor:Fe,viewport:be,reset:ct}}function bh(r,e,t,n){const s=K0(n);switch(t){case Mu:return r*e;case bu:return r*e;case Eu:return r*e*2;case Al:return r*e/s.components*s.byteLength;case go:return r*e/s.components*s.byteLength;case wu:return r*e*2/s.components*s.byteLength;case Cl:return r*e*2/s.components*s.byteLength;case Su:return r*e*3/s.components*s.byteLength;case Xt:return r*e*4/s.components*s.byteLength;case Rl:return r*e*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case jr:case Qr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fa:case za:return Math.max(r,16)*Math.max(e,8)/4;case Oa:case Ba:return Math.max(r,8)*Math.max(e,8)/2;case ka:case Ha:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case el:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case tl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case eo:case il:case sl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Tu:case rl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ol:case al:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K0(r){switch(r){case Hn:case xu:return{byteLength:1,components:1};case Js:case yu:case sr:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case oi:case El:case jt:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Z0(r,e,t,n,s,o,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new q,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return p?new OffscreenCanvas(C,b):Qs("canvas")}function x(C,b,O){let K=1;const $=_e(C);if(($.width>O||$.height>O)&&(K=O/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(K*$.width),Te=Math.floor(K*$.height);d===void 0&&(d=_(Z,Te));const ce=b?_(Z,Te):d;return ce.width=Z,ce.height=Te,ce.getContext("2d").drawImage(C,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Te+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Dt&&C.minFilter!==Wt}function g(C){r.generateMipmap(C)}function v(C,b,O,K,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===r.RED&&(O===r.FLOAT&&(Z=r.R32F),O===r.HALF_FLOAT&&(Z=r.R16F),O===r.UNSIGNED_BYTE&&(Z=r.R8)),b===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.R8UI),O===r.UNSIGNED_SHORT&&(Z=r.R16UI),O===r.UNSIGNED_INT&&(Z=r.R32UI),O===r.BYTE&&(Z=r.R8I),O===r.SHORT&&(Z=r.R16I),O===r.INT&&(Z=r.R32I)),b===r.RG&&(O===r.FLOAT&&(Z=r.RG32F),O===r.HALF_FLOAT&&(Z=r.RG16F),O===r.UNSIGNED_BYTE&&(Z=r.RG8)),b===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RG8UI),O===r.UNSIGNED_SHORT&&(Z=r.RG16UI),O===r.UNSIGNED_INT&&(Z=r.RG32UI),O===r.BYTE&&(Z=r.RG8I),O===r.SHORT&&(Z=r.RG16I),O===r.INT&&(Z=r.RG32I)),b===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),O===r.UNSIGNED_INT&&(Z=r.RGB32UI),O===r.BYTE&&(Z=r.RGB8I),O===r.SHORT&&(Z=r.RGB16I),O===r.INT&&(Z=r.RGB32I)),b===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),O===r.UNSIGNED_INT&&(Z=r.RGBA32UI),O===r.BYTE&&(Z=r.RGBA8I),O===r.SHORT&&(Z=r.RGBA16I),O===r.INT&&(Z=r.RGBA32I)),b===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),b===r.RGBA){const Te=$?oo:Ze.getTransfer(K);O===r.FLOAT&&(Z=r.RGBA32F),O===r.HALF_FLOAT&&(Z=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Z=Te===ut?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(C,b){let O;return C?b===null||b===oi||b===ds?O=r.DEPTH24_STENCIL8:b===jt?O=r.DEPTH32F_STENCIL8:b===Js&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===oi||b===ds?O=r.DEPTH_COMPONENT24:b===jt?O=r.DEPTH_COMPONENT32F:b===Js&&(O=r.DEPTH_COMPONENT16),O}function M(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==Wt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function L(C){const b=C.target;b.removeEventListener("dispose",L),A(b),b.isVideoTexture&&u.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),F(b)}function A(C){const b=n.get(C);if(b.__webglInit===void 0)return;const O=C.source,K=f.get(O);if(K){const $=K[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(C),Object.keys(K).length===0&&f.delete(O)}n.remove(C)}function I(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const O=C.source,K=f.get(O);delete K[b.__cacheKey],a.memory.textures--}function F(C){const b=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let $=0;$<b.__webglFramebuffer[K].length;$++)r.deleteFramebuffer(b.__webglFramebuffer[K][$]);else r.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)r.deleteFramebuffer(b.__webglFramebuffer[K]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=C.textures;for(let K=0,$=O.length;K<$;K++){const Z=n.get(O[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(C)}let S=0;function E(){S=0}function V(){const C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function k(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function G(C,b){const O=n.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(O,C,b);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+b)}function Q(C,b){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Je(O,C,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+b)}function z(C,b){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Je(O,C,b);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+b)}function te(C,b){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Y(O,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+b)}const X={[kn]:r.REPEAT,[Nn]:r.CLAMP_TO_EDGE,[Zs]:r.MIRRORED_REPEAT},de={[Dt]:r.NEAREST,[bl]:r.NEAREST_MIPMAP_NEAREST,[es]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[Xs]:r.LINEAR_MIPMAP_NEAREST,[xn]:r.LINEAR_MIPMAP_LINEAR},me={[wf]:r.NEVER,[Lf]:r.ALWAYS,[Tf]:r.LESS,[Cu]:r.LEQUAL,[Af]:r.EQUAL,[Pf]:r.GEQUAL,[Cf]:r.GREATER,[Rf]:r.NOTEQUAL};function ge(C,b){if(b.type===jt&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Wt||b.magFilter===Xs||b.magFilter===es||b.magFilter===xn||b.minFilter===Wt||b.minFilter===Xs||b.minFilter===es||b.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,X[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,de[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dt||b.minFilter!==es&&b.minFilter!==xn||b.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xe(C,b){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",L));const K=b.source;let $=f.get(K);$===void 0&&($={},f.set(K,$));const Z=k(b);if(Z!==C.__cacheKey){$[Z]===void 0&&($[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[Z].usedTimes++;const Te=$[C.__cacheKey];Te!==void 0&&($[C.__cacheKey].usedTimes--,Te.usedTimes===0&&I(b)),C.__cacheKey=Z,C.__webglTexture=$[Z].texture}return O}function Je(C,b,O){let K=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=r.TEXTURE_3D);const $=Xe(C,b),Z=b.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+O);const Te=n.get(Z);if(Z.version!==Te.__version||$===!0){t.activeTexture(r.TEXTURE0+O);const ce=Ze.getPrimaries(Ze.workingColorSpace),ve=b.colorSpace===ei?null:Ze.getPrimaries(b.colorSpace),qe=b.colorSpace===ei||ce===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ie=x(b.image,!1,s.maxTextureSize);ie=Re(b,ie);const Me=o.convert(b.format,b.colorSpace),Oe=o.convert(b.type);let Fe=v(b.internalFormat,Me,Oe,b.colorSpace,b.isVideoTexture);ge(K,b);let be;const Ye=b.mipmaps,ke=b.isVideoTexture!==!0,ct=Te.__version===void 0||$===!0,D=Z.dataReady,xe=M(b,ie);if(b.isDepthTexture)Fe=y(b.format===fs,b.type),ct&&(ke?t.texStorage2D(r.TEXTURE_2D,1,Fe,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Me,Oe,null));else if(b.isDataTexture)if(Ye.length>0){ke&&ct&&t.texStorage2D(r.TEXTURE_2D,xe,Fe,Ye[0].width,Ye[0].height);for(let W=0,j=Ye.length;W<j;W++)be=Ye[W],ke?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,be.width,be.height,Me,Oe,be.data):t.texImage2D(r.TEXTURE_2D,W,Fe,be.width,be.height,0,Me,Oe,be.data);b.generateMipmaps=!1}else ke?(ct&&t.texStorage2D(r.TEXTURE_2D,xe,Fe,ie.width,ie.height),D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,Me,Oe,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Me,Oe,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ke&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Fe,Ye[0].width,Ye[0].height,ie.depth);for(let W=0,j=Ye.length;W<j;W++)if(be=Ye[W],b.format!==Xt)if(Me!==null)if(ke){if(D)if(b.layerUpdates.size>0){const fe=bh(be.width,be.height,b.format,b.type);for(const ye of b.layerUpdates){const Ke=be.data.subarray(ye*fe/be.data.BYTES_PER_ELEMENT,(ye+1)*fe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,ye,be.width,be.height,1,Me,Ke,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,ie.depth,Me,be.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Fe,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,ie.depth,Me,Oe,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Fe,be.width,be.height,ie.depth,0,Me,Oe,be.data)}else{ke&&ct&&t.texStorage2D(r.TEXTURE_2D,xe,Fe,Ye[0].width,Ye[0].height);for(let W=0,j=Ye.length;W<j;W++)be=Ye[W],b.format!==Xt?Me!==null?ke?D&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,be.width,be.height,Me,Oe,be.data):t.texImage2D(r.TEXTURE_2D,W,Fe,be.width,be.height,0,Me,Oe,be.data)}else if(b.isDataArrayTexture)if(ke){if(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,Fe,ie.width,ie.height,ie.depth),D)if(b.layerUpdates.size>0){const W=bh(ie.width,ie.height,b.format,b.type);for(const j of b.layerUpdates){const fe=ie.data.subarray(j*W/ie.data.BYTES_PER_ELEMENT,(j+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,ie.width,ie.height,1,Me,Oe,fe)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,Oe,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,Me,Oe,ie.data);else if(b.isData3DTexture)ke?(ct&&t.texStorage3D(r.TEXTURE_3D,xe,Fe,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,Oe,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,Me,Oe,ie.data);else if(b.isFramebufferTexture){if(ct)if(ke)t.texStorage2D(r.TEXTURE_2D,xe,Fe,ie.width,ie.height);else{let W=ie.width,j=ie.height;for(let fe=0;fe<xe;fe++)t.texImage2D(r.TEXTURE_2D,fe,Fe,W,j,0,Me,Oe,null),W>>=1,j>>=1}}else if(Ye.length>0){if(ke&&ct){const W=_e(Ye[0]);t.texStorage2D(r.TEXTURE_2D,xe,Fe,W.width,W.height)}for(let W=0,j=Ye.length;W<j;W++)be=Ye[W],ke?D&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Me,Oe,be):t.texImage2D(r.TEXTURE_2D,W,Fe,Me,Oe,be);b.generateMipmaps=!1}else if(ke){if(ct){const W=_e(ie);t.texStorage2D(r.TEXTURE_2D,xe,Fe,W.width,W.height)}D&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Oe,ie)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Me,Oe,ie);m(b)&&g(K),Te.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Y(C,b,O){if(b.image.length!==6)return;const K=Xe(C,b),$=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+O);const Z=n.get($);if($.version!==Z.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const Te=Ze.getPrimaries(Ze.workingColorSpace),ce=b.colorSpace===ei?null:Ze.getPrimaries(b.colorSpace),ve=b.colorSpace===ei||Te===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let j=0;j<6;j++)!qe&&!ie?Me[j]=x(b.image[j],!0,s.maxCubemapSize):Me[j]=ie?b.image[j].image:b.image[j],Me[j]=Re(b,Me[j]);const Oe=Me[0],Fe=o.convert(b.format,b.colorSpace),be=o.convert(b.type),Ye=v(b.internalFormat,Fe,be,b.colorSpace),ke=b.isVideoTexture!==!0,ct=Z.__version===void 0||K===!0,D=$.dataReady;let xe=M(b,Oe);ge(r.TEXTURE_CUBE_MAP,b);let W;if(qe){ke&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Ye,Oe.width,Oe.height);for(let j=0;j<6;j++){W=Me[j].mipmaps;for(let fe=0;fe<W.length;fe++){const ye=W[fe];b.format!==Xt?Fe!==null?ke?D&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ye.width,ye.height,Fe,ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ye,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ye.width,ye.height,Fe,be,ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ye,ye.width,ye.height,0,Fe,be,ye.data)}}}else{if(W=b.mipmaps,ke&&ct){W.length>0&&xe++;const j=_e(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Ye,j.width,j.height)}for(let j=0;j<6;j++)if(ie){ke?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me[j].width,Me[j].height,Fe,be,Me[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,Me[j].width,Me[j].height,0,Fe,be,Me[j].data);for(let fe=0;fe<W.length;fe++){const Ke=W[fe].image[j].image;ke?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Ke.width,Ke.height,Fe,be,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ye,Ke.width,Ke.height,0,Fe,be,Ke.data)}}else{ke?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Fe,be,Me[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ye,Fe,be,Me[j]);for(let fe=0;fe<W.length;fe++){const ye=W[fe];ke?D&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Fe,be,ye.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ye,Fe,be,ye.image[j])}}}m(b)&&g(r.TEXTURE_CUBE_MAP),Z.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ne(C,b,O,K,$,Z){const Te=o.convert(O.format,O.colorSpace),ce=o.convert(O.type),ve=v(O.internalFormat,Te,ce,O.colorSpace);if(!n.get(b).__hasExternalTextures){const ie=Math.max(1,b.width>>Z),Me=Math.max(1,b.height>>Z);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Z,ve,ie,Me,b.depth,0,Te,ce,null):t.texImage2D($,Z,ve,ie,Me,0,Te,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ee(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,$,n.get(O).__webglTexture,0,oe(b)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,$,n.get(O).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(C,b,O){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,$=K&&K.isDepthTexture?K.type:null,Z=y(b.stencilBuffer,$),Te=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=oe(b);ee(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,Z,b.width,b.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,Z,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Z,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,C)}else{const K=b.textures;for(let $=0;$<K.length;$++){const Z=K[$],Te=o.convert(Z.format,Z.colorSpace),ce=o.convert(Z.type),ve=v(Z.internalFormat,Te,ce,Z.colorSpace),qe=oe(b);O&&ee(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,ve,b.width,b.height):ee(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,ve,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ve,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,$=oe(b);if(b.depthTexture.format===as)ee(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(b.depthTexture.format===fs)ee(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function De(C){const b=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ue(b.__webglFramebuffer,C)}else if(O){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=r.createRenderbuffer(),Se(b.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Se(b.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(C,b,O){const K=n.get(C);b!==void 0&&ne(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&De(C)}function Be(C){const b=C.texture,O=n.get(C),K=n.get(b);C.addEventListener("dispose",T);const $=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Te=$.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=b.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ve=0;ve<b.mipmaps.length;ve++)O.__webglFramebuffer[ce][ve]=r.createFramebuffer()}else O.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)O.__webglFramebuffer[ce]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ce=0,ve=$.length;ce<ve;ce++){const qe=n.get($[ce]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ee(C)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const ve=$[ce];O.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const qe=o.convert(ve.format,ve.colorSpace),ie=o.convert(ve.type),Me=v(ve.internalFormat,qe,ie,ve.colorSpace,C.isXRRenderTarget===!0),Oe=oe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ge(r.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)ne(O.__webglFramebuffer[ce][ve],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ve);else ne(O.__webglFramebuffer[ce],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ce=0,ve=$.length;ce<ve;ce++){const qe=$[ce],ie=n.get(qe);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),ge(r.TEXTURE_2D,qe),ne(O.__webglFramebuffer,C,qe,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),m(qe)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),ge(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)ne(O.__webglFramebuffer[ve],C,b,r.COLOR_ATTACHMENT0,ce,ve);else ne(O.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,ce,0);m(b)&&g(ce),t.unbindTexture()}C.depthBuffer&&De(C)}function Ge(C){const b=C.textures;for(let O=0,K=b.length;O<K;O++){const $=b[O];if(m($)){const Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Te=n.get($).__webglTexture;t.bindTexture(Z,Te),g(Z),t.unbindTexture()}}}const J=[],P=[];function ae(C){if(C.samples>0){if(ee(C)===!1){const b=C.textures,O=C.width,K=C.height;let $=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(C),ce=b.length>1;if(ce)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const qe=n.get(b[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,$,r.NEAREST),c===!0&&(J.length=0,P.length=0,J.push(r.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(J.push(Z),P.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const qe=n.get(b[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function oe(C){return Math.min(s.maxSamples,C.samples)}function ee(C){const b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(C){const b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function Re(C,b){const O=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ct&&O!==ei&&(Ze.getTransfer(O)===ut?(K!==Xt||$!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=Ie,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ee}function J0(r,e){function t(n,s=ei){let o;const a=Ze.getTransfer(s);if(n===Hn)return r.UNSIGNED_BYTE;if(n===wl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return r.BYTE;if(n===yu)return r.SHORT;if(n===Js)return r.UNSIGNED_SHORT;if(n===El)return r.INT;if(n===oi)return r.UNSIGNED_INT;if(n===jt)return r.FLOAT;if(n===sr)return r.HALF_FLOAT;if(n===Mu)return r.ALPHA;if(n===Su)return r.RGB;if(n===Xt)return r.RGBA;if(n===bu)return r.LUMINANCE;if(n===Eu)return r.LUMINANCE_ALPHA;if(n===as)return r.DEPTH_COMPONENT;if(n===fs)return r.DEPTH_STENCIL;if(n===Al)return r.RED;if(n===go)return r.RED_INTEGER;if(n===wu)return r.RG;if(n===Cl)return r.RG_INTEGER;if(n===Rl)return r.RGBA_INTEGER;if(n===Jr||n===$r||n===jr||n===Qr)if(a===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Jr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Jr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Fa||n===Ba||n===za)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Oa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ka||n===Ha)return a===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Va)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Ka||n===Za||n===Ja||n===$a||n===ja||n===Qa||n===el||n===tl||n===nl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ga)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return a===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===il||n===sl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===eo)return a===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===rl||n===ol||n===al)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===eo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class $0 extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let an=class extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}};const j0={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,a=null;const l=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(h,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;h.inputState.pinching&&f>p+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=p-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Mt,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:Q0,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nx extends Pi{constructor(e,t){super();const n=this;let s=null,o=1,a=null,l="local-floor",c=1,h=null,u=null,d=null,f=null,p=null,_=null;const x=new tx,m=t.getContextAttributes();let g=null,v=null;const y=[],M=[],L=new q;let T=null;const A=new At;A.layers.enable(1),A.viewport=new $e;const I=new At;I.layers.enable(2),I.viewport=new $e;const F=[A,I],S=new $0;S.layers.enable(1),S.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=y[Y];return ne===void 0&&(ne=new la,y[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=y[Y];return ne===void 0&&(ne=new la,y[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=y[Y];return ne===void 0&&(ne=new la,y[Y]=ne),ne.getHandSpace()};function k(Y){const ne=M.indexOf(Y.inputSource);if(ne===-1)return;const Se=y[ne];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,h||a),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<y.length;Y++){const ne=M[Y];ne!==null&&(M[Y]=null,y[Y].disconnect(ne))}E=null,V=null,x.reset(),e.setRenderTarget(g),p=null,f=null,d=null,s=null,v=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,Se=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?fs:as,Se=m.stencil?ds:oi);const De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:o};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ti(f.textureWidth,f.textureHeight,{format:Xt,type:Hn,depthTexture:new Bu(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(Y){for(let ne=0;ne<Y.removed.length;ne++){const Se=Y.removed[ne],ue=M.indexOf(Se);ue>=0&&(M[ue]=null,y[ue].disconnect(Se))}for(let ne=0;ne<Y.added.length;ne++){const Se=Y.added[ne];let ue=M.indexOf(Se);if(ue===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=M.length){M.push(Se),ue=Ie;break}else if(M[Ie]===null){M[Ie]=Se,ue=Ie;break}if(ue===-1)break}const De=y[ue];De&&De.connect(Se)}}const z=new R,te=new R;function X(Y,ne,Se){z.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);const ue=z.distanceTo(te),De=ne.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Be=De[14]/(De[10]-1),Ge=De[14]/(De[10]+1),J=(De[9]+1)/De[5],P=(De[9]-1)/De[5],ae=(De[8]-1)/De[0],oe=(Ie[8]+1)/Ie[0],ee=Be*ae,le=Be*oe,Re=ue/(-ae+oe),_e=Re*-ae;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_e),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),De[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const C=Be+Re,b=Ge+Re,O=ee-_e,K=le+(ue-_e),$=J*Ge/b*C,Z=P*Ge/b*C;Y.projectionMatrix.makePerspective(O,K,$,Z,C,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,Se=Y.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),S.near=I.near=A.near=ne,S.far=I.far=A.far=Se,(E!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,V=S.far);const ue=Y.parent,De=S.cameras;de(S,ue);for(let Ie=0;Ie<De.length;Ie++)de(De[Ie],ue);De.length===2?X(S,A,I):S.projectionMatrix.copy(A.projectionMatrix),me(Y,S,ue)};function me(Y,ne,Se){Se===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ps*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ge=null;function Xe(Y,ne){if(u=ne.getViewerPose(h||a),_=ne,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Ie=0;Ie<Se.length;Ie++){const Be=Se[Ie];let Ge=null;if(p!==null)Ge=p.getViewport(Be);else{const P=d.getViewSubImage(f,Be);Ge=P.viewport,Ie===0&&(e.setRenderTargetTextures(v,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(v))}let J=F[Ie];J===void 0&&(J=new At,J.layers.enable(Ie),J.viewport=new $e,F[Ie]=J),J.matrix.fromArray(Be.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Be.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ie===0&&(S.matrix.copy(J.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(J)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const Ie=d.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,s.renderState)}}for(let Se=0;Se<y.length;Se++){const ue=M[Se],De=y[Se];ue!==null&&De!==void 0&&De.update(ue,ne,h||a)}ge&&ge(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Je=new Fu;Je.setAnimationLoop(Xe),this.setAnimationLoop=function(Y){ge=Y},this.dispose=function(){}}}const mi=new cn,ix=new Le;function sx(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Uu(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(m,g):g.isMeshToonMaterial?(o(m,g),d(m,g)):g.isMeshPhongMaterial?(o(m,g),u(m,g)):g.isMeshStandardMaterial?(o(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,M)):g.isMeshMatcapMaterial?(o(m,g),_(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),x(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&l(m,g)):g.isPointsMaterial?c(m,g,v,y):g.isSpriteMaterial?h(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===qt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===qt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,mi.copy(M),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(ix.makeRotationFromEuler(mi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function l(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rx(r,e,t,n){let s={},o={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const M=y.program;n.uniformBlockBinding(v,M)}function h(v,y){let M=s[v.id];M===void 0&&(_(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(v,L);const T=e.render.frame;o[v.id]!==T&&(f(v),o[v.id]=T)}function u(v){const y=d();v.__bindingPointIndex=y;const M=r.createBuffer(),L=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,L,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<l;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],M=v.uniforms,L=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,A=M.length;T<A;T++){const I=Array.isArray(M[T])?M[T]:[M[T]];for(let F=0,S=I.length;F<S;F++){const E=I[F];if(p(E,T,F,L)===!0){const V=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let G=0;for(let Q=0;Q<k.length;Q++){const z=k[Q],te=x(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,V+G,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,y,M,L){const T=v.value,A=y+"_"+M;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const I=L[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function _(v){const y=v.uniforms;let M=0;const L=16;for(let A=0,I=y.length;A<I;A++){const F=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,E=F.length;S<E;S++){const V=F[S],k=Array.isArray(V.value)?V.value:[V.value];for(let G=0,Q=k.length;G<Q;G++){const z=k[G],te=x(z),X=M%L,de=X%te.boundary,me=X+de;M+=de,me!==0&&L-me<te.storage&&(M+=L-me),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=te.storage}}}const T=M%L;return T>0&&(M+=L-T),v.__size=M,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function g(){for(const v in s)r.deleteBuffer(s[v]);a=[],s={},o={}}return{bind:c,update:h,dispose:g}}class Xu{constructor(e={}){const{canvas:t=Zf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const g=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=ii,this.toneMappingExposure=1;const y=this;let M=!1,L=0,T=0,A=null,I=-1,F=null;const S=new $e,E=new $e;let V=null;const k=new we(0);let G=0,Q=t.width,z=t.height,te=1,X=null,de=null;const me=new $e(0,0,Q,z),ge=new $e(0,0,Q,z);let Xe=!1;const Je=new xo;let Y=!1,ne=!1;const Se=new Le,ue=new Le,De=new R,Ie=new $e,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function J(){return A===null?te:1}let P=n;function ae(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),P===null){const N="webgl2";if(P=ae(N,w),P===null)throw ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,ee,le,Re,_e,C,b,O,K,$,Z,Te,ce,ve,qe,ie,Me,Oe,Fe,be,Ye,ke,ct,D;function xe(){oe=new f_(P),oe.init(),ke=new J0(P,oe),ee=new a_(P,oe,e,ke),le=new Y0(P),ee.reverseDepthBuffer&&le.buffers.depth.setReversed(!0),Re=new g_(P),_e=new N0,C=new Z0(P,oe,le,_e,ee,ke,Re),b=new c_(y),O=new d_(y),K=new bp(P),ct=new r_(P,K),$=new p_(P,K,Re,ct),Z=new x_(P,$,K,Re),Fe=new __(P,ee,C),ie=new l_(_e),Te=new D0(y,b,O,oe,ee,ct,ie),ce=new sx(y,_e),ve=new O0,qe=new V0(oe),Oe=new s_(y,b,O,le,Z,f,c),Me=new X0(y,Z,ee),D=new rx(P,Re,ee,le),be=new o_(P,oe,Re),Ye=new m_(P,oe,Re),Re.programs=Te.programs,y.capabilities=ee,y.extensions=oe,y.properties=_e,y.renderLists=ve,y.shadowMap=Me,y.state=le,y.info=Re}xe();const W=new nx(y,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(Q,z,!1))},this.getSize=function(w){return w.set(Q,z)},this.setSize=function(w,N,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,z=N,t.width=Math.floor(w*te),t.height=Math.floor(N*te),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(Q*te,z*te).floor()},this.setDrawingBufferSize=function(w,N,B){Q=w,z=N,te=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,N,B,H){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,N,B,H),le.viewport(S.copy(me).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,N,B,H){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,N,B,H),le.scissor(E.copy(ge).multiplyScalar(te).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(w){le.setScissorTest(Xe=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,N=!0,B=!0){let H=0;if(w){let U=!1;if(A!==null){const se=A.texture.format;U=se===Rl||se===Cl||se===go}if(U){const se=A.texture.type,pe=se===Hn||se===oi||se===Js||se===ds||se===wl||se===Tl,Ee=Oe.getClearColor(),Ae=Oe.getClearAlpha(),Ne=Ee.r,Ue=Ee.g,Ce=Ee.b;pe?(p[0]=Ne,p[1]=Ue,p[2]=Ce,p[3]=Ae,P.clearBufferuiv(P.COLOR,0,p)):(_[0]=Ne,_[1]=Ue,_[2]=Ce,_[3]=Ae,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}N&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ve.dispose(),qe.dispose(),_e.dispose(),b.dispose(),O.dispose(),Z.dispose(),ct.dispose(),D.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",mc),W.removeEventListener("sessionend",gc),ci.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Re.autoReset,N=Me.enabled,B=Me.autoUpdate,H=Me.needsUpdate,U=Me.type;xe(),Re.autoReset=w,Me.enabled=N,Me.autoUpdate=B,Me.needsUpdate=H,Me.type=U}function ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const N=w.target;N.removeEventListener("dispose",Ke),gt(N)}function gt(w){Ht(w),_e.remove(w)}function Ht(w){const N=_e.get(w).programs;N!==void 0&&(N.forEach(function(B){Te.releaseProgram(B)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,H,U,se){N===null&&(N=Be);const pe=U.isMesh&&U.matrixWorld.determinant()<0,Ee=Id(w,N,B,H,U);le.setMaterial(H,pe);let Ae=B.index,Ne=1;if(H.wireframe===!0){if(Ae=$.getWireframeAttribute(B),Ae===void 0)return;Ne=2}const Ue=B.drawRange,Ce=B.attributes.position;let nt=Ue.start*Ne,ht=(Ue.start+Ue.count)*Ne;se!==null&&(nt=Math.max(nt,se.start*Ne),ht=Math.min(ht,(se.start+se.count)*Ne)),Ae!==null?(nt=Math.max(nt,0),ht=Math.min(ht,Ae.count)):Ce!=null&&(nt=Math.max(nt,0),ht=Math.min(ht,Ce.count));const ft=ht-nt;if(ft<0||ft===1/0)return;ct.setup(U,H,Ee,B,Ae);let Yt,et=be;if(Ae!==null&&(Yt=K.get(Ae),et=Ye,et.setIndex(Yt)),U.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*J()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(U.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),le.setLineWidth(Pe*J()),U.isLineSegments?et.setMode(P.LINES):U.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else U.isPoints?et.setMode(P.POINTS):U.isSprite&&et.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,Tt=U._multiDrawCounts,tt=U._multiDrawCount,hn=Ae?K.get(Ae).bytesPerElement:1,Di=_e.get(H).currentProgram.getUniforms();for(let Kt=0;Kt<tt;Kt++)Di.setValue(P,"_gl_DrawID",Kt),et.render(Pe[Kt]/hn,Tt[Kt])}else if(U.isInstancedMesh)et.renderInstances(nt,ft,U.count);else if(B.isInstancedBufferGeometry){const Pe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Tt=Math.min(B.instanceCount,Pe);et.renderInstances(nt,ft,Tt)}else et.render(nt,ft)};function je(w,N,B){w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,ar(w,N,B),w.side=zn,w.needsUpdate=!0,ar(w,N,B),w.side=Bt):ar(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),m=qe.get(B),m.init(N),v.push(m),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const H=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Ee=se[pe];je(Ee,B,U),H.add(Ee)}else je(se,B,U),H.add(se)}),v.pop(),m=null,H},this.compileAsync=function(w,N,B=null){const H=this.compile(w,N,B);return new Promise(U=>{function se(){if(H.forEach(function(pe){_e.get(pe).currentProgram.isReady()&&H.delete(pe)}),H.size===0){U(w);return}setTimeout(se,10)}oe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Vt=null;function wn(w){Vt&&Vt(w)}function mc(){ci.stop()}function gc(){ci.start()}const ci=new Fu;ci.setAnimationLoop(wn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(w){Vt=w,W.setAnimationLoop(w),w===null?ci.stop():ci.start()},W.addEventListener("sessionstart",mc),W.addEventListener("sessionend",gc),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,N,A),m=qe.get(w,v.length),m.init(N),v.push(m),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Je.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,Y=ie.init(this.clippingPlanes,ne),x=ve.get(w,g.length),x.init(),g.push(x),W.enabled===!0&&W.isPresenting===!0){const se=y.xr.getDepthSensingMesh();se!==null&&Po(se,N,-1/0,y.sortObjects)}Po(w,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(X,de),Ge=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ge&&Oe.addToRenderList(x,w),this.info.render.frame++,Y===!0&&ie.beginShadows();const B=m.state.shadowsArray;Me.render(B,w,N),Y===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,U=x.transmissive;if(m.setupLights(),N.isArrayCamera){const se=N.cameras;if(U.length>0)for(let pe=0,Ee=se.length;pe<Ee;pe++){const Ae=se[pe];xc(H,U,w,Ae)}Ge&&Oe.render(w);for(let pe=0,Ee=se.length;pe<Ee;pe++){const Ae=se[pe];_c(x,w,Ae,Ae.viewport)}}else U.length>0&&xc(H,U,w,N),Ge&&Oe.render(w),_c(x,w,N);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,N),ct.resetDefaultState(),I=-1,F=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&ie.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function Po(w,N,B,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){H&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const pe=Z.update(w),Ee=w.material;Ee.visible&&x.push(w,pe,Ee,B,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const pe=Z.update(w),Ee=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ie.copy(pe.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){const Ae=pe.groups;for(let Ne=0,Ue=Ae.length;Ne<Ue;Ne++){const Ce=Ae[Ne],nt=Ee[Ce.materialIndex];nt&&nt.visible&&x.push(w,pe,nt,B,Ie.z,Ce)}}else Ee.visible&&x.push(w,pe,Ee,B,Ie.z,null)}}const se=w.children;for(let pe=0,Ee=se.length;pe<Ee;pe++)Po(se[pe],N,B,H)}function _c(w,N,B,H){const U=w.opaque,se=w.transmissive,pe=w.transparent;m.setupLightsView(B),Y===!0&&ie.setGlobalState(y.clippingPlanes,B),H&&le.viewport(S.copy(H)),U.length>0&&or(U,N,B),se.length>0&&or(se,N,B),pe.length>0&&or(pe,N,B),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function xc(w,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Ti(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?sr:Hn,minFilter:xn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const se=m.state.transmissionRenderTarget[H.id],pe=H.viewport||S;se.setSize(pe.z,pe.w);const Ee=y.getRenderTarget();y.setRenderTarget(se),y.getClearColor(k),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&Oe.render(B);const Ae=y.toneMapping;y.toneMapping=ii;const Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Y===!0&&ie.setGlobalState(y.clippingPlanes,H),or(w,B,H),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ce=0,nt=N.length;Ce<nt;Ce++){const ht=N[Ce],ft=ht.object,Yt=ht.geometry,et=ht.material,Pe=ht.group;if(et.side===Bt&&ft.layers.test(H.layers)){const Tt=et.side;et.side=qt,et.needsUpdate=!0,yc(ft,B,H,Yt,et,Pe),et.side=Tt,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}y.setRenderTarget(Ee),y.setClearColor(k,G),Ne!==void 0&&(H.viewport=Ne),y.toneMapping=Ae}function or(w,N,B){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,se=w.length;U<se;U++){const pe=w[U],Ee=pe.object,Ae=pe.geometry,Ne=H===null?pe.material:H,Ue=pe.group;Ee.layers.test(B.layers)&&yc(Ee,N,B,Ae,Ne,Ue)}}function yc(w,N,B,H,U,se){w.onBeforeRender(y,N,B,H,U,se),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,N,B,H,w,se),U.transparent===!0&&U.side===Bt&&U.forceSinglePass===!1?(U.side=qt,U.needsUpdate=!0,y.renderBufferDirect(B,N,H,U,w,se),U.side=zn,U.needsUpdate=!0,y.renderBufferDirect(B,N,H,U,w,se),U.side=Bt):y.renderBufferDirect(B,N,H,U,w,se),w.onAfterRender(y,N,B,H,U,se)}function ar(w,N,B){N.isScene!==!0&&(N=Be);const H=_e.get(w),U=m.state.lights,se=m.state.shadowsArray,pe=U.state.version,Ee=Te.getParameters(w,U.state,se,N,B),Ae=Te.getProgramCacheKey(Ee);let Ne=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?O:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Ke),Ne=new Map,H.programs=Ne);let Ue=Ne.get(Ae);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===pe)return Mc(w,Ee),Ue}else Ee.uniforms=Te.getUniforms(w),w.onBeforeCompile(Ee,y),Ue=Te.acquireProgram(Ee,Ae),Ne.set(Ae,Ue),H.uniforms=Ee.uniforms;const Ce=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ie.uniform),Mc(w,Ee),H.needsLights=Nd(w),H.lightsStateVersion=pe,H.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function vc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=no.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Mc(w,N){const B=_e.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Id(w,N,B,H,U){N.isScene!==!0&&(N=Be),C.resetTextureUnits();const se=N.fog,pe=H.isMeshStandardMaterial?N.environment:null,Ee=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ct,Ae=(H.isMeshStandardMaterial?O:b).get(H.envMap||pe),Ne=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ue=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,ht=!!B.morphAttributes.color;let ft=ii;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ft=y.toneMapping);const Yt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=Yt!==void 0?Yt.length:0,Pe=_e.get(H),Tt=m.state.lights;if(Y===!0&&(ne===!0||w!==F)){const Qt=w===F&&H.id===I;ie.setState(H,w,Qt)}let tt=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Tt.state.version||Pe.outputColorSpace!==Ee||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==Ae||H.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ce||Pe.morphNormals!==nt||Pe.morphColors!==ht||Pe.toneMapping!==ft||Pe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Pe.__version=H.version);let hn=Pe.currentProgram;tt===!0&&(hn=ar(H,N,U));let Di=!1,Kt=!1,Lo=!1;const mt=hn.getUniforms(),Wn=Pe.uniforms;if(le.useProgram(hn.program)&&(Di=!0,Kt=!0,Lo=!0),H.id!==I&&(I=H.id,Kt=!0),Di||F!==w){ee.reverseDepthBuffer?(Se.copy(w.projectionMatrix),$f(Se),jf(Se),mt.setValue(P,"projectionMatrix",Se)):mt.setValue(P,"projectionMatrix",w.projectionMatrix),mt.setValue(P,"viewMatrix",w.matrixWorldInverse);const Qt=mt.map.cameraPosition;Qt!==void 0&&Qt.setValue(P,De.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),F!==w&&(F=w,Kt=!0,Lo=!0)}if(U.isSkinnedMesh){mt.setOptional(P,U,"bindMatrix"),mt.setOptional(P,U,"bindMatrixInverse");const Qt=U.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),mt.setValue(P,"boneTexture",Qt.boneTexture,C))}U.isBatchedMesh&&(mt.setOptional(P,U,"batchingTexture"),mt.setValue(P,"batchingTexture",U._matricesTexture,C),mt.setOptional(P,U,"batchingIdTexture"),mt.setValue(P,"batchingIdTexture",U._indirectTexture,C),mt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(P,"batchingColorTexture",U._colorsTexture,C));const Io=B.morphAttributes;if((Io.position!==void 0||Io.normal!==void 0||Io.color!==void 0)&&Fe.update(U,B,hn),(Kt||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,mt.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Wn.envMap.value=Ae,Wn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Wn.envMapIntensity.value=N.environmentIntensity),Kt&&(mt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&Dd(Wn,Lo),se&&H.fog===!0&&ce.refreshFogUniforms(Wn,se),ce.refreshMaterialUniforms(Wn,H,te,z,m.state.transmissionRenderTarget[w.id]),no.upload(P,vc(Pe),Wn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(no.upload(P,vc(Pe),Wn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(P,"center",U.center),mt.setValue(P,"modelViewMatrix",U.modelViewMatrix),mt.setValue(P,"normalMatrix",U.normalMatrix),mt.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Qt=H.uniformsGroups;for(let Do=0,Ud=Qt.length;Do<Ud;Do++){const Sc=Qt[Do];D.update(Sc,hn),D.bind(Sc,hn)}}return hn}function Dd(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Nd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,B){_e.get(w.texture).__webglTexture=N,_e.get(w.depthTexture).__webglTexture=B;const H=_e.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const B=_e.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){A=w,L=N,T=B;let H=!0,U=null,se=!1,pe=!1;if(w){const Ae=_e.get(w);if(Ae.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ae.__hasExternalTextures)C.rebindTextures(w,_e.get(w.texture).__webglTexture,_e.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&_e.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);const Ue=_e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][B]:U=Ue[N],se=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=_e.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[B]:U=Ue,S.copy(w.viewport),E.copy(w.scissor),V=w.scissorTest}else S.copy(me).multiplyScalar(te).floor(),E.copy(ge).multiplyScalar(te).floor(),V=Xe;if(le.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&le.drawBuffers(w,U),le.viewport(S),le.scissor(E),le.setScissorTest(V),se){const Ae=_e.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,B)}else if(pe){const Ae=_e.get(w.texture),Ne=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,Ne)}I=-1},this.readRenderTargetPixels=function(w,N,B,H,U,se,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){le.bindFramebuffer(P.FRAMEBUFFER,Ee);try{const Ae=w.texture,Ne=Ae.format,Ue=Ae.type;if(!ee.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&B>=0&&B<=w.height-U&&P.readPixels(N,B,H,U,ke.convert(Ne),ke.convert(Ue),se)}finally{const Ae=A!==null?_e.get(A).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,H,U,se,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){const Ae=w.texture,Ne=Ae.format,Ue=Ae.type;if(!ee.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&B>=0&&B<=w.height-U){le.bindFramebuffer(P.FRAMEBUFFER,Ee);const Ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(N,B,H,U,ke.convert(Ne),ke.convert(Ue),0);const nt=A!==null?_e.get(A).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,nt);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Jf(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ce),P.deleteSync(ht),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,B=0){w.isTexture!==!0&&(to("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-B),U=Math.floor(w.image.width*H),se=Math.floor(w.image.height*H),pe=N!==null?N.x:0,Ee=N!==null?N.y:0;C.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,pe,Ee,U,se),le.unbindTexture()},this.copyTextureToTexture=function(w,N,B=null,H=null,U=0){w.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let se,pe,Ee,Ae,Ne,Ue;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,Ee=B.min.x,Ae=B.min.y):(se=w.image.width,pe=w.image.height,Ee=0,Ae=0),H!==null?(Ne=H.x,Ue=H.y):(Ne=0,Ue=0);const Ce=ke.convert(N.format),nt=ke.convert(N.type);C.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Yt=P.getParameter(P.UNPACK_SKIP_PIXELS),et=P.getParameter(P.UNPACK_SKIP_ROWS),Pe=P.getParameter(P.UNPACK_SKIP_IMAGES),Tt=w.isCompressedTexture?w.mipmaps[U]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ee),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ne,Ue,se,pe,Ce,nt,Tt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ne,Ue,Tt.width,Tt.height,Ce,Tt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ne,Ue,se,pe,Ce,nt,Tt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Yt),P.pixelStorei(P.UNPACK_SKIP_ROWS,et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe),U===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B=null,H=null,U=0){w.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0);let se,pe,Ee,Ae,Ne,Ue,Ce,nt,ht;const ft=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(se=B.max.x-B.min.x,pe=B.max.y-B.min.y,Ee=B.max.z-B.min.z,Ae=B.min.x,Ne=B.min.y,Ue=B.min.z):(se=ft.width,pe=ft.height,Ee=ft.depth,Ae=0,Ne=0,Ue=0),H!==null?(Ce=H.x,nt=H.y,ht=H.z):(Ce=0,nt=0,ht=0);const Yt=ke.convert(N.format),et=ke.convert(N.type);let Pe;if(N.isData3DTexture)C.setTexture3D(N,0),Pe=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)C.setTexture2DArray(N,0),Pe=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Tt=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hn=P.getParameter(P.UNPACK_SKIP_PIXELS),Di=P.getParameter(P.UNPACK_SKIP_ROWS),Kt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Pe,U,Ce,nt,ht,se,pe,Ee,Yt,et,ft.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,U,Ce,nt,ht,se,pe,Ee,Yt,ft.data):P.texSubImage3D(Pe,U,Ce,nt,ht,se,pe,Ee,Yt,et,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Di),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt),U===0&&N.generateMipmaps&&P.generateMipmap(Pe),le.unbindTexture()},this.initRenderTarget=function(w){_e.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,le.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===_o?"display-p3":"srgb"}}class Ul{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new Ul(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ol{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new Ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fl extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new R;class Ai{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),o=it(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ai(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qu extends wt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ki;const Ds=new R,Zi=new R,Ji=new R,$i=new q,Ns=new q,Yu=new Le,Rr=new R,Us=new R,Pr=new R,Eh=new q,ca=new q,wh=new q;class ox extends at{constructor(e=new qu){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bl(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Ai(n,3,0,!1)),Ki.setAttribute("uv",new Ai(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),Yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const a=this.center;Lr(Rr.set(-.5,-.5,0),Ji,a,Zi,s,o),Lr(Us.set(.5,-.5,0),Ji,a,Zi,s,o),Lr(Pr.set(.5,.5,0),Ji,a,Zi,s,o),Eh.set(0,0),ca.set(1,0),wh.set(1,1);let l=e.ray.intersectTriangle(Rr,Us,Pr,!1,Ds);if(l===null&&(Lr(Us.set(-.5,.5,0),Ji,a,Zi,s,o),ca.set(0,1),l=e.ray.intersectTriangle(Rr,Pr,Us,!1,Ds),l===null))return;const c=e.ray.origin.distanceTo(Ds);c<e.near||c>e.far||t.push({distance:c,point:Ds.clone(),uv:$t.getInterpolation(Ds,Rr,Us,Pr,Eh,ca,wh,new q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lr(r,e,t,n,s,o){$i.subVectors(r,t).addScalar(.5).multiply(n),s!==void 0?(Ns.x=o*$i.x-s*$i.y,Ns.y=s*$i.x+o*$i.y):Ns.copy($i),r.copy(e),r.x+=Ns.x,r.y+=Ns.y,r.applyMatrix4(Yu)}const Ir=new R,Th=new R;class ax extends at{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const o=t[n];this.addLevel(o.object.clone(),o.distance,o.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let o;for(o=0;o<s.length&&!(t<s[o].distance);o++);return s.splice(o,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let o=t[n].distance;if(t[n].object.visible&&(o-=o*t[n].hysteresis),e<o)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ir.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Ir);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ir.setFromMatrixPosition(e.matrixWorld),Th.setFromMatrixPosition(this.matrixWorld);const n=Ir.distanceTo(Th)/e.zoom;t[0].object.visible=!0;let s,o;for(s=1,o=t.length;s<o;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<o;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,o=n.length;s<o;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Ah=new R,Ch=new $e,Rh=new $e,lx=new R,Ph=new Le,Dr=new R,ha=new Nt,Lh=new Le,ua=new Ms;class Ku extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pc,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(s),e.ray.intersectsSphere(ha)!==!1&&(Lh.copy(s).invert(),ua.copy(e.ray).applyMatrix4(Lh),!(this.boundingBox!==null&&ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ua)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ch.fromBufferAttribute(s.attributes.skinIndex,e),Rh.fromBufferAttribute(s.attributes.skinWeight,e),Ah.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const a=Rh.getComponent(o);if(a!==0){const l=Ch.getComponent(o);Ph.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(lx.copy(Ah).applyMatrix4(Ph),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class zl extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class si extends Mt{constructor(e=null,t=1,n=1,s,o,a,l,c,h=Dt,u=Dt,d,f){super(null,a,l,c,h,u,s,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new Le,cx=new Le;class Mo{constructor(e=[],t=[]){this.uuid=ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,a=e.length;o<a;o++){const l=e[o]?e[o].matrixWorld:cx;Ih.multiplyMatrices(l,t[o]),Ih.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Mo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new si(t,e,e,Xt,jt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const o=e.bones[n];let a=t[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new zl),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const a=t[s];e.bones.push(a.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class gs extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ji=new Le,Dh=new Le,Nr=[],Nh=new kt,hx=new Le,Os=new rt,Fs=new Nt;class Zu extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Nh.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Nh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Fs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,a=e*o+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ji),Dh.multiplyMatrices(n,ji),Os.matrixWorld=Dh,Os.raycast(e,Nr);for(let a=0,l=Nr.length;a<l;a++){const c=Nr[a];c.instanceId=o,c.object=this,t.push(c)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(s*this.count),s,this.count,Al,jt));const o=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,c=s*e;o[c]=l,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function ux(r,e){return r.z-e.z}function dx(r,e){return e.z-r.z}class fx{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const $n=new Le,da=new Le,px=new Le,mx=new we(1,1,1),Uh=new Le,fa=new xo,Ur=new kt,gi=new Nt,Bs=new R,Oh=new R,gx=new R,pa=new fx,Lt=new rt,Or=[];function _x(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const s=r.count;for(let o=0;o<s;o++)for(let a=0;a<n;a++)e.setComponent(o+t,a,r.getComponent(o,a))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class xx extends rt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,s){super(new lt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new si(t,e,e,Xt,jt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new si(t,e,e,go,oi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new si(t,e,e,Xt,jt);n.colorSpace=Ze.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const a=e.getAttribute(o),{array:l,itemSize:c,normalized:h}=a,u=new l.constructor(n*c),d=new yt(u,c,h);t.setAttribute(o,d)}if(e.getIndex()!==null){const o=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new yt(o,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),o=t.getAttribute(n);if(s.itemSize!==o.itemSize||s.normalized!==o.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.boundingBox,t=this._drawInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const o=t[n].geometryIndex;this.getMatrixAt(n,$n),this.getBoundingBoxAt(o,Ur).applyMatrix4($n),e.union(Ur)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const o=t[n].geometryIndex;this.getMatrixAt(n,$n),this.getBoundingSphereAt(o,gi).applyMatrix4($n),e.union(gi)}}addInstance(e){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(s=this._availableInstanceIds.pop(),this._drawInfo[s]=n):(s=this._drawInfo.length,this._drawInfo.push(n));const o=this._matricesTexture,a=o.image.data;px.toArray(a,s*16),o.needsUpdate=!0;const l=this._colorsTexture;return l&&(mx.toArray(l.image.data,s*4),l.needsUpdate=!0),s}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const s={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let o=null;const a=this._reservedRanges,l=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(o=a[a.length-1]),t===-1?s.vertexCount=e.getAttribute("position").count:s.vertexCount=t,o===null?s.vertexStart=0:s.vertexStart=o.vertexStart+o.vertexCount;const h=e.getIndex(),u=h!==null;if(u&&(n===-1?s.indexCount=h.count:s.indexCount=n,o===null?s.indexStart=0:s.indexStart=o.indexStart+o.indexCount),s.indexStart!==-1&&s.indexStart+s.indexCount>this._maxIndexCount||s.vertexStart+s.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const d=this._geometryCount;return this._geometryCount++,a.push(s),l.push({start:u?s.indexStart:s.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new kt,sphereInitialized:!1,sphere:new Nt}),this.setGeometryAt(d,e),d}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,o=n.getIndex(),a=t.getIndex(),l=this._reservedRanges[e];if(s&&a.count>l.indexCount||t.attributes.position.count>l.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=l.vertexStart,h=l.vertexCount;for(const p in n.attributes){const _=t.getAttribute(p),x=n.getAttribute(p);_x(_,x,c);const m=_.itemSize;for(let g=_.count,v=h;g<v;g++){const y=c+g;for(let M=0;M<m;M++)x.setComponent(y,M,0)}x.needsUpdate=!0,x.addUpdateRange(c*m,h*m)}if(s){const p=l.indexStart;for(let _=0;_<a.count;_++)o.setX(p+_,c+a.getX(_));for(let _=a.count,x=l.indexCount;_<x;_++)o.setX(p+_,c);o.needsUpdate=!0,o.addUpdateRange(p,l.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const d=this._drawRanges[e],f=t.getAttribute("position");return d.count=s?a.count:f.count,this._visibilityChanged=!0,e}deleteInstance(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],s=n.box,o=this.geometry;if(n.boxInitialized===!1){s.makeEmpty();const a=o.index,l=o.attributes.position,c=this._drawRanges[e];for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;a&&(d=a.getX(d)),s.expandByPoint(Bs.fromBufferAttribute(l,d))}n.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],s=n.sphere,o=this.geometry;if(n.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,Ur),Ur.getCenter(s.center);const a=o.index,l=o.attributes.position,c=this._drawRanges[e];let h=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;a&&(f=a.getX(f)),Bs.fromBufferAttribute(l,f),h=Math.max(h,s.center.distanceToSquared(Bs))}s.radius=Math.sqrt(h),n.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._drawInfo,s=this._matricesTexture,o=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(o,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,s=this._colorsTexture.image.data,o=this._drawInfo;return e>=o.length||o[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,s=this._drawInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||t<0||t>=this._geometryCount?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;const n=this._drawRanges[e];return t.start=n.start,t.count=n.count,t}raycast(e,t){const n=this._drawInfo,s=this._drawRanges,o=this.matrixWorld,a=this.geometry;Lt.material=this.material,Lt.geometry.index=a.index,Lt.geometry.attributes=a.attributes,Lt.geometry.boundingBox===null&&(Lt.geometry.boundingBox=new kt),Lt.geometry.boundingSphere===null&&(Lt.geometry.boundingSphere=new Nt);for(let l=0,c=n.length;l<c;l++){if(!n[l].visible||!n[l].active)continue;const h=n[l].geometryIndex,u=s[h];Lt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(l,Lt.matrixWorld).premultiply(o),this.getBoundingBoxAt(h,Lt.geometry.boundingBox),this.getBoundingSphereAt(h,Lt.geometry.boundingSphere),Lt.raycast(e,Or);for(let d=0,f=Or.length;d<f;d++){const p=Or[d];p.object=this,p.batchId=l,t.push(p)}Or.length=0}Lt.material=null,Lt.geometry.index=null,Lt.geometry.attributes={},Lt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,o){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),l=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._drawInfo,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data;f&&(Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),fa.setFromProjectionMatrix(Uh,e.coordinateSystem));let x=0;if(this.sortObjects){da.copy(this.matrixWorld).invert(),Bs.setFromMatrixPosition(n.matrixWorld).applyMatrix4(da),Oh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(da);for(let v=0,y=c.length;v<y;v++)if(c[v].visible&&c[v].active){const M=c[v].geometryIndex;this.getMatrixAt(v,$n),this.getBoundingSphereAt(M,gi).applyMatrix4($n);let L=!1;if(f&&(L=!fa.intersectsSphere(gi)),!L){const T=gx.subVectors(gi.center,Bs).dot(Oh);pa.push(d[M],T,v)}}const m=pa.list,g=this.customSort;g===null?m.sort(o.transparent?dx:ux):g.call(this,m,n);for(let v=0,y=m.length;v<y;v++){const M=m[v];h[x]=M.start*l,u[x]=M.count,_[x]=M.index,x++}pa.reset()}else for(let m=0,g=c.length;m<g;m++)if(c[m].visible&&c[m].active){const v=c[m].geometryIndex;let y=!1;if(f&&(this.getMatrixAt(m,$n),this.getBoundingSphereAt(v,gi).applyMatrix4($n),y=!fa.intersectsSphere(gi)),!y){const M=d[v];h[x]=M.start*l,u[x]=M.count,_[x]=m,x++}}p.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,o,a){this.onBeforeRender(e,null,s,o,a)}}class So extends wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new R,uo=new R,Fh=new Le,zs=new Ms,Fr=new Nt,ma=new R,Bh=new R;class bo extends at{constructor(e=new lt,t=new So){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)ho.fromBufferAttribute(t,s-1),uo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ho.distanceTo(uo);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=o,e.ray.intersectsSphere(Fr)===!1)return;Fh.copy(s).invert(),zs.copy(e.ray).applyMatrix4(Fh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=h){const g=u.getX(x),v=u.getX(x+1),y=Br(this,e,zs,c,g,v);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),g=Br(this,e,zs,c,x,m);g&&t.push(g)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=h){const g=Br(this,e,zs,c,x,x+1);g&&t.push(g)}if(this.isLineLoop){const x=Br(this,e,zs,c,_-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Br(r,e,t,n,s,o){const a=r.geometry.attributes.position;if(ho.fromBufferAttribute(a,s),uo.fromBufferAttribute(a,o),t.distanceSqToSegment(ho,uo,ma,Bh)>n)return;ma.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ma);if(!(c<e.near||c>e.far))return{distance:c,point:Bh.clone().applyMatrix4(r.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:r}}const zh=new R,kh=new R;class Ju extends bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)zh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zh.distanceTo(kh);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $u extends bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kl extends wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new Le,ul=new Ms,zr=new Nt,kr=new R;class ju extends at{constructor(e=new lt,t=new kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=o,e.ray.intersectsSphere(zr)===!1)return;Hh.copy(s).invert(),ul.copy(e.ray).applyMatrix4(Hh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,x=p;_<x;_++){const m=h.getX(_);kr.fromBufferAttribute(d,m),Vh(kr,m,c,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,x=p;_<x;_++)kr.fromBufferAttribute(d,_),Vh(kr,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Vh(r,e,t,n,s,o,a){const l=ul.distanceSqToPoint(r);if(l<t){const c=new R;ul.closestPointToPoint(r,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const o=n.length;let a;t?a=t:a=e*n[o-1];let l=0,c=o-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(o-1);const u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const a=this.getPoint(s),l=this.getPoint(o),c=t||(a.isVector2?new q:new R);return c.copy(l).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],o=[],a=[],l=new R,c=new Le;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new R)}o[0]=new R,a[0]=new R;let h=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),f<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],l),a[0].crossVectors(s[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),l.crossVectors(s[p-1],s[p]),l.length()>Number.EPSILON){l.normalize();const _=Math.acos(xt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(l,_))}a[p].crossVectors(s[p],o[p])}if(t===!0){let p=Math.acos(xt(o[0].dot(o[e]),-1,1));p/=e,s[0].dot(l.crossVectors(o[0],o[e]))>0&&(p=-p);for(let _=1;_<=e;_++)o[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],o[_])}return{tangents:s,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hl extends bn{constructor(e=0,t=0,n=1,s=1,o=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(e,t=new q){const n=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(a?o=0:o=s),this.aClockwise===!0&&!a&&(o===s?o=-s:o=o-s);const l=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=h-this.aY;c=f*u-p*d+this.aX,h=f*d+p*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yx extends Hl{constructor(e,t,n,s,o,a){super(e,t,n,n,s,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Vl(){let r=0,e=0,t=0,n=0;function s(o,a,l,c){r=o,e=l,t=-3*o+3*a-2*l-c,n=2*o-2*a+l+c}return{initCatmullRom:function(o,a,l,c,h){s(a,l,h*(l-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,l,c,h,u,d){let f=(a-o)/h-(l-o)/(h+u)+(l-a)/u,p=(l-a)/u-(c-a)/(u+d)+(c-l)/d;f*=u,p*=u,s(a,l,f,p)},calc:function(o){const a=o*o,l=a*o;return r+e*o+t*a+n*l}}}const Hr=new R,ga=new Vl,_a=new Vl,xa=new Vl;class vx extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,o=s.length,a=(o-(this.closed?0:1))*e;let l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:c===0&&l===o-1&&(l=o-2,c=1);let h,u;this.closed||l>0?h=s[(l-1)%o]:(Hr.subVectors(s[0],s[1]).add(s[0]),h=Hr);const d=s[l%o],f=s[(l+1)%o];if(this.closed||l+2<o?u=s[(l+2)%o]:(Hr.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),ga.initNonuniformCatmullRom(h.x,d.x,f.x,u.x,_,x,m),_a.initNonuniformCatmullRom(h.y,d.y,f.y,u.y,_,x,m),xa.initNonuniformCatmullRom(h.z,d.z,f.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(h.x,d.x,f.x,u.x,this.tension),_a.initCatmullRom(h.y,d.y,f.y,u.y,this.tension),xa.initCatmullRom(h.z,d.z,f.z,u.z,this.tension));return n.set(ga.calc(c),_a.calc(c),xa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gh(r,e,t,n,s){const o=(n-e)*.5,a=(s-t)*.5,l=r*r,c=r*l;return(2*t-2*n+o+a)*c+(-3*t+3*n-2*o-a)*l+o*r+t}function Mx(r,e){const t=1-r;return t*t*e}function Sx(r,e){return 2*(1-r)*r*e}function bx(r,e){return r*r*e}function Ys(r,e,t,n){return Mx(r,e)+Sx(r,t)+bx(r,n)}function Ex(r,e){const t=1-r;return t*t*t*e}function wx(r,e){const t=1-r;return 3*t*t*r*e}function Tx(r,e){return 3*(1-r)*r*r*e}function Ax(r,e){return r*r*r*e}function Ks(r,e,t,n,s){return Ex(r,e)+wx(r,t)+Tx(r,n)+Ax(r,s)}class Qu extends bn{constructor(e=new q,t=new q,n=new q,s=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new q){const n=t,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return n.set(Ks(e,s.x,o.x,a.x,l.x),Ks(e,s.y,o.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cx extends bn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,o=this.v1,a=this.v2,l=this.v3;return n.set(Ks(e,s.x,o.x,a.x,l.x),Ks(e,s.y,o.y,a.y,l.y),Ks(e,s.z,o.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends bn{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends bn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends bn{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){const n=t,s=this.v0,o=this.v1,a=this.v2;return n.set(Ys(e,s.x,o.x,a.x),Ys(e,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nd extends bn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,o=this.v1,a=this.v2;return n.set(Ys(e,s.x,o.x,a.x),Ys(e,s.y,o.y,a.y),Ys(e,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new q){const n=t,s=this.points,o=(s.length-1)*e,a=Math.floor(o),l=o-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Gh(l,c.x,h.x,u.x,d.x),Gh(l,c.y,h.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new q().fromArray(s))}return this}}var fo=Object.freeze({__proto__:null,ArcCurve:yx,CatmullRomCurve3:vx,CubicBezierCurve:Qu,CubicBezierCurve3:Cx,EllipseCurve:Hl,LineCurve:ed,LineCurve3:Rx,QuadraticBezierCurve:td,QuadraticBezierCurve3:nd,SplineCurve:id});class Px extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const a=s[o]-n,l=this.curves[o],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const a=o[s],l=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(l);for(let h=0;h<c.length;h++){const u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new fo[s.type]().fromJSON(s))}return this}}class dl extends Px{constructor(e){super(),this.type="Path",this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ed(this.currentPoint.clone(),new q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new td(this.currentPoint.clone(),new q(e,t),new q(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,a){const l=new Qu(this.currentPoint.clone(),new q(e,t),new q(n,s),new q(o,a));return this.curves.push(l),this.currentPoint.set(o,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new id(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,a){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,s,o,a),this}absarc(e,t,n,s,o,a){return this.absellipse(e,t,n,n,s,o,a),this}ellipse(e,t,n,s,o,a,l,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,s,o,a,l,c),this}absellipse(e,t,n,s,o,a,l,c){const h=new Hl(e,t,n,s,o,a,l,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Eo extends lt{constructor(e=[new q(0,-.5),new q(.5,0),new q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);const o=[],a=[],l=[],c=[],h=[],u=1/t,d=new R,f=new q,p=new R,_=new R,x=new R;let m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=g*1,p.y=-m,p.z=g*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=g*1,p.y=-m,p.z=g*0,_.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(_)}for(let v=0;v<=t;v++){const y=n+v*u*s,M=Math.sin(y),L=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*L,a.push(d.x,d.y,d.z),f.x=v/t,f.y=T/(e.length-1),l.push(f.x,f.y);const A=c[3*T+0]*M,I=c[3*T+1],F=c[3*T+0]*L;h.push(A,I,F)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const M=y+v*e.length,L=M,T=M+e.length,A=M+e.length+1,I=M+1;o.push(L,T,I),o.push(A,I,T)}this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("uv",new ze(l,2)),this.setAttribute("normal",new ze(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.points,e.segments,e.phiStart,e.phiLength)}}class Gl extends Eo{constructor(e=1,t=1,n=4,s=8){const o=new dl;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Gl(e.radius,e.length,e.capSegments,e.radialSegments)}}class Wl extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const o=[],a=[],l=[],c=[],h=new R,u=new q;a.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const p=n+d/t*s;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),l.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bs extends lt{constructor(e=1,t=1,n=1,s=32,o=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:c};const h=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],f=[],p=[];let _=0;const x=[],m=n/2;let g=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(p,2));function v(){const M=new R,L=new R;let T=0;const A=(t-e)/n;for(let I=0;I<=o;I++){const F=[],S=I/o,E=S*(t-e)+e;for(let V=0;V<=s;V++){const k=V/s,G=k*c+l,Q=Math.sin(G),z=Math.cos(G);L.x=E*Q,L.y=-S*n+m,L.z=E*z,d.push(L.x,L.y,L.z),M.set(Q,A,z).normalize(),f.push(M.x,M.y,M.z),p.push(k,1-S),F.push(_++)}x.push(F)}for(let I=0;I<s;I++)for(let F=0;F<o;F++){const S=x[F][I],E=x[F+1][I],V=x[F+1][I+1],k=x[F][I+1];e>0&&(u.push(S,E,k),T+=3),t>0&&(u.push(E,V,k),T+=3)}h.addGroup(g,T,0),g+=T}function y(M){const L=_,T=new q,A=new R;let I=0;const F=M===!0?e:t,S=M===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),_++;const E=_;for(let V=0;V<=s;V++){const G=V/s*c+l,Q=Math.cos(G),z=Math.sin(G);A.x=F*z,A.y=m*S,A.z=F*Q,d.push(A.x,A.y,A.z),f.push(0,S,0),T.x=Q*.5+.5,T.y=z*.5*S+.5,p.push(T.x,T.y),_++}for(let V=0;V<s;V++){const k=L+V,G=E+V;M===!0?u.push(G,G+1,k):u.push(G+1,G,k),I+=3}h.addGroup(g,I,M===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xl extends bs{constructor(e=1,t=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(0,e,t,n,s,o,a,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l}}static fromJSON(e){return new Xl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Li extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const o=[],a=[];l(s),h(n),u(),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(o.slice(),3)),this.setAttribute("uv",new ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){const y=new R,M=new R,L=new R;for(let T=0;T<t.length;T+=3)p(t[T+0],y),p(t[T+1],M),p(t[T+2],L),c(y,M,L,v)}function c(v,y,M,L){const T=L+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const F=v.clone().lerp(M,I/T),S=y.clone().lerp(M,I/T),E=T-I;for(let V=0;V<=E;V++)V===0&&I===T?A[I][V]=F:A[I][V]=F.clone().lerp(S,V/E)}for(let I=0;I<T;I++)for(let F=0;F<2*(T-I)-1;F++){const S=Math.floor(F/2);F%2===0?(f(A[I][S+1]),f(A[I+1][S]),f(A[I][S])):(f(A[I][S+1]),f(A[I+1][S+1]),f(A[I+1][S]))}}function h(v){const y=new R;for(let M=0;M<o.length;M+=3)y.x=o[M+0],y.y=o[M+1],y.z=o[M+2],y.normalize().multiplyScalar(v),o[M+0]=y.x,o[M+1]=y.y,o[M+2]=y.z}function u(){const v=new R;for(let y=0;y<o.length;y+=3){v.x=o[y+0],v.y=o[y+1],v.z=o[y+2];const M=m(v)/2/Math.PI+.5,L=g(v)/Math.PI+.5;a.push(M,1-L)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],M=a[v+2],L=a[v+4],T=Math.max(y,M,L),A=Math.min(y,M,L);T>.9&&A<.1&&(y<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function f(v){o.push(v.x,v.y,v.z)}function p(v,y){const M=v*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function _(){const v=new R,y=new R,M=new R,L=new R,T=new q,A=new q,I=new q;for(let F=0,S=0;F<o.length;F+=9,S+=6){v.set(o[F+0],o[F+1],o[F+2]),y.set(o[F+3],o[F+4],o[F+5]),M.set(o[F+6],o[F+7],o[F+8]),T.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),I.set(a[S+4],a[S+5]),L.copy(v).add(y).add(M).divideScalar(3);const E=m(L);x(T,S+0,v,E),x(A,S+2,y,E),x(I,S+4,M,E)}}function x(v,y,M,L){L<0&&v.x===1&&(a[y]=v.x-1),M.x===0&&M.z===0&&(a[y]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.vertices,e.indices,e.radius,e.details)}}class ql extends Li{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}const Vr=new R,Gr=new R,ya=new R,Wr=new $t;class Lx extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(ls*t),a=e.getIndex(),l=e.getAttribute("position"),c=a?a.count:l.count,h=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let _=0;_<c;_+=3){a?(h[0]=a.getX(_),h[1]=a.getX(_+1),h[2]=a.getX(_+2)):(h[0]=_,h[1]=_+1,h[2]=_+2);const{a:x,b:m,c:g}=Wr;if(x.fromBufferAttribute(l,h[0]),m.fromBufferAttribute(l,h[1]),g.fromBufferAttribute(l,h[2]),Wr.getNormal(ya),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,M=d[v],L=d[y],T=Wr[u[v]],A=Wr[u[y]],I=`${M}_${L}`,F=`${L}_${M}`;F in f&&f[F]?(ya.dot(f[F].normal)<=o&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),f[F]=null):I in f||(f[I]={index0:h[v],index1:h[y],normal:ya.clone()})}}for(const _ in f)if(f[_]){const{index0:x,index1:m}=f[_];Vr.fromBufferAttribute(l,x),Gr.fromBufferAttribute(l,m),p.push(Vr.x,Vr.y,Vr.z),p.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yl extends dl{constructor(e){super(e),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new dl().fromJSON(s))}return this}}const Ix={triangulate:function(r,e,t=2){const n=e&&e.length,s=n?e[0]*t:r.length;let o=sd(r,0,s,t,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,f,p;if(n&&(o=Fx(r,e,o,t)),r.length>80*t){l=h=r[0],c=u=r[1];for(let _=t;_<s;_+=t)d=r[_],f=r[_+1],d<l&&(l=d),f<c&&(c=f),d>h&&(h=d),f>u&&(u=f);p=Math.max(h-l,u-c),p=p!==0?32767/p:0}return er(o,a,t,l,c,p,0),a}};function sd(r,e,t,n,s){let o,a;if(s===Kx(r,e,t,n)>0)for(o=e;o<t;o+=n)a=Wh(o,r[o],r[o+1],a);else for(o=t-n;o>=e;o-=n)a=Wh(o,r[o],r[o+1],a);return a&&wo(a,a.next)&&(nr(a),a=a.next),a}function Ci(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(wo(t,t.next)||dt(t.prev,t,t.next)===0)){if(nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function er(r,e,t,n,s,o,a){if(!r)return;!a&&o&&Vx(r,n,s,o);let l=r,c,h;for(;r.prev!==r.next;){if(c=r.prev,h=r.next,o?Nx(r,n,s,o):Dx(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),nr(r),r=h.next,l=h.next;continue}if(r=h,r===l){a?a===1?(r=Ux(Ci(r),e,t),er(r,e,t,n,s,o,2)):a===2&&Ox(r,e,t,n,s,o):er(Ci(r),e,t,n,s,o,1);break}}}function Dx(r){const e=r.prev,t=r,n=r.next;if(dt(e,t,n)>=0)return!1;const s=e.x,o=t.x,a=n.x,l=e.y,c=t.y,h=n.y,u=s<o?s<a?s:a:o<a?o:a,d=l<c?l<h?l:h:c<h?c:h,f=s>o?s>a?s:a:o>a?o:a,p=l>c?l>h?l:h:c>h?c:h;let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=p&&ss(s,l,o,c,a,h,_.x,_.y)&&dt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Nx(r,e,t,n){const s=r.prev,o=r,a=r.next;if(dt(s,o,a)>=0)return!1;const l=s.x,c=o.x,h=a.x,u=s.y,d=o.y,f=a.y,p=l<c?l<h?l:h:c<h?c:h,_=u<d?u<f?u:f:d<f?d:f,x=l>c?l>h?l:h:c>h?c:h,m=u>d?u>f?u:f:d>f?d:f,g=fl(p,_,e,t,n),v=fl(x,m,e,t,n);let y=r.prevZ,M=r.nextZ;for(;y&&y.z>=g&&M&&M.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&ss(l,u,c,d,h,f,y.x,y.y)&&dt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&ss(l,u,c,d,h,f,M.x,M.y)&&dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&ss(l,u,c,d,h,f,y.x,y.y)&&dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&ss(l,u,c,d,h,f,M.x,M.y)&&dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ux(r,e,t){let n=r;do{const s=n.prev,o=n.next.next;!wo(s,o)&&rd(s,n,n.next,o)&&tr(s,o)&&tr(o,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),nr(n),nr(n.next),n=r=o),n=n.next}while(n!==r);return Ci(n)}function Ox(r,e,t,n,s,o){let a=r;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Xx(a,l)){let c=od(a,l);a=Ci(a,a.next),c=Ci(c,c.next),er(a,e,t,n,s,o,0),er(c,e,t,n,s,o,0);return}l=l.next}a=a.next}while(a!==r)}function Fx(r,e,t,n){const s=[];let o,a,l,c,h;for(o=0,a=e.length;o<a;o++)l=e[o]*n,c=o<a-1?e[o+1]*n:r.length,h=sd(r,l,c,n,!1),h===h.next&&(h.steiner=!0),s.push(Wx(h));for(s.sort(Bx),o=0;o<s.length;o++)t=zx(s[o],t);return t}function Bx(r,e){return r.x-e.x}function zx(r,e){const t=kx(r,e);if(!t)return e;const n=od(t,r);return Ci(n,n.next),Ci(t,t.next)}function kx(r,e){let t=e,n=-1/0,s;const o=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=o&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===o))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,c=s.x,h=s.y;let u=1/0,d;t=s;do o>=t.x&&t.x>=c&&o!==t.x&&ss(a<h?o:n,a,c,h,a<h?n:o,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(o-t.x),tr(t,r)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Hx(s,t)))&&(s=t,u=d)),t=t.next;while(t!==l);return s}function Hx(r,e){return dt(r.prev,r,e.prev)<0&&dt(e.next,r,r.next)<0}function Vx(r,e,t,n){let s=r;do s.z===0&&(s.z=fl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,Gx(s)}function Gx(r){let e,t,n,s,o,a,l,c,h=1;do{for(t=r,r=null,o=null,a=0;t;){for(a++,n=t,l=0,e=0;e<h&&(l++,n=n.nextZ,!!n);e++);for(c=h;l>0||c>0&&n;)l!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,l--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:r=s,s.prevZ=o,o=s;t=n}o.nextZ=null,h*=2}while(a>1);return r}function fl(r,e,t,n,s){return r=(r-t)*s|0,e=(e-n)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Wx(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ss(r,e,t,n,s,o,a,l){return(s-a)*(e-l)>=(r-a)*(o-l)&&(r-a)*(n-l)>=(t-a)*(e-l)&&(t-a)*(o-l)>=(s-a)*(n-l)}function Xx(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!qx(r,e)&&(tr(r,e)&&tr(e,r)&&Yx(r,e)&&(dt(r.prev,r,e.prev)||dt(r,e.prev,e))||wo(r,e)&&dt(r.prev,r,r.next)>0&&dt(e.prev,e,e.next)>0)}function dt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function wo(r,e){return r.x===e.x&&r.y===e.y}function rd(r,e,t,n){const s=qr(dt(r,e,t)),o=qr(dt(r,e,n)),a=qr(dt(t,n,r)),l=qr(dt(t,n,e));return!!(s!==o&&a!==l||s===0&&Xr(r,t,e)||o===0&&Xr(r,n,e)||a===0&&Xr(t,r,n)||l===0&&Xr(t,e,n))}function Xr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function qr(r){return r>0?1:r<0?-1:0}function qx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function tr(r,e){return dt(r.prev,r,r.next)<0?dt(r,e,r.next)>=0&&dt(r,r.prev,e)>=0:dt(r,e,r.prev)<0||dt(r,r.next,e)<0}function Yx(r,e){let t=r,n=!1;const s=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function od(r,e){const t=new pl(r.i,r.x,r.y),n=new pl(e.i,e.x,e.y),s=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Wh(r,e,t,n){const s=new pl(r,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function nr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function pl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kx(r,e,t,n){let s=0;for(let o=e,a=t-n;o<t;o+=n)s+=(r[a]-r[o])*(r[o+1]+r[a+1]),a=o;return s}class ri{static area(e){const t=e.length;let n=0;for(let s=t-1,o=0;o<t;s=o++)n+=e[s].x*e[o].y-e[o].x*e[s].y;return n*.5}static isClockWise(e){return ri.area(e)<0}static triangulateShape(e,t){const n=[],s=[],o=[];Xh(e),qh(n,e);let a=e.length;t.forEach(Xh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,qh(n,t[c]);const l=Ix.triangulate(n,s);for(let c=0;c<l.length;c+=3)o.push(l.slice(c,c+3));return o}}function Xh(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function qh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Kl extends lt{constructor(e=new Yl([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],o=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];a(h)}this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(o,2)),this.computeVertexNormals();function a(l){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Zx;let y,M=!1,L,T,A,I;g&&(y=g.getSpacedPoints(u),M=!0,f=!1,L=g.computeFrenetFrames(u,!1),T=new R,A=new R,I=new R),f||(m=0,p=0,_=0,x=0);const F=l.extractPoints(h);let S=F.shape;const E=F.holes;if(!ri.isClockWise(S)){S=S.reverse();for(let J=0,P=E.length;J<P;J++){const ae=E[J];ri.isClockWise(ae)&&(E[J]=ae.reverse())}}const k=ri.triangulateShape(S,E),G=S;for(let J=0,P=E.length;J<P;J++){const ae=E[J];S=S.concat(ae)}function Q(J,P,ae){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(P,ae)}const z=S.length,te=k.length;function X(J,P,ae){let oe,ee,le;const Re=J.x-P.x,_e=J.y-P.y,C=ae.x-J.x,b=ae.y-J.y,O=Re*Re+_e*_e,K=Re*b-_e*C;if(Math.abs(K)>Number.EPSILON){const $=Math.sqrt(O),Z=Math.sqrt(C*C+b*b),Te=P.x-_e/$,ce=P.y+Re/$,ve=ae.x-b/Z,qe=ae.y+C/Z,ie=((ve-Te)*b-(qe-ce)*C)/(Re*b-_e*C);oe=Te+Re*ie-J.x,ee=ce+_e*ie-J.y;const Me=oe*oe+ee*ee;if(Me<=2)return new q(oe,ee);le=Math.sqrt(Me/2)}else{let $=!1;Re>Number.EPSILON?C>Number.EPSILON&&($=!0):Re<-Number.EPSILON?C<-Number.EPSILON&&($=!0):Math.sign(_e)===Math.sign(b)&&($=!0),$?(oe=-_e,ee=Re,le=Math.sqrt(O)):(oe=Re,ee=_e,le=Math.sqrt(O/2))}return new q(oe/le,ee/le)}const de=[];for(let J=0,P=G.length,ae=P-1,oe=J+1;J<P;J++,ae++,oe++)ae===P&&(ae=0),oe===P&&(oe=0),de[J]=X(G[J],G[ae],G[oe]);const me=[];let ge,Xe=de.concat();for(let J=0,P=E.length;J<P;J++){const ae=E[J];ge=[];for(let oe=0,ee=ae.length,le=ee-1,Re=oe+1;oe<ee;oe++,le++,Re++)le===ee&&(le=0),Re===ee&&(Re=0),ge[oe]=X(ae[oe],ae[le],ae[Re]);me.push(ge),Xe=Xe.concat(ge)}for(let J=0;J<m;J++){const P=J/m,ae=p*Math.cos(P*Math.PI/2),oe=_*Math.sin(P*Math.PI/2)+x;for(let ee=0,le=G.length;ee<le;ee++){const Re=Q(G[ee],de[ee],oe);ue(Re.x,Re.y,-ae)}for(let ee=0,le=E.length;ee<le;ee++){const Re=E[ee];ge=me[ee];for(let _e=0,C=Re.length;_e<C;_e++){const b=Q(Re[_e],ge[_e],oe);ue(b.x,b.y,-ae)}}}const Je=_+x;for(let J=0;J<z;J++){const P=f?Q(S[J],Xe[J],Je):S[J];M?(A.copy(L.normals[0]).multiplyScalar(P.x),T.copy(L.binormals[0]).multiplyScalar(P.y),I.copy(y[0]).add(A).add(T),ue(I.x,I.y,I.z)):ue(P.x,P.y,0)}for(let J=1;J<=u;J++)for(let P=0;P<z;P++){const ae=f?Q(S[P],Xe[P],Je):S[P];M?(A.copy(L.normals[J]).multiplyScalar(ae.x),T.copy(L.binormals[J]).multiplyScalar(ae.y),I.copy(y[J]).add(A).add(T),ue(I.x,I.y,I.z)):ue(ae.x,ae.y,d/u*J)}for(let J=m-1;J>=0;J--){const P=J/m,ae=p*Math.cos(P*Math.PI/2),oe=_*Math.sin(P*Math.PI/2)+x;for(let ee=0,le=G.length;ee<le;ee++){const Re=Q(G[ee],de[ee],oe);ue(Re.x,Re.y,d+ae)}for(let ee=0,le=E.length;ee<le;ee++){const Re=E[ee];ge=me[ee];for(let _e=0,C=Re.length;_e<C;_e++){const b=Q(Re[_e],ge[_e],oe);M?ue(b.x,b.y+y[u-1].y,y[u-1].x+ae):ue(b.x,b.y,d+ae)}}}Y(),ne();function Y(){const J=s.length/3;if(f){let P=0,ae=z*P;for(let oe=0;oe<te;oe++){const ee=k[oe];De(ee[2]+ae,ee[1]+ae,ee[0]+ae)}P=u+m*2,ae=z*P;for(let oe=0;oe<te;oe++){const ee=k[oe];De(ee[0]+ae,ee[1]+ae,ee[2]+ae)}}else{for(let P=0;P<te;P++){const ae=k[P];De(ae[2],ae[1],ae[0])}for(let P=0;P<te;P++){const ae=k[P];De(ae[0]+z*u,ae[1]+z*u,ae[2]+z*u)}}n.addGroup(J,s.length/3-J,0)}function ne(){const J=s.length/3;let P=0;Se(G,P),P+=G.length;for(let ae=0,oe=E.length;ae<oe;ae++){const ee=E[ae];Se(ee,P),P+=ee.length}n.addGroup(J,s.length/3-J,1)}function Se(J,P){let ae=J.length;for(;--ae>=0;){const oe=ae;let ee=ae-1;ee<0&&(ee=J.length-1);for(let le=0,Re=u+m*2;le<Re;le++){const _e=z*le,C=z*(le+1),b=P+oe+_e,O=P+ee+_e,K=P+ee+C,$=P+oe+C;Ie(b,O,K,$)}}}function ue(J,P,ae){c.push(J),c.push(P),c.push(ae)}function De(J,P,ae){Be(J),Be(P),Be(ae);const oe=s.length/3,ee=v.generateTopUV(n,s,oe-3,oe-2,oe-1);Ge(ee[0]),Ge(ee[1]),Ge(ee[2])}function Ie(J,P,ae,oe){Be(J),Be(P),Be(oe),Be(P),Be(ae),Be(oe);const ee=s.length/3,le=v.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);Ge(le[0]),Ge(le[1]),Ge(le[3]),Ge(le[1]),Ge(le[2]),Ge(le[3])}function Be(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function Ge(J){o.push(J.x),o.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Jx(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,a=e.shapes.length;o<a;o++){const l=t[e.shapes[o]];n.push(l)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fo[s.type]().fromJSON(s)),new Kl(n,e.options)}}const Zx={generateTopUV:function(r,e,t,n,s){const o=e[t*3],a=e[t*3+1],l=e[n*3],c=e[n*3+1],h=e[s*3],u=e[s*3+1];return[new q(o,a),new q(l,c),new q(h,u)]},generateSideWallUV:function(r,e,t,n,s,o){const a=e[t*3],l=e[t*3+1],c=e[t*3+2],h=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],p=e[s*3+1],_=e[s*3+2],x=e[o*3],m=e[o*3+1],g=e[o*3+2];return Math.abs(l-u)<Math.abs(a-h)?[new q(a,1-c),new q(h,1-d),new q(f,1-_),new q(x,1-g)]:[new q(l,1-c),new q(u,1-d),new q(p,1-_),new q(m,1-g)]}};function Jx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,s=r.length;n<s;n++){const o=r[n];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zl extends Li{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zl(e.radius,e.detail)}}class Jl extends Li{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jl(e.radius,e.detail)}}class $l extends lt{constructor(e=.5,t=1,n=32,s=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const l=[],c=[],h=[],u=[];let d=e;const f=(t-e)/s,p=new R,_=new q;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const g=o+m/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let g=0;g<n;g++){const v=g+m,y=v,M=v+n+1,L=v+n+2,T=v+1;l.push(y,M,T),l.push(M,L,T)}}this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jl extends lt{constructor(e=new Yl([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],o=[],a=[];let l=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(l,c,u),l+=c,c=0;this.setIndex(n),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(a,2));function h(u){const d=s.length/3,f=u.extractPoints(t);let p=f.shape;const _=f.holes;ri.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=_.length;m<g;m++){const v=_[m];ri.isClockWise(v)===!0&&(_[m]=v.reverse())}const x=ri.triangulateShape(p,_);for(let m=0,g=_.length;m<g;m++){const v=_[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){const v=p[m];s.push(v.x,v.y,0),o.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){const v=x[m],y=v[0]+d,M=v[1]+d,L=v[2]+d;n.push(y,M,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $x(t,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}return new jl(n,e.curveSegments)}}function $x(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const s=r[t];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e}class Ql extends lt{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+l,Math.PI);let h=0;const u=[],d=new R,f=new R,p=[],_=[],x=[],m=[];for(let g=0;g<=n;g++){const v=[],y=g/n;let M=0;g===0&&a===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){const T=L/t;d.x=-e*Math.cos(s+T*o)*Math.sin(a+y*l),d.y=e*Math.cos(a+y*l),d.z=e*Math.sin(s+T*o)*Math.sin(a+y*l),_.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(T+M,1-y),v.push(h++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const y=u[g][v+1],M=u[g][v],L=u[g+1][v],T=u[g+1][v+1];(g!==0||a>0)&&p.push(y,M,T),(g!==n-1||c<Math.PI)&&p.push(M,L,T)}this.setIndex(p),this.setAttribute("position",new ze(_,3)),this.setAttribute("normal",new ze(x,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends Li{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class tc extends lt{constructor(e=1,t=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],h=[],u=new R,d=new R,f=new R;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){const x=_/s*o,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),h.push(_/s),h.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){const x=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,g=(s+1)*(p-1)+_,v=(s+1)*p+_;a.push(x,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nc extends lt{constructor(e=1,t=.4,n=64,s=8,o=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:o,q:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new R,f=new R,p=new R,_=new R,x=new R,m=new R,g=new R;for(let y=0;y<=n;++y){const M=y/n*o*Math.PI*2;v(M,o,a,e,p),v(M+.01,o,a,e,_),m.subVectors(_,p),g.addVectors(_,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let L=0;L<=s;++L){const T=L/s*Math.PI*2,A=-t*Math.cos(T),I=t*Math.sin(T);d.x=p.x+(A*g.x+I*x.x),d.y=p.y+(A*g.y+I*x.y),d.z=p.z+(A*g.z+I*x.z),c.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),h.push(f.x,f.y,f.z),u.push(y/n),u.push(L/s)}}for(let y=1;y<=n;y++)for(let M=1;M<=s;M++){const L=(s+1)*(y-1)+(M-1),T=(s+1)*y+(M-1),A=(s+1)*y+M,I=(s+1)*(y-1)+M;l.push(L,T,I),l.push(T,A,I)}this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function v(y,M,L,T,A){const I=Math.cos(y),F=Math.sin(y),S=L/M*y,E=Math.cos(S);A.x=T*(2+E)*.5*I,A.y=T*(2+E)*F*.5,A.z=T*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ic extends lt{constructor(e=new nd(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:o};const a=e.computeFrenetFrames(t,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const l=new R,c=new R,h=new q;let u=new R;const d=[],f=[],p=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new ze(d,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(p,2));function x(){for(let y=0;y<t;y++)m(y);m(o===!1?t:0),v(),g()}function m(y){u=e.getPointAt(y/t,u);const M=a.normals[y],L=a.binormals[y];for(let T=0;T<=s;T++){const A=T/s*Math.PI*2,I=Math.sin(A),F=-Math.cos(A);c.x=F*M.x+I*L.x,c.y=F*M.y+I*L.y,c.z=F*M.z+I*L.z,c.normalize(),f.push(c.x,c.y,c.z),l.x=u.x+n*c.x,l.y=u.y+n*c.y,l.z=u.z+n*c.z,d.push(l.x,l.y,l.z)}}function g(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){const L=(s+1)*(y-1)+(M-1),T=(s+1)*y+(M-1),A=(s+1)*y+M,I=(s+1)*(y-1)+M;_.push(L,T,I),_.push(T,A,I)}}function v(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)h.x=y/t,h.y=M/s,p.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ic(new fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class jx extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new R,o=new R;if(e.index!==null){const a=e.attributes.position,l=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){const d=c[h],f=d.start,p=d.count;for(let _=f,x=f+p;_<x;_+=3)for(let m=0;m<3;m++){const g=l.getX(_+m),v=l.getX(_+(m+1)%3);s.fromBufferAttribute(a,g),o.fromBufferAttribute(a,v),Yh(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}}else{const a=e.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){const u=3*l+h,d=3*l+(h+1)%3;s.fromBufferAttribute(a,u),o.fromBufferAttribute(a,d),Yh(s,o,n)===!0&&(t.push(s.x,s.y,s.z),t.push(o.x,o.y,o.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Yh(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Kh=Object.freeze({__proto__:null,BoxGeometry:on,CapsuleGeometry:Gl,CircleGeometry:Wl,ConeGeometry:Xl,CylinderGeometry:bs,DodecahedronGeometry:ql,EdgesGeometry:Lx,ExtrudeGeometry:Kl,IcosahedronGeometry:Zl,LatheGeometry:Eo,OctahedronGeometry:Jl,PlaneGeometry:On,PolyhedronGeometry:Li,RingGeometry:$l,ShapeGeometry:jl,SphereGeometry:Ql,TetrahedronGeometry:ec,TorusGeometry:tc,TorusKnotGeometry:nc,TubeGeometry:ic,WireframeGeometry:jx});class Qx extends wt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ey extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gn extends sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ty extends wt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends wt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class iy extends wt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class sc extends wt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sy extends wt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new we(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ri,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ry extends So{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Yr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function oy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ay(r){function e(s,o){return r[s]-r[o]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zh(r,e,t){const n=r.length,s=new r.constructor(n);for(let o=0,a=0;a!==n;++o){const l=t[o]*e;for(let c=0;c!==e;++c)s[a++]=r[l+c]}return s}function ad(r,e,t,n){let s=1,o=r[0];for(;o!==void 0&&o[n]===void 0;)o=r[s++];if(o===void 0)return;let a=o[n];if(a!==void 0)if(Array.isArray(a))do a=o[n],a!==void 0&&(e.push(o.time),t.push.apply(t,a)),o=r[s++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[n],a!==void 0&&(e.push(o.time),a.toArray(t,t.length)),o=r[s++];while(o!==void 0);else do a=o[n],a!==void 0&&(e.push(o.time),t.push(a)),o=r[s++];while(o!==void 0)}class rr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],o=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=n+2;;){if(s===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(o=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=o)){const l=t[1];e<l&&(n=2,o=l);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=o,o=t[--n-1],e>=o)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(s=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s;for(let a=0;a!==s;++a)t[a]=n[o+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ly extends rr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,a=e+1,l=s[o],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ic:o=e,l=2*t-n;break;case Dc:o=s.length-2,l=t+s[o]-s[o+1];break;default:o=e,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ic:a=e,c=2*n-t;break;case Dc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(c-n),this._offsetPrev=o*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),x=_*_,m=x*_,g=-f*m+2*f*x-f*_,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,y=(-1-p)*m+(1.5+p)*x+.5*_,M=p*m-p*x;for(let L=0;L!==l;++L)o[L]=g*a[u+L]+v*a[h+L]+y*a[c+L]+M*a[d+L];return o}}class cy extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,h=c-l,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==l;++f)o[f]=a[h+f]*d+a[c+f]*u;return o}}class hy extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class En{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yr(t,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yr(e.times,Array),values:Yr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ly(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let o=0,a=s-1;for(;o!==s&&n[o]<e;)++o;for(;a!==-1&&n[a]>t;)--a;if(++a,o!==0||a!==s){o>=a&&(a=Math.max(a,1),o=a-1);const l=this.getValueSize();this.times=n.slice(o,a),this.values=this.values.slice(o*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==o;l++){const c=n[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&oy(s))for(let l=0,c=s.length;l!==c;++l){const h=s[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,o=e.length-1;let a=1;for(let l=1;l<o;++l){let c=!1;const h=e[l],u=e[l+1];if(h!==u&&(l!==1||h!==e[0]))if(s)c=!0;else{const d=l*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){const x=t[d+_];if(x!==t[f+_]||x!==t[p+_]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];const d=l*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(o>0){e[a]=e[o];for(let l=o*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=js;class Es extends En{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=$s;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class ld extends En{}ld.prototype.ValueTypeName="color";class _s extends En{}_s.prototype.ValueTypeName="number";class uy extends rr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-t)/(s-t);let h=e*l;for(let u=h+l;h!==u;h+=4)vn.slerpFlat(o,0,a,h-l,a,h,c);return o}}class xs extends En{InterpolantFactoryMethodLinear(e){return new uy(this.times,this.values,this.getValueSize(),e)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends En{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=$s;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends En{}ys.prototype.ValueTypeName="vector";class cd{constructor(e="",t=-1,n=[],s=vf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(fy(n[a]).scale(s));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,a=n.length;o!==a;++o)t.push(En.toJSON(n[o]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,a=[];for(let l=0;l<o;l++){let c=[],h=[];c.push((l+o-1)%o,l,(l+1)%o),h.push(0,1,0);const u=ay(c);c=Zh(c,1,u),h=Zh(h,1,u),!s&&c[0]===0&&(c.push(o),h.push(h[0])),a.push(new _s(".morphTargetInfluences["+t[l].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},o=/^([\w-]*?)([\d]+)$/;for(let l=0,c=e.length;l<c;l++){const h=e[l],u=h.name.match(o);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(h)}}const a=[];for(const l in s)a.push(this.CreateFromMorphTargetSequence(l,s[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,_,x){if(p.length!==0){const m=[],g=[];ad(p,m,g,_),m.length!==0&&x.push(new d(f,m,g))}},s=[],o=e.name||"default",a=e.fps||30,l=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const f=h[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let x=0;x<f[_].morphTargets.length;x++)p[f[_].morphTargets[x]]=-1;for(const x in p){const m=[],g=[];for(let v=0;v!==f[_].morphTargets.length;++v){const y=f[_];m.push(y.time),g.push(y.morphTarget===x?1:0)}s.push(new _s(".morphTargetInfluence["+x+"]",m,g))}c=p.length*a}else{const p=".bones["+t[d].name+"]";n(ys,p+".position",f,"pos",s),n(xs,p+".quaternion",f,"rot",s),n(ys,p+".scale",f,"scl",s)}}return s.length===0?null:new this(o,c,s,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return ld;case"quaternion":return xs;case"bool":case"boolean":return Es;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function fy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dy(r.type);if(r.times===void 0){const t=[],n=[];ad(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ti={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hd{constructor(e,t,n){const s=this;let o=!1,a=0,l=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){l++,o===!1&&s.onStart!==void 0&&s.onStart(u,a,l),o=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,l),a===l&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){const d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){const p=h[d],_=h[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const py=new hd;class Vn{constructor(e){this.manager=e!==void 0?e:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ln={};class my extends Error{constructor(e,t){super(e),this.response=t}}class vs extends Vn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ti.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:s});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=Ln[e],d=h.body.getReader(),f=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let x=0;const m=new ReadableStream({start(g){v();function v(){d.read().then(({done:y,value:M})=>{if(y)g.close();else{x+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let T=0,A=u.length;T<A;T++){const I=u[T];I.onProgress&&I.onProgress(L)}g.enqueue(M),v()}},y=>{g.error(y)})}}});return new Response(m)}else throw new my(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,l));case"json":return h.json();default:if(l===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(l),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return h.arrayBuffer().then(_=>p.decode(_))}}}).then(h=>{ti.add(e,h);const u=Ln[e];delete Ln[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{const u=Ln[e];if(u===void 0)throw this.manager.itemError(e),h;delete Ln[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ml extends Vn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=ti.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const l=Qs("img");function c(){u(),ti.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(d){u(),s&&s(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){l.removeEventListener("load",c,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class rc extends Vn{constructor(e){super(e)}load(e,t,n,s){const o=new Mt,a=new ml(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class Ii extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gy extends Ii{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const va=new Le,Jh=new R,$h=new R;class oc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xo,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),$h.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($h),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _y extends oc{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ud extends Ii{constructor(e,t,n=0,s=Math.PI/3,o=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=s,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new _y}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jh=new Le,ks=new R,Ma=new R;class xy extends oc{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh)}}class dd extends Ii{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yy extends oc{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class To extends Ii{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new yy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fd extends Ii{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vy extends Ii{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class My{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,o=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*o),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*o)),t.addScaledVector(a[6],.315392*(3*o*o-1)),t.addScaledVector(a[7],1.092548*(n*o)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,o=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*o),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*o),t.addScaledVector(a[6],.743125*o*o-.247708),t.addScaledVector(a[7],2*.429043*n*o),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,o=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*o,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*o,t[6]=.315392*(3*o*o-1),t[7]=1.092548*n*o,t[8]=.546274*(n*n-s*s)}}class Sy extends Ii{constructor(e=new My,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ac extends Vn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const o=this,a=new vs(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(e,function(l){try{t(o.parse(JSON.parse(l)))}catch(c){s?s(c):console.error(c),o.manager.itemError(e)}},n,s)}parse(e){const t=this.textures;function n(o){return t[o]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",o),t[o]}const s=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(s.uuid=e.uuid),e.name!==void 0&&(s.name=e.name),e.color!==void 0&&s.color!==void 0&&s.color.setHex(e.color),e.roughness!==void 0&&(s.roughness=e.roughness),e.metalness!==void 0&&(s.metalness=e.metalness),e.sheen!==void 0&&(s.sheen=e.sheen),e.sheenColor!==void 0&&(s.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(s.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(e.emissive),e.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(e.specular),e.specularIntensity!==void 0&&(s.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(s.shininess=e.shininess),e.clearcoat!==void 0&&(s.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(s.dispersion=e.dispersion),e.iridescence!==void 0&&(s.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(s.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(s.transmission=e.transmission),e.thickness!==void 0&&(s.thickness=e.thickness),e.attenuationDistance!==void 0&&(s.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(s.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(s.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(s.fog=e.fog),e.flatShading!==void 0&&(s.flatShading=e.flatShading),e.blending!==void 0&&(s.blending=e.blending),e.combine!==void 0&&(s.combine=e.combine),e.side!==void 0&&(s.side=e.side),e.shadowSide!==void 0&&(s.shadowSide=e.shadowSide),e.opacity!==void 0&&(s.opacity=e.opacity),e.transparent!==void 0&&(s.transparent=e.transparent),e.alphaTest!==void 0&&(s.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(s.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(s.depthFunc=e.depthFunc),e.depthTest!==void 0&&(s.depthTest=e.depthTest),e.depthWrite!==void 0&&(s.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(s.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(s.blendSrc=e.blendSrc),e.blendDst!==void 0&&(s.blendDst=e.blendDst),e.blendEquation!==void 0&&(s.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(s.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(s.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(s.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(s.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(s.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(s.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(s.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(s.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(s.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(s.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(s.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(s.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(s.rotation=e.rotation),e.linewidth!==void 0&&(s.linewidth=e.linewidth),e.dashSize!==void 0&&(s.dashSize=e.dashSize),e.gapSize!==void 0&&(s.gapSize=e.gapSize),e.scale!==void 0&&(s.scale=e.scale),e.polygonOffset!==void 0&&(s.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(s.dithering=e.dithering),e.alphaToCoverage!==void 0&&(s.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(s.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(s.visible=e.visible),e.toneMapped!==void 0&&(s.toneMapped=e.toneMapped),e.userData!==void 0&&(s.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const o in e.uniforms){const a=e.uniforms[o];switch(s.uniforms[o]={},a.type){case"t":s.uniforms[o].value=n(a.value);break;case"c":s.uniforms[o].value=new we().setHex(a.value);break;case"v2":s.uniforms[o].value=new q().fromArray(a.value);break;case"v3":s.uniforms[o].value=new R().fromArray(a.value);break;case"v4":s.uniforms[o].value=new $e().fromArray(a.value);break;case"m3":s.uniforms[o].value=new He().fromArray(a.value);break;case"m4":s.uniforms[o].value=new Le().fromArray(a.value);break;default:s.uniforms[o].value=a.value}}if(e.defines!==void 0&&(s.defines=e.defines),e.vertexShader!==void 0&&(s.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(s.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(s.glslVersion=e.glslVersion),e.extensions!==void 0)for(const o in e.extensions)s.extensions[o]=e.extensions[o];if(e.lights!==void 0&&(s.lights=e.lights),e.clipping!==void 0&&(s.clipping=e.clipping),e.size!==void 0&&(s.size=e.size),e.sizeAttenuation!==void 0&&(s.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(s.map=n(e.map)),e.matcap!==void 0&&(s.matcap=n(e.matcap)),e.alphaMap!==void 0&&(s.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(s.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(s.bumpScale=e.bumpScale),e.normalMap!==void 0&&(s.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(s.normalMapType=e.normalMapType),e.normalScale!==void 0){let o=e.normalScale;Array.isArray(o)===!1&&(o=[o,o]),s.normalScale=new q().fromArray(o)}return e.displacementMap!==void 0&&(s.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(s.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(s.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(s.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(s.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(s.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(s.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(s.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(s.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(s.envMap=n(e.envMap)),e.envMapRotation!==void 0&&s.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(s.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(s.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(s.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(s.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(s.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(s.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(s.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(s.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(s.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(s.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(s.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(s.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(s.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(s.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return ac.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Qx,SpriteMaterial:qu,RawShaderMaterial:ey,ShaderMaterial:Mn,PointsMaterial:kl,MeshPhysicalMaterial:gn,MeshStandardMaterial:sn,MeshPhongMaterial:ty,MeshToonMaterial:ny,MeshNormalMaterial:iy,MeshLambertMaterial:sc,MeshDepthMaterial:Gu,MeshDistanceMaterial:Wu,MeshBasicMaterial:zt,MeshMatcapMaterial:sy,LineDashedMaterial:ry,LineBasicMaterial:So,Material:wt};return new t[e]}}class Si{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class by extends lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ey extends Vn{constructor(e){super(e)}load(e,t,n,s){const o=this,a=new vs(o.manager);a.setPath(o.path),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(e,function(l){try{t(o.parse(JSON.parse(l)))}catch(c){s?s(c):console.error(c),o.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(p,_){if(t[_]!==void 0)return t[_];const m=p.interleavedBuffers[_],g=o(p,m.buffer),v=ts(m.type,g),y=new Bl(v,m.stride);return y.uuid=m.uuid,t[_]=y,y}function o(p,_){if(n[_]!==void 0)return n[_];const m=p.arrayBuffers[_],g=new Uint32Array(m).buffer;return n[_]=g,g}const a=e.isInstancedBufferGeometry?new by:new lt,l=e.data.index;if(l!==void 0){const p=ts(l.type,l.array);a.setIndex(new yt(p,1))}const c=e.data.attributes;for(const p in c){const _=c[p];let x;if(_.isInterleavedBufferAttribute){const m=s(e.data,_.data);x=new Ai(m,_.itemSize,_.offset,_.normalized)}else{const m=ts(_.type,_.array),g=_.isInstancedBufferAttribute?gs:yt;x=new g(m,_.itemSize,_.normalized)}_.name!==void 0&&(x.name=_.name),_.usage!==void 0&&x.setUsage(_.usage),a.setAttribute(p,x)}const h=e.data.morphAttributes;if(h)for(const p in h){const _=h[p],x=[];for(let m=0,g=_.length;m<g;m++){const v=_[m];let y;if(v.isInterleavedBufferAttribute){const M=s(e.data,v.data);y=new Ai(M,v.itemSize,v.offset,v.normalized)}else{const M=ts(v.type,v.array);y=new yt(M,v.itemSize,v.normalized)}v.name!==void 0&&(y.name=v.name),x.push(y)}a.morphAttributes[p]=x}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let p=0,_=d.length;p!==_;++p){const x=d[p];a.addGroup(x.start,x.count,x.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const p=new R;f.center!==void 0&&p.fromArray(f.center),a.boundingSphere=new Nt(p,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class wy extends Vn{constructor(e){super(e)}load(e,t,n,s){const o=this,a=this.path===""?Si.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const l=new vs(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){let h=null;try{h=JSON.parse(c)}catch(d){s!==void 0&&s(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const u=h.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}o.parse(h,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Si.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new vs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials);const a=await o.loadAsync(e,t),l=JSON.parse(a),c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(l)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),o=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(h)}),l=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,l),h=this.parseObject(e.object,o,c,l,n),u=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,u),this.bindLightTargets(h),t!==void 0){let d=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),o=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,s,l,a,t),h=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,h),this.bindLightTargets(c),c}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const o=new Yl().fromJSON(e[n]);t[o.uuid]=o}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(o){o.isBone&&(s[o.uuid]=o)}),e!==void 0)for(let o=0,a=e.length;o<a;o++){const l=new Mo().fromJSON(e[o],s);n[l.uuid]=l}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new Ey;for(let o=0,a=e.length;o<a;o++){let l;const c=e[o];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":l=s.parse(c);break;default:c.type in Kh?l=Kh[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}l.uuid=c.uuid,c.name!==void 0&&(l.name=c.name),c.userData!==void 0&&(l.userData=c.userData),n[c.uuid]=l}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const o=new ac;o.setTextures(t);for(let a=0,l=e.length;a<l;a++){const c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=o.parse(c)),s[c.uuid]=n[c.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],o=cd.parse(s);t[o.uuid]=o}return t}parseImages(e,t){const n=this,s={};let o;function a(c){return n.manager.itemStart(c),o.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function l(c){if(typeof c=="string"){const h=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return a(u)}else return c.data?{data:ts(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new hd(t);o=new ml(c),o.setCrossOrigin(this.crossOrigin);for(let h=0,u=e.length;h<u;h++){const d=e[h],f=d.url;if(Array.isArray(f)){const p=[];for(let _=0,x=f.length;_<x;_++){const m=f[_],g=l(m);g!==null&&(g instanceof HTMLImageElement?p.push(g):p.push(new si(g.data,g.width,g.height)))}s[d.uuid]=new ns(p)}else{const p=l(d.url);s[d.uuid]=new ns(p)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function o(a){if(typeof a=="string"){const l=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:t.resourcePath+l;return await s.loadAsync(c)}else return a.data?{data:ts(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new ml(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.url;if(Array.isArray(h)){const u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d],_=await o(p);_!==null&&(_ instanceof HTMLImageElement?u.push(_):u.push(new si(_.data,_.width,_.height)))}n[c.uuid]=new ns(u)}else{const u=await o(c.url);n[c.uuid]=new ns(u)}}}return n}parseTextures(e,t){function n(o,a){return typeof o=="number"?o:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",o),a[o])}const s={};if(e!==void 0)for(let o=0,a=e.length;o<a;o++){const l=e[o];l.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',l.uuid),t[l.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",l.image);const c=t[l.image],h=c.data;let u;Array.isArray(h)?(u=new Dl,h.length===6&&(u.needsUpdate=!0)):(h&&h.data?u=new si:u=new Mt,h&&(u.needsUpdate=!0)),u.source=c,u.uuid=l.uuid,l.name!==void 0&&(u.name=l.name),l.mapping!==void 0&&(u.mapping=n(l.mapping,Ty)),l.channel!==void 0&&(u.channel=l.channel),l.offset!==void 0&&u.offset.fromArray(l.offset),l.repeat!==void 0&&u.repeat.fromArray(l.repeat),l.center!==void 0&&u.center.fromArray(l.center),l.rotation!==void 0&&(u.rotation=l.rotation),l.wrap!==void 0&&(u.wrapS=n(l.wrap[0],Qh),u.wrapT=n(l.wrap[1],Qh)),l.format!==void 0&&(u.format=l.format),l.internalFormat!==void 0&&(u.internalFormat=l.internalFormat),l.type!==void 0&&(u.type=l.type),l.colorSpace!==void 0&&(u.colorSpace=l.colorSpace),l.minFilter!==void 0&&(u.minFilter=n(l.minFilter,eu)),l.magFilter!==void 0&&(u.magFilter=n(l.magFilter,eu)),l.anisotropy!==void 0&&(u.anisotropy=l.anisotropy),l.flipY!==void 0&&(u.flipY=l.flipY),l.generateMipmaps!==void 0&&(u.generateMipmaps=l.generateMipmaps),l.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=l.premultiplyAlpha),l.unpackAlignment!==void 0&&(u.unpackAlignment=l.unpackAlignment),l.compareFunction!==void 0&&(u.compareFunction=l.compareFunction),l.userData!==void 0&&(u.userData=l.userData),s[l.uuid]=u}return s}parseObject(e,t,n,s,o){let a;function l(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function c(f){if(f!==void 0){if(Array.isArray(f)){const p=[];for(let _=0,x=f.length;_<x;_++){const m=f[_];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),p.push(n[m])}return p}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function h(f){return s[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),s[f]}let u,d;switch(e.type){case"Scene":a=new Fl,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new we(e.background):a.background=h(e.background)),e.environment!==void 0&&(a.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ol(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ul(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new At(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new yo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new fd(e.color,e.intensity);break;case"DirectionalLight":a=new To(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new dd(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new vy(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ud(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new gy(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Sy().fromJSON(e);break;case"SkinnedMesh":u=l(e.geometry),d=c(e.material),a=new Ku(u,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=l(e.geometry),d=c(e.material),a=new rt(u,d);break;case"InstancedMesh":u=l(e.geometry),d=c(e.material);const f=e.count,p=e.instanceMatrix,_=e.instanceColor;a=new Zu(u,d,f),a.instanceMatrix=new gs(new Float32Array(p.array),16),_!==void 0&&(a.instanceColor=new gs(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":u=l(e.geometry),d=c(e.material),a=new xx(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(x=>{const m=new kt;m.min.fromArray(x.boxMin),m.max.fromArray(x.boxMax);const g=new Nt;return g.radius=x.sphereRadius,g.center.fromArray(x.sphereCenter),{boxInitialized:x.boxInitialized,box:m,sphereInitialized:x.sphereInitialized,sphere:g}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=h(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=h(e.colorsTexture.uuid));break;case"LOD":a=new ax;break;case"Line":a=new bo(l(e.geometry),c(e.material));break;case"LineLoop":a=new $u(l(e.geometry),c(e.material));break;case"LineSegments":a=new Ju(l(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new ju(l(e.geometry),c(e.material));break;case"Sprite":a=new ox(c(e.material));break;case"Group":a=new an;break;case"Bone":a=new zl;break;default:a=new at}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let p=0;p<f.length;p++)a.add(this.parseObject(f[p],t,n,s,o))}if(e.animations!==void 0){const f=e.animations;for(let p=0;p<f.length;p++){const _=f[p];a.animations.push(o[_])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let p=0;p<f.length;p++){const _=f[p],x=a.getObjectByProperty("uuid",_.object);x!==void 0&&a.addLevel(x,_.distance,_.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new at}})}}const Ty={UVMapping:Sl,CubeReflectionMapping:Ei,CubeRefractionMapping:wi,EquirectangularReflectionMapping:so,EquirectangularRefractionMapping:ro,CubeUVReflectionMapping:ir},Qh={RepeatWrapping:kn,ClampToEdgeWrapping:Nn,MirroredRepeatWrapping:Zs},eu={NearestFilter:Dt,NearestMipmapNearestFilter:bl,NearestMipmapLinearFilter:es,LinearFilter:Wt,LinearMipmapNearestFilter:Xs,LinearMipmapLinearFilter:xn};class Ay extends Vn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=ti.get(e);if(a!==void 0){if(o.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),o.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const c=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){return ti.add(e,h),t&&t(h),o.manager.itemEnd(e),h}).catch(function(h){s&&s(h),ti.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});ti.add(e,c),o.manager.itemStart(e)}}const lc="\\[\\]\\.:\\/",Cy=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",Ry="[^"+lc.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",cc),Ly=/(WCOD+)?/.source.replace("WCOD",Ry),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),Dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Ny=new RegExp("^"+Py+Ly+Iy+Dy+"$"),Uy=["material","materials","bones","map"];class Oy{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cy,"")}static parseTrackName(e){const t=Ny.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const o=n.nodeName.substring(s+1);Uy.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let a=0;a<o.length;a++){const l=o[a];if(l.name===t||l.uuid===t)return l;const c=n(l.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let o=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[s];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Oy;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const tu=new Le;class hc{constructor(e,t,n=0,s=1/0){this.ray=new Ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return tu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tu),this}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(nu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)gl(e[s],this,n,t);return n.sort(nu),n}}function nu(r,e){return r.distance-e.distance}function gl(r,e,t,n){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=r.children;for(let a=0,l=o.length;a<l;a++)gl(o[a],e,t,!0)}}class iu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fy extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const su={type:"change"},uc={type:"start"},pd={type:"end"},Kr=new Ms,ru=new Qn,By=Math.cos(70*Ru.DEG2RAD),vt=new R,Gt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sa=1e-6;class md extends Fy{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new vn,this._lastTargetPosition=new R,this._quat=new vn().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new iu,this._sphericalDelta=new iu,this._scale=1,this._panOffset=new R,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new R,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ky.bind(this),this._onPointerDown=zy.bind(this),this._onPointerUp=Hy.bind(this),this._onContextMenu=Ky.bind(this),this._onMouseWheel=Wy.bind(this),this._onKeyDown=Xy.bind(this),this._onTouchStart=qy.bind(this),this._onTouchMove=Yy.bind(this),this._onMouseDown=Vy.bind(this),this._onMouseMove=Gy.bind(this),this._interceptControlDown=Zy.bind(this),this._interceptControlUp=Jy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(su),this.update(),this.state=ot.NONE}update(e=null){const t=this.object.position;vt.copy(t).sub(this.target),vt.applyQuaternion(this._quat),this._spherical.setFromVector3(vt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gt:n>Math.PI&&(n-=Gt),s<-Math.PI?s+=Gt:s>Math.PI&&(s-=Gt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(vt.setFromSpherical(this._spherical),vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const l=vt.length();a=this._clampDistance(l*this._scale);const c=l-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),o=!!c}else if(this.object.isOrthographicCamera){const l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=c!==this.object.zoom;const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),a=vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Kr.origin.copy(this.object.position),Kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kr.direction))<By?this.object.lookAt(this.target):(ru.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kr.intersectPlane(ru,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sa||this._lastTargetPosition.distanceToSquared(this.target)>Sa?(this.dispatchEvent(su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vt.setFromMatrixColumn(t,0),vt.multiplyScalar(-e),this._panOffset.add(vt)}_panUp(e,t){this.screenSpacePanning===!0?vt.setFromMatrixColumn(t,1):(vt.setFromMatrixColumn(t,0),vt.crossVectors(this.object.up,vt)),vt.multiplyScalar(e),this._panOffset.add(vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;vt.copy(s).sub(this.target);let o=vt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,o=t-n.top,a=n.width,l=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(a,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function zy(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function ky(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Hy(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pd),this.state=ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vy(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ot.DOLLY;break;case rs.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ot.ROTATE}break;case rs.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(uc)}function Gy(r){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Wy(r){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(r.preventDefault(),this.dispatchEvent(uc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(pd))}function Xy(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function qy(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ot.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ot.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(uc)}function Yy(r){switch(this._trackPointer(r),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ot.NONE}}function Ky(r){this.enabled!==!1&&r.preventDefault()}function Zy(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jy(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ou(r,e){if(e===Mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ll||e===Au){let t=r.getIndex();if(t===null){const a=[],l=r.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,s=[];if(e===ll)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=r.clone();return o.setIndex(s),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class gd extends Vn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new iv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)})}load(e,t,n,s){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const h=Si.extractUrlBase(e);a=Si.resolveURL(h,this.path)}else a=Si.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){s?s(h):console.error(h),o.manager.itemError(e),o.manager.itemEnd(e)},c=new vs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{o.parse(h,a,function(u){t(u),o.manager.itemEnd(e)},l)}catch(u){l(u)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const a={},l={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_d){try{a[We.KHR_BINARY_GLTF]=new gv(e)}catch(d){s&&s(d);return}o=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Rv(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[d.name]=d,a[d.name]=!0}if(o.extensionsUsed)for(let u=0;u<o.extensionsUsed.length;++u){const d=o.extensionsUsed[u],f=o.extensionsRequired||[];switch(d){case We.KHR_MATERIALS_UNLIT:a[d]=new Qy;break;case We.KHR_DRACO_MESH_COMPRESSION:a[d]=new _v(o,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[d]=new xv;break;case We.KHR_MESH_QUANTIZATION:a[d]=new yv;break;default:f.indexOf(d)>=0&&l[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(a),h.setPlugins(l),h.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}}function $y(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jy{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const o=t.json,c=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let h;const u=new we(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ct);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new To(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new dd(u),h.distance=d;break;case"spot":h=new ud(u),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,Dn(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(h),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],l=(o.extensions&&o.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return n._getNodeRef(t.cache,l,c)})}}class Qy{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){const s=[];e.color=new we(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ct),e.opacity=a[3]}o.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",o.baseColorTexture,Ft))}return Promise.all(s)}}class ev{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class tv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const l=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new q(l,l)}return Promise.all(o)}}class nv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class iv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class sv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const l=a.sheenColorFactor;t.sheenColor.setRGB(l[0],l[1],l[2],Ct)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class rv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class ov{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const l=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(l[0],l[1],l[2],Ct),Promise.all(o)}}class av{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=s.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class lv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const l=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(l[0],l[1],l[2],Ct),a.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(o)}}class cv{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(o)}}class hv{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const o=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class uv{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const o=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,a)}}class dv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fv{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,o=s.textures[e];if(!o.extensions||!o.extensions[t])return null;const a=o.extensions[t],l=s.images[a.source];let c=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pv{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],o=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(l){const c=s.byteOffset||0,h=s.byteLength||0,u=s.count,d=s.byteStride,f=new Uint8Array(l,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,s.mode,s.filter),p})})}else return null}}class mv{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const h of s.primitives)if(h.mode!==nn.TRIANGLES&&h.mode!==nn.TRIANGLE_STRIP&&h.mode!==nn.TRIANGLE_FAN&&h.mode!==void 0)return null;const a=n.extensions[this.name].attributes,l=[],c={};for(const h in a)l.push(this.parser.getDependency("accessor",a[h]).then(u=>(c[h]=u,c[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const u=h.pop(),d=u.isGroup?u.children:[u],f=h[0].count,p=[];for(const _ of d){const x=new Le,m=new R,g=new vn,v=new R(1,1,1),y=new Zu(_.geometry,_.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,x.compose(m,g,v));for(const M in c)if(M==="_COLOR_0"){const L=c[M];y.instanceColor=new gs(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,c[M]);at.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const _d="glTF",Hs=12,au={JSON:1313821514,BIN:5130562};class gv{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Hs,o=new DataView(e,Hs);let a=0;for(;a<s;){const l=o.getUint32(a,!0);a+=4;const c=o.getUint32(a,!0);if(a+=4,c===au.JSON){const h=new Uint8Array(e,Hs+a,l);this.content=n.decode(h)}else if(c===au.BIN){const h=Hs+a;this.body=e.slice(h,h+l)}a+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _v{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,l={},c={},h={};for(const u in a){const d=_l[u]||u.toLowerCase();l[d]=a[u]}for(const u in e.attributes){const d=_l[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],p=hs[f.componentType];h[d]=p.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",o).then(function(u){return new Promise(function(d,f){s.decodeDracoFile(u,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=c[_];m!==void 0&&(x.normalized=m)}d(p)},l,h,Ct,f)})})}}class xv{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yv{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class xd extends rr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[o+a];return t}interpolate_(e,t,n,s){const o=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=l*2,h=l*3,u=s-t,d=(n-t)/u,f=d*d,p=f*d,_=e*h,x=_-h,m=-2*p+3*f,g=p-f,v=1-m,y=g-f+d;for(let M=0;M!==l;M++){const L=a[x+M+l],T=a[x+M+c]*u,A=a[_+M+l],I=a[_+M]*u;o[M]=v*L+y*T+m*A+g*I}return o}}const vv=new vn;class Mv extends xd{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return vv.fromArray(o).normalize().toArray(o),o}}const nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lu={9728:Dt,9729:Wt,9984:bl,9985:Xs,9986:es,9987:xn},cu={33071:Nn,33648:Zs,10497:kn},ba={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Sv={CUBICSPLINE:void 0,LINEAR:js,STEP:$s},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new sn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),r.DefaultMaterial}function _i(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Dn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ev(r,e,t){let n=!1,s=!1,o=!1;for(let h=0,u=e.length;h<u;h++){const d=e[h];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(o=!0),n&&s&&o)break}if(!n&&!s&&!o)return Promise.resolve(r);const a=[],l=[],c=[];for(let h=0,u=e.length;h<u;h++){const d=e[h];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(f)}if(s){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;l.push(f)}if(o){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2];return n&&(r.morphAttributes.position=u),s&&(r.morphAttributes.normal=d),o&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function wv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tv(r){let e;const t=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wa(t.attributes):e=r.indices+":"+wa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)e+=":"+wa(r.targets[n]);return e}function wa(r){let e="";const t=Object.keys(r).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+r[t[n]]+";";return e}function xl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Cv=new Le;class Rv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $y,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,o=!1,a=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const c=l.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,o=l.indexOf("Firefox")>-1,a=o?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||o&&a<98?this.textureLoader=new rc(this.options.manager):this.textureLoader=new Ay(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const l={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return _i(o,l,s),Dn(l,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){for(const c of l.scenes)c.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,o=t.length;s<o;s++){const a=t[s].joints;for(let l=0,c=a.length;l<c;l++)e[a[l]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(a,l)=>{const c=this.associations.get(a);c!=null&&this.associations.set(l,c);for(const[h,u]of a.children.entries())o(u,l.children[h])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":s=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(o,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(o,a){n.load(Si.resolveURL(t.uri,s.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=ba[s.type],l=hs[s.componentType],c=s.normalized===!0,h=new l(s.count*a);return Promise.resolve(new yt(h,a,c))}const o=[];return s.bufferView!==void 0?o.push(this.getDependency("bufferView",s.bufferView)):o.push(null),s.sparse!==void 0&&(o.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(o).then(function(a){const l=a[0],c=ba[s.type],h=hs[s.componentType],u=h.BYTES_PER_ELEMENT,d=u*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let x,m;if(p&&p!==d){const g=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count;let y=t.cache.get(v);y||(x=new h(l,g*p,s.count*p/u),y=new Bl(x,p/u),t.cache.add(v,y)),m=new Ai(y,c,f%p/u,_)}else l===null?x=new h(s.count*c):x=new h(l,f,s.count*c),m=new yt(x,c,_);if(s.sparse!==void 0){const g=ba.SCALAR,v=hs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,L=new v(a[1],y,s.sparse.count*g),T=new h(a[2],M,s.sparse.count*c);l!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,I=L.length;A<I;A++){const F=L[A];if(m.setX(F,T[A*c]),c>=2&&m.setY(F,T[A*c+1]),c>=3&&m.setZ(F,T[A*c+2]),c>=4&&m.setW(F,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,a=t.images[o];let l=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(l=c)}return this.loadTextureImage(e,o,l)}loadTextureImage(e,t,n){const s=this,o=this.json,a=o.textures[e],l=o.images[t],c=(l.uri||l.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||l.name||"",u.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(u.name=l.uri);const f=(o.samplers||{})[a.sampler]||{};return u.magFilter=lu[f.magFilter]||Wt,u.minFilter=lu[f.minFilter]||xn,u.wrapS=cu[f.wrapS]||kn,u.wrapT=cu[f.wrapT]||kn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,s=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=s.images[e],l=self.URL||self.webkitURL;let c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){h=!0;const f=new Blob([d],{type:a.mimeType});return c=l.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Mt(x);m.needsUpdate=!0,f(m)}),t.load(Si.resolveURL(d,o.path),_,void 0,p)})}).then(function(d){return h===!0&&l.revokeObjectURL(c),Dn(d,a),d.userData.mimeType=a.mimeType||Av(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),o.extensions[We.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=o.associations.get(a);a=o.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,l),o.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new kl,wt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(l,c)),n=c}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let c=this.cache.get(l);c||(c=new So,wt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(l,c)),n=c}if(s||o||a){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),o&&(l+="vertex-colors:"),a&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=n.clone(),o&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return sn}loadMaterial(e){const t=this,n=this.json,s=this.extensions,o=n.materials[e];let a;const l={},c=o.extensions||{},h=[];if(c[We.KHR_MATERIALS_UNLIT]){const d=s[We.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),h.push(d.extendParams(l,o,t))}else{const d=o.pbrMetallicRoughness||{};if(l.color=new we(1,1,1),l.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;l.color.setRGB(f[0],f[1],f[2],Ct),l.opacity=f[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",d.baseColorTexture,Ft)),l.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,l.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,l)})))}o.doubleSided===!0&&(l.side=Bt);const u=o.alphaMode||Ea.OPAQUE;if(u===Ea.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,u===Ea.MASK&&(l.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==zt&&(h.push(t.assignTexture(l,"normalMap",o.normalTexture)),l.normalScale=new q(1,1),o.normalTexture.scale!==void 0)){const d=o.normalTexture.scale;l.normalScale.set(d,d)}if(o.occlusionTexture!==void 0&&a!==zt&&(h.push(t.assignTexture(l,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==zt){const d=o.emissiveFactor;l.emissive=new we().setRGB(d[0],d[1],d[2],Ct)}return o.emissiveTexture!==void 0&&a!==zt&&h.push(t.assignTexture(l,"emissiveMap",o.emissiveTexture,Ft)),Promise.all(h).then(function(){const d=new a(l);return o.name&&(d.name=o.name),Dn(d,o),t.associations.set(d,{materials:e}),o.extensions&&_i(s,d,o),d})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function o(l){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(c){return hu(c,l,t)})}const a=[];for(let l=0,c=e.length;l<c;l++){const h=e[l],u=Tv(h),d=s[u];if(d)a.push(d.promise);else{let f;h.extensions&&h.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=o(h):f=hu(new lt,h,t),s[u]={primitive:h,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,o=n.meshes[e],a=o.primitives,l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c].material===void 0?bv(this.cache):this.getDependency("material",a[c].material);l.push(u)}return l.push(t.loadGeometries(a)),Promise.all(l).then(function(c){const h=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const x=u[p],m=a[p];let g;const v=h[p];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)g=o.isSkinnedMesh===!0?new Ku(x,v):new rt(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?g.geometry=ou(g.geometry,Au):m.mode===nn.TRIANGLE_FAN&&(g.geometry=ou(g.geometry,ll));else if(m.mode===nn.LINES)g=new Ju(x,v);else if(m.mode===nn.LINE_STRIP)g=new bo(x,v);else if(m.mode===nn.LINE_LOOP)g=new $u(x,v);else if(m.mode===nn.POINTS)g=new ju(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&wv(g,o),g.name=t.createUniqueName(o.name||"mesh_"+e),Dn(g,o),m.extensions&&_i(s,g,m),t.assignFinalMaterial(g),d.push(g)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return o.extensions&&_i(s,d[0],o),d[0];const f=new an;o.extensions&&_i(s,f,o),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(Ru.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new yo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,o=t.joints.length;s<o;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const o=s.pop(),a=s,l=[],c=[];for(let h=0,u=a.length;h<u;h++){const d=a[h];if(d){l.push(d);const f=new Le;o!==null&&f.fromArray(o.array,h*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Mo(l,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],o=s.name?s.name:"animation_"+e,a=[],l=[],c=[],h=[],u=[];for(let d=0,f=s.channels.length;d<f;d++){const p=s.channels[d],_=s.samplers[p.sampler],x=p.target,m=x.node,g=s.parameters!==void 0?s.parameters[_.input]:_.input,v=s.parameters!==void 0?s.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),l.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),h.push(_),u.push(x))}return Promise.all([Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],_=d[2],x=d[3],m=d[4],g=[];for(let v=0,y=f.length;v<y;v++){const M=f[v],L=p[v],T=_[v],A=x[v],I=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const F=n._createAnimationTracks(M,L,T,A,I);if(F)for(let S=0;S<F.length;S++)g.push(F[S])}return new cd(o,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(o){const a=n._getNodeRef(n.meshCache,s.mesh,o);return s.weights!==void 0&&a.traverse(function(l){if(l.isMesh)for(let c=0,h=s.weights.length;c<h;c++)l.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],o=n._loadNodeShallow(e),a=[],l=s.children||[];for(let h=0,u=l.length;h<u;h++)a.push(n.getDependency("node",l[h]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([o,Promise.all(a),c]).then(function(h){const u=h[0],d=h[1],f=h[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Cv)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],a=o.name?s.createUniqueName(o.name):"",l=[],c=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&l.push(c),o.camera!==void 0&&l.push(s.getDependency("camera",o.camera).then(function(h){return s._getNodeRef(s.cameraCache,o.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let u;if(o.isBone===!0?u=new zl:h.length>1?u=new an:h.length===1?u=h[0]:u=new at,u!==h[0])for(let d=0,f=h.length;d<f;d++)u.add(h[d]);if(o.name&&(u.userData.name=o.name,u.name=a),Dn(u,o),o.extensions&&_i(n,u,o),o.matrix!==void 0){const d=new Le;d.fromArray(o.matrix),u.applyMatrix4(d)}else o.translation!==void 0&&u.position.fromArray(o.translation),o.rotation!==void 0&&u.quaternion.fromArray(o.rotation),o.scale!==void 0&&u.scale.fromArray(o.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,o=new an;n.name&&(o.name=s.createUniqueName(n.name)),Dn(o,n),n.extensions&&_i(t,o,n);const a=n.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(s.getDependency("node",a[c]));return Promise.all(l).then(function(c){for(let u=0,d=c.length;u<d;u++)o.add(c[u]);const h=u=>{const d=new Map;for(const[f,p]of s.associations)(f instanceof wt||f instanceof Mt)&&d.set(f,p);return u.traverse(f=>{const p=s.associations.get(f);p!=null&&d.set(f,p)}),d};return s.associations=h(o),o})}_createAnimationTracks(e,t,n,s,o){const a=[],l=e.name?e.name:e.uuid,c=[];jn[o.path]===jn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(l);let h;switch(jn[o.path]){case jn.weights:h=_s;break;case jn.rotation:h=xs;break;case jn.position:case jn.scale:h=ys;break;default:switch(n.itemSize){case 1:h=_s;break;case 2:case 3:default:h=ys;break}break}const u=s.interpolation!==void 0?Sv[s.interpolation]:js,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const _=new h(c[f]+"."+jn[o.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xl(t.constructor),s=new Float32Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=t[o]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof xs?Mv:xd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Pv(r,e,t){const n=e.attributes,s=new kt;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],c=l.min,h=l.max;if(c!==void 0&&h!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(h[0],h[1],h[2])),l.normalized){const u=xl(hs[l.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const l=new R,c=new R;for(let h=0,u=o.length;h<u;h++){const d=o[h];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const x=xl(hs[f.componentType]);c.multiplyScalar(x)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}r.boundingBox=s;const a=new Nt;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=a}function hu(r,e,t){const n=e.attributes,s=[];function o(a,l){return t.getDependency("accessor",a).then(function(c){r.setAttribute(l,c)})}for(const a in n){const l=_l[a]||a.toLowerCase();l in r.attributes||s.push(o(n[a],l))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});s.push(a)}return Ze.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Dn(r,e),Pv(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ev(r,e.targets,t):r})}class Lv{constructor(e,t){this.tableElement=new an,this.size={width:e,depth:t},this.createTable(e,t)}createTable(e,t){const n=new On(e,t),s=new sn({color:"white",side:Bt}),o=new rt(n,s);o.rotation.x=Math.PI/2,o.position.set(0,10,0),o.name="table",this.tableElement.add(o);const a=new on(e,1,t),l=new sn({color:8421504}),c=new rt(a,l);c.position.set(0,0,0),c.name="box",this.tableElement.add(c);const h=e/2,u=t/2,d=this.createPole();d.position.set(-h,0,-u),this.tableElement.add(d);const f=this.createPole();f.position.set(h,0,-u),this.tableElement.add(f);const p=this.createPole();p.position.set(-h,0,u),this.tableElement.add(p);const _=this.createPole();_.position.set(h,0,u),this.tableElement.add(_),this.createContour(e,t)}createContour(e,t){const n=new on(e,3,1),s=new sn({color:8421504}),o=new rt(n,s);o.position.set(0,10,-t/2),o.name="contour1",this.tableElement.add(o);const a=new on(e,3,1),l=new sn({color:8421504}),c=new rt(a,l);c.position.set(0,10,t/2),c.name="contour2",this.tableElement.add(c);const h=new on(1,3,t),u=new sn({color:8421504}),d=new rt(h,u);d.position.set(-e/2,10,0),d.name="contour3",this.tableElement.add(d);const f=new on(1,3,t),p=new sn({color:8421504}),_=new rt(f,p);_.position.set(e/2,10,0),_.name="contour4",this.tableElement.add(_)}createPole(){const e=new an,t=new bs(1,1,25,50),n=new sn({color:"grey"}),s=new rt(t,n);return e.add(s),e}getTable(){return this.tableElement}render(){return this.table}}class Iv{constructor(){this.products=new an,this.gameLinks=[{name:"Coloration dans les graphes en ligne",url:"https://scratch.mit.edu/projects/487885073/fullscreen/"},{name:"Compendre PageRank en ligne",url:"https://scratch.mit.edu/projects/555332313/fullscreen/"},{name:"Monty Hall en ligne",url:"https://scratch.mit.edu/projects/558471406/fullscreen/"},{name:"Algorithme des fourmis en ligne",url:"https://terra-numerica.github.io/simulation-mobilite-robot/antMath/index.html"},{name:"TaxiBot en ligne",url:"https://portail.terra-numerica.org/taxibot/home/index.html"},{name:"Jeu de la tablette de chocolat",url:"https://projet.liris.cnrs.fr/~mam/valise/#chocolat"},{name:"Jeu de la contamination/vie en ligne",url:"https://scratch.mit.edu/projects/517390361/fullscreen/"},{name:"Bloque moi si tu peux",url:"https://projet.liris.cnrs.fr/~mam/valise/#nim"},{name:"Dessin sans lever le crayon",url:"https://projet.liris.cnrs.fr/~mam/valise/#dessin"},{name:"Crêpier psychorigide en ligne",url:"https://terra-numerica.github.io/crepe-maker/"}],this.productMeshes=[]}createProducts(e,t,n,s=5){e=Number(e)||100,t=Number(t)||25,n=Number(n)||20,s=Number(s)||5,console.log("Creating products with dimensions:",{shelfWidth:e,shelfDepth:t,maxHeight:n,productsPerShelf:s});const o=e*.9/s,a=n*.8,l=t*.8;console.log("Product dimensions:",{productWidth:o,productHeight:a,productDepth:l});const c=[16711680,65280,255,16776960,16711935,65535,16753920];this.gameLinks.forEach((h,u)=>{try{const d=new on(Math.max(1,o),Math.max(1,a),Math.max(1,l)),f=u%c.length,p=new sn({color:c[f],emissive:0,side:Bt}),_=new rt(d,p),x=Math.floor(u/s),m=u%s,g=o*Math.min(s,this.gameLinks.length),y=-e/2+o/2+(e-g)/2+m*o;let M,L;x===0?(M=n/2,L=-70):(M=n*1.7,L=-70),_.position.set(y,M,L),_.name=h.name,_.userData={url:h.url,originalColor:c[f],isProduct:!0},this.productMeshes.push(_),this.products.add(_),console.log(`Added product: ${h.name} at position:`,{x:y,y:M,z:L})}catch(d){console.error(`Error creating product ${h.name}:`,d)}})}getProducts(){return this.products}getAllProductMeshes(){return this.productMeshes}}class uu{constructor(){this.raycaster=new hc,this.mouse=new q,this.hoveredProduct=null,this.tooltip=null,this.cupboard=null,this.createTooltip()}createTooltip(){this.tooltip=document.createElement("div"),this.tooltip.style.position="absolute",this.tooltip.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.tooltip.style.color="white",this.tooltip.style.padding="8px 12px",this.tooltip.style.borderRadius="5px",this.tooltip.style.fontSize="16px",this.tooltip.style.fontWeight="bold",this.tooltip.style.display="none",this.tooltip.style.pointerEvents="none",this.tooltip.style.zIndex="9999",document.body.appendChild(this.tooltip)}Show_tips(e){this.cupboard=e,window.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.tooltip&&(this.tooltip.style.left=t.clientX+15+"px",this.tooltip.style.top=t.clientY+15+"px")}),window.addEventListener("click",()=>{if(this.hoveredProduct){const t=this.hoveredProduct.userData.url;t&&window.open(t,"_blank")}})}updateProductInteractions(e){if(!(!this.cupboard||!e||!this.raycaster)){this.raycaster.setFromCamera(this.mouse,e);try{const t=this.cupboard.getProducts().getAllProductMeshes();if(!t||t.length===0)return;const n=this.raycaster.intersectObjects(t);this.hoveredProduct&&(this.hoveredProduct.material.emissive.setHex(0),this.hoveredProduct=null,this.tooltip&&(this.tooltip.style.display="none")),n.length>0&&(this.hoveredProduct=n[0].object,this.hoveredProduct.material.emissive.setHex(2236962),this.tooltip&&(this.tooltip.textContent=this.hoveredProduct.name,this.tooltip.style.display="block"))}catch(t){console.error("Error in updateProductInteractions:",t)}}}createScene(){}createPlane(e,t,n,s="floor"){let o;return s==="floor"?o=new rt(new On(e,e,1,1),new zt({map:n,side:Bt})):s==="wall"?o=new rt(new On(e,t,1,1),new zt({map:n,side:Bt})):o=new rt(new On(e,t,1,1),new zt({map:n,side:Bt})),o}createBox(e,t,n,s,o){const a=n.loadTexture(t[0],{repeat:6}),l=this.createPlane(s.x,s.y,a);l.rotation.x=Math.PI/2,l.position.y=o,e.add(l);const c=n.loadTexture(t[1],{repeat:2}),h=this.createPlane(s.x,s.y,c,"wall");h.position.z=l.position.z-l.geometry.parameters.width/2,h.position.y=l.position.y+h.geometry.parameters.height/2,e.add(h);const u=this.createPlane(s.x,s.y,c,"wall");u.position.z=l.position.z+l.geometry.parameters.width/2,u.position.y=l.position.y+u.geometry.parameters.height/2,e.add(u);const d=this.createPlane(s.x,s.y,c,"wall");d.position.x=l.position.x-l.geometry.parameters.width/2,d.position.y=l.position.y+d.geometry.parameters.height/2,d.rotation.y=Math.PI/2,e.add(d);const f=this.createPlane(s.x,s.y,c,"wall");f.position.x=l.position.x+l.geometry.parameters.width/2,f.position.y=l.position.y+f.geometry.parameters.height/2,f.rotation.y=Math.PI/2,e.add(f);const p=n.loadTexture(t[2],{repeat:6}),_=this.createPlane(s.x,s.y,p);_.rotation.x=Math.PI/2,_.position.y=l.position.y+h.geometry.parameters.height,e.add(_)}createTable(e,t,{width:n,depth:s}){let o=new Lv(n,s);return e.add(o.getTable()),t.attachLight(o.getTable(),{color:"white",intensity:2,name:"tableLight"}),o.getTable()}createProducts(e,t,{width:n,depth:s,height:o}){console.log("Creating products with dimensions:",{width:n,depth:s,height:o}),n=Number(n)||100,s=Number(s)||25,o=Number(o)||20;let a=new Iv;return a.createProducts(n,s,o,5),e.add(a.getProducts()),a.getProducts()}}class yd{constructor(){en(this,"isDragging",!1);en(this,"offsetX");en(this,"offsetY");en(this,"currentModal");this.createHTMLStructure(),this.navbar=this.getNavbar(),this.create_favicon()}getNavbar(){return document.getElementById("navbar0")}getCanvas(){return document.getElementById("canvas2")}getContainer(){return document.getElementById("container0")}Deroulant(){document.getElementById("myDropdown").classList.toggle("show")}openModal(e){console.log(`Opening modal with ID: ${e}`);const t=document.getElementById(e);t?t.style.display="block":console.error("Modal not found.")}closeModal(e){console.log(`Closing modal with ID: ${e}`);const t=document.getElementById(e);t&&(t.style.display="none")}startDrag(e,t="parametersModal"){if(this.isDragging=!0,this.currentModal=document.getElementById(t),!this.currentModal){console.error(`Modal with ID ${t} not found.`);return}this.offsetX=e.clientX-this.currentModal.getBoundingClientRect().left,this.offsetY=e.clientY-this.currentModal.getBoundingClientRect().top,document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("mouseup",this.stopDrag.bind(this))}drag(e){!this.isDragging||!this.currentModal||(this.currentModal.style.left=`${e.clientX-this.offsetX}px`,this.currentModal.style.top=`${e.clientY-this.offsetY}px`,this.currentModal.style.right="auto")}stopDrag(){this.isDragging=!1,document.removeEventListener("mousemove",this.drag.bind(this)),document.removeEventListener("mouseup",this.stopDrag.bind(this))}getModal_content(e){return console.log(`Getting modal content with ID: ${e}`),document.getElementById(`${e}-content`)}create_modal(e){console.log(`Creating modal with ID: ${e}`);const t=document.createElement("div");t.id=e,t.className="modal",document.body.appendChild(t);const n=document.createElement("div");n.className="modal-content",n.id=`${e}-content`,t.appendChild(n);const s=document.createElement("span");s.className="close",s.innerHTML="&times;",s.onclick=()=>this.closeModal(e),n.appendChild(s);const o=document.createElement("h2");o.textContent="Parameters",n.appendChild(o),this.style_modal(t),this.style_modal_content(n),this.style_close(s)}create_dropdown({parentId:e="navbar0",buttonText:t,menuId:n}){const s=document.getElementById(e);if(!s){console.error(`Parent element with id ${e} not found.`);return}const o=document.createElement("div");o.className="menu_deroulant",s.appendChild(o);const a=document.createElement("button");a.className="dropbtn child",a.textContent=t,a.id=`dropbtn-${n}`,a.onclick=()=>this.toggleDropdown(n),o.appendChild(a);const l=document.createElement("div");l.className="dropdown-content",l.id=n,o.appendChild(l)}create_dropdown_list(e,t){const n=document.getElementById(e);if(!n){console.error(`Dropdown content with id ${e} not found.`);return}t.forEach(s=>{const o=document.createElement("a");o.href=s.href||"#",o.textContent=s.text,o.onclick=s.onClick||null,n.appendChild(o)}),this.style_dropdown_content_a(),this.style_hover()}Open_dropdown(e){e.onclick=function(t){if(!t.target.matches(".dropbtn")){const s=document.getElementsByClassName("dropdown-content");Array.from(s).forEach(o=>{o.classList.contains("show")&&(o.classList.remove("show"),o.style.display="none")})}const n=document.getElementById("parametersModal");t.target===n&&(n.style.display="none")}}toggleDropdown(e){const t=document.getElementById(e);if(t){const n=t.classList.contains("show");t.classList.toggle("show",!n),t.style.display=n?"none":"block"}}create_button({text:e="Click me!",onClick:t=()=>alert("Button clicked!"),position:n="before",referenceElement:s=null,classes:o=[]}){var a=this.navbar;const l=document.createElement("button");return l.textContent=e,l.classList.add("child",...o),l.onclick=t,l.position=n,s&&a.contains(s)?n==="before"?a.insertBefore(l,s):n==="after"&&a.insertBefore(l,s.nextSibling):a.appendChild(l),this.style_navbar_children(a),l}createHTMLStructure(){const e=document.createElement("div");e.className="container",document.body.appendChild(e),e.id="container0";const t=document.createElement("div");t.className="navbar",t.id="navbar0",e.appendChild(t),t.style.width=window.innerWidth;const n=document.createElement("a");n.href="https://portail.terra-numerica.org/games",n.className="no_hover",t.appendChild(n);const s=document.createElement("img");s.src="https://terra-numerica.org/files/2020/10/cropped-favicon-rond.png",n.appendChild(s),s.style.width="40px"}style_navbar_children(e){const t=e.children;for(let n=0;n<t.length;n++){const s=t[n];s.style.float="left",s.style.textAlign="center",s.style.padding="14px 16px"}}create_favicon(){const e=document.createElement("link");e.rel="icon",e.href="https://terra-numerica.org/files/2020/10/cropped-favicon-rond.png",document.head.appendChild(e)}style_modal(e){if(!e){console.error("Modal element not found.");return}e.style.display="none",e.style.position=" fixed",e.style.top=" 50%",e.style.right=" 10%",e.style.width="300px",e.style.backgroundColor="transparent",e.style.border="none",e.style.boxShadow=" none",e.style.padding="15px",e.style.zIndex="1000",e.addEventListener="startDrag(event)"}style_body_html(e){e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center"}style_container0(e){e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.flexDirection="column"}style_any(){const e=document.querySelectorAll("*");for(let t=0;t<e.length;t++)e[t].style.margin="0",e[t].style.padding="0",e[t].style.boxSizing="border-box"}style_navbar(){const e=document.getElementById("navbar0");e.style.backgroundColor="#24a1eb",e.style.overflow="visible",e.style.fontFamily="Nunito,sans-serif",e.style.textAlign="center"}style_dropdown(e){let t;if(typeof e=="string"?t=document.getElementById(e):t=e,!t){console.error("Dropdown element not found.");return}t.style.float="left",t.style.overflow="hidden",t.style.cursor="pointer",t.style.fontSize="16px",t.style.border="none",t.style.outline="none",t.style.color="white",t.style.padding="14px 16px",t.style.backgroundColor="#24a1eb",t.style.fontFamily="inherit",t.style.margin="0"}style_dropbtn(e){let t;if(typeof e=="string"?t=document.getElementById(e):t=e,!t){console.error("Dropbtn element not found."),console.error("Dropbtn id: "+e);return}t.style.cursor="pointer",t.style.fontSize="16px",t.style.border="none",t.style.outline="none",t.style.color="white",t.style.padding="none",t.style.backgroundColor="#24a1eb",t.style.fontFamily="inherit",t.style.margin="0",t.style.textAlign="center"}style_hover(){document.querySelectorAll(".navbar a:not(.no_hover)").forEach(s=>{s.addEventListener("mouseover",()=>{s.style.backgroundColor="#f9bb12"}),s.addEventListener("mouseout",()=>{s.style.backgroundColor="inherit"})}),document.querySelectorAll(".dropdown").forEach(s=>{const o=s.querySelector(".dropbtn");s.addEventListener("mouseover",()=>{o&&(o.style.backgroundColor="#f9bb12")}),s.addEventListener("mouseout",()=>{o&&(o.style.backgroundColor="")})}),document.querySelectorAll("button","  .dropdown-content").forEach(s=>{s.addEventListener("mouseover",()=>{s.style.backgroundColor="#f9bb12"}),s.addEventListener("mouseout",()=>{s.style.backgroundColor="inherit"}),s.addEventListener("focus",()=>{s.style.backgroundColor="#f9bb12"}),s.addEventListener("blur",()=>{s.style.backgroundColor="inherit"})})}style_dropdown_content(){document.querySelectorAll(".dropdown-content").forEach(t=>{t.style.display="none",t.style.position="absolute",t.style.backgroundColor="#24a1eb",t.style.minWidth="160px",t.style.boxShadow="0px 8px 16px 0px rgba(0,0,0,0.2)",t.style.zIndex="1"})}style_dropdown_content_a(){document.querySelectorAll(".dropdown-content a").forEach(t=>{t.style.float="none",t.style.color="white",t.style.padding="12px 16px",t.style.textDecoration="none",t.style.display="block",t.style.textAlign="left"})}style_dropdown_content_parameters(){document.querySelectorAll(".dropdown-content").forEach(t=>{t.style.cursor="pointer",t.style.color="white",t.style.padding="12px 16px",t.style.textDecoration="none",t.style.display="block",t.style.textAlign="left",t.style.backgroundColor="#24a1eb",t.style.fontSize="16px",t.style.border="none",t.style.outline="none",t.style.display="none"})}style_modal_content(){document.querySelectorAll(".modal-content").forEach(t=>{t.style.backgroundColor="white",t.style.margin="15% auto",t.style.padding="20px",t.style.borderRadius="8px",t.style.width="300px",t.style.textAlign="center",t.style.position="relative",t.style.cursor="grab"})}style_close(){document.querySelectorAll(".close").forEach(t=>{t.style.color="black",t.style.fontSize="28px",t.style.fontWeight="bold",t.style.cursor="pointer",t.style.right="20px",t.style.top="10px",t.style.position="absolute"})}style_modal_content_button(){document.querySelectorAll(".modal-content button").forEach(t=>{t.style.display="block",t.style.padding="14px 20px",t.style.cursor="pointer",t.style.margin="10px auto"})}}class Dv{constructor(e=null){en(this,"CTABannerParameter");let t,n,s;e?(t=e,n=t.getNavbar(),s=t.getContainer()):(t=new yd,n=t.getNavbar(),s=t.getContainer()),this.modals={},this.CTABannerParameter={Banner:t,navbar:n,container:s}}getPermanentModal({title:e,draggable:t,showCloseButton:n,position:s,width:o,visible:a,id:l,theme:c}={}){let h={title:"Parameters",draggable:!0,showCloseButton:!0,position:{right:10,top:10},width:"300px",visible:!0,id:"controlPanel",theme:"light"};e&&(h.title=e),t!==void 0&&(h.draggable=t),n!==void 0&&(h.showCloseButton=n),s&&(s.right!==void 0&&(h.position.right=s.right),s.top!==void 0&&(h.position.top=s.top)),o&&(h.width=o),a!==void 0&&(h.visible=a),l&&(h.id=l),c&&(h.theme=c);const u=this.CTABannerParameter.Banner;let d=document.getElementById(h.id),f;if(d){f=u.getModal_content(h.id);const x=f.querySelector("h2");x&&(x.textContent=h.title)}else{u.create_modal(h.id),d=document.getElementById(h.id),f=u.getModal_content(h.id);const x=f.querySelector("h2");x&&(x.textContent=h.title,x.style.margin="0 0 15px 0",x.style.padding="5px",x.style.borderBottom="1px solid #ccc");const m=f.querySelector(".close");if(m&&(m.className="close modal-close modal-close-expanded",m.style.backgroundColor="transparent",m.title="Collapse",m.style.fontSize="16px",m.style.fontWeight="bold",m.textContent="",m.innerHTML="",f.dataset.collapsed="false",m.onclick=function(){_(f,m)}),!h.showCloseButton){const g=f.querySelector(".close");g&&(g.style.display="none")}}if(d.style.position="fixed",d.style.top=`${h.position.top}%`,d.style.right=`${h.position.right}%`,d.style.width=h.width,d.style.display=h.visible?"block":"none",d.style.zIndex="1000",d.style.backgroundColor="transparent",h.theme==="dark"){f.style.backgroundColor="#333",f.style.color="#fff";const x=f.querySelector("h2");x&&(x.style.borderBottom="1px solid #555")}else f.style.backgroundColor="#24a1eb",f.style.color="#fff";if(f.style.boxShadow="0 4px 8px rgba(0,0,0,0.2)",f.style.borderRadius="8px",f.style.padding="15px",f.style.maxHeight="80vh",f.style.overflowY="auto",h.draggable){f.style.cursor="move";const x=f.querySelector("h2");f.addEventListener("mousedown",m=>{(m.target===x||m.target===f)&&u.startDrag(m,h.id)})}let p=f.querySelector(".form-container");p||(p=document.createElement("div"),p.className="form-container",p.style.display="flex",p.style.flexDirection="column",p.style.gap="10px",p.style.transition="height 0.3s ease-in-out, opacity 0.3s ease-in-out",p.style.overflow="hidden",f.appendChild(p));function _(x,m){const g=x.querySelector(".form-container");if(x.dataset.collapsed==="true"){x.style.transition="height 0.3s ease-in-out, opacity 0.3s ease-in-out";const y=x.querySelector("h2").offsetHeight,M=x.scrollHeight;x.style.height=y+15+"px",x.offsetHeight,x.style.height=M+"px",g.style.opacity=1,g.style.display="flex",x.style.overflow="hidden",m.className="close modal-close modal-close-expanded",m.title="Collapse",setTimeout(()=>{x.style.height="auto"},300),x.dataset.collapsed=!1}else{const M=x.querySelector("h2").offsetHeight;x.style.height=x.scrollHeight+"px",x.offsetHeight,x.style.height=M+15+"px",g.style.opacity="0",m.className="close modal-close modal-close-collapsed",m.title="Expand",setTimeout(()=>{x.dataset.collapsed==="true"&&(g.style.display="none")},300),x.dataset.collapsed="true"}}return{addButton:(x,m,g={})=>{const v=document.createElement("button");return v.textContent=x,v.onclick=m,v.style.display="block",v.style.padding="10px",v.style.margin="10px auto",v.style.cursor="pointer",v.style.width=g.width||"80%",c==="dark"?(v.style.backgroundColor="inherit",v.style.color=g.textColor||"white"):(v.style.color=g.textColor||"#fff",v.style.backgroundColor="inherit"),v.style.border="none",v.style.borderRadius="40px",v.style.transition="background-color 0.3s",v.addEventListener("mouseover",()=>{v.style.backgroundColor="#f9bb12"}),v.addEventListener("mouseout",()=>{v.style.backgroundColor="inherit"}),p.appendChild(v),v},addSlider:(x,m,g,v,y,M={})=>{const L=document.createElement("div");L.style.margin="5px 0",L.style.textAlign="left";const T=document.createElement("label");T.textContent=x,T.style.display="block",T.style.marginBottom="5px",T.style.fontWeight="bold";const A=document.createElement("div");A.style.display="flex",A.style.alignItems="center";const I=document.createElement("input");I.type="range",I.min=m,I.max=g,I.step=M.step||1,I.value=v,I.style.flex="1";const F=document.createElement("span");return F.textContent=M.formatValue?M.formatValue(v):v,F.style.marginLeft="10px",F.style.minWidth="40px",F.style.textAlign="right",I.addEventListener("input",()=>{const S=Number(I.value);F.textContent=M.formatValue?M.formatValue(S):S,y&&y(S)}),A.appendChild(I),A.appendChild(F),L.appendChild(T),L.appendChild(A),p.appendChild(L),{slider:I,valueDisplay:F,container:L}},addCheckbox:(x,m,g)=>{const v=document.createElement("div");v.style.margin="5px 0",v.style.textAlign="left",v.style.display="flex",v.style.alignItems="center";const y=document.createElement("input");y.type="checkbox",y.checked=m,y.style.marginRight="10px",y.style.transform="scale(1.2)";const M=document.createElement("label");return M.textContent=x,y.addEventListener("change",()=>{g&&g(y.checked)}),v.appendChild(y),v.appendChild(M),p.appendChild(v),{checkbox:y,container:v}},addDropdown:(x,m,g,v)=>{const y=document.createElement("div");y.style.margin="5px 0",y.style.textAlign="left";const M=document.createElement("label");M.textContent=x,M.style.display="block",M.style.marginBottom="5px",M.style.fontWeight="bold";const L=document.createElement("select");return L.style.width="100%",L.style.padding="5px",L.style.borderRadius="4px",m.forEach(T=>{const A=document.createElement("option");A.value=T.value,A.textContent=T.label||T.value,T.value===g&&(A.selected=!0),L.appendChild(A)}),L.addEventListener("change",()=>{v&&v(L.value)}),y.appendChild(M),y.appendChild(L),p.appendChild(y),{select:L,container:y}},addColorPicker:(x,m,g)=>{const v=document.createElement("div");v.style.margin="5px 0",v.style.textAlign="left";const y=document.createElement("label");y.textContent=x,y.style.display="block",y.style.marginBottom="5px",y.style.fontWeight="bold";const M=document.createElement("div");M.style.display="flex",M.style.alignItems="center";const L=document.createElement("input");L.type="color",L.value=m,L.style.margin="0 10px 0 0";const T=document.createElement("span");return T.textContent=m,T.style.fontFamily="monospace",L.addEventListener("input",()=>{T.textContent=L.value,g&&g(L.value)}),M.appendChild(L),M.appendChild(T),v.appendChild(y),v.appendChild(M),p.appendChild(v),{colorPicker:L,valueDisplay:T,container:v}},addSeparator:()=>{const x=document.createElement("hr");return x.style.margin="10px 0",x.style.border="none",x.style.borderTop="1px solid #ccc",p.appendChild(x),x},addLabel:(x,m={})=>{const g=document.createElement("div");return g.textContent=x,g.style.margin="5px 0",g.style.textAlign=m.align||"left",g.style.fontWeight=m.bold?"bold":"normal",g.style.fontSize=m.fontSize||"inherit",g.style.color=m.color||"inherit",p.appendChild(g),g},clear:()=>{for(;p.firstChild;)p.removeChild(p.firstChild)},show:()=>{d.style.display="block"},hide:()=>{d.style.display="none"},toggle:()=>{d.style.display=d.style.display==="none"?"block":"none"},getElement:()=>d,getContentElement:()=>f,toggleCollapse:()=>{const x=f.querySelector(".close");_(f,x)},collapse:()=>{if(f.dataset.collapsed!=="true"){const x=f.querySelector(".close");_(f,x)}},expand:()=>{if(f.dataset.collapsed==="true"){const x=f.querySelector(".close");_(f,x)}},getFormContainer:()=>p,setPosition:(x,m)=>{x!==void 0&&(d.style.top=typeof x=="number"?`${x}%`:x),m!==void 0&&(d.style.right=typeof m=="number"?`${m}%`:m)},setSize:(x,m)=>{x&&(d.style.width=x),m&&(f.style.height=m)},createToggleButton:(x="Controls")=>this.addButtonToNavbar({textButton:x,onclickFunction:()=>d.style.display=d.style.display==="none"?"block":"none"})}}}var li,vd,Md,Sd;class Nv{constructor(){Ec(this,li);en(this,"CTABannerParameter");en(this,"mainParameters");en(this,"pendingLoads",!1);en(this,"pendingCopies",!1);en(this,"numberPendingLoads",0);en(this,"numberPendingCopies",0);console.log("Framework constructor");const e=new yd;var t=e.getNavbar(),n=e.getContainer();this.CTABannerParameter={Banner:e,navbar:t,container:n},this.mainParameters=lr(this,li,vd).call(this)}onResize({renderer:e,window:t,camera:n,enabled:s}={}){let o={renderer:this.mainParameters.renderer,window:this.window,camera:this.mainParameters.camera,enabled:!0};e&&(o.renderer=e),t&&(o.window=t),n&&(o.camera=n),s===!1&&(o.enabled=!1),o.enabled===!1?(console.log("onResize disabled"),o.window.removeEventListener("resize",this.boundResize)):(console.log("onResize enabled"),this.boundResize=lr(this,li,Md).bind(this,o.renderer,o.window,o.camera),o.window.addEventListener("resize",this.boundResize))}updateOcclusionVisibility(e,t,n,s){const o=window.scene;o.children.forEach(a=>{a.isMesh&&(console.log("object is mesh"),a.visible=!lr(this,li,Sd).call(this,a,o,e,t,n,s))})}attachLight(e,{color:t,intensity:n,name:s}={}){let o={color:"#ffffff",intensity:1,name:"light"+e.name};t&&(o.color=t),n&&(o.intensity=n),s&&(o.name=s);const a=window.scene,l=new To(o.color,o.intensity);return l.position.set(e.position.x,e.position.y+e.scale.y+2,e.position.z),l.name=o.name,a.add(l),l}startLoadingScreen(){const e=document.createElement("div");e.id="loading-screen",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.backgroundColor="#000",e.style.color="#fff",e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex="1000",e.image=document.createElement("img"),e.image.src="https://terra-numerica.org/files/2020/10/cropped-favicon-rond.png",e.image.style.width="100px",e.appendChild(e.image),e.innerHTML+="<h1><pre>  Loading</pre></h1>";var t=115;for(let s=0;s<4;s++){const o=document.createElement("div");o.style.width="10px",o.style.height="10px",o.style.backgroundColor="#fff",o.style.borderRadius="50%",o.style.position="absolute",o.style.left=window.innerWidth/2+t+20*s+"px",o.style.top=window.innerHeight/2-4+"px",o.style.animation="bounce 2s infinite",o.style.animationDelay=.15*s+"s",e.appendChild(o)}const n=document.createElement("style");return n.innerHTML=`
            @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-15px);
            }
            }
        `,document.head.appendChild(n),document.body.appendChild(e),e}removeLoadingScreen(){document.getElementById("loading-screen").remove()}async loadModel(e,t,{size:n,timeToWait:s,visible:o,position:a,rotation:l}={}){let c={size:1,timeToWait:500,visible:!1,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}};n&&(c.size=n),s&&(c.timeToWait=s),o&&(c.visible=o),a&&(c.position=a),l&&(c.rotation=l);const h=new gd;let u=window.scene;return await new Promise((f,p)=>{h.load(e,_=>{_.scene.scale.set(c.size,c.size,c.size),_.scene.name=t,_.scene.userData={size:c.size},u.add(_.scene),_.scene.position.set(c.position.x,c.position.y,c.position.z),_.scene.rotation.set(c.rotation.x,c.rotation.y,c.rotation.z),_.scene.visible=c.visible,console.log("Model uploaded: "+t),f(_.scene)},void 0,p)})}async create_copy(e,{size:t,counter:n,timeToWait:s,position:o,rotation:a}={}){var u;this.pendingCopies=!0,this.numberPendingCopies++;let l=window.scene,c;for(;!c;)c=(u=l.getObjectByName(e))==null?void 0:u.clone(),c||await new Promise(d=>setTimeout(d,25));let h={size:l.getObjectByName(e).userData.size,counter:0,timeToWait:200,position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0}};if(t&&(h.size=t),n&&(h.counter=n),s&&(h.timeToWait=s),o&&(h.position=o),a&&(h.rotation=a),c.position.set(h.position.x,h.position.y,h.position.z),c.scale.set(h.size,h.size,h.size),c.rotation.set(h.rotation.x,h.rotation.y,h.rotation.z),c.visible=!0,h.counter===0){let d=0;for(let f=0;f<l.children.length;f++)l.children[f].name.includes(e+"_copy")&&d++;c.name=e+"_copy"+d}else if(c.name=e+"_copy"+n,l.getObjectByName(c.name)!=null){console.log("copy name : "+c.name+" already exists");return}return l.add(c),console.log("copy created from : "+e+` 
with name : `+c.name),this.numberPendingCopies--,this.numberPendingCopies===0&&(this.pendingCopies=!1),c}async delete_copy(e){for(;this.pendingCopies;)console.log("waiting for pending copies or loads"),await new Promise(n=>setTimeout(n,250));let t=window.scene;return t.remove(t.getObjectByName(e)),console.log("copy deleted : "+e),t.getObjectByName(e)===void 0}async delete_model(e){for(;this.pendingCopies||this.pendingLoads;)console.log("waiting for pending copies or loads"),await new Promise(o=>setTimeout(o,250));let t=window.scene,n=!1,s=0;for(;!n;)if(s<t.children.length)for(let o=s;o<t.children.length;o++)if(t.children[o].name===e||t.children[o].name.includes(e+"_copy")){t.remove(t.children[o]),s=o;break}else o===t.children.length-1&&(n=!0);else n=!0;return console.log("model deleted : "+e),t.getObjectByName(e)===void 0}loadTexture(e,{repeatHorizontal:t,repeatVertical:n,repeat:s}={}){let o={repeat:1,repeatHorizontal:1,repeatVertical:1};s&&(o.repeat=s,o.repeatHorizontal=s,o.repeatVertical=s),t&&(o.repeatHorizontal=t),n&&(o.repeatVertical=n);const l=new rc().load(e);return l.wrapS=kn,l.wrapT=kn,l.repeat.set(o.repeatHorizontal,o.repeatVertical),l}addSimpleSceneWithTable({width:e,depth:t,YoffSet:n,widthSpace:s,heightSpace:o,floor:a,wall:l,ceiling:c}={}){let h={width:50,depth:50,YoffSet:-10,widthSpace:250,heightSpace:250,floor:"./framework/textures/wood_floor.jpg",wall:"./framework/textures/wall.jpg",ceiling:"./framework/textures/roof.jpg"};e&&(h.width=e),t&&(h.depth=t),n&&(h.YoffSet=n),s&&(h.widthSpace=s),o&&(h.heightSpace=o),a&&(h.floor=a),l&&(h.wall=l),c&&(h.ceiling=c);const u=new uu,d=window.scene;let f={x:h.widthSpace,y:h.heightSpace};var p=[h.floor,h.wall,h.ceiling];u.createBox(d,p,this,f,h.YoffSet);const _=u.createTable(d,this,{width:h.width,depth:h.depth}),x=this.addInteractiveCupboard({width:80,depth:100,height:10});return u.Show_tips(),_&&x}addSimpleSceneWithoutTable({width:e,height:t,YoffSet:n,floor:s,wall:o,ceiling:a}={}){let l={width:250,height:250,YoffSet:-10,floor:"./framework/textures/wood_floor.jpg",wall:"./framework/textures/wall.jpg",ceiling:"./framework/textures/roof.jpg"};e&&(l.width=e),t&&(l.height=t),n&&(l.YoffSet=n),s&&(l.floor=s),o&&(l.wall=o),a&&(l.ceiling=a);const c=new uu,h=window.scene;let u={x:l.width,y:l.height};var d=[l.floor,l.wall,l.ceiling];c.createBox(h,d,this,u,l.YoffSet)}async addSceneFromJson(e){const t=new wy,n=window.scene;var s;await new Promise((o,a)=>{t.load(e,function(l){n.add(l),console.log("Scene was added from json file"),l.getObjectByProperty("type","PerspectiveCamera")!=null?s=l.getObjectByProperty("type","PerspectiveCamera"):l.getObjectByProperty("type","OrthographicCamera")!=null&&(s=l.getObjectByProperty("type","OrthographicCamera")),o()},void 0,a)}),s!=null&&(this.mainParameters.camera=s)}addInteractiveCupboard({width:e,depth:t,height:n}){Hd(async()=>{const{default:s}=await import("./armoire-DaPp6mbk.js");return{default:s}},[]).then(({default:s})=>{const o=new s(e,t,n);return this.mainParameters.scene.add(o.getCupboard()),this.setupProductInteractions(o),o})}setupProductInteractions(e){this.productRaycaster=new hc,this.mouse=new q,this.hoveredProduct=null,this.cupboard=e,this.createTooltip(),window.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.tooltip&&(this.tooltip.style.left=t.clientX+15+"px",this.tooltip.style.top=t.clientY+15+"px")}),window.addEventListener("click",()=>{if(this.hoveredProduct){const t=this.hoveredProduct.userData.url;t&&window.open(t,"_blank")}})}update(e){this.updateProductInteractions(e)}createTooltip(){this.tooltip=document.createElement("div"),this.tooltip.style.position="absolute",this.tooltip.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.tooltip.style.color="white",this.tooltip.style.padding="8px 12px",this.tooltip.style.borderRadius="5px",this.tooltip.style.fontSize="16px",this.tooltip.style.fontWeight="bold",this.tooltip.style.display="none",this.tooltip.style.pointerEvents="none",this.tooltip.style.zIndex="9999",document.body.appendChild(this.tooltip)}updateProductInteractions(e){if(!(!this.cupboard||!e||!this.productRaycaster||!this.mouse)){this.productRaycaster.setFromCamera(this.mouse,e);try{const t=this.cupboard.getProducts().getAllProductMeshes();if(!t||t.length===0)return;const n=this.productRaycaster.intersectObjects(t);this.hoveredProduct&&(this.hoveredProduct.material.emissive.setHex(0),this.hoveredProduct=null,this.tooltip&&(this.tooltip.style.display="none")),n.length>0&&(this.hoveredProduct=n[0].object,this.hoveredProduct.material.emissive.setHex(2236962),this.tooltip&&(this.tooltip.textContent=this.hoveredProduct.name,this.tooltip.style.display="block"))}catch(t){console.error("Error in updateProductInteractions:",t)}}}Show_tips(){const e=document.createElement("div");e.style.position="absolute",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.padding="5px 10px",e.style.borderRadius="5px",e.style.fontSize="14px",e.style.display="none",e.style.pointerEvents="none",document.body.appendChild(e),window.addEventListener("mousemove",t=>{mouse.x=t.clientX/window.innerWidth*2-1,mouse.y=-(t.clientY/window.innerHeight)*2+1,e.style.left=t.clientX+15+"px",e.style.top=t.clientY+15+"px"}),window.addEventListener("click",()=>{if(hoveredProduct){const t=hoveredProduct.userData.url;window.open(t,"_blank")}})}addButtonToNavbar({textButton:e="click me",onclickFunction:t=()=>alert("click"),hover:n=!0,classesOfTheButton:s=["a"]}={}){let o={textButton:"click me",onclickFunction:()=>alert("click"),hover:!0,classesOfTheButton:["a"]};e&&(o.textButton=e),t&&(o.onclickFunction=t),n&&(o.hover=n),s&&(o.classesOfTheButton=s);const a=this.CTABannerParameter.Banner;this.CTABannerParameter.navbar,this.CTABannerParameter.container,a.create_button({text:o.textButton,onClick:o.onclickFunction,classes:o.classesOfTheButton});var l=document.getElementById("navbar0").children[document.getElementById("navbar0").children.length-1];return l}addDropdownToNavbar({textButton:e,dropdownList:t}={}){let n={textButton:"DropDown",dropdownList:[{text:"Parameters",onClick:()=>alert("Hello!")}]};e&&(n.textButton=e),t&&(n.dropdownList=t);const s=this.CTABannerParameter.Banner;this.CTABannerParameter.navbar,this.CTABannerParameter.container,s.create_dropdown({buttonText:n.textButton,menuId:n.textButton}),s.create_dropdown_list(n.textButton,n.dropdownList);var o=document.getElementById("navbar0").children[document.getElementById("navbar0").children.length-1];return o}changeTextOfButton(e,t){var n=document.getElementById("navbar0").children[e];n.textContent=t}changeTextOfDropdown(e,t,n){var s=document.getElementById("navbar0").children[e];if(s.children[1].length<=t){console.log("The button is out of range");return}else if(t==0){var o=s.children[t];o.textContent=n}else{var o=s.children[1].children[t-1];o.textContent=n}}getWindowWidth(){return window.innerWidth}getWindowHeight(){return window.innerHeight-document.getElementById("navbar0").offsetHeight}getPermanentModal({title:e,draggable:t,showCloseButton:n,position:s,width:o,visible:a,id:l,theme:c}={}){const h=new Dv(this.CTABannerParameter.Banner),u=h.getPermanentModal({title:e,draggable:t,showCloseButton:n,position:s,width:o,visible:a,id:l,theme:c});return{AddButtonToModal:(d,f,p={})=>{u.addButton(d,f,p)},AddSliderToModal:(d,f,p,_,x,m={})=>{u.addSlider(d,f,p,_,x,m)},AddCheckboxToModal:(d,f,p)=>{u.addCheckbox(d,f,p)},AddDropDownToModal:(d,f,p,_)=>{u.addDropDown(d,f,p,_)},AddColorPickerToModal:(d,f,p)=>{u.addColorPicker(d,f,p)},AddSeparatorToModal:()=>{u.addSeparator()},AddLabelToModal:(d,f={})=>{u.addLabel(d,f)},ClearFormModal:()=>{h.clear()},ToggleCollapseModal:()=>{u.toggleCollapse()},CollapseModal:()=>{u.collapse()},ExpandModal:()=>{u.expand()}}}}li=new WeakSet,vd=function(){console.log("init");const e=new Fl;window.scene=e;const t=new At(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Xu;return n.setSize(this.getWindowWidth(),this.getWindowHeight()),document.body.appendChild(n.domElement),t.position.z=60,t.position.y=50,new md(t,n.domElement).update(),this.window=window,{scene:e,camera:t,renderer:n}},Md=function(e,t,n){console.log("resize"),e.setSize(t.innerWidth,t.innerHeight-document.getElementById("navbar0").offsetHeight),n.aspect=t.innerWidth/t.innerHeight,n.updateProjectionMatrix();let s=document.getElementById("navbar0");s=s.style.width=t.innerWidth+"px",n.updateProjectionMatrix()},Sd=function(e,t,n,s,o){const a=window.scene;if(t.position.distanceTo(e.position)>n)return!0;const l=new kt().setFromObject(e),c=[l.getCenter(new R),l.min,l.max];for(let h of c){o.subVectors(h,t.position).normalize(),s.set(t.position,o);const u=s.intersectObjects(a.children,!0);if(u.length>0&&u[0].object===e)return!1}return!0};var bi=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return this.None(r)},Out:function(r){return this.None(r)},InOut:function(r){return this.None(r)}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-bi.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?bi.Bounce.In(r*2)*.5:bi.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),Ws=function(){return performance.now()},Uv=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=Ws()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var o=this._tweens[n[s]],a=!t;o&&o.update(e,a)===!1&&!t&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),yl={Linear:function(r,e){var t=r.length-1,n=t*e,s=Math.floor(n),o=yl.Utils.Linear;return e<0?o(r[0],r[1],n):e>1?o(r[t],r[t-1],t-n):o(r[s],r[s+1>t?t:s+1],n-s)},Utils:{Linear:function(r,e,t){return(e-r)*t+r}}},bd=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),vl=new Uv,po=function(){function r(e,t){t===void 0&&(t=vl),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=bi.Linear.None,this._interpolationFunction=yl.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=bd.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=Ws()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var o in this._valuesEnd)s[o]=this._valuesEnd[o];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,n,s,o){for(var a in n){var l=e[a],c=Array.isArray(l),h=c?"array":typeof l,u=!c&&Array.isArray(n[a]);if(!(h==="undefined"||h==="function")){if(u){var d=n[a];if(d.length===0)continue;for(var f=[l],p=0,_=d.length;p<_;p+=1){var x=this._handleRelativeValue(l,d[p]);if(isNaN(x)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(x)}u&&(n[a]=f)}if((h==="object"||c)&&l&&!u){t[a]=c?[]:{};var m=l;for(var g in m)t[a][g]=m[g];s[a]=c?[]:{};var d=n[a];if(!this._isDynamic){var v={};for(var g in d)v[g]=d[g];n[a]=d=v}this._setupProperties(m,t[a],d,s[a],o)}else(typeof t[a]>"u"||o)&&(t[a]=l),c||(t[a]*=1),u?s[a]=n[a].slice().reverse():s[a]=t[a]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(e){return e===void 0&&(e=Ws()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},r.prototype.resume=function(e){return e===void 0&&(e=Ws()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e===void 0&&(e=vl),this._group=e,this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=bi.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=yl.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var n=this,s;if(e===void 0&&(e=Ws()),t===void 0&&(t=!0),this._isPaused)return!0;var o,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var l=e-this._startTime,c=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),h=this._duration+this._repeat*c,u=function(){if(n._duration===0||l>h)return 1;var m=Math.trunc(l/c),g=l-m*c,v=Math.min(g/n._duration,1);return v===0&&l===n._duration?1:v},d=u(),f=this._easingFunction(d);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,d),this._duration===0||l>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((l-this._duration)/c)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(o in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[o]=="string"&&(this._valuesStartRepeat[o]=this._valuesStartRepeat[o]+parseFloat(this._valuesEnd[o])),this._yoyo&&this._swapEndStartRepeatValues(o),this._valuesStart[o]=this._valuesStartRepeat[o];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=c*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,x=this._chainedTweens.length;_<x;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,n,s){for(var o in n)if(t[o]!==void 0){var a=t[o]||0,l=n[o],c=Array.isArray(e[o]),h=Array.isArray(l),u=!c&&h;u?e[o]=this._interpolationFunction(l,s):typeof l=="object"&&l?this._updateProperties(e[o],a,l,s):(l=this._handleRelativeValue(a,l),typeof l=="number"&&(e[o]=a+(l-a)*s))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r}();bd.nextId;var Sn=vl;Sn.getAll.bind(Sn);Sn.removeAll.bind(Sn);Sn.add.bind(Sn);Sn.remove.bind(Sn);var Ov=Sn.update.bind(Sn);const Gn=new Nv;Gn.addButtonToNavbar({textButton:"Règles",onclickFunction:()=>Zv()});Gn.addButtonToNavbar({textButton:"Changer de version",onclickFunction:()=>{It===0?It=1:It=0,pc(),document.getElementById("version").innerHTML=`Version ${It}`}});Gn.addButtonToNavbar({textButton:"-1 crêpe",onclickFunction:()=>wd(-1)});Gn.addButtonToNavbar({textButton:"+1 crêpe",onclickFunction:()=>wd(1)});const dc=Gn.getPermanentModal({title:"Le crêpier psychorigide",position:{top:10,right:0},width:"350px",theme:"light",id:"gameSettingsModal"});dc.AddButtonToModal("Recommencer",()=>Ed());dc.AddButtonToModal("Mélanger",()=>Wv());dc.AddButtonToModal("Résoudre",()=>Xv());let It=0,Fn=0,io=4,Ao=0,fc=0,yn=!1,rn=!1,xi=0;var Zr=0;function ai(r){let e=document.getElementById("safeTimerDisplay");Zr!==0&&(clearInterval(Zr),xi=0),r&&(e.innerHTML="Chrono : 00:00",Zr=setInterval(function(){xi++,xi>600&&clearInterval(Zr),e.innerHTML="Chrono : ",e.innerHTML+=(xi/60<10?"0":"")+Math.floor(xi/60)+":"+(xi%60<10?"0":"")+xi%60},1e3))}let du=new hc,Co,Bn,Ts,As;const Ta=new q(1/0,1/0),pt=new an,Ro=new rc;let Qe=[],re=[],pn=[];const fu=new zt({map:Ro.load("./src/textures/Oakcrepe.png")}),Fv=new sc({color:4800820}),pu=new zt({map:Ro.load("./src/textures/crepetexture.png")}),Bv=new sc({color:15054990}),zv=new zt({map:Ro.load("./src/textures/Oakcrepe_back.png")}),kv=new zt({map:Ro.load("./src/textures/crepetexture_back.png")});let mu=[Fv,fu,fu],gu=[Bv,pu,pu];window.scene=new Fl;window.scene.background=new we("gainsboro");let Hv=new fd("beige",.5);Co=new To("white",1);Co.position.set(1,1,1);window.scene.add(Co);window.scene.add(pt);window.scene.add(Hv);Gn.startLoadingScreen();Gn.removeLoadingScreen();Gn.onResize();Gn.addSimpleSceneWithTable();Ts=new Xu({canvas:document.getElementById("canvas"),antialias:!0});Ts.setPixelRatio(window.devicePixelRatio);Ts.setSize(window.innerWidth,window.innerHeight);Bn=new At(30,innerWidth/innerHeight);Bn.position.set(0,13,10);As=new md(Bn,Ts.domElement);As.minDistance=55;As.enableDamping=!0;As.target.set(0,10,0);As.update();let Vv=new gd;Vv.load("./src/models/white_ceramic_plate/scene.gltf",function(r){r.scene.scale.set(40*r.scene.scale.x,40*r.scene.scale.y,40*r.scene.scale.z),r.scene.position.y=10.5,window.scene.add(r.scene)},void 0,function(r){console.log("erreur",r)});pc();Pd();const Gv=r=>{for(let e=r.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1)),n=r[e];r[e]=r[t],r[t]=n}};function pc(){for(let r=0;r<Qe.length;r++)Qe[r].geometry.dispose(),window.scene.remove(Qe[r]);rn=!1,Fn=0,pt.clear(),pn=[],re=[],Qe=[],It===1&&(mu[2]=zv,gu[2]=kv);for(let r=io-1;r>=0;r--){let e=new bs(5-r/io*3,5-r/io*3,.5),t;r%2===0?t=new rt(e,mu):t=new rt(e,gu),t.position.y=.5*r+10.9,re.push({id:t.id,side:0}),pn.push({id:t.id,y:t.position.y,side:0}),Qe.push(t),window.scene.add(t)}Ao=re[0].id,fc=re[re.length-1].id,ai(!0)}function Wv(){for(Fn=0,yn=!0;pt.children.length;)window.scene.attach(pt.children[0]);Gv(Qe),re=[],pn=[];let r;for(let e=Qe.length-1;e>=0;e--)r=Math.floor(Math.random()*(It+1)),re.push({id:Qe[e].id,side:r}),Qe[e].rotation.set(Math.PI*r,0,0),Qe[e].position.y=.5*e+10.9,pn.push({id:Qe[e].id,y:Qe[e].position.y,side:r});yn=!1,ai(!0)}function Ed(){for(;pt.children.length;)window.scene.attach(pt.children[0]);re=[];let r=Ao;for(let e=0;e<pn.length;e++)re[e]={id:pn[e].id,side:pn[e].side},re[e].id!==r&&(rn=!1),r++;for(let e=0;e<pn.length;e++)for(let t=0;t<Qe.length;t++)pn[e].id===Qe[t].id&&(Qe[t].rotation.set(0,0,0),pn[e].side===1&&(Qe[t].rotation.x+=Math.PI/2*2),Qe[t].position.set(Qe[t].position.x,pn[e].y,Qe[t].position.z));Fn=0,rn=!1,yn=!1,ai(!0)}window.addEventListener("DOMContentLoaded",r=>{document.getElementById("actions_group").addEventListener("click",t=>{t.target.nodeName==="BUTTON"&&ai(!0)})});function wd(r){for(let e=0;e<Qe.length;e++)Qe[e].geometry.dispose(),window.scene.remove(Qe[e]);re=[],Qe=[],Qe.length=0,fc+=r,io+=r,pc()}document.addEventListener("mousedown",r=>{if(r.detail===2&&!yn){Ta.x=r.clientX/window.innerWidth*2-1,Ta.y=-(r.clientY/window.innerHeight)*2+1,du.setFromCamera(Ta,Bn);const e=du.intersectObjects(Qe);if(!(e.length>0&&e[0].object.type==="Mesh"))return;for(;pt.children.length;)window.scene.attach(pt.children[0]);pt.rotation.z=0,pt.position.y=0,yn=!0;let t=e[0].object.position.y;pt.position.y=t,console.log(`intersect ${e[0].object.id}`);let n=re.findIndex(o=>o.id===e[0].object.id),s=0;for(;s<Qe.length;)Qe[s].position.y>=t&&pt.attach(Qe[s]),s++;if(It===1)for(let o=0;o<i+1;o++)console.log(o,i,1-re[o].side),re[o].side=re[o].side===0?1:0;for(let o=0;o<n/2;o++){let a=re[o];re[o]=re[n-o],re[n-o]=a}console.log(re),Cd(pt,300),new po(pt.rotation).to({z:Math.PI},600).onComplete(()=>{Fn++,console.log("flip ",Fn),yn=!1;let o=Ao;rn=!0,console.log("verif",o);for(let a=1;a<re.length;a++)if(re[a].id<=re[a-1].id){console.log(re[a].id,re[a-1].id),rn=!1;break}if(It===1)for(let a=0;a<re.length;a++)re[a].side!==0&&(rn=!1,a=re.length);rn&&Fn!==0&&(rn=!rn,Yv())}).start()}},!1);function Td(){Bn.aspect=window.innerWidth/window.innerHeight,Bn.updateProjectionMatrix(),Ts.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",()=>Td(),!1);window.addEventListener("zoom",()=>Td(),!1);function Ad(r){return new Promise(e=>{setTimeout(e,r)})}function Cd(r,e){new po(r.position).to({y:r.position.y+10},e).easing(bi.Quadratic.Out).chain(new po(r.position).to({y:r.position.y+(r.children.length-1)*.5},e).easing(bi.Quadratic.In)).start()}async function Vs(r){for(;pt.children.length;)window.scene.attach(pt.children[0]);pt.rotation.z=0,pt.position.y=0;let t=window.scene.getObjectById(r).position.y;pt.position.y=t;let n=0;for(;n<Qe.length;)Qe[n].position.y>=t&&pt.attach(Qe[n]),n++;Cd(pt,100),new po(pt.rotation).to({z:Math.PI},200).start(),r=-1,await Ad(600)}async function Rd(r,e){yn=!0;let t=0;for(;t<re.length;){if(re[t].id>=r){r=re[t].id;break}t++}if(t===0&&r===re[t].id&&e===re.length-1){if(It===1)for(let n=0;n<re.length;n++)re[n].side===1&&(rn=!1,n=re.length);if(It===1&&rn||It===0){yn=!1;return}}if(t===0)if(e===re.length-1){if(It===1&&re[0].side===0)re[0].id!==Ao&&(await Vs(re[0].id),re[0].side=1);else{let n=re[0]===1?0:1;re[0]=re[1]===1?0:1,re[1]=n}yn=!1;return}else{It===1&&re[t].side===0&&(await Vs(re[0].id),re[0].side=1);for(let n=0;n<(re.length-e)/2;n++){let s=re[n];re[n]=re[re.length-1-n-e],re[re.length-1-n-e]=s}if(await Vs(re[t].id),It===1)for(let n=0;n<re.length-e;n++)re[n].side=re[n].side===0?1:0}else if(t>0&&re.length-1-e!==t){for(let n=0;n<t/2;n++){let s=re[n];re[n]=re[t-n],re[t-n]=s}if(await Vs(r),It===1)for(let n=0;n<t+1;n++)re[n].side=re[n].side===0?1:0;r+=1,e--}else if(t===re.length-1-e&&It===1&&re[t].side===1){await Vs(re[t].id);for(let n=0;n<(re.length-e)/2;n++){let s=re[n];re[n]=re[re.length-1-n-e],re[re.length-1-n-e]=s,re[n].side=re[n].side===0?1:0,n!==re.length-1-n-e&&(re[re.length-1-n-e].side=re[re.length-1-n-e].side===0?1:0)}r++,e--}e++,r--,await Ad(100),await Rd(r,e)}function Xv(){ai(!1),Fn=0,Rd(fc,0),rn=!1,ai(!0)}function Pd(){Bn.updateMatrixWorld(),As.update(),Ov(),Co.position.copy(Bn.position),Ts.render(window.scene,Bn),requestAnimationFrame(Pd),document.getElementById("flip-count").innerHTML=`Nombre de retournements: ${Fn}`}function qv(){document.getElementById("screenWin").style.display="flex",Ed()}document.getElementById("closescreenWin").addEventListener("click",()=>{document.getElementById("screenWin").style.display="none",ai(!0)});function Yv(){ai(!1),Fn=0,yn=!1,qv()}const Ld=document.getElementById("helpModal"),Kv=document.getElementById("closeHelpModal");function Zv(){Ld.style.display="flex"}Kv.addEventListener("click",()=>{Ld.style.display="none"});export{on as B,Bt as D,an as G,sn as M,Iv as P,rt as a};
