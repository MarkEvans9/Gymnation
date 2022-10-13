export const options = {
  method: "GET",
  //
  // "6e43f6ea87msh0f3c3f3e5dc753bp19a847jsn0471e0e12b56"

  headers: {
    "X-RapidAPI-Key": "dae40bbeacmshafa1b516f6cb916p1105f0jsn5f983a17da01",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const responce = await fetch(url, options);
  const data = responce.json();
  return data;
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "6e43f6ea87msh0f3c3f3e5dc753bp19a847jsn0471e0e12b56",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
