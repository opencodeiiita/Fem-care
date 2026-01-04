# ML Service

A FastAPI-based machine learning service for the Fem-care application.

## Features

- Health check endpoint for service monitoring
- FastAPI framework for high-performance API development
- Ready for ML model integration

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the service:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8002
```

## API Endpoints

### Health Check
- **GET** `/health`
- Returns service status
- Response: `{"status": "ok", "service": "ml-service"}`

## Project Structure

```
ml-service/
├── app/
│   ├── main.py          # FastAPI application
│   └── routes/
│       └── health.py    # Health check endpoint
├── requirement.txt      # Python dependencies
└── README.md           # This file
```