import { createClient } from "@supabase/supabase-js";
import React from "react";
import { StyledRegisterVideo } from './styles';

//whiteboarding
//custom Hook

function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return{
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm(){
            setValues({});
        }
    };
}

const PROJECT_URL = "https://izrnsenyrmcrxkzqcwvd.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cm5zZW55cm1jcnhrenFjd3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NzQ0MjcsImV4cCI6MTk4NDA1MDQyN30.N6OneJqz7em3JJxcUFTFikEuNwyvCD9WdrxD74b3hMI";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "", url:"www.youtube.com/watch?v=QsqatJxAUtk"}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        //contrato entre  o frontend e o backend
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: "jogos",
                        })
                        .then((oqueveio) => {
                            console.log(oqueveio)
                        })
                        .catch((err) => {
                            console.log(err)
                        })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button 
                                type="button" 
                                className="close-modal" 
                                onClick={() => 
                                setFormVisivel(false)}>
                            X
                            </button>
                            <input 
                                placeholder="Título do vídeo" 
                                name="titulo" value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}/>

                            <input
                                placeholder="URL" 
                                name="url" 
                                value={formCadastro.values.url} 
                                onChange={formCadastro.handleChange}/>

                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}

// [X] Falta o botão para adicionar
// [X] Modal
// -> [X] Precisamos controlar o state
// -> Formulário em si