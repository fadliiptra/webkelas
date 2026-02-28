const studentsData = [
  {
    name: "Abizar",
    gender: "L",
    absen: 1,
    role: "Siswa",
    photo: "imgs/abizar.jpeg",
    instagram: "none",
    fullName: "Abizar Al Gifari",
  },
  {
    name: "Ahmad",
    gender: "L",
    absen: 2,
    role: "Siswa",
    photo: "imgs/ahmad.jpeg",
    instagram: "iki_223_kii",
    fullName: "Ahmad Rizki Pirmansyah",
  },
  {
    name: "Aldi",
    gender: "L",
    absen: 3,
    role: "Siswa",
    photo: "imgs/aldi.jpeg",
    instagram: "aldifebriansyahs",
    fullName: "Aldi Febriansyah Susanto",
  },
  {
    name: "Anita",
    gender: "P",
    absen: 4,
    role: "Siswi",
    photo: "imgs/anita.jpeg",
    instagram: "none",
    fullName: "Anita Lestari",
  },
  {
    name: "Ardhyan",
    gender: "L",
    absen: 5,
    role: "Siswa",
    photo: "imgs/prof.jpeg",
    instagram: "none",
    fullName: "Ardhyan Adam Syahputra Hidayat",
  },
  {
    name: "Azahra",
    gender: "P",
    absen: 6,
    role: "Siswi",
    photo: "imgs/zahra.jpeg",
    instagram: "none",
    fullName: "Azahra Anggraeni",
  },
  {
    name: "Azmian",
    gender: "L",
    absen: 7,
    role: "Siswa",
    photo: "imgs/azmian.jpeg",
    instagram: "__azmian15",
    fullName: "Azmian Abief Ramdansyah",
  },
  {
    name: "Bintang",
    gender: "P",
    absen: 8,
    role: "Siswi",
    photo: "imgs/bintang.jpeg",
    instagram: "none",
    fullName: "Bintang Rimas Syakira",
  },
  {
    name: "Chalista",
    gender: "P",
    absen: 9,
    role: "Siswi",
    photo: "imgs/chalista.jpeg",
    instagram: "none",
    fullName: "Chalista Shofura Qiwantari",
  },
  {
    name: "Dewangga",
    gender: "L",
    absen: 10,
    role: "Siswa",
    photo: "imgs/dewangga.jpeg",
    instagram: "none",
    fullName: "Dewangga Dwi Setia Utama",
  },
  {
    name: "Dewanggi",
    gender: "L",
    absen: 11,
    role: "Siswa",
    photo: "imgs/dewanggi.jpeg",
    instagram: "none",
    fullName: "Dewangga Dwi Karya Utama",
  },
  {
    name: "Dymas",
    gender: "L",
    absen: 12,
    role: "Siswa",
    photo: "imgs/dimas.jpeg",
    instagram: null,
    fullName: "Dymas Hajjan Ibnu Saliman",
  },
  {
    name: "Fadli",
    gender: "L",
    absen: 13,
    role: "Siswa",
    photo: "imgs/fadli.jpeg",
    instagram: "fputra_510",
    fullName: "Fadli Darismaisya Putra",
  },
  {
    name: "Ferry",
    gender: "L",
    absen: 14,
    role: "Siswa",
    photo: "imgs/fery.jpeg",
    instagram: "feryardnsh_",
    fullName: "Ferry Ardiansyah",
  },
  {
    name: "Fitri",
    gender: "P",
    absen: 15,
    role: "Siswi",
    photo: "imgs/fitri.jpeg",
    instagram: "none",
    fullName: "Fitri Nur Hafifah",
  },
  {
    name: "Irawan",
    gender: "L",
    absen: 16,
    role: "Siswa",
    photo: "imgs/irawan.jpeg",
    instagram: "irawannugrha",
    fullName: "Irawan Nugraha",
  },
  {
    name: "Karlina",
    gender: "P",
    absen: 17,
    role: "Siswi",
    photo: "imgs/kerlin.jpeg",
    instagram: "none",
    fullName: "Karlina Sukmawati",
  },
  {
    name: "Keisa",
    gender: "P",
    absen: 18,
    role: "Siswi",
    photo: "imgs/keisa.jpeg",
    instagram: "none",
    fullName: "Keisa Zakiatussyifa",
  },
  {
    name: "Kenken",
    gender: "P",
    absen: 19,
    role: "Siswi",
    photo: "imgs/kenken.jpeg",
    instagram: "none",
    fullName: "Kenken Kenisa",
  },
  {
    name: "M Albaniray",
    gender: "L",
    absen: 20,
    role: "Siswa",
    photo: "imgs/alban.jpeg",
    instagram: "onikata_ray",
    fullName: "Muhamad Albaniray Benzema",
  },
  {
    name: "M Fahry",
    gender: "L",
    absen: 21,
    role: "Siswa",
    photo: "imgs/fahri2.jpeg",
    instagram: "farr_nyxx",
    fullName: "Muhamad Fahry",
  },
  {
    name: "M Rasya",
    gender: "L",
    absen: 22,
    role: "Siswa",
    photo: "imgs/rasya.jpeg",
    instagram: "mhamd.rasya",
    fullName: "Muhamad Rasya Daniansyah",
  },
  {
    name: "M Sukma",
    gender: "L",
    absen: 23,
    role: "Siswa",
    photo: "imgs/wira.jpeg",
    instagram: "witz_diredja",
    fullName: "Muhammad Sukma Wiradireja ",
  },
  {
    name: "Mutiara",
    gender: "P",
    absen: 24,
    role: "Siswi",
    photo: "imgs/muthi.jpeg",
    instagram: "none",
    fullName: "Mutiara Erisdha Putri",
  },
  {
    name: "Nabila",
    gender: "P",
    absen: 25,
    role: "Siswi",
    photo: "imgs/nabila1.jpeg",
    instagram: "none",
    fullName: "Nabila Yulistina",
  },
  {
    name: "Neng",
    gender: "P",
    absen: 26,
    role: "Siswi",
    photo: "imgs/sri.jpeg",
    instagram: "none",
    fullName: "Neng Sri Mulyani",
  },
  {
    name: "Novtiana",
    gender: "P",
    absen: 27,
    role: "Siswi",
    photo: "imgs/novti.jpeg",
    instagram: "none",
    fullName: "Novtiana Aulia",
  },
  {
    name: "Raihan",
    gender: "L",
    absen: 28,
    role: "Siswa",
    photo: "imgs/rehan.jpeg",
    instagram: "rehanxq26",
    fullName: "Raihan Al-Fikri",
  },
  {
    name: "Rayyan",
    gender: "L",
    absen: 29,
    role: "Siswa",
    photo: "imgs/rayyan.jpeg",
    instagram: "mbg_still_alive",
    fullName: "Rayyan Akbar Sinatrya",
  },
  {
    name: "Reva",
    gender: "P",
    absen: 30,
    role: "Siswi",
    photo: "imgs/reva.jpeg",
    instagram: "none",
    fullName: "Reva Sri Yandanu",
  },
  {
    name: "Rizqi",
    gender: "L",
    absen: 31,
    role: "Siswa",
    photo: "imgs/iki.jpeg",
    instagram: "ryuu.neverluss",
    fullName: "Rizqi Bagja Alamsyah",
  },
  {
    name: "Salsa",
    gender: "P",
    absen: 32,
    role: "Siswi",
    photo: "imgs/salsa.jpeg",
    instagram: "none",
    fullName: "Salsa Remina Anjani",
  },
  {
    name: "Shaquilla",
    gender: "P",
    absen: 33,
    role: "Siswi",
    photo: "imgs/qilla.jpeg",
    instagram: "none",
    fullName: "Shaquilla Salsabila",
  },
  {
    name: "Silvy",
    gender: "P",
    absen: 34,
    role: "Siswi",
    photo: "imgs/silvy.jpeg",
    instagram: "none",
    fullName: "Silvy Apriani",
  },
  {
    name: "Suci",
    gender: "P",
    absen: 35,
    role: "Siswi",
    photo: "imgs/suci.jpeg",
    instagram: "none",
    fullName: "Suci Rahmawati",
  },
  {
    name: "Syafira",
    gender: "P",
    absen: 36,
    role: "Siswi",
    photo: "imgs/fira.jpeg",
    instagram: "none",
    fullName: "Syafira Ghiani",
  },
  {
    name: "Tressa",
    gender: "P",
    absen: 37,
    role: "Siswi",
    photo: "imgs/tresa.jpeg",
    instagram: "none",
    fullName: "Tressa Apriliani",
  },
  {
    name: "Yovi",
    gender: "L",
    absen: 38,
    role: "Siswa",
    photo: "imgs/yovi.jpeg",
    instagram: "Yvii_mwln",
    fullName: "Yovi Maulana Wahid",
  },
  {
    name: "Zulfa",
    gender: "P",
    absen: 39,
    role: "Siswi",
    photo: "imgs/zulfa.jpeg",
    instagram: "none",
    fullName: "Zulfa Khoirunnisa",
  },
  {
    name: "Zulyan",
    gender: "L",
    absen: 40,
    role: "Siswa",
    photo: "imgs/zulyan.jpeg",
    instagram: null,
    fullName: "Zulyan Ar-Rojabi",
  },
];

