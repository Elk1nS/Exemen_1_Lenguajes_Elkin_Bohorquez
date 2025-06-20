import * as Yup from 'yup';
import { RoleModel } from "../../core/models/role.model";


export const roleInitialValues: RoleModel = {
    name: "",
    description: ""
};

export const roleValidationSchema: Yup.ObjectSchema<RoleModel> = Yup.object({
    name: Yup.string()
            .required("El nombre es requerido")
            .min(3, "El nombre debe tener al menos 3 caracteres.")
            .max(100, "El nombre debe tener menos de 100 caracteres"),
    description: Yup.string()
            .required("Descripcion de Cargo")
            .min(5, "La descripcion debe tener un minimo 5 caracteres")
            .max(200, "La descripcion debe tener un maximo de 200 caracteres"),
});