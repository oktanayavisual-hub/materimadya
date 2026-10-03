const steps = [

  {
    kicker: "BENIH",

    title:
      "Tuhan Memberi Hidup",

    text:
      "Seperti benih kecil yang siap bertumbuh, Tuhan memberi kita hidup, kemampuan, dan kesempatan untuk berkembang.",

    meaning:
      "Tuhan adalah sumber hidup kita. Dari-Nya kita mulai belajar dan bertumbuh.",

    bottom:
      "Setiap pertumbuhan besar selalu dimulai dari sesuatu yang kecil."
  },

  {
    kicker: "AKAR",

    title:
      "Iman Membuat Kita Kuat",

    text:
      "Akar tidak selalu terlihat, tetapi akar membuat pohon tetap berdiri. Begitu juga iman, doa, Firman Tuhan, keluarga, dan gereja.",

    meaning:
      "Semakin kita ingin bertumbuh, semakin kuat juga hubungan kita dengan Tuhan perlu dibangun.",

    bottom:
      "Akar yang kuat membuat pohon tidak mudah tumbang."
  },

  {
    kicker: "BATANG",

    title:
      "Aku Tahu Siapa Diriku",

    text:
      "Batang menggambarkan diri kita. Kita boleh berubah dan belajar banyak hal, tetapi kita tetap tahu bahwa kita adalah anak Tuhan.",

    meaning:
      "Nilai diri kita bukan ditentukan oleh tren, game, barang, atau apa kata orang lain.",

    bottom:
      "Aku bertumbuh, tetapi aku tetap tahu siapa diriku."
  },

  {
    kicker: "CABANG",

    title:
      "Aku Boleh Berkembang",

    text:
      "Cabang tumbuh ke banyak arah. Kita juga boleh berkembang dalam sekolah, olahraga, seni, bahasa, teknologi, dan kreativitas.",

    meaning:
      "Mengikuti perkembangan zaman bukan sesuatu yang salah. Tuhan memberi kita kemampuan untuk belajar banyak hal.",

    bottom:
      "Belajar hal baru adalah bagian dari pertumbuhan."
  },

  {
    kicker: "DAUN",

    title:
      "Dunia Terus Berubah",

    text:
      "Teknologi, AI, game, media, sekolah, dan pertemanan adalah bagian dari dunia kita. Semua itu bisa kita kenal tanpa kehilangan iman.",

    meaning:
      "Kita tidak perlu takut kepada perubahan. Yang penting, akar kita tetap kuat di dalam Tuhan.",

    bottom:
      "Dunia boleh berubah. Akar iman tetap kuat."
  },

  {
    kicker: "BUAH",

    title:
      "Iman Terlihat dari Hidup Kita",

    text:
      "Pohon yang sehat menghasilkan buah. Iman juga terlihat melalui kasih, kejujuran, kepedulian, dan keberanian melakukan yang benar.",

    meaning:
      "Orang lain bisa melihat iman kita melalui sikap dan tindakan sehari-hari.",

    bottom:
      "Bertumbuh tinggi, berakar kuat, menghasilkan buah yang baik."
  }

];


/* =====================================================
   ELEMENT
===================================================== */

const scene =
  document.getElementById(
    "scene"
  );

const growBtn =
  document.getElementById(
    "growBtn"
  );

const prevBtn =
  document.getElementById(
    "prevBtn"
  );

const resetBtn =
  document.getElementById(
    "resetBtn"
  );

const stepBadge =
  document.getElementById(
    "stepBadge"
  );

const stepKicker =
  document.getElementById(
    "stepKicker"
  );

const messageTitle =
  document.getElementById(
    "messageTitle"
  );

const messageText =
  document.getElementById(
    "messageText"
  );

const meaningText =
  document.getElementById(
    "meaningText"
  );

const bottomMessage =
  document.getElementById(
    "bottomMessage"
  );

const progressFill =
  document.getElementById(
    "progressFill"
  );

const dots = [
  ...document.querySelectorAll(
    ".dot"
  )
];


/* =====================================================
   STATE
===================================================== */

let step = 0;


/* =====================================================
   UPDATE ANIMASI
===================================================== */

function applySceneState() {

  scene.classList.toggle(
    "state-roots",
    step >= 1
  );

  scene.classList.toggle(
    "state-trunk",
    step >= 2
  );

  scene.classList.toggle(
    "state-branches",
    step >= 3
  );

  scene.classList.toggle(
    "state-crown",
    step >= 4
  );

  scene.classList.toggle(
    "state-fruits",
    step >= 5
  );

}


/* =====================================================
   RENDER
===================================================== */

function render() {

  const data =
    steps[step];

  stepBadge.textContent =
    step + 1;

  stepKicker.textContent =
    data.kicker;

  messageTitle.textContent =
    data.title;

  messageText.textContent =
    data.text;

  meaningText.textContent =
    data.meaning;

  bottomMessage.textContent =
    data.bottom;


  applySceneState();


  /* progress */

  const progress =
    (
      step /
      (
        steps.length - 1
      )
    ) * 100;

  progressFill.style.width =
    `${progress}%`;


  /* dot */

  dots.forEach(
    (
      dot,
      index
    ) => {

      dot.classList.toggle(
        "active",
        index === step
      );

      dot.classList.toggle(
        "done",
        index < step
      );

    }
  );


  /* tombol sebelumnya */

  prevBtn.disabled =
    step === 0;


  /* tombol utama */

  if (
    step === 0
  ) {

    growBtn.textContent =
      "Mulai Bertumbuh 🌱";

  }
  else if (
    step ===
    steps.length - 1
  ) {

    growBtn.textContent =
      "Pohon Sudah Bertumbuh 🌳";

  }
  else {

    growBtn.textContent =
      "Lanjutkan Pertumbuhan →";

  }

}


/* =====================================================
   BUTTON NEXT
===================================================== */

growBtn.addEventListener(
  "click",
  () => {

    if (
      step <
      steps.length - 1
    ) {

      step++;

      render();

    }
    else {

      document
        .querySelector(
          ".closing-card"
        )
        .scrollIntoView(
          {
            behavior:
              "smooth"
          }
        );

    }

  }
);


/* =====================================================
   BUTTON PREVIOUS
===================================================== */

prevBtn.addEventListener(
  "click",
  () => {

    if (
      step > 0
    ) {

      step--;

      render();

    }

  }
);


/* =====================================================
   RESET
===================================================== */

resetBtn.addEventListener(
  "click",
  () => {

    step = 0;

    render();

  }
);


/* =====================================================
   DOT NAVIGATION
===================================================== */

dots.forEach(
  dot => {

    dot.addEventListener(
      "click",
      () => {

        step =
          Number(
            dot.dataset.step
          );

        render();

      }
    );

  }
);


/* =====================================================
   INITIAL RENDER
===================================================== */

render();
