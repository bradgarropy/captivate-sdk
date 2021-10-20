import {authenticateUser} from "./authentication"
import {getEpisode} from "./episodes"
import {getShow, getShowEpisodes} from "./shows"
import {Episode, Show, User} from "./types"

class Captivate {
    userId: string
    apiKey: string
    token: User["token"] | null

    constructor(userId: string, apiKey: string) {
        this.userId = userId
        this.apiKey = apiKey
        this.token = null
    }

    authentication = {
        authenticateUser: async (): Promise<User> => {
            const user = await authenticateUser(this.userId, this.apiKey)
            this.token = user.token
            return user
        },
    }

    users = {
        getUser: () => {
            // TODO
        },
        getUsersShows: () => {
            // TODO
        },
        getUsersManagedShows: () => {
            // TODO
        },
    }

    shows = {
        getShow: async (showId: Show["id"]): Promise<Show> => {
            await this.authentication.authenticateUser()

            const show = await getShow(this.token as string, showId)
            return show
        },
        updateShow: () => {
            // TODO
        },
        updateShowArtwork: () => {
            // TODO
        },
        getShowEpisodes: async (showId: Show["id"]): Promise<Episode[]> => {
            await this.authentication.authenticateUser()

            const episodes = await getShowEpisodes(this.token as string, showId)
            return episodes
        },
        getShowScheduledEpisodes: () => {
            // TODO
        },
        getShowFeedUrl: () => {
            // TODO
        },
    }

    media = {
        getMedia: () => {
            // TODO
        },
        uploadMedia: () => {
            // TODO
        },
        getShowMedia: () => {
            // TODO
        },
        searchShowMedia: () => {
            // TODO
        },
    }

    episodes = {
        getEpisode: async (episodeId: Episode["id"]): Promise<Episode> => {
            await this.authentication.authenticateUser()

            const episode = await getEpisode(this.token as string, episodeId)
            return episode
        },
        createEpisode: () => {
            // TODO
        },
        updateEpisode: () => {
            // TODO
        },
    }
}

export default Captivate
