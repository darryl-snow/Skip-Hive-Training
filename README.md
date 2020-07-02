# Hive Training Hack

Skip all of the reading and skip straight to the tests on sabacloud.com Hive training courses.

It works by auto-clicking any button that has the word "Next" or "Start" in it (case insensitive), or any links with the title "Next". That means it should just skip to the sections where you need to answer questions. If you get any questions wrong, you should be able to retry them.

## Instructions:

<a href="javascript:(function(){const a=a=>!!(0<=a.innerText.toLowerCase().indexOf("Start".toLowerCase()))||!!(0<=a.innerText.toLowerCase().indexOf("Next".toLowerCase()))||void 0,b=()=>{window.hiveHackTimer=setInterval(()=>{let b=!1,c=document.querySelectorAll("button");if(c.forEach(c=>{!b&&a(c)&&(c.click(),b=!0)}),!b){let a=document.querySelectorAll("[title=\"next\"]");a.forEach(a=>{b||(a.click(),b=!0)})}},500)};"undefined"==typeof window.hiveHackTimerIsRunning?(b(),window.hiveHackTimerIsRunning=!0):"undefined"!=typeof window.hiveHackTimer&&!0===window.hiveHackTimerIsRunning?(clearInterval(window.hiveHackTimer),window.hiveHackTimerIsRunning=!1):(b(),window.hiveHackTimerIsRunning=!0)})();" title="Skip it!">Skip Training</a>

1. Drag that link 👆🏻 to your bookmark bar.
2. Open the training course in the 'Content Player' popup window.
3. In Google Chrome, select Window > Show As Tab. You should now see your bookmark bar with the 'Skip Training' link in it; if you don't see the bookmarks bar, go to View > Always Show Bookmarks Bar.
4. Click the 'Skip Training' bookmark.
5. If you want to pause or resume the skippage, just click the bookmark again.

If anything goes wrong, you may need to close the window and start again. And [let me know](mailto:darryl@darrylsnow.com).

## Limitations

* Only works for English language training courses
* Only tested in Google Chrome
