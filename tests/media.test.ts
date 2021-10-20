import {
    getMedia,
    getShowMedia,
    searchShowMedia,
    uploadMedia,
} from "../src/media"

describe("media", () => {
    test("gets media", () => {
        const result = getMedia()
        expect(result).toBeUndefined()
    })

    test("uploads media", () => {
        const result = uploadMedia()
        expect(result).toBeUndefined()
    })

    test("gets show media", () => {
        const result = getShowMedia()
        expect(result).toBeUndefined()
    })

    test("searches show media", () => {
        const result = searchShowMedia()
        expect(result).toBeUndefined()
    })
})
