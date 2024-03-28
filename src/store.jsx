import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase";
import "./store.css";

const firestore = getFirestore(app);
var catObj = {};

const Store = () => {
  const [categories, setCategories] = useState({});
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [logo, setLogo] = useState("");
  const [catArray, setCatArray] = useState([]);

  const clickHandler = async () => {
    const docRef = doc(firestore, "stores/nitya_creation");
    const snap = await getDoc(docRef);
    catObj = snap.data().categories;
    let catList = Object.keys(snap.data().categories).sort();
    setName((x) => (x = snap.data().name));
    setDescription((x) => (x = snap.data().description));
    setAdress((x) => (x = snap.data().address));
    setPhone((x) => (x = snap.data().phone));
    setLogo((x) => (x = snap.data().logo));
    setCatArray((x) => (x = catList));
    setCategories(catObj[catList[0]]);
  };

  useEffect(() => {
    clickHandler();
    console.log("initial state loaded");
  }, []);

  const showCategory = (categoryType) => {
    setCategories(catObj[categoryType]);
  };

  const toggleContactPopup = () => {
    setShowContactPopup((showContactPopup) => !showContactPopup);
  };
  const handleClick = () => {
    if (showContactPopup) setShowContactPopup((showContactPopup) => false);
  };
  return (
    <div onClick={handleClick}>
      <header className="store-header">
        <button className="contact-btn" onClick={toggleContactPopup}>
          Contact
        </button>
        <div className="store-logo">
          <img src={logo} className="store-image" />
          <div>{name}</div>
          <div className="store-description">{description}</div>
        </div>
      </header>

      <div
        className="contact-popup"
        style={{ display: !showContactPopup ? "none" : "block" }}
      >
        <p>Mobile: {phone}</p>
        <p>Address: {address}</p>
      </div>

      <nav className="menu-bar">
        <ul className="menu">
          {catArray.map((cat) => (
            <li key={cat} onClick={() => showCategory(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      </nav>
      <main className="category-grid">
        {Object.entries(categories).map(([key, value], index) => (
          <div className="category-card" key={index}>
            <img src={key} alt={value} />
            <h3>{value}</h3>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Store;
