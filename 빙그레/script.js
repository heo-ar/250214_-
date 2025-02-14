document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("ham-btn");
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const nextBtn = document.getElementById('next-btn');  // 오른쪽 화살표 버튼

    // 햄버거 버튼 클릭 시 메뉴 열기/닫기
    hamburgerBtn.addEventListener("click", function () {
        console.log("햄버거 메뉴 클릭됨!"); 
        this.classList.toggle("active"); 
        fullscreenMenu.classList.toggle("active"); 
    });

    // 메뉴 영역 밖 클릭 시 닫기
    fullscreenMenu.addEventListener("click", function (event) {
        if (event.target === fullscreenMenu) {
            fullscreenMenu.classList.remove("active");
            hamburgerBtn.classList.remove("active"); 
        }
    });

    // 오른쪽 화살표 클릭 시 스크롤
    nextBtn.addEventListener('click', function() {
        const section = document.querySelector('.section');
        const items = document.querySelectorAll('.product-item');
        const itemWidth = items[0].offsetWidth + 20; // 이미지의 너비와 간격을 더한 값
        section.scrollBy({ left: itemWidth, behavior: 'smooth' }); // 오른쪽으로 스크롤
    });
});
