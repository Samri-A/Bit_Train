# Bit_Train

Bit_Train is a full-stack fitness tracking web application featuring a React frontend and a Django REST API backend. The backend uses Django models for users, workouts, settings, and gyms, and integrates with Firebase for additional data management.

## Features
- User registration, authentication, and profile management
- Workout and gym tracking
- User settings (including dark mode)
- RESTful API built with Django REST Framework
- Firebase integration for real-time data
- Modern React frontend using Material UI

## Project Structure
- `frontend/` - React application (user interface)
- `server/` - Django backend (API, models, Firebase integration)
- `env/` - Python virtual environment

## Getting Started
### Backend (Django)
1. Create and activate a Python virtual environment (if not already present)
2. Install dependencies: `pip install -r requirements.txt`
3. Apply migrations: `python manage.py migrate` (from the `server` directory)
4. Run the server: `python manage.py runserver`

### Frontend (React)
1. Install dependencies: `cd frontend && npm install`
2. Start the development server: `npm start`

## API Endpoints
- `/api/users/` - User CRUD operations
- `/api/workout/` - Workout tracking
- `/api/settings/` - User settings
- `/admin/` - Django admin panel

## License
This project is licensed under the MIT License.