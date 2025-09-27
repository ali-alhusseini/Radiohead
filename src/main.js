const track = document.querySelector(".carousel-track");
const albumWidth = 300 + 10; // image width + gap (adjust if needed)

function scrollCarousel(direction) {
  track.scrollBy({
    left: direction * albumWidth * 2, // scroll by 2 albums
    behavior: "smooth",
  });
}
