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
        expect(result).toEqual(mockUser)
        expect(captivate.token).toEqual(mockUser.token)
    })
})

describe("users", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("gets user", () => {
        const result = captivate.users.getUser()
        expect(result).toBeUndefined()
    })

    test("gets users shows", () => {
        const result = captivate.users.getUsersShows()
        expect(result).toBeUndefined()
    })

    test("gets users managed shows", () => {
        const result = captivate.users.getUsersManagedShows()
        expect(result).toBeUndefined()
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

    test("gets show scheduled episodes", () => {
        const result = captivate.shows.getShowScheduledEpisodes()
        expect(result).toBeUndefined()
    })

    test("gets show feed url", () => {
        const result = captivate.shows.getShowFeedUrl()
        expect(result).toBeUndefined()
    })
})

describe("media", () => {
    beforeEach(() => {
        fetch.mockResponseOnce(JSON.stringify(mockAuthenticateUserResponse))
    })

    afterEach(() => {
        fetch.resetMocks()
    })

    test("gets media", () => {
        const result = captivate.media.getMedia()
        expect(result).toBeUndefined()
    })

    test("uploads media", () => {
        const result = captivate.media.uploadMedia()
        expect(result).toBeUndefined()
    })

    test("gets show media", () => {
        const result = captivate.media.getShowMedia()
        expect(result).toBeUndefined()
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
