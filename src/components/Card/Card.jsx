import { useContext } from "react";
import { Context } from "../../contexts/Context";
import * as C from "./styles"

export const Card = (props) => {
    const {data, handleCompare} = useContext(Context);

    return (
        <>
        {props.answers !== null && 
            <C.Item onClick={() => handleCompare(props.title)}>
                <C.Title translate="no">{props.title}</C.Title>
                <C.Alternative>{props.answers}</C.Alternative>
            </C.Item>
        }
        </>
       
       
    );
}