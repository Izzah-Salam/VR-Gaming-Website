// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("autoDisplay");
//         } else {
//           entry.target.classList.remove("autoDisplay");
//         }
//       });
//     },
//     { threshold: 0.3 } // Trigger animation when 30% of the card is visible
//   );

  cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".lazy-video");

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const src = video.getAttribute("data-src");
        if (src) {
          video.setAttribute("src", src); // Set the src to start loading the video
          video.removeAttribute("data-src"); // Remove the lazy data-src
        }
        observer.unobserve(video); // Stop observing the video
      }
    });
  });

  videos.forEach((video) => videoObserver.observe(video));
});
