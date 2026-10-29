/* ===== ENGINE ===== */
const $=s=>document.querySelector(s),P=LESSON.pages;let i=0,stars=0,cur="";
const shuffle=a=>{a=[...a];for(let k=a.length-1;k>0;k--){const j=Math.random()*(k+1)|0;[a[k],a[j]]=[a[j],a[k]]}return a};
const U=s=>/^(https?:|data:)/.test(s)?s:BASE+s;
const E=(p,h=150)=>p.img?`<img src="${U(p.img)}" alt="" style="height:${h}px;max-width:100%;object-fit:contain;border-radius:18px" onerror="this.outerHTML='${p.e||""}'">`:(p.e||"");
let sel=null,T=[0,0,0];const TN=["Red","Blue","Green"],TC=["#ef476f","#3a86ff","#27a05a"];
function mt(b,s){const o=sel;if(!o||o.s===s){if(o)o.b.classList.remove("sel");sel={b,s};b.classList.add("sel");if(s==="L")say(b.dataset.w);return}
 sel=null;o.b.classList.remove("sel");
 if(o.b.dataset.w===b.dataset.w){[o.b,b].forEach(x=>{x.classList.add("ok");x.disabled=true});say(b.dataset.w);if(!document.querySelector(".chip:not(.ok)"))win()}
 else[o.b,b].forEach(x=>{x.classList.add("no");setTimeout(()=>x.classList.remove("no"),400)})}
function tk(b){const w=b.parentNode;if(w.dataset.d)return;w.dataset.d=1;b.classList.add(b.dataset.ok?"ok":"no");w.querySelector("[data-ok]").classList.add("ok");if(b.dataset.ok)say("Great!")}
function tp(k){T[k]++;document.getElementById("ts"+k).textContent=T[k]}
function say(t,src){if(src){new Audio(U(src)).play().catch(()=>{});return}
 if(!window.speechSynthesis)return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=.85;speechSynthesis.speak(u)}
function win(m){stars++;$("#stars").textContent="⭐ "+stars;$("#fb").textContent="🎉 "+(m||"Great job!");say("Great job!")}
const R={
match:p=>`<span class="tag">Game · Match</span><h2>Nối từ với hình</h2><div style="display:flex;gap:24px;justify-content:center"><div class="chips" style="flex-direction:column">${shuffle(p.items).map(x=>`<button class="chip" data-w="${x.w}" onclick="mt(this,'L')">${x.w}</button>`).join("")}</div><div class="chips" style="flex-direction:column">${shuffle(p.items).map(x=>`<button class="chip" data-w="${x.w}" onclick="mt(this,'R')">${E(x,56)}</button>`).join("")}</div></div>`,
team:p=>`<span class="tag">Team Quiz</span><div class="emo" style="font-size:clamp(60px,12vw,110px)">${E(p,110)}</div><h2>${p.q}</h2><div class="opts">${p.o.map((o,k)=>`<button ${k===p.a?"data-ok=1":""} onclick="tk(this)">${o}</button>`).join("")}</div><div class="chips">${TN.map((n,k)=>`<button style="background:${TC[k]}" onclick="tp(${k})">${n} +1 (<span id="ts${k}">${T[k]}</span>)</button>`).join("")}</div>`,
teams:()=>`<span class="tag">Team Result</span><h2>🏆 Scoreboard</h2>${TN.map((n,k)=>`<h2 style="color:${TC[k]}">${n}: ${T[k]} ⭐</h2>`).join("")}<button onclick="T=[0,0,0];render()">Reset</button>`,
video:p=>`<span class="tag">Video</span><h2>${p.title||""}</h2>${p.yt?`<iframe src="https://www.youtube-nocookie.com/embed/${p.yt}" allowfullscreen allow="autoplay;encrypted-media;picture-in-picture" style="width:100%;aspect-ratio:16/9;border:0;border-radius:18px"></iframe>`:`<video controls playsinline src="${U(p.src)}" style="width:100%;max-height:62vh;border-radius:18px"></video>`}`,
info:p=>`<span class="tag">${p.tag}</span><div class="emo" style="font-size:clamp(70px,14vw,140px)">${p.e||""}</div><h2>${p.big}</h2><div class="sub">${p.sub||""}</div>`,
title:p=>`<span class="tag">TESOL · Lesson</span><h1>${p.big}</h1><div class="sub">${p.sub}</div><p class="sub">${p.goal}</p>`,
warm:p=>`<span class="tag">Warm-up</span><div class="emo">${E(p)}</div><h2>${p.say}</h2><div class="sub">${p.q}</div>`,
vocab:p=>`<span class="tag">Vocabulary</span><div class="emo" onclick="say('${p.w}')">${E(p)}</div><div class="word">${p.w}</div><h2 onclick="say('${p.s}')" style="cursor:pointer">${p.s} 🔊</h2><div class="sub">Cô đọc – cả lớp đọc theo 3 lần</div>`,
song:p=>`<span class="tag">Song</span><h2>${p.title}</h2><div id="ly">${p.lines.map(l=>`<div class="lyric">${l}</div>`).join("")}</div><button id="pl" onclick="sing()">▶ Hát</button>`,
mcq:p=>`<span class="tag">Game · Choose</span><div class="emo" style="font-size:clamp(70px,14vw,140px)">${E(p)}</div><h2>${p.q}</h2><div class="opts">${p.o.map((o,k)=>`<button onclick="pick(this,${k===p.a})">${o}</button>`).join("")}</div>`,
fill:p=>{const L=[...p.w],m=p.miss,bank=shuffle([...m.map(k=>L[k]),..."aeiouslt".split("").filter(c=>!m.map(k=>L[k]).includes(c)).slice(0,2)]);
 return `<span class="tag">Game · Missing letters</span><div class="emo" style="font-size:clamp(70px,14vw,140px)">${E(p)}</div><div class="chips" id="wd">${L.map((c,k)=>m.includes(k)?`<button class="chip slot" data-k="${k}">_</button>`:`<button class="chip">${c}</button>`).join("")}</div><div class="chips">${bank.map(c=>`<button class="chip" onclick="letter(this,'${c}')">${c}</button>`).join("")}</div>`},
order:p=>`<span class="tag">Game · Put in order</span><div class="emo" style="font-size:clamp(60px,12vw,120px)">${E(p)}</div><div class="chips" id="ans"></div><div class="chips" id="pool">${shuffle(p.w.map((w,k)=>[w,k])).map(([w,k])=>`<button class="chip" data-k="${k}" onclick="move(this)">${w}</button>`).join("")}</div>`,
review:()=>{const v=P.filter(x=>x.t==="vocab");return `<span class="tag">Review</span><h2>Ôn tập: bấm để nghe</h2><div class="grid">${v.map(x=>`<div onclick="say('${x.w}')"><span>${E(x,64)}</span>${x.w}</div>`).join("")}</div><p class="sub">Điểm của lớp: ⭐ ${stars}</p>`}};
function render(){sel=null;const p=P[i];cur=p.say||p.w||(p.s)||"";$("#stage").innerHTML=`<div class="card">${R[p.t](p)}<div id="fb"></div></div>`;
 $("#fill").style.width=(i+1)/P.length*100+"%";$("#pg").textContent=(i+1)+"/"+P.length;$("#toc").value=i;
 if(p.t==="vocab"||p.auto)say(p.say||p.w,p.audio)}
