// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// Ubah foto secara Oto
const images = [
    "images/PP2.png",
    "images/PP3.png",
    "images/PP4.png"
];

let currentIndex = 0; // Indeks gambar saat ini
const imageElement = document.getElementById("slider-image"); // Ambil elemen gambar

// Fungsi untuk mengubah gambar
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Update indeks
    imageElement.src = images[currentIndex]; // Set sumber gambar
}

// Jalankan fungsi changeImage setiap 3 detik (3000 ms)
setInterval(changeImage, 3000);