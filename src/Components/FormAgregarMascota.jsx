import React from 'react';

import TextField from '@mui/material/TextField'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import AppBar from './AppBar';
import { Snackbar, Alert } from '@mui/material';

import './AgregarMascota.css'
import Fab from '@mui/material/Fab'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function FormAgregarMascota() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    const [alerta, setAlerta] = React.useState("success")
    const [mensaje, setMensaje] = React.useState("Mascota Agregada")

    const regresar = () => {
        navigate('/inicio')
    }

    const enviarForm = (data) => {
        alert(data.nombreMascota)
        setOpen(true)
        navigate('/inicio')
    }

    return (
        <>
            <Box>
                <AppBar index="Agregar mascota" />
            </Box>
            <Box sx={{ marginTop: 2, marginLeft: -100 }}>
                <Fab color="inherit" aria-label="Atras" onClick={regresar}>
                    <ArrowBackIcon />
                </Fab>
            </Box>
            <form onSubmit={handleSubmit(enviarForm)}>
                <fieldset id='formMascota'>
                    <legend id='legendMascota'>Mascota</legend>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <DriveFileRenameOutlineIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField
                            id="nombreMascota"
                            {...register("nombreMascota", { required: 'Ingrese un nombre.' })}
                            label="Nombre de la mascota"
                            variant="standard" fullWidth />
                    </Box>
                    <p role='alert'>{errors.nombreMascota?.message}</p>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PetsIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField
                            id="tipoMascota"
                            {...register("tipoMascota", { required: 'Ingrese un tipo de mascota.' })}
                            label="Tipo de mascota"
                            variant="standard"
                            placeholder='Perro, gato, hasmter...'
                            fullWidth />
                    </Box>
                    <p role='alert'>{errors.tipoMascota?.message}</p>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <LocalHospitalIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField
                            id="motivo"
                            {...register("motivo", { required: 'Ingrese un motivo de visita.' })}
                            multiline
                            label="Padecimiento/Motivo de visita"
                            variant="standard"
                            placeholder='Malestar, Vacuna, Cita...'
                            fullWidth />
                    </Box>
                    <p role='alert'>{errors.motivo?.message}</p>
                </fieldset>

                <fieldset id='formDueno'>
                    <legend id='legendDueno'>Dueño</legend>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PersonIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField
                            id="nombreDueno"
                            {...register("nombreDueno", { required: 'Ingrese el nombre del dueño.' })}
                            label="Nombre del dueño"
                            variant="standard"
                            fullWidth />
                    </Box>
                    <p role='alert'>{errors.nombreDueno?.message}</p>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <PhoneIcon sx={{ mr: 1, my: 0.5 }} />
                        <TextField id="telefono"
                            {...register("telefono", {
                                required: 'Ingrese un numero de telefono.',
                                maxLength: { value: 10, message: 'Numero de telefono incorrecto.' },
                                pattern: { value: /^[0-9]*$/, message: 'Ingrese solo números' }
                            })}
                            label="Telefono de contacto" variant="standard"
                            fullWidth />
                    </Box>
                    <p role='alert'>{errors.telefono?.message}</p>
                </fieldset>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 3 }}>
                    <Button variant="contained" id='btnInicioSesion' type='submit' size='large'>
                        Agregar
                    </Button>
                </Box>
            </form>

            <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
                <Alert severity={alerta} >{mensaje}</Alert>
            </Snackbar>

        </>
    )
}
export default FormAgregarMascota;