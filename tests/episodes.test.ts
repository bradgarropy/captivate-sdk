import fetch from "jest-fetch-mock"

import {createEpisode, getEpisode, updateEpisode} from "../src/episodes"
import {mockEpisode, mockGetEpisodeResponse} from "./mocks"

describe("episodes", () => {
    test("gets episode", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetEpisodeResponse))

        const result = await getEpisode("token", "abc123")
        expect(result).toEqual(mockEpisode)
    })

    test("creates episode", () => {
        const result = createEpisode()
        expect(result).toBeUndefined()
    })

    test("updates episode", () => {
        const result = updateEpisode()
        expect(result).toBeUndefined()
    })
})
