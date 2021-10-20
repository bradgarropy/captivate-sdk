import {AuthenticatedUser, Episode, Show, User} from "./data"

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

export type {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
    GetUserResponse,
    GetUsersShowsResponse,
    Response,
}
