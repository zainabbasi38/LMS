#  0. Importing the necessary libraries
from agents import Agent, Runner, OpenAIChatCompletionsModel, AsyncOpenAI

import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

external_client: AsyncOpenAI = AsyncOpenAI(
    api_key=os.getenv("GEMINI_API_KEY"),
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

llm_model: OpenAIChatCompletionsModel = OpenAIChatCompletionsModel(
    model="gemini-2.5-flash",
    openai_client=external_client
)
async def LLM(prompt:str) -> str:
        
    # 3. Creating the Agent
    agent: Agent = Agent(name="Assistant", model=llm_model)

    # 4. Running the Agent
    result = await Runner.run(starting_agent=agent, input=prompt)
    return result.final_output