// 이미지 및 리소스 로드 후 코드 실행
window.onload = () => {
  // 모바일 메뉴 버튼 처리
  // 1. 모바일 버튼을 찾아서 저장한다.
  let mbBt = document.querySelector(".mb-bt");
  // 2. 모바일 메뉴를 찾아서 저장한다.
  let mbNav = document.querySelector(".mb-nav");
  // 3. 로고를 ㄹ찾아서 저장한다
  let logo = document.querySelector(".logo");
  // 4.header를  찾아서 저장한다.
  let header = document.querySelector(".header");
  // 5. .gnb > li > a
  let gnbA = document.querySelectorAll(".gnb > li > a");
  console.log(gnbA);

  // 4. 모바일 버튼 클릭을 하면
  mbBt.addEventListener("click", (e) => {
    console.log(mbBt.classList);
    // 로고에 active 클래스를 추가한다.
    logo.classList.toggle("active-blue");
    // 모바일 버튼에 active 클래스를 추가한다.
    mbBt.classList.toggle("active");
    //모바일 메뉴에 active 클래스를 추가한다.
    mbNav.classList.toggle("active");
  });
  // 화면 리사이징 처리
  window.addEventListener("resize", (e) => {
    // window 의 화면 안쪽 너비 체크
    // console.log(window.innerWidth);
    let wW = window.innerWidth;
    if (wW > 1080) {
      // 모바일 버튼에 active 클래스를 추가한다.
      mbBt.classList.remove("active");
      //모바일 메뉴에 active 클래스를 추가한다.
      mbNav.classList.remove("active");
    }
  });
  //   window 스크롤 처리
  window.addEventListener("scroll", (e) => {
    // 스크롤바가 스크롤이 된 픽셀 값을 파악
    let scT = window.document.documentElement.scrollTop;
    // 조금이라도 스크롤을 했다면 처리한다.
    if (scT > 100) {
      header.classList.add("active");
      logo.classList.add("active");
      gnbA.forEach((item)=> {
        item.classList.add("active")
      })
    } else {
      header.classList.remove("active");
      logo.classList.remove("active");
      gnbA.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });
};
