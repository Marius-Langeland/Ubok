export const forrigebokFetcher = <T>(params: {}) : Promise<T> =>
  fetch(`https://forrigebok.no/api/v2023-01-12${new URLSearchParams(params)}`, {
    headers: {
      "X-User-Agent": "Ubok - Røyken VGS (mariuslang@viken.no)",
    },
  }).then((data) => data.json() as T);