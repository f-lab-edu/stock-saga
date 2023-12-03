type NewsItemProps = {
  params: {
    id: number
  }
}

function NewsItem({ params }: NewsItemProps) {
  return <div>NewsItem page {params.id}</div>
}

export default NewsItem
