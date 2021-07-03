import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouteMatch } from "react-router"
import api from '../services/api'
import { Table } from '../styles'
import { Link } from 'react-router-dom'

interface ICadastro {
  ano: string;
  sede: string;
  campeao: string;
  id: string;
}

interface IParams{
  id: string;
}

const Detalhes: React.FC = () => {
  const [copa ,setCopa] = useState<ICadastro | null>(null)
  const {params} = useRouteMatch<IParams>()

  useEffect(() => {
    api.get(`/worldcup/${params.id}`).then(response => {
        console.log(response.data)
        setCopa(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Link key='Voltar' to='/'>voltar</Link>
      <Table>
        <thead>
          <tr>
            <td>Ano Da Copa</td>
            <td>Sede Da Copa</td>
            <td>Campeão</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{copa?.ano}</td>
            <td>{copa?.sede}</td>
            <td>{copa?.campeao}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Detalhes
