import { useEffect } from "react";
import { Paciente } from "./Paciente"

export const ListadoPacientes = ({pacientes,  setPaciente, eliminarPaciente}) => {
    
    //imprimir nuevo paciente cada que se agregue un nuevo paciente
/*     useEffect(() => {
        if(pacientes.length > 0){
            console.log('nuevo paciente');
        }
    }, [pacientes]); */

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            
            {pacientes.length >= 1 ?
            <> 
            <h2 className='font-black text-3xl text-center'>Listado de pacientes</h2>
            <p className='text-xl m-5 mb-10 text-center '>
                Administra tus {pacientes.length} 
                <span className='text-indigo-600 font-bold '> Pacientes y citas</span>
            </p>
            {pacientes.map((pacientes)  => 
            (<Paciente pacientes={pacientes}
            key={pacientes.id} 
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />         
            ))}
            
            </>
            :
            <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            </>
            }
            
            
            
        </div>
    )
}