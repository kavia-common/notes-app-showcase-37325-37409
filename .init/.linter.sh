#!/bin/bash
cd /home/kavia/workspace/code-generation/notes-app-showcase-37325-37409/notes_app_presentation_frontend
npm run lint
ESLINT_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

