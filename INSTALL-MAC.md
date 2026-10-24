# Installing Atlas on a Mac

Works on macOS 11 (Big Sur) and newer.

## 1. Download
From the **[latest release](../../releases/latest)**, download:
- **Apple chip (M1–M4):** `Atlas-<version>-Mac-AppleSilicon.zip`
- **Intel:** `Atlas-<version>-Mac-Intel.zip`

Not sure which you have? Apple menu  → **About This Mac**. "Chip: Apple M…" means Apple chip. "Processor: Intel" means Intel.

## 2. Install
1. Double-click the downloaded `.zip`. **Atlas** appears next to it.
2. Drag **Atlas** into your **Applications** folder.

## 3. Open it the first time (the security warning)

### Why you see a warning
Apple charges developers a yearly fee to register their apps. Atlas isn't registered yet, so the first time you open it your Mac says it **"could not verify Atlas is free of malware"**. That message appears for every unregistered app. It doesn't mean anything was found. You confirm once and your Mac remembers.

### macOS 15 Sequoia and newer
1. In **Applications**, double-click **Atlas**. You'll see **"Atlas" Not Opened**. Click **Done**. Don't click *Move to Bin*.
2. Open **System Settings** ( menu → System Settings) → **Privacy & Security**.
3. Scroll down to **Security**. You'll see *"Atlas" was blocked to protect your Mac*. Click **Open Anyway**.
   > If you don't see it, repeat step 1. The button only shows for about an hour after you try to open the app.
4. Enter your Mac password (or use Touch ID), then click **Open Anyway** once more.

### macOS 14 Sonoma and older
1. In **Applications**, hold **Control** and click **Atlas**, then choose **Open**.
2. Click **Open** in the message that appears.

### Shortcut (any macOS version)
Open **Terminal** (press ⌘ Space, type "Terminal", press Return), paste this line and press Return:
```
xattr -cr /Applications/Atlas.app && open /Applications/Atlas.app
```
This removes the "downloaded from the internet" flag from Atlas, so it opens straight away.

You only need to do one of these, once. After that Atlas opens normally, and you can keep it in your Dock.

### If something else happens
| You see | Do this |
|---|---|
| **"Atlas is damaged and can't be opened"** | The download was flagged in a way the Settings button can't clear. Use the **Terminal shortcut** above. |
| **No "Open Anyway" button** | Try to open Atlas again first, then go straight to Privacy & Security. Or use the Terminal shortcut. |
| **Atlas asks to accept incoming network connections** | Click **Allow**. This is only for the older Wi-Fi phone method. |

## Your data
- Atlas saves to `Documents/Atlas/atlas-data.json` within a second of every change.
- Daily backups for the last 60 days are in `Documents/Atlas/Backups`.
- **Settings & data** lets you open the folder, back up now, restore a backup, or move the folder into **iCloud Drive** so a copy lives off your Mac.

## Updating
Quit Atlas (⌘Q). Download the new release and drag the new **Atlas** into Applications, choosing **Replace**. Then repeat step 3 once. Your data isn't affected.

## Uninstalling
Drag **Atlas** from Applications to the Bin. Your data stays in `Documents/Atlas` until you delete that folder yourself.
