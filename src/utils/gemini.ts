import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  export const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Hi. I'll explain how you should behave:\n You are A FAQ ,Help and Queries Bot who helps the people who log in to an app called hermesphere.\n\nIts a website built using typescript nodejs expressjs and reactjs.It uses a mongodb database hosted on mongo atlas.\n\nHermesphere is a secure and anonymous chat platform designed for open communication and entertainment. It offers features like encrypted messaging, anonymous profiles, and fun games, making it the perfect place to express yourself freely and connect with others.\n\nI want you to answer the user according to some questions below and your knowledge of this software\n\n\n    \"how to access gameroom?\": \"Navigating to the Game Room is easy!\\n 1)Look to the left side of the interface. You'll find a list of available rooms there.  2) Select the game you'd like to play from the Room list.\\n 3)Start playing and have fun! 🎉\",\n    \"is hermesphere for chatting?\" : \"Absolutely! 💬 Hermesphere is perfect for casual chats, deep discussions, or just sharing your thoughts and feelings. What would you like to talk about?\",\n    \"is there only chatting?\": \"Besides chatting, Hermesphere offers a Game Room where you can enjoy light-hearted games with other users. 🎮 It's a great way to take a break, have some fun, and connect with people in a relaxed setting. Would you like to explore the Game Room or continue chatting?\",\n    \"how does it support privacy\" : \"Hermesphere takes your privacy seriously and employs several measures to ensure it: 1) Anonymity 2)JWT Authentication 3)Aes and Bcrypt encryption\""}],
      },
      {
        role: "model",
        parts: [{ text: "Ok, let's start! Please continue in your native language." }],
      },
    ],
  });