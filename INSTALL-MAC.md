# Installing Atlas on a Mac

Works on macOS 11 (Big Sur) and newer.

## 1. Download
From the **[latest release](../../../releases/latest)**, download:
- **Apple chip (M1–M4):** `Atlas-<version>-Mac-AppleSilicon.zip`
- **Intel:** `Atlas-<version>-Mac-Intel.zip`

## 2. Install
1. Double-click the downloaded `.zip`. **Atlas** appears next to it.
2. Drag **Atlas** into your **Applications** folder.

## 3. Open it the first time
Atlas isn't signed with a paid Apple developer certificate, so macOS asks you to confirm once.

**The easy way (Terminal):** open **Terminal** (press ⌘ Space and type "Terminal"), paste this line and press Return:
```
xattr -cr /Applications/Atlas.app && open /Applications/Atlas.app
```

**Or without Terminal:**
1. Double-click **Atlas** in Applications. macOS says it can't verify it. Click **Done** (or **Cancel**).
2. Open **System Settings → Privacy & Security**, scroll down, and click **Open Anyway** next to Atlas.
3. Enter your password, then click **Open**.

You only do this once. After that Atlas opens normally and you can keep it in your Dock.

## Your data
- Saved to `Documents/Atlas/atlas-data.json` within a second of every change.
- Daily backups (the last 60 days) are in `Documents/Atlas/Backups`.
- **Settings & data** lets you open the folder, back up now, restore a backup, or move the folder into **iCloud Drive** so a copy lives off your Mac.

## Updating
Quit Atlas (⌘Q), download the new release and drag the new **Atlas** into Applications, choosing **Replace**. Then run the Terminal line from step 3 again. Your data isn't affected.

## Uninstalling
Drag **Atlas** from Applications to the Bin. Your data stays in `Documents/Atlas` until you delete that folder yourself.
