import fetch from "jest-fetch-mock"

import Captivate from "../src"
import {
    mockAuthenticatedUser,
    mockAuthenticateUserResponse,
    mockEpisode,
    mockFeed,
    mockGetEpisodeResponse,
    mockGetMediaResponse,
    mockGetShowEpisodesResponse,
    mockGetShowFeedUrlResponse,
    mockGetShowMediaResponse,
    mockGetShowResponse,
    mockGetShowScheduledEpisodesResponse,
    mockGetUserResponse,
    mockGetUsersManagedShowsResponse,
    mockGetUsersShowsResponse,
    mockManagedShow,
    mockMedia,
    mockScheduledEpisode,
    mockShow,
    mockUser,
} from "./mocks"

const captivate = new Captivate("userId", "apiKey")

describe("captivate sdk", () => {
    test("initializes", () => {
        expect(captivate).toBeInstanceOf(Captivate)
        expect(captivate.userId).toEqual("userId")
        expect(captivate.apiKey).toEqual("apiKey")
        expect(captivate.token).toBeNull()
    })
})

describe("authentication", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("authenticates user", async () => {
        const result = await captivate.authentication.authenticateUser()
        expect(result).toEqual(mockAuthenticatedUser)
        expect(captivate.token).toEqual(mockAuthenticatedUser.token)
    })
})

describe("users", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("gets user", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetUserResponse))

        const result = await captivate.users.getUser("abc123")
        expect(result).toEqual(mockUser)
    })

    test("gets users shows", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetUsersShowsResponse))

        const result = await captivate.users.getUsersShows("abc123")
        expect(result).toEqual([mockShow])
    })

    test("gets users managed shows", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetUsersManagedShowsResponse))

        const result = await captivate.users.getUsersManagedShows("abc123")
        expect(result).toEqual([mockManagedShow])
    })
})

describe("shows", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("gets show", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowResponse))

        const result = await captivate.shows.getShow(mockShow.id)
        expect(result).toEqual(mockShow)
    })

    test("updates show", () => {
        const result = captivate.shows.updateShow()
        expect(result).toBeUndefined()
    })

    test("updates show artwork", () => {
        const result = captivate.shows.updateShowArtwork()
        expect(result).toBeUndefined()
    })

    test("gets show episodes", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowEpisodesResponse))

        const result = await captivate.shows.getShowEpisodes(mockShow.id)
        expect(result).toEqual([mockEpisode])
    })

    test("gets show scheduled episodes", async () => {
        fetch.mockResponseOnce(
            JSON.stringify(mockGetShowScheduledEpisodesResponse),
        )

        const result = await captivate.shows.getShowScheduledEpisodes(
            mockShow.id,
        )

        expect(result).toEqual([mockScheduledEpisode])
    })

    test("gets show feed url", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowFeedUrlResponse))

        const result = await captivate.shows.getShowFeedUrl(mockShow.id)
        expect(result).toEqual(mockFeed)
    })
})

describe("media", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("gets media", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetMediaResponse))

        const result = await captivate.media.getMedia(mockMedia.id)
        expect(result).toEqual(mockMedia)
    })

    test("uploads media", () => {
        const result = captivate.media.uploadMedia()
        expect(result).toBeUndefined()
    })

    test("gets show media", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowMediaResponse))

        const result = await captivate.media.getShowMedia(mockShow.id)
        expect(result).toEqual([mockMedia])
    })

    test("searches show media", () => {
        const result = captivate.media.searchShowMedia()
        expect(result).toBeUndefined()
    })
})

describe("episodes", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("gets episode", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetEpisodeResponse))

        const result = await captivate.episodes.getEpisode(mockEpisode.id)
        expect(result).toEqual(mockEpisode)
    })

    test("creates episode", () => {
        const result = captivate.episodes.createEpisode()
        expect(result).toBeUndefined()
    })

    test("updates episode", () => {
        const result = captivate.episodes.updateEpisode()
        expect(result).toBeUndefined()
    })
})
