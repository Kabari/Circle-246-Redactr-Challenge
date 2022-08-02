function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // console.log('make magic in here!');

  // const header = document.querySelector('h2');
  // if (header) {
  //   header.textContent = 'make some magic here!!';
  // }

  window.addEventListener("load", () => {
    //preloader
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 2000);
  });

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //