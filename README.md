# Hive Training Hack

Skip all of the reading and skip straight to the tests on sabacloud.com Hive training courses.

It works by auto-clicking any button that has the word "Next" or "Start" in it (case insensitive), or any links with the title "Next". That means it should just skip to the sections where you need to answer questions. If you get any questions wrong, you should be able to retry them.

## Instructions:

[Skip Training](javascript%3A(function()%7Bconst%20a%3Da%3D%3E!!(0%3C%3Da.innerText.toLowerCase().indexOf(%22Start%22.toLowerCase()))%7C%7C!!(0%3C%3Da.innerText.toLowerCase().indexOf(%22Next%22.toLowerCase()))%7C%7Cvoid%200%2Cb%3D()%3D%3E%7Bwindow.hiveHackTimer%3DsetInterval(()%3D%3E%7Blet%20b%3D!1%2Cc%3Ddocument.querySelectorAll(%22button%22)%3Bif(c.forEach(c%3D%3E%7B!b%26%26a(c)%26%26(c.click()%2Cb%3D!0)%7D)%2C!b)%7Blet%20a%3Ddocument.querySelectorAll(%22%5Btitle%3D%5C%22next%5C%22%5D%22)%3Ba.forEach(a%3D%3E%7Bb%7C%7C(a.click()%2Cb%3D!0)%7D)%7D%7D%2C500)%7D%3B%22undefined%22%3D%3Dtypeof%20window.hiveHackTimerIsRunning%3F(b()%2Cwindow.hiveHackTimerIsRunning%3D!0)%3A%22undefined%22!%3Dtypeof%20window.hiveHackTimer%26%26!0%3D%3D%3Dwindow.hiveHackTimerIsRunning%3F(clearInterval(window.hiveHackTimer)%2Cwindow.hiveHackTimerIsRunning%3D!1)%3A(b()%2Cwindow.hiveHackTimerIsRunning%3D!0)%7D)()%3B)

1. Drag that link 👆🏻 to your bookmark bar.
2. Open the training course in the 'Content Player' popup window.
3. In Google Chrome, select Window > Show As Tab. You should now see your bookmark bar with the 'Skip Training' link in it; if you don't see the bookmarks bar, go to View > Always Show Bookmarks Bar.
4. Click the 'Skip Training' bookmark.
5. If you want to pause or resume the skippage, just click the bookmark again.

If anything goes wrong, you may need to close the window and start again. And [let me know](mailto:darryl@darrylsnow.com).

## Limitations

* Only works for English language training courses
* Only tested in Google Chrome
