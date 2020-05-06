import { apiUrl } from "../Config/config.json";
import { useEffect, useState } from "react";
import axios from "../Config/config";

const useEpisodes = () => {
	const [episodes, setEpisodes] = useState([]);
	const urlCharacter = apiUrl + "episodes?limit=6&offset=1";
	useEffect(() => {
		const getEpisodes = async () => {
			const res = await axios(urlCharacter);
			setEpisodes(res.data.slice(0, 8));
		};
		getEpisodes();
	}, []);
	return {
		episodes,
	};
};

export default useEpisodes;
