// !setting the behavior when clicked
const reveal = document.querySelectorAll(".faqs");
reveal.forEach((s) => {
  s.addEventListener("click", () => {
    s.classList.toggle("active");
  });
});
