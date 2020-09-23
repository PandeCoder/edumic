// Dekalrasi modal
const modal = document.querySelector(".modal-join");
const button = document.querySelectorAll(".modal-join button");

// Array data video
const dataVideo = [{
    link: "https://youtube.com/embed/IyX70fuScFM",
    title: "Pengenalan Materi & Persiapan Software",
    desc: "Pada kelas ini kita akan belajar bagaimana cara membangun sebuah website dimulai dari membuat UI hingga kita implementasikan ke dalam HTML & CSS. Sebelum itu ada beberapa software yang harus kalian install. Kalian bisa mendownloadnya di section tools pada halaman detail kelas."
  },
  {
    link: "https://youtube.com/embed/j0peYqSw1ck",
    title: "Pengenalan HTML & CSS",
    desc: "Sebelum kita mulai ngoding, kita kuasai dulu materi dari hal yang akan kita pelajari. Kalian bisa mencari preferensi lebih banyak di internet atau kalian bisa bertanya di grup telegram yang sudah kami sediakan."
  },
  {
    link: "https://youtube.com/embed/S3Gvhvsnjiw",
    title: "Dasar-Dasar HTML",
    desc: "Untuk dokumentasi lebih lengkap silahkan kunjungi website w3schools.com"
  },
  {
    link: "https://youtube.com/embed/PzWVafNCe-g",
    title: "Atribut Pada HTML",
    desc: "Attribute berguna untuk memberikan sebuah identitas kepada elemen-elemen yang ada. Selain attribute yang dijelaskan dimateri, masih banyak attribute HTML yang bisa kalian pelajari dengan masing-masing fungsi yang berbeda"
  },
  {
    link: "https://youtube.com/embed/f5BTbUASCig",
    title: "DIV & CSS Selector",
    desc: "Tag <div> berguna untuk membungkus kumupulan elemen-elemen HTML, <div> berguna untuk mempermudah kita dalam mengorganisasikan elemen yang banyak serta mempermudah proses styling karena akan mudah dicari oleh CSS Selector"
  },
  {
    link: "https://youtube.com/embed/cEgn-xYrchg",
    title: "Parent Element HTML",
    desc: "Sebuah elemen-elemen yang banyak, apabila memiliki pembungkus maka pembungkus itu adalah parent element dari elemen-elemen yang banyak tersebut. Parent elemen dapat dieksekusi oleh CSS dan akan lebih mudah untuk merubah elemen yang banyak secara lebih spesifik"
  },
  {
    link: "https://youtube.com/embed/ikJbjUWkKkw",
    title: "CSS Selector Spesifik",
    desc: "Kalian bisa styling element di HTML secara lebih spesifik dengan CSS. "
  },
  {
    link: "https://youtube.com/embed/PektKxTRmGY",
    title: "CSS Properties: Margin & Padding",
    desc: "Margin dan Padding berguna untuk memberi jarak di dalam ataupun di luar elemennya. Margin dan Padding wajib kalian pahami karena akan sangat sering digunakan dalam proses web design."
  },
  {
    link: "https://youtube.com/embed/HTeYGbHOYXs",
    title: "CSS Display: Inline & Block",
    desc: "Pada modul CSS Display, kita akan belajar bagaimana mengatur layout pada sebuah design. Bagi yang masih kebingungan kalian bisa bertanya di grup Telegram yang sudah disediakan."
  },
  {
    link: "https://youtube.com/embed/-e5lR8VdXyI",
    title: "CSS Display: Flex",
    desc: ""
  },
  {
    link: "https://youtube.com/embed/CCVTRWkWIGA",
    title: "CSS Display: Grid",
    desc: ""
  },
  {
    link: "https://youtube.com/embed/x7vVQSgO7cs",
    title: "UI & UX Design: Pengenalan",
    desc: "UI atau User Interface adalah sebuah tampilan desain suatu aplikasi yang akan kita bangun. UI lebih berfokus kepada estetika dari suatu aplikasi, misalnya warna, illustrasi dll. UX atau User Experience adalah sebuah konsep atau rancangan awal dari UI yang akan kita bangun. UX berfokus kepada usability atau kegunaan dari aplikasi. UX dikerjakan lebi dahulu daripada UI."
  },
  {
    link: "https://youtube.com/embed/Ev4gBWZY6Jw",
    title: "UI & UX Design: Wireframing & Membuat UI",
    desc: "Sebelum terjun membuat website dengan HTML & CSS kita membuat dulu UI nya agar lebih terstruktur dan mudah ketika ada revisi."
  },
  {
    link: "https://youtube.com/embed/fWGIXclEiZ4",
    title: "Slicing UI ke HTML & CSS",
    desc: "Selamat, kalian telah mengikuti kelas ini sampai akhir. Terus ikuti update dari Edumic untuk mendapatkan info tentang kelas-kelas yang akan rilis. Terima kasih!"
  },
];
var titleVid = document.getElementById("title-video");

// Menambahkan element box materi
for (let boxIn = 0; boxIn < dataVideo.length; boxIn++) {
  const boxContents = document.getElementById("content-box");
  boxContents.innerHTML +=
    '<a href="#" style="color: #fff; text-decoration: none"> <div class="box-content"> <p>' +
    "#" +
    boxIn +
    " " +
    dataVideo[boxIn].title;
}

// Close modal
button.forEach((e) => {
  e.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

// Active state box materi
const boxContent = document.querySelectorAll(".box-content");
boxContent[0].classList.add("active");
const linkVid = document.getElementById("link-video");

boxContent.forEach(
  (box = (el) => {
    el.addEventListener("click", function () {
      for (let index = 0; index < boxContent.length; index++) {
        const element = boxContent[index];
        element.classList.remove("active");
      }
      this.classList.add("active");
    });
  })
);

// Change value materi & title
for (let i = 0; i < boxContent.length; i++) {
  const box = boxContent[i];

  box.addEventListener("click", function () {
    linkVid.setAttribute("src", dataVideo[i].link);
    titleVid.innerHTML = dataVideo[i].title;
    document.getElementById("desc-module").innerHTML = dataVideo[i].desc

  });
}