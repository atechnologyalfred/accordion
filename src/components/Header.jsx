
export default function Header () {
  const num = ['Keeper', 'List', 'Directory']
  const random =  Math.floor(Math.random () * 3 )
  const keeper = num[random]
  return (
    <div className = "header ">
      <h1>The {keeper} APP</h1>
      <p>write out your resolutions for 2025</p>
    </div>
  )
}