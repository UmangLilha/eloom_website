import React, { useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "./firebase";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import "./store.css";

const firestore = getFirestore(app);
var catObj = {};

const Store = () => {
  const { storeid } = useParams();

  const [categories, setCategories] = useState({});
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [logo, setLogo] = useState("");
  const [catArray, setCatArray] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  const clickHandler = async () => {
    try {
      const collectionRef = collection(firestore, "stores");
      const q = query(collectionRef, where("storeid", "==", storeid));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setIsNotFound(true);
      } else {
        let dataObj = querySnapshot.docs[0].data();
        catObj = dataObj.categories;
        let catList = Object.keys(dataObj.categories).sort();
        setName((x) => (x = dataObj.name));
        setDescription((x) => (x = dataObj.description));
        setAdress((x) => (x = dataObj.address));
        setPhone((x) => (x = dataObj.phone));
        setLogo((x) => (x = dataObj.logo));
        setCatArray((x) => (x = catList));
        setCategories(catObj[catList[0]]);
      }
    } catch (error) {
      console.log("Error getting data. Please try again later:", error);
    }
  };

  useEffect(() => {
    clickHandler();
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
  return isNotFound ? (
    <NotFound />
  ) : (
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
