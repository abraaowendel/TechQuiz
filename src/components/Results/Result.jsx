import * as C from "./styles"
import { useContext } from "react";
import { Context } from "../../contexts/Context";

const Result = () => {
    const { state , dispatch, setData, fetchData} = useContext(Context);
    return (
        <C.Main>
            <C.BtnRestart onClick={() => {
                dispatch({type: "RESTART"})
                setData("")
                fetchData()
            }}>
                Reeniciar
            </C.BtnRestart>
            <C.Result>
            <C.Title>
                SUA PONTUAÇÃO
            </C.Title>
            <C.Mistakes mistakes={state.hits}>
                {state.hits}/20
            </C.Mistakes>
            </C.Result>
        </C.Main>
    );
}
 
export default Result;