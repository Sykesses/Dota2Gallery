// Показать полноэкранное изображение
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const fullImage = document.getElementById('full-image');
let currentIndex;

// Открыть изображение
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        fullImage.src = thumbnail.src;
        modal.style.display = 'flex';
        currentIndex = index;
    });
});

// Закрыть модальное окно
document.querySelector('.close').onclick = () => {
    modal.style.display = 'none';
};

// Навигация между изображениями
document.getElementById('prev').onclick = () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    fullImage.src = thumbnails[currentIndex].src;
};

document.getElementById('next').onclick = () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    fullImage.src = thumbnails[currentIndex].src;
};

// Поиск персонажа по имени
document.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    thumbnails.forEach(thumbnail => {
        const name = thumbnail.getAttribute('data-name').toLowerCase();
        thumbnail.style.opacity = name.includes(searchText) ? '1' : '0.3';
    });
});
