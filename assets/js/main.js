const animationContainer = document.getElementById("loading-animation");

if (animationContainer && window.lottie) {
  window.lottie.loadAnimation({
    container: animationContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "loading.json",
  });
}
