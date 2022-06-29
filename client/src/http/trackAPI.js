import { $authHost, $host } from "./index";

export const fetchTracks = async () => {
  const {data} = await $host.get('api/music')
  return data
}

export const fetchOneTrack = async (id) => {
  const {data} = await $host.get('api/music/' + id)
  return data
}

export const createTrack = async (track) => {
  const {data} = await $authHost.post('api/music', track)
  return data
}