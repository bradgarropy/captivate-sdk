const Captivate = require("../.")
const dotenv = require("dotenv")

dotenv.config()

const SHOW_ID = "bae7a2f1-8cf5-46aa-b566-243bfbd837f7"
const EPISODE_ID = "82b91907-6d18-4fef-9aaf-7bd8273b75fc"

const captivate = new Captivate(
    process.env.CAPTIVATE_USER_ID,
    process.env.CAPTIVATE_API_KEY,
)

captivate.getShow(SHOW_ID).then(show => {
    console.log(show)
})

captivate.getShowEpisodes(SHOW_ID).then(episodes => {
    console.log(episodes)
})

captivate.getEpisode(EPISODE_ID).then(episode => {
    console.log(episode)
})
