const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    products.forEach((product) => {
      const categories = product.dataset.category.split(" ");
      product.hidden = selected !== "all" && !categories.includes(selected);
    });
  });
});

document.querySelectorAll(".quick-view").forEach((button) => {
  button.addEventListener("click", () => {
    const active = button.classList.toggle("is-saved");
    button.textContent = active ? "♥" : "♡";
    button.style.color = active ? "#a77b4b" : "";
  });
});

document.getElementById("newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("form-message").textContent =
    "ممنون از همراهی شما! فرم نمایشی است و هنوز به سامانه ایمیل متصل نشده.";
  event.target.reset();
});
