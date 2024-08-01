import React, { useState, useEffect } from "react";
import { FaMicrophone, FaTrash, FaRegDotCircle } from "react-icons/fa";
import { RiCornerUpRightDoubleFill } from "react-icons/ri";

import "../index.css";

const Translator = () => {
  const [transcript, setTranscript] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [listening, setListening] = useState(false);
  const [transcriptLanguage, setTranscriptLanguage] = useState("en-IN"); // Language for transcript
  const [translationLanguage, setTranslationLanguage] = useState("hi_IN"); // Language for translation

  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = true;
  recognition.interimResults = true;

  useEffect(() => {
    recognition.lang = transcriptLanguage;
  }, [transcriptLanguage]);

  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        setTranscript((prev) => prev + event.results[i][0].transcript + " ");
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
  };

  const languages = [
    { code: "en-IN", label: "English" },
 { code: "bn-IN", label: "Bengali" },
    { code: "ta-IN", label: "Tamil" },
    { code: "te-IN", label: "Telugu" },
    { code: "ml-IN", label: "Malayalam" },
    { code: "kn-IN", label: "Kannada" },
    { code: "mr-IN", label: "Marathi" },
    { code: "gu-IN", label: "Gujarati" },
    { code: "or-IN", label: "Odia" },
    { code: "as-IN", label: "Assamese" },   
  ];

  const translationLanguages = [
    { code: "hi-IN", label: "Hindi" },
    { code: "en-IN", label: "English" },
    
    { code: "bn-IN", label: "Bengali" },
    { code: "ta-IN", label: "Tamil" },
    { code: "te-IN", label: "Telugu" },
    { code: "ml-IN", label: "Malayalam" },
    { code: "kn-IN", label: "Kannada" },
    { code: "mr-IN", label: "Marathi" },
    { code: "gu-IN", label: "Gujarati" },
    { code: "or-IN", label: "Odia" },
    { code: "as-IN", label: "Assamese" },
    // Add more languages for translation as needed
  ];

  const startListening = () => {
    setListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  const clearText = () => {
    setTranscript("");
    setTranslatedText("");
  };

  return (
    <div className="min-w-[15rem] max-w-[50rem] px-4 pt-4">
      <div className="flex items-center flex-row gap-5">
        <div className="text-richblack-5 custom-scrollbar flex min-h-[6rem] max-h-[6rem] min-w-[30rem] max-w-[30rem] mb-4 p-4 border border-gray-600 bg-gray-800 rounded-lg overflow-y-scroll">
          <p>{transcript}</p>
        </div>
        <div className="text-yellow-200 text-[2rem]">
          <RiCornerUpRightDoubleFill />
        </div>
        <div className="text-white custom-scrollbar flex min-h-[6rem] max-h-[6rem] min-w-[30rem] max-w-[30rem] mb-4 p-4 border border-gray-600 bg-gray-700 rounded-lg overflow-y-scroll">
          <p>{translatedText}</p>
        </div>
      </div>
      <div className=" flex justify-between">
        <div>
          {" "}
          <label
            htmlFor="transcript-language"
            className="block text-white mb-2"
          >
            Select Transcript Language:
          </label>
          <select
            id="transcript-language"
            value={transcriptLanguage}
            onChange={(e) => setTranscriptLanguage(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white mb-4"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          {" "}
          <label
            htmlFor="translation-language"
            className="block text-white mb-2"
          >
            Select Translation Language:
          </label>
          <select
            id="translation-language"
            value={translationLanguage}
            onChange={(e) => setTranslationLanguage(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"
          >
            {translationLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-start items-start gap-5">
        <button
          onMouseDown={startListening}
          onMouseUp={stopListening}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
        >
          {listening ? (
            <div className="flex items-center justify-center">
              <FaRegDotCircle className="text-red-500 mr-2" />
              <span>Release to Stop</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <FaMicrophone className="mr-2 text-green-500" />
              <span>Hold to Talk</span>
            </div>
          )}
        </button>
        <button
          onClick={clearText}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          <div className="flex items-center justify-center">
            <FaTrash className="mr-2" />
            <span>Clear</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Translator;
