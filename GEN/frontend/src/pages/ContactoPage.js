import React, { useState } from 'react';
import axios from "axios";
import '../../src/styles/components/pages/Contacto.css'


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }

    return (
        <main className="holder">
            <div className="columna left">
                <h2>Contacto</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="nom">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="nom">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />

                    </p>
                    <p>
                        <label for="nom">Correo</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>

                    <p>
                        <label for="mensaje">Comentarios</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    {sending ? <p>Enviando..</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="acciones"><input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="columna right" >
                <img src="img/11.jpeg" width="550px" />
            </div>

        </main>
    );
}
export default ContactoPage;