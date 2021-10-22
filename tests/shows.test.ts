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
    mockFeed,
    mockGetShowEpisodesResponse,
    mockGetShowFeedUrlResponse,
    mockGetShowResponse,
    mockGetShowScheduledEpisodesResponse,
    mockScheduledEpisode,
    mockShow,
} from "./mocks"

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

    test("gets show schedules episodes", async () => {
        fetch.mockResponseOnce(
            JSON.stringify(mockGetShowScheduledEpisodesResponse),
        )

        const result = await getShowScheduledEpisodes("token", "abc123")
        expect(result).toEqual([mockScheduledEpisode])
    })

    test("gets show feed url", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowFeedUrlResponse))

        const result = await getShowFeedUrl("token", "abc123")
        expect(result).toEqual(mockFeed)
    })
})
