import { useQuery } from '@tanstack/react-query';

const fetchFlickr = async ({ queryKey }) => {
	const baseURL = 'https://www.flickr.com/services/rest/';
	const method_mine = 'flickr.people.getPhotos';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';

	const flickr_api = import.meta.env.VITE_FLICKR_API;
	const myID = '197119297@N02';
	const num = 19;
	let url = '';
	const urlMine = `${baseURL}?method=${method_mine}&api_key=${flickr_api}&user_id=${myID}&per_page=${num}&nojsoncallback=1&format=json`;
	const urlInterest = `${baseURL}?method=${method_interest}&api_key=${flickr_api}&per_page=${num}&nojsoncallback=1&format=json`;
	const urlSearch = `${baseURL}?method=${method_search}&api_key=${flickr_api}&per_page=${num}&nojsoncallback=1&format=json&tags=${queryKey[1].tag}`;

	queryKey[1].type === 'mine' && (url = urlMine);
	queryKey[1].type === 'interest' && (url = urlInterest);
	queryKey[1].type === 'search' && (url = urlSearch);

	const data = await fetch(url);
	const json = await data.json();
	return json.photos.photo;
};

export const useFlickrQuery = opt => {
	return useQuery({
		queryKey: ['flickrQuery', opt],
		queryFn: fetchFlickr,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60
	});
};
