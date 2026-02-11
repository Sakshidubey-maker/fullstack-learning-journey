# Git Commands Reference 🚀

## 📌 First Time Setup (Already Done ✅)
```bash
git init
git add .
git commit -m "Initial commit: Organized Full-Stack learning files"
```

---

## 🔗 Connect to GitHub Repository

### Step 1: Create Repository on GitHub
- Go to: https://github.com/Sakshidubey-maker
- Click "New Repository"
- Name: `fullstack-learning-journey`
- Don't initialize with README
- Click "Create repository"

### Step 2: Link and Push
```bash
git branch -M main
git remote add origin https://github.com/Sakshidubey-maker/fullstack-learning-journey.git
git push -u origin main
```

---

## 📝 Daily Git Workflow (After Initial Setup)

### When you make changes:
```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with message
git commit -m "Add: description of what you added"

# Push to GitHub
git push
```

---

## 🔄 Common Git Commands

### Check status
```bash
git status
```

### View commit history
```bash
git log --oneline
```

### Pull latest changes (if working from multiple devices)
```bash
git pull
```

### Create a new branch
```bash
git checkout -b feature-name
```

### Switch branches
```bash
git checkout main
```

### Remove file from Git (but keep locally)
```bash
git rm --cached filename
```

---

## 🔐 GitHub Authentication

### If password doesn't work, use Personal Access Token:
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token → Select `repo` scope
4. Copy token and use as password

### Save credentials (so you don't type every time)
```bash
git config --global credential.helper store
```

---

## 📋 Commit Message Best Practices

```bash
git commit -m "Add: new feature"
git commit -m "Fix: bug in login page"
git commit -m "Update: improved CSS styling"
git commit -m "Remove: unused files"
git commit -m "Refactor: cleaned up code"
```

---

## 🆘 Undo Commands (Use Carefully!)

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Discard all local changes
```bash
git reset --hard
```

### Undo specific file changes
```bash
git checkout -- filename
```

---

## 🌐 Your Repository URL
https://github.com/Sakshidubey-maker/fullstack-learning-journey

---

**💡 Tip:** Commit often with clear messages. Push at least once a day!
