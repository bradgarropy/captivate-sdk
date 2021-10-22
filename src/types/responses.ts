import {
    AuthenticatedUser,
    Episode,
    Feed,
    ManagedShow,
    Media,
    ScheduledEpisode,
    Show,
    User,
} from "./data"

type Links = {
    _links: {
        self: {
            href: string
        }
    }
}

type Actions = {
    actions: Array<{
        href: string
        name: string
    }>
}

type AuthenticateUserResponse = {
    user: AuthenticatedUser
}

type GetShowResponse = Links & {
    success: boolean
    show: Show
}

type GetShowEpisodesResponse = Links & {
    count: number
    episodes: Episode[]
}

type GetEpisodeResponse = Links & {
    success: boolean
    episode: Episode
}

type GetUserResponse = Links & {
    user: User
}

type GetUsersShowsResponse = Links & {
    success: boolean
    shows: Show[]
}

type GetUsersManagedShowsResponse = Links & {
    success: boolean
    show_user: ManagedShow[]
}

type GetShowScheduledEpisodesResponse = Links & {
    count: number
    episodes: ScheduledEpisode[]
}

type GetShowFeedUrlResponse = Links & {
    feed: Feed
}

type GetMediaResponse = Actions & {
    success: boolean
    media: Media
}

type GetShowMediaResponse = {
    success: boolean
    media: Media[]
    limit: number
    totalCount: number
}

export type {
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
}
