# Installing Atlas on Windows

Works on Windows 10 and 11 (64-bit).

### Why you see warnings
Microsoft charges developers for a certificate that registers their apps. Atlas doesn't have one yet, so your browser and Windows both say they **don't recognise it**. That message appears for every unregistered app. It doesn't mean anything was found. You confirm once and Windows remembers.

## 1. Download
From the **[latest release](../../releases/latest)**, download `Atlas-Setup-<version>-Windows.exe`.

Your browser may warn you that the file **"isn't commonly downloaded"**:
- **Microsoft Edge:** point at the download, click **⋯** → **Keep**. If Edge asks again, click **Show more** → **Keep anyway**.
- **Google Chrome:** click **Keep** in the downloads bubble. If it only shows *Delete*, open the downloads page (Ctrl+J) and choose **Keep** or **Download suspicious file**.

## 2. Install
1. Double-click the downloaded file.
2. You'll see a blue screen saying **"Windows protected your PC"**. Click **More info**. The **Run anyway** button appears. Click it.
3. Follow the installer. It adds Atlas to your Start menu and desktop.

### If something else happens
| You see | Do this |
|---|---|
| **"Smart App Control blocked an app that may be unsafe"** (some new Windows 11 PCs) | This setting has no "run anyway" option. Your choices are: switch it off in **Windows Security → App & browser control → Smart App Control settings → Off** (you can't switch it back on without resetting Windows), or use Atlas on a different computer. |
| **The installer vanished after downloading** | Your antivirus may have quarantined it. In **Windows Security → Virus & threat protection → Protection history**, select it and choose **Allow**. |
| **Windows asks whether Atlas can use your network** | Allow it on **Private networks**. This is only for the older Wi-Fi phone method. |

## Your data
- Atlas saves to `Documents\Atlas\atlas-data.json` within a second of every change, with daily backups in `Documents\Atlas\Backups`.
- **Settings & data** lets you open the folder, back up, restore, or move the folder into **OneDrive** for an off-computer copy.

## Updating
Download and run the newer installer, and confirm the same warnings again. It replaces the old version, and your data isn't affected.

## Uninstalling
Go to **Settings → Apps → Atlas → Uninstall**. Your data stays in `Documents\Atlas` until you delete it yourself.
