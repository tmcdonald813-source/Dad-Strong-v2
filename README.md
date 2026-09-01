# Dad Strong v1.2

Personal 12-week workout, core recovery, posture/mobility, and LDL-support tracker. This release preserves the existing Tonal Basic Lift program and browser data storage while adding a posture library, a daily reset, and warm-up/recovery integration.

## GitHub Pages setup

1. Create a public repository named `dad-strong`.
2. Upload every file in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. The app URL will be:
   `https://tmcdonald813-source.github.io/dad-strong/`

On iPhone, open that address in Safari, tap Share, then **Add to Home Screen**.

Your entries are stored in the browser on that device. Use the app's Export Data button periodically.

## Updating the existing repository

1. Export a backup from **Review → Export data**.
2. Unzip the Dad Strong v1.2 package.
3. In the existing `Dad-Strong-v2` repository, choose **Add file → Upload files**.
4. Upload the six individual files from the unzipped folder and replace files with the same names.
5. Commit the changes to `main`, wait a few minutes, then fully close and reopen the Home Screen app.

The v1.2 service worker uses a new cache name and checks the network first for page navigations, so future GitHub Pages updates should appear more reliably. Do not upload the ZIP itself to the repository root.
