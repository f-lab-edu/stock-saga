type EquityProps = {
  params: {
    id: number
  }
}

function Equity({ params }: EquityProps) {
  return <div>Equity page {params.id}</div>
}

export default Equity
