const form = document.getElementById("contact-form");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank You! We will contact you shortly");
    form.reset();
  });
