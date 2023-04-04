// 버튼 클릭 이벤트 처리
function handleClick() {
  var command = document.getElementById('command-input').value;
  console.log('Command:', command);
  // 여기에 명령어를 처리하는 코드를 작성
}

// 버튼 클릭 이벤트 리스너 등록
document.getElementById('execute-button').addEventListener('click', handleClick);