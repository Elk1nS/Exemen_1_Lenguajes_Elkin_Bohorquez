

export const getPaginationRolesAction = async (page = 1, pageSize = 10, searchTerm = ""): Promise<ApiResponse<PageResponse<RoleResponse>>> => {
    try {

        const { data } = await personsApi
        .get<ApiResponse<PageResponse<RoleResponse>>>(`/roles`, {
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