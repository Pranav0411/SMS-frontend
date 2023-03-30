import { Button, Container } from 'reactstrap';
import Signup from './signup';
import Login from './login';
import Base from './base';
import { useNavigate } from 'react-router-dom';
import TeacherComp from './TeacherComp';
const Home = () => {

    let navigate = useNavigate();

    const HandleLogin = () => {
        navigate("/login");

    }

    const handleSignup = () => {
        let path = "./signup";
        navigate(path);


    }

    return (

        <Base>
            <div margin="20px">
        
                <Container className="text-center">
                    <Button color="light" onClick={handleSignup}> Sign Up </Button>
                <Button  color="dark" className="ms-2" onClick={HandleLogin}> Login </Button>
                </Container>
                
                <TeacherComp />
            </div>
        </Base>
       
        
        )


}
export default Home;