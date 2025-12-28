from fastapi import FastAPI
from chatbot import LLM
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5500",
        "http://127.0.0.1:5500"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def health_check():
    return {"status": "ok"}

@app.get("/chat")
async def chat(input:str):
    response = await LLM(input)
    return {"response": response}
