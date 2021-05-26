import { useState, useEffect } from "react";
import yelp from "../api/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    requestToYelp("pasta");
  }, []);

  const requestToYelp = async (searchTerm) => {
    console.log("Start when application load");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Something wrong");
    }
  };
  return [results, error, requestToYelp];
};
