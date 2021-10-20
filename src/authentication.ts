import FormData from "form-data"
import fetch from "node-fetch"

import {API_URL} from "./constants"
import {AuthenticatedUser, AuthenticateUserResponse} from "./types"

const authenticateUser = async (
    userId: string,
    apiKey: string,
): Promise<AuthenticatedUser> => {
    const form = new FormData()

    form.append("username", userId)
    form.append("token", apiKey)

    const response = await fetch(`${API_URL}/authenticate/token`, {
        method: "POST",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        body: form,
        redirect: "follow",
    })

    const json: AuthenticateUserResponse = await response.json()
    return json.user
}

export {authenticateUser}
