// Fungsi untuk menangani pengiriman formulir kontak
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Tampilkan pesan sukses
    alert(Terima kasih, ${name}! Pesan Anda telah terkirim.);
    
    // Reset formulir setelah pengiriman
    this.reset();
});

// Fungsi untuk menambahkan efek scroll smooth pada navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scroll ke bagian yang dituju
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});