# 🎤 captivate sdk

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]
[![discord][discord-badge]][discord]

_[Captivate][captivate] JavaScript SDK for retrieving podcast information._

## 📦 Installation

This package is hosted on [npm][npm].

```bash
npm install @bradgarropy/captivate-sdk
```

## 🥑 Usage

Start off by creating a `Captivate` client, then authenticate to the [Captivate API][captivate-api]. Now you can use the client to retrieve your podcast shows and episodes.

```javascript
const captivate = new Captivate("abc123", "123456789")

const show = await captivate.shows.getShow("abc123")
const episode = await captivate.episodes.getEpisode("xyz123")
```

## 📖 API Reference

### `Captivate(userId, apiKey)`

| Name     | Type     | Example       | Description        |
| -------- | -------- | ------------- | ------------------ |
| `userId` | `string` | `"abc123"`    | Captivate user id. |
| `apiKey` | `string` | `"123456789"` | Captivate api key. |

Create a `Captivate` client.

```javascript
const captivate = new Captivate("abc123", "123456789")
```

### `captivate.authentication.authenticateUser()`

Authenticate a user to the [Captivate API][captivate-api].

```javascript
captivate.authentication.authenticateUser()
```

### `captivate.users.getUser(userId)`

| Name     | Type     | Example    | Description |
| -------- | -------- | ---------- | ----------- |
| `userId` | `string` | `"abc123"` | User id.    |

Get a user.

```javascript
captivate.users.getUser("abc123")
```

### `captivate.users.getUsersShows(userId)`

| Name     | Type     | Example    | Description |
| -------- | -------- | ---------- | ----------- |
| `userId` | `string` | `"abc123"` | User id.    |

Get a list of podcasts that a user belongs to.

```javascript
captivate.users.getUsersShows("abc123")
```

### `captivate.users.getUsersManagedShows()`

_// TODO_

### `captivate.shows.getShow(showId)`

| Name     | Type     | Example    | Description      |
| -------- | -------- | ---------- | ---------------- |
| `showId` | `string` | `"abc123"` | Podcast show id. |

Get a podcast.

```javascript
captivate.shows.getShow("abc123")
```

### `captivate.shows.updateShow()`

_// TODO_

### `captivate.shows.updateShowArtwork()`

_// TODO_

### `captivate.shows.getShowEpisodes(showId)`

| Name     | Type     | Example    | Description      |
| -------- | -------- | ---------- | ---------------- |
| `showId` | `string` | `"abc123"` | Podcast show id. |

Get all episodes from a podcast.

```javascript
captivate.shows.getShowEpisodes("abc123")
```

### `captivate.shows.getShowScheduledEpisodes()`

_// TODO_

### `captivate.shows.getShowFeedUrl()`

_// TODO_

### `captivate.media.getMedia()`

_// TODO_

### `captivate.media.uploadMedia()`

_// TODO_

### `captivate.media.getShowMedia()`

_// TODO_

### `captivate.media.searchShowMedia()`

_// TODO_

### `captivate.episodes.getEpisode(episodeId)`

| Name        | Type     | Example    | Description         |
| ----------- | -------- | ---------- | ------------------- |
| `episodeId` | `string` | `"xyz123"` | Podcast episode id. |

Get a podcast episode.

```javascript
captivate.episodes.getEpisode("xyz123")
```

### `captivate.episodes.createEpisode()`

_// TODO_

### `captivate.episodes.updateEpisode()`

_// TODO_

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

## ✨ contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://bradgarropy.com"><img src="https://avatars.githubusercontent.com/u/11336745?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brad Garropy</b></sub></a><br /><a href="https://github.com/bradgarropy/captivate-sdk/commits?author=bradgarropy" title="Code">💻</a> <a href="https://github.com/bradgarropy/captivate-sdk/commits?author=bradgarropy" title="Documentation">📖</a> <a href="https://github.com/bradgarropy/captivate-sdk/commits?author=bradgarropy" title="Tests">⚠️</a> <a href="#infra-bradgarropy" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[codecov]: https://app.codecov.io/gh/bradgarropy/captivate-sdk
[contributing]: https://github.com/bradgarropy/captivate-sdk/blob/master/contributing.md
[contributors]: #-contributors
[npm]: https://www.npmjs.com/package/@bradgarropy/captivate-sdk
[codecov-badge]: https://img.shields.io/codecov/c/github/bradgarropy/captivate-sdk?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@bradgarropy/captivate-sdk.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@bradgarropy/captivate-sdk?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/bradgarropy/captivate-sdk?style=flat-square
[issues]: https://github.com/bradgarropy/captivate-sdk/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[bundlephobia]: https://bundlephobia.com/result?p=@bradgarropy/captivate-sdk
[size-badge]: https://img.shields.io/bundlephobia/minzip/@bradgarropy/captivate-sdk?style=flat-square
[github-actions]: https://github.com/bradgarropy/captivate-sdk/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/bradgarropy/captivate-sdk/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%40bradgarropy%2Fcaptivate-sdk
[typescript-badge]: https://img.shields.io/npm/types/@bradgarropy/captivate-sdk?style=flat-square
[discord]: https://bradgarropy.com/discord
[discord-badge]: https://img.shields.io/discord/748196643140010015?style=flat-square
[captivate]: https://captivate.fm
[captivate-api]: https://api.captivate.fm
