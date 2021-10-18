import FormData from "form-data"
import fetch from "node-fetch"

import {
    AuthenticateUserResponse,
    Episode,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
    Show,
    User,
} from "./types"

class Captivate {
    userId: string
    apiKey: string
    token: User["token"] | null

    private API_URL = "https://api.captivate.fm"

    constructor(userId: string, apiKey: string) {
        this.userId = userId
        this.apiKey = apiKey
        this.token = null
    }

    authenticateUser = async (): Promise<User> => {
        const form = new FormData()

        form.append("username", this.userId)
        form.append("token", this.apiKey)

        const response = await fetch(`${this.API_URL}/authenticate/token`, {
            method: "POST",
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            body: form,
            redirect: "follow",
        })

        const json: AuthenticateUserResponse = await response.json()
        this.token = json.user.token

        return json.user
    }

    getShow = async (showId: Show["id"]): Promise<Show> => {
        await this.authenticateUser()

        const response = await fetch(`${this.API_URL}/shows/${showId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            redirect: "follow",
        })

        const json: GetShowResponse = await response.json()
        return json.show
    }

    getShowEpisodes = async (showId: Show["id"]): Promise<Episode[]> => {
        await this.authenticateUser()

        const response = await fetch(
            `${this.API_URL}/shows/${showId}/episodes`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${this.token}`,
                },
                redirect: "follow",
            },
        )

        const json: GetShowEpisodesResponse = await response.json()
        return json.episodes
    }

    getEpisode = async (episodeId: Episode["id"]): Promise<Episode> => {
        await this.authenticateUser()

        const response = await fetch(`${this.API_URL}/episodes/${episodeId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            redirect: "follow",
        })

        const json: GetEpisodeResponse = await response.json()
        return json.episode
    }
}

export default Captivate
