function displayDate() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateElement.textContent = `${year}년${month}월${day}일`;
}

// 페이지가 로드될 때 displayDate 함수 호출
document.addEventListener('DOMContentLoaded', function() {
    displayDate();
});