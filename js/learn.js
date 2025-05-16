// Hiện menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");

  hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
});

// Hiện dropdown
document.addEventListener('DOMContentLoaded', function () {
  const arrowBtn = document.querySelector('.arrow-btn');
  const dropdownContent = document.getElementById('cityMenu');

  arrowBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Ngăn chặn reload nếu là trong thẻ form/link
    dropdownContent.classList.toggle('show');
  });

  // Ẩn dropdown nếu click ngoài
  document.addEventListener('click', function (e) {
    if (!arrowBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});



// Hiện lên khi cuộn đến và ẩn khi cuộn xuống
document.addEventListener("DOMContentLoaded", function () {
  const info = document.querySelector(".image-info");

  function handleScroll() {
    const rect = info.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Nếu phần tử lọt vào khung nhìn
    if (rect.top < windowHeight && rect.bottom > 0) {
      info.classList.add("visible");
    } else {
      info.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 
});

// Hiện lên khi cuộn đến (1 lần duy nhất)
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal-once");

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Email Footer
const emailInput = document.getElementById("emailInput");
const errorMsg = document.getElementById("errorMsg");

function checkEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    alert("Email đã được gửi: " + email);
    emailInput.value = "";
  }
}

// Khi người dùng bắt đầu nhập, ẩn thông báo lỗi
emailInput.addEventListener("input", function () {
  if (emailInput.value.trim() !== "") {
    errorMsg.style.display = "none";
  }
});

// Khi người dùng nhấn Enter
emailInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Ngăn submit mặc định
    checkEmail();       // Gọi hàm kiểm tra
  }
});

// Hiện Đăng ký/ Đăng nhập
document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('userIcon');
    const userMenu = document.getElementById('userMenu');
    const userDropdown = document.querySelector('.user-dropdown');

    userIcon.addEventListener('click', function() {
        userMenu.style.display = (userMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Đóng dropdown khi nhấp chuột ra ngoài
    document.addEventListener('click', function(event) {
        if (userDropdown && !userDropdown.contains(event.target)) {
            userMenu.style.display = 'none';
        }
    });
});

// Back to top
const backToTopBtn = document.getElementById("backToTopBtn");
const zaloBtn = document.getElementById("zaloBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
    zaloBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
    zaloBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

