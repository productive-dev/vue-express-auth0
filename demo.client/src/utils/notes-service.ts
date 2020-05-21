import axios from "axios";
import {getAccessToken} from "@/utils/auth-service";

const BASE_URL = "http://localhost:8000";

export { getPublicNotes, getPrivateNotes};

function getPublicNotes() {
  const url = `${BASE_URL}/api/public-notes`;
  return axios.get(url)
    .then((response) => {
      return response.data;
    });
}

function getPrivateNotes() {
  const url = `${BASE_URL}/api/private-notes`;
  return axios.get(
    url,
    { headers:
        { Authorization: `Bearer ${getAccessToken()}` }
    }).then((response) => {
    return response.data;
  });
}
