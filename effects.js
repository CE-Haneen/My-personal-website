function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const currentBg = getComputedStyle(body).backgroundColor;

  if (currentBg === 'rgb(249, 249, 249)') {
    body.style.backgroundColor = '#121212';
    body.style.color = '#ffffff';
  } else {
    body.style.backgroundColor = '#f9f9f9';
    body.style.color = '#333333';
  }
}