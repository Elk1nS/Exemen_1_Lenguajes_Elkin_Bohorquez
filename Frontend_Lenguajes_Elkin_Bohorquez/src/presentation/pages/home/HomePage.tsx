import { Globe, UserCheck2, Users } from "lucide-react"
import { Title } from "../../componentes/shared/Title"
import { Dashboard } from "../../componentes/home/Dashboard"
import { Loader } from "../../componentes/shared/Loader"
import { useStatistics } from "../../hooks/useStatistics"

export const HomePage = () => {

  const { data, isLoading } = useStatistics();

  if (isLoading) {
    return <Loader />
  }

  console.log(data)


  return (
    <div>
      <Title text="Pagina de Inicio" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Dashboard
          title="Paises"
          to="/countries/create"
          countValue={data?.data?.countriesCount || 0}
          icon={<Globe size={48} />}
        />

        <Dashboard
          title="Personas"
          to="/persons/create"
          countValue={data?.data?.personsCount || 0}
          icon={<Users size={48} />}
        />

        <Dashboard
          title="Roles"
          to="/roles/create"
          countValue={data?.data?.rolesCount || 0}
          icon={<UserCheck2 size={48} />}
        />

      </div>

    </div>
  )
}
