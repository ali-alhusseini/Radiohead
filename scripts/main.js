const track = document.querySelector(".carousel-track");
const albumWidth = 300 + 10;

function scrollCarousel(direction) {
    track.scrollBy({
        left: direction * albumWidth * 2, // scroll by 2 albums
        behavior: "smooth",
    });
}

document.querySelector(".copy-url").addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert("URL copied to clipboard!");
    });
});