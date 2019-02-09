
  let width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  let height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  // console.log(width)
  // console.log(height)

  const message = `la taille de l'écran est : ${width} x ${height}`;
  const element = document.getElementById("cible");
    element.innerHTML = message;

  const text = "Message ajouté en javascript";
    element.insertAdjacentHTML('afterend', text);

  const team = ["flo", "serge", "nathou", "bob"];

team.forEach((item) => {
  element.insertAdjacentHTML(item.toUpperCase());
});

