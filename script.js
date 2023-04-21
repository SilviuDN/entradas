const verTrailerButtons = document.querySelectorAll(".ver-trailer-btn");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");
const videoPlayer = document.querySelector("#video-player");
const closeModalButton = document.querySelector(".close");

verTrailerButtons.forEach(button => {
  button.addEventListener("click", function() {
    const videoId = this.dataset.videoId;
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
    modal.style.display = "block";
  });
});

closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
  videoPlayer.src = "";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    videoPlayer.src = "";
  }
});


// const button = document.querySelector('.ver-trailer-btn');
// const videoContainer = document.querySelector('#video-container');

// button.addEventListener('click', () => {
//   const videoId = 'Wo9yT9DEvg8';
//   const iframe = document.createElement('iframe');
//   iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
//   iframe.setAttribute('allowfullscreen', '');
//   iframe.setAttribute('width', '560');
//   iframe.setAttribute('height', '315');
//   videoContainer.appendChild(iframe);
// });