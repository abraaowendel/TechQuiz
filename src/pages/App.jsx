import * as C from "./styles"
import { useContext, useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Context } from "../contexts/Context";

const App =  () => {
  const { data, current } = useContext(Context);
  
  return (
    <C.Container>
        <C.Header>
          <C.Logo>TECH QUIZ</C.Logo>
        </C.Header>
        {data && current <= 20 &&
          <C.Main>
            <C.Title>{data[current].question}</C.Title>
            <C.Answers>
                <Card title="A" answers={data[current].answers.answer_a}/>
                <Card title="B" answers={data[current].answers.answer_b}/>
                <Card title="C" answers={data[current].answers.answer_c}/>
                <Card title="D" answers={data[current].answers.answer_d}/>
                <Card title="E" answers={data[current].answers.answer_e}/>
                <Card title="F" answers={data[current].answers.answer_f}/>
            </C.Answers>
          </C.Main>
        }
    </C.Container>
  );
}
 
export default App;
