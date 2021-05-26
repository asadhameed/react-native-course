import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [results, error, requestToYelp] = useResult();

  const filterResultByPrice = (price) => {
    return results.filter((item) => item.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => requestToYelp(term)}
      />
      {error ? <Text>Something wrong with Internet</Text> : null}
      <ScrollView>
        <ResultList title="Cost Effective" data={filterResultByPrice("$")} />
        <ResultList title="Bit Pricier" data={filterResultByPrice("$$")} />
        <ResultList title="Big Spender" data={filterResultByPrice("$$$$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
