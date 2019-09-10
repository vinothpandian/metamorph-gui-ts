workflow "Deploy to Firebase" {
  on = "push"
  resolves = ["Deploy"]
}

# Only run on `master` branch
action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

# `npm ci`
action "Install" {
  uses = "actions/npm@master"
  args = "ci"
  needs = ["Master"]
}

# `npm run build`
action "Build" {
  uses = "actions/npm@master"
  args = "run build"
  needs = ["Install"]
}

# `firebase deploy`
action "Deploy" {
  uses = "natemoo-re/action-firebase@master"
  args = "deploy"
  secrets = ["FIREBASE_TOKEN"]
  needs = ["Build"]
}