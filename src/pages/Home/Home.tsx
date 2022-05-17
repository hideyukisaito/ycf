import classNames from 'classnames'

const Home: React.FC = () => {
  return (
    <main className={classNames(
      'flex', 'flex-col', 'justify-center', 'items-center',
      'w-screen', 'h-screen',
      'show',
    )}>
      <div className={classNames(
        'w-full', 'h-screen',
        "bg-[url('/images/hero.jpg')]", 'bg-cover', 'bg-bottom'
      )}></div>
    </main>
  )
}

export default Home
