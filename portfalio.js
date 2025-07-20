const video1 = document.getElementById("projectVideo1");
const video2 = document.getElementById("projectVideo2");
const video3 = document.getElementById("projectVideo3");

const videoslist = [video1, video2, video3];

videoslist.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});


const sideBar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

// Open sidebar
menuIcon.addEventListener('click', () => {
    sideBar.classList.add('open-sidebar');
});
closeIcon.addEventListener('click', () => {
    sideBar.classList.remove('open-sidebar');
});