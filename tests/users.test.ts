import fetch from "jest-fetch-mock"

import {getUser, getUsersManagedShows, getUsersShows} from "../src/users"
import {
    mockGetUserResponse,
    mockGetUsersManagedShowsResponse,
    mockGetUsersShowsResponse,
    mockManagedShow,
    mockShow,
    mockUser,
} from "./mocks"

describe("users", () => {
    test("gets user", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetUserResponse))

        const result = await getUser("token", "abc123")
        expect(result).toEqual(mockUser)
    })

    test("gets users shows", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetUsersShowsResponse))

        const result = await getUsersShows("token", "abc123")
        expect(result).toEqual([mockShow])
    })

    test("gets users managed shows", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetUsersManagedShowsResponse))

        const result = await getUsersManagedShows("token", "abc123")
        expect(result).toEqual([mockManagedShow])
    })
})
