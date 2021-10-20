import {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
    GetUserResponse,
    GetUsersShowsResponse,
} from "../../src/types"
import {
    mockAuthenticatedUser,
    mockEpisode,
    mockResponse,
    mockShow,
    mockUser,
} from "./data"

const mockAuthenticateUserResponse: AuthenticateUserResponse = {
    user: mockAuthenticatedUser,
}

const mockGetShowResponse: GetShowResponse = {
    ...mockResponse,
    success: true,
    show: mockShow,
}

const mockGetEpisodeResponse: GetEpisodeResponse = {
    ...mockResponse,
    success: true,
    episode: mockEpisode,
}

const mockGetShowEpisodesResponse: GetShowEpisodesResponse = {
    ...mockResponse,
    count: 1,
    episodes: [mockEpisode],
}

const mockGetUserResponse: GetUserResponse = {
    ...mockResponse,
    user: mockUser,
}

const mockGetUsersShowsResponse: GetUsersShowsResponse = {
    ...mockResponse,
    success: true,
    shows: [mockShow],
}

export {
    mockAuthenticateUserResponse,
    mockGetEpisodeResponse,
    mockGetShowEpisodesResponse,
    mockGetShowResponse,
    mockGetUserResponse,
    mockGetUsersShowsResponse,
}
