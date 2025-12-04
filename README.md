# Fantasy Football RPG

A fantasy football platform with RPG mechanics - level up your players, equip items, and battle your way to championship glory!

## 🚀 Quick Start

This app is ready to deploy to Vercel with your custom domain: **fantasyfootballrpg.com**

## 📋 Deployment Instructions

### Step 1: Upload to GitHub

1. Go to https://github.com/tchampi90
2. Click the **"+"** button (top right) → **"New repository"**
3. Name it: `fantasyfootballrpg`
4. Keep it **Public**
5. Do NOT initialize with README (we already have files)
6. Click **"Create repository"**

7. You'll see a page with instructions. Follow the "upload files" option:
   - Click **"uploading an existing file"** link
   - Drag and drop ALL files from this folder
   - Or click "choose your files" and select all files
   - Add commit message: "Initial commit"
   - Click **"Commit changes"**

### Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Import Project"**
5. Find and select **"fantasyfootballrpg"** repository
6. Click **"Import"**
7. Keep all default settings
8. Click **"Deploy"**
9. Wait 1-2 minutes for deployment to complete ✅

### Step 3: Connect Your Domain

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter: `fantasyfootballrpg.com`
4. Click **"Add"**
5. Vercel will show you DNS records to add

### Step 4: Configure Cloudflare DNS

1. Go to Cloudflare dashboard
2. Select your domain **fantasyfootballrpg.com**
3. Click **"DNS"** → **"Records"**
4. Add the records Vercel provided:
   - **Type**: A
   - **Name**: @ (or leave blank)
   - **Content**: (Vercel will give you an IP address)
   - **Proxy status**: DNS only (gray cloud)
   
   - **Type**: CNAME
   - **Name**: www
   - **Content**: cname.vercel-dns.com
   - **Proxy status**: DNS only (gray cloud)

5. Save the records
6. Wait 5-10 minutes for DNS to propagate

### Step 5: Visit Your Live Site! 🎉

Go to: **https://fantasyfootballrpg.com**

Your app is now LIVE!

---

## 🎮 Features

- **User Authentication**: Login/registration with password reset
- **League Management**: Create or join leagues (8, 10, or 12 teams)
- **Commissioner Tools**: Set draft date/time, manage draft order
- **Snake Draft System**: Full draft with ESPN player data integration
- **RPG Mechanics**:
  - Level up players by earning XP
  - Skill trees (TD, Yardage, Receptions branches)
  - Item shop with equipment upgrades
  - HP system with elimination mechanics
- **Gold Economy**: Earn gold from wins, spend on items and healing

---

## 📁 Project Structure

```
fantasyfootballrpg/
├── public/
│   ├── start.html          # Landing page
│   ├── auth.html           # Login/registration
│   ├── league.html         # Create/join league
│   ├── league-settings.html # Commissioner settings
│   ├── draft-setup.html    # Pre-draft configuration
│   ├── draft.html          # Live draft interface
│   └── index.html          # Main team management
├── assets/
│   └── FF_RPG_Logo.png     # App logo
├── vercel.json             # Vercel configuration
└── README.md               # This file
```

---

## 🔧 Current Implementation

- **Frontend**: Pure HTML/CSS/JavaScript with React (via CDN)
- **Data Storage**: Browser localStorage (temporary - no backend yet)
- **Hosting**: Vercel (free tier)
- **Domain**: fantasyfootballrpg.com (Cloudflare)

---

## 🚧 Roadmap (Future Updates)

### Phase 2: Backend Integration
- [ ] Firebase/Supabase integration
- [ ] Real user authentication
- [ ] Cloud database for leagues/teams
- [ ] Real-time draft synchronization

### Phase 3: Enhanced Features
- [ ] ESPN API integration for live player data
- [ ] Weekly matchup system
- [ ] League standings and playoffs
- [ ] Mobile app optimization
- [ ] Email notifications

---

## ⚙️ Configuration Notes

### Vercel Settings
- **Framework Preset**: None (static site)
- **Build Command**: None required
- **Output Directory**: `public`
- **Install Command**: None required

### Domain Settings
- Purchased from: Cloudflare
- SSL: Automatic via Vercel
- CDN: Vercel Edge Network

---

## 🐛 Troubleshooting

**Issue: Domain not working after DNS setup**
- Wait 10-30 minutes for DNS propagation
- Check DNS records in Cloudflare are correct
- Ensure proxy status is "DNS only" (gray cloud)

**Issue: App not loading**
- Check browser console (F12) for errors
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Issue: Settings button disappearing**
- This was a localStorage timing issue - should be fixed in production
- If it persists, hard refresh the page

---

## 📞 Support

For deployment issues, check:
- Vercel Documentation: https://vercel.com/docs
- Cloudflare DNS Guide: https://developers.cloudflare.com/dns/

---

## 📝 License

Private project - All rights reserved

---

Built with ❤️ for fantasy football enthusiasts who love RPG mechanics!
