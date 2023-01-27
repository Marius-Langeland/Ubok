export const forrigebokFetcher = <T>(path: string) =>
  fetch(`https://forrigebok.no/api/v2023-01-12${path}`, {
    headers: {
      "X-User-Agent": "Ubok - Røyken VGS (mariuslang@viken.no)",
    },
  }).then((data) => data.json() as T);