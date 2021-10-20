import fetch from "node-fetch"

import {API_URL} from "./constants"
import {AuthenticatedUser, Episode, GetEpisodeResponse} from "./types"

const getEpisode = async (
    token: AuthenticatedUser["token"],
    episodeId: Episode["id"],
): Promise<Episode> => {
    const response = await fetch(`${API_URL}/episodes/${episodeId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetEpisodeResponse = await response.json()
    return json.episode
}

const createEpisode = () => {
    // TODO
}

const updateEpisode = () => {
    // TODO
}

export {createEpisode, getEpisode, updateEpisode}
