document.addEventListener('DOMContentLoaded', function () {
  const categorySelect = document.getElementById('categorySelect');
  const recommendedSection = document.querySelector('#recommended-events .event-list');
  const eventItems = recommendedSection.querySelectorAll('.event-card');

  categorySelect.addEventListener('change', function () {
    const selectedCategory = this.value;

    eventItems.forEach(item => {
      const eventCategory = item.getAttribute('data-category');
      item.style.display = (selectedCategory === 'all' || selectedCategory === eventCategory) ? 'block' : 'none';
    });
  });
});

// Lọc sự kiện theo thành phố
document.addEventListener('DOMContentLoaded', function () {
  const citySelect = document.getElementById('citySelect');
  const eventCards = document.querySelectorAll('.event-card');

  citySelect.addEventListener('change', function () {
    const selectedCity = this.value;

    eventCards.forEach(card => {
      const city = card.getAttribute('data-city');
      const shouldShow = selectedCity === 'all' || city === selectedCity;
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});
createPagination();
showPage(1);

// phân trang
  document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 6;
    const eventCards = document.querySelectorAll(".event-card");
    const totalItems = eventCards.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.getElementById("pagination");

    let currentPage = 1;

    function showPage(page) {
      // Ẩn tất cả các event
      eventCards.forEach((card, index) => {
        card.style.display =
          index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
            ? "block"
            : "none";
      });

      renderPagination();
    }

    function renderPagination() {
      pagination.innerHTML = "";

      // Mũi tên trái
      const prevLi = document.createElement("li");
      prevLi.innerHTML = `<button ${currentPage === 1 ? "disabled" : ""}>&laquo;</button>`;
      prevLi.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
        }
      });
      pagination.appendChild(prevLi);

      // Các nút số trang
      for (let i = 1; i <= totalPages; i++) {
        const pageLi = document.createElement("li");
        pageLi.innerHTML = `<button class="${currentPage === i ? "active" : ""}">${i}</button>`;
        pageLi.addEventListener("click", () => {
          currentPage = i;
          showPage(currentPage);
        });
        pagination.appendChild(pageLi);
      }

      // Mũi tên phải
      const nextLi = document.createElement("li");
      nextLi.innerHTML = `<button ${currentPage === totalPages ? "disabled" : ""}>&raquo;</button>`;
      nextLi.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
        }
      });
      pagination.appendChild(nextLi);
    }

    // Hiển thị trang đầu tiên khi tải xong
    showPage(1);
  });