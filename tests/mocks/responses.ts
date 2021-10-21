import {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
    GetShowScheduledEpisodesResponse,
    GetUserResponse,
    GetUsersManagedShowsResponse,
    GetUsersShowsResponse,
} from "../../src/types"
import {
    mockAuthenticatedUser,
    mockEpisode,
    mockManagedShow,
    mockResponse,
    mockScheduledEpisode,
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

const mockGetUsersManagedShowsResponse: GetUsersManagedShowsResponse = {
    ...mockResponse,
    success: true,
    show_user: [mockManagedShow],
}

const mockGetShowScheduledEpisodesResponse: GetShowScheduledEpisodesResponse = {
    ...mockResponse,
    count: 1,
    episodes: [mockScheduledEpisode],
}

export {
    mockAuthenticateUserResponse,
    mockGetEpisodeResponse,
    mockGetShowEpisodesResponse,
    mockGetShowResponse,
    mockGetShowScheduledEpisodesResponse,
    mockGetUserResponse,
    mockGetUsersManagedShowsResponse,
    mockGetUsersShowsResponse,
}
