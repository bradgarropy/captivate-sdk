import fetch from "node-fetch"

import {API_URL} from "./constants"
import {AuthenticatedUser, GetMediaResponse, Media} from "./types"

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

const getShowMedia = () => {
    // TODO
}

const searchShowMedia = () => {
    // TODO
}

export {getMedia, getShowMedia, searchShowMedia, uploadMedia}
