import './css/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListUser from './components/ListUser';

function App() {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email }),
      });
      if (response.ok) {
        setMessage('User created successfully!');
        setPassword(''); // Clear password field
        setName('');
        setEmail('');
      } else {
        setMessage('Failed to create user.');
      }
    } catch (error) {
      setMessage('Error: ' + (error as Error).message);
    }
  };

  return (
    <Router>
      <div className="App">
        <nav className="flex gap-4 justify-center my-4">
          <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Create User</Link>
          <Link to="/list" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">List User</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <form className="max-w-md mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Create User</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={username}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
              {message && <div className="mt-4 text-center text-sm text-red-500">{message}</div>}
            </form>
          } />
          <Route path="/list" element={<ListUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
