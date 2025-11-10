/* Place your JavaScript in this file */
function changeTwentySixScheduleAudio(newAudioLink, currentTitle) {
                const audioPlayer = document.getElementById('2026Schedule')
                const audioSource = document.getElementById('2026ScheduleSrc')
                const playingTitle = document.getElementById('2026ScheduleCurrentPlay')

                // Update the visible title immediately
                if (playingTitle) playingTitle.textContent = currentTitle

                // Some browsers are more reliable if you set the audio element's src directly
                // instead of updating the inner <source> element and calling load().
                if (audioPlayer) {
                        try {
                                audioPlayer.src = newAudioLink
                                // reload the element to pick up the new source
                                audioPlayer.load()
                                // Play returns a promise in modern browsers — handle errors (autoplay policies)
                                const playPromise = audioPlayer.play()
                                if (playPromise !== undefined) {
                                        playPromise.then(() => {
                                                console.log('Playback started for:', newAudioLink)
                                        }).catch((err) => {
                                                console.warn('Playback prevented or failed:', err)
                                        })
                                }
                        } catch (e) {
                                console.error('Error updating/playing audio:', e)
                        }
                } else if (audioSource) {
                        // Fallback: update <source> if audio element not present for some reason
                        audioSource.src = newAudioLink
                }
           }
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