let btn = document.querySelector(".info-input button"),
  input = document.querySelector(".info-input input"),
  errorIcon = document.querySelector(".info-input-error-icon"),
  errorMessage = document.querySelector(".info-input-error-message");

const handelSubmit = (e) => {
  let regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
  let status = regEx.test(input.value);
  console.log(status);
  if (input.value !== "" && status) {
    alert("Your email was send");
  } else {
    input.classList.add("active");
    errorIcon.classList.add("active");
    errorMessage.classList.add("active");
    setTimeout(() => {
      input.classList.remove("active");
      errorIcon.classList.remove("active");
      errorMessage.classList.remove("active");
    }, 2000);
  }
};

btn.addEventListener("click", handelSubmit);
