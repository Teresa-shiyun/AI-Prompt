from fastapi import FastAPI

app = FastAPI(title="Prompt Engineer Replacement API")

@app.get("/health")
def health():
    return {"status": "ok"}
