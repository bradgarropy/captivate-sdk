import {authenticateUser} from "./authentication"
import {getEpisode} from "./episodes"
import {getMedia, getShowMedia} from "./media"
import {
    getShow,
    getShowEpisodes,
    getShowFeedUrl,
    getShowScheduledEpisodes,
} from "./shows"
import {
    AuthenticatedUser,
    Episode,
    Feed,
    ManagedShow,
    Media,
    ScheduledEpisode,
    Show,
    User,
} from "./types"
import {getUser, getUsersManagedShows, getUsersShows} from "./users"

class Captivate {
    userId: string
    apiKey: string
    token: AuthenticatedUser["token"] | null

    constructor(userId: string, apiKey: string) {
        this.userId = userId
        this.apiKey = apiKey
        this.token = null
    }

    authentication = {
        authenticateUser: async (): Promise<AuthenticatedUser> => {
            const authenticatedUser = await authenticateUser(
                this.userId,
                this.apiKey,
            )

            this.token = authenticatedUser.token
            return authenticatedUser
        },
    }

    users = {
        getUser: async (userId: User["id"]): Promise<User> => {
            await this.authentication.authenticateUser()

            const user = await getUser(this.token as string, userId)
            return user
        },
        getUsersShows: async (userId: User["id"]): Promise<Show[]> => {
            await this.authentication.authenticateUser()

            const shows = await getUsersShows(this.token as string, userId)
            return shows
        },
        getUsersManagedShows: async (
            userId: User["id"],
        ): Promise<ManagedShow[]> => {
            await this.authentication.authenticateUser()

            const shows = await getUsersManagedShows(
                this.token as string,
                userId,
            )

            return shows
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
        getShowScheduledEpisodes: async (
            showId: Show["id"],
        ): Promise<ScheduledEpisode[]> => {
            await this.authentication.authenticateUser()

            const scheduledEpisodes = await getShowScheduledEpisodes(
                this.token as string,
                showId,
            )

            return scheduledEpisodes
        },
        getShowFeedUrl: async (showId: Show["id"]): Promise<Feed> => {
            await this.authentication.authenticateUser()

            const feed = await getShowFeedUrl(this.token as string, showId)
            return feed
        },
    }

    media = {
        getMedia: async (mediaId: Media["id"]): Promise<Media> => {
            await this.authentication.authenticateUser()

            const media = await getMedia(this.token as string, mediaId)
            return media
        },
        uploadMedia: () => {
            // TODO
        },
        getShowMedia: async (showId: Show["id"]): Promise<Media[]> => {
            await this.authentication.authenticateUser()

            const showMedia = await getShowMedia(this.token as string, showId)
            return showMedia
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
