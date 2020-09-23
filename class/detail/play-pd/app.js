// Dekalrasi modal
const modal = document.querySelector(".modal-join");
const button = document.querySelectorAll(".modal-join button");

// Array data video
const dataVideo = [{
        link: "https://youtube.com/embed/MtHWCyTUhqc",
        title: "Pengenalan Materi",
        desc: ""
    },
    {
        link: "https://youtube.com/embed/Wu5AsOnv27Q",
        title: "Membuat Project",
        desc: "Membuat project baru di adobe premiere pro dan mengenal workspace di adobe premiere pro"
    },

    {
        link: "https://youtube.com/embed/VQcSQg69a2E",
        title: "Import Project",
        desc: "Mengimport assets video yang akan di edit, membuat sequence baru dan mengeditnya di effect control"
    },
    {
        link: "https://youtube.com/embed/nxz_gbVT_ME",
        title: "Trim Video",
        desc: "Memotong video dengan razer tool dan memotong video langsung dengan men-drag awalan atau akhir video."
    },
    {
        link: "https://youtube.com/embed/XifEj5PZgDw",
        title: "Text Tool",
        desc: "Menambahkan teks dengan 2 cara yaitu dengan menggunakan text tool dan menggunakan legacy title"
    },
];
var titleVid = document.getElementById("title-video");

// Menambahkan element box materi
for (let boxIn = 0; boxIn < dataVideo.length; boxIn++) {
    const boxContents = document.getElementById("content-box");
    boxContents.innerHTML += '<a href="#" style="color: #fff; text-decoration: none"> <div class="box-content"> <p>' +
        '#' + boxIn + ' ' + dataVideo[boxIn].title;
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