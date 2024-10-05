import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { convert } from "../webhook.js";

const output = {
    "content": "> # v2024.09.27-441\n# Bug Fixes\n\n## Choices\n\n- Normal dialogue choices automatically selected the first option; they now show the menu with all choices again\n## Investigation\n\n- `Move` choices no longer receive checkmarks (preview images are still revealed when reentering the `Move` submenu after selecting a choice)",
    "tts": false,
    "embeds": [
        {
            "color": 15317498,
            "fields": [
                {
                    "name": "Windows x86 Build",
                    "value": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/Windows-x86-v2024.09.27-441.zip"
                },
                {
                    "name": "Windows x64 Build",
                    "value": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/Windows-x64-v2024.09.27-441.zip"
                },
                {
                    "name": "Linux x64 Build",
                    "value": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/Linux-x64-v2024.09.27-441.zip"
                },
                {
                    "name": "macOS Build",
                    "value": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/macOS-v2024.09.27-441.zip"
                },
                {
                    "name": "WebGL Build",
                    "value": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/WebGL-v2024.09.27-441.zip"
                },
                {
                    "name": "GitHub Release",
                    "value": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/tag/v2024.09.27-441"
                }
            ],
            "url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/tag/v2024.09.27-441"
        }
    ],
    "components": [],
    "actions": {},
    "username": "GitHub",
    "avatar_url": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
};

