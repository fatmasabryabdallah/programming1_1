// Simple theme toggle: store preference in localStorage
(function () {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;

    const root = document.documentElement;

    function applyTheme(t) {
        if (t === 'light') {
            root.style.setProperty('--bg', '#f7f7f7');
            root.style.setProperty('--text', '#111');
            document.body.classList.remove('dark');
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            root.style.setProperty('--bg', '#12110f');
            root.style.setProperty('--text', '#fff');
            document.body.classList.add('dark');
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
        localStorage.setItem('theme', t);
    }

    // Init
    const stored = localStorage.getItem('theme') || 'dark';
    applyTheme(stored);

    btn.addEventListener('click', function () {
        const current = localStorage.getItem('theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
})();
const themeBtn = document.getElementById("themeBtn");


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}


// Update icon
function updateThemeIcon() {

    if (document.body.classList.contains("light-mode")) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

}


// Change theme
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

    } else {

        localStorage.setItem("theme", "dark");

    }


    updateThemeIcon();

});


// Initial icon
updateThemeIcon();
