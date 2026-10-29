/* CHỦ ĐỀ MẪU. Làm chủ đề mới: copy file này thành animals.js, sửa nội dung, rồi thêm vào list.js.
 items: 6-8 từ. w = từ, e = emoji, img (tùy chọn) = đường dẫn hình, tính từ thư mục games, vd "topics/animals/cat.png"
 act (tùy chọn) = câu cô nói/diễn ở flashcard, không dùng dấu nháy đơn '
 groups = 2 rổ cho game phân loại: [tên rổ, [các từ thuộc rổ]] */
const TOPIC={name:"Feelings",
items:[
{w:"happy",e:"😀",act:"Smile big!"},{w:"sad",e:"😢",act:"Make a sad face."},
{w:"angry",e:"😠",act:"Stomp your feet!"},{w:"tired",e:"😴",act:"Yawn. I am tired."},
{w:"scared",e:"😱",act:"Hide your face!"},{w:"hungry",e:"🍔",act:"Rub your tummy."},
{w:"excited",e:"🤩",act:"Jump up and down!"},{w:"sick",e:"🤒",act:"Hold your head."}],
groups:[["Feel good 😀",["happy","excited"]],["Feel bad 😢",["sad","angry","scared","sick"]]]};
