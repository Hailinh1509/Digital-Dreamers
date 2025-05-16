document.addEventListener('DOMContentLoaded', function () {
   // Lấy các thành phần trong DOM cần dùng
  const citySelect = document.getElementById('citySelect');
  const recommendedSection = document.querySelector('#recommended-events .event-list');
  const eventItems = recommendedSection.querySelectorAll('.event-item');
  const pagination = document.getElementById("pagination");
  const itemsPerPage = 6;// Số item mỗi trang
  let currentPage = 1;
  // Mảng chứa các item đang hiển thị (theo lọc hoặc tất cả)
  let filteredItems = Array.from(eventItems); // Bắt đầu với toàn bộ item

 //1. Khi người dùng thay đổi thành phố → lọc lại sự kiện
  citySelect.addEventListener('change', function () {
    const selectedCity = this.value;
    // Lọc theo thành phố, đồng thời cập nhật trạng thái ẩn/hiện
    filteredItems = Array.from(eventItems).filter(item => {
      const eventCity = item.getAttribute('data-city');
      const match = selectedCity === 'all' || selectedCity === eventCity;
      item.classList.toggle("hidden", !match);// Ẩn nếu không khớp
      return match;
    });
    createPagination();// Tạo lại phân trang
    showPage(1); // Hiển thị lại trang đầu
  });
//2.loc su kien
document.addEventListener('DOMContentLoaded', function () {
  const categorySelect = document.getElementById('categorySelect');
  const recommendedSection = document.querySelector('#recommended-events .event-list');
  const eventItems = recommendedSection.querySelectorAll('.event-item');

  categorySelect.addEventListener('change', function () {
    const selectedCategory = this.value;

    eventItems.forEach(item => {
      const eventCategory = item.getAttribute('data-category');
      
      if (selectedCategory === 'all' || selectedCategory === eventCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
//3.phan trangtrang
// Hàm hiển thị các item trong trang tương ứng
  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

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
//5. chinh blog bang anh
const track = document.querySelector('.slider-track');
  const dots = document.querySelectorAll('.dot');
  const images = document.querySelectorAll('.slider-track img');
  const sidebar = document.querySelector('.sidebar-container');

  let index = 0;

  function syncSidebarHeight() {
    if (!sidebar || !images[index]) return;
    sidebar.style.height = `${images[index].offsetHeight}px`;
  }

  function showSlide(i) {
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
    index = i;
    syncSidebarHeight(); // Cập nhật chiều cao mỗi lần đổi ảnh
  }

  function nextSlide() {
    index = (index + 1) % dots.length;
    showSlide(index);
  }

  let interval = setInterval(nextSlide, 3000); // Auto slide

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      clearInterval(interval);
      interval = setInterval(nextSlide, 4000); // Reset timer
    });
  });

  window.addEventListener('load', () => {
    showSlide(index); // Hiển thị ảnh đầu và set chiều cao
  });
 window.addEventListener('resize', syncSidebarHeight); // Cập nhật khi resize
//6. slider
let currentIndex = 0;

function scrollSlider(direction) {
  const slider = document.getElementById("slider");
  const cardWidth = 420; // width + gap
  const maxIndex = slider.children.length - 2;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
