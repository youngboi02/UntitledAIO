import { fetcher } from '@/utils/fetcher';
import useSWR from 'swr'


/**
     * requete vers l'api
     * mutate : element de mutation : permet de modifier l etat anterieur
     * data : objet demande
     * error : si erreur
     * isvalidating :
     * @returns 
     */
 export const getInventaire = () => {
    const { data, error, mutate, isValidating } = useSWR('/api/user', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
    });

    return {
        user: data && data.user ? data.user : null,
        isLoading: !error && !data && isValidating,
        isError: error,
        mutate,
        isValidating,
    };
};