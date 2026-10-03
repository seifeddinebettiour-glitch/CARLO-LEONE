document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  if (button) {
    button.addEventListener("click", () => {
      document.querySelector("#storia").scrollIntoView({ behavior: "smooth" });
    });
  }
});
