import {ScheduledEpisode} from "."
import {AuthenticatedUser, Episode, ManagedShow, Show, User} from "./data"

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

export type {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
    GetShowScheduledEpisodesResponse,
    GetUserResponse,
    GetUsersManagedShowsResponse,
    GetUsersShowsResponse,
    Response,
}
