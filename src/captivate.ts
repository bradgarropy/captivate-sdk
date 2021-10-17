import FormData from "form-data"
import fetch from "node-fetch"

import {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
} from "./types"

class Captivate {
    userId: string
    apiKey: string
    token: string | null

    private API_URL = "https://api.captivate.fm"

    constructor(userId: string, apiKey: string) {
        this.userId = userId
        this.apiKey = apiKey
        this.token = null
    }

    authenticateUser = async (): Promise<AuthenticateUserResponse> => {
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

        const authenticatedUser: AuthenticateUserResponse = await response.json()
        this.token = authenticatedUser.user.token

        return authenticatedUser
    }

    getShow = async (showId: string): Promise<GetShowResponse> => {
        await this.authenticateUser()

        const response = await fetch(`${this.API_URL}/shows/${showId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            redirect: "follow",
        })

        const show: GetShowResponse = await response.json()
        return show
    }

    getShowEpisodes = async (
        showId: string,
    ): Promise<GetShowEpisodesResponse> => {
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

        const showEpisodes: GetShowEpisodesResponse = await response.json()
        return showEpisodes
    }

    getEpisode = async (episodeId: string): Promise<GetEpisodeResponse> => {
        await this.authenticateUser()

        const response = await fetch(`${this.API_URL}/episodes/${episodeId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
            redirect: "follow",
        })

        const episode: GetEpisodeResponse = await response.json()
        return episode
    }
}

export default Captivate
