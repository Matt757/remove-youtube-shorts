# remove-youtube-shorts
A chrome extension that blocks YouTube videos from opening in the Shorts format.

I found that the YouTube Shorts format limits some of the usual features of normal YouTube videos such as the fact that you can not rewind or skip through videos. I created a simple chrome extension that listens for an update of the url, checks if it contains "youtube.com/shorts" and simply switches the "shorts" string with "watch" to load the video in the normal format.
