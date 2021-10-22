import fetch from "node-fetch"

import {API_URL} from "./constants"
import {
    AuthenticatedUser,
    GetUserResponse,
    GetUsersManagedShowsResponse,
    GetUsersShowsResponse,
    ManagedShow,
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

// TODO: url is incorrect
const getUsersManagedShows = async (
    token: AuthenticatedUser["token"],
    userId: User["id"],
): Promise<ManagedShow[]> => {
    const response = await fetch(`${API_URL}/users/${userId}/shows/manager`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        redirect: "follow",
    })

    const json: GetUsersManagedShowsResponse = await response.json()
    return json.show_user
}

export {getUser, getUsersManagedShows, getUsersShows}
