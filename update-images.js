// Update data-image attributes to match background-image URLs
document.addEventListener('DOMContentLoaded', function() {
    const perfumeCards = document.querySelectorAll('.perfume-card');
    perfumeCards.forEach(card => {
        const bgImageDiv = card.querySelector('.bg-cover');
        const addToCartBtn = card.querySelector('.add-to-cart');
        
        if (bgImageDiv && addToCartBtn) {
            const bgImageUrl = bgImageDiv.style.backgroundImage;
            const url = bgImageUrl.replace(/^url\(['"](.+)['"]\)$/, '$1');
            addToCartBtn.setAttribute('data-image', url);
        }
    });
}); 