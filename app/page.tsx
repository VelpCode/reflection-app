"use client";

import { useState } from 'react';

export default function Home() {
  const [mood, setMood] = useState('');
  const [journal, setJournal] = useState('');
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleGPTRequest = async () => {
    const res = await fetch('/api/generatePrompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood }),
    });
    const data = await res.json();
    setPrompt(data.prompt);
  };

  const handleSaveJournal = () => {
    // Save journal entry logic (to database/local storage)
    alert('Journal entry saved!');
    setJournal('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Self Reflection</h1>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">How are you feeling today?</h2>
        <select
          className="w-full p-2 border rounded mb-4"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        >
          <option value="">Select your mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="reflective">Reflective</option>
          <option value="anxious">Anxious</option>
        </select>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleGPTRequest}
        >
          Generate Reflection Prompt
        </button>

        {prompt && (
          <div className="mt-4">
            <h3 className="text-lg font-medium">Your Reflection Prompt:</h3>
            <p className="text-gray-700 mt-2">{prompt}</p>
          </div>
        )}

        <textarea
          className="w-full p-2 border rounded mt-4"
          placeholder="Write your journal entry..."
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
        ></textarea>
        <button
          className="w-full bg-green-500 text-white p-2 rounded mt-4"
          onClick={handleSaveJournal}
        >
          Save Journal Entry
        </button>
      </div>
    </div>
  );
}
