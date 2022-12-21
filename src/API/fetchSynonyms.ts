const API_URL = `https://api.datamuse.com`;

export const fetchSynonyms = async (word: string) => {
  const response = await fetch(`${API_URL}/words?rel_syn=${word}`);
  return await response.json();
};
