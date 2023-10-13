import './App.css'

function App() {

  const HendleAddUser = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const User = {
      name, email
    }
    console.log(User)
    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
         'content-Type': 'application/json',
     },
      body: JSON.stringify(User)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
          alert("this item is addedd")
        }
        from.reset()
      })

  }

  return (
    <>
      <h1>Client side</h1>
      <form onSubmit={HendleAddUser}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="User ADD" />
      </form>
    </>
  )
}

export default App
