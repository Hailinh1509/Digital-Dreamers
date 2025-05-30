// Hiện menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Ngăn không cho sự kiện lan ra ngoài
    mainNav.classList.toggle("active");
  });

  // Ngăn click trong menu làm ẩn menu
  mainNav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Click ngoài menu -> ẩn menu
  document.addEventListener("click", () => {
    mainNav.classList.remove("active");
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

  
// Đăng xuất
function confirmLogout() {
    const confirmResult = confirm("Bạn chắc chắn muốn đăng xuất không?");
    if (confirmResult) {
        window.location.href = "index.html";
    }
}

  // Ẩn dropdown nếu click ngoài
  document.addEventListener('click', function (e) {
    if (!arrowBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownContent.classList.remove('show');
    }
  });
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

  emailInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Ngăn submit mặc định
      checkEmail();      
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





