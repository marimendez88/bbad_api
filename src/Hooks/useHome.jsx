import { apiUrl } from "../Config/config.json";
import { useEffect, useState } from "react";
import axios from "../Config/config";

const useHome = () => {
	const [characters, setCharacters] = useState({ hits: [] });
	const [deaths, setDeaths] = useState([]);
	const [count, setCount] = useState([]);
	const urlCharacter = apiUrl + "characters?limit=6";
	const urlDeaths = apiUrl + "deaths?limit=5";
	const urlCounts = apiUrl + "death-count";

	useEffect(() => {
		const getCharacters = async () => {
			const res = await axios(urlCharacter);
			console.log(res);
			console.log(characters);
			setCharacters(res.data);
		};
		getCharacters();
	}, []);

	useEffect(() => {
		const getDeaths = async () => {
			const res = await axios(urlDeaths);
			setDeaths([...deaths, ...res.data.slice(0, 5)]);
			const c = await fetch(urlCounts);
			const resc = await c.json();
			setCount(resc[0].deathCount);
		};
		getDeaths();
	}, []);

	return {
		characters,
		deaths,
		count,
	};
};

export default useHome;
