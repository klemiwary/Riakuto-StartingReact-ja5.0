#!/bin/sh

# eslint-each.sh
#   execute eslint entry in each projects recursively
#
#   Riakuto! Project by Klemiwary Books

stagedFiles="$@"
fileTypes="js|mjs|cjs|ts|mts|cts|jsx|tsx"
srcDir="src|app|pages"

# detect git against tag
if git rev-parse --verify HEAD >/dev/null 2>&1
then
  against=HEAD
else
  # Initial commit: diff against an empty tree object
  against=$(git hash-object -t tree /dev/null)
fi

# detect staged projects
stagedProjects=$(
  echo "$stagedFiles" | \
  tr " " "\n" | \
  grep -E "\/($srcDir)\/" | \
  grep -E "^.*\/.*\.($fileTypes)$" | \
  sed -r "s/\/($srcDir)\/.*$//g" | \
  uniq
)

# execute each lint-staged
rootDir=$(pwd | sed -r "s/\/\.git\/hooks//")

for project in $stagedProjects; do
  cd "$rootDir/$project"

  if [ -e "eslint.config.js" ]; then
    echo "execute eslint in '$project'"
    targetFiles=$(
      echo "$stagedFiles" | \
      tr " " "\n" | \
      grep "$project" | \
      grep -E "^.*\/.*\.($fileTypes)$" | \
      sed "s|$project/||g" | \
      tr "\n" " "
    )
    pnpm exec eslint --fix --quiet $targetFiles
  fi
done
