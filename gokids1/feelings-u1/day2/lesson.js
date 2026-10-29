
/* ===== DỮ LIỆU BÀI HỌC: chỉ sửa phần này khi làm bài mới =====
 t: loại trang. Thêm audio:"link.mp3" vào bất kỳ trang nào để dùng file thu sẵn; không có thì dùng giọng trình duyệt. */
/* >>> ĐỔI CHỦ ĐỀ: sửa BASE và danh sách V = [từ, emoji, "ten-hinh.png" (tùy chọn)] */
const BASE="";
const V=[["happy","😀"],["sad","😢"],["angry","😠"],["tired","😴"],["scared","😱"],["hungry","🍔"],["thirsty","🥤"],["sick","🤒"],["excited","🤩"],["surprised","😲"]],n=V.length;
const ins=(a,x,k)=>{a.splice(k%3,0,x);return k%3};
const pro=k=>[["I","am"],["She","is"],["He","is"]][k%3];
const it=a=>({w:a[0],e:a[1],img:a[2]});
const sec=(tag,big,sub,e)=>({t:"info",tag,big,sub,e,say:big});
/* >>> ĐỔI CHỦ ĐỀ: sửa chữ trong các trang info/warm/song bên dưới; câu mẫu nằm ở s:`I am ${w}.` và pro(k) */
const LESSON={title:"Unit 1 · Feelings",pages:[
{t:"title",big:"How do you feel?",sub:"Unit 1 · Lesson 2 · Feelings",goal:"Mục tiêu: nói được “I am happy/sad…” và hỏi “How do you feel?”",say:"How do you feel?"},
{t:"info",tag:"Goals",e:"🎯",big:"Today I can…",sub:"Nói 10 từ cảm xúc · Hỏi “How do you feel?” · Trả lời “I am …”",say:"Today I can say how I feel."},
{t:"warm",say:"Hello! How are you today?",e:"👋",q:"Warm-up: Chào cả lớp, hỏi từng bạn “How are you?”"},
{t:"info",tag:"Pattern",e:"🗣️",big:"How do you feel? – I am ___.",sub:"She is ___. · He is ___.",say:"How do you feel? I am happy."},
sec("Part 1 · Presentation","New words","Học 10 từ về cảm xúc: cô đọc, cả lớp đọc theo","📖"),
...V.map(([w,e,g])=>({t:"vocab",w,e,img:g,s:`I am ${w}.`})),
sec("Part 2 · Song","Sing together!","Hát và làm động tác theo lời bài hát","🎵"),
{t:"song",title:"Hello Chant: How do you feel?",lines:["Hello, hello! How do you feel?","I am happy! I am happy!","Hello, hello! How do you feel?","I am sad. I am sad."],audio:""},
{t:"song",title:"If You’re Happy (hát cùng cô)",lines:["If you’re happy and you know it,","clap your hands!","If you’re happy and you know it,","stomp your feet!"],audio:""},
sec("Part 3 · Practice","Game time!","Nối từ · Nhìn hình chọn từ · Nghe chọn hình · Điền chữ · Sắp xếp câu","🎮"),
{t:"match",items:V.slice(0,5).map(it)},{t:"match",items:V.slice(5).map(it)},
...V.map(([w,e,g],k)=>{const o=[V[(k+3)%n][0],V[(k+6)%n][0]],a=ins(o,w,k);return{t:"mcq",q:"How does he feel?",e,img:g,o,a}}),
...V.map(([w,e],k)=>{const o=[V[(k+4)%n][1],V[(k+7)%n][1]],a=ins(o,e,k+1);return{t:"mcq",auto:1,say:w,q:"🔊 Listen and choose",e:"🎧",o,a}}),
...V.map(([w,e,g])=>({t:"fill",w,e,img:g,miss:w.length<4?[1]:[1,w.length-2]})),
...V.map(([w,e,g],k)=>{const[p,b]=pro(k);return{t:"order",e,img:g,w:[p,b,w,"."],say:`${p} ${b} ${w}.`}}),
sec("Part 4 · Production","Let’s talk!","Làm việc theo cặp, nhóm và cả lớp","🗨️"),
{t:"info",tag:"Pair work",e:"🧑‍🤝‍🧑",big:"Ask your partner",sub:"A: How do you feel? · B: I am ___. · Đổi vai!",say:"How do you feel? I am happy."},
{t:"info",tag:"Mime game",e:"🎭",big:"Act it out!",sub:"Một bạn diễn cảm xúc, cả lớp đoán: “Are you …?”",say:"Are you happy?"},
{t:"info",tag:"Class survey",e:"📋",big:"Who is tired today?",sub:"Hỏi 5 bạn và ghi lại: How do you feel?",say:"Who is tired today?"},
{t:"info",tag:"Chain drill",e:"🔗",big:"Pass it on",sub:"Mỗi bạn hỏi bạn kế bên, cả lớp nối tiếp thành vòng",say:"How do you feel?"},
sec("Part 5 · Team Quiz","Team quiz!","Chia lớp 3 đội · Đội trả lời đúng được +1","🏆"),
...V.map(([w,e,g],k)=>{const o=[V[(k+2)%n][0],V[(k+5)%n][0]],a=ins(o,w,k+2);const[p,b]=pro(k);return{t:"team",q:`${p} ${b} ______ .`,e,img:g,o,a}}),
{t:"teams"},
{t:"review"},
{t:"info",tag:"Goodbye",e:"👋",big:"Great job! Bye-bye!",sub:"Về nhà: nói “How do you feel?” với người thân 3 lần",say:"Great job! Goodbye!"}
/* Thêm video: {t:"video",title:"Feelings video",yt:"ID_YOUTUBE"} hoặc {t:"video",title:"...",src:"video.mp4"} */
]};
