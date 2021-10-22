import fetch from "jest-fetch-mock"

import {
    getMedia,
    getShowMedia,
    searchShowMedia,
    uploadMedia,
} from "../src/media"
import {
    mockGetMediaResponse,
    mockGetShowMediaResponse,
    mockMedia,
} from "./mocks"

describe("media", () => {
    test("gets media", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetMediaResponse))

        const result = await getMedia("token", "abc123")
        expect(result).toEqual(mockMedia)
    })

    test("uploads media", () => {
        const result = uploadMedia()
        expect(result).toBeUndefined()
    })

    test("gets show media", async () => {
        fetch.mockResponseOnce(JSON.stringify(mockGetShowMediaResponse))

        const result = await getShowMedia("token", "abc123")
        expect(result).toEqual([mockMedia])
    })

    test("searches show media", () => {
        const result = searchShowMedia()
        expect(result).toBeUndefined()
    })
})
