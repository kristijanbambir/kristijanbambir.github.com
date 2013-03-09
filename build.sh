uglifyjs ./scripts/vendor/jquery/jquery.js ./scripts/vendor/bootstrap/docs/assets/js/bootstrap.js ./scripts/main.js -o ./scripts/main.min.js -c -m
lessc ./css/main.less > ./css/main.css
lessc -x ./css/main.less > ./css/main.min.css