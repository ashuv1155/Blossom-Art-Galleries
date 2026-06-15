document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add("bg-white/90", "backdrop-blur-xl", "border-b", "border-gray-200/50", "shadow-sm");
        navbar.classList.remove("bg-white", "border-b", "border-gray-100");
      } else {
        navbar.classList.remove("bg-white/90", "backdrop-blur-xl", "border-b", "border-gray-200/50", "shadow-sm");
        navbar.classList.add("bg-white", "border-b", "border-gray-100");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
  }

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const mobileMenuCloseIcon = document.getElementById("mobile-menu-close-icon");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        mobileMenuIcon.classList.remove("hidden");
        mobileMenuCloseIcon.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("hidden");
        mobileMenuIcon.classList.add("hidden");
        mobileMenuCloseIcon.classList.remove("hidden");
      }
    });
  }

  // --- Intersection Observer for Animations ---
  const observerOptions = {
    root: null,
    rootMargin: '-80px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
        entry.target.style.opacity = 1;
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    el.style.opacity = 0; // Set initial state
    observer.observe(el);
  });

  // --- Hero Parallax Effect ---
  const heroImg = document.getElementById("hero-img");
  const heroText = document.getElementById("hero-text");
  const heroSection = document.getElementById("hero-section");

  if (heroSection && (heroImg || heroText)) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const sectionHeight = heroSection.offsetHeight;
      if (scrollY <= sectionHeight) {
        const progress = scrollY / sectionHeight;
        if (heroImg) {
          heroImg.style.transform = `translateY(${progress * 28}%) scale(1.1)`;
        }
        if (heroText) {
          heroText.style.transform = `translateY(${progress * -18}%)`;
          heroText.style.opacity = Math.max(1 - (progress / 0.65), 0);
        }
      }
    });
  }

  // --- Product Dropdown ---
  const productDropdownTrigger = document.getElementById("product-dropdown-trigger");
  const productDropdownContent = document.getElementById("product-dropdown-content");
  
  if (productDropdownTrigger && productDropdownContent) {
    let timeoutId;
    
    productDropdownTrigger.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId);
      productDropdownContent.classList.remove("hidden");
    });
    
    productDropdownTrigger.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        productDropdownContent.classList.add("hidden");
      }, 150);
    });
    
    productDropdownContent.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId);
    });
    
    productDropdownContent.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        productDropdownContent.classList.add("hidden");
      }, 150);
    });
  }

  // --- Product Search Functionality ---
  const productSearchInput = document.getElementById("product-search");
  if (productSearchInput) {
    productSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterProducts(query);
    });
  }

  function filterProducts(query) {
    const products = document.querySelectorAll(".product-card");
    let visibleCount = 0;

    products.forEach(product => {
      const name = product.querySelector("h3")?.textContent.toLowerCase() || "";
      const category = product.dataset.category?.toLowerCase() || "";
      const isMatch = name.includes(query) || category.includes(query);

      if (isMatch) {
        product.style.display = "block";
        visibleCount++;
      } else {
        product.style.display = "none";
      }
    });

    const resultCount = document.getElementById("result-count");
    if (resultCount) {
      resultCount.textContent = visibleCount;
    }
  }

  // --- Global WhatsApp Inquiry Handler ---
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".whatsapp-btn");
    if (!btn) return;

    // Prevents default if it's a button, but allows if it's an <a> (homepage uses <a>)
    // If it has an href already, we might let it be, but for product.html which uses <button>, we need this.
    if (btn.tagName === "BUTTON") {
      e.preventDefault();
      
      const card = btn.closest(".group");
      if (!card) return;

      const productName = card.querySelector("h3")?.textContent.trim() || "Product";
      // Find BAG ID - it's usually in a div with BAG text
      const bagIdElement = Array.from(card.querySelectorAll("div")).find(el => el.textContent.includes("BAG"));
      const bagId = bagIdElement ? bagIdElement.textContent.trim() : "";
      
      const message = `Hello, I'm interested in ${bagId} (${productName}).`;
      const whatsappUrl = `https://wa.me/918657777055?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, "_blank");
    }
  });
});

