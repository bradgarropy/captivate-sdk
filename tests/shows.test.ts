import fetch from "jest-fetch-mock"

import {
    getShow,
    getShowEpisodes,
    getShowFeedUrl,
    getShowScheduledEpisodes,
    updateShow,
    updateShowArtwork,
} from "../src/shows"
import {
    mockEpisode,
    mockGetShowEpisodesResponse,
    mockGetShowResponse,
    mockShow,
} from "./utils/mocks"

describe("shows", () => {
    test("gets show", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowResponse))

        const result = await getShow("token", "abc123")
        expect(result).toEqual(mockShow)
    })

    test("updates show", () => {
        const result = updateShow()
        expect(result).toBeUndefined()
    })

    test("updates show artwork", () => {
        const result = updateShowArtwork()
        expect(result).toBeUndefined()
    })

    test("updates show artwork", () => {
        const result = updateShowArtwork()
        expect(result).toBeUndefined()
    })

    test("gets show episodes", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowEpisodesResponse))

        const result = await getShowEpisodes("token", "abc123")
        expect(result).toEqual([mockEpisode])
    })

    test("gets show schedules episodes", () => {
        const result = getShowScheduledEpisodes()
        expect(result).toBeUndefined()
    })

    test("gets show feed url", () => {
        const result = getShowFeedUrl()
        expect(result).toBeUndefined()
    })
})
