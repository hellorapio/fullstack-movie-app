docker-compose up db -d

sleep 6

cd backend
npm run migrate

cd ..
docker-compose up backend --build -d

sleep 1

cd frontend
npm run dev
