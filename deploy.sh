set -e
yarn build
cd dist
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:mcx2020/accounting.git master:gh-pages
git push -f git@gitee.com:mcx2020/accounting.git master
cd ..