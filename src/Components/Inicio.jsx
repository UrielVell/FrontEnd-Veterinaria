import { Box, Fab, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AppBar from "./AppBar";
import Tabla from "./Tabla";
import DialogoEditar from './DialogEditar'
import TextField from '@mui/material/TextField'

import { useForm } from 'react-hook-form'

import './Inicio.css'

import { useNavigate } from 'react-router-dom';
import React from "react";

function Inicio() {
    const navigate = useNavigate()

    const [filaSeleccionada, setFilaSeleccionada] = React.useState({
        id: null,
        nombreMascota: null,
        tipoMascota: null,
        motivo: null,
        nombreDueno: null,
        telefono: null,
      });

    const { register, handleSubmit, formState: { errors } } = useForm()

    const irAgregar = () => {
        navigate('/agregarMascota')
    }

    const [open, setOpen] = React.useState(false)
    const abrir = () => {
        setOpen(true)
    }
    const cerrar = () => {
        setOpen(false)
    }

    const editar = (datosFila) => {
        setFilaSeleccionada(datosFila)
        console.log("Fila actualizada:", filaSeleccionada);
        abrir()
       
    }

    return (
        <>
            <AppBar index="¡Bienvenido!" />

            <Box>
                <Tabla opcionEditar={editar}></Tabla>
            </Box>

            <Box sx={{ paddingTop: 3, width: 50, alignContent: 'end' }}>
                <Tooltip title="Agregar una mascota" placement="top">
                    <Fab color="success" aria-label="add" onClick={irAgregar}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
                <Dialog open={open} onClose={cerrar}>
                    <DialogTitle>
                        Editar Información
                    </DialogTitle>
                    <DialogContent>
                        <>
                            <TextField
                                id="id"
                                {...register("id",)}
                                label="id"
                                variant="standard" fullWidth
                                disabled
                                value={filaSeleccionada ? filaSeleccionada.id : ''} 
                                />
                            <TextField
                                id="nombreMascota"
                                {...register("nombreMascota", { required: 'Ingrese un nombre.' })}
                                label="Nombre de la mascota"
                                variant="standard" fullWidth
                                value={filaSeleccionada ? filaSeleccionada.nombreMascota : ''} 
                                onChange={(e) => setValue("nombreMascota", e.target.value)} />
                            <TextField
                                id="tipoMascota"
                                {...register("tipoMascota", { required: 'Ingrese un tipo de mascota.' })}
                                label="Tipo de Mascota"
                                variant="standard" fullWidth
                                value={filaSeleccionada ? filaSeleccionada.tipoMascota : ''}  />
                            <TextField
                                id="motivo"
                                {...register("motivo", { required: 'Ingrese un motivo de visita.' })}
                                multiline
                                label="Padecimiento/Motivo de visita"
                                variant="standard"
                                fullWidth
                                value={filaSeleccionada ? filaSeleccionada.motivo : ''} />
                            <TextField
                                id="nombreDueno"
                                {...register("nombreDueno", { required: 'Ingrese el nombre del dueño.' })}
                                label="Nombre del dueño"
                                variant="standard"
                                fullWidth
                                value={filaSeleccionada ? filaSeleccionada.nombreDueno : ''}  />
                            <TextField id="telefono"
                                {...register("telefono", {
                                    required: 'Ingrese un numero de telefono.',
                                    maxLength: { value: 10, message: 'Numero de telefono incorrecto.' },
                                    pattern: { value: /^[0-9]*$/, message: 'Ingrese solo números' }
                                })}
                                label="Telefono de contacto" variant="standard"
                                fullWidth
                                value={filaSeleccionada ? filaSeleccionada.telefono : ''}  />
                        </>
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={cerrar}>
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>

        </>
    )
} export default Inicio;