const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  response.ok ? document.location.replace("/") : alert(response.statusText);
};

document.querySelector("#logout").addEventListener("click", logout);
