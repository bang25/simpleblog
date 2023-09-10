// Halaman Pertama - Membuat Artikel
document.getElementById('submit-article').addEventListener('click', function () {
    const title = document.getElementById('article-title').value;
    const content = document.getElementById('article-content').value;
    const image = document.getElementById('article-image').files[0];

    if (title && content) {
        // Simpan artikel ke localStorage atau database
        const article = { title, content, image: image ? URL.createObjectURL(image) : null };
        const articles = JSON.parse(localStorage.getItem('articles') || '[]');
        articles.push(article);
        localStorage.setItem('articles', JSON.stringify(articles));

        // Bersihkan input
        document.getElementById('article-title').value = '';
        document.getElementById('article-content').value = '';
        document.getElementById('article-image').value = '';

        alert('Artikel berhasil dibuat!');
        window.location.href = "article.html";
    } else {
        alert('Judul dan isi artikel harus diisi.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const articles = JSON.parse(localStorage.getItem('articles') || '[]');
    const articleList = document.getElementById('article-list');

    // Periksa apakah elemen dengan ID 'article-list' ditemukan
    if (articleList) {
        articles.forEach(function (article) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.content}</p>
                ${article.image ? `<img src="${article.image}" alt="${article.title}" width="200">` : ''}
            `;
            articleList.appendChild(listItem);
        });
    }
});
