import AddCard from './AddCard'
import Card from './Card'
import CardHeader from './CardHeader'

const Column = () => {
  return (
    <li>
      <div>
        <div className="bg-neutral-focus p-3 rounded-lg">
          <CardHeader />
          <div className="mt-5 space-y-2">
            <Card />
            <Card />
            <Card />
          </div>
          <AddCard />
        </div>
      </div>
    </li>
  )
}

export default Column
