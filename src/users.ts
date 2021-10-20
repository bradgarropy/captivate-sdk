import fetch from "node-fetch"

import {API_URL} from "./constants"
import {
    AuthenticatedUser,
    GetUserResponse,
    GetUsersShowsResponse,
    Show,
    User,
} from "./types"

const getUser = async (
    token: AuthenticatedUser["token"],
    userId: User["id"],
): Promise<User> => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetUserResponse = await response.json()
    return json.user
}

const getUsersShows = async (
    token: AuthenticatedUser["token"],
    userId: User["id"],
): Promise<Show[]> => {
    const response = await fetch(`${API_URL}/users/${userId}/shows`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetUsersShowsResponse = await response.json()
    return json.shows
}

const getUsersManagedShows = () => {
    // TODO
}

export {getUser, getUsersManagedShows, getUsersShows}
