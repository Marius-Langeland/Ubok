export enum Type{
  Work = "work",
  Readalikes = "readalikes",
  Vocabulary = "vocabulary"
}

export const forrigebokFetcher = <T>(type: Type, params: {}) =>
  fetch(`https://forrigebok.no/api/v2023-01-12/${type}?${new URLSearchParams(params)}`, {
    headers: {
      "Client-Identifier": "Ubok - Røyken VGS (mariuslang@viken.no)",
    },
  }).then((data) => data.json() as T);
