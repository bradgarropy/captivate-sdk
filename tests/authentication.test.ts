import fetch from "jest-fetch-mock"

import {authenticateUser} from "../src/authentication"
import {mockAuthenticatedUser, mockAuthenticateUserResponse} from "./mocks"

describe("authentication", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    test("authenticates user", async () => {
        const result = await authenticateUser("userId", "apiKey")
        expect(result).toEqual(mockAuthenticatedUser)
    })
})
