import fetch from "node-fetch"

import {API_URL} from "./constants"
import {
    AuthenticatedUser,
    GetMediaResponse,
    GetShowMediaResponse,
    Media,
    Show,
} from "./types"

const getMedia = async (
    token: AuthenticatedUser["token"],
    mediaId: Media["id"],
): Promise<Media> => {
    const response = await fetch(`${API_URL}/media/${mediaId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetMediaResponse = await response.json()
    return json.media
}

const uploadMedia = () => {
    // TODO
}

// TODO: query parameters don't seem to work
// TODO: figure out how to handle pagination
const getShowMedia = async (
    token: AuthenticatedUser["token"],
    showId: Show["id"],
): Promise<Media[]> => {
    const response = await fetch(`${API_URL}/shows/${showId}/media`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetShowMediaResponse = await response.json()
    return json.media
}

const searchShowMedia = () => {
    // TODO
}

export {getMedia, getShowMedia, searchShowMedia, uploadMedia}
