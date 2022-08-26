import { useContext } from "react";
import { Context } from "../../contexts/Context";
import * as C from "./styles"

export const Card = (props) => {
    const {rightOrWrong} = useContext(Context);
    return (
        <>
            {props.answers !== null && 
                <C.Item onClick={() => rightOrWrong(props.name)}>
                    <C.Title translate="no">{props.title}</C.Title>
                    <C.Alternative>{props.answers}</C.Alternative>
                </C.Item>
            }
        </>
    );
}