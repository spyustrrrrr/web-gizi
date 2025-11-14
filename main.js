// Script untuk navigasi mobile menu dengan animasi fade dan close saat klik di luar menu

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Animasi fade in/out
    function showMenu() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.opacity = 0;
        setTimeout(() => { mobileMenu.style.opacity = 1; }, 10);
    }
    function hideMenu() {
        mobileMenu.style.opacity = 0;
        setTimeout(() => { mobileMenu.classList.add('hidden'); }, 200);
    }

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (mobileMenu.classList.contains('hidden')) {
            showMenu();
        } else {
            hideMenu();
        }
    });

    // Tutup menu saat link diklik
    document.querySelectorAll('#mobileMenu a').forEach(anchor => {
        anchor.addEventListener('click', function() {
            hideMenu();
        });
    });

    // Tutup menu saat klik di luar menu
    document.addEventListener('click', function(e) {
        if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
            hideMenu();
        }
    });

    // CSS animasi fade
    mobileMenu.style.transition = 'opacity 0.2s';
});
// Script dark mode sudah dihapus
