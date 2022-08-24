import * as C from "./styles"
import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Context } from "../contexts/Context";

const App =  () => {
  const { data, state } = useContext(Context);
  return (
    <C.Container>
        <C.Header>
          <C.Logo>TECH QUIZ</C.Logo>
        </C.Header>

        {!data && 
          <C.Loading>Loading...</C.Loading>
        }

        {data && state.current <= 20 &&
          <C.Main>
            <C.Title>{state.current + 1}º {data[state.current].question}</C.Title>
            <C.Answers>
                <Card title="A" answers={data[state.current].answers.answer_a} name="answer_a"/>
                <Card title="B" answers={data[state.current].answers.answer_b} name="answer_b"/>
                <Card title="C" answers={data[state.current].answers.answer_c} name="answer_c"/>
                <Card title="D" answers={data[state.current].answers.answer_d} name="answer_d"/>
                <Card title="E" answers={data[state.current].answers.answer_e} name="answer_e"/>
                <Card title="F" answers={data[state.current].answers.answer_f} name="answer_f"/>
            </C.Answers>
          </C.Main>
        }
    </C.Container>
  );
}
 
export default App;
