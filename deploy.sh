set -e

npm run build

cd dist

git init
git add .
git commit -m 'deploy'

git push -f git@github.com:khsolah/vue3-pwa-practice.git master:gh-pages

cd -