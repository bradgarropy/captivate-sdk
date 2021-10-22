import fetch from "node-fetch"

import {API_URL} from "./constants"
import {
    AuthenticatedUser,
    Episode,
    Feed,
    GetShowEpisodesResponse,
    GetShowFeedUrlResponse,
    GetShowResponse,
    GetShowScheduledEpisodesResponse,
    ScheduledEpisode,
    Show,
} from "./types"

const getShow = async (
    token: AuthenticatedUser["token"],
    showId: Show["id"],
): Promise<Show> => {
    const response = await fetch(`${API_URL}/shows/${showId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetShowResponse = await response.json()
    return json.show
}

const updateShow = () => {
    // TODO
}

const updateShowArtwork = () => {
    // TODO
}

const getShowEpisodes = async (
    token: AuthenticatedUser["token"],
    showId: Show["id"],
): Promise<Episode[]> => {
    const response = await fetch(`${API_URL}/shows/${showId}/episodes`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetShowEpisodesResponse = await response.json()
    return json.episodes
}

const getShowScheduledEpisodes = async (
    token: AuthenticatedUser["token"],
    showId: Show["id"],
): Promise<ScheduledEpisode[]> => {
    const response = await fetch(
        `${API_URL}/shows/${showId}/episodes/scheduled`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            redirect: "follow",
        },
    )

    const json: GetShowScheduledEpisodesResponse = await response.json()
    return json.episodes
}

const getShowFeedUrl = async (
    token: AuthenticatedUser["token"],
    showId: Show["id"],
): Promise<Feed> => {
    const response = await fetch(`${API_URL}/shows/${showId}/feed`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetShowFeedUrlResponse = await response.json()
    return json.feed
}

export {
    getShow,
    getShowEpisodes,
    getShowFeedUrl,
    getShowScheduledEpisodes,
    updateShow,
    updateShowArtwork,
}
