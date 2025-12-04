# 🚀 DEPLOYMENT QUICK START GUIDE

Follow these steps to get fantasyfootballrpg.com live in 15 minutes!

---

## ✅ Prerequisites (You've Done These!)

- [x] Domain purchased: fantasyfootballrpg.com (Cloudflare)
- [x] GitHub account created: tchampi90

---

## 📤 STEP 1: Upload to GitHub (5 minutes)

### 1.1 Create Repository

1. Go to: **https://github.com/new**
2. Repository name: `fantasyfootballrpg`
3. Description: "Fantasy Football with RPG mechanics"
4. Visibility: **Public**
5. Do NOT check "Add a README file"
6. Click **"Create repository"**

### 1.2 Upload Files

1. On the new repository page, click **"uploading an existing file"**
2. Drag ALL files from the `fantasyfootballrpg-deploy` folder into the upload area
   - Make sure to include ALL files (HTML, assets folder, README, etc.)
3. In commit message box, type: "Initial deployment"
4. Click **"Commit changes"**
5. Wait for upload to complete (may take 30 seconds)

---

## 🌐 STEP 2: Deploy to Vercel (5 minutes)

### 2.1 Sign Up for Vercel

1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Login with your GitHub (tchampi90)
4. Click **"Authorize Vercel"**

### 2.2 Import Your Project

1. You'll see "Import Git Repository"
2. Find **"fantasyfootballrpg"** in the list
3. Click **"Import"**
4. Keep all settings as default:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: public
5. Click **"Deploy"**
6. Wait 1-2 minutes - you'll see a success screen with confetti! 🎉

### 2.3 Test Your Vercel URL

1. Vercel will give you a URL like: `fantasyfootballrpg.vercel.app`
2. Click on it to test
3. Your app should load! (Don't worry if it says vercel.app - we'll connect your domain next)

---

## 🔗 STEP 3: Connect Your Domain (5 minutes)

### 3.1 Add Domain in Vercel

1. In Vercel, go to your project dashboard
2. Click **"Settings"** (top navigation)
3. Click **"Domains"** (left sidebar)
4. Type: `fantasyfootballrpg.com`
5. Click **"Add"**
6. Vercel will show you DNS records to add - **KEEP THIS PAGE OPEN**

### 3.2 Add DNS Records in Cloudflare

1. Open a new tab: **https://dash.cloudflare.com**
2. Click on **fantasyfootballrpg.com**
3. Click **"DNS"** (left sidebar) → **"Records"**

4. **Add First Record:**
   - Click **"Add record"**
   - Type: `A`
   - Name: `@` (or leave blank)
   - IPv4 address: Copy from Vercel (usually `76.76.21.21`)
   - Proxy status: Click to turn OFF (gray cloud ☁️)
   - Click **"Save"**

5. **Add Second Record:**
   - Click **"Add record"** again
   - Type: `CNAME`
   - Name: `www`
   - Target: `cname.vercel-dns.com`
   - Proxy status: Click to turn OFF (gray cloud ☁️)
   - Click **"Save"**

### 3.3 Wait for DNS Propagation

1. Back in Vercel, click **"Refresh"**
2. It may take 5-10 minutes for DNS to update
3. When ready, you'll see green checkmarks ✅

---

## 🎉 STEP 4: Visit Your Live Site!

Go to: **https://fantasyfootballrpg.com**

Your app is LIVE! 🚀

---

## 🧪 Test Everything

1. Create an account
2. Create a league
3. Check commissioner settings
4. Everything should work exactly like the demo!

---

## ❓ Troubleshooting

### "Domain not found" error
- **Solution**: Wait 10-30 minutes for DNS propagation
- Check DNS records in Cloudflare are correct

### DNS records not showing as valid in Vercel
- **Solution**: Make sure proxy status is OFF (gray cloud) in Cloudflare
- Make sure you entered the records exactly as shown

### Settings button still disappearing
- **Solution**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Should be fixed in production environment

---

## 📞 Need Help?

If you get stuck:
1. Check the main README.md for more details
2. Vercel has live chat support (click the ? icon)
3. DNS changes can take up to 24 hours (but usually 5-10 minutes)

---

## 🎊 Congratulations!

You've deployed your first web app! Now you can:
- Share the link with friends
- Test with real users
- Make updates (just push to GitHub and Vercel auto-deploys)

**Next:** Consider adding Firebase backend for real user accounts (see README.md Phase 2)
