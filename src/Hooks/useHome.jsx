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
	const sortByName = () => {
		let sortedCharacters = characters.sort(function (a, b) {
			var textA = a.name.toUpperCase();
			var textB = b.name.toUpperCase();
			return textA < textB ? -1 : textA > textB ? 1 : 0;
		});

		setCharacters([...sortedCharacters]);
	};
	const sortByPortrayed = () => {
		let sortedCharacters = characters.sort(function (a, b) {
			var textA = a.portrayed.toUpperCase();
			var textB = b.portrayed.toUpperCase();
			return textA < textB ? -1 : textA > textB ? 1 : 0;
		});

		setCharacters([...sortedCharacters]);
	};

	const sortByBirthday = () => {
		let sortedCharacters = characters.sort(function (a, b) {
			var textA = a.birthday.toUpperCase();
			var textB = b.birthday.toUpperCase();
			return textA < textB ? -1 : textA > textB ? 1 : 0;
		});

		setCharacters([...sortedCharacters]);
	};

	return {
		characters,
		deaths,
		count,
		sortByName,
		sortByBirthday,
		sortByPortrayed,
	};
};

export default useHome;
