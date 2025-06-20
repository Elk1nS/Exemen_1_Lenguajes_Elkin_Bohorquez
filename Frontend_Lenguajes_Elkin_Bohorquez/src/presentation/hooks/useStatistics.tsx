import { useQuery } from "@tanstack/react-query"
import { countsAction } from "../../core/actions/statistics/counts.action";

export const useStatistics = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['/statistics/counts'], // usique key - valor unico
        queryFn: countsAction, // Function to fetch data
        staleTime: 1000 * 60 * 60 * 24, // 24 hours cache
        refetchOnWindowFocus: false, // evitar que se vuelva a hacer peticion de datos
    });

    

    return {
        // podemos extraer propiedades y metodos
        //Properties
         data,
         isLoading,
         error,


        //Methods
    }
}