#!/bin/bash

# Start the API server in the background
echo "Starting API server..."
npm run server &
API_PID=$!

# Wait a moment for the API server to start
sleep 2

# Start the Vite development server
echo "Starting Vite development server..."
npm run dev &
VITE_PID=$!

# Function to cleanup on exit
cleanup() {
    echo "Shutting down servers..."
    kill $API_PID 2>/dev/null
    kill $VITE_PID 2>/dev/null
    exit 0
}

# Trap Ctrl+C to cleanup
trap cleanup SIGINT

# Wait for both processes
wait