function pick(b,ok){if(b.classList.contains("ok"))return;b.classList.add(ok?"ok":"no");ok?win():say("Try again")}
function letter(b,c){const s=[...document.querySelectorAll(".slot")].find(x=>x.textContent==="_");if(!s)return;
 if(P[i].w[s.dataset.k]===c){s.textContent=c;s.classList.remove("slot");b.disabled=true;if(!document.querySelector(".slot")){win();say(P[i].w)}}else{b.classList.add("no");setTimeout(()=>b.classList.remove("no"),400)}}
function move(b){const a=$("#ans"),pool=$("#pool");(b.parentNode===pool?a:pool).appendChild(b);
 if(!pool.children.length){const ok=[...a.children].every((c,k)=>+c.dataset.k===k);ok?(win(),say(P[i].w.join(" "))):($("#fb").textContent="Thử lại nhé! 💪")}}
function sing(){const L=[...document.querySelectorAll(".lyric")],p=P[i];if(p.audio){say("",p.audio)}let k=0;
 (function nx(){L.forEach((l,j)=>l.classList.toggle("on",j===k));if(k<L.length){if(!p.audio){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(L[k].textContent);u.lang="en-US";u.rate=.8;u.onend=()=>{k++;nx()};speechSynthesis.speak(u)}else{k++;setTimeout(nx,2500)}}})()}
const go=d=>{i=Math.max(0,Math.min(P.length-1,i+d));render()};
$("#ttl").textContent=LESSON.title;$("#toc").innerHTML=P.map((p,k)=>`<option value="${k}">${k+1}. ${p.tag||p.t}${p.w?" – "+(Array.isArray(p.w)?p.w.join(" "):p.w):""}</option>`).join("");
$("#toc").onchange=e=>{i=+e.target.value;render()};$("#prev").onclick=()=>go(-1);$("#next").onclick=()=>go(1);$("#speak").onclick=()=>say(cur,P[i].audio);
addEventListener("keydown",e=>{if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)});render();

document.title=LESSON.title;
