# FEM-CARE ML Service

This service provides foundational endpoints for the FEM-CARE machine learning pipeline.

## Health Check Endpoint

Used to verify that the ML service is running and reachable.

### Run the server

```bash
uvicorn app.main:app --reload
