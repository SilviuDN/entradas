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

// MODAL-2
const moreInfoButtons = document.querySelectorAll(".embbedInModal");
const infoModal = document.querySelector("#info-modal");
const infoModalContent = document.querySelector(".info-modal-content");
const closeModalButton2 = document.querySelector(".close-2");

moreInfoButtons.forEach(button => {
  button.addEventListener("click", function() {
    const url = this.dataset.pageUrl;
    infoModalContent.innerHTML = `<iframe src="${url}"></iframe>`;
    infoModal.style.display = "block";
  });
});

closeModalButton2.addEventListener("click", function() {
  infoModal.style.display = "none";
  infoModalContent.innerHTML = "";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    videoPlayer.src = "";
  }
  if (event.target == infoModal) {
    infoModal.style.display = "none";
    infoModalContent.innerHTML = "";
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