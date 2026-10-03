# Git & GitHub — A Practical Guide

A beginner-friendly reference for Git commands and GitHub workflows, with syntax, useful options, and examples.

> **Git** is a version control tool that runs on your computer.
> **GitHub** is a website that hosts Git repositories online so you can share and collaborate.
>
> **Tip:** For any command, run `git help <command>` or `git <command> -h`.

---

## Table of Contents

1. [Installation and Setup](#1-installation-and-setup)
2. [Key Concepts](#2-key-concepts)
3. [Creating a Repository](#3-creating-a-repository)
4. [The Basic Workflow](#4-the-basic-workflow)
5. [Checking Status and History](#5-checking-status-and-history)
6. [Branches](#6-branches)
7. [Merging and Rebasing](#7-merging-and-rebasing)
8. [Working with Remotes (GitHub)](#8-working-with-remotes-github)
9. [Undoing Changes](#9-undoing-changes)
10. [Stashing](#10-stashing)
11. [Tags and Releases](#11-tags-and-releases)
12. [The .gitignore File](#12-the-gitignore-file)
13. [SSH Authentication with GitHub](#13-ssh-authentication-with-github)
14. [Pull Requests and Forks](#14-pull-requests-and-forks)
15. [GitHub CLI (gh)](#15-github-cli-gh)
16. [Writing Good Commit Messages](#16-writing-good-commit-messages)
17. [Common Problems and Fixes](#17-common-problems-and-fixes)

---

## 1. Installation and Setup

**Install Git**

```bash
# Ubuntu / Debian
sudo apt install git

# Fedora
sudo dnf install git

# macOS (with Homebrew)
brew install git

# Windows: download from https://git-scm.com/download/win
```

**Check the version**

```bash
git --version
```

**Configure your identity (do this once)**

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main     # new repos start on "main"
git config --global core.editor "code --wait"   # use VS Code as editor

git config --list                               # show all settings
git config user.name                            # show one setting
```

> Use the same email as your GitHub account so commits are linked to your profile.

---

## 2. Key Concepts

| Term | Meaning |
|------|---------|
| **Repository (repo)** | A project folder tracked by Git |
| **Working directory** | The files you are currently editing |
| **Staging area (index)** | Changes selected to go into the next commit |
| **Commit** | A saved snapshot of your project |
| **Branch** | An independent line of development |
| **HEAD** | Pointer to the commit/branch you are on |
| **Remote** | A copy of the repo hosted elsewhere (e.g. GitHub) |
| **origin** | The default name of the main remote |
| **Clone** | Download a full copy of a remote repo |
| **Push / Pull** | Send / receive commits to / from a remote |
| **Pull Request (PR)** | A GitHub request to merge one branch into another |
| **Fork** | Your own GitHub copy of someone else's repo |

**The three areas:**

```
 Working Directory  --git add-->  Staging Area  --git commit-->  Local Repo  --git push-->  GitHub
        ^                                                            |
        +-------------------------- git pull ------------------------+
```

---

## 3. Creating a Repository

**Start a new repo locally**

```bash
mkdir my-project
cd my-project
git init                        # creates a hidden .git folder
```

**Clone an existing repo from GitHub**

```bash
git clone https://github.com/user/repo.git          # via HTTPS
git clone git@github.com:user/repo.git              # via SSH
git clone https://github.com/user/repo.git my-dir   # into a custom folder
```

**Push a new local project to GitHub**

1. Create an empty repository on [github.com/new](https://github.com/new) (no README).
2. Run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/user/repo.git
git push -u origin main
```

---

## 4. The Basic Workflow

```bash
# 1. Edit files...

# 2. See what changed
git status

# 3. Stage changes
git add file.txt                # one file
git add src/                    # a folder
git add .                       # everything in current directory
git add -p                      # pick changes interactively, hunk by hunk

# 4. Commit
git commit -m "Add login page"
git commit -am "Fix typo"       # stage tracked files + commit in one step

# 5. Upload to GitHub
git push
```

**Remove or rename tracked files**

```bash
git rm file.txt                 # delete and stage the deletion
git rm --cached secret.env      # stop tracking but keep the file locally
git mv old.txt new.txt          # rename and stage
```

---

## 5. Checking Status and History

```bash
git status                      # what's modified, staged, untracked
git status -s                   # short format

git diff                        # unstaged changes
git diff --staged               # staged changes (what will be committed)
git diff main..feature          # difference between two branches

git log                         # full commit history
git log --oneline               # one line per commit
git log --oneline --graph --all # visual branch graph
git log -n 5                    # last 5 commits
git log --author="Ayham"        # commits by author
git log -- file.txt             # history of a single file

git show <commit-hash>          # details of a specific commit
git blame file.txt              # who changed each line, and when
```

---

## 6. Branches

```bash
git branch                      # list local branches
git branch -a                   # include remote branches
git branch feature-login        # create a branch

git switch feature-login        # move to a branch
git switch -c feature-login     # create and switch in one step
# older equivalent:
git checkout feature-login
git checkout -b feature-login

git branch -m old-name new-name # rename a branch
git branch -d feature-login     # delete (only if merged)
git branch -D feature-login     # force delete

git push origin --delete feature-login   # delete branch on GitHub
```

> **Good practice:** never work directly on `main`. Create a branch for each feature or fix.

---

## 7. Merging and Rebasing

**Merge** — combine another branch into the current one:

```bash
git switch main
git merge feature-login
```

**Resolving merge conflicts**

When Git can't merge automatically, it marks the conflict in the file:

```
<<<<<<< HEAD
text from main
=======
text from feature-login
>>>>>>> feature-login
```

Fix it by editing the file to the final version, removing the markers, then:

```bash
git add file.txt
git commit                      # completes the merge
# or cancel the merge:
git merge --abort
```

**Rebase** — replay your commits on top of another branch (cleaner, linear history):

```bash
git switch feature-login
git rebase main
# after fixing conflicts:
git add file.txt
git rebase --continue
# or cancel:
git rebase --abort
```

**Interactive rebase** — squash, reorder, or edit the last N commits:

```bash
git rebase -i HEAD~3
```

> **Warning:** don't rebase commits that are already pushed and shared with others.

**Cherry-pick** — copy a single commit into the current branch:

```bash
git cherry-pick <commit-hash>
```

---

## 8. Working with Remotes (GitHub)

```bash
git remote -v                               # list remotes
git remote add origin <url>                 # add a remote
git remote set-url origin <new-url>         # change URL
git remote remove origin                    # remove a remote

git fetch                                   # download changes, don't merge
git pull                                    # fetch + merge
git pull --rebase                           # fetch + rebase (cleaner history)

git push                                    # push current branch
git push -u origin feature-login            # push new branch and set upstream
git push --tags                             # push tags
git push --force-with-lease                 # safe force push (after rebase)
```

> Prefer `--force-with-lease` over `--force`: it refuses to overwrite work someone else pushed.

---

## 9. Undoing Changes

| Situation | Command |
|-----------|---------|
| Discard changes in a file (not staged) | `git restore file.txt` |
| Unstage a file (keep changes) | `git restore --staged file.txt` |
| Change the last commit message | `git commit --amend -m "New message"` |
| Add a forgotten file to the last commit | `git add file.txt` then `git commit --amend --no-edit` |
| Undo last commit, keep changes staged | `git reset --soft HEAD~1` |
| Undo last commit, keep changes unstaged | `git reset HEAD~1` |
| Undo last commit and delete changes | `git reset --hard HEAD~1` |
| Undo a pushed commit safely | `git revert <commit-hash>` |
| Remove untracked files | `git clean -fd` (preview with `git clean -n`) |
| Recover a "lost" commit | `git reflog` then `git reset --hard <hash>` |

> **Warning:** `git reset --hard` and `git clean -fd` permanently delete uncommitted work.
> For commits already pushed to GitHub, use `git revert` instead of `reset`.

---

## 10. Stashing

Temporarily save uncommitted changes so you can switch branches:

```bash
git stash                       # save changes and clean working directory
git stash push -m "wip login"   # stash with a message
git stash -u                    # include untracked files
git stash list                  # list stashes
git stash pop                   # re-apply latest stash and remove it
git stash apply stash@{1}       # re-apply a specific stash, keep it
git stash drop stash@{0}        # delete a stash
git stash clear                 # delete all stashes
```

---

## 11. Tags and Releases

Tags mark specific commits, usually versions:

```bash
git tag                         # list tags
git tag v1.0.0                  # lightweight tag
git tag -a v1.0.0 -m "First release"   # annotated tag (recommended)
git push origin v1.0.0          # push one tag
git push --tags                 # push all tags
git tag -d v1.0.0               # delete local tag
git push origin --delete v1.0.0 # delete tag on GitHub
```

On GitHub, go to **Releases → Draft a new release** to turn a tag into a release with notes and downloadable files.

---

## 12. The .gitignore File

A `.gitignore` file in the repo root lists files Git should not track:

```gitignore
# Dependencies
node_modules/
venv/

# Environment / secrets
.env
*.key

# Build output
dist/
build/

# OS / editor files
.DS_Store
Thumbs.db
.vscode/

# Logs
*.log
```

If a file was already committed, ignoring it isn't enough — untrack it:

```bash
git rm --cached .env
git commit -m "Stop tracking .env"
```

> Templates for every language: [github.com/github/gitignore](https://github.com/github/gitignore)

---

## 13. SSH Authentication with GitHub

SSH lets you push without typing a password or token each time.

```bash
# 1. Generate a key
ssh-keygen -t ed25519 -C "you@example.com"

# 2. Start the agent and add the key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. Copy the public key
cat ~/.ssh/id_ed25519.pub
```

4. On GitHub: **Settings → SSH and GPG keys → New SSH key**, paste the key.
5. Test the connection:

```bash
ssh -T git@github.com
# Hi username! You've successfully authenticated...
```

6. Switch an existing repo from HTTPS to SSH:

```bash
git remote set-url origin git@github.com:user/repo.git
```

> If you use HTTPS instead, GitHub requires a **Personal Access Token** (Settings → Developer settings → Personal access tokens) rather than your password.

---

## 14. Pull Requests and Forks

**Typical team workflow (same repo)**

```bash
git switch main
git pull
git switch -c feature/add-search
# ...edit, add, commit...
git push -u origin feature/add-search
```

Then on GitHub: click **Compare & pull request**, describe your changes, request reviewers, and merge once approved.

**Contributing to someone else's project (fork workflow)**

1. Click **Fork** on the project's GitHub page.
2. Clone *your* fork and add the original as `upstream`:

```bash
git clone git@github.com:your-user/project.git
cd project
git remote add upstream https://github.com/original-owner/project.git
```

3. Keep your fork up to date:

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

4. Create a branch, push it to your fork, and open a Pull Request to the original repo.

---

## 15. GitHub CLI (gh)

The official command-line tool for GitHub. Install from [cli.github.com](https://cli.github.com).

```bash
gh auth login                       # log in to GitHub

gh repo create my-app --public      # create a new repo
gh repo clone user/repo             # clone
gh repo view --web                  # open repo in browser

gh pr create --title "Add search" --body "Details..."   # open a PR
gh pr list                          # list PRs
gh pr checkout 42                   # check out PR #42 locally
gh pr view 42 --web                 # open PR in browser
gh pr merge 42                      # merge a PR

gh issue create --title "Bug: login fails"
gh issue list
gh issue close 10

gh run list                         # GitHub Actions runs
gh run view                         # details of a run
```

---

## 16. Writing Good Commit Messages

- Use the **imperative mood**: "Add feature", not "Added feature".
- Keep the first line under ~50 characters.
- Leave a blank line, then explain **why** in the body if needed.
- Make small, focused commits — one logical change each.

A popular convention is **Conventional Commits**:

```
feat: add user registration form
fix: correct date format on profile page
docs: update installation steps in README
style: format code with prettier
refactor: simplify auth middleware
test: add tests for cart total
chore: bump dependencies
```

---

## 17. Common Problems and Fixes

| Problem | Fix |
|---------|-----|
| `rejected — non-fast-forward` when pushing | Someone pushed first: `git pull --rebase` then `git push` |
| Committed to `main` instead of a branch | `git switch -c new-branch`, then on main: `git reset --hard origin/main` |
| Committed a secret (password, API key) | Revoke the secret immediately, then remove it from history (e.g. `git filter-repo`) |
| `fatal: not a git repository` | You're outside the project folder, or need `git init` |
| `Permission denied (publickey)` | SSH key not added to GitHub — see [section 13](#13-ssh-authentication-with-github) |
| Detached HEAD state | `git switch main` (or `git switch -c new-branch` to keep the work) |
| Huge file rejected by GitHub (>100 MB) | Use [Git LFS](https://git-lfs.com): `git lfs track "*.psd"` |
| Line ending warnings (Windows) | `git config --global core.autocrlf true` |

---

## Quick Practice Exercise

```bash
mkdir git-practice && cd git-practice
git init
echo "# Git Practice" > README.md
git add README.md
git commit -m "docs: add README"

git switch -c feature/hello
echo "Hello, Git!" > hello.txt
git add hello.txt
git commit -m "feat: add hello file"

git switch main
git merge feature/hello
git log --oneline --graph --all
git branch -d feature/hello

# Then create an empty repo on GitHub and push:
git remote add origin https://github.com/<your-user>/git-practice.git
git push -u origin main
```

---

**Happy coding!**

