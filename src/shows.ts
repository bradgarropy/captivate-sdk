import fetch from "node-fetch"

import {API_URL} from "./constants"
import {
    Episode,
    GetShowEpisodesResponse,
    GetShowResponse,
    Show,
    User,
} from "./types"

const getShow = async (
    token: User["token"],
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
    token: User["token"],
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

const getShowScheduledEpisodes = () => {
    // TODO
}

const getShowFeedUrl = () => {
    // TODO
}

export {
    getShow,
    getShowEpisodes,
    getShowFeedUrl,
    getShowScheduledEpisodes,
    updateShow,
    updateShowArtwork,
}
