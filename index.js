const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const dots = document.querySelectorAll(".dot");
const testimonials = [
  {
    img: "./assets/img/Ellipse.svg",
    name: "Mark Smith",
    role: "Home Owner",
    rating: 5,
    text: "After losing my car keys at the mall, I thought my day was ruined. But Bridge City Locksmith saved the day by creating a new key on-site in no time. Their service is efficient, affordable, and stress-free!",
  },
  {
    img: "./assets/img/Ellipse.svg",
    name: "Jane Doe",
    role: "Business Owner",
    rating: 5,
    text: "Our office had several outdated locks that were causing security concerns. Bridge City Locksmith not only replaced them with high-quality locks but also provided us with additional tips on how to keep our business secure. Their expertise is unmatched!",
  },
  {
    img: "./assets/img/Ellipse.svg",
    name: "John Doe",
    role: "Software Engineer",
    rating: 5,
    text: "I accidentally locked myself out of my home late at night, and Bridge City Locksmith came to the rescue within minutes! Their technician was professional, fast, and friendly. I couldn’t have asked for better service. Highly recommend them to anyone in need of reliable locksmith services!",
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
