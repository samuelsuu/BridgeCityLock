const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dots = document.querySelectorAll(".dot");
const testimonials = [
  {
    img: "./assets/img/Ellipse.svg",
    name: "Mark Smith",
    role: "Home Owner",
    rating: 5,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    img: "./assets/img/Ellipse.svg",
    name: "Jane Doe",
    role: "Business Owner",
    rating: 5,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    img: "./assets/img/Ellipse.svg",
    name: "John Doe",
    role: "Software Engineer",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

let currentIndex = 0;

function renderTestimonial(index) {
  const testimonialCard = document.querySelector(".testimonial-card");
  const { img, name, role, rating, text } = testimonials[index];

  testimonialCard.querySelector(".user-img").src = img;
  testimonialCard.querySelector("h3").innerHTML = `${name} <span>/ ${role}</span>`;
  testimonialCard.querySelector(".stars").innerHTML = "★".repeat(rating);
  testimonialCard.querySelector("p").textContent = text;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
});

rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    renderTestimonial(currentIndex);
  });
});

// Initial render
renderTestimonial(currentIndex);
