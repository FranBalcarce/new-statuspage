const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code");

if (code) {
  document.getElementById("login").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  fetch(
    "https://us-east-2irsusw7ld.auth.us-east-2.amazoncognito.com/login?client_id=6vn8g1jf6o3ir970ku0kn57okv&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A3000",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "6vn8g1jf6o3ir970ku0kn57okv",
        code: code,
        redirect_uri: "http://localhost:3000",
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Tokens recibidos:", data);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("id_token", data.id_token);
    })
    .catch((err) => console.error("Error al obtener tokens:", err));
} else {
  const token = localStorage.getItem("access_token");
  if (token) {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "/";
}
