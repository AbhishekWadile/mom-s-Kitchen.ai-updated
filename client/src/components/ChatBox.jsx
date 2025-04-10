import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChatBot = ({ selectedIngredients }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [displayedAnswer, setDisplayedAnswer] = useState("");
  const typingInterval = useRef(null);
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate('/');
  }
  // Update question box with selected ingredients
  useEffect(() => {
    setQuestion(selectedIngredients.join(", "));
  }, [selectedIngredients]);

  async function generateAnswer() {
    setAnswer(" Generating Recipe for you......   \n");
    setDisplayedAnswer(""); // Reset displayed answer

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCHrQPatxa4br9w2NQyyWm_yywWuvrAYNU",
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      // Check if response is valid
      const generatedText =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Failed to retrieve recipe.";
      console.log(generatedText);
      setAnswer(generatedText);
      console.log(answer);
    } catch (error) {
      setAnswer("Failed to generate recipe. Please try again.");
    }
  }

  // Typing Effect for Bot Response
  useEffect(() => {
    if (!answer) return;

    let index = 0;
    clearInterval(typingInterval.current);

    typingInterval.current = setInterval(() => {
      if (index < answer.length) {
        setDisplayedAnswer((prev) => prev + answer[index]);
        index++;
      } else {
        clearInterval(typingInterval.current);
      }
    }, 20); // Speed of typing effect

    return () => clearInterval(typingInterval.current);
  }, [answer]);

  return (
    <div className="bg-sky-100 p-4 rounded-lg shadow-md">
      <h1 className="text-2xl flex gap-[72vh] font-bold mb-4 alignment- centre">
        Mom AI - Recipe Generator{" "}
        <div>
          <button onClick={()=>{handleClick()}} className="bg-red-400 text-white flex justify-center items-center p-[2vh] rounded-md text-[2.5vh]">Back to Home</button>
        </div>
      </h1>

      <textarea
        className="border rounded w-full mb-4 p-2"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="10"
        rows="3"
        placeholder="Which ingredients recipe do you want today?"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={generateAnswer}
      >
        Generate Recipe
      </button>

      <div className="mt-4">
        <pre className="whitespace-pre-wrap font-inter font-semibold text-lg leading-relaxed">
          {displayedAnswer
            .replaceAll("**", "")
            .replaceAll("#", "\n")
            .replaceAll("*", "")
            .replaceAll("undefined", "")}
        </pre>
      </div>
    </div>
  );
};

export default ChatBot;
