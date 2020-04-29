import React from "react"
import axios from "axios"
const qs = require("qs")

function Oppurtunities() {

    const [val, setVal] = React.useState({
        fullName: "",
        email: "",
        number: "",
        about: ""
    });

    const [finalVal, setIt] = React.useState("Apply for your dream job today")
    const [fade, setFade] = React.useState("")
    const [afterFade, setAfterFade] = React.useState("")
    const [required, setReq] = React.useState("")

    function handleClick() {

        const selected1 = document.getElementById("dropdown")
        const role = selected1.options[selected1.selectedIndex].text

        const selected2 = document.getElementById("most-like")
        const pos = selected2.options[selected2.selectedIndex].text

        const { fullName, email, number, about } = val
        if (fullName === "" || email === "" || number === "" || about === "") {
            setReq("Input all the required fields")
        }

        else {

            const details = {
                fullName,
                email,
                number,
                role,
                pos,
                about
            }
            axios.post("http://localhost:5000/form", qs.stringify(details)).then(res => {
                if (res) {

                    setVal({
                        fullName: "",
                        email: "",
                        number: "",
                        about: ""
                    })
                    setIt("Thank you for applying, we will get back to you soon")
                    setFade("fadep")
                    setAfterFade("after")
                    setReq("")
                }
                else
                {
                    console.log("NO")
                    setReq("Server error, try again later")
                }
            })
        }
    }
    function handleChange(event) {
        const { name, value } = event.target;

        setVal(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    return (
        <div>
            <div className="oppContainer">
                <h1>Find the best oppurtunity waiting for you</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipiipisci dicta iste modi, distinctio impedit fugit maxime voluptatem.</p>
            </div>
            <div className="job">
                <h3>{finalVal}</h3>
            </div>

            <form className={fade} onSubmit={(e) => { e.preventDefault() }}>
                <input name="fullName" value={val.fullName} onChange={handleChange} type="text" placeholder="Your Name (Required)" />
                <input name="email" value={val.email} onChange={handleChange} type="email" placeholder="Your Email (Required)" />
                <input name="number" value={val.number} onChange={handleChange} type="text" placeholder="Your Phone Number (Required)" />
                <div class="rightTab1">
                    <label htmlFor="which">What is your current role?</label>
                    <div id="which">
                        <select id="dropdown" name="currentPos" class="dropdown">
                            <option disabled value>Select an option</option>
                            <option value="student">Student</option>
                            <option value="job">Full Time Job</option>
                            <option value="remote-job">Remote Job</option>
                            <option value="intern">Intern</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div class="rowTab">
                    <div class="labels">
                        <label htmlFor="most-like">Which position would you like to apply for? </label>
                    </div>
                    <div class="rightTab">
                        <select id="most-like" name="mostLike" class="dropdown">
                            <option disabled defaultValue value>Select an option</option>
                            <option value="front-end">Front-end</option>
                            <option value="fullstack">Fullstack</option>
                            <option value="projectManager">Project Manager</option>
                            <option value="javaDeveloper">Java Developer</option>
                            <option value="artificialintelligenceExpert">AI expert</option>
                        </select>
                    </div>
                </div>
                <div >
                    <textarea name="about" value={val.about} onChange={handleChange} id="" cols="30" placeholder="Explain a bit about yourself (Required)" rows="5" ></textarea>
                </div>
                <div >
                    <p id="required"> {required} </p>
                </div>

                <div className="subBtn">
                    <button type="submit" onClick={handleClick} > Submit</button>
                </div>

            </form>
            <div className={afterFade}>
            </div>
        </div>
    )
}
export default Oppurtunities