import{I as e,L as t,P as n}from"./index-D8T67StS.js";import{i as r,n as i,r as a,t as o}from"./Triangle-DhN_NCV1.js";var s=t(e(),1),c=n();function l(e){let t=e.replace(`#`,``);return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255]}var u=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,d=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uRingCount;
uniform float uSpokeCount;
uniform float uRingThickness;
uniform float uSpokeThickness;
uniform float uSweepSpeed;
uniform float uSweepWidth;
uniform float uSweepLobes;
uniform vec3 uColor;
uniform vec3 uBgColor;
uniform float uFalloff;
uniform float uBrightness;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform bool uEnableMouse;

#define TAU 6.28318530718
#define PI 3.14159265359

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st = st * 2.0 - 1.0;
  st.x *= uResolution.x / uResolution.y;

  if (uEnableMouse) {
    vec2 mShift = (uMouse * 2.0 - 1.0);
    mShift.x *= uResolution.x / uResolution.y;
    st -= mShift * uMouseInfluence;
  }

  st *= uScale;

  float dist = length(st);
  float theta = atan(st.y, st.x);
  float t = uTime * uSpeed;

  float ringPhase = dist * uRingCount - t;
  float ringDist = abs(fract(ringPhase) - 0.5);
  float ringGlow = 1.0 - smoothstep(0.0, uRingThickness, ringDist);

  float spokeAngle = abs(fract(theta * uSpokeCount / TAU + 0.5) - 0.5) * TAU / uSpokeCount;
  float arcDist = spokeAngle * dist;
  float spokeGlow = (1.0 - smoothstep(0.0, uSpokeThickness, arcDist)) * smoothstep(0.0, 0.1, dist);

  float sweepPhase = t * uSweepSpeed;
  float sweepBeam = pow(max(0.5 * sin(uSweepLobes * theta + sweepPhase) + 0.5, 0.0), uSweepWidth);

  float fade = smoothstep(1.05, 0.85, dist) * pow(max(1.0 - dist, 0.0), uFalloff);

  float intensity = max((ringGlow + spokeGlow + sweepBeam) * fade * uBrightness, 0.0);
  vec3 col = uColor * intensity + uBgColor;

  float alpha = clamp(length(col), 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
}
`;function f({speed:e=1,scale:t=.5,ringCount:n=10,spokeCount:f=10,ringThickness:p=.05,spokeThickness:m=.01,sweepSpeed:h=1,sweepWidth:g=2,sweepLobes:_=1,color:v=`#9f29ff`,backgroundColor:y=`#000000`,falloff:b=2,brightness:x=1,enableMouseInteraction:S=!0,mouseInfluence:C=.1}){let w=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(!w.current)return;let s=w.current,c=new a({alpha:!0,premultipliedAlpha:!1}),T=c.gl;T.clearColor(0,0,0,0);let E,D=[.5,.5],O=[.5,.5];function k(e){let t=T.canvas.getBoundingClientRect();O=[(e.clientX-t.left)/t.width,1-(e.clientY-t.top)/t.height]}function A(){O=[.5,.5]}function j(){c.setSize(s.offsetWidth,s.offsetHeight),E&&(E.uniforms.uResolution.value=[T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height])}window.addEventListener(`resize`,j),j();let M=new o(T);E=new r(T,{vertex:u,fragment:d,uniforms:{uTime:{value:0},uResolution:{value:[T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height]},uSpeed:{value:e},uScale:{value:t},uRingCount:{value:n},uSpokeCount:{value:f},uRingThickness:{value:p},uSpokeThickness:{value:m},uSweepSpeed:{value:h},uSweepWidth:{value:g},uSweepLobes:{value:_},uColor:{value:l(v)},uBgColor:{value:l(y)},uFalloff:{value:b},uBrightness:{value:x},uMouse:{value:new Float32Array([.5,.5])},uMouseInfluence:{value:C},uEnableMouse:{value:S}}});let N=new i(T,{geometry:M,program:E});s.appendChild(T.canvas),S&&(T.canvas.addEventListener(`mousemove`,k),T.canvas.addEventListener(`mouseleave`,A));let P;function F(e){P=requestAnimationFrame(F),E.uniforms.uTime.value=e*.001,S?(D[0]+=.05*(O[0]-D[0]),D[1]+=.05*(O[1]-D[1]),E.uniforms.uMouse.value[0]=D[0],E.uniforms.uMouse.value[1]=D[1]):(E.uniforms.uMouse.value[0]=.5,E.uniforms.uMouse.value[1]=.5),c.render({scene:N})}return P=requestAnimationFrame(F),()=>{cancelAnimationFrame(P),window.removeEventListener(`resize`,j),S&&(T.canvas.removeEventListener(`mousemove`,k),T.canvas.removeEventListener(`mouseleave`,A)),s.removeChild(T.canvas),T.getExtension(`WEBGL_lose_context`)?.loseContext()}},[e,t,n,f,p,m,h,g,_,v,y,b,x,S,C]),(0,c.jsx)(`div`,{ref:w,className:`w-full h-full`})}var p=[{title:`Chess Game`,image:`/portofolio/assets/catur-CiFFpzLR.webp`,desc:`An interactive web-based chess game with official rules, move validation, a turn system, and a modern responsive interface.`,tech:[`HTML`,`CSS`,`JavaScript`],link:`https://wahdanda.github.io/catur/catur.html`},{title:`Digital Invitation`,image:`/portofolio/assets/undangan-fF1Iqhed.webp`,desc:`Modern Digital Invitation Website with elegant design, smooth animation, background music, countdown, gallery and RSVP.`,tech:[`HTML`,`CSS`,`JavaScript`],link:`https://wahdanda.github.io/gabungan-code-undangan/gabungan.html`},{title:`Savings Tracker`,image:`/portofolio/assets/savings-C2h2g0yF.webp`,desc:`Manage your income and expenses easily, monitor your balance, and build better financial habits every day.`,tech:[`React`,`Tailwind`],link:`https://wahdanda.github.io/Buku-Tabungan/`},{title:`Elektra Tama`,image:`/portofolio/assets/electra-tama-DOsZBSDG.webp`,desc:`Modern technology ecommerce landing page with responsive design.`,tech:[`HTML`,`Tailwind`,`JavaScript`],link:`https://wahdanda.github.io/slicing-web/`}];function m(){return(0,c.jsxs)(`section`,{id:`Project`,className:`relative overflow-hidden bg-black py-20`,children:[(0,c.jsx)(`div`,{className:`absolute inset-0 z-0 pointer-events-none`,children:(0,c.jsx)(f,{speed:1,scale:.5,ringCount:10,spokeCount:10,ringThickness:.05,spokeThickness:.01,sweepSpeed:1,sweepWidth:2,sweepLobes:1,color:`#ffffff`,backgroundColor:`#000000`,brightness:1,enableMouseInteraction:!1})}),(0,c.jsxs)(`div`,{className:`relative z-10`,children:[(0,c.jsxs)(`div`,{className:`text-center mb-16`,children:[(0,c.jsx)(`p`,{className:`uppercase tracking-[5px] text-emerald-500 font-semibold`,children:`Projects`}),(0,c.jsx)(`h2`,{className:`text-5xl font-bold text-white mt-2`,children:`Featured Projects`})]}),(0,c.jsx)(`div`,{className:`overflow-hidden group h-225 md:h-auto`,children:(0,c.jsx)(`div`,{className:`flex flex-col md:flex-row gap-8 w-max md:w-max animate-project`,children:[...p,...p].map((e,t)=>(0,c.jsxs)(`a`,{href:e.link,target:`_blank`,rel:`noopener noreferrer`,className:`\r
                    w-90\r
                    rounded-3xl\r
                    overflow-hidden\r
                    border\r
                    border-white/10\r
                    bg-[#111827]/90\r
                    backdrop-blur-md\r
                    shadow-xl\r
                    transition\r
                    duration-300\r
                    hover:-translate-y-3\r
                    hover:border-emerald-400\r
                    hover:shadow-cyan-500/30\r
                    shrink-0\r
                    `,children:[(0,c.jsx)(`div`,{className:`h-52 overflow-hidden`,children:(0,c.jsx)(`img`,{src:e.image,alt:e.title,loading:`lazy`,className:`w-full h-full object-cover transition duration-500 hover:scale-110`})}),(0,c.jsxs)(`div`,{className:`p-6 h-72 flex flex-col`,children:[(0,c.jsx)(`h3`,{className:`text-2xl font-bold text-white`,children:e.title}),(0,c.jsx)(`p`,{className:`mt-4 text-gray-300 flex-1 leading-7`,children:e.desc}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-5`,children:e.tech.map(e=>(0,c.jsx)(`span`,{className:`\r
                            px-3\r
                            py-1\r
                            rounded-full\r
                            bg-cyan-500/10\r
                            border\r
                            border-emerald-500/30\r
                            text-emerald-300\r
                            text-xs\r
                            `,children:e},e))})]})]},t))})})]})]})}var h=(0,s.memo)(m);export{h as default};