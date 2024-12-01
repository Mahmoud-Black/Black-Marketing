// تغيير القسم المعروض عند اختيار التصنيف من القائمة
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const selectedCategory = event.target.getAttribute('data-category');
        
        // إخفاء جميع الأقسام
        document.querySelectorAll('.category').forEach(category => {
            category.style.display = 'none';
        });

        // عرض القسم المحدد
        document.getElementById(selectedCategory).style.display = 'block';

        // تغيير عنوان القسم
        const categoryTitle = document.querySelector(`#${selectedCategory} .category-title`);
        document.querySelector('#categoryDropdown').textContent = categoryTitle.textContent;
    });
});

// تحميل القسم الأول بشكل افتراضي
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('social-media').style.display = 'block';
});
