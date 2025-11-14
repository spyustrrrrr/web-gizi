// Script untuk navigasi mobile menu

document.getElementById('menuBtn').addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
});
// Tutup menu mobile saat link diklik
document.querySelectorAll('#mobileMenu a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});
