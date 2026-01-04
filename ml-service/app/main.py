from fastapi import FastAPI
from app.routes.health import router as health_router

app = FastAPI(title="FEM-CARE ML Service")

# Register routes
app.include_router(health_router)
