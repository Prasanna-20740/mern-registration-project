import "./App.css";

function App() {
  return (
    <div className="container">

      <h1>Registration Form</h1>

      <form
        action="http://localhost:5000/register"
        method="POST"
      >

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          required
        />

        <input
          type="text"
          name="rollNo"
          placeholder="Enter Roll No"
          required
        />

        <input
          type="text"
          name="class"
          placeholder="Enter Class"
          required
        />

        <input
          type="text"
          name="schoolname"
          placeholder="Enter School Name"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />

        <textarea
          name="address"
          placeholder="Enter Address"
          required
        ></textarea>

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default App;