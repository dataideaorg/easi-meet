import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const meetingID = formData.get("meetingID") as string;
    const userName = formData.get("userName") as string;
    if (meetingID && userName) {
      window.location.href = `/meeting?roomID=${meetingID}&userName=${userName}`;
    }
  };

  const handleCreateMeeting = () => {
    const meetingID = Math.floor(Math.random() * 10000).toString();
    const userName = `userName${Math.floor(Math.random() * 10000)}`;
    navigate(`/meeting?roomID=${meetingID}&userName=${userName}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <h1 className="text-white text-3xl text-center">DATAIDEA Meet</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Join a Meeting</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Meeting ID</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Meeting ID"
                name="meetingID"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Name"
                name="userName"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Join Meeting
            </button>
          </form>
          <div className="mt-4 text-center">
            <button
              onClick={handleCreateMeeting}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Create New Meeting
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 w-full py-4 text-center text-white">
        &copy; 2025 DATAIDEA Meet. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
