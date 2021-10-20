import {getUser, getUsersManagedShows, getUsersShows} from "../src/users"

describe("users", () => {
    test("gets user", () => {
        const result = getUser()
        expect(result).toBeUndefined()
    })

    test("gets users shows", () => {
        const result = getUsersShows()
        expect(result).toBeUndefined()
    })

    test("gets users managed shows", () => {
        const result = getUsersManagedShows()
        expect(result).toBeUndefined()
    })
})
