import { Heading } from "../components/heading"
import { Input } from "../components/input/input"
export const LoginPage = () =>{
    return (
        <>
        <Heading text="Login"/>
        <form action="">
       
        <Input InputPlaceholder={'Username'} InputType={'text'}/>
        <br/>
        <Input InputPlaceholder={'E-mail'} InputType={'text'}/>
        <br/>
        <Input InputPlaceholder={'Password'} InputType={'password'}/>
        <br/>
        <button>Submit</button>
    </form>
    </>
    )
}