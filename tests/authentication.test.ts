import fetch from "jest-fetch-mock"

import {authenticateUser} from "../src/authentication"
import {mockAuthenticateUserResponse, mockUser} from "./utils/mocks"

describe("authentication", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    test("authenticates user", async () => {
        const result = await authenticateUser("userId", "apiKey")
        expect(result).toEqual(mockUser)
    })
})
