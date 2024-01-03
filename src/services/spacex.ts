import { type APISpaceXResponse } from "../type/api";
import { type Doc } from "../type/api";

export const getLaunchById = async ({id}: {id: string}) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  const launche  = (await res.json()) as Doc;
  return launche
}

export const getLatestLaunches = async () => {
  const rest = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content.Type": "applications/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 20,
      },
    }),
  });
  const { docs: launches } = (await rest.json()) as APISpaceXResponse;
  return launches
}

