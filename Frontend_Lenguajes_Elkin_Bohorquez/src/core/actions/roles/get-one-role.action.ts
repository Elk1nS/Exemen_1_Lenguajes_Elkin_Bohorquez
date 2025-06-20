

export const getOneRoleAction = async (roleId: string): 
Promise<ApiResponse<OneRoleResponse>> => {

    try {

        const { data } = await personsApi
        .get<ApiResponse<OneRoleResponse>>(`/roles/${roleId}`);

        return data
        
    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;
        
                if(apiError.response) {
                    throw new Error(apiError.response.data.message)
                }
                else if (apiError.request) {
                    throw new Error("Error de conexion");
                }
                else {
                    throw new Error("Error desconocido");
                }
    }

}