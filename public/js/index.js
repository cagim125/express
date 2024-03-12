// 버튼 요소 가져오기 
const showForm = document.getElementById('showForm');
const inputForm = document.getElementById('inputForm');

showForm.addEventListener("click", () => {
    if(inputForm.style.display === 'block'){
        inputForm.style.display = 'none';
    } else {
        inputForm.style.display = 'block';
    }
});

//fetch('card.html') // 외부 HTML 파일을 가져옵니다.
//    .then(response => response.text()) // 텍스트로 변환합니다.
//    .then(html => {
//        // 카드를 삽입할 컨테이너를 찾습니다.
//        const cardContainer = document.getElementById('card-container');
//        // 가져온 HTML을 컨테이너에 삽입합니다.
//        cardContainer.innerHTML = html;
//    })
//    .catch(error => console.error('Error fetching card:', error));