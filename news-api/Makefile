colon := :
$(colon) := :

setup:
	composer i
	cp .env.example .env
	php artisan key:generate
    php artisan migrate
	php artisan storage$(:)link
	php artisan db:seed NewsSeeder

serve:
	php artisan serve

fresh:
	php artisan migrate$(:)fresh
	rm -fr storage/app/public/images

seed:
	php artisan db$(:)seed NewsApp

.PHONY: art fresh
