#!/bin/bash

echo "Iniciando o backend..."
cd backend-cloudged
npm run dev &
cd ..

echo "Iniciando o frontend..."
cd frontend-cloudged
npm run dev &
cd ..

# Espera que ambos os comandos sejam concluídos
wait

echo "Front-end e backend iniciados!."
