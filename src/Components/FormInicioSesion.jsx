import React from 'react'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { Avatar, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './InicioSesion.css'

import axios from 'axios';


function FormularioInicioSesion() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }

    const usuario = { id: '12345'}

    const [alerta, setAlerta] = React.useState("success")
    const [mensaje, setMensaje] = React.useState("Bienvenido")

    const enviarForm = async (data) => {
        // console.log(usuario)
        // console.log(data)
        try {
            const respuesta = await peticion()
            console.log(data)
            console.log(respuesta)
            if (data.nombreUsuario == respuesta.nombre && data.contraUsuario == respuesta.password) {
                console.log("Usuario correcto")
                setOpen(true)
                iniciarSesion()
            } else {
                console.log("Usuario incorrecto")
                setAlerta("error")
                setMensaje("Usuario o contraseña incorrectos")
                setOpen(true)
            }
        } catch (error) {
            throw error
        }
        // console.log(data)
        // iniciarSesion()
    }

    const peticion = async () => {
        try {
            const respuesta = await axios.get('http://localhost:4567/api/clientes/getById/',usuario)
            return respuesta.data
        } catch (error) {
            throw error
        }
    }

    const iniciarSesion = () => {
        navigate('/inicio')
    }

    return (
        <>


            <h1 id='bienvenida'>Bienvenido al sistema de veterinaria</h1>
            <form id='formInicio' onSubmit={handleSubmit(enviarForm)}>

                <Avatar
                    alt="Logo Veterinaria"
                    src="/src/img/logo.jpeg"
                    sx={{ width: 100, height: 100 }}
                />
                <h2>Inicio de Sesión</h2>

                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                    <TextField {...register("nombreUsuario", { required: 'Ingrese un usuario.' })} label="Nombre de usuario" variant="standard" />
                </Box>
                <p role='alert'>{errors.nombreUsuario?.message}</p>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <HttpsIcon sx={{ mr: 1, my: 0.5 }} />
                    <TextField {...register("contraUsuario", { required: 'Ingrese una contraseña', minLength: { value: 5, message: 'La contraseña debe de ser de 5 o mas caracteres.' } })} label="Contraseña" variant="standard" type='password' />
                </Box>
                <p role='alert'>{errors.contraUsuario?.message}</p>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Button variant="contained" id='btnInicioSesion' type='submit' >
                        Ingresar
                    </Button>
                </Box>
                <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
                    <Alert severity={alerta} >{mensaje}</Alert>
                </Snackbar>
            </form>
        </>
    )
}

export default FormularioInicioSesion;