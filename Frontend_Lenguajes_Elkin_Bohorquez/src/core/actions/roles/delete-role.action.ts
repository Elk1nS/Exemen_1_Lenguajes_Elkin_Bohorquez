import { AxiosError } from "axios";
import { ApiErrorResponse } from "../../../infrastructure/interfaces/api-error.response";


export const deleteRoleAction = async (
    roleId: string
): Promise<ApiResponse<RoleResponse>> => {

    try {

        const { data } = await personsApi
            .delete<ApiResponse<RoleResponse>>(
                `/roles/${roleId}`,

            );

        return data;

    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;

        if (apiError.response) {
            throw new Error(apiError.response.data.message)
        } else if (apiError.request) {
            throw new Error("Error de conexión.")
        } else {
            throw new Error("Error desconocido.")
        }

    }

}
