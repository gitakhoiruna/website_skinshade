
(() => {
 const menuToggle = document.querySelector('.menu-toggle');
 const nav = document.querySelector('.nav-links');
 if (menuToggle && nav) menuToggle.addEventListener('click', () => {
   const open = nav.classList.toggle('open');
   menuToggle.setAttribute('aria-expanded', String(open));
 });

 const questionData = [
  {q:'Bagaimana kondisi kulitmu sekitar 30–60 menit setelah mencuci wajah tanpa memakai produk?',hint:'Pilih kondisi yang paling sering kamu rasakan.',a:[
   {t:'Terasa nyaman, tidak terlalu berminyak atau kering',s:'normal'},
   {t:'Tampak mengilap di hampir seluruh wajah',s:'berminyak'},
   {t:'Terasa kencang, kasar, atau ada bagian yang mengelupas',s:'kering'},
   {t:'Dahi, hidung, dan dagu berminyak, tetapi pipi normal atau kering',s:'kombinasi'},
   {t:'Mudah merah, perih, gatal, atau terasa panas',s:'sensitif'}]},
  {q:'Bagaimana kondisi minyak pada wajahmu menjelang siang atau sore?',hint:'Ingat kondisi kulitmu pada hari biasa, bukan setelah olahraga.',a:[
   {t:'Sedikit minyak saja dan wajah tetap terasa nyaman',s:'normal'},
   {t:'Minyak terlihat di sebagian besar area wajah',s:'berminyak'},
   {t:'Hampir tidak berminyak dan kulit terasa kering atau tertarik',s:'kering'},
   {t:'Minyak terutama muncul di dahi, hidung, dan dagu',s:'kombinasi'},
   {t:'Kulit terasa tidak nyaman atau mudah bereaksi',s:'sensitif'}]},
  {q:'Bagaimana tampilan pori-pori dan tekstur kulitmu?',hint:'Perhatikan area pipi, hidung, dan dahi dengan cahaya yang cukup.',a:[
   {t:'Pori-pori tidak terlalu terlihat dan tekstur relatif merata',s:'normal'},
   {t:'Pori-pori terlihat jelas, terutama di hidung dan pipi',s:'berminyak'},
   {t:'Tekstur terasa kasar, kusam, atau ada sisik halus',s:'kering'},
   {t:'Pori-pori lebih terlihat di zona T, tetapi area pipi lebih normal/kering',s:'kombinasi'},
   {t:'Kulit mudah memerah atau terasa perih saat terkena gesekan/produk',s:'sensitif'}]},
  {q:'Apa yang paling sering kamu alami setelah menggunakan produk perawatan atau terkena perubahan cuaca?',hint:'Pilih respons yang paling sering terjadi.',a:[
   {t:'Biasanya tetap nyaman dan jarang mengalami masalah',s:'normal'},
   {t:'Wajah cepat berminyak atau muncul komedo',s:'berminyak'},
   {t:'Kulit terasa kering, tertarik, atau mengelupas',s:'kering'},
   {t:'Sebagian area berminyak, sedangkan bagian lain terasa kering',s:'kombinasi'},
   {t:'Mudah gatal, perih, kemerahan, atau terasa panas',s:'sensitif'}]},
  {q:'Jika harus memilih, kondisi mana yang paling menggambarkan kulitmu secara keseluruhan?',hint:'Pertanyaan ini membantu menentukan hasil utama. Kulit sensitif juga dapat bersamaan dengan jenis kulit lain.',a:[
   {t:'Seimbang dan relatif jarang bermasalah',s:'normal'},
   {t:'Cepat mengilap di hampir seluruh wajah',s:'berminyak'},
   {t:'Sering terasa kencang dan kurang lembap',s:'kering'},
   {t:'Zona T berminyak, pipi normal atau kering',s:'kombinasi'},
   {t:'Sangat mudah bereaksi terhadap produk atau lingkungan',s:'sensitif'}]}
 ];
 const typeDetails = {
  normal:{name:'Kulit Normal',desc:'Kulit normal cenderung memiliki keseimbangan air dan minyak yang baik. Wajah biasanya terasa nyaman, tidak terlalu berminyak atau kering, dan pori-pori tidak terlalu terlihat.',ingredients:['Hyaluronic acid','Vitamin C','Ceramide'],care:['Gunakan pembersih wajah yang lembut.','Pakai pelembap untuk menjaga kelembapan kulit.','Gunakan tabir surya SPF minimal 30 setiap pagi.','Tambahkan serum sesuai kebutuhan; tidak perlu memakai banyak bahan aktif sekaligus.'],routine:'Pagi: pembersih lembut, pelembap, tabir surya. Malam: bersihkan wajah, pelembap, dan bahan tambahan bila diperlukan.'},
  berminyak:{name:'Kulit Berminyak',desc:'Kulit berminyak menghasilkan sebum lebih banyak sehingga wajah mudah mengilap dan pori-pori tampak lebih jelas. Minyak berlebih juga dapat berkontribusi pada komedo atau jerawat, tetapi kulit tetap membutuhkan hidrasi.',ingredients:['Niacinamide','Salicylic acid (BHA)','Hyaluronic acid'],care:['Pilih tekstur gel atau lotion ringan yang terasa nyaman.','Tetap gunakan pelembap; cari tekstur ringan dan non-comedogenic.','Bila menggunakan BHA, mulai perlahan dan hentikan jika iritasi.','Hindari mencuci wajah berlebihan atau menggosok terlalu keras.','Gunakan tabir surya setiap pagi.'],routine:'Pagi: pembersih lembut, pelembap ringan, tabir surya. Malam: bersihkan wajah, pelembap; bahan seperti BHA hanya ditambahkan bertahap sesuai toleransi.'},
  kering:{name:'Kulit Kering',desc:'Kulit kering cenderung menghasilkan lebih sedikit sebum. Kulit bisa terasa kencang, kasar, kusam, atau mengelupas karena kelembapan mudah hilang.',ingredients:['Hyaluronic acid','Ceramide','Glycerin','Panthenol'],care:['Gunakan pembersih lembut dan hindari air yang terlalu panas.','Pilih pelembap krim yang membantu menjaga kelembapan.','Aplikasikan pelembap saat kulit masih sedikit lembap.','Hindari produk yang membuat kulit makin kering atau terasa perih.','Gunakan tabir surya setiap pagi.'],routine:'Pagi: pembersih lembut, pelembap krim, tabir surya. Malam: pembersih lembut, bahan hidrasi, dan pelembap yang lebih kaya bila diperlukan.'},
  kombinasi:{name:'Kulit Kombinasi',desc:'Kulit kombinasi memiliki zona T (dahi, hidung, dagu) yang lebih berminyak, sementara pipi cenderung normal atau kering. Karena itu, kebutuhan tiap area dapat berbeda.',ingredients:['Niacinamide','Hyaluronic acid','Ceramide'],care:['Mulai dengan pembersih dan pelembap ringan yang nyaman di seluruh wajah.','Tambahkan hidrasi pada pipi jika terasa kering.','Bahan pengontrol minyak bisa difokuskan pada zona T bila dibutuhkan.','Jangan membuat area kering semakin kering dengan eksfoliasi berlebihan.','Gunakan tabir surya setiap pagi.'],routine:'Pagi: pembersih, pelembap ringan, tabir surya. Malam: bersihkan wajah, beri hidrasi, lalu sesuaikan pelembap di zona yang terasa kering.'},
  sensitif:{name:'Kulit Sensitif',desc:'Kulit sensitif mudah bereaksi terhadap bahan atau kondisi lingkungan, misalnya terasa perih, gatal, panas, atau kemerahan. Sensitivitas dapat muncul bersamaan dengan kulit kering, berminyak, atau kombinasi.',ingredients:['Ceramide','Panthenol','Centella asiatica (cica)','Hyaluronic acid'],care:['Utamakan rutinitas sederhana dan produk tanpa pewangi jika cocok.','Perkenalkan produk baru satu per satu dan lakukan uji tempel.','Hindari bahan yang pernah memicu reaksi pada kulitmu.','Hentikan produk yang menyebabkan reaksi.','Jika reaksi berat atau berulang, konsultasikan dengan dokter kulit.'],routine:'Pagi: pembersih lembut, pelembap sederhana, tabir surya yang cocok. Malam: pembersih lembut dan pelembap penenang. Hindari mencoba banyak bahan aktif sekaligus.'}
 };
 const quiz = document.querySelector('[data-quiz]');
 if (quiz) {
  let index = 0;
  const answers = Array(questionData.length).fill(null);
  const area = document.getElementById('question-area');
  const count = document.getElementById('question-count');
  const percent = document.getElementById('progress-percent');
  const fill = document.getElementById('progress-fill');
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const error = document.getElementById('quiz-error');
  function render(){
   const item = questionData[index];
   count.textContent = `Pertanyaan ${index+1} dari ${questionData.length}`;
   const p = Math.round(((index+1)/questionData.length)*100);
   percent.textContent = `${p}%`; fill.style.width = `${p}%`;
   area.innerHTML = `<h2 class="quiz-question">${item.q}</h2><p class="quiz-hint">${item.hint}</p><div class="answer-list">${item.a.map((a,i)=>`<label class="answer-option ${answers[index]===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${answers[index]===i?'checked':''}><span>${a.t}</span></label>`).join('')}</div>`;
   area.querySelectorAll('input[name="answer"]').forEach(input=>input.addEventListener('change',e=>{answers[index]=Number(e.target.value);error.textContent='';renderSelection();}));
   prev.disabled = index===0;
   prev.style.opacity = prev.disabled ? '.45' : '1';
   next.textContent = index===questionData.length-1 ? 'Lihat Hasil ↗' : 'Lanjut ↗';
   error.textContent = '';
  }
  function renderSelection(){area.querySelectorAll('.answer-option').forEach((el,i)=>el.classList.toggle('selected',answers[index]===i));}
  prev.addEventListener('click',()=>{if(index>0){index--;render();}});
  next.addEventListener('click',()=>{
   if(answers[index]===null){error.textContent='Pilih satu jawaban terlebih dahulu untuk melanjutkan.';return;}
   if(index<questionData.length-1){index++;render();return;}
   const scores={normal:0,berminyak:0,kering:0,kombinasi:0,sensitif:0};
   answers.forEach((answer,i)=>{const key=questionData[i].a[answer].s;scores[key]++;});
   // Sensitivity is treated as a co-occurring characteristic; main type is selected among the four oil/moisture patterns unless sensitivity is the strongest repeated response.
   const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]);
   const resultType=sorted[0][0];
   sessionStorage.setItem('skinshadeResult',JSON.stringify({type:resultType,scores,answers,createdAt:new Date().toISOString()}));
   window.location.href='result.html';
  });
  render();
 }
 const resultNode=document.getElementById('result-content');
 if(resultNode){
  let data=null;try{data=JSON.parse(sessionStorage.getItem('skinshadeResult')||'null')}catch(e){}
  if(!data||!typeDetails[data.type]){
   resultNode.innerHTML='<div class="content-callout">Belum ada hasil analisis pada sesi ini. <a class="text-link" href="analysis.html">Isi kuesioner terlebih dahulu ↗</a></div>';
  }else{
   const d=typeDetails[data.type];
   const scoreText=Object.entries(data.scores||{}).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>`${typeDetails[k].name}: ${v}`).join(' • ');
   resultNode.innerHTML=`
    <section class="result-hero"><div><h2 class="result-type">${d.name}</h2><p>${d.desc}</p><div class="result-pills"><span class="pill">5 pertanyaan dijawab</span><span class="pill">Hasil edukatif</span></div><p class="small-note">Ringkasan jawaban: ${scoreText}</p></div><img class="result-image" src="assets/hasil.jpg" alt="Ilustrasi perawatan kulit" onerror="this.src='assets/beauty-placeholder.svg'"></section>
    <div class="result-grid"><section class="result-panel"><h3>Kandungan yang bisa dipelajari</h3><p>Kandungan berikut umum digunakan untuk mendukung kebutuhan kulit ini. Kecocokan tetap bergantung pada formulasi dan respons masing-masing kulit.</p><div class="ingredient-list">${d.ingredients.map(x=>`<span class="ingredient">${x}</span>`).join('')}</div></section>
    <section class="result-panel"><h3>Hal yang perlu diperhatikan</h3><ul>${d.care.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="result-panel"><h3>Contoh rutinitas sederhana</h3><p>${d.routine}</p></section>
    <section class="result-panel"><h3>Lanjutkan ke panduan skincare</h3><p>Baca penjelasan lengkap tentang jenis kulit, kandungan, layering, dan tips memakai skincare dengan aman.</p><a class="btn" href="skincare.html">Buka Panduan Skincare ↗</a></section></div>
    <div class="inline-promo"><strong>Butuh bantuan mengingat rutinitas?</strong><p>Fitur Reminder tersedia di aplikasi Skin&amp;Shade. Untuk mencoba tampilan makeup virtual, gunakan fitur AR Try-On di aplikasi.</p><a class="text-link" href="makeup.html">Baca juga Panduan Makeup ↗</a></div>
    <p class="small-note">Catatan: Kuesioner ini merupakan alat edukasi sederhana, bukan diagnosis medis. Kulit sensitif bisa bersamaan dengan jenis kulit lain. Bila kamu mengalami reaksi berat, nyeri, ruam menetap, atau jerawat parah, mintalah saran dokter kulit.</p>`;
  }
 }
 const loginForm=document.getElementById('login-form');
 if(loginForm)loginForm.addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('login-email').value.trim();const pass=document.getElementById('login-password').value;const msg=document.getElementById('login-message');if(!email||!pass){msg.textContent='Lengkapi email dan kata sandi terlebih dahulu.';return;}msg.textContent='Tampilan login prototipe berhasil divalidasi. Belum ada autentikasi server.';});
 const registerForm=document.getElementById('register-form');
 if(registerForm)registerForm.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('reg-name').value.trim();const email=document.getElementById('reg-email').value.trim();const pass=document.getElementById('reg-password').value;const confirm=document.getElementById('reg-confirm').value;const msg=document.getElementById('register-message');if(!name||!email||!pass||!confirm){msg.textContent='Lengkapi semua kolom terlebih dahulu.';return;}if(pass.length<8){msg.textContent='Kata sandi minimal 8 karakter.';return;}if(pass!==confirm){msg.textContent='Konfirmasi kata sandi belum sama.';return;}msg.textContent='Formulir valid. Pendaftaran belum menyimpan data karena belum terhubung ke server.';});
})();
