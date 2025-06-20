import { AxiosError } from "axios";
import { ApiErrorResponse} from "../../../infrastructure/interfaces/api-error.response";
import { Statistics } from "../../../infrastructure/interfaces/statistics.response";
import { personsApi } from "../../api/persons.api"
import { ApiResponse } from "../../../infrastructure/interfaces/api.response";

export const countsAction = async (): Promise<ApiResponse<Statistics>> => {
    try {
        const { data } = await personsApi.get<ApiResponse<Statistics>>("/statistics/counts");
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