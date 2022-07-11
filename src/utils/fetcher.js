import toast from 'react-hot-toast';
import { getLocalToken } from './storage';

export const fetcher = async (URL, content) => {
  let body = { headers: { 'x-access-token': getLocalToken() ? getLocalToken() : '' } };
  if (content) body = { ...body, ...content };

  // let body = {};
  // if (content) body = { ...content };

  const res = await fetch(URL, body);

  let payload;

  try {
    payload = await res.json();
  } catch (e) {
    toast.error('Erreur serveur');
    return null;
  }

  if (res.status !== (204 && 200)) {
    toast.error(payload.message || 'Erreur serveur');
    return payload.message;
  }


  return payload;
};
