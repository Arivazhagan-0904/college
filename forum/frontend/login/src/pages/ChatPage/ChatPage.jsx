import React from 'react';
import { useState } from 'react';
import "./ChatPage.css"

const ChatPage = () => {
  const [selectedGroup,setSelectedGroup] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [personalChatUser, setPersonalChatUser] = useState(null);


  const groups = ["Group 1", "Group 2", "Group 3", "Group 4"];
  const users = ["Alice", "Bob", "Charlie", "David"];

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      setResults(users.filter((user) => user.toLowerCase().includes(query.toLowerCase())));
    } else {
      setResults([]);
    }
  };
  if (personalChatUser) {
    return (
      <div className="chat-page" style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "10px" }}>
        <button onClick={() => setPersonalChatUser(null)} style={{ marginBottom: "10px", cursor: "pointer" }}>
          Back to Groups
        </button>
        <h3>Chat with {personalChatUser}</h3>
        <div
          style={{
            height: "70%",
            overflowY: "auto",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p>
            <b>You:</b> Hello {personalChatUser}!
          </p>
          <p>
            <b>{personalChatUser}:</b> Hi there!
          </p>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />
      </div>
    );
  }

  return (
    <div className="chat-page" style={{ display: "flex", height: "100vh" }}>
      {/* Group List Section */}
      <div style={{ width: "20%", borderRight: "1px solid #ddd", padding: "10px" }}>
        <h3>Groups</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {groups.map((group) => (
            <li
              key={group}
              onClick={() => setSelectedGroup(group)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: selectedGroup === group ? "#f0f0f0" : "transparent",
              }}
            >
              {group}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Content Section */}
      <div style={{ width: "60%", padding: "10px" }}>
        {!selectedGroup ? (
          <div>Select a group to start chatting.</div>
        ) : (
          <div>
            <h3>{selectedGroup} Chat</h3>
            <div
              style={{
                height: "70%",
                overflowY: "auto",
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p>
                <b>User1:</b> Hi everyone!
              </p>
              <p>
                <b>User2:</b> Hello!
              </p>
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              style={{ width: "100%", padding: "10px", marginTop: "10px" }}
            />
          </div>
        )}
      </div>

      {/* Search Bar Section */}
      <div style={{ width: "20%", borderLeft: "1px solid #ddd", padding: "10px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search users..."
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {results.map((user) => (
            <li
              key={user}
              onClick={() => setPersonalChatUser(user)}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatPage