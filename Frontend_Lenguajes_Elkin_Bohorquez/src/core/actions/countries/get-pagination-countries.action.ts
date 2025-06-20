import { AxiosError } from "axios";
import { ApiErrorResponse} from "../../../infrastructure/interfaces/api-error.response";
import { personsApi } from "../../api/persons.api"
import { ApiResponse } from "../../../infrastructure/interfaces/api.response";
import { PageResponse } from "../../../infrastructure/interfaces/page.response";
import { CountryResponse } from "../../../infrastructure/interfaces/countries.response";

export const getPaginationCountriesAction = async (page = 1, pageSize = 10, searchTerm = ""): Promise<ApiResponse<PageResponse<CountryResponse>>> => {
    try {
        //const { data } = await personsApi
        //.get<ApiResponse<PageResponse<CountryResponse>>>(`/countries?searchTerm=${searchTerm}&page=${page}&pageSize=${pageSize}`);
        const { data } = await personsApi
        .get<ApiResponse<PageResponse<CountryResponse>>>(`/countries`, {
               params: {
                page,
                pageSize,
                searchTerm
               }
            });
        return data

    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;
        console.error(apiError);

        if(apiError.response)
        {
            throw new Error(apiError.response.data.message);
        } else if (apiError.request) {
            throw new Error("Error de conexion");
        } else {
            throw new Error("Error desconocido");
        }
    }
}