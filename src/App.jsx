import { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
  const initialState = contactsData.slice(0, 5);

  const [contacts, setContact] = useState(initialState);

  const randomContact = () => {
    const random = Math.floor(Math.random() * contactsData.length);
    const randomContact = contactsData[random];

    setContact((prev) => [...prev, randomContact]);
  };

  const sortName = () => {
    setContact((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const sortPopularity = () => {
    setContact((prev) => [...prev].sort((a, b) => b.popularity - a.popularity));
  };

  const deleteElement = (id) => {
    const newList = contacts.filter((contact) => contact.id !== id);
    setContact(newList);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>
                <img
                  key={index}
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="50"
                  height="50"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "⭐️" : ""}</td>
              <td>
                <button onClick={() => deleteElement(contact.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
