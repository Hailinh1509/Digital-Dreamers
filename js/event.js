document.addEventListener('DOMContentLoaded', function () {
  const recommendedSection = document.querySelector('#recommended-events .event-list');
  const eventItems = recommendedSection.querySelectorAll('.event-card');
  const pagination = document.getElementById("pagination");
  const itemsPerPage = 6;// Số item mỗi trang
  let currentPage = 1;
  // Mảng chứa các item đang hiển thị (theo lọc hoặc tất cả)
  let filteredItems = Array.from(eventItems);

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
eventItems.forEach(item => item.classList.add("hidden"));
    filteredItems.forEach((item, index) => {
      if (index >= start && index < end) {
        item.classList.remove("hidden");// Hiện item trong phạm vi trang
      } else {
        item.classList.add("hidden");// Ẩn item ngoài trang
      }
    });
// Ẩn item ngoài trang
    Array.from(pagination.children).forEach(li => li.classList.remove("active"));
    const pageLink = pagination.querySelector(`li[data-page="${page}"]`);
    if (pageLink) pageLink.classList.add("active");

    currentPage = page;
    updateArrowStates();// Cập nhật trạng thái mũi tên
  }
 // Hàm cập nhật trạng thái mũi tên « và »
  function updateArrowStates() {
    pagination.querySelector("li[data-page='prev']").classList.toggle("disabled", currentPage === 1);
    pagination.querySelector("li[data-page='next']").classList.toggle("disabled", currentPage === Math.ceil(filteredItems.length / itemsPerPage));
  }
// Hàm tạo giao diện phân trang
  function createPagination() {
  pagination.innerHTML = ""; // Xóa các nút trang cũ
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage)); 
  // Dù có ít hơn 6 sự kiện, vẫn đảm bảo ít nhất có 1 trang

// Nút « Prev
    const prev = document.createElement("li");
    prev.textContent = "«";
    prev.setAttribute("data-page", "prev");
    if (currentPage === 1 || totalPages === 1) {
    prev.classList.add("disabled"); // Vô hiệu hóa nếu đang ở trang 1 hoặc chỉ có 1 trang
  }
    prev.addEventListener("click", () => {
      if (currentPage > 1) showPage(currentPage - 1);
    });
    pagination.appendChild(prev);
// Tạo các số trang
    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.textContent = i;
      li.setAttribute("data-page", i);
      if (i === currentPage) li.classList.add("active");
      li.addEventListener("click", () => showPage(i));
      pagination.appendChild(li);
    }
// Nút » Next
    const next = document.createElement("li");
    next.textContent = "»";
    next.setAttribute("data-page", "next");
     // Nếu chỉ có 1 trang hoặc đang ở cuối → disable
    if (currentPage === totalPages || totalPages === 1) {
       next.classList.add("disabled");
    }
    next.addEventListener("click", () => {
      if (currentPage < totalPages) showPage(currentPage + 1);
    });
    pagination.appendChild(next);
  }
  // Khởi tạo lần đầu khi trang vừa load
  createPagination();
  showPage(1);
});