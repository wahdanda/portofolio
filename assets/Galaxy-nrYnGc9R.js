import{I as e,L as t,P as n}from"./index-ogM3Be0P.js";import{i as r,n as i,r as a,t as o}from"./Triangle-DhN_NCV1.js";var s={black:`#000000`,white:`#ffffff`,red:`#ff0000`,green:`#00ff00`,blue:`#0000ff`,fuchsia:`#ff00ff`,cyan:`#00ffff`,yellow:`#ffff00`,orange:`#ff8000`};function c(e){e.length===4&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function l(e){return e=parseInt(e),[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function u(e){return e===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(e)?e[0]===`#`?c(e):s[e.toLowerCase()]?c(s[e.toLowerCase()]):(console.warn(`Color format not recognised`),[0,0,0]):l(e)}var d=class extends Array{constructor(e){return super(...Array.isArray(e)?e:u(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(u(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}},f=t(e(),1),p=n(),m=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,h=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;

varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}

void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;function g({focal:e=[.5,.5],rotation:t=[1,0],starSpeed:n=.5,density:s=1,hueShift:c=140,disableAnimation:l=!1,speed:u=1,mouseInteraction:g=!0,glowIntensity:_=.3,saturation:v=0,mouseRepulsion:y=!0,repulsionStrength:b=2,twinkleIntensity:x=.3,rotationSpeed:S=.1,autoCenterRepulsion:C=0,transparent:w=!0,...T}){let E=(0,f.useRef)(null),D=(0,f.useRef)({x:.5,y:.5}),O=(0,f.useRef)({x:.5,y:.5}),k=(0,f.useRef)(0),A=(0,f.useRef)(0);return(0,f.useEffect)(()=>{if(!E.current)return;let f=E.current,p=new a({alpha:w,premultipliedAlpha:!1}),T=p.gl;w?(T.enable(T.BLEND),T.blendFunc(T.SRC_ALPHA,T.ONE_MINUS_SRC_ALPHA),T.clearColor(0,0,0,0)):T.clearColor(0,0,0,1);let j;function M(){p.setSize(f.offsetWidth*1,f.offsetHeight*1),j&&(j.uniforms.uResolution.value=new d(T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height))}window.addEventListener(`resize`,M,!1),M();let N=new o(T);j=new r(T,{vertex:m,fragment:h,uniforms:{uTime:{value:0},uResolution:{value:new d(T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height)},uFocal:{value:new Float32Array(e)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:n},uDensity:{value:s},uHueShift:{value:c},uSpeed:{value:u},uMouse:{value:new Float32Array([O.current.x,O.current.y])},uGlowIntensity:{value:_},uSaturation:{value:v},uMouseRepulsion:{value:y},uTwinkleIntensity:{value:x},uRotationSpeed:{value:S},uRepulsionStrength:{value:b},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:C},uTransparent:{value:w}}});let P=new i(T,{geometry:N,program:j}),F;function I(e){F=requestAnimationFrame(I),l||(j.uniforms.uTime.value=e*.001,j.uniforms.uStarSpeed.value=e*.001*n/10);let t=.05;O.current.x+=(D.current.x-O.current.x)*t,O.current.y+=(D.current.y-O.current.y)*t,A.current+=(k.current-A.current)*t,j.uniforms.uMouse.value[0]=O.current.x,j.uniforms.uMouse.value[1]=O.current.y,j.uniforms.uMouseActiveFactor.value=A.current,p.render({scene:P})}F=requestAnimationFrame(I),f.appendChild(T.canvas);function L(e){let t=f.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=1-(e.clientY-t.top)/t.height;D.current={x:n,y:r},k.current=1}function R(){k.current=0}return g&&(f.addEventListener(`mousemove`,L),f.addEventListener(`mouseleave`,R)),()=>{cancelAnimationFrame(F),window.removeEventListener(`resize`,M),g&&(f.removeEventListener(`mousemove`,L),f.removeEventListener(`mouseleave`,R)),f.removeChild(T.canvas),T.getExtension(`WEBGL_lose_context`)?.loseContext()}},[e,t,n,s,c,l,u,g,_,v,y,x,S,b,C,w]),(0,p.jsx)(`div`,{ref:E,className:`w-full h-full relative`,...T})}export{g as default};