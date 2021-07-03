import React, { useState, useEffect } from 'react'
import { Form, Table } from '../styles'
import api from '../services/api'
import { Link } from 'react-router-dom'

interface ICadastro {
  ano: string;
  sede: string;
  campeao: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const [eventos, setEventos] = useState<ICadastro[]>([])
  const [ano, setAno] = useState('')
  const [sede, setSede] = useState('')
  const [campeao, setCampeao] = useState('')

  useEffect(() => {
    api.get('events').then(response => setEventos(response.data))
  }, [])
  console.log(eventos)


  async function handleAddEventos(event: any) {
    event.preventDefault()

    let id = ''

    const novoEvento = {
      ano,
      sede,
      campeao,
      id
    }
    console.log('Novo evento', novoEvento)

    await api.post('/worldcup', novoEvento)
    setEventos([...eventos, novoEvento])
    console.log(eventos)
    setAno('')
    setSede('')
    setCampeao('')
  }

  async function handleDelete(id: string) {
    await api.delete(`/worldcup/${id}`)
    setEventos(eventos.filter(evento => evento.id !== id))

  }

  useEffect(() => {
    api.get('/worldcup').then(response => setEventos(response.data))
  }, [])

  return (
    <>
      <Form onSubmit={handleAddEventos}>
        <input type='text' name='ano' value={ano} onChange={e => setAno(e.target.value)} placeholder='Ano da Copa Mundo' />
        <input type='text' name='Sede' value={sede} onChange={e => setSede(e.target.value)} placeholder='Sede da Copa do Mundo' />
        <input type='text' name='campeo' value={campeao} onChange={e => setCampeao(e.target.value)} placeholder='Campeo Mundial' />
        <button type="submit">Salvar</button>
      </Form>

      <Table>
        <thead>
          <tr>
            <td>Ano</td>
            <td>Sede</td>
            <td>Campeão</td>
          </tr>
        </thead>
        <tbody>
          {eventos.map( evento =>
            <tr key={evento.id}>
            <td>{evento.ano}</td>
            <td>{evento.sede}</td>
            <td>{evento.campeao}</td>
            <td><button><Link key='Alterar' to={`/alterar/${evento.id}`}>alterar</Link></button></td>
            <td><button onClick ={() => handleDelete(evento.id)}>excluir</button></td>
            <td><button><Link key='Detalhes' to={`/detalhes/${evento.id}`}>Detalhes</Link></button></td>
          </tr>
          )}
        </tbody>
      </Table>
    </>
  )
}

export default Dashboard



