import { validateID, validatepassword } from "../HTML/Project1/validation.js";

const db = [
  {
    id: 1,
    email: "qwert123@naver.com",
    pw: "123456",
  },
  {
    id: 2,
    email: "aasd123@gmail.com",
    pw: "123456",
  },
  {
    id: 3,
    email: "qwqw123@gmail.com",
    pw: "123456",
  },
];

const userId = "qwert123@naver.com";
const validatedUserID = validateID(userId);

function findUser(db, userId) {
  return db.find((user) => user.email === userId);
}
function loginProcess() {
  const user = findUser(db, validatedUserID);
  return { msg: "로그인 완료", user };
}

const result = loginProcess();
console.log(result);

console.log("====");