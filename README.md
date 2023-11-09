# studio-lovelies.com
The source code for [studio-lovelies.com](https://studio-lovelies.com).

## Requirements
- `nvm`
    - for Windows: Install [`nvm-windows` 1.1.9 or later](https://github.com/coreybutler/nvm-windows) 
    - for other operating systems: Install [`nvm` 0.39.2 or later](https://github.com/nvm-sh/nvm#installing-and-updating)
- SMTP account to send emails via the contact form _(optional)_
    - SMTP host
    - SMTP port
    - SMTP username
    - SMTP password
- [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to forward contact form submissions to a Discord channel _(optional)_
    - absolute URL to the webhook

## Setup
1. Clone the repository.
2. Duplicate `.env.sample` and rename it to `.env`.
3. Replace the values in `.env` with your own (see [Requirements](#requirements)).
4. Inside your local clone of this repository run `nvm install && nvm use && npm install`.
5. To run the tests run `npm run test`; these should pass wihout any errors.
6. To start the server locally run `npm run start`.

## Contributing
1. Create a new branch.
2. Build, test, commit and push your changes locally (see [Setup](#setup)).
3. [Create and submit a Pull Request](https://github.com/Studio-Lovelies/StudioLoveliesWebsite/compare) from your branch to `main` and fill out the Pull Request template.
    1. A second developer will review your changes. **Ping any developer, if this doesn't happen within 24 hours.**
        1. Address all feedback. Mark conversations as resolved after you pushed corresponding changes. Challenge feedback, if you disagree.
    2. In parallel, a GitHub Action tests, builds and deploys the website.
        1. If the GitHub Action **fails**, you will receive an email + notification on GitHub. Update your Pull Request until all checks pass.
        2. If the GitHub Action **succeeeds**, you can check the preview environment. **Note:** This might take up to 10 minutes.
            1. Verify [`preview.studio-lovelies.com/version`](https://preview.studio-lovelies.com/version) returns the commit hash of last Pull Request commit.  
            2. Verify [`preview.studio-lovelies.com`](https://preview.studio-lovelies.com) shows all your changes.
4. `Rebase and merge` the Pull Request.
5. Your changes will be deployed to the production environment. **Note:** This might take up to 10 minutes.
    1. Verify the last commit of the `main` branch is the last commit of your Pull Request. **Note:** The commit hash might be different, if someone else merged a Pull Request in the meantime.
    2. Verify [`studio-lovelies.com/version`](https://studio-lovelies.com/version) returns the commit hash of last `main` commit.
    2. Verify [`studio-lovelies.com`](https://studio-lovelies.com) shows all your changes.