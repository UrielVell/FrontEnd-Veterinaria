import DataTable from "react-data-table-component";
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Tabla({opcionEditar, opcionEliminar, }) {

    const columns = [
        {
            name: 'Mascota',
            selector: row => row.nombreMascota,
        },
        {
            name: 'Tipo',
            selector: row => row.tipoMascota,
        },
        {
            name: 'Motivo',
            selector: row => row.motivo,
        },
        {
            name: 'Dueño',
            selector: row => row.nombreDueno,
        },
        {
            name: 'Telefono',
            selector: row => row.telefono,
        },
        {
            name: 'Acciones',
            cell: row =>(
               <>
                <IconButton aria-label="editar" color="primary" onClick={()=> opcionEditar(row)}>
                  <EditIcon/>
                </IconButton>
                <IconButton aria-label="editar" color="error" onClick={()=> opcionEliminar(row)}>
                  <DeleteIcon/>
                </IconButton>
                
               </>
            )
        }
    ]

    const data = [{
        id: 1,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 2,
        nombreMascota: 'fio',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 3,
        nombreMascota: 'dodo',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 4,
        nombreMascota: 'oso',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 5,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 6,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 7,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 8,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 9,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 10,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },{
        id: 11,
        nombreMascota: 'max',
        tipoMascota: 'perro',
        motivo: 'vacuna',
        nombreDueno: 'uriel',
        telefono: '2281971217'
    },
    
    ]


    return (
        <>
            <DataTable columns={columns} data={data} pagination conditionalRowStyles={[
        {
          when: row => true,
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
      ]}/>
        </>
    )

} export default Tabla;