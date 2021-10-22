import {
    Actions,
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetMediaResponse,
    GetShowEpisodesResponse,
    GetShowFeedUrlResponse,
    GetShowMediaResponse,
    GetShowResponse,
    GetShowScheduledEpisodesResponse,
    GetUserResponse,
    GetUsersManagedShowsResponse,
    GetUsersShowsResponse,
    Links,
} from "../../src/types"
import {
    mockAuthenticatedUser,
    mockEpisode,
    mockFeed,
    mockManagedShow,
    mockMedia,
    mockScheduledEpisode,
    mockShow,
    mockUser,
} from "./data"

const mockLinks: Links = {
    _links: {
        self: {
            href: "https://captivate.fm",
        },
    },
}

const mockActions: Actions = {
    actions: [
        {
            href: "https://captivate.fm",
            name: "self",
        },
    ],
}

const mockAuthenticateUserResponse: AuthenticateUserResponse = {
    user: mockAuthenticatedUser,
}

const mockGetShowResponse: GetShowResponse = {
    ...mockLinks,
    success: true,
    show: mockShow,
}

const mockGetEpisodeResponse: GetEpisodeResponse = {
    ...mockLinks,
    success: true,
    episode: mockEpisode,
}

const mockGetShowEpisodesResponse: GetShowEpisodesResponse = {
    ...mockLinks,
    count: 1,
    episodes: [mockEpisode],
}

const mockGetUserResponse: GetUserResponse = {
    ...mockLinks,
    user: mockUser,
}

const mockGetUsersShowsResponse: GetUsersShowsResponse = {
    ...mockLinks,
    success: true,
    shows: [mockShow],
}

const mockGetUsersManagedShowsResponse: GetUsersManagedShowsResponse = {
    ...mockLinks,
    success: true,
    show_user: [mockManagedShow],
}

const mockGetShowScheduledEpisodesResponse: GetShowScheduledEpisodesResponse = {
    ...mockLinks,
    count: 1,
    episodes: [mockScheduledEpisode],
}

const mockGetShowFeedUrlResponse: GetShowFeedUrlResponse = {
    ...mockLinks,
    feed: mockFeed,
}

const mockGetMediaResponse: GetMediaResponse = {
    ...mockActions,
    success: true,
    media: mockMedia,
}

const mockGetShowMediaResponse: GetShowMediaResponse = {
    success: true,
    media: [mockMedia],
    limit: 20,
    totalCount: 25,
}

export {
    mockActions,
    mockAuthenticateUserResponse,
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
}
