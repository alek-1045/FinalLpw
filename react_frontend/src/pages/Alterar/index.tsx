import React, { useState, useEffect } from 'react'
import { Form } from '../styles'
import api from '../services/api'
import { Link, useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router'


interface ICadastro {
  ano: string;
  sede: string;
  campeao: string;
  id: string;
}

interface IParams{
  id: string;
}

const Alterar: React.FC = () => {
  const hist = useHistory()
  const [copa ,setCopa] = useState<ICadastro | null>(null)
  const [ano, setAno] = useState('')
  const [sede, setSede] = useState('')
  const [campeao, setCampeao] = useState('')
  const {params} = useRouteMatch<IParams>()

  useEffect(() => {
    api.get(`/worldcup/${params.id}`).then(response => {
        console.log(response.data)
        setCopa(response.data);
    });
  }, [params.id]);

  async function handleAddEventos(event: any) {
    event.preventDefault()

    let id = params.id

    const novoEvento = {
      ano,
      sede,
      campeao,
      id
    }
    console.log('Novo evento', novoEvento)

    await api.put(`/worldcup/${params.id}`, novoEvento)
    setCopa(novoEvento)
    setAno('')
    setSede('')
    setCampeao('')
    hist.push('/')
  }

  return (
    <>
      <Link key='Voltar' to='/' >voltar</Link>
      <Form onSubmit={handleAddEventos}>
        <input type='text' name='ano' value={ano} onChange={e => setAno(e.target.value)} placeholder='Ano da Copa Mundo' />
        <input type='text' name='Sede' value={sede} onChange={e => setSede(e.target.value)} placeholder='Sede da Copa do Mundo' />
        <input type='text' name='campeo' value={campeao} onChange={e => setCampeao(e.target.value)} placeholder='Campeo Mundial' />
        <button type="submit">Alterar</button>
      </Form>
    </>
  )
}

export default Alterar