const input =
{
    "action": "published",
    "release": {
        "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/178497966",
        "assets_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/178497966/assets",
        "upload_url": "https://uploads.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/178497966/assets{?name,label}",
        "html_url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/tag/v2024.09.27-441",
        "id": 178497966,
        "author": {
            "login": "ViMaSter",
            "id": 1689033,
            "node_id": "MDQ6VXNlcjE2ODkwMzM=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ViMaSter",
            "html_url": "https://github.com/ViMaSter",
            "followers_url": "https://api.github.com/users/ViMaSter/followers",
            "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
            "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
            "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
            "repos_url": "https://api.github.com/users/ViMaSter/repos",
            "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
            "type": "User",
            "site_admin": false
        },
        "node_id": "RE_kwDOMq26Z84Ko6mu",
        "tag_name": "v2024.09.27-441",
        "target_commitish": "develop",
        "name": "v2024.09.27-441",
        "draft": false,
        "prerelease": true,
        "created_at": "2024-08-28T21:44:07Z",
        "published_at": "2024-10-05T01:27:45Z",
        "assets": [
            {
                "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/assets/196992046",
                "id": 196992046,
                "node_id": "RA_kwDOMq26Z84Lvdwu",
                "name": "Linux-x64-v2024.09.27-441.zip",
                "label": null,
                "uploader": {
                    "login": "ViMaSter",
                    "id": 1689033,
                    "node_id": "MDQ6VXNlcjE2ODkwMzM=",
                    "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ViMaSter",
                    "html_url": "https://github.com/ViMaSter",
                    "followers_url": "https://api.github.com/users/ViMaSter/followers",
                    "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
                    "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
                    "repos_url": "https://api.github.com/users/ViMaSter/repos",
                    "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "content_type": "application/zip",
                "state": "uploaded",
                "size": 177454799,
                "download_count": 0,
                "created_at": "2024-10-05T01:25:54Z",
                "updated_at": "2024-10-05T01:26:26Z",
                "browser_download_url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/Linux-x64-v2024.09.27-441.zip"
            },
            {
                "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/assets/196991934",
                "id": 196991934,
                "node_id": "RA_kwDOMq26Z84Lvdu-",
                "name": "macOS-v2024.09.27-441.zip",
                "label": null,
                "uploader": {
                    "login": "ViMaSter",
                    "id": 1689033,
                    "node_id": "MDQ6VXNlcjE2ODkwMzM=",
                    "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ViMaSter",
                    "html_url": "https://github.com/ViMaSter",
                    "followers_url": "https://api.github.com/users/ViMaSter/followers",
                    "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
                    "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
                    "repos_url": "https://api.github.com/users/ViMaSter/repos",
                    "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "content_type": "application/zip",
                "state": "uploaded",
                "size": 184369899,
                "download_count": 0,
                "created_at": "2024-10-05T01:25:20Z",
                "updated_at": "2024-10-05T01:25:54Z",
                "browser_download_url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/macOS-v2024.09.27-441.zip"
            },
            {
                "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/assets/196991662",
                "id": 196991662,
                "node_id": "RA_kwDOMq26Z84Lvdqu",
                "name": "WebGL-v2024.09.27-441.zip",
                "label": null,
                "uploader": {
                    "login": "ViMaSter",
                    "id": 1689033,
                    "node_id": "MDQ6VXNlcjE2ODkwMzM=",
                    "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ViMaSter",
                    "html_url": "https://github.com/ViMaSter",
                    "followers_url": "https://api.github.com/users/ViMaSter/followers",
                    "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
                    "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
                    "repos_url": "https://api.github.com/users/ViMaSter/repos",
                    "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "content_type": "application/zip",
                "state": "uploaded",
                "size": 220563785,
                "download_count": 0,
                "created_at": "2024-10-05T01:23:33Z",
                "updated_at": "2024-10-05T01:24:25Z",
                "browser_download_url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/WebGL-v2024.09.27-441.zip"
            },
            {
                "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/assets/196991783",
                "id": 196991783,
                "node_id": "RA_kwDOMq26Z84Lvdsn",
                "name": "Windows-x64-v2024.09.27-441.zip",
                "label": null,
                "uploader": {
                    "login": "ViMaSter",
                    "id": 1689033,
                    "node_id": "MDQ6VXNlcjE2ODkwMzM=",
                    "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ViMaSter",
                    "html_url": "https://github.com/ViMaSter",
                    "followers_url": "https://api.github.com/users/ViMaSter/followers",
                    "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
                    "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
                    "repos_url": "https://api.github.com/users/ViMaSter/repos",
                    "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "content_type": "application/zip",
                "state": "uploaded",
                "size": 158178299,
                "download_count": 0,
                "created_at": "2024-10-05T01:24:25Z",
                "updated_at": "2024-10-05T01:24:53Z",
                "browser_download_url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/Windows-x64-v2024.09.27-441.zip"
            },
            {
                "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases/assets/196991839",
                "id": 196991839,
                "node_id": "RA_kwDOMq26Z84Lvdtf",
                "name": "Windows-x86-v2024.09.27-441.zip",
                "label": null,
                "uploader": {
                    "login": "ViMaSter",
                    "id": 1689033,
                    "node_id": "MDQ6VXNlcjE2ODkwMzM=",
                    "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ViMaSter",
                    "html_url": "https://github.com/ViMaSter",
                    "followers_url": "https://api.github.com/users/ViMaSter/followers",
                    "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
                    "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
                    "repos_url": "https://api.github.com/users/ViMaSter/repos",
                    "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "content_type": "application/zip",
                "state": "uploaded",
                "size": 153056760,
                "download_count": 0,
                "created_at": "2024-10-05T01:24:53Z",
                "updated_at": "2024-10-05T01:25:20Z",
                "browser_download_url": "https://github.com/ViMaSter/GG-JointJustice-Unity/releases/download/v2024.09.27-441/Windows-x86-v2024.09.27-441.zip"
            }
        ],
        "tarball_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/tarball/v2024.09.27-441",
        "zipball_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/zipball/v2024.09.27-441",
        "body": "# Bug Fixes\r\n\r\n## Choices\r\n\r\n- Normal dialogue choices automatically selected the first option; they now show the menu with all choices again\r\n## Investigation\r\n\r\n- `Move` choices no longer receive checkmarks (preview images are still revealed when reentering the `Move` submenu after selecting a choice)"
    },
    "repository": {
        "id": 850246247,
        "node_id": "R_kgDOMq26Zw",
        "name": "GG-JointJustice-Unity",
        "full_name": "ViMaSter/GG-JointJustice-Unity",
        "private": false,
        "owner": {
            "login": "ViMaSter",
            "id": 1689033,
            "node_id": "MDQ6VXNlcjE2ODkwMzM=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ViMaSter",
            "html_url": "https://github.com/ViMaSter",
            "followers_url": "https://api.github.com/users/ViMaSter/followers",
            "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
            "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
            "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
            "repos_url": "https://api.github.com/users/ViMaSter/repos",
            "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/ViMaSter/GG-JointJustice-Unity",
        "description": "It's the repo for the GGJJ Unity version! I'm too dumb to come up with a wittier description.",
        "fork": true,
        "url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity",
        "forks_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/forks",
        "keys_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/teams",
        "hooks_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/hooks",
        "issue_events_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/issues/events{/number}",
        "events_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/events",
        "assignees_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/assignees{/user}",
        "branches_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/branches{/branch}",
        "tags_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/tags",
        "blobs_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/languages",
        "stargazers_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/stargazers",
        "contributors_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/contributors",
        "subscribers_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/subscribers",
        "subscription_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/subscription",
        "commits_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/contents/{+path}",
        "compare_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/merges",
        "archive_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/downloads",
        "issues_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/issues{/number}",
        "pulls_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/labels{/name}",
        "releases_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/releases{/id}",
        "deployments_url": "https://api.github.com/repos/ViMaSter/GG-JointJustice-Unity/deployments",
        "created_at": "2024-08-31T08:53:57Z",
        "updated_at": "2024-08-31T08:53:57Z",
        "pushed_at": "2024-08-28T22:00:45Z",
        "git_url": "git://github.com/ViMaSter/GG-JointJustice-Unity.git",
        "ssh_url": "git@github.com:ViMaSter/GG-JointJustice-Unity.git",
        "clone_url": "https://github.com/ViMaSter/GG-JointJustice-Unity.git",
        "svn_url": "https://github.com/ViMaSter/GG-JointJustice-Unity",
        "homepage": null,
        "size": 7105,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": {
            "key": "mpl-2.0",
            "name": "Mozilla Public License 2.0",
            "spdx_id": "MPL-2.0",
            "url": "https://api.github.com/licenses/mpl-2.0",
            "node_id": "MDc6TGljZW5zZTE0"
        },
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "develop"
    },
    "sender": {
        "login": "ViMaSter",
        "id": 1689033,
        "node_id": "MDQ6VXNlcjE2ODkwMzM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1689033?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ViMaSter",
        "html_url": "https://github.com/ViMaSter",
        "followers_url": "https://api.github.com/users/ViMaSter/followers",
        "following_url": "https://api.github.com/users/ViMaSter/following{/other_user}",
        "gists_url": "https://api.github.com/users/ViMaSter/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ViMaSter/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ViMaSter/subscriptions",
        "organizations_url": "https://api.github.com/users/ViMaSter/orgs",
        "repos_url": "https://api.github.com/users/ViMaSter/repos",
        "events_url": "https://api.github.com/users/ViMaSter/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ViMaSter/received_events",
        "type": "User",
        "site_admin": false
    }
};

describe("webhook convert", async () => {
    it("converts webhook to discord message", async () => {
        const result = convert(input);
        assert.deepEqual(result, output);
    });
});