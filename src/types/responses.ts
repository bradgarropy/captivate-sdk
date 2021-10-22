import {
    AuthenticatedUser,
    Episode,
    Feed,
    ManagedShow,
    ScheduledEpisode,
    Show,
    User,
} from "./data"

type Response = {
    _links: {
        self: {
            href: string
        }
    }
}

type AuthenticateUserResponse = {
    user: AuthenticatedUser
}

type GetShowResponse = Response & {
    success: boolean
    show: Show
}

type GetShowEpisodesResponse = Response & {
    count: number
    episodes: Episode[]
}

type GetEpisodeResponse = Response & {
    success: boolean
    episode: Episode
}

type GetUserResponse = Response & {
    user: User
}

type GetUsersShowsResponse = Response & {
    success: boolean
    shows: Show[]
}

type GetUsersManagedShowsResponse = Response & {
    success: boolean
    show_user: ManagedShow[]
}

type GetShowScheduledEpisodesResponse = Response & {
    count: number
    episodes: ScheduledEpisode[]
}

type GetShowFeedUrlResponse = Response & {
    feed: Feed
}

export type {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowFeedUrlResponse,
    GetShowResponse,
    GetShowScheduledEpisodesResponse,
    GetUserResponse,
    GetUsersManagedShowsResponse,
    GetUsersShowsResponse,
    Response,
}
