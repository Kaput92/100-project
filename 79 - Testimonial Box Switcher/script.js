const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const usersname = document.querySelector(".username");
const twitterHandle = document.querySelector(".twitter-handle");

const testimonials = [
  {
    name: "Giulio",
    position: "@giulio",
    photo:
      "https://randomuser.me/api/portraits/men/41.jpg",
    text: "If I had to recommend a way of getting into programming today, it would be HTML + CSS with @tailwindcss The RoI is just incredible. This responsive demo is just ~21 custom CSS props. The whole thing is mostly built-in tailwind classes and vanilla HTML.",
  },
  {
    name: "Dacey",
    position: "@dacey",
    photo:
      "https://randomuser.me/api/portraits/women/42.jpg",
    text: "I started using @tailwindcss. I instantly fell in love with their responsive modifiers, thorough documentation, and how easy it was customizing color palettes.",
  },
  {
    name: "Sarah",
    position: "@sarah",
    photo:
      "https://randomuser.me/api/portraits/women/41.jpg",
    text: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling.",
  },
  {
    name: "Igor",
    position: "@igor",
    photo:
      "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Tailwind clicked for me almost immediately. I can't picture myself writing another BEM class ever again. Happy user since the first public release! Productivity is at an all time high, thanks to @tailwindcss",
  },
  {
    name: "Danny",
    position: "@danny",
    photo:
      "https://randomuser.me/api/portraits/men/44.jpg",
    text: "CSS has always been the hardest part of offering a digital service. It made me feel like a bad developer. Tailwind gives me confidence in web development again. Their docs are my first port of call.",
  },
  {
    name: "Sergio",
    position: "@serj",
    photo:
      "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I thought 'Why would I need Tailwind CSS? I already know CSS and use Bootstrap', but after giving it a try I decided to switch all my projects to Tailwind.",
  },
  {
    name: "marck",
    position: "@marck",
    photo:
      "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Before Tailwind CSS I was banging my head against the wall trying to make sense of my CSS spaghetti. Now I am banging my head against the wall wondering why I didn't try it earlier. My head hurts and my wall has a big hole in it. But at least using CSS is pleasant again!",
  },
];

let counter = 1;

function showNextTestimonial() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  usersname.innerHTML = name;
  twitterHandle.innerHTML = position;

  counter++;

  if (counter > testimonials.lenght - 1) {
    counter = 0;
  }

}
setInterval(showNextTestimonial, 10000);