function swap() {
  var title = document.getElementById("title");
  if (title.innerHTML === "Login") {
    title.innerHTML = "Signup";
  } else {
    title.innerHTML = "Login";
  }
  var swap = document.getElementById("swap");
  if (swap.innerHTML === "Don't Have An Account?") {
    swap.innerHTML = "Have An Account?";
  } else {
    swap.innerHTML = "Don't Have An Account?";
  }
  var submit = document.getElementById("submit");
  if (submit.innerHTML === "Sign-in") {
    submit.innerHTML = "Sign-up";
  } else {
    submit.innerHTML = "Sign-in";
  }
}

document.getElementById("swap").addEventListener("click", swap);
