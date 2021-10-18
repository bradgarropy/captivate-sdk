import fetch from "jest-fetch-mock"

import Captivate from "../src"
import {
    mockAuthenticateUserResponse,
    mockEpisode,
    mockGetEpisodeResponse,
    mockGetShowEpisodesResponse,
    mockGetShowResponse,
    mockShow,
    mockUser,
} from "./utils/mocks"

const captivate = new Captivate("userId", "apiKey")

test("initializes", () => {
    expect(captivate).toBeInstanceOf(Captivate)
    expect(captivate.userId).toEqual("userId")
    expect(captivate.apiKey).toEqual("apiKey")
    expect(captivate.token).toBeNull()
})

describe("captivate api", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    test("authenticates user", async () => {
        const result = await captivate.authenticateUser()
        expect(result).toEqual(mockUser)
        expect(captivate.token).toEqual(mockUser.token)
    })

    test("gets show", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowResponse))

        const result = await captivate.getShow(mockShow.id)
        expect(result).toEqual(mockShow)
    })

    test("gets show episodes", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowEpisodesResponse))

        const result = await captivate.getShowEpisodes(mockShow.id)
        expect(result).toEqual([mockEpisode])
    })

    test("gets episode", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetEpisodeResponse))

        const result = await captivate.getEpisode(mockEpisode.id)
        expect(result).toEqual(mockEpisode)
    })
})
