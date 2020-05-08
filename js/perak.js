
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  



  document.getElementById("dafaprasetya").innerText = time;
  document.getElementById("dafaprasetya").textContent = time;
}

setInterval(showTime, 1000);
showTime();

function ingat(){
  date = new Date();
  jam = date.getHours()
  waktu = "malam cintaqu"

  if(jam == 0){
    waktu = "Tidur udah malam"
  }
  if(jam > 3){
    waktu = "SAHOOOOOOOR"
  }
  if(jam > 4){
    waktu = "salat subuh"
  }
  if(jam > 6){
    waktu = "PAGI CANTIQ"
  }
  if(jam > 8){
    waktu = "jangan lupa mandi"
  }
  if(jam > 9){
    waktu = "menjelang siang cintaqu"
  }
  if(jam > 11){
    waktu = "SIANG sayang"
  }
  if(jam > 15){
    waktu = "SEKARANG MENJELANG SORE YA?"
  }
  if(jam > 16){
    waktu = "SOREEE SAYANG"
  }
  if(jam > 17){
    waktu = "SOREE"
  }
  if(jam > 18){
    waktu = "MAGRIBB?"
  }
  if(jam > 19){
    waktu = "MALAM CINTUUU"
  }
  if(jam > 22){
    waktu = "BELUM TIDUR?, PASTI LAGI MIKIIRIN AKU"
  }


  var oon = waktu
  document.getElementById("pengingat").innerText = oon
  document.getElementById("pengingat").textContent = oon
}

ingat();

var dafa = "follow IG : dafa_prstya"
document.getElementById("mtk").innerHTML = dafa

const quotes = [
  {
    "quote": "MAU BUKEBER GAK?",
    "source": "ALUMNI 9B"
  },
  {
    "quote": "Mau kumpul gak?",
    "source": "Alumni 9B"
  },
  {
    "quote": "Mau maen gak?",
    "source": "Alumni 9b"
  },
  {
    "quote": "ayolah...",
    "source": "Alumni 9b"
  },
  {
    "quote": "Code gw cari sendiri no copas",
    "source": "dafa"
  },
]

function randomQuote(){
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `"${random.quote}"`;
  source.innerText = random.source;
}

setInterval(randomQuote, 2000);
