# Dad Strong v1.3

Personal 12-week workout, core recovery, posture/mobility, and LDL-support tracker. This release replaces the split routine with alternating Full Body A/B training while preserving browser data, the posture library, core-pressure safeguards, Zone 2 tracking, and Tonal Basic Lift support. Every strength movement includes a practical dumbbell or kettlebell route when the Tonal area is unavailable.

## v1.3 schedule

- Odd weeks: Monday A, Wednesday B, Friday A
- Even weeks: Monday B, Wednesday A, Friday B
- Tuesday: Zone 2 + mobility
- Thursday: recovery + Zone 2
- Saturday: family activity
- Sunday: rest + weekly review
- Weeks 4 and 8 are deloads; Week 12 consolidates the cycle.

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
2. Unzip the Dad Strong v1.3 package.
3. In the existing `Dad-Strong-v2` repository, choose **Add file → Upload files**.
4. Upload the seven individual files from the unzipped folder and replace files with the same names.
5. Commit the changes to `main`, wait a few minutes, then fully close and reopen the Home Screen app.

The v1.3 service worker uses a new cache name and checks the network first for page navigations, so future GitHub Pages updates should appear more reliably. Do not upload the ZIP itself to the repository root.
