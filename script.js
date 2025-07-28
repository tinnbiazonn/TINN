// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

//slideshow
let slideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");

  setTimeout(autoShowSlides, 2000); // Change image every 4 seconds
}

// Manual controls (optional)
function plusSlides(n) {
  slideIndex += n - 1;
  autoShowSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  autoShowSlides();
}

//Photogrid
const newsItems = [
  {
    images: [
      "oath1.jpg",
      "oath2.jpg",
      "oath3.jpg"
    ],
    text:  "DECEMBER 4, 2023 | OATH-TAKING CEREMONY OF NEWLY ELECTED SK OFFICIALS \n The newly elected SK Officials of Barangay 662, Zone 71 District V Manila took their Oath today at Kartilya ng Katipunan after completing the SK Mandatory Training. The Oath-Taking Ceremony led by our very own City Mayor, Honey Lacuna was attended by all SK Officials of Manila. \n Presenting the newly elected SK Council, \n SK Chairperson Rovic Yuri Acuña \n SK Kagawad\n -Jaspher Imperio\n-Michael Angelo Palomeras\n-Tristan Edcel Serad\n-Christian Balt Arlegue \n-Kristine Biazon \n-Valerie Naluis \n-Ralph Eldridge Lo \nCongratulations to our newly elected officials and may God bless your new journey as youth leaders of our community.  \nLagi’t-lagi para sa Kabataan! 🤍💙☝🏼 \n#AsensoKabataangCristobalian \n#AsensoManileño"
  },
  {
    images: [
      "viva.jpg",
      "viva0.jpg",
      "viva1.jpg",
      "viva2.jpg",
      "viva3.jpg"
    ],
    text: "JANUARY 27, 2024 | VIVA PIT SENIOR STO. NIÑO \n Sa paggunita nang taunang Cristobal Sto. Niño Festival, ang butihing SK Chairperson Yuri Acuña at ang kanyang konseho ay namahagi ng sayang handog para sa mga Batang Cristobal. \n Maraming-maraming salamat sa lahat ng tumulong at nakidalo. ✨ \n Lagi’t-Lagi Para Sa Kabataan🤍💙☝🏻 \n #ParaSaKabataan \n #BatangCristobal"
  },
  {
    images: [
      "skc0.jpg",
      "skc1.jpg"
    ],
    text: "FEBRUARY 14, 2025 | 𝓢𝓸 𝓶𝓾𝓬𝓱 𝓪𝓷𝓰 𝓚𝓲𝓵𝓲𝓰? \n 𝓢𝓸 𝓶𝓾𝓬𝓱 𝓪𝓷𝓰 𝓚𝓪𝓵𝓲𝓽𝓾𝓱𝓪𝓷? \n 𝓪𝓽 𝓢𝓸 𝓶𝓾𝓬𝓱 𝓪𝓷𝓰 𝓚𝓪𝓼𝓪𝓴𝓲𝓽𝓪𝓷? \n This Valentine's Day, celebrate with us by sending confessions and anonymous messages to the person you love. "
  },
  {
    images: [
      "lung0.jpg",
      "lung1.jpg",
      "lung2.jpg",
      "lung3.jpg"
    ],
    text: "MARCH 16, 2024 | WE JUST MADE HISTORY ✨✊🏻 \n As we celebrate “World’s TB Day, the Sangguniang Kabataan - BRGY. 662, Zone 71, District V, together with SK Officials of Manila, participated the Guinness World Record Official Attempt for Largest Human Lungs at Quirino Granstand, aiming to eradicate the stigma surrounding tuberculosis and raise global awareness about the disease.\n Tuloy ang Bayanihan, TB ay Tuldukan! \n #AsensoKabataangManileño \n #WorldTBDay2024 \n #CristobalSK662"
  },
  {
    images: [
      "droga.jpg",
      "droga0.jpg",
      "droga2.jpg",
      "droga3.jpg",
      "droga3.jpg"
    ],
    text: "MARCH 23, 2024 | Buhay Ingatan, Droga’y Ayawan \n The SK Council, together with KK Volunteers and MPD-PS5 attended in the 1st “Buhay Ingatan, Droga’y Ayawan (BIDA) Program Anniversary Celebration, held in the SM Mall of Asia Concert Grounds in Pasay City.\n The SK-KK members, headed by SK Chairperson Yuri Acuña, supported the event for the second time, which carried the theme of “Lakad Kontra Droga, BIDA Tayong Lahat!”.  \n #BIDA \n #SupportBIDASaveLives \n #LakadKontraDrofaBIDATayongLahat \n #LagitLagiParaSaKabataan"
  },
  {
    images: [
      "fnrn2.jpg",
      "fnrn1.jpg",
      "fnrn0.jpg",
      "fnrn3.jpg"
    ],
    text: "AUGUST 11, 2024 | 𝐋𝐈𝐍𝐆𝐆𝐎 𝐍𝐆 𝐊𝐀𝐁𝐀𝐓𝐀𝐀𝐍 𝟓𝐊 𝐅𝐔𝐍 𝐑𝐔𝐍: “𝐓𝐚𝐫𝐚 𝐓𝐚𝐤𝐛𝐨 𝐊𝐚𝐛𝐚𝐭𝐚𝐚𝐧𝐠 𝐌𝐚𝐧𝐢𝐥𝐞ñ𝐨.” \n Sa pagdiriwang ng Linggo ng Kabataan, ang Sangguniang Kabataan kasama ang Katipunan Ng Kabataan Volunteers ng Brgy. 662, Zone 71, District V ay nakilahok at nakisaya sa 5K Fun Run na may temang “Tara Takbo, Kabataang Manileño”.\n #CristobalSK662 \n #LagitLagiParaSaKabataan \n #LinggoNgKabataan2024 \n #TaraTakboKabataangManileño"
  },
  {
    images: [
      "ween.jpg",
      "ween0.jpg",
      "ween1.jpg",
      "ween2.jpg",
      "ween3.jpg",
      "ween4.jpg"
    ],
    text: "NOVEMBER 2, 2024 | TRICK OR TREATS👻🎃 \n Mabuhay Cristobalians! Are you ready for a spooky, fun, and exciting 'SK Halloween Costume Party'?: HAPPY HALLOWEEN🕸🎃👻\n #cristobalsk662 \n #LagitlagiParaSaKabataan \n #skhalloween2024"
  },
];

let currentNewsIndex = 0;
let currentImageIndex = 0;

function openModal(newsIndex) {
  currentNewsIndex = newsIndex;
  currentImageIndex = 0;
  updateModalContent();
  document.getElementById("newsModal").style.display = "block";
}

function closeModal() {
  document.getElementById("newsModal").style.display = "none";
}

function updateModalContent() {
  const modalImg = document.getElementById("modalImg");
  const modalText = document.getElementById("modalText");
  const news = newsItems[currentNewsIndex];

  modalImg.src = news.images[currentImageIndex];
  modalText.textContent = news.text;
}

function changeImage(direction) {
  const news = newsItems[currentNewsIndex];
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = news.images.length - 1;
  } else if (currentImageIndex >= news.images.length) {
    currentImageIndex = 0;
  }

  updateModalContent();
}