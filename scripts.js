/* Place your JavaScript in this file */
function changeOldNewVolOneAudio(newAudioLink, currentTitle) {
        const audioPlayer = document.getElementById('oldNewVolOne')
        const audioSource = document.getElementById('oldNewVolOneSrc')
        const playingTitle = document.getElementById('oldNewVolOneCurrentPlay')

        playingTitle.innerHTML = currentTitle
        audioSource.src = newAudioLink
        audioPlayer.load()
        audioPlayer.play()
       }

function changeOldNewVolTwoAudio(newAudioLink, currentTitle) {
        const audioPlayer = document.getElementById('oldNewVolTwo')
        const audioSource = document.getElementById('oldNewVolTwoSrc')
        const playingTitle = document.getElementById('oldNewVolTwoCurrentPlay')

        playingTitle.innerHTML = currentTitle
        audioSource.src = newAudioLink
        audioPlayer.load()
        audioPlayer.play()
       }

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})