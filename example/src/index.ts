import dotenv from "dotenv"

import Captivate from "../../."

dotenv.config()

const SHOW_ID = "bae7a2f1-8cf5-46aa-b566-243bfbd837f7"
// const MEDIA_ID = "d376fde6-a49b-4a3d-917c-8001e956b1d7"
// const EPISODE_ID = "82b91907-6d18-4fef-9aaf-7bd8273b75fc"

const captivate = new Captivate(
    process.env.CAPTIVATE_USER_ID as string,
    process.env.CAPTIVATE_API_KEY as string,
)

// authentication

// captivate.authentication.authenticateUser()

// users

// captivate.users.getUser(process.env.CAPTIVATE_USER_ID as string).then(user => {
//     console.log(user)
// })

// captivate.users
//     .getUsersShows(process.env.CAPTIVATE_USER_ID as string)
//     .then(shows => {
//         console.log(shows)
//     })

// captivate.users
//     .getUsersManagedShows(process.env.CAPTIVATE_USER_ID as string)
//     .then(managedShows => {
//         console.log(managedShows)
//     })

// shows

// captivate.shows.getShow(SHOW_ID).then(show => {
//     console.log(show)
// })

// captivate.shows.updateShow()

// captivate.shows.updateShowArtwork()

// captivate.shows.getShowEpisodes(SHOW_ID).then(episodes => {
//     console.log(episodes)
// })

// captivate.shows.getShowScheduledEpisodes(SHOW_ID).then(scheduledEpisodes => {
//     console.log(scheduledEpisodes)
// })

// captivate.shows.getShowFeedUrl(SHOW_ID).then(feed => {
//     console.log(feed)
// })

// media

// captivate.media.getMedia(MEDIA_ID).then(media => {
//     console.log(media)
// })

// captivate.media.uploadMedia()

captivate.media.getShowMedia(SHOW_ID).then(showMedia => {
    console.log(showMedia)
})

// captivate.media.searchShowMedia()

// episodes

// captivate.episodes.getEpisode(EPISODE_ID).then(episode => {
//     console.log(episode)
// })

// captivate.episodes.createEpisode()

// captivate.episodes.updateEpisode()
