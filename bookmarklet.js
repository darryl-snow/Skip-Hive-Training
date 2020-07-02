(function() {

  const isNextOrStartButton = (button) => {
    if (button.innerText.toLowerCase().indexOf("Start".toLowerCase()) >= 0) {
      return true;
    }
    if (button.innerText.toLowerCase().indexOf("Next".toLowerCase()) >= 0) {
      return true;
    }
  };

  const setTimer = () => {
    // Set the timer in action
    window.hiveHackTimer = setInterval(() => {
      let clicked = false;

      // Click any next or start buttons
      let buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        if (!clicked && isNextOrStartButton(button)) {
          button.click();
          clicked = true;
        }
      })

      // If nothing's been clicked yet (i.e. there are no Submit or Next or Start buttons), try looking for links that are intended to move the presentation forward
      if (!clicked) {
        let links = document.querySelectorAll('[title=next]');
        links.forEach((link) => {
          if(!clicked) {
            link.click();
            clicked = true;
          }
        })
      }

    }, 500);
  }

  if (typeof window.hiveHackTimerIsRunning !== 'undefined') {

    // If the timer is running, stop it, otherwise starts it
    if (typeof window.hiveHackTimer !== 'undefined' && window.hiveHackTimerIsRunning === true) {
        clearInterval(window.hiveHackTimer);
        window.hiveHackTimerIsRunning = false;
    } else {
      setTimer();
      window.hiveHackTimerIsRunning = true;
    }

  } else {
    setTimer();
    window.hiveHackTimerIsRunning = true;
  }

})();
