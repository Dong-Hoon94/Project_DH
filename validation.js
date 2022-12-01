let $form = document.querySelector("form");
let $id_ma = document.querySelector("#id_ma");
let $pw_first = document.querySelector("#pw_first");
let $pw_rd = document.querySelector("#pw_rd");
let $username_rd = document.querySelector("#username_rd");
let $gender_btn = document.querySelectorAll(".gender_inform button");
let $gender_inform = document.querySelector(".gender_inform");
let $Gender = document.querySelector("#Gender");


let $gender_M = document.querySelector("#gender_M");
let $gender_W = document.querySelector("#gender_W");

let userId = $form.id;
let userpw = $form.pw;
let userName = $form.username;
let pw_r = $form.pw_r;
let pw = $form.pw_first;
let pw_rd = $form.pw_rd;
 

let db = {
  userId: "kane5178",
  pw: "1234",
};

function ativeError(el) {
  el.classList.add("error");
  el.classList.remove("success");
}

function ativeSucess(el) {
  el.classList.remove("error");
  el.classList.add("success");
}

// id 유효성 검사(정규식으로 처리하기)
userId.addEventListener("blur", (e) => {
  console.log("입력완료");
  const idval = e.target.value;
  const idvalcheck = /^[a-z0-9]+$/;

  /*빈공간일때 검사*/
  if (userId.value === "") {
    $id_ma.innerText = "사용 하실 아이디를 입력해 주세요.";
    $id_ma.classList.remove("success");
    $id_ma.classList.add("error");
    return;
  }

  if (!idvalcheck.test(idval) || idval.length < 6) {
    $id_ma.innerText =
      "아이디는 영소문자 숫자로 구성된 6글자 이상으로 조합하세요.";
    $id_ma.style.padding = "3px";
    $id_ma.style.fontSize = "13px";
    $id_ma.style.width = "310px";
    $id_ma.style.display = "inline-block";
    ativeError($id_ma);
  } else {
    if (db.userId === userId.value) {
      $id_ma.innerText = "이미 사용중인 아이디입니다.";
      ativeError($id_ma);
    } else {
      $id_ma.innerText = "훌륭합니다 좋은 아이디이네요!";
      ativeSucess($id_ma);
    }
  }
});

userpw.addEventListener("blur", (e) => {
  if (userpw.value === "") {
    $pw_first.innerText = "비밀번호를 입력해주세요";
    ativeError($pw_first);
  } else {
    const pwval = e.target.value;
    const pwvalcheck = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    if (!pwvalcheck.test(pwval) || pwval <= 8) {
      $pw_first.style.padding = "3px";
      $pw_first.style.fontSize = "13px";
      $pw_first.style.width = "310px";
      $pw_first.style.display = "inline-block";
      $pw_first.innerText =
        "비밀번호는 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력하세요";
      ativeError($pw_first);
    } else {
      $pw_first.innerText = "훌륭합니다.";
      ativeSucess($pw_first);
    }
  }
});

pw_r.addEventListener("blur", (e) => {
  const pw_rVal = e.target.value; 
  if (pw_rVal === "" || pw_rVal.length < 8) {
    $pw_rd.innerText = "비밀번호를 다시 입력해주세요";
    ativeError($pw_rd);
  } 
  else {
    if (userpw.value === pw_rVal) {
      $pw_rd.innerText = "잘하셨습니다 모두 일치해요.";
      ativeSucess($pw_rd);
    } else {
      $pw_rd.innerText = "아이구 저런 일치하지 않아요 T.T";
      ativeError($pw_rd);
    }
  }
});

userName.addEventListener("blur", (e) => {
  const regex = /^[ㄱ-ㅎ|가-힣]+$/;
  const inputValue = e.target.value;
  if (!regex.test(inputValue)) {
    //false
    $username_rd.innerText = "한글로만 입력해주세요!";
    ativeError($username_rd);
  } else {
    $username_rd.innerText = "훌륭합니다.";

    ativeSucess($username_rd);
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log({ userpw, pw_r });
  // console.log($form.id);
});

Array.from($gender_btn).forEach((element) => {
  element.addEventListener("click", (e) => {
    const btnEl = e.target;
    // console.log(btnEl.id)

    let Chackcount = 0;
    if (btnEl.id === "gender_M") {
      btnEl.classList.toggle("active_btn_M");
    } else if (btnEl.id === "gender_W") {
      btnEl.classList.toggle("active_btn_W");
    } else {
    }

    if ($gender_M.className || $gender_W.className) {
      $Gender.innerText = "훌륭합니다.";
      ativeSucess($Gender);
    } else {
      $Gender.innerText = "성별을 선택해 주세요.";
      ativeError($Gender);
      return;
    }

    if ($gender_M.className && $gender_W.className) {
      $Gender.innerText = "성별은 하나만 선택하세요!";
      ativeError($Gender);
    }
  });
});
