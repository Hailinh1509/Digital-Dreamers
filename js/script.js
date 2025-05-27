<script>
    document.addEventListener('DOMContentLoaded', function() {
        const scrollContainer = document.querySelector('.featured-events-container');
        const scrollNextButton = document.getElementById('scroll-next');
        const eventCards = document.querySelectorAll('.event-card');
        const visibleInitialCount = 4;

        // Hiển thị số lượng sự kiện ban đầu
        eventCards.forEach((card, index) => {
            if (index >= visibleInitialCount) {
                card.style.display = 'none';
            }
        });

        // Ẩn nút next nếu không có sự kiện nào bị ẩn ban đầu
        if (eventCards.length <= visibleInitialCount) {
            scrollNextButton.style.display = 'none';
        } else {
            scrollNextButton.style.display = 'flex';
        }

        scrollNextButton.addEventListener('click', function() {
            scrollContainer.scrollLeft += 315; // Điều chỉnh dựa trên chiều rộng thẻ + margin
            const remainingScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth - scrollContainer.scrollLeft;
            if (remainingScroll <= 5) {
                scrollNextButton.style.display = 'none';
            }
        });

        // Hiển thị nút khi hover (tùy chọn)
        scrollContainer.addEventListener('mouseenter', () => {
            if (eventCards.length > visibleInitialCount && scrollContainer.scrollWidth > scrollContainer.clientWidth) {
                scrollNextButton.style.opacity = '1';
            }
        });

        scrollContainer.addEventListener('mouseleave', () => {
            if (eventCards.length > visibleInitialCount && scrollContainer.scrollWidth > scrollContainer.clientWidth) {
                scrollNextButton.style.opacity = '0.8';
            } else {
                scrollNextButton.style.opacity = '0';
            }
        });
    });
</script>