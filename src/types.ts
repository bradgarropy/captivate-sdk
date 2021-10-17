type Response = {
    _links: {
        self: {
            href: string
        }
    }
}

type User = {
    id: string
    email: string
    status: string
    admin: boolean
    first_name: string
    last_name: string
    default_show: string
    default_show_order: string
    created: string
    profile_picture: string
    token: string
}

type Show = {
    id: string
    created: string
    last_feed_generation: string
    status: string
    title: string
    artwork: string
    link: string
    description: string
    categories: string
    google_categories: string
    order: string
    summary: string
    author: string
    subtitle: string
    copyright: string
    name: string
    itunes_email: string
    explicit: string
    limit: number
    type: string
    keywords: string
    donation_link: string
    donation_text: string
    site_id: string
    file_name: string
    season: string
    time_zone: string
    import: string
    failed_import: number
    imported_from: string
    third_party_analytics: string
    prefixes: string
    spotify_uri: string
    spotify_status: string
    default_time: string
    imported_rss_feed: string
    complete_show: boolean
    language: string
    pw_site_id: string
    pw_client_id: string
    transparency_mode: boolean
    audience_avatar: string
    captivate_sync_url: string
    amazon_submitted: string
    country_of_origin: string
    gaana_submitted: string
    jiosaavn_submitted: boolean
    podcast_index_submitted: string
    player_fm_submitted: string
    import_cancel_key: string
    deezer_submitted: string
    import_errors: boolean
    private: boolean
    google_block: boolean
    itunes_block: boolean
    default_pre_roll_media_id: string
    default_post_roll_media_id: string
    feature_preview: boolean
    show_link: string
    enabled_site: boolean
    custom_domain: string
    sync_enabled: boolean
    sync_webhook: string
    network_id: string
}

type Episode = {
    id: string
    shows_id: string
    media_id: string
    title: string
    itunes_title: string
    published_date: string
    guid: string
    status: string
    episode_art: string
    shownotes: string
    summary: string
    episode_type: string
    episode_season: number
    episode_number: number
    itunes_subtitle: string
    author: string
    link: string
    explicit: string
    itunes_block: string
    google_block: string
    google_description: string
    donation_link: string
    donation_text: string
    post_id: string
    website_title: string
    is_active: boolean
    failed_import: boolean
    slug: string
    seo_title: string
    seo_description: string
    episode_private: boolean
    episode_expiration: string
    auto_tweeted: boolean
    video_repurposed: boolean
    video_s3_key: string
    import_errors: boolean
    transcription_html: string
    transcription_file: string
    transcription_json: string
    transcription_text: string
    episodes_id: string
    episodes_isActive: boolean
    episodes_showId: string
    users_id: string
    media_name: string
    media_size: string
    media_bit_rate: string
    media_id3_size: string
    media_type: string
    media_url: string
    media_duration: string
    created_at: string
    updated_at: string
    previously_assigned_episode: string
    type: string
    stackpath_rule_id: string
    original_media_id: string
    media_slot_type_id: string
    amie_job_id: string
    amie_status: string
    media_isActive: boolean
    artwork_id: string
    user_id: string
    artwork_url: string
    file_name: string
    created_on: string
    updated_on: string
    artwork_url_100: string
    artwork_url_400: string
    artwork_url_800: string
    network_id: string
}

type AuthenticateUserResponse = {
    user: User
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

export type {
    AuthenticateUserResponse,
    GetEpisodeResponse,
    GetShowEpisodesResponse,
    GetShowResponse,
}
