# Emosong
The Emosong is a cross-application service which utilizes the data on users' social media to create playlist which matches with their moods.
It contains several parts:
1. A cordova mobile app which asks for user authorization to third party like sportify, twitter (folder: Emosong)
2. A ack-end server which interacts with the mobile app (folder: em-server)
3. A eb-crawler which grabs music data from musixmatch and utilizes the sentiment analysis library from Microsoft Azure (folder: Library Generator)
4. A monitor which detects user mood through their social media account and then create the music list for them.


