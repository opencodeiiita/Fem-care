from fastapi import FastAPI
from app.routes.health import router as health_router

app = FastAPI(title="ML Service")

app.include_router(health_router)