let currentFilter = "all";

function renderStudents(filter = "all", search = "") {
  const grid = document.getElementById("students-grid");
  const filteredStudents = studentsData.filter((student) => {
    const matchesFilter = filter === "all" || student.gender === filter;
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = filteredStudents
    .map(
      (student) => `
  <div onclick="openLightbox('${student.name}')" 
       class="card-shadow rounded-lg p-6 text-center hover-lift cursor-pointer" 
       style="background-color: #ffffff;">

      <div class="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
          <img src="${student.photo || "imgs/default.png"}"
               alt="${student.name}"
               class="w-full h-full object-cover">
      </div>

      <h3 class="font-bold text-lg">${student.name}</h3>
      <p class="text-sm">Absen: ${student.absen}</p>
  </div>
`,
    )
    .join("");
}

function highlightTodaySchedule() {
  const today = new Date().getDay();
  if (today >= 1 && today <= 5) {
    const scheduleBody = document.getElementById("schedule-body");
    const rows = scheduleBody.querySelectorAll("tr");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length > today) {
        cells[today].classList.add("today-highlight");
      }
    });
  }
}

function openLightbox(studentName) {
  const student = studentsData.find((s) => s.name === studentName);
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");

  // Cek dulu IG nya
  const instagramButton =
    student.instagram !== null
      ? `
        <a href="https://instagram.com/${student.instagram}" 
           target="_blank"
           class="mt-3 inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition">
           @${student.instagram}
        </a>
      `
      : "";

  content.innerHTML = `
        <div class="lightbox-container relative">

            <div class="w-full aspect-[3/4] bg-gray-200">
                <img src="${student.photo}" 
                     class="w-full h-full object-cover">
            </div>

            <div class="p-5 text-center">

                <h2 class="text-lg md:text-xl font-bold mb-1">
                    ${student.fullName}
                </h2>

                <p class="text-xs md:text-sm text-gray-500 mb-3">
                    Absen ${student.absen}
                </p>

                ${instagramButton}

            </div>

            <button onclick="closeLightbox()" 
                class="absolute top-3 right-3 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center">
                ×
            </button>
        </div>
    `;

  lightbox.classList.add("active");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
}

// Mobile menu toggle
document.getElementById("mobile-btn").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentFilter = e.target.dataset.filter;
    const searchValue = document.getElementById("search-student").value;
    renderStudents(currentFilter, searchValue);
  });
});

// Search input
document.getElementById("search-student").addEventListener("input", (e) => {
  renderStudents(currentFilter, e.target.value);
});

// Initialize
renderStudents();
highlightTodaySchedule();
