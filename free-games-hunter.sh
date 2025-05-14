#!/bin/bash

COOKIE_FILE="cookies/storageState.json"

echo "[*] Checking cookie file..."

# Run fetch-only if cookie exists
if [ -f "$COOKIE_FILE" ]; then
  echo "[*] Using saved cookies..."
  node fetch.js
  if [ $? -ne 0 ]; then
    echo "[!] Cookies expired. Logging in again..."
    node login-and-fetch.js
  fi
else
  echo "[!] No cookies found. Logging in..."
  node login-and-fetch.js
fi

