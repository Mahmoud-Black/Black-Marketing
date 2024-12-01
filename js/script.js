// تعيين الوضع الداكن مباشرة
document.body.classList.add("dark-mode");

// إضافة حركة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".animate__animated");
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
        card.classList.add("animate__fadeIn");
    });
});

// إضافة تأثير التثبيت للـ Navbar عند التمرير
window.onscroll = function () {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// تعريف المشاريع
let visibleProjects = 12; // عدد المشاريع المعروضة مبدئيًا
const projectsPerPage = 12; // عدد المشاريع لكل صفحة
const projectList = [
    { title: "مشروع سوشيال ميديا", category: "social-media", iframe: "https://www.behance.net/embed/project/198384227?ilo0=1" },
    { title: "حملة تسويق رقمي", category: "digital-marketing", iframe: "https://www.behance.net/embed/project/198384228?ilo0=1" },
    { title: "هوية بصرية لشركة", category: "visual-identity", iframe: "https://www.behance.net/embed/project/198384229?ilo0=1" },
    { title: "تصميم منتجات مبتكرة", category: "product-design", iframe: "https://www.behance.net/embed/project/198384230?ilo0=1" },
    { title: "تصميم مطبوعات مميزة", category: "print-design", iframe: "https://www.behance.net/embed/project/198384231?ilo0=1" },
    { title: "تصميم موقع إلكتروني", category: "web-design", iframe: "https://www.behance.net/embed/project/198384232?ilo0=1" },
    { title: "تصميم تطبيق موبايل", category: "app-design", iframe: "https://www.behance.net/embed/project/198384233?ilo0=1" },
    { title: "حملة إعلانات رقمية", category: "ad-campaigns", iframe: "https://www.behance.net/embed/project/198384234?ilo0=1" }
];

// عرض المشاريع
function displayProjects() {
    const container = document.getElementById("projectsGrid");
    container.innerHTML = ''; // تفريغ الحاوية

    const visibleItems = projectList.slice(0, visibleProjects);

    visibleItems.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <iframe src="${project.iframe}" height="316" width="100%" allowfullscreen lazyload frameborder="0"></iframe>
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
             
            </div>
        `;
        container.appendChild(card);
    });

}

// حدث عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
    displayProjects(); // عرض المشاريع عند التحميل
});

// عرض المزيد من المشاريع
function loadMoreProjects() {
    visibleProjects += portfolio.html; // زيادة المشاريع
    displayProjects(); // تحديث العرض
}
