import { Container } from "./styles"

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 13.000</td>
            <td>Desenvolvimento</td>
            <td>21/01/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1300</td>
            <td>Casa</td>
            <td>15/01/2022</td>
          </tr>

          <tr>
            <td>Sushi</td>
            <td className="withdraw">- R$ 52</td>
            <td>Alimentação</td>
            <td>21/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}